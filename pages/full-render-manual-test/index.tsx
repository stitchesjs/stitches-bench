import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="full-render-manual-test/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/stitches-react-v019">Stitches React v0.1.9</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/stitches-react-alpha">Stitches React alpha</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
