import React from 'react';
import Image from '../Images/index';

export default function SmartShop() {
  return (
    <div className=" container max-w-7xl mx-auto ">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-[900px] card bg-base-300 rounded-box place-items-center">
          {/* HP */}
          <div className="mockup-phone w-[232px] h-[456px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                {' '}
                <Image
                  //  className="relative w-[50px] lg:w-auto h-[20px]"
                  className="relative w-full h-full"
                  alt="broiler1.png"
                  src="/images/SmartShop/hp1.2.png"
                />
              </div>
            </div>
          </div>
          <div>
            <h1> AI-powered disease diagnosis</h1>
            <p>
              ChickFarm&apos;s menghilangkan kekhawatiran terkait kesehatan
              ayam. Ayam Anda dapat didiagnosis penyakit secara instan melalui
              analisis berbasis kecerdasan buatan pada tinja kawanan ayam.
              Dengan begitu, Anda dapat menyampaikan selamat tinggal pada
              tagihan dokter hewan yang mahal dan mengurangi risiko kehilangan
              ayam yang berharga!
            </p>
          </div>
        </div>
        <div className="grid flex-grow h-[600px] card bg-base-300 rounded-box place-items-center">
          <Image
            //  className="relative w-[50px] lg:w-auto h-[20px]"
            className="relative w-[300px] h-[500px]"
            alt="broiler1.png"
            src="/images/SmartShop/hp1.2.png"
          />
        </div>
        <div className="grid flex-grow h-[600px] card bg-base-300 rounded-box place-items-center">
          <Image
            //  className="relative w-[50px] lg:w-auto h-[20px]"
            className="relative w-[300px] h-[500px]"
            alt="broiler1.png"
            src="/images/SmartShop/hp1.3.png"
          />
        </div>
      </div>
    </div>
  );
}
