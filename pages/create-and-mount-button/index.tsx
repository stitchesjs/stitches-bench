import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-and-mount-button/stitches-core-v125">Stitches Core v0.2.5</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-core-vc126">Stitches Core v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-react-v125">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-react-vc126">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/baseline">Baseline</Link>
        </li>
      </ul>
    </div>
  );
}
