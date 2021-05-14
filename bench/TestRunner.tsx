import React, { Profiler, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { createId } from '../bench/utils/createId';
import { TestResults } from './TestResults';

/** The localStorage object that stores our tests between runs */
export type TestInfo = {
  /** The unique id for this test */
  testId: string;
  /** How many times should we iterate on the test case? */
  N: number;
  /** How many times to run the test */
  numberOfRuns: number;
  /** run index as key -> SampleResult */
  results: Record<number, RunResult>;
};

/** The results from one individual sample run */
type RunResult = {
  /** Sample size */
  N: number;
  /** First run time */
  firstIteration: IterationTime;
  /** Last run time */
  lastIteration: IterationTime;
  /** Average run time */
  meanIteration: IterationTime;
  /** Median run time */
  medianIteration: IterationTime;
};

type IterationTime = {
  /** Maps to actualDuration, which counts React's built in memoization */
  withMemoization: number;
  /** Maps to baseDuration, which is what would happen if the entire tree needs to be re-rendered */
  noMemoization: number;
};

/**
 * This information will be passed to the TestComponent during each run
 * so it can make changes to itself across different tests (like testIndex % 2 type logic)
 */
export type TestComponentProps = {
  testIndex: number;
};

/** This component runs a single run of the test, from 0...N */
const TestAndRefresh = ({
  runIndex,
  testInfo,
  TestComponent,
}: {
  runIndex: number;
  testInfo: TestInfo;
  TestComponent: React.FunctionComponent<TestComponentProps>;
}) => {
  /** Stores individual results in an array until the test is done and we can crunch them */
  const iterationResults: Array<{ actualDuration: number; baseDuration: number }> = [];

  useEffect(() => {
    if (iterationResults.length !== testInfo.N) {
      throw new Error(`Did not calculate N: ${testInfo.N} results (received ${iterationResults.length} results)`);
    }

    const firstIteration = iterationResults[0];
    const lastIteration = iterationResults[iterationResults.length - 1];

    // Build the median
    const sortedResultsMemoization = iterationResults.sort((a, b) => (a.actualDuration > b.actualDuration ? 1 : -1));
    const sortedResultsNoMemoization = iterationResults.sort((a, b) => (a.baseDuration > b.baseDuration ? 1 : -1));
    const medianIteration: IterationTime = {
      withMemoization: sortedResultsMemoization[Math.round(sortedResultsMemoization.length / 2)].actualDuration,
      noMemoization: sortedResultsNoMemoization[Math.round(sortedResultsNoMemoization.length / 2)].baseDuration,
    };

    // Build the mean
    let memoizationSum = 0;
    let noMemoizationSum = 0;
    for (let i = 0; i < iterationResults.length; i++) {
      memoizationSum += iterationResults[i].actualDuration;
      noMemoizationSum += iterationResults[i].baseDuration;
    }
    const meanIteration: IterationTime = {
      withMemoization: memoizationSum / iterationResults.length,
      noMemoization: noMemoizationSum / iterationResults.length,
    };

    // Pop the results into the testInfo:
    testInfo.results[runIndex] = {
      N: testInfo.N,
      firstIteration: { withMemoization: firstIteration.actualDuration, noMemoization: firstIteration.baseDuration },
      lastIteration: { withMemoization: lastIteration.actualDuration, noMemoization: lastIteration.baseDuration },
      medianIteration,
      meanIteration,
    };
    // Serialize the testInfo and pop it back onto localStorage:
    localStorage.setItem(testInfo.testId, JSON.stringify(testInfo));

    // Refresh for the next test or finish the test
    if (runIndex === testInfo.numberOfRuns - 1) {
      // This was the last test, redirect to the results
      window.location.href = `?testId=${testInfo.testId}&finished=true`;
    } else {
      // We have more sample sizes to run, +1 the sampleIndex
      window.location.href = `?testId=${testInfo.testId}&runIndex=${runIndex + 1}`;
    }
  });

  function handleProfilerData(
    id: string, // the "id" prop of the Profiler tree that has just committed
    phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: number, // time spent rendering the committed update
    baseDuration: number, // estimated time to render the entire subtree without memoization
    startTime: number, // when React began rendering this update
    commitTime: number, // when React committed this update
    interactions: Set<any> // the Set of interactions belonging to this update
  ) {
    // console.log(`actual: ${actualDuration}, base: ${baseDuration}`);
    iterationResults.push({ actualDuration, baseDuration });
  }

  /** An array with the size of N */
  const loops = [...Array(testInfo.N)];

  return (
    <>
      {loops.map((value, index) => (
        <Profiler key={index} id={testInfo.testId} onRender={handleProfilerData}>
          <TestComponent testIndex={index} />
        </Profiler>
      ))}
    </>
  );
};

export const TestRunner = ({
  TestComponent,
  numberOfRuns,
  iterationN,
}: {
  /** The component to run inside the profiler */
  TestComponent: React.FunctionComponent;
  /** How many times to run the entire test (to check for variance) */
  numberOfRuns: number;
  /** The N number of iterations to run inside each test */
  iterationN: number;
}) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const router = useRouter();
  const { testId, runIndex, finished } = router.query;

  if (!testId) {
    // No test is running yet
    const newTestId = createId();

    const testInfo: TestInfo = {
      testId: newTestId,
      N: iterationN,
      numberOfRuns,
      results: {},
    };
    localStorage.setItem(newTestId, JSON.stringify(testInfo));

    return <a href={`?testId=${newTestId}&runIndex=0`}>start test</a>;
  } else if (typeof testId === 'string') {
    // We are mid-test or finished with a test
    if (typeof finished !== 'undefined') {
      // Test is done!
      const testInfo: TestInfo = JSON.parse(localStorage.getItem(testId));

      return <TestResults testInfo={testInfo} />;
    } else {
      // We have a test to run

      /** Which sample size are we doing this run? */
      const runNumber = typeof runIndex === 'string' ? Number(runIndex) : 0;
      try {
        /** Grab the test info cache from storage */
        const testInfo: TestInfo = JSON.parse(localStorage.getItem(testId));
        return <TestAndRefresh runIndex={runNumber} testInfo={testInfo} TestComponent={TestComponent} />;
      } catch (err) {
        console.error(err);
      }
    }
  }

  return null;
};
