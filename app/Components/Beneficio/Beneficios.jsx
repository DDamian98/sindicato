'use client'

// Beneficios.js
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const beneficiosData = [
  {
    imageUrl: "images/Beneficio1.png",
    titulo: "Beneficio 1",
    descripcion: "Apoyo en la economía familiar de nuestros compañeros sindicalizados"
  },
  {
    imageUrl: "images/Beneficio2.png",
    titulo: "Beneficio 2",
    descripcion: "Eficientar el tiempo  de búsqueda de productos y servicios, mediante nuestro sistema, que permitirá realizar una solicitud de interés mediante un clic."
  },
  {
    imageUrl: "images/Beneficio3.png",
    titulo: "Beneficio 3",
    descripcion: "Fortalecer a empresas mexicanas para posicionar su marca y mostrar la calidad de productos y servicios."
  },
  {
    imageUrl: "images/Beneficio4.png",
    titulo: "Beneficio 4",
    descripcion: "Colaboración con organizaciones, despachos e instituciones educativas que apoyan en técnicas, herramientas y experiencia para nuestros compañeros sindicalizados."
  }, {
    imageUrl: "images/Beneficio5.png",
    titulo: "Beneficio 2",
    descripcion: "Reforzamos la identidad y satisfacción laboral de nuestros trabajadores con nuestras empresas afiliadas."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mx-auto place-content-center place-items-center">
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
    <Card className="w-60  h-80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg overflow-hidden bg-white">
      <div className="flex flex-col flex-grow place-items-center  p-2">
        <Image src={imageUrl} alt={titulo} className="mb-2 shadow-sm" width={96} height={96} objectFit="cover" />
        <div>
          <p className="text-sm text-center text-gray-700 mt-2">{descripcion}</p>
        </div>
      </div>

    </Card>

  );
};

export default Beneficios;
