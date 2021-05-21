import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/create-and-mount-button">Create and mount a new button</Link>
        </li>
        <li>
          <Link href="/change-a-variant">Change a variant on a mounted component</Link>
        </li>
        <li>
          <Link href="/change-css-prop">Change a value inside a CSS prop</Link>
        </li>
        <li>Change the theme</li>
        <li>Sample full page</li>
      </ul>
    </div>
  );
}
