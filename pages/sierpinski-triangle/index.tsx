import Link from 'next/link';
import React from 'react';
import { SierpinskiTriangle } from '../../bench/sierpinski-triangle/stitches-react';

export default function Home() {
  return (
    <div>
      <SierpinskiTriangle />
      <ul>
        <li>
          <Link href="sierpinski-triangle/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="sierpinski-triangle/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="sierpinski-triangle/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
