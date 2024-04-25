import React from 'react'
import NavDashBoard from '../../Components/Menu/NavDashBoard'

export default function CuponAplicado() {
    return (
        <div className='flex bg-gray-200  ' >
            <NavDashBoard />
            <div className=' flex-grow '>
                <div className='w-full flex flex-col items-center just h-18 shadow-xl justify-center bg-bgadmin'>
                    <h1 className='text-white text-base text-center lg:text-2xl '>FEDERACIÓN REGIONAL DE TRABAJADORES</h1>
                    <h1 className='text-primary text-lg'>Sección 1</h1>
                </div>
            </div>
        </div>
    )
}
