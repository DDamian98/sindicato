'use client'
import CardBeneficio from '@/app/Components/CardBeneficio/CardBeneficio';
import CuponCard from '@/app/Components/CuponCard/CuponCard';
import React, { useState, useEffect } from 'react';
import NavDashBoard from '@/app/Components/Menu/NavDashBoard';


const UsuarioDetailIndex = ({ params }) => {
    const { id } = params;
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

    // Función para manejar el cambio en el select
    const handleCategoryChange = (event) => {
        setTipoSeleccionado(event.target.value);
    };
    return (


        <div className='flex bg-gray-200  ' >
            <NavDashBoard Nombre_Apellidos={Nombre} TipoUsuario={TipoUsuario} />
            <div className=' flex-grow '>
                <div className='w-full flex flex-col items-center just h-18 shadow-xl justify-center bg-bgadmin'>
                    <h1 className='text-white text-base text-center lg:text-2xl '>FEDERACIÓN REGIONAL DE TRABAJADORES</h1>
                    <h1 className='text-primary text-lg'>Sección 1</h1>

                </div>
                <div className='m-2 sd:m-2  '>
                    <div className='flex flex-col p-4  bg-white rounded-lg '>
                        <h1 className='text-bgadmin text-2xl text-center py-4 font-bold '>Programa de Beneficio y Descuento</h1>
                        <CardBeneficio idEmpleado={id} />
                        <div className="text-center flex items-center justify-center flex-wrap flex-col">
                            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 ">Escoge el tipo de cupon:</label>
                            <select id="tipo" name="tipo" value={tipoSeleccionado} onChange={handleCategoryChange} className="mb-10 text-secundary mt-1 block w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-bgadmin focus:border-bgadmin sm:text-sm rounded-md">
                                <option value="Todos">Todos</option>
                                <option value="Ropa">Ropa</option>
                                <option value="Articulo">Artículo</option>
                                <option value="Electrodomestico">Electrodoméstico</option>
                            </select>
                        </div>
                        <div>
                            <CuponCard tipoSeleccionado={tipoSeleccionado} user={id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UsuarioDetailIndex;
