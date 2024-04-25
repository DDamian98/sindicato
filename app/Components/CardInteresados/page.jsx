'use client'
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';
import fetch from 'node-fetch';
import Link from "next/link";
const CardInteresados = ({ }) => {
    const [empleadosData, setEmpleadosData] = useState([]);
    const [search, setSearch] = useState(""); // Estado para manejar el texto de búsqueda


    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "CuponInteresado!A:J";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();

                const empleados = data.values
                    .slice(1)
                    .map((row) => ({
                        Codigo_Cupon: row[0],
                        Nombre_Apellidos: row[1],
                        Nro_empledo: row[2],
                        Empresa: row[3],
                        Nro_Telefono: row[4],
                        Estado: row[5],
                        Empresa_Cupon: row[6],
                        Producto: row[7],
                        Promocion: row[8],
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

        const qrData = `http://www.ctmseccion1.com/Dashboard/Usuarios/${empleado.Nro_empledo}`;

        try {
            const qrImage = await QRCode.toDataURL(qrData, {
                errorCorrectionLevel: 'H',
                color: {
                    dark: '#202e55',
                    light: '#ffffff'
                }
            });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const size = 256;
            canvas.width = size;
            canvas.height = size;

            const qrCodeImage = new Image();
            qrCodeImage.src = qrImage;
            await new Promise((resolve) => {
                qrCodeImage.onload = resolve;
            });

            context.drawImage(qrCodeImage, 0, 0, size, size);

            const logo = new Image();
            logo.src = '/images/Logo_CTM.webp';
            await new Promise((resolve) => {
                logo.onload = resolve;
            });

            const logoSize = 48; // Tamaño del logo
            const logoPosition = (size - logoSize) / 2;
            context.drawImage(logo, logoPosition, logoPosition, logoSize, logoSize);

            // Crear un enlace de descarga para el canvas como imagen
            const downloadLink = document.createElement('a');
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.download = `${empleado.Nombre_Apellidos}-QR.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error("Error al generar el código QR:", error);
        }
    };

    return (
        <div className="container mx-auto mt-2">

            <div className="flex flex-col flex-wrap p-4 ">
                <input
                    type="text"
                    placeholder="Buscar empleados..."
                    className="mb-4 p-2 border rounded w-1/4 border-bgadmin text-secundary focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="-my-2 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow  border-b border-gray-200 sm:rounded-lg  ">
                            <table className=" divide-y divide-gray-200  ">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nombre del Empleado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nro del Empleado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Empresa
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Producto
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Promoción
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
                                                {empleado.Nombre_Apellidos}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Nro_empledo}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Empresa}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Producto}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Promocion}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 gap-4 flex">
                                                <a href={`https://api.whatsapp.com/send?phone=931784733${empleado.Nro_Telefono}`} target="blank__" className="bg-green-500 hover:bg-green-500/90 text-white  p-2 ">Contactar</a>
                                                <button
                                                    onClick={() => handleGenerateQR(empleado)}
                                                    className="bg-primary hover:bg-primary/90 text-white  p-2 "
                                                >Adquirir
                                                </button>

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

export default CardInteresados;
