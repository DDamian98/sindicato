"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
const imageUrls = [
  "/images2/13.png",
  "/images2/4.png",
  "/images2/14.png",
  "/images2/Noticias.png",
  "/images2/12.png",
];

const Banner = () => {
  return (
    <div className="max-h-screen relative">
      <div className="w-full ">
        <Carousel slideInterval={3000} className="w-full ">
          {/* Mapeo de las URLs de las imágenes */}
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="max-h-screen  h-[400px] max-sm:h-[250px] xl:h-[480px] 2xl:h-[480px] relative ">
              <Image src={imageUrl} alt={`Carousel ${index + 1}`} layout="fill" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
