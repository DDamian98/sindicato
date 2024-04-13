'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardNoticiaDetail = () => {
    const [noticiaData, setNoticiaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Noticia!A:D";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                // Obtén todos los registros menos el encabezado
                const registros = data.values.slice(1);

                // Selecciona los tres últimos elementos y luego inviértelos
                const ultimasTresNoticias = registros.slice(-5).reverse().map((row) => ({
                    Imagen: row[0],
                    Titulo: row[1],
                    Descripcion: row[2],
                    Fecha: row[3],
                }));

                setNoticiaData(ultimasTresNoticias);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="grid gap-4 hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-gray-400 my-4">
            <div className="bg-bgprimary">
                <h2 className="text-xl font-bold p-4 border-b-2 text-white">NOTICIAS RECIENTES</h2>
            </div>
            {noticiaData.map((noticia, index) => (
                <Card
                    key={index}
                    Imagen={noticia.Imagen}
                    Titulo={noticia.Titulo}
                    Descripcion={noticia.Descripcion}
                    Fecha={noticia.Fecha}
                />
            ))}
        </div>
    );
};

const Card = ({ Imagen, Titulo, Descripcion, Fecha }) => {
    return (
        <div className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-300">
            {/* Fecha */}
            <div className="flex-shrink-0">
                <span className="block text-sm font-medium text-gray-500">{Fecha}</span>
            </div>

            {/* Imagen */}
            <div className="w-20 h-20 relative mx-4 flex-shrink-0">
                <Image src={Imagen} alt={Titulo} layout="fill" objectFit="cover" className="rounded-md" />
            </div>

            {/* Título */}
            <div className="flex-grow">
                <h3 className="text-md font-semibold text-gray-800">{Titulo}</h3>
            </div>

            {/* Botón Leer Más */}
            <a href="#" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/80 transition-colors duration-300">
                LEER MÁS
            </a>
        </div>

    );
};

export default CardNoticiaDetail;
