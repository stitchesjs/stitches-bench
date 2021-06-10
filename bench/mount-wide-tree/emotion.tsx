import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import styled from '@emotion/styled';

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const getColor = (color) => {
    switch (color) {
      case 0:
        return '#14171A';
      case 1:
        return '#AAB8C2';
      case 2:
        return '#E6ECF0';
      case 3:
        return '#FFAD1F';
      case 4:
        return '#F45D22';
      case 5:
        return '#E0245E';
      default:
        return 'transparent';
    }
  };

  const View = styled.div`
    align-items: stretch;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
    min-height: 0;
    min-width: 0;
  `;

  const Box = styled(View)`
    align-self: flex-start;
    flex-direction: ${(props: any) => (props.layout === 'column' ? 'column' : 'row')};
    padding: ${(props: any) => (props.outer ? '4px' : '0')};
    ${(props: any) => props.fixed && 'height:6px;'}
    ${(props: any) => props.fixed && 'width:6px;'}
	background-color: ${(props: any) => getColor(props.color)};
  `;

  return <Tree breadth={6} depth={3} id={0} wrap={2} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
