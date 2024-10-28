"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardComunicacionId = ({ idcomunicacion }) => {
  const getEmbedUrl = (url) => {
    let videoId;
    if (url.includes("youtube.com")) {
      videoId = url.split("/").pop();
    } else if (url.includes("youtu.be")) {
      videoId = url.split("/").pop();
    } else if (url.includes("youtube.com/shorts")) {
      videoId = url.split("/").pop();
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const [comunicacionData, setComunicacionData] = useState([]);
  const [videoError, setVideoError] = useState(false);

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
        const comunicacion = data.values
          .slice(1)
          .map((row) => ({
            Codigo: row[0],
            Imagen: row[1],
            Titulo: row[2],
            Descripcion: row[3],
            Fecha: row[4],
            EnlaceVideo: row[5],
          }))
          .filter((comunicacion) => comunicacion.Codigo === idcomunicacion);

        setComunicacionData(comunicacion);
      } catch (error) {
        console.error("Error al obtener los datos del Excel:", error);
      }
    };

    fetchData();
  }, [idcomunicacion]);

  return (
    <div>
      {comunicacionData.map((comunicacion) => (
        <div key={comunicacion.Codigo}>
          <h2 className="text-2xl font-bold text-secundary mb-4">
            {comunicacion.Titulo}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {comunicacion.Descripcion}
          </p>
          {comunicacion.EnlaceVideo &&
            (comunicacion.EnlaceVideo.includes("youtube.com") ||
            comunicacion.EnlaceVideo.includes("youtu.be") ? (
              videoError ? (
                <div>
                  <p>
                    El video no está disponible para reproducción en este sitio.
                    Por favor,{" "}
                    <a
                      href={comunicacion.EnlaceVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      haz clic aquí
                    </a>{" "}
                    para verlo en YouTube.
                  </p>
                </div>
              ) : (
                <iframe
                  src={getEmbedUrl(comunicacion.EnlaceVideo)}
                  width="100%"
                  height="500px"
                  className="border-none max-w-5xl mx-auto my-4"
                  allowFullScreen
                  onError={() => setVideoError(true)}
                ></iframe>
              )
            ) : comunicacion.EnlaceVideo.includes("canva.site") ? (
              <div
                className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-md shadow-md"
                role="alert"
              >
                <span className="block sm:inline">
                  El contenido de este enlace no se puede mostrar aquí. Por
                  favor,{" "}
                  <a
                    href={comunicacion.EnlaceVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    haz clic aquí
                  </a>{" "}
                  para verlo.
                </span>
              </div>
            ) : (
              <div
                className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-md shadow-md"
                role="alert"
              >
                <span className="block sm:inline">
                  El contenido de este enlace no se puede mostrar aquí. Por
                  favor,{" "}
                  <a
                    href={comunicacion.EnlaceVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    haz clic aquí
                  </a>{" "}
                  para verlo.
                </span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default CardComunicacionId;
