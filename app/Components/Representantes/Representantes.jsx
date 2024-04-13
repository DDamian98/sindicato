'use client'
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Representantes = () => {
  const [representantesData, setRepresentantesData] = useState([]);

  useEffect(() => {
    // Función para obtener los datos del Excel desde la API de Google Sheets
    const fetchData = async () => {
      try {
        const id = '1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0';
        const range = 'Representates!A:C';
        const apiKey = 'AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E';
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`);
        const data = await response.json();

        // Omitir la primera fila que contiene los encabezados
        const representantes = data.values.slice(1).map((row) => ({
          imageUrl: row[0], // La primera columna es imageUrl
          nombre: row[1],   // La segunda columna es nombre
          cargo: row[2],    // La tercera columna es cargo
        }));

        setRepresentantesData(representantes);
      } catch (error) {
        console.error('Error al obtener los datos del Excel:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="max-w-7xl mx-auto text-secundary pb-10 `${styles.bg}"
    >
      <h2 className="text-3xl font-semibold text-center mb-8 text-secundary">Representantes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {representantesData.map((representante, index) => (
          <RepresentantesCrd
            key={index}
            imageUrl={representante.imageUrl}
            nombre={representante.nombre}
            cargo={representante.cargo}
          />
        ))}
      </div>
    </motion.div>
  );
};

const RepresentantesCrd = ({ imageUrl, nombre, cargo }) => {
  return (
    <Card className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={nombre} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-primary mb-1">{nombre}</h3>
        <span className="text-md text-secondary">{cargo}</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block bg-primary text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-primary-dark transition ease-in-out duration-300">Contactar</a>
      </div>
    </Card>



  );
};

export default Representantes;