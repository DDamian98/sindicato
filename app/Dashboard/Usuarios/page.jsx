import React from 'react'
import NavDashBoard from '../../Components/Menu/NavDashBoard'
import CardEmpleado from '@/app/Components/CardEmpleado/CardEmpleado'

export default function Usuarios() {
    return (
        <div className='flex  max-w-full flex-grow bg-gray-200   ' >
            <NavDashBoard />
            <div className=' flex-grow bg-gray-200 max-w-full'>
                <div className='w-full flex flex-col items-center just h-18 shadow-xl justify-center bg-bgadmin'>
                    <h1 className='text-white text-base text-center lg:text-2xl '>FEDERACIÓN REGIONAL DE TRABAJADORES</h1>
                    <h1 className='text-primary text-lg'>Sección 1</h1>
                </div>
                <div className='m-2 sd:m-2  '>
                    <div className='flex flex-col   bg-white rounded-lg '>
                        <h1 className='text-secundary text-2xl text-center py-4'>Lista de Empleados</h1>
                        <CardEmpleado />
                    </div>
                </div>

            </div>
        </div>
    )
}
