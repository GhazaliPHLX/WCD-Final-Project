import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import logo from './assets/Logo.png';
import pfp from './assets/gojo.jpg';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const landingLinks = [
    { href: 'home', label: 'Beranda' },
    { href: 'about', label: 'Tentang Kami' },
    { href: 'services', label: 'Layanan' },
    { href: 'panduan', label: 'Panduan' },
  ];

  const appLinks = [
    { to: '/User', label: 'Dashboard' },
    { to: '/riwayat', label: 'Riwayat' },
    { to: '/rutin', label: 'Langganan' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-black">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="hidden md:inline">PilahPraktis</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {isLandingPage
              ? landingLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    className="px-3 py-2 text-sm text-black hover:bg-accent hover:text-white rounded cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))
              : appLinks.map((link) => (
                  <button
                    key={link.to}
                    onClick={() => navigate(link.to)}
                    className="px-3 py-2 text-sm text-black hover:bg-accent hover:text-white rounded"
                  >
                    {link.label}
                  </button>
                ))}

            {/* Auth */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setShowDropdown((p) => !p)} className="flex items-center gap-2">
                  <img src={pfp} alt="avatar" className="w-8 h-8 rounded-full border" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg p-4 z-50">
                    <div className="flex justify-center">
                      <img src={pfp} alt="avatar" className="w-12 h-12 rounded-full border" />
                    </div>
                    <p className="text-sm text-gray-700 text-center mt-2">Halo, {user.username}</p>
                    <button
                      onClick={logout}
                      className="w-full mt-3 flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-red-400 text-black rounded"
                    >
                      <FiLogOut className="text-lg" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/Login')}
                className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
              >
                Sign Up
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded hover:bg-accent hover:text-white"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white">
          {(isLandingPage ? landingLinks : appLinks).map((link) =>
            isLandingPage ? (
              <Link
                key={link.label}
                to={link.href}
                spy
                smooth
                offset={-80}
                duration={500}
                className="block py-2 text-sm hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.to}
                onClick={() => {
                  navigate(link.to);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-sm hover:bg-gray-100 rounded"
              >
                {link.label}
              </button>
            )
          )}

          <div className="mt-3 border-t pt-2">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={pfp} alt="avatar" className="w-8 h-8 rounded-full border" />
                  <span className="text-sm">{user.username}</span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className=" mt-2 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                >
                  <FiLogOut className="text-base" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate('/Login');
                  setIsOpen(false);
                }}
                className="w-full mt-2 bg-primary-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
