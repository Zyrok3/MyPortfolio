import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">
          <Link href="/" className="text-white">
            Felix Reder
          </Link>
        </div>
        <ul className="flex space-x-6">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;