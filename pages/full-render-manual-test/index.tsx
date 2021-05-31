import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="full-render-manual-test/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/styled-components">Styled components</Link>
        </li>
      </ul>
    </div>
  );
}
