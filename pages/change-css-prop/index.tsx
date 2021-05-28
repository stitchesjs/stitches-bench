import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-css-prop/stitches-core">Stitches Core</Link>
        </li>
        <li>
          <Link href="change-css-prop/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="change-css-prop/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="change-css-prop/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
