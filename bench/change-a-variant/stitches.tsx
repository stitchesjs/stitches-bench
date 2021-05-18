import React, { Profiler } from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { css } from '../utils/stitches.config';

const button = css('button', {
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

const Test: React.FunctionComponent<TestComponentProps> = ({ testIndex }: TestComponentProps) => {
  let variantValue: 'blue' | 'red' = testIndex % 2 === 0 ? 'blue' : 'red';
  return <button className={button({ color: variantValue })}>testing</button>;
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <button className={button()}>
          we mount the button outside the test to make sure we're not clocking any mount time
        </button>
      </div>
    </>
  );
};

export default StitchesTest;
