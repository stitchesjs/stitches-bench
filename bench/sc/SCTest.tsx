import React, { Profiler } from 'react';
import styled from 'styled-components';
import { handleProfilerData } from '../handleProfilerData';

// const Button = styled.button`
//   background-color: blue;
// `;

const Button = styled('button')({
  backgroundColor: 'blue',
});

export const SCTest = () => {
  return (
    <Profiler id="sc" onRender={handleProfilerData}>
      {[...Array(5)].map((value, index) => (
        <Button key={index}>button</Button>
      ))}
    </Profiler>
  );
};
