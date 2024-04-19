'use client'

// Beneficios.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";



const AlianzasEstrategicas = () => {
    const [alianzasEstrategicas, setAlianzasEstrategicas] = useState([]);


    useEffect(() => {
        // Función para obtener los datos del Excel desde la API de Google Sheets
        const fetchData = async () => {
            try {
                const id = '1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0';
                const range = 'Alianzas_estratégicas!A:C';
                const apiKey = 'AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E';
                const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`);
                const data = await response.json();

                // Omitir la primera fila que contiene los encabezados
                const alianzas = data.values.slice(1).map((row) => ({
                    Nombre: row[0], // La primera columna es imageUrl
                    Imagen: row[1],   // La segunda columna es nombre
                }));

                setAlianzasEstrategicas(alianzas);
            } catch (error) {
                console.error('Error al obtener los datos del Excel:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-7xl mx-auto text-secundary pb-10"
        >
            <div className="container mx-auto text-secundary">
                <div className="flex flex-wrap  gap-8 items-center justify-center">
                    {alianzasEstrategicas.map((alianza, index) => (
                        <CardAlianzas
                            key={index}
                            nombre={alianza.Nombre}
                            imageUrl={alianza.Imagen}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const CardAlianzas = ({ nombre, imageUrl }) => {
    return (
        <div className="flex flex-row transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl w-[200px] h-[150px] p-2">
            <Image src={imageUrl} alt={nombre} width={200} height={200} objectFit="contain"></Image>

        </div >

    );
};

export default AlianzasEstrategicas;
