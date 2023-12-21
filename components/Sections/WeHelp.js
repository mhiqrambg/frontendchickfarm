import React from 'react';
import Image from '../Images/index';

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
      title: 'Gratis',
      description:
        'Aplikasi kami dapat diakses dari berbagai lokasi dan dapat diunduh secara gratis dengan ukuran file yang ringan.',
    },
    {
      imageSrc: '/images/WeHelp/Keamanan.png',
      title: 'Privasi',
      description:
        'Kami menjaga privasi pengguna dengan mengelola data secara aman, hanya dapat diakses oleh pengguna yang sah.',
    },
    {
      imageSrc: '/images/WeHelp/pembayaran.png',
      title: 'Shop',
      description:
        'Pembayaran bisa dilakukan melalui E-Wallet, m-banking, Virtual Account, dan COD (Cash on Delivery).',
    },
  ];
  const FeatureCard = ({ imageSrc, title, description }) => (
    <div className="h-[260px] card rounded-box place-items-left">
      <div className="">
        <h1 className="text-3xl font-bold flex">
          <Image
            src={imageSrc}
            className="relative w-[34px] h-[34px] md:w-[40px] md:h-[40px] mr-2 "
          />

          {title}
        </h1>
      </div>
      <p className="mt-6 font-medium text-gray-600 pt-">{description}</p>
    </div>
  );

  return (
    <div id="layanan">
      <div className="container max-w-7xl mx-auto  ">
        <div className="pt-10">
          <h1 className="text-5xl font-extrabold  px-5 pt-10">
            Kenapa harus aplikasi kami?
          </h1>
          <p className="font-medium text-gray-600 p-5">
            Kami hadir untuk membantu peternak ayam dalam bisnis.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
