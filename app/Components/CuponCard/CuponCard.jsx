'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';

const CuponCard = ({ tipoSeleccionado, user }) => {
    const [cuponesData, setCuponesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Cupon!A:F";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                const cupones = data.values
                    .slice(1)
                    .map((row) => ({
                        Codigo: row[0],
                        Nombre: row[1],
                        Tipo: row[2],
                        Empleado: row[3],
                        Empresa: row[4],
                        Estado: row[5],
                    }))
                    .filter((cupones) =>
                        tipoSeleccionado === "Todos"
                            ? true
                            : cupones.Tipo === tipoSeleccionado
                    ).filter((cupones) =>
                        cupones.Empleado === user
                    );

                setCuponesData(cupones);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 3000);  // Actualiza los datos cada 3 segundos

        return () => clearInterval(intervalId);
    }, [tipoSeleccionado, user]);

    return (
        <div className="container mx-auto text-secundary">
            <div className="flex flex-wrap items-center justify-center gap-4"  >
                {cuponesData.map((cupon, index) => (
                    <Card
                        key={index}
                        codigo={cupon.Codigo}
                        nombre={cupon.Nombre}
                        tipo={cupon.Tipo}
                        empleado={cupon.Empleado}
                        empresa={cupon.Empresa}
                        estado={cupon.Estado}
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ codigo, nombre, tipo, empleado, empresa, estado }) => {
    return (
        <div className="bg-primary flex items-center overflow-hidden transition duration-300 ease-in-out transform  rounded-lg hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex flex-col border-4 border-dotted border-white rounded-lg m-4">
                <div className="flex  ">
                    <div className=" flex items-center justify-center w-1/4 border-dotted border-r-4 border-white">
                        <Image src="/images/Logo_CTM.png" alt="Logo" width={120} height={200} objectFit="contain" />
                    </div>

                    <div className="flex flex-col items-center justify-center w-3/4">
                        <div className="mx-auto pt-1">
                            <Image src="/images/Logo_CTM.png" alt="Logo" width={40} height={40} objectFit="contain" />

                        </div>
                        <h2 className="text-sm font-bold text-white text-center ">
                            Cupón de Beneficio
                        </h2>
                        <h3 className="text-sm text-border font-bold underline decoration-wavy decoration-primary">
                            {tipo}
                        </h3>
                        <h2 className="text-sm  font-bold text-white text-center tracking-widest">
                            Codigo: {empleado}
                        </h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CuponCard;
