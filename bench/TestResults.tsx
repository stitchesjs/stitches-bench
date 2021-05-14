import { TestInfo } from './TestRunner';

export const TestResults = ({ testInfo }: { testInfo: TestInfo }) => {
  return (
    <div>
      <div>N: {testInfo.N}</div>
      <div>Ran test: {testInfo.numberOfRuns} times</div>
      <div>Check across runs for variance, should be near identical</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, padding: 20 }}>
        {[...Array(testInfo.numberOfRuns)].map((_val, runIndex) => {
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
                  <div>No Memo: {testInfo.results[runIndex].firstIteration.noMemoization}</div>
                  <div>Memo: {testInfo.results[runIndex].firstIteration.withMemoization}</div>
                </div>

                <div>
                  <strong>Last iteration</strong>
                  <div>No Memo: {testInfo.results[runIndex].lastIteration.noMemoization}</div>
                  <div>Memo: {testInfo.results[runIndex].lastIteration.withMemoization}</div>
                </div>

                <div>The last iteration should be the same speed as the first iteration</div>
              </div>

              <div style={{ paddingTop: 10, paddingBottom: 10, gap: 10, display: 'flex', flexDirection: 'column' }}>
                <div>
                  <strong>Mean iteration</strong>
                  <div>No Memo: {testInfo.results[runIndex].meanIteration.noMemoization}</div>
                  <div>Memo: {testInfo.results[runIndex].meanIteration.withMemoization}</div>
                </div>

                <div>
                  <strong>Median iteration</strong>
                  <div>No Memo: {testInfo.results[runIndex].medianIteration.noMemoization}</div>
                  <div>Memo: {testInfo.results[runIndex].medianIteration.withMemoization}</div>
                </div>

                <div>If mean iteration is above the median iteration, it means that things slowed down at N grew</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
