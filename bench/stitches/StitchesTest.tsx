import React, { Profiler } from 'react';
import { createCss } from '@stitches/react';
import { handleProfilerData } from '../handleProfilerData';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {},
});

const Button = styled('button', { backgroundColor: 'blue' });

export const StitchesTest = () => {
  return (
    <Profiler id="stitches" onRender={handleProfilerData}>
      {[...Array(5)].map((value, index) => (
        <Button key={index}>button</Button>
      ))}
    </Profiler>
  );
};
