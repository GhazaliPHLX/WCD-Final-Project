import React, { useState } from 'react'; 
import pfp from './assets/gojo.jpg';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // pastikan path sesuai
import { useRef } from 'react';
import { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About Us' },
    { href: 'services', label: 'Services' },
    { href: 'contact', label: 'Contact' },
  ];
  //Dropdown Icon card
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white text-black shadow-lg rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-0">  
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-black">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <span className="hidden md:inline">PilahPraktis</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="py-2 px-3 rounded-md text-sm text-black font-normal hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}

            {/* Login / Profile */}
            {user ? (
              <>
                        <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={pfp}
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-4 z-50">
                <div className='flex justify-center'>
                  <img src={pfp}
                  alt="avatar"
                  className="w-12 h-12 rounded-full border" />
                </div>
                

                <p className="text-sm text-gray-700 mb-2 text-center pt-2">Halo, {user.username}.</p>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded bg-white hover:bg-gray-100 text-black"
                >
                  <FiLogOut className="text-lg" />
                  Logout
                </button>
              </div>
            )}
          </div>
              </>
            ) : (
              <button
                onClick={() => navigate('/Login')}
                className="ml-4 py-2 px-4 rounded-md bg-primary-500 text-white font-medium hover:bg-primary/90 transition"
              >
                Sign Up
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center pr-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
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
              className="block py-2 px-3 rounded-md text-base font-medium text-primary hover:text-white hover:bg-accent transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Login/Logout di Mobile */}
          <div className="px-4 pt-2">
            {user ? (
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/avatar.svg"
                    alt="avatar"
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="text-sm font-medium">{user.username}</span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="py-1 px-3 bg-red-500 text-white rounded-md text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate('/Login');
                  setIsOpen(false);
                }}
                className="w-full py-2 px-4 mt-2 bg-primary text-white rounded-md font-semibold"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
