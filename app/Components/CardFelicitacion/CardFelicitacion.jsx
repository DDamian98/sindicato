'use client'

// Beneficios.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const CardFelicitacion = ({ idEmpleado, Nombre, Fecha, Reconocmiento, Mensaje, imageEmpresa }) => {
    const today = new Date();
    const todayString = today.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
    let prueba = ''
    if (todayString === Fecha) {
        prueba = 'Hoy'
    }
    console.log("Fecha12:", prueba);
    console.log("Fecha:", Fecha);
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto  text-secundary pb-10"
        >
            {prueba === 'Hoy' ? (
                <>
                    <div className="container mx-auto text-secundary">
                        <h2 className="text-bgadmin font-bold text-lg text-center pt-4 mb-[-30px]">Reconocimiento</h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-2 place-items-center">
                            <div className={`w-[300px] h-[200px]  flex flex-col`}>

                                <div className={`relative transition duration-300 ease-in-out transform rounded-md overflow-hidden h-[300px] max-sm:h[280px] w-full `}>

                                    <div className="absolute top-9 left-0 right-0 w-[300px] h-[180px]  ">
                                        <Image src='/images/Fondo_Reconocimiento.png' alt="Tarjeta Beneficio" fill></Image>
                                    </div>
                                    <div className="absolute top-[60px] left-2 right-0 z-30  w-[110px]  h-[110px]">
                                        <Image src='/images/Foto_Reconocimiento.png' objectFit="" alt="Tarjeta" fill></Image>
                                    </div>
                                    <div className="absolute bottom-[45px] left-[23px] right-0  z-40 rounded-full w-[80px] h-[80px]  ">
                                        <Image src={imageEmpresa} alt="Tarjeta" fill className="rounded-full"></Image>
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

                                        <span className=" text-[8px] font-bold text-tarjeta ">{Mensaje}</span>

                                        <div>
                                        </div>

                                    </div>




                                    <div className="absolute top-[255px]  max-[480px]:top-[250px] right-16  max-[480px]:right-10  w-1/2 h-1/2 text-white flex flex-col place-items-center">
                                        <span className=" text-[5px] ">FEDERACIÓN REGIONAL DE TRABAJADORES</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : null}



        </motion.div>
    );
};

const CardB = ({ Nombre, Fecha, Mensaje }) => {
    return (
        <div className="grid grid-cols-1 gap-1 place-content-center">


        </div>



    );
};

export default CardFelicitacion;
