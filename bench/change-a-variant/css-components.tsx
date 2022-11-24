import { styled } from '@phntms/css-components';
import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { buttonStyles, buttonInterpolatedVariants } from '../utils/buttonStyles';

import css from "../utils/button.module.css";

const Button = styled('button', {
  css: css.buttonStyles,
  variants: {
    variant: {
      red: css.red,
      blue: css.blue,
    },
    size: {
      '1': css.big,
      '2': css.small,
    }
  }
});

const Test: React.FunctionComponent<TestComponentProps> = ({ testIndex }: TestComponentProps) => {
  return <Button variant={testIndex % 2 === 0 ? 'red' : 'blue'} size={testIndex % 2 === 0 ? '1' : '2'}>testing</Button>;
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
