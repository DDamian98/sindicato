'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const CuponTotal = ({ tipoSeleccionado, productoSeleccionado, promocionSeleccionado }) => {
    const [cuponesData, setCuponesData] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "Cupon!A:J";
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
                        Producto: row[3],
                        Promocion: row[4],
                        Empleado: row[5],
                        Empresa: row[6],
                        Estado: row[7],
                        Marca: row[8],
                        Telefono: row[9]
                    }))
                    .filter((cupones) =>
                        tipoSeleccionado === "Todos"
                            ? true
                            : cupones.Tipo === tipoSeleccionado
                    ).filter((cupones) =>
                        productoSeleccionado === "Todos"
                            ? true
                            : cupones.Producto === productoSeleccionado
                    ).filter((cupones) =>
                        promocionSeleccionado === "Todos"
                            ? true
                            : cupones.Promocion === promocionSeleccionado
                    );


                setCuponesData(cupones);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, [tipoSeleccionado, productoSeleccionado, promocionSeleccionado]);

    return (
        <div>
            <ToastContainer />
            <div className="container mx-auto text-secundary">
                <div className="flex flex-wrap items-center justify-center gap-4"  >
                    {cuponesData.map((cupon, index) => (
                        <Card
                            key={index}
                            codigo={cupon.Codigo}
                            tipo={cupon.Tipo}
                            empleado={cupon.Empleado}
                            empresa={cupon.Empresa}
                            promocion={cupon.Promocion}
                            Producto={cupon.Producto}
                            estado={cupon.Estado}
                            Marca={cupon.Marca}
                            Telefono={cupon.Telefono}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};
const handleInterestClick = async (promocion, empresa, Producto, codigo, tipo, Marca) => {
    try {
        const Nombre_Empleado = localStorage.getItem('Nombre_Apellidos');
        const nroEmpleado = localStorage.getItem('NroEmpleado');
        const Empresa_Empleado = localStorage.getItem('Empresa');
        const Nro_Telefono = localStorage.getItem('Nro_Telefono');


        console.log('Nombre Empleado: ', Nombre_Empleado, 'Nro Empleado: ', nroEmpleado, 'Empresa Empleado: ', Empresa_Empleado, 'Nro Telefono: ', Nro_Telefono);
        const response = await fetch('/api/cuponInteresado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Nombre_Empleado, nroEmpleado, Empresa_Empleado, Nro_Telefono, Producto, promocion, empresa, codigo, tipo, Marca })
        });
        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }
        const data = await response.json();
        toast.success('Cupon Interés enviado al proveedor. ', {
            autoClose: 2000, // Espera 3 segundos antes de llamar a onClose

        });
        console.log(data);
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
};

const Card = ({ tipo, promocion, Marca, empresa, Producto, Telefono, codigo }) => {
    return (
        <div className="grid grid-cols-1 gap-1 place-content-center">

            <div className={`w-[300px]  flex flex-col  h-[160px]`}>
                <div className={`relative transition  duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-md overflow-hidden h-[160px]  w-full `}>
                    <div className="absolute  z-30 top-0 left-[185px] w-1/2 h-1/2 ">
                        <Image src='/images/Descuento.png' objectFit="contain" alt="Tarjeta Beneficio" fill></Image>
                    </div>
                    <div className="absolute  z-30 top-11 left-5 w-[65px] h-[65px] ">
                        <Image src='/images/Logo_CTM.webp' objectFit="contain" alt="Tarjeta Beneficio" fill></Image>
                    </div>
                    <div className="absolute  z-30 top-4 left-[105px] w-[120px] h-1/2 ">
                        <Image src='/images/Texto_cupon.png' objectFit="contain" alt="Tarjeta Beneficio" fill></Image>
                    </div>
                    <div className="absolute  z-40 top-[105px] left-6 w-1/2 h-1/2 ">
                        <button onClick={() => handleInterestClick(promocion, empresa, Producto, codigo, tipo, Marca)} className="bg-primary/90 hover:bg-primary rounded-lg text-white text-[8px] p-1">Me Interesa</button>
                    </div>
                    <div className="absolute  z-50 top-[135px] left-[250px] w-1/2 h-1/2 ">
                        <a href={`https://api.whatsapp.com/send?phone=${Telefono}`} target="__blank" className=" bg-green-700 hover:bg-green-500 rounded-lg text-white text-[8px] p-1 cursor-pointer font-bold">Contactar</a>
                    </div>
                    <div className="absolute  z-20 top-0 right-2 w-[280px] h-full ">
                        <Image src='/images/Lineas.png' objectFit="contain" alt="Tarjeta Beneficio" fill></Image>
                    </div>
                    <div className="absolute  z-40 top-2 left-[240px] w-1/2 h-full ">
                        <span className="text-white font-bold text-xl">{promocion}</span>
                    </div>
                    <div className="absolute top-0 bottom-0 w-[300px] h-full">
                        <Image src='/images/Fondo_cupon.png' objectFit="contain" alt="Tarjeta Beneficio" fill></Image>
                    </div>
                    <div className="text-center absolute top-[45%] right-[15%] left-[25%]">
                        <span className="text-primary font-bold ">{tipo}</span>
                    </div>
                    <div className="text-center absolute z-50 top-[20%] right-[40%] left-[50%]  w-[30px] h-full">
                        <Image src={Marca} objectFit="contain" alt="Tarjeta Beneficio" fill></Image>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CuponTotal;
