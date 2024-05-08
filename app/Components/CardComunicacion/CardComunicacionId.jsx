'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardComunicacionId = ({ idcomunicacion }) => {
    const [comunicacionData, setComunicacionData] = useState([]);

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
                const comunicacion = data.values.slice(1).map((row) => ({
                    Codigo: row[0],
                    Imagen: row[1],
                    Titulo: row[2],
                    Descripcion: row[3],
                    Fecha: row[4],
                    EnlaceVideo: row[5],
                }))
                    .filter((comunicacion) =>
                        comunicacion.Codigo === idcomunicacion,
                    );
                setComunicacionData(comunicacion);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };
        fetchData();
    }, [idcomunicacion, comunicacionData]);

    return (
        <div className="max-w-5xl mx-auto text-secundary ">
            <div className="flex flex-wrap flex-col justify-center gap-8 text-2xl">
                {comunicacionData.map((comunicacion, index) => (
                    <div key={index} className="flex flex-wrap flex-col items-center justify-center gap-4">
                        <div className="w-full h-[400px] max-sm:h-[250px] xl:h-[480px] 2xl:h-[480px] relative">
                            <Image
                                src={comunicacion.Imagen}
                                alt={comunicacion.Titulo}
                                layout="fill"
                            />
                        </div>                        <h1 className="font-bold text-black mt-2">{comunicacion.Titulo}</h1>
                        <span className="text-secundary" >{comunicacion.Descripcion}</span>
                        {comunicacion.EnlaceVideo === "" || comunicacion.EnlaceVideo === null ? null : <iframe src={comunicacion.EnlaceVideo} width="100%" height="500px" className=" border-none max-w-5xl mx-auto my-4" ></iframe>}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CardComunicacionId;
