import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-css-prop/stitches-core-v125">Stitches Core v1.2.5</Link>
        </li>
        <li>
          <Link href="change-css-prop/stitches-core-vc126">Stitches Core v1.2.6-canary.0</Link>
        </li>
        <li>
          <Link href="change-css-prop/stitches-react-v125">Stitches React v1.2.5</Link>
        </li>
        <li>
          <Link href="change-css-prop/stitches-react-vc126">Stitches React v1.2.6-canary.0</Link>
        </li>
        <li>
          <Link href="change-css-prop/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="change-css-prop/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="change-css-prop/baseline">Baseline</Link>
        </li>
      </ul>
    </div>
  );
}
