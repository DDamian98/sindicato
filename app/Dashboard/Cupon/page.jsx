'use client'
import React, { useState, useEffect } from 'react';
import NavDashBoard from '../../Components/Menu/NavDashBoard'
import CuponCard from '../../Components/CuponCard/CuponCard'
import CuponTotal from '@/app/Components/CuponCard/CuponTotal';

export default function Cupon() {
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos');
    const [productosSeleccionado, setProductosSeleccionado] = useState('Todos');
    const [promocionSeleccionado, setPromocionSeleccionado] = useState('Todos');
    const [nroEmpleado, setNroEmpleado] = useState('');
    const [Nombre, setNombre] = useState('');
    const [TipoUsuario, setTipoUsuario] = useState('');
    const [tiposUnicos, setTiposUnicos] = useState([]);
    const [productoUnicos, setProductoUnicos] = useState([]);
    const [promocionUnicos, setPromocionUnicos] = useState([]);


    useEffect(() => {
        setTipoUsuario(localStorage.getItem('TipoUsuario'));
        const tipo = localStorage.getItem('TipoUsuario');
        if (!tipo) {
            window.location.href = '/Login';
        }
        if (localStorage.getItem('TipoUsuario') === 'empleado') {
            setNombre(localStorage.getItem('Nombre_Apellidos'));
            setNroEmpleado(localStorage.getItem('NroEmpleado'));
        }
        if (localStorage.getItem('TipoUsuario') === 'proveedor') {
            setNombre(localStorage.getItem('Empresa'));
            setNroEmpleado(localStorage.getItem('Correo'));
        }

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
                        Empresa: row[4],
                        Estado: row[5],
                        Marca: row[8],
                    }));

                const tiposUnicos = new Set();
                cupones.forEach(cupon => tiposUnicos.add(cupon.Tipo));
                const tiposArray = Array.from(tiposUnicos);

                const productosUnicos = new Set();
                cupones.forEach(cupon => productosUnicos.add(cupon.Producto));
                const productoArray = Array.from(productosUnicos);

                const promocionUnicos = new Set();
                cupones.forEach(cupon => promocionUnicos.add(cupon.Promocion));
                const promocionArray = Array.from(promocionUnicos);

                console.log("Tipos Únicos:", tiposArray);

                setTiposUnicos(tiposArray);
                setProductoUnicos(productoArray);
                setPromocionUnicos(promocionArray);

            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, [tipoSeleccionado]);

    const handleCategoryChange = (event) => {
        setTipoSeleccionado(event.target.value);
    };

    const handleProductoChange = (event) => {
        setProductosSeleccionado(event.target.value);
    }; const handlePromocionChange = (event) => {
        setPromocionSeleccionado(event.target.value);
    };

    return (


        <div className='flex bg-gray-200  ' >
            <NavDashBoard Nombre_Apellidos={Nombre} TipoUsuario={TipoUsuario} />
            <div className=' flex-grow '>
                <div className='w-full flex flex-col items-center just h-18 shadow-xl justify-center bg-bgadmin'>
                    <h1 className='text-white text-base text-center lg:text-2xl '>FEDERACIÓN REGIONAL DE TRABAJADORES</h1>
                    <h1 className='text-primary text-lg'>Sección 1</h1>

                </div>
                <div className='m-1 sd:m-2  '>
                    <div className='flex flex-col p-2  bg-white rounded-lg '>
                        <h1 className='text-bgadmin font-bold text-2xl text-center py-4'>Programa de Beneficios y Descuentos</h1>
                        <a href="#" className='bg-primary p-2 font-bold text-white text-center w-1/2 mx-auto mb-2'>Catálogo Virtual</a>
                        <div className="text-center flex items-center justify-center flex-wrap gap-4 ">
                            <div className='flex flex-col'>
                                <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Escoge el tipo de cupon:</label>
                                <select id="tipo" name="tipo" value={tipoSeleccionado} onChange={handleCategoryChange} className="mb-10 text-secundary mt-1 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-bgadmin focus:border-bgadmin sm:text-sm rounded-md">
                                    <option value="Todos">Todos</option>
                                    {tiposUnicos.map((tipo, index) => (
                                        <option key={index} value={tipo}>{tipo}</option>
                                    ))}

                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="producto" className="block text-sm font-medium text-gray-700">Escoge el producto:</label>
                                <select id="producto" name="producto" value={productosSeleccionado} onChange={handleProductoChange} className="mb-10 text-secundary mt-1 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-bgadmin focus:border-bgadmin sm:text-sm rounded-md">
                                    <option value="Todos">Todos</option>
                                    {productoUnicos.map((producto, index) => (
                                        <option key={index} value={producto}>{producto}</option>
                                    ))}

                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="promocion" className="block text-sm font-medium text-gray-700">Escoge la promoción:</label>
                                <select id="promocion" name="promocion" value={promocionSeleccionado} onChange={handlePromocionChange} className="mb-10 text-secundary mt-1 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-bgadmin focus:border-bgadmin sm:text-sm rounded-md">
                                    <option value="Todos">Todos</option>
                                    {promocionUnicos.map((promocion, index) => (
                                        <option key={index} value={promocion}>{promocion}</option>
                                    ))}

                                </select>
                            </div>
                        </div>
                        <div>
                            <CuponTotal tipoSeleccionado={tipoSeleccionado} productoSeleccionado={productosSeleccionado} promocionSeleccionado={promocionSeleccionado} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
