'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardNoticia = ({ tipoSeleccionado }) => {
    const [noticiaData, setNoticiaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Noticia!A:F";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                const noticia = data.values.slice(1).reverse().map((row) => ({
                    Codigo: row[0],
                    Imagen: row[1],
                    Titulo: row[2],
                    Descripcion: row[3],
                    Fecha: row[4],
                }));
                setNoticiaData(noticia);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto text-secundary pb-10">
            <div className="flex flex-wrap justify-center gap-8">
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
        </div>
    );
};

const Card = ({ Imagen, Titulo, Descripcion, Fecha, Codigo }) => {
    return (
        <div className="flex max-w-xl bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex-none w-1/2 relative">
                <Image src={Imagen} alt={Titulo} layout="fill" objectFit="cover" className="rounded-l-lg" />
            </div>
            <div className="w-full p-4 md:p-6">
                <h1 className="text-2xl font-bold text-gray-800">{Titulo}</h1>
                <div className="flex items-center mt-4 text-gray-600">
                    <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                    <span className="ml-2">{Fecha}</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                    {Descripcion.length > 100 ? Descripcion.substring(0, 100) + "..." : Descripcion}
                </p>
                <div className="flex justify-end mt-4">
                    <a href={`/Noticias/${Codigo}`} className="text-xl bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/80 transition duration-300">Leer más</a>
                </div>
            </div>
        </div>
    );
};

export default CardNoticia;
