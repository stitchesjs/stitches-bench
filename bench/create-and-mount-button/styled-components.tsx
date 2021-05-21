import React, { Profiler } from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import styled from 'styled-components';

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const Button = styled('button')({
    '--test-index': testIndex,
    // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },

    // Custom reset?
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    // Custom
    fontFamily: 'system-ui',
    fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',

    '&:disabled': {
      backgroundColor: 'gray',
      boxShadow: 'inset 0 0 0 1px gray',
      color: 'gray',
      pointerEvents: 'none',
    },

    // Gray
    backgroundColor: 'white',
    boxShadow: 'inset 0 0 0 1px gray',
    color: 'black',

    '&:hover': {
      boxShadow: 'inset 0 0 0 1px gray',
    },

    '&:active': {
      backgroundColor: 'gray',
      boxShadow: 'inset 0 0 0 1px gray',
    },
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px gray, 0 0 0 1px gray',
    },
    '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
      backgroundColor: 'gray',
      boxShadow: 'inset 0 0 0 1px gray',
    },

    // Size 1
    borderRadius: '3px',
    height: '25px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '13px',
    lineHeight: '25px',
  });

  return <Button>testing</Button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
