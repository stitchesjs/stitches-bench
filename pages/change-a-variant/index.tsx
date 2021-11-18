import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-a-variant/stitches-core-v125">Stitches Core v1.2.5</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-core-vc126">Stitches Core v1.2.6-canary.0</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-react-v125">Stitches React v1.2.5</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-react-vc126">Stitches React v1.2.6-canary.0</Link>
        </li>
        <li>
          <Link href="change-a-variant/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="change-a-variant/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
