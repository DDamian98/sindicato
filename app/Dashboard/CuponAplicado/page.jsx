'use client'
import React, { useState, useEffect } from 'react';
import NavDashBoard from '../../Components/Menu/NavDashBoard'
import CardVentas from '@/app/Components/CardVentas/CardVentas'

export default function CuponAplicado() {
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
                        <CardVentas />


                    </div>
                </div>
            </div>
        </div>
    )
}
