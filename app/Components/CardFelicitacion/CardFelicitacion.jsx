'use client'

// Beneficios.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import QRCodeComponent from "../QRCodeComponent/QRCodeComponent";

const CardFelicitacion = (idEmpleado) => {

    const [empleadosData, setEmpleadosData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Registro_empleados!A:L";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const today = new Date();
                const todayString = today.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
                console.log(todayString);
                const data = await response.json();
                const empleados = data.values
                    .slice(1)
                    .map((row) => ({
                        Nombre: row[1],
                        Nro_empleado: row[3],
                        Fecha: row[9],
                        Reconocmiento: row[10],
                        Mensaje: row[11],
                    }))
                    .filter((empleados) =>
                        empleados.Nro_empleado === idEmpleado.idEmpleado && empleados.Fecha === todayString,
                    );

                setEmpleadosData(empleados);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, [idEmpleado]);



    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto  text-secundary pb-10"
        >
            <div className="container mx-auto text-secundary">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-2 place-items-center">
                    {empleadosData.map((empleado, index) => (
                        <CardB
                            key={index}
                            Fecha={empleado.Fecha}
                            Reconocmiento={empleado.Reconocmiento}
                            Mensaje={empleado.Mensaje}
                            Nombre={empleado.Nombre}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const CardB = ({ Nombre, Fecha, Mensaje }) => {
    return (
        <div className="grid grid-cols-1 gap-1 place-content-center">

            <div className={`w-[300px] h-[200px]  flex flex-col`}>
                <div className={`relative transition duration-300 ease-in-out transform rounded-md overflow-hidden h-[300px] max-sm:h[280px] w-full `}>

                    <div className="absolute top-9 left-0 right-0 w-[300px] h-[180px]  ">
                        <Image src='/images/Fondo_Reconocimiento.png' alt="Tarjeta Beneficio" fill></Image>
                    </div>
                    <div className="absolute top-[60px] left-2 right-0 z-30  w-[110px]  h-[110px]">
                        <Image src='/images/Foto_Reconocimiento.png' objectFit="" alt="Tarjeta" fill></Image>
                    </div>
                    <div className="absolute bottom-[45px] left-[23px] right-0  z-40 rounded-full w-[80px] h-[80px]  ">
                        <Image src='/images/Perfil.jpg' objectFit="cover" alt="Tarjeta" fill className="rounded-full"></Image>
                    </div>
                    <div className="absolute top-[43px] right-[70px]  z-40 rounded-full w-[40px] h-[40px]  ">
                        <Image src='/images/Logo_CTM.webp' objectFit="cover" alt="Tarjeta" fill className="rounded-full"></Image>
                    </div>
                    <div className="absolute top-[85px] right-[20px]  z-40 rounded-none w-[155px] h-[20px]   ">
                        <Image src='/images/Texto_Reconocimiento.png' objectFit="contain" alt="Tarjeta" fill ></Image>
                    </div>
                    <div className="absolute  top-[105px]  right-[8%] z-50 w-1/2 h-auto text-white flex flex-wrap flex-col ">
                        <div className="flex flex-wrap flex-col items-center justify-center">
                            <span className=" text-[10px] font-bold text-center ">{Nombre}</span>
                            <span className=" text-[10px] font-bold text-center bg-tarjeta p-1">{Fecha}</span>
                        </div>

                        <span className=" text-[8px] font-bold ">Sección 1 CTM:</span>

                        <span className=" text-[8px] font-bold text-tarjeta ">"{Mensaje}"</span>

                        <div>
                        </div>

                    </div>




                    <div className="absolute top-[255px]  max-[480px]:top-[250px] right-16  max-[480px]:right-10  w-1/2 h-1/2 text-white flex flex-col place-items-center">
                        <span className=" text-[5px] ">FEDERACIÓN REGIONAL DE TRABAJADORES</span>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CardFelicitacion;