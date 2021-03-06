import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-theme/stitches-react-v025">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="create-theme/stitches-react-vc17">Stitches React v1.0.0-canary.17</Link>
        </li>
      </ul>
    </div>
  );
}
