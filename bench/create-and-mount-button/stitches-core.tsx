import React, { Profiler } from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { css } from '../utils/stitches-core.config';

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const button = css({
    '--test-index': testIndex,
    boxSizing: 'border-box',
    variants: {
      color: {
        red: {
          color: 'red',
        },
        blue: {
          color: 'blue',
        },
      },
    },
  });

  return <button className={button()}>testing</button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
