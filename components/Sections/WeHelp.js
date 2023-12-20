import React from 'react';
import Image from '../Images/index';

export default function WeHelp() {
  return (
    <div data-theme="light">
      <div className="container max-w-7xl mx-auto p-10 ">
        <div className="pt-10">
          <h1 className="text-3xl font-bold mb-14 ">
            Kenapa harus aplikasi kami?
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-[250px] card  rounded-box place-items-left">
            <div>
              <h1 className="text-3xl font-bold flex">
                {' '}
                <Image
                  src="/images/WeHelp/inovasi.png"
                  className="relative w-[28px] h-[28px] mr-2 mt-[6px]"
                />
                Inovasi
              </h1>
            </div>
            <p className="mt-5 font-medium ">
              Chickfarm memegang teguh prinsip keberlanjutan dengan menerapkan
              teknologi dan metode inovatif dalam perbaikan dan pemeliharaan
              aplikasi.
            </p>
          </div>

          <div className="h-[180px] card  rounded-box place-items-left ">
            <div>
              <h1 className="text-3xl font-bold flex">
                {' '}
                <Image
                  src="/images/WeHelp/fleksibel.png"
                  className="relative w-[30px] h-[30px] mr-2 mt-[6px]"
                />
                Fleksibel
              </h1>
            </div>
            <p className="mt-5 font-medium ">
              Aplikasi kami dapat diakses dari berbagai lokasi dan dapat diunduh
              secara gratis dengan ukuran file yang ringan.
            </p>
          </div>

          <div className="h-[180px] card  rounded-box place-items-left">
            <div>
              <h1 className="text-3xl font-bold flex">
                {' '}
                <Image
                  src="/images/WeHelp/Keamanan.png"
                  className="relative w-[28px] h-[28px] mr-2 mt-[6px]"
                />
                Keamanan
              </h1>
            </div>
            <p className="mt-5 font-medium ">
              Kami menjaga privasi pengguna dengan mengelola data secara aman,
              hanya dapat diakses oleh pengguna yang sah
            </p>
          </div>

          <div className="h-[180px] card  rounded-box place-items-left">
            <div>
              <h1 className="text-3xl font-bold flex">
                {' '}
                <Image
                  src="/images/WeHelp/pembayaran.png"
                  className="relative w-[28px] h-[28px] mr-2 mt-[6px]"
                />
                Pembayaran
              </h1>
            </div>
            <p className="mt-5 font-medium ">
              Pembayaran bisa dilakukan melalui E-Wallet, m-banking, Virtual
              Account, dan COD (Cash on Delivery).
            </p>
          </div>
        </div>
      </div>
      <div className="test"></div>
    </div>
  );
}
