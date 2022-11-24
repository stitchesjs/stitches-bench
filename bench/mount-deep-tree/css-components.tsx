import { styled } from '@phntms/css-components';
import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';

import css from "../utils/styles.module.css";

export const createBox = () => {
  const View = styled("div", {
    css: css.view,
  });

  const Box = styled(View, {
    css: css.box,
    variants: {
      layout: {
        row: css.box_layout_row,
        column: css.box_layout_column,
      },
      outer: {
        true: css.box_outer_true,
      },
      fixed: {
        true: css.box_fixed_true,
      },
      color: {
        0: css.box_color_0,
        1: css.box_color_1,
        2: css.box_color_2,
        3: css.box_color_3,
        4: css.box_color_4,
        5: css.box_color_5,
      }
    }
  });

  return Box;

}



export const Test = ({ testIndex }: TestComponentProps) => {
  const Box = createBox();

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
