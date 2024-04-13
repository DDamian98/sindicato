'use client'

// Beneficios.js
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CardBeneficio = (idEmpleado) => {

    const [empleadosData, setEmpleadosData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Registro_empleados!A:J";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();
                const empleados = data.values
                    .slice(1)
                    .map((row) => ({
                        MarcaTemporal: row[0],
                        Nombre_Apellidos: row[1],
                        Empresa: row[2],
                        Nro_empleado: row[3],
                        Nro_contacto: row[4],
                        Nro_celular: row[5],
                        Correo: row[6],
                        Direccion: row[7],
                        Red_social: row[8],
                        Qr: row[9],
                    }))
                    .filter((empleados) =>
                        empleados.Nro_empleado === idEmpleado.idEmpleado,
                    );

                setEmpleadosData(empleados);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 3000);  // Actualiza los datos cada 3 segundos

        return () => clearInterval(intervalId);
    }, [idEmpleado]);





    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto  text-secundary pb-10"
        >
            <div className="container mx-auto text-secundary">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8 place-content-center">
                    {empleadosData.map((empleado, index) => (
                        <CardB
                            key={index}
                            Nombre={empleado.Nombre_Apellidos}
                            Empresa={empleado.Empresa}
                            Nro_empleado={empleado.Nro_empleado}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const CardB = ({ Nombre, Empresa, Nro_empleado }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" bg-bgadmin transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden bg-bgadminflex items-center ">
                <div className="flex flex-col">
                    <div className="flex p-4">
                        <Image src="/images/Logo_CTM.png" alt="Logo" width={60} height={60} objectFit="contain" />
                        <div className="flex flex-col items-center justify-center">
                            <h2 className=" text-[12px] font-bold  text-white text-center" >FEDERACIÓN REGIONAL DE TRABAJADORES</h2>
                            <h3 className="text-[12px] text-center text-primary font-bold">SECCIÓN 1</h3>
                            <h2 className=" text-[12px] font-bold  text-white text-center" >DEL ESTADO DE QUERETARO, C.T.M.</h2>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col bg-white w-full mb-4 gap-2" >
                            <h3 className="px-2 mx-10 mt-2 rounded-lg font-bold tracking-widest bg-primary text-white text-center">TARJETA DE BENEFICIOS</h3>
                            <div className="flex items-center justify-center gap-2 ">
                                <h2 className="text-bgadmin text-lg font-bold">Nombre:</h2>
                                <textarea value={Nombre} className=" w-36 h-auto  bg-gray-300 border-none rounded-lg text-sm resize-none" disabled style={{ minHeight: '20px' }} />
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-2 ">
                                <h2 className="text-bgadmin text-lg font-bold ">Empresa:</h2>
                                <textarea value={Empresa} className=" w-36 bg-gray-300 border-none rounded-lg text-sm resize-none" disabled style={{ minHeight: '10px' }} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden bg-bgadminflex items-center ">
                <div className="flex flex-col">
                    <span className="font-bold text-white  text-center text-xl py-2 bg-bgadmin">&quot;Innovando la cultura laboral&quot;</span>
                    <div>
                        <div className=" bg-white w-full mb-4 items-center justify-center gap-4 p-4 " >
                            <div className=" flex gap-4 flex-wrap items-center justify-center">
                                <div className="rounded-lg ">
                                    <Image src="/images/qr.jpg" alt="Codigo del Empleado" width={140} height={160} className=" overflow-hidden rounded-lg"></Image>
                                </div>
                                <div className="flex flex-col mb-2 flex-wrap mx-8">
                                    <h2 className="text-bgadmin text-lg font-bold ">Categoria:</h2>
                                    <span>- Categoria 1</span>
                                    <span>- Categoria 2</span>
                                    <span>- Categoria 3</span>
                                    <span>- Categoria 4</span>

                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2  text-wrap">
                                <h2 className="text-bgadmin text-lg font-bold ">Número del empleado:</h2>
                                <input type="text" value={Nro_empleado} className=" w-36 bg-gray-300 border-none rounded-lg" disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default CardBeneficio;
