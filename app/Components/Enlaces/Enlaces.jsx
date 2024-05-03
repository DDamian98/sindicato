// use client
import React from 'react';
import Image from 'next/image';

const Enlaces = () => {
  return (
    <div className='text-bgprimary grid font-bold py-4'>
      <h2 className='text-2xl pb-4 px-4'>Enlaces de Interés</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center pb-4'>
        {[
          { href: '/Capacitacion', src: '/images2/13.png', alt: 'Capacitación', label: 'Capacitación' },
          { href: '/Noticias', src: '/images2/Noticias.png', alt: 'Noticias', label: 'Noticias' },
          { href: '/Eventos', src: '/images2/7.png', alt: 'Eventos', label: 'Eventos' },
          { href: '/AlianzasEstrategicas', src: '/images2/14.png', alt: 'Servicios', label: 'Alianzas' }
        ].map((enlace, index) => (
          <a key={index} href={enlace.href} className="relative hover:scale-105 hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
            <Image src={enlace.src} width={250} height={250} alt={enlace.alt} className="cursor-pointer" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-end p-4 transition-opacity duration-300 hover:bg-opacity-50">
              <span className="text-white text-lg font-bold">{enlace.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Enlaces;
