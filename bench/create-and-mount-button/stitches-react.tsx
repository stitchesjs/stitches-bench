import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { styled } from '../utils/stitches-react.config';
import { styles } from './button';

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const Button = styled('button', {
    '--test-index': testIndex,
    ...styles,
  });

  return <Button>testing</Button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
