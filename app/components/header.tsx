import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className='p-2'>
        <ul className='flex items-center space-x-2'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/test'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
