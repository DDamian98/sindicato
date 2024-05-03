'use client'
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const RepresentantesEmpresa = ({ Empresa }) => {
    const [representantesData, setRepresentantesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = '1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0';
                const range = 'Representates!A:D';
                const apiKey = 'AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E';
                const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`);
                const data = await response.json();

                const representantes = data.values.slice(1).map((row) => ({
                    imageUrl: row[0],
                    nombre: row[1],
                    cargo: row[2],
                    empresa: row[3],
                })).filter((representantes) => representantes.empresa === Empresa);

                setRepresentantesData(representantes);
            } catch (error) {
                console.error('Error al obtener los datos del Excel:', error);
            }
        };

        fetchData();
    }, [Empresa]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full mx-auto text-secundary pb-10 `${styles.bg}"
        >
            <h2 className="text-2xl font-bold text-center mb-8 text-primary ">Representantes</h2>
            <div className="flex flex-row flex-wrap items-center justify-center lg:grid-cols-4 gap-8">
                {representantesData.map((representante, index) => (
                    <RepresentantesCrd
                        key={index}
                        imageUrl={representante.imageUrl}
                        nombre={representante.nombre}
                        cargo={representante.cargo}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const RepresentantesCrd = ({ imageUrl, nombre, cargo }) => {
    return (
        <Card className="transition duration-300 w-60  ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg overflow-hidden flex flex-col border-2 items-center justify-center">
            <div className="flex justify-center items-center  flex-grow">
                <Image src={imageUrl} alt={nombre} width={162} height={162} objectFit="cover" objectPosition="center" className="rounded-t-lg w-40 h-40" />
            </div>
            <div className="">
                <h3 className=" font-semibold text-primary mb-1">{nombre}</h3>
                <span className="text-md  text-gray-500">{cargo}</span>
            </div>
        </Card>



    );
};

export default RepresentantesEmpresa;