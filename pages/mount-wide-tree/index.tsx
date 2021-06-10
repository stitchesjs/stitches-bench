import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="mount-wide-tree/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="mount-wide-tree/stitches-react-v019">Stitches React v0.1.9</Link>
        </li>
        <li>
          <Link href="mount-wide-tree/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="mount-wide-tree/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
