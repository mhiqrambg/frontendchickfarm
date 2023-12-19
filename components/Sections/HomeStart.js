import React from 'react';
import Image from '../Images/index';

export default function HomeStart() {
  return (
    // <div className="container-h mx-auto mt-10">
    <div className=" px-4">
      <div className="h-screen flex items-center justify-center  max-w-7xl mx-auto">
        <div className="grid grid-cols-2 mt-20 relative">
          <div className="col-span-2 lg:col-span-1">
            <div className="h-full flex items-start justify-center flex-col">
              <p className="text-5xl font-extrabold text-amber-700">
                chick<span className=" text-black">Farm's</span>
              </p>
              <p className="text-lg font-medium  text-gray-600 mt-7">
                Indonesia's chicken farming industry is rapidly expanding,{' '}
                <span className="bg-yellow-300">
                  with 3 billion broilers produced in 2022
                </span>
                making it a crucial sector in the country's livestock business.
                There are hundreds of thousands of chicken farmers in Indonesia,
                and ensuring the health and quality of their poultry is a top
                priority.
              </p>
              {/* <button className="rounded-full py-2 px-6 bg-amber-600 hover:bg-amber-700 text-white text-2xl font-medium mt-4">
                Get Started
              </button> */}

              <a href="#playstore" className="mt-7">
                <Image
                  className="relative w-[140px] h-[60px]"
                  src="/images/assets/playstore.svg"
                  alt="playstore"
                />
              </a>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div>
              <Image
                className="relative w-full sm:w-[300px] lg:w-auto h-[450px] max-w-[500px]"
                alt="HomeStart.png"
                src="/images/HomeStart/hp3.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
