import React from 'react';

export function Tree({ breadth, depth, id, wrap, box: Box }) {
  let result = (
    <Box color={id % 3} layout={depth % 2 === 0 ? 'column' : 'row'} outer>
      {depth === 0 && <Box color={(id % 3) + 3} fixed />}
      {depth !== 0 &&
        Array.from({ length: breadth }).map((el, i) => (
          <Tree breadth={breadth} depth={depth - 1} id={i} key={i} wrap={wrap} box={Box} />
        ))}
    </Box>
  );

  for (let i = 0; i < wrap; i++) {
    result = <Box>{result}</Box>;
  }

  return result;
}
