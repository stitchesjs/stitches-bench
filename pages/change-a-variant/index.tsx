import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-a-variant/stitches-core">Stitches Core</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="change-a-variant/styled-components">Styled Components</Link>
        </li>
      </ul>
    </div>
  );
}
