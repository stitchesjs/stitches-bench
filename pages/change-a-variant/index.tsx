import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-a-variant/css-components">CSS Components</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-react">Stitches React</Link>
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
