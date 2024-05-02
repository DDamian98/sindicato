'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const CuponCard = ({ tipoSeleccionado, user, }) => {
    const [cuponesData, setCuponesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "CuponEmpleado!A:L";
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
                        Empresa: row[5],
                        Empleado: row[6],
                        Empresa_Empleado: row[7],
                        Estado: row[8],
                        Marca: row[9],
                        Codigo_Cupon: row[10],
                        Nombre_Empleado: row[11]
                    }))
                    .filter((cupones) =>
                        tipoSeleccionado === "Todos"
                            ? true
                            : cupones.Tipo === tipoSeleccionado
                    ).filter((cupones) =>
                        cupones.Empleado === user
                    ).filter((cupones) => cupones.Estado === "Activo");



                setCuponesData(cupones);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, [tipoSeleccionado, user]);

    return (
        <div className="container mx-auto text-secundary">
            <ToastContainer />
            <div className="flex flex-wrap items-center justify-center gap-4"  >
                {cuponesData.map((cupon, index) => (
                    <Card
                        key={index}
                        codigo={cupon.Codigo}
                        nombre={cupon.Nombre}
                        tipo={cupon.Tipo}
                        empleado={cupon.Empleado}
                        empresa={cupon.Empresa}
                        Producto={cupon.Producto}
                        promocion={cupon.Promocion}
                        estado={cupon.Estado}
                        Marca={cupon.Marca}
                        Empresa_Empleado={cupon.Empresa_Empleado}
                        Codigo_Cupon={cupon.Codigo_Cupon}
                        Nombre_Empleado={cupon.Nombre_Empleado}
                    />
                ))}
            </div>
        </div>
    );
};
const handleInterestClick = async (codigo, Codigo_Cupon, Nombre_Empleado, empleado, Empresa_Empleado, empresa, Tipo, Producto, Promocion) => {
    try {
        const today = new Date();
        const todayString = today.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });

        const response = await fetch('/api/venta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ codigo, Codigo_Cupon, Nombre_Empleado, empleado, Empresa_Empleado, empresa, Tipo, Producto, Promocion, todayString })
        });

        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }
        const data = await response.json();
        toast.success('Cupon asignado al empleado. ', {
            autoClose: 2000,
        });
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
};

const Card = ({ tipo, promocion, Marca, codigo, empleado, empresa, Empresa_Empleado, Codigo_Cupon, Nombre_Empleado, Producto }) => {
    return (
        <div className="grid grid-cols-1 gap-1 place-content-center">
            <div className={`w-[300px]  flex flex-col  h-[160px]`}>
                <div className={`relative transition  duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-md overflow-hidden h-[160px]  w-full `}>
                    <div className="absolute  z-30 top-0 left-[185px] w-1/2 h-1/2 ">
                        <Image src='/images/Descuento.png' alt="Tarjeta Beneficio" fill className=" object-contain"></Image>
                    </div>
                    <div className="absolute  z-30 top-11 left-5 w-[65px] h-[65px] ">
                        <Image src='/images/Logo_CTM.webp' alt="Tarjeta Beneficio" fill className=" object-contain"></Image>
                    </div>
                    <div className="absolute  z-30 top-4 left-[105px] w-[120px] h-1/2 ">
                        <Image src='/images/Texto_cupon.png' alt="Tarjeta Beneficio" className=" object-contain" fill></Image>
                    </div>

                    <div className="absolute  z-20 top-0 right-2 w-[280px] h-full ">
                        <Image src='/images/Lineas.png' alt="Tarjeta Beneficio" fill className=" object-contain"></Image>
                    </div>
                    <div className="absolute  z-40 top-2 left-[240px] w-1/2 h-full ">
                        <span className="text-white font-bold text-xl">{promocion}</span>
                    </div>
                    <div className="absolute top-0 bottom-0 w-[300px] h-full">
                        <Image src='/images/Fondo_cupon.png' alt="Tarjeta Beneficio" fill className=" object-contain"></Image>
                    </div>
                    <div className="text-center absolute top-[45%] right-[15%] left-[25%]">
                        <span className="text-primary font-bold ">{tipo}</span>
                    </div>
                    <div className="text-center absolute z-50 top-[20%] right-[40%] left-[50%]  w-[30px] h-full">
                        <Image src={Marca} alt="Tarjeta Beneficio" fill className=" object-contain"></Image>
                    </div>
                </div>
                {localStorage.getItem('TipoUsuario') === 'proveedor' ? (
                    <>
                        <button onClick={() => handleInterestClick(codigo, Codigo_Cupon, Nombre_Empleado, empleado, Empresa_Empleado, empresa, tipo, Producto, promocion)} className="bg-primary text-center text-white w-1/2 mx-auto">
                            Aplicar cupón
                        </button>
                    </>

                ) : null}

            </div>

        </div>

    );
};

export default CuponCard;
