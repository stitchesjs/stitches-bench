import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { buttonStyles, buttonVariants } from '../utils/buttonStyles';
import { styled } from '../utils/stitches-react.config';

const Button = styled('button', {
  ...(buttonStyles as any),
  ...(buttonVariants as any),
});

const Test: React.FunctionComponent<TestComponentProps> = ({ testIndex }: TestComponentProps) => {
  const colors = ['red', 'blue'];
  const sizes = ['1', '2'];

  const randomColor = Math.floor(Math.random() * colors.length);
  const randomSize = Math.floor(Math.random() * sizes.length);
  const variants = {
    variant: colors[randomColor],
    size: sizes[randomSize],
  };
  return <Button {...variants}>testing</Button>;
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={10} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <Button>we mount the button outside the test to make sure we're not clocking any mount time</Button>
      </div>
    </>
  );
};

export default StitchesTest;
