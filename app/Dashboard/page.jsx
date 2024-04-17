'use client'
import React, { useState, useEffect } from 'react';
import NavDashBoard from '../Components/Menu/NavDashBoard'
import Representantes from '../Components/Representantes/Representantes'
import CardBeneficio from '../Components/CardBeneficio/CardBeneficio'
import Cupon from './Cupon/page'
import CuponCard from '../Components/CuponCard/CuponCard'

export default function Dashboard() {
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos');
    const [nroEmpleado, setNroEmpleado] = useState('');
    const [Nombre_Apellidos, setNombre_Apellidos] = useState('');
    useEffect(() => {
        setNroEmpleado(localStorage.getItem('NroEmpleado'));
        setNombre_Apellidos(localStorage.getItem('Nombre_Apellidos'));

        const nro = localStorage.getItem('NroEmpleado');
        if (!nro) {
            window.location.href = '/Login';
        }
        // Aquí puedes usar nroEmpleado ya que estás seguro de que estás en el cliente
        console.log('Número de empleado:', nroEmpleado);
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez después del montaje inicial

    // Función para manejar el cambio en el select
    const handleCategoryChange = (event) => {
        setTipoSeleccionado(event.target.value);
    };
    return (


        <div className='flex bg-gray-200  ' >
            <NavDashBoard Nombre_Apellidos={Nombre_Apellidos} />
            <div className=' flex-grow '>
                <div className='w-full flex flex-col items-center just h-18 shadow-xl justify-center bg-bgadmin'>
                    <h1 className='text-white text-base text-center lg:text-2xl '>FEDERACIÓN REGIONAL DE TRABAJADORES</h1>
                    <h1 className='text-primary text-lg'>Sección 1</h1>

                </div>
                <div className='m-1 sd:m-2  '>
                    <div className='flex flex-col p-2  bg-white rounded-lg '>
                        <h1 className='text-secundary text-2xl text-center py-4'>Sistema de Cupón</h1>
                        <CardBeneficio idEmpleado={nroEmpleado} />
                        <div className="text-center flex items-center justify-center flex-wrap flex-col">
                            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 ">Escoge el tipo de cupon:</label>
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
                        <div>
                            <CuponCard tipoSeleccionado={tipoSeleccionado} user={nroEmpleado} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
