'use client'
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';
import fetch from 'node-fetch';
const CardVentas = ({ }) => {
    const [empleadosData, setEmpleadosData] = useState([]);
    const [search, setSearch] = useState(""); // Estado para manejar el texto de búsqueda

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "CuponVendido!A:K";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                console.log('Respuesta:', response);
                const data = await response.json();
                const empresa_local = localStorage.getItem('Empresa');
                const empleados = data.values
                    .slice(1)
                    .map((row) => ({
                        Nombre_Empleado: row[2],
                        Nro_Empleado: row[3],
                        Empresa_Empleado: row[4],
                        Empresa_Cupon: row[5],
                        Producto: row[7],
                        Fecha: row[9],
                    })).filter((empleados) => empleados.Empresa_Cupon === empresa_local);

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
        empleado.Nombre_Empleado.toLowerCase().includes(search.toLowerCase()) ||
        empleado.Empresa_Empleado.toLowerCase().includes(search.toLowerCase()) ||
        empleado.Nro_Empleado.includes(search)
    );


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
                                            Nro del Empleado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nombre del Empleado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Empresa Empleado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Producto
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Fecha
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredEmpleados.map((empleado, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {empleado.Nro_Empleado}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Nombre_Empleado}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Empresa_Empleado}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Producto}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {empleado.Fecha}
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

export default CardVentas;
