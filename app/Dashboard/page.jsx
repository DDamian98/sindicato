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

export default function Dashboard() {
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos');
    const [nroEmpleado, setNroEmpleado] = useState('');
    const [Nombre, setNombre] = useState('');
    const [TipoUsuario, setTipoUsuario] = useState('');

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


    }, []);

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

                                <div className="text-center flex items-center justify-center flex-wrap flex-col">
                                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Escoge el tipo de cupon:</label>
                                    <select id="tipo" name="tipo" value={tipoSeleccionado} onChange={handleCategoryChange} className="mb-10 text-secundary mt-1 block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-bgadmin focus:border-bgadmin sm:text-sm rounded-md">
                                        <option value="Todos">Todos</option>
                                        <option value="Artículo">Artículo</option>
                                        <option value="Análisis Clinicos">Análisis Clínicos</option>
                                        <option value="Bebida">Bebida</option>
                                        <option value="Calzado">Calzado</option>
                                        <option value="Electrodomestico">Electrodomestico</option>
                                        <option value="Estudios">Estudios</option>
                                        <option value="Plomería">Plomería</option>
                                        <option value="Salud">Salud</option>
                                    </select>
                                </div>
                                <div className=' overflow-y-auto'>
                                    <CuponCard tipoSeleccionado={tipoSeleccionado} user={nroEmpleado} />
                                </div>

                            </>
                        ) : null}

                        {TipoUsuario === 'proveedor' ? (
                            <>
                                <h2 className='text-bgadmin font-bold p-4 text-xl'>Empleados Interesados</h2>
                                <CardInteresados />
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
