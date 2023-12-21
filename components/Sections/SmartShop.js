import React from 'react';
import Image from '../Images/index';

export default function SmartShop() {
  return (
    <div className=" container max-w-7xl mx-auto mt-10">
      <div>
        <h1 className="text-3xl font-extrabold px-5">Fitur Aplikasi</h1>
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-[900px] card  rounded-box place-items-center">
          {/* HP */}
          <div className="mockup-phone w-[232px] h-[456px]">
            <div className=""></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                {' '}
                <Image
                  className="relative w-[220px] h-[445px] mr-[110px] mb-[90px]"
                  alt="broiler1.png"
                  src="/images/SmartShop/hp1.1.png"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold px-10">
              AI-powered disease diagnosis
            </h1>
            <p className="mt-3 font-medium text-gray-600 px-10">
              ChickFarm&apos;s menghilangkan kekhawatiran terkait kesehatan
              ayam. Ayam Anda dapat didiagnosis penyakit secara instan melalui
              analisis berbasis kecerdasan buatan pada tinja kawanan ayam.
              Dengan begitu, Anda dapat menyampaikan selamat tinggal pada
              tagihan dokter hewan yang mahal dan mengurangi risiko kehilangan
              ayam yang berharga!
            </p>
          </div>
        </div>
        <div className="grid flex-grow h-[900px] card  rounded-box place-items-center">
          {/* HP */}
          <div className="mockup-phone w-[232px] h-[456px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                {' '}
                <Image
                  className="relative w-[220px] h-[490px] mr-[110px] mb-[135px]"
                  alt="broiler1.png"
                  src="/images/SmartShop/hp1.2.png"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold px-10">
              Location-based farmer network
            </h1>
            <p className="mt-3 font-medium text-gray-600 px-10">
              Temukan apa yang Anda butuhkan dengan cepat! Peta interaktif
              ChickFarm menempatkan pasokan peternakan, informasi ahli, dan
              bantuan terkini di ujung jari Anda. Sambutlah era beternak ayam
              yang lebih cerdas, terhubung, dan bebas stres!
            </p>
          </div>
        </div>
        <div className="grid flex-grow h-[900px] card  rounded-box place-items-center">
          {/* HP */}
          <div className="mockup-phone w-[232px] h-[456px]">
            <div className=""></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                {' '}
                <Image
                  className="relative w-[220px] h-[445px] mr-[110px] mb-[90px]"
                  alt="broiler1.png"
                  src="/images/SmartShop/hp1.3.png"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold px-10">
              E-commerce platform for livestock needs
            </h1>
            <p className="mt-3 font-medium text-gray-600 px-10">
              ChickFarm menghubungkan Anda dengan jaringan peternak ayam lokal
              dan pemasok peralatan yang terpercaya. Dapatkan kemudahan dalam
              membeli dan menjual segala kebutuhan peternakan Anda, langsung
              dari ponsel Anda. Ucapkan selamat datang kepada kemudahan,
              kolaborasi, dan koneksi yang kuat di dunia beternak ayam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
