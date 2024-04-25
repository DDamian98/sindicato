'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardEventoId = ({ idevento }) => {
    const [noticiaData, setNoticiaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Evento!A:F";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                console.log(data);
                const evento = data.values.slice(1).map((row) => ({
                    Codigo: row[0],
                    Imagen: row[1],
                    Titulo: row[2],
                    Descripcion: row[3],
                    Fecha: row[4],
                    Enlace: row[5],
                }))
                    .filter((evento) =>
                        evento.Codigo === idevento,
                    );
                setNoticiaData(evento);
                console.log(noticiaData);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-5xl mx-auto text-secundary ">
            <div className="flex flex-wrap flex-col justify-center gap-8 text-2xl">
                {noticiaData.map((evento, index) => (
                    <div key={index} className="flex flex-wrap flex-col items-center justify-center gap-4">
                        <h1 className="font-bold text-black mt-2">{evento.Titulo}</h1>
                        <Image src={evento.Imagen} alt={evento.Titulo} width={640} height={300} objectFit="cover" className=" w-[500px] h-auto max-sm:w-full"></Image>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=" w-8"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>
                            <span>{evento.Fecha}</span>
                        </div>
                        <span className="text-secundary" >{evento.Descripcion}</span>
                        <a href={evento.Enlace} target="blank__" className=" cursor-pointer text-md bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/80 transition duration-300">Registrate!</a>


                    </div>
                ))}
            </div>
        </div>
    );
};


export default CardEventoId;
