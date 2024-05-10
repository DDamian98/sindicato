'use client'
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode';
import fetch from 'node-fetch';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const CardInteresadosTotal = ({ }) => {
    const [empleadosData, setEmpleadosData] = useState([]);
    const [search, setSearch] = useState(""); // Estado para manejar el texto de búsqueda
    const [currentPage, setCurrentPage] = useState(1);
    const [empleadosPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
                const range = "CuponInteresado!A:L";
                const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${apiKey}`
                );
                const data = await response.json();
                const empleados = data.values
                    .slice(1).reverse()
                    .map((row) => ({
                        Codigo_Interesado: row[0],
                        Nombre_Apellidos: row[1],
                        Nro_empledo: row[2],
                        Empresa: row[3],
                        Nro_Telefono: row[4],
                        Estado: row[5],
                        Empresa_Cupon: row[6],
                        Producto: row[7],
                        Promocion: row[8],
                        Tipo: row[9],
                        Codigo_Cupon: row[10],
                        Marca: row[11]
                    }));

                setEmpleadosData(empleados);
            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 30000);  // Actualiza los datos cada 3 segundos

        return () => clearInterval(intervalId);
    }, []);

    const indexOfLastEmpleado = currentPage * empleadosPerPage;
    const indexOfFirstEmpleado = indexOfLastEmpleado - empleadosPerPage;
    const currentEmpleados = empleadosData.filter(empleado =>
        empleado.Nombre_Apellidos.toLowerCase().includes(search.toLowerCase()) ||
        empleado.Empresa.toLowerCase().includes(search.toLowerCase()) ||
        empleado.Nro_empledo.includes(search)
    ).slice(indexOfFirstEmpleado, indexOfLastEmpleado);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(empleadosData.length / empleadosPerPage); i++) {
        pageNumbers.push(i);
    }
    const handleInterestClick = async (Codigo_Interesado, Nombre_Empleado, Nro_Empleado, Empresa_Empleado, Nro_Telefono, Empresa_Cupon, Producto, Promocion, Tipo, Codigo_Cupon, Marca) => {
        try {
            const response = await fetch('/api/cuponEmpleado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Codigo_Interesado, Nombre_Empleado, Nro_Empleado, Empresa_Empleado, Nro_Telefono, Empresa_Cupon, Producto, Promocion, Tipo, Codigo_Cupon, Marca })
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

    return (
        <div className="container mx-auto">
            <ToastContainer />
            <h2 className="text-bgadmin px-4 text-xl font-bold">Empleados Interesados</h2>

            <div className="flex flex-col flex-wrap p-4 ">
                <input
                    type="text"
                    placeholder="Buscar empleados..."
                    className="mb-4 p-2 border rounded w-1/4 max-md:w-1/2 border-bgadmin text-secundary focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary"
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="-my-2 sm:-mx-6 lg:-mx-8  overflow-x-auto ">
                    <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
                        <div className="shadow  border-b border-gray-200 sm:rounded-lg  w-10 ">
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

                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentEmpleados.map((empleado, index) => (
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

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 gap-4 flex hidden">
                                                <a href={`https://api.whatsapp.com/send?phone=${empleado.Nro_Telefono}`} target="blank__" className="bg-green-500 hover:bg-green-500/90 text-white  p-2 ">Contactar</a>
                                                <button
                                                    onClick={() => handleInterestClick(empleado.Codigo_Interesado, empleado.Nombre_Apellidos, empleado.Nro_empledo, empleado.Empresa, empleado.Nro_Telefono, empleado.Empresa_Cupon, empleado.Producto, empleado.Promocion, empleado.Tipo, empleado.Codigo_Cupon, empleado.Marca)}
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
                    <div className="pagination flex  sm:px-6 lg:px-8">
                        {pageNumbers.map(number => (
                            <button key={number} onClick={() => paginate(number)} className="bg-primary text-white hover:bg-primary/90 p-2 mx-1">
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardInteresadosTotal;
