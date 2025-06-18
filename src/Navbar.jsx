import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Mengimpor ikon

const Navbar = () => {
  // State untuk mengontrol buka/tutup menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Daftar menu
  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About Us' },
    { href: 'services', label: 'Services' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white text-black shadow-lg rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4">  
        <div className="flex justify-between items-center h-16">
          
          {/* Logo atau Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">PilahPraktis</a>
          </div>

          {/* Menu untuk Desktop (tersembunyi di mobile) 💻 */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="py-2 px-3 rounded-md text-sm font-medium hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tombol Hamburger untuk Mobile (tersembunyi di desktop) 📱 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Tampilkan ikon close jika menu terbuka, atau ikon bars jika tertutup */}
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {/* Tampilkan block ini jika state isOpen adalah true */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="block py-2 px-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;