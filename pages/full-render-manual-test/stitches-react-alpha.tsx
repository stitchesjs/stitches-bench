import React from 'react';
import { createStyled } from '@stitches/react-alpha';
const { styled } = createStyled({});

const Box = styled('div', {
  display: 'inline-block',
  width: 100,
  height: 100,
  backgroundColor: '$gray400',
  textAlign: 'center',
  lineHeight: 1,
  fontSize: 100,
});

export default function App() {
  return (
    <>
      <h1>Stitches React alpha</h1>
      {Array(1000)
        .fill(1)
        .map((_, i) => (
          <Box css={{ margin: i + 'px' }} key={i}>
            {i}
          </Box>
        ))}
    </>
  );
}
