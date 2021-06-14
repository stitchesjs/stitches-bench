import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-theme/stitches-react">Stitches React</Link>
        </li>
        <li>
          <Link href="create-theme/stitches-react-v019">Stitches React v0.1.9</Link>
        </li>
      </ul>
    </div>
  );
}
