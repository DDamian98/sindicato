'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardCurso = ({ tipoSeleccionado }) => {
  const [capacitacionData, setCapacitacionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
        const range = "Capacitacion!A:E";
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
            enlace: row[4],

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
  const [selectedCurso, setSelectedCurso] = useState(null);
  const handleOpenModal = (curso) => {
    setSelectedCurso(curso);
  };

  const handleCloseModal = () => {
    setSelectedCurso(null);
  };
  return (
    <div className="max-w-7xl mx-auto text-secundary pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {capacitacionData.map((capacitacion, index) => (
          <CursoCard
            key={index}
            nombre={capacitacion.nombre}
            imagen={capacitacion.imagen}
            descripcion={capacitacion.descripcion}
            onOpenModal={handleOpenModal}
            enlace={capacitacion.enlace}
            curso={capacitacion}


          />
        ))}
      </div>
      {selectedCurso && (
        <Modal isOpen={Boolean(selectedCurso)} onClose={handleCloseModal}>
          <div className=" flex  flex-wrap w-full h-96 p-4 items-center justify-center ">
            <h2 className=" text-center text-xl font-bold mb-4">{selectedCurso.nombre}</h2>
            <Image src={selectedCurso.imagen} alt={selectedCurso.nombre} width={300} height={200} objectFit="cover" />
            <p className="mt-4 ">{selectedCurso.descripcion}</p>
            <a href={selectedCurso.enlace} target="blank__" className="px-4 py-2 my-4 w-1/2 text-center bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out">Registrate</a>
          </div>
        </Modal>
      )}
    </div>
  );
};

const CursoCard = ({ nombre, imagen, descripcion, onOpenModal, enlace, curso }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl h-96">
      <div className="w-full h-96 flex-grow">
        <Image
          src={imagen}
          alt="titulo"
          width={384}
          height={384}
          objectPosition="center"
          objectFit="cover"
          className="transition duration-500 ease-in-out w-96 h-48"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-gray-900 to-transparent text-white">
        <h2 className=" text-lg font-bold">{nombre}</h2>
        <p className="text-sm mt-3">
          {descripcion.length > 100 ? `${descripcion.substring(0, 100)}...` : descripcion}
        </p>
        <div className="flex items-center justify-center pt-5 flex-wrap gap-3">
          <button onClick={() => onOpenModal(curso)} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Ver más
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{nombre}</h2>
          <Image src={imagen} alt={nombre} width={384} height={384} objectFit="cover" />
          <p className="mt-4">{descripcion}</p>
        </div>
      </Modal>
    </div>

  );
};
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // El fondo oscurecido que cubre toda la ventana
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative bg-white p-5 rounded-lg shadow-lg max-w-xl w-full m-4 z-50 overflow-y-auto">
        <button onClick={onClose} className="absolute top-0 right-0 text-2xl font-bold p-2">X</button>
        {children}
      </div>
    </div>
  );
};
export default CardCurso;
