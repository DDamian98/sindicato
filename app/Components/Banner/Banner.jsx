"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
const imageUrls = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  "https://flowbite.com/docs/images/carousel/carousel-5.svg",
];

const Banner = () => {
  return (
    <div className="max-h-screen relative">
      <div className="w-full ">
        <Carousel slideInterval={3000} className="w-full ">
          {/* Mapeo de las URLs de las imágenes */}
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="w-full h-[400px] sm:h-[380px] xl:h-[480px] 2xl:h-[480px] relative ">
              <Image src={imageUrl} alt={`Carousel ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
