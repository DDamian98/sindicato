'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';
import fetch from 'node-fetch';
import Link from "next/link";
const CardEmpleado = ({ }) => {
    const [empleadosData, setEmpleadosData] = useState([]);
    const [search, setSearch] = useState(""); // Estado para manejar el texto de búsqueda


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
                        Nro_empledo: row[3],
                        Nro_contacto: row[4],
                        Nro_celular: row[5],
                        Correo: row[6],
                        Direccion: row[7],
                        Red_social: row[8],
                        Qr: row[9],
                    }));

                setEmpleadosData(empleados);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 3000);  // Actualiza los datos cada 3 segundos

        return () => clearInterval(intervalId);
    }, []);
    const filteredEmpleados = empleadosData.filter(empleado =>
        empleado.Nombre_Apellidos.toLowerCase().includes(search.toLowerCase()) ||
        empleado.Empresa.toLowerCase().includes(search.toLowerCase()) ||
        empleado.Nro_empledo.includes(search)
    );
    const handleGenerateQR = async (empleado) => {
        const nroEmpleado = empleado.Nro_empledo;
        const nombre_Apellidos = empleado.Nombre_Apellidos;
        try {
            const qrData = `http://localhost:3000/Dashboard/Usuarios/${nroEmpleado}`;
            const qrImage = await QRCode.toDataURL(qrData);

            // Crear un elemento <a> para descargar la imagen
            const downloadLink = document.createElement('a');
            downloadLink.href = qrImage;
            downloadLink.download = `${nombre_Apellidos}-QR.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error("Error al generar el código QR:", error);
        }

    };

    return (
        <div className="container mx-auto mt-8 ">

            <div className="flex flex-col flex-wrap p-4 overflow-x-auto">
                <input
                    type="text"
                    placeholder="Buscar empleados..."
                    className="mb-4 p-2 border rounded w-1/4 border-bgadmin text-secundary focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="-my-2 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow  border-b border-gray-200 sm:rounded-lg  ">
                            <table className="m-auto divide-y divide-gray-200  ">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            N° de Empleado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nombre y Apellidos
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Empresa
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            N° de Contacto
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Correo Electrónico
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Dirección
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredEmpleados.map((empleado, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {empleado.Nro_empledo}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Nombre_Apellidos}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Empresa}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Nro_contacto}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Correo}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Direccion}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button
                                                    onClick={() => handleGenerateQR(empleado)}
                                                    className="bg-primary hover:bg-primary/90 text-white  p-2 "
                                                >
                                                    Generar QR
                                                </button>
                                                <Link href={`/Dashboard/Usuarios/${empleado.Nro_empledo}`}>
                                                    Ver Detalles
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardEmpleado;
