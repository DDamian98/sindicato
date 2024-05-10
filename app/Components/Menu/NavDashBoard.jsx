'use client'
import React, { useState } from 'react';
import {
    IoMdHome, IoMdPerson, IoIosMenu, IoIosLogOut, IoIosAlbums, IoIosCash
} from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const MenuItem = ({ icon, text, isExpanded }) => (
    <div className={`flex items-center space-x-4 hover:bg-secundary/70 p-2 rounded-lg transition-all duration-200 cursor-pointer h ${isExpanded ? 'justify-start' : 'justify-center'}`}>
        <div className="flex-shrink-0">{icon}</div>
        {isExpanded && <span className="flex-grow text-sm font-medium">{text}</span>}
    </div>
);

const DashboardMenu = ({ Nombre_Apellidos, TipoUsuario }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    let menuItems = [];
    if (TipoUsuario === 'empleado') {

        menuItems = [
            { text: 'Inicio', icon: <IoMdHome className="w-5 h-5" />, link: '/Dashboard' },
            { text: 'Cupon', icon: <IoIosAlbums className="w-5 h-5" />, link: '/Dashboard/Cupon' },
            { text: 'Salir', icon: <IoIosLogOut className="w-5 h-5" />, link: '/Login' },

        ];
    } if (TipoUsuario === 'proveedor') {
        menuItems = [
            { text: 'Inicio', icon: <IoMdHome className="w-5 h-5" />, link: '/Dashboard' },
            { text: 'Cupon Aplicado', icon: <IoIosCash className="w-5 h-5" />, link: '/Dashboard/CuponAplicado' },
            { text: 'Salir', icon: <IoIosLogOut className="w-5 h-5" />, link: '/Login' },

        ];
    } if (TipoUsuario === 'Admin') {
        menuItems = [
            { text: 'Inicio', icon: <IoMdHome className="w-5 h-5" />, link: '/Dashboard' },
            { text: 'Usuarios Interesados', icon: <IoMdPerson className="w-5 h-5" />, link: '/Dashboard/Usuarios' },
            { text: 'Cupones vendidos', icon: <IoIosCash className="w-5 h-5" />, link: '/Dashboard/CuponAplicado' },
            { text: 'Salir', icon: <IoIosLogOut className="w-5 h-5" />, link: '/Login' },

        ];
    }



    return (
        <div className="flex min-h-screen bg-gray-800 text-white h-auto">
            {/* Sidebar */}
            <div className={`bg-bgadmin  text-white transition-all duration-300 ${isExpanded ? 'w-64' : 'w-12'} flex flex-col justify-between`}>
                {/* Top Section */}
                <div className='sticky top-0'>
                    <div className="flex items-center justify-center p-2">
                        <IoIosMenu className="w-6 h-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
                    </div>
                    {/* User Info - visible only when expanded */}
                    {isExpanded && (
                        <div>
                            <div className="flex items-center p-2  space-x-2">
                                <Image src="/images/Logo_CTM.webp" alt="User" width={40} height={40} className="rounded-full" />
                                <span className="font-medium text-center">{Nombre_Apellidos}</span>
                            </div>

                        </div>
                    )}

                    {/* Menu Items */}
                    <div className="mt-6">
                        {menuItems.map((item, index) => (
                            <Link href={item.link} key={index} >
                                <MenuItem icon={item.icon} text={item.text} isExpanded={isExpanded} />
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMenu;
