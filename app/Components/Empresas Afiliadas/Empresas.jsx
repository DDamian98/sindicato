'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";

const Empresas = () => {
  const images = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ];

  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsToShow(1);
      } else if (width < 1024) {
        setItemsToShow(2);
      } else if (width < 1280) {
        setItemsToShow(6);
      } else {
        setItemsToShow(6);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={1500}
      stopOnHover={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      centerMode={true}
      centerSlidePercentage={100 / itemsToShow}
      swipeable={true}
      className="bg-gray-200 p-2 md:p-4 lg:p-6 xl:p-8 max-w-7xl mx-auto pb-8" 
      >
      {images.map((image, index) => (
        <div key={index} className="flex items-center justify-center ">
          <div className='w-24 h-24 md:h-32 lg:h-40 xl:h-48 rounded-lg'>
          <Image src={image} alt={`Slide ${index}`} className="" width={96} height={96}/> 
          </div>
      </div>
      ))}
    </Carousel>
  );
};

export default Empresas;
