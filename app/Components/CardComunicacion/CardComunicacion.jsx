'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CardComunicacion = () => {
    const [noticiaData, setNoticiaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Comunicación!A:F";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                const evento = data.values.slice(1).map((row) => ({
                    Codigo: row[0],
                    Imagen: row[1],
                    Titulo: row[2],
                    Descripcion: row[3],
                    Fecha: row[4],
                    Video: row[5],
                }));
                setNoticiaData(evento);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto text-secundary pb-10">
            <div className="flex flex-wrap justify-center gap-8">
                {noticiaData.map((evento, index) => (
                    <Card
                        key={index}
                        Codigo={evento.Codigo}
                        Imagen={evento.Imagen}
                        Titulo={evento.Titulo}
                        Descripcion={evento.Descripcion}
                        Fecha={evento.Fecha}
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ Codigo, Imagen, Titulo, Descripcion, Fecha }) => {
    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="relative w-full h-48">
                <Image src={Imagen} alt="Imagen del Evento" layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800">{Titulo}</h2>
                <p className="text-gray-500 mt-2">
                    <span className="font-medium">Fecha:</span> {Fecha} <br />
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                    {Descripcion}
                </p>
                <div className="flex justify-end  mt-2 ">
                    <a href={`/Comunicacion/${Codigo}`} className="text-xl bg-primary text-white px-4 py-2 w-1/2 text-center rounded-lg font-bold hover:bg-primary/80 transition duration-300">Leer más</a>
                </div>
            </div>

        </div>

    );
};

export default CardComunicacion;
