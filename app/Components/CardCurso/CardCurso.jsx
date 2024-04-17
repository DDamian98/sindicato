'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardCurso = ({ tipoSeleccionado }) => {
  const [capacitacionData, setCapacitacionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
        const range = "Capacitacion!A:D";
        const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
        );
        const data = await response.json();

        const capacitacion = data.values
          .slice(1)
          .map((row) => ({
            nombre: row[0],
            imagen: row[1],
            descripcion: row[2],
            tipo: row[3],
          }))
          .filter((capacitacion) =>
            tipoSeleccionado === "Todos"
              ? true
              : capacitacion.tipo === tipoSeleccionado
          );

        setCapacitacionData(capacitacion);
      } catch (error) {
        console.error("Error al obtener los datos del Excel:", error);
      }
    };

    fetchData();
  }, [tipoSeleccionado]);

  return (
    <div className="max-w-7xl mx-auto text-secundary pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {capacitacionData.map((capacitacion, index) => (
          <CursoCard
            key={index}
            nombre={capacitacion.nombre}
            imagen={capacitacion.imagen}
            descripcion={capacitacion.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

const CursoCard = ({ nombre, imagen, descripcion }) => {
  return (
    <div className="relative rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl h-96">
      <div className="w-full h-96">
        <Image
          src={imagen}
          alt="titulo"
          width={384}
          height={384}
          objectPosition="center"
          objectFit="cover"
          className="transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
        <h2 className=" text-xl font-bold">{nombre}</h2>
        <p className="text-sm mt-2">
          {descripcion.length > 100 ? descripcion.substring(0, 100) + "..." : descripcion}
        </p>
        <div className="flex items-center justify-center pt-4 flex-wrap gap-2">
          <button className="p-1 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 ease-in-out">
            ¡Regístrate!
          </button>
          <button className="p-1 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 ease-in-out">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCurso;
