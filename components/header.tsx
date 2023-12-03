import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div>
        <Link href='/test'>Test</Link>
      </div>
      <div>
        <Link href='/login'>SignIn</Link>
      </div>
    </>
  );
}
