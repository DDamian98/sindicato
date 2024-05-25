'use client'

// Beneficios.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import QRCodeComponent from "../QRCodeComponent/QRCodeComponent";
import CardFelicitacion from "../CardFelicitacion/CardFelicitacion";

const CardBeneficio = (idEmpleado) => {

    const [empleadosData, setEmpleadosData] = useState([]);
    const [combinedImageSrc, setCombinedImageSrc] = useState('');
    const [empresaData, setEmpresaData] = useState([]);
    const [imageEmpresa, setImageEmpresa] = useState('');
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Registro_empleados!A:M";
                const rangeempresa = "EmpresasAfiliadas!A:B";
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
                        Fecha: row[10],
                        Reconocimiento: row[11],
                        Mensaje: row[12],
                    }))
                    .filter((empleados) =>
                        empleados.Nro_empleado === idEmpleado.idEmpleado,
                    );

                setEmpleadosData(empleados);
                setNombreEmpresa(empleados[0].Empresa);

                const responseCompany = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rangeempresa}?key=${apiKey}`
                );
                const dataEmpresa = await responseCompany.json();

                const empresas = dataEmpresa.values
                    .slice(1)
                    .map((row2) => ({
                        Nombre: row2[0],
                        Image: row2[1],

                    }))
                    .filter((empresas) =>
                        empresas.Nombre === nombreEmpresa,
                    );
                setEmpresaData(empresas);
                setImageEmpresa(empresas[0].Image);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };
        generateQR(idEmpleado.idEmpleado);

        fetchData();

    }, [idEmpleado, empresaData, nombreEmpresa, imageEmpresa]);
    const generateQR = async (nroEmpleado) => {

    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto  text-secundary"
        >
            <div className="container mx-auto text-secundary">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-2 place-items-center">
                    {empleadosData.map((empleado, index) => (
                        <CardB
                            key={index}
                            Nombre={empleado.Nombre_Apellidos}
                            Empresa={empleado.Empresa}
                            Nro_empleado={empleado.Nro_empleado}
                            imageEmpresa={imageEmpresa}
                            Fecha={empleado.Fecha}
                            Reconocimiento={empleado.Reconocimiento}
                            Mensaje={empleado.Mensaje}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const CardB = ({ Nombre, Empresa, Nro_empleado, imageEmpresa, Fecha, Reconocimiento, Mensaje }) => {
    return (
        <div className="grid grid-cols-1 gap-1 place-content-center">
            <div className={`w-[440px] max-[480px]:w-[300px] flex flex-col`}>
                <div className={`relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-md overflow-hidden h-[300px] max-sm:h[280px] w-full `}>
                    <div className="absolute  z-20 top-0 left-0 right-0 w-full h-1/2 ">
                        <Image src='/images/tarjet.png' alt="Tarjeta Beneficio" fill className=" object-contain"></Image>
                    </div>
                    <div className="absolute top-9 left-0 right-0 w-full h-[250px]   max-[480px]:h-[240px]   max-[480px]:top-12">
                        <Image src='/images/Fondo.png' alt="Tarjeta Beneficio" fill className=" object-cover"></Image>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0  max-[480px]:hidden w-full h-[180px] max-[480px]:h-[160px] ">
                        <Image src='/images/Photo.png' alt="Tarjeta" fill></Image>
                    </div>
                    <div className="absolute bottom-0 min-[480px]:hidden left-0 right-0  w-full h-[150px]">
                        <Image src='/images/Photo.png' alt="Tarjeta" fill></Image>
                    </div>

                    <div className="absolute bottom-2 left-[16px] right-0 max-[480px]:hidden rounded-full w-[160px] h-[160px] max-[480px]:w-[120px] ">
                        <Image src={imageEmpresa} alt="Tarjeta" fill className="rounded-full object-contain p-1"></Image>
                    </div>
                    <div className="absolute bottom-[10px] min-[480px]:hidden left-3 right-0  rounded-full w-[110px] h-[128px]  ">
                        <Image src={imageEmpresa} alt="Tarjeta" fill className="rounded-full object-contain"></Image>
                    </div>

                    <div className="absolute top-[70px] left-4  w-full h-1/2 text-white">
                        <input type="text" className=" rounded-lg w-72  max-[480px]:hidden  text-bgadmin font-bold text-sm" value={Nombre} readOnly />
                        <input type="text" className=" rounded-lg w-52  min-[480px]:hidden  text-bgadmin font-bold text-xs" value={Nombre} readOnly />

                    </div>
                    <div className="absolute bottom-6 right-2 max-[480px]:hidden w-[80px] h-[80px] max-[480px]:w-[20px] max-[480px]:h-[20px] max-[480px]:bottom-6 max-[480px]:right-1 ">
                        <QRCodeComponent UrlText={`https://www.ctmseccion1.com/Dashboard/Usuarios/${Nro_empleado}`} />
                    </div>
                    <div className="absolute bottom-6 min-[480px]:hidden right-2 w-[50px] h-[50px]  ">
                        <QRCodeComponent UrlText={`https://www.ctmseccion1.com/Dashboard/Usuarios/${Nro_empleado}`} />
                    </div>
                    <div className="absolute bottom-6 right-5  w-1/2 h-1/2 text-white">
                        <h2 className=" max-[480px]:text-xs text-sm">Empresa:</h2>
                        <input type="text" className=" rounded-lg w-56 py-1 max-[480px]:hidden text-black text-sm font-bold" value={Empresa} disabled />
                        <input type="text" className=" rounded-lg w-40 min-[480px]:hidden text-black text-xs font-bold " value={Empresa} disabled />

                    </div>
                    <div className="absolute top-[185px] right-5  w-1/2 h-1/2 text-white">
                        <h2 className=" max-[480px]:text-xs text-sm">Número de empleado:</h2>
                        <input type="text" className=" rounded-lg w-36 max-[480px]:hidden text-black  text-sm font-bold" value={Nro_empleado} disabled />
                        <input type="text" className=" rounded-lg w-20 min-[480px]:hidden text-black  text-sm font-bold" value={Nro_empleado} disabled />

                    </div>
                    <div className="absolute top-[255px]  max-[480px]:top-[250px] right-16  max-[480px]:right-10  w-1/2 h-1/2 text-white flex flex-col place-items-center">
                        <span className=" text-[5px]">FEDERACIÓN REGIONAL DE TRABAJADORES</span>
                        <span className=" text-[5px]">SECCIÓN 1</span>
                        <span className=" text-[5px]">DEL ESTADO DE QUERÉTARO, C.T.M</span>
                    </div>
                </div>
            </div>
            <CardFelicitacion idEmpleado={Nro_empleado} Nombre={Nombre} Fecha={Fecha} Reconocmiento={Reconocimiento} Mensaje={Mensaje} imageEmpresa={imageEmpresa} />

        </div>



    );
};

export default CardBeneficio;
