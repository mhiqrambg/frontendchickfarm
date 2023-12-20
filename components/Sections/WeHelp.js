import React from 'react';
import Image from '../Images/index';

const FeatureCard = ({ imageSrc, title, description }) => (
  <div className="h-[230px] card rounded-box place-items-left">
    <div className="">
      <h1 className="text-3xl font-bold flex">
        <Image
          src={imageSrc}
          className="relative w-[28px] h-[28px] md:w-[40px] md:h-[40px] mr-2 mt-[6px]"
        />

        {title}
      </h1>
    </div>
    <p className="mt-5 font-medium ">{description}</p>
  </div>
);

export default function WeHelp() {
  const features = [
    {
      imageSrc: '/images/WeHelp/inovasi.png',
      title: 'Inovasi',
      description:
        'Chickfarm dengan prinsip keberlanjutan menerapkan teknologi dan metode inovatif dalam perbaikan dan pemeliharaan aplikasi.',
    },
    {
      imageSrc: '/images/WeHelp/fleksibel.png',
      title: 'Fleksibel',
      description:
        'Aplikasi kami dapat diakses dari berbagai lokasi dan dapat diunduh secara gratis dengan ukuran file yang ringan.',
    },
    {
      imageSrc: '/images/WeHelp/Keamanan.png',
      title: 'Keamanan',
      description:
        'Kami menjaga privasi pengguna dengan mengelola data secara aman, hanya dapat diakses oleh pengguna yang sah.',
    },
    {
      imageSrc: '/images/WeHelp/pembayaran.png',
      title: 'Transaksi',
      description:
        'Pembayaran bisa dilakukan melalui E-Wallet, m-banking, Virtual Account, dan COD (Cash on Delivery).',
    },
  ];

  return (
    <div data-theme="light">
      <div className="container max-w-7xl mx-auto p-10 ">
        <div className="pt-10">
          <h1 className="text-3xl font-bold mb-14">
            Kenapa harus aplikasi kami?
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
