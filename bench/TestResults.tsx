import { TestInfo } from './TestRunner';

export const TestResults = ({ testInfo }: { testInfo: TestInfo }) => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            th, td {
              padding: 10px;
            }

            ul {
              margin-top: 20px;
              margin-bottom: 20px;
            }

            li {
              padding: 5px;
            }

            h3 {
              margin-bottom: 5px;
            }
        `,
        }}
      />

      <div>N: {testInfo.N}</div>
      <div>Ran test: {testInfo.numberOfRuns} times</div>

      <ul>
        <h3>Run instructions</h3>
        <li>Check across runs for drastic differences, should be near identical.</li>
        <li>Take first run for most accurate "cold start" results.</li>
      </ul>

      <div>
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

          const alertLastRender = lastIteration > firstIteration * 1.1 ? { color: 'orange' } : undefined;

          return (
            <>
              <h3>Run {runIndex + 1}</h3>
              <table>
                <tr>
                  <th>First render</th>
                  <th style={alertLastRender}>Last render</th>
                  <th>Mean</th>
                  <th>Median</th>
                  <th>Fastest</th>
                  <th>Slowest</th>
                  <th>SD</th>
                </tr>
                <tr>
                  <td>{firstIteration.toFixed(6)}</td>
                  <td style={alertLastRender}>{lastIteration.toFixed(6)}</td>
                  <td>{meanIteration.toFixed(6)}</td>
                  <td>{medianIteration.toFixed(6)}</td>
                  <td>{fastestIteration.toFixed(6)}</td>
                  <td>{slowestIteration.toFixed(6)}</td>
                  <td>{Math.sqrt(variance).toFixed(6)}</td>
                </tr>
              </table>
            </>
          );
        })}
      </div>

      <ul>
        <li>Last render should be about the same or faster than the first render</li>
        <li>
          Standard deviation should only be a few milliseconds or something is causing renders to be wildly different
        </li>
      </ul>
    </div>
  );
};
