'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardNoticiaId = ({ idnoticia }) => {
    const [noticiaData, setNoticiaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Noticia!A:G";
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
                    EnlaceInfo: row[5],
                    EnlaceVideo: row[6],
                }))
                    .filter((evento) =>
                        evento.Codigo === idnoticia,
                    );
                setNoticiaData(evento);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, [idnoticia, noticiaData]);

    return (
        <div className="max-w-5xl mx-auto text-secundary ">
            <div className="flex flex-wrap flex-col justify-center gap-8 text-2xl">
                {noticiaData.map((noticia, index) => (
                    <div key={index} className="flex flex-wrap flex-col items-center justify-center gap-4">
                        <h1 className="font-bold text-black mt-2">{noticia.Titulo}</h1>
                        <span className="text-secundary" >{noticia.Descripcion}</span>
                        {noticia.EnlaceInfo === "" && noticia.EnlaceInfo === null ? null : <iframe src='https://drive.google.com/file/d/1pKWP6DHz5uASyhDQQrq2yegO_HAEu4P5/preview' width="100%" height="500px" className=" border-none max-w-5xl mx-auto  my-4" ></iframe>}
                        {noticia.EnlaceVideo === "" || noticia.EnlaceVideo === null ? null : <iframe src='https://drive.google.com/file/d/1pKWP6DHz5uASyhDQQrq2yegO_HAEu4P5/preview' width="100%" height="500px" className=" border-none max-w-5xl mx-auto my-4" ></iframe>}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CardNoticiaId;
