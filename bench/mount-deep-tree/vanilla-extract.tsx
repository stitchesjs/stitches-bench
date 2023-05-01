import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import { color, fixed, layout, padding, view } from './vanilla-extract.css';

export const Test = ({ testIndex }: TestComponentProps) => {
  const Box = (props) => <div className={`${view} ${layout[props.layout || "row"]} ${color[props.color]} ${padding[props.outer]} ${fixed[props.fixed]}`}>{props.children}</div>

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
