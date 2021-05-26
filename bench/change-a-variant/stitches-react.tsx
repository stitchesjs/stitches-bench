import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { styled } from '../utils/stitches-react.config';

const Button = styled('button', {
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
  return <Button color={variantValue}>testing</Button>;
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <Button>we mount the button outside the test to make sure we're not clocking any mount time</Button>
      </div>
    </>
  );
};

export default StitchesTest;
