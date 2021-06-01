import React from 'react';
import { TestRunner } from '../TestRunner';
import { interpolatePurples, interpolateBuPu, interpolateRdPu } from 'd3-scale-chromatic';
import { styled } from '../utils/stitches-react.config';

const View = styled('div', {
  alignItems: 'stretch',
  borderWidth: '0',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  margin: '0',
  padding: '0',
  position: 'relative',
  minHeight: '0',
  minWidth: '0',
});

const Dot = styled(View, {
  position: 'absolute',
  cursor: 'pointer',
  width: '0',
  height: '0',
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: '0',
  transform: 'translate(50%, 50%)',
});

const targetSize = 10;

function SierpinskiTriangle({ testIndex, x = 0, y = 0, depth = 0, s: _s = 200 }) {
  let s = _s;

  if (Dot) {
    if (s <= targetSize) {
      let fn;
      switch (depth) {
        case 1:
          fn = interpolatePurples;
          break;
        case 2:
          fn = interpolateBuPu;
          break;
        case 3:
        default:
          fn = interpolateRdPu;
      }

      // introduce randomness to ensure that repeated runs don't produce the same colors
      const color = fn((testIndex * Math.random()) / 20);
      return (
        <Dot
          css={{
            borderBottomColor: color,
            borderRightWidth: `${targetSize / 2}px`,
            borderBottomWidth: `${targetSize / 2}px`,
            borderLeftWidth: `${targetSize / 2}px`,
            marginLeft: `${x - targetSize / 2}px`,
            marginTop: `${y - targetSize / 2}px`,
          }}
        />
      );
    }

    s /= 2;

    return (
      <React.Fragment>
        <SierpinskiTriangle depth={1} testIndex={testIndex} s={s} x={x} y={y - s / 2} />
        <SierpinskiTriangle depth={2} testIndex={testIndex} s={s} x={x - s} y={y + s / 2} />
        <SierpinskiTriangle depth={3} testIndex={testIndex} s={s} x={x + s} y={y + s / 2} />
      </React.Fragment>
    );
  } else {
    return <span style={{ color: 'white' }}>No implementation available</span>;
  }
}

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={SierpinskiTriangle as any} />;
};

export default StitchesTest;
