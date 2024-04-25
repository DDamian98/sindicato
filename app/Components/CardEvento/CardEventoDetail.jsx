'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardEventoDetail = () => {
    const [noticiaData, setNoticiaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Evento!A:D";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                const noticia = data.values.slice(-5).reverse().map((row) => ({
                    Codigo: row[0],
                    Imagen: row[1],
                    Titulo: row[2],
                    Descripcion: row[3],
                    Fecha: row[4],
                    Enlace: row[5],
                }));
                setNoticiaData(noticia);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid gap-4 hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-gray-400 my-4">
            <div className="bg-bgprimary">
                <h2 className="text-xl font-bold p-4 border-b-2 text-white">PROXIMOS EVENTOS</h2>
            </div>
            {noticiaData.map((noticia, index) => (
                <Card
                    key={index}
                    Imagen={noticia.Imagen}
                    Titulo={noticia.Titulo}
                    Descripcion={noticia.Descripcion}
                    Fecha={noticia.Fecha}
                    Codigo={noticia.Codigo}
                />
            ))}
        </div>
    );
};

const Card = ({ Imagen, Titulo, Descripcion, Fecha, Codigo }) => {
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
            <a href={`/Eventos/${Codigo}`} className="text-md bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/80 transition duration-300">Más detalles</a>

        </div>

    );
};

export default CardEventoDetail;
