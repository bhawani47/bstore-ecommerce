import { BiMenu, BiMicrophone, BiSearch } from 'react-icons/bi';
import { useTheme } from '../../app/context/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import type { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { useState } from 'react';
import SearchBar from './SearchBar';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link
        to={'/'}
        className="font-bold text-3xl bg-gradient-to-r bg-clip-text text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        }}
      >
        BCart
      </Link>
    </div>
  );
};

const Menu = (): ReactElement => {
  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        <NavLink
          to="#"
          className={({ isActive }) =>
            `relative px-1 transition-colors duration-200 hover:opacity-80 ${
              isActive ? 'text-primary-focus' : 'text-text'
            } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-1/2 after:bg-primary-focus after:transition-all after:duration-300 ${
              isActive ? 'after:w-full' : 'hover:after:w-full'
            }`
          }
        >
          Home
        </NavLink>

        <a
          href="#"
          className="transition-colors duration-200 hover:opacity-80"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          About
        </a>
        <NavLink
          to="/products"
          className="transition-colors duration-200 hover:opacity-80"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Products
        </NavLink>
      </div>
      {/* SearchBAR */}
      <SearchBar />
    </>
  );
};

const ThemeToggle = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}): ReactElement => {
  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="relative flex items-center w-12 h-6 rounded-full border border-border overflow-hidden group transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
        />

        {/* Sliding circle */}
        <div
          className={`absolute top-0.5 left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transform transition-transform duration-500 ease-in-out ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {theme === 'dark' ? (
            <MdOutlineLightMode
              size={14}
              className="text-yellow-400 transition-transform duration-300 group-hover:rotate-12"
            />
          ) : (
            <MdOutlineDarkMode
              size={14}
              className="text-gray-700 transition-transform duration-300 group-hover:rotate-12"
            />
          )}
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
          {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-border bg-bg relative transition-all">
      <Logo />

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Menu />

        {/* Shopping Cart */}
        <div className="relative cursor-pointer group">
          <CgShoppingCart
            size={23}
            className="transition-transform duration-200 group-hover:scale-110"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full hover:bg-indigo-600 transition-colors duration-200 hover:scale-110 transform">
            3
          </button>
        </div>

        {/* Theme Toggle - Perfect Position */}
        <div className="flex items-center">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Login Button */}
        <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 text-white rounded-full hover:shadow-lg transform hover:scale-105">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center gap-3">
        {/* Mobile Theme Toggle */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="p-2 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <BiMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        } fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden transition-all duration-300`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 sm:hidden transition-transform duration-300 ease-in-out`}
        style={{
          backgroundColor: 'var(--color-bg)',
        }}
      >
        {/* Mobile Menu Header */}
        <div
          className="flex items-center justify-between p-5 border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div
            className="font-semibold text-lg"
            style={{ color: 'var(--color-text)' }}
          >
            Menu
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          <div className="flex-1 px-5 py-4 space-y-1">
            {/* Navigation Links */}
            <a
              href="#"
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span
                className="font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                Home
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span
                className="font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                About
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span
                className="font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                Services
              </span>
            </a>

            {/* Divider */}
            <div
              className="my-4 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            ></div>

            {/* Mobile Search */}
            <div className="py-2">
              <div
                className="flex items-center border rounded-lg px-4 py-3 gap-3"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                }}
              >
                <BiSearch
                  size={18}
                  style={{ color: 'var(--color-text-secondary)' }}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 outline-none text-sm"
                  style={{
                    color: 'var(--color-text)',
                    backgroundColor: 'transparent',
                  }}
                />
                <BiMicrophone
                  size={18}
                  style={{ color: 'var(--color-text-secondary)' }}
                />
              </div>
            </div>

            {/* Mobile Cart */}
            <div
              className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-3">
                <CgShoppingCart
                  size={20}
                  style={{ color: 'var(--color-text)' }}
                />
                <span
                  className="font-medium"
                  style={{ color: 'var(--color-text)' }}
                >
                  Shopping Cart
                </span>
              </div>
              <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                3
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div
            className="p-5 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <button
              className="w-full py-3 px-6 bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
