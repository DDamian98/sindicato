'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";

const Empresas = () => {
  const [EmpresasAfiliadas, setEmpresasAfiliadas] = useState([]);


  useEffect(() => {
    // Función para obtener los datos del Excel desde la API de Google Sheets
    const fetchData = async () => {
      try {
        const id = '1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0';
        const range = 'EmpresasAfiliadas!A:B';
        const apiKey = 'AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E';
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`);
        const data = await response.json();

        // Omitir la primera fila que contiene los encabezados
        const alianzas = data.values.slice(1).map((row) => ({
          Nombre: row[0], // La primera columna es imageUrl
          Imagen: row[1],   // La segunda columna es nombre
        }));

        setEmpresasAfiliadas(alianzas);
      } catch (error) {
        console.error('Error al obtener los datos del Excel:', error);
      }
    };

    fetchData();
  }, []);

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
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={1000}
      stopOnHover={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      centerMode={true}
      centerSlidePercentage={100 / itemsToShow}
      swipeable={true}
      className="p-4 max-w-7xl pb-8"
    >
      {EmpresasAfiliadas.map((empresa, index) => (
        <CardEmpresas
          key={index}
          nombre={empresa.Nombre}
          imageUrl={empresa.Imagen}
        />
      ))}
    </Carousel>
  );
};
const CardEmpresas = ({ nombre, imageUrl }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className='w-24 h-24 md:h-32 lg:h-40 xl:h-48 rounded-lg flex items-center justify-center'>
        <Image src={imageUrl} alt={nombre} width={96} height={96} />
      </div>
    </div>

  );
};
export default Empresas;
