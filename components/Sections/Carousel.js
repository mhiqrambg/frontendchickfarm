import React from 'react';
import Image from '../Images/index';

const carouselData = [
  {
    id: 1,
    title: 'Aplikasi Untuk Manajemen Kandang',
    content:
      'Rasakan kemudahan kontrol budidaya peternakanmu melalui smartphone. Agrinis Farm dapat membantu pencatatan proses produksi peternakan Anda dengan mudah dan memantau performa kandang secara akurat untuk meningkatkan hasil panen dan pendapatan.',
    image: {
      src: '/images/carousel/1.jpg',
      alt: 'asd',
    },
  },
  {
    id: 2,
    title: 'The Catalyzer lorem ipsum dolor sit amet',
    content:
      'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
  },

  {
    id: 3,
    title: 'Neptune',
    content:
      'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
  },
  {
    id: 4,
    title: 'Melanchole',
    content:
      'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
  },
];

const Carousel = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className=" px-5 py-24 mx-auto border h-screen items-center  justify-center max-w-7xl ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="font-bold sm:text-5xl text-5xl  title-font mb-4 text-gray-900">
            Kenapa Harus Aplikasi Kami?
          </h1>
        </div>
        <div className="flex flex-wrap mt-20 items-center justify-center  max-w-7xl mx-auto border">
          {carouselData.map((item) => (
            <div
              key={item.id}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
            >
              <h2 className="text-4xl  text-gray-900 font-medium title-font mb-2 ">
                {item.title}
              </h2>
              <p className="leading-relaxed text-base mb-4">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
