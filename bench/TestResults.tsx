import { TestInfo } from './TestRunner';

export const TestResults = ({ testInfo }: { testInfo: TestInfo }) => {
  return (
    <div>
      <div>N: {testInfo.N}</div>
      <div>Ran test: {testInfo.numberOfRuns} times</div>
      <div>All numbers reported in milliseconds</div>
      <div>Check across runs for variance, should be near identical</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, padding: 20 }}>
        {[...Array(testInfo.numberOfRuns)].map((_val, runIndex) => {
          const {
            firstIteration,
            lastIteration,
            meanIteration,
            medianIteration,
            variance,
            slowestIteration,
            fastestIteration,
          } = testInfo.results[runIndex];

          return (
            <div
              key={runIndex}
              style={{
                backgroundColor: '#eee',
                padding: 20,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div>
                <strong>Run {runIndex + 1}</strong>
              </div>

              <div style={{ paddingTop: 10, paddingBottom: 10, gap: 10, display: 'flex', flexDirection: 'column' }}>
                <div>
                  <strong>First iteration</strong>
                  <div>{firstIteration}</div>
                </div>

                <div>
                  <strong>Last iteration</strong>
                  <div>{lastIteration}</div>
                </div>

                <div>
                  Check: the last iteration should be about the same or faster than the first iteration, or something
                  slowed down as work grew
                </div>
              </div>

              <div style={{ paddingTop: 10, paddingBottom: 10, gap: 10, display: 'flex', flexDirection: 'column' }}>
                <div>
                  <strong>Mean iteration</strong>
                  <div>{meanIteration}</div>
                </div>

                <div>
                  <strong>Median iteration</strong>
                  <div>{medianIteration}</div>
                </div>

                <div>
                  <strong>Fastest iteration</strong>
                  <div>{fastestIteration}</div>
                </div>

                <div>
                  <strong>Slowest iteration</strong>
                  <div>{slowestIteration}</div>
                </div>

                <div>
                  <strong>Variance</strong>
                  <div>{variance}</div>
                </div>

                <div>
                  <strong>Standard deviation</strong>
                  <div>{Math.sqrt(variance)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
