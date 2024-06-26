'use client'
import React, { useState, useEffect } from 'react';
import NavDashBoard from '../Components/Menu/NavDashBoard'
import Representantes from '../Components/Representantes/Representantes'
import CardBeneficio from '../Components/CardBeneficio/CardBeneficio'
import Cupon from './Cupon/page'
import CuponCard from '../Components/CuponCard/CuponCard'
import CardInteresados from '../Components/CardInteresados/page';
import CardFelicitaacion from '../Components/CardFelicitacion/CardFelicitacion';
import CardFelicitacion from '../Components/CardFelicitacion/CardFelicitacion';
import CardEmpleado from '../Components/CardEmpleado/CardEmpleado';

export default function Dashboard() {
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos');
    const [nroEmpleado, setNroEmpleado] = useState('');
    const [Nombre, setNombre] = useState('');
    const [TipoUsuario, setTipoUsuario] = useState('');
    const [tiposUnicos, setTiposUnicos] = useState([]);


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
        if (localStorage.getItem('TipoUsuario') === 'Admin') {
            setNombre(localStorage.getItem('Nombre_Apellidos'));
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


                setTiposUnicos(tiposArray);


            } catch (error) {
                console.error("Error al obtener los datos del Excel:", error);
            }
        };

        fetchData();
    }, [tipoSeleccionado]);


    const handleCategoryChange = (event) => {
        setTipoSeleccionado(event.target.value);
    };

    return (


        <div className='flex bg-gray-200 w-screen  ' >
            <NavDashBoard Nombre_Apellidos={Nombre} TipoUsuario={TipoUsuario} />
            <div className=' flex-grow '>
                <div className='w-full flex flex-col items-center just h-18 shadow-xl justify-center bg-bgadmin'>
                    <h1 className='text-white text-base text-center lg:text-2xl '>FEDERACIÓN REGIONAL DE TRABAJADORES</h1>
                    <h1 className='text-primary text-lg'>Sección 1</h1>

                </div>
                <div className='m-1 sd:m-2 '>
                    <div className='flex flex-col p-2  bg-white rounded-lg '>
                        <h1 className='text-bgadmin text-2xl text-center py-4 font-bold '>Programa de Beneficio y Descuento</h1>
                        {TipoUsuario === 'empleado' ? (
                            <>
                                <CardBeneficio idEmpleado={nroEmpleado} />
                                <div>
                                    <CardFelicitacion idEmpleado={nroEmpleado} />
                                </div>

                                <h2 className="text-secundary font-bold text-center mb-4 text-xl">Mis Cupónes de descuentos Adquiridos</h2>
                                <div className="text-center flex items-center justify-center flex-wrap gap-4 ">
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Escoge el tipo de cupon:</label>
                                        <select id="tipo" name="tipo" value={tipoSeleccionado} onChange={handleCategoryChange} className=" text-secundary mt-1 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-bgadmin focus:border-bgadmin sm:text-sm rounded-md">
                                            <option value="Todos">Todos</option>
                                            {tiposUnicos.map((tipo, index) => (
                                                <option key={index} value={tipo}>{tipo}</option>
                                            ))}

                                        </select>
                                        <a href="/Dashboard/Cupon" className="mb-4 bg-primary hover:bg-primary/90 text-white p-2 text-center">Obtener Cupones</a>

                                    </div>


                                </div>
                                <div className=' overflow-y-auto'>
                                    <CuponCard tipoSeleccionado={tipoSeleccionado} user={nroEmpleado} />
                                </div>

                            </>
                        ) : null}

                        {TipoUsuario === 'proveedor' ? (
                            <>
                                <a href="https://drive.google.com/file/d/1WBHXFRu1rTnfFosN880ojLclflzlcmzY/view" target='__blank' className='bg-primary p-2 font-bold text-white text-center w-36 mx-auto mb-2'>Tutorial</a>
                                <h2 className='text-bgadmin font-bold p-4 text-xl'>Empleados Interesados</h2>
                                <CardInteresados />
                            </>
                        ) : null}
                        {TipoUsuario === 'Admin' ? (
                            <>
                                <h2 className='text-bgadmin font-bold px-4 text-xl'>Lista de Empleados</h2>
                                <CardEmpleado />
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
