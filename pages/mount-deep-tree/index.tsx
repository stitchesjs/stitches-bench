import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="mount-deep-tree/css-components">CSS components</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
