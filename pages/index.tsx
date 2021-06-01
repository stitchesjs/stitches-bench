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
        <li>
          <Link href="/create-landing-page">Create landing page</Link>
        </li>
        <li>Change the theme</li>
        <li>
          <Link href="/full-render-manual-test">Full render - manual testing</Link>
        </li>
        <li>
          <Link href="/sierpinski-triangle">Sierpinski Triangle</Link>
        </li>
      </ul>
    </div>
  );
}
