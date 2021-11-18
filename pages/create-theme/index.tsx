import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-theme/stitches-react-v125">Stitches React v1.2.5</Link>
        </li>
        <li>
          <Link href="create-theme/stitches-react-vc126">Stitches React v1.2.6-canary.0</Link>
        </li>
      </ul>
    </div>
  );
}
