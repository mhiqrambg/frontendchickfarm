import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const data = {
    list_nav: [
      { id: 1, title: 'Beranda', href: '#home', isSelected: true },
      { id: 2, title: 'Tentang kami', href: '#about' },
      { id: 3, title: 'Layanan', href: '#layanan' },
      { id: 4, title: 'Blog & Artikel', href: '#artikel' },

      // { id: 4, title: 'Home', href: 'home' },
    ],
  };

  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <Image src="/images/header/logo2.png" width="95" height="97" />
            {/* <p className="self-center text-xl font-bold whitespace-nowrap dark:text-white text-amber-700">
              Chick<span>Farm</span>
            </p> */}
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white dark:text-white bg-amber-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Hubungi kami
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setShow(!show)}
            >
              <span className="sr-only">Open main menu</span>
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
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 absolute md:static top-16 bg-white left-0`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 border md:border-none">
              {data.list_nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`block py-2 pr-4 pl-3 rounded ${
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