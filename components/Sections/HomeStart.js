import React, { useState, useEffect } from 'react';
import Image from '../Images/index';

export default function HomeStart() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev % 3) + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleImages = () => {
    setCurrentImage((prev) => (prev % 3) + 1);
  };

  return (
    <div className="px-9 pt-12">
      <div className="container max-w-7xl mx-auto flex items-center justify-center">
        <div className="grid grid-cols-2 mt-20 relative">
          <div className="col-span-2 lg:col-span-1">
            <div className="h-full flex items-start justify-center flex-col ">
              <p className="text-6xl font-extrabold text-amber-700">
                chick<span className="">Farm&apos;s</span>
              </p>
              <p className="font-medium text-gray-600 mt-7 text-4xl">
                Inovasi untuk Peternak Sukses: Temukan Solusi Terbaik Bersama
                Kami!
              </p>
              <a href="#playstore" className="mt-10">
                <Image
                  className="relative w-[160px] h-[60px]"
                  src="/images/assets/playstore.svg"
                  alt="playstore"
                />
              </a>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-center w-full mb-20 justify-end pt-[56px]">
            <div>
              {currentImage === 1 && (
                <Image
                  className="relative w-full lg:w-auto h-[550px] max-w-[650px]"
                  alt="HomeStart.png"
                  src="/images/HomeStart/hp1.1.png"
                />
              )}
              {currentImage === 2 && (
                <Image
                  className="relative w-full lg:w-auto h-[550px] max-w-[650px]"
                  alt="HomeStart.png"
                  src="/images/HomeStart/hp1.2.png"
                />
              )}
              {currentImage === 3 && (
                <Image
                  className="relative w-full lg:w-auto h-[550px] max-w-[650px]"
                  alt="HomeStart.png"
                  src="/images/HomeStart/hp1.3.png"
                />
              )}
            </div>
            <button
              onClick={toggleImages}
              className="flex items-center justify-center text-white  
              rounded-full ml-60 py-1 px-10 mr-60 font-medium mt-4"
            >
              <svg
                className="w-6 h-6 text-black dark:text-white hover:text-amber-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
