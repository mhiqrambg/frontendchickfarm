import React, { useState, useEffect } from 'react';
import Image from '../Images/index';
import { darkButton } from '../Button/darkthema';

export default function Header() {
  // Check if localStorage is available (client-side)
  const initialTheme =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';

  const [theme, setTheme] = useState(initialTheme);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('theme', theme);
      const localTheme = localStorage.getItem('theme');
      document.querySelector('html').setAttribute('data-theme', localTheme);
    }
  }, [theme]);

  const data = {
    list_nav: [
      { id: 1, title: 'Beranda', href: '#home', isSelected: true },
      { id: 2, title: 'Tentang kami', href: '#about' },
      { id: 3, title: 'Layanan', href: '#layanan' },
      { id: 4, title: 'Blog & Artikel', href: '#artikel' },
    ],
  };

  const [show, setShow] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-10 shadow-sh-header">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <Image
              className="relative w-[140px] h-[60px]"
              src="/images/header/logo1.png"
              alt="bradn-Image"
            />
          </a>
          <div className="flex items-center lg:order-3 py-2">
            {/* TOMBOL DARK MODE */}
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                onChange={handleToggle}
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setShow(!show)}
            >
              <span className="sr-only">Buka daftar menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              show ? 'block' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 absolute md:static top-16 bg-white left-0 mt-5`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0 border md:border-none">
              {data.list_nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`block py-3 pr-4 pl-3 rounded ${
                      item.isSelected ? 'lg:text-amber-700' : 'text-black'
                    } lg:bg-transparent lg:p-0 dark:text-white hover:text-amber-700`}
                    aria-current={item.isSelected ? 'page' : undefined}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
