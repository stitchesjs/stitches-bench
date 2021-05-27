import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { styled } from '../utils/stitches-react.config';
import { buttonStyles } from '../utils/buttonStyles';

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const Button = styled('button', {
    '--test-index': testIndex,
    ...(buttonStyles as any),
  });

  return <Button>testing</Button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={10} iterationN={100} TestComponent={Test} />;
};

export default StitchesTest;
