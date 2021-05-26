import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { LandingPage } from './landing-page';

const Test = ({ testIndex }: TestComponentProps) => {
  return <LandingPage />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
