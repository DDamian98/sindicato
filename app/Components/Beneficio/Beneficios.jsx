'use client'

// Beneficios.js
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const beneficiosData = [
  {
    imageUrl: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    titulo: "Beneficio 1",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
  },
  {
    imageUrl: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    titulo: "Beneficio 2",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
  },
  {
    imageUrl: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    titulo: "Beneficio 3",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
  },
  {
    imageUrl: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    titulo: "Beneficio 4",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
  }
];

const Beneficios = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="max-w-7xl mx-auto text-secundary pb-10"
    >
      <div className="container mx-auto text-secundary">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficiosData.map((beneficio, index) => (
            <BeneficioCard
              key={index}
              imageUrl={beneficio.imageUrl}
              titulo={beneficio.titulo}
              descripcion={beneficio.descripcion}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BeneficioCard = ({ imageUrl, titulo, descripcion }) => {
  return (
    <Card className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg overflow-hidden bg-white">
      <div className="flex flex-col items-center p-4">
        <Image src={imageUrl} alt={titulo} className="mb-2 rounded-full shadow-sm" width={96} height={96} objectFit="cover" />
        <div>
          <div className="text-lg font-semibold text-center text-primary">{titulo}</div>
          <p className="text-sm text-center text-gray-700 mt-2">{descripcion}</p>
        </div>
      </div>

    </Card>

  );
};

export default Beneficios;
