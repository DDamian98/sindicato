import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full lg:w-3/5 p-5">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Sistema Cupon</h2>
                    <p className="text-gray-600 mt-2 text-center">Bienvenido, por favor ingrese sus datos.</p>
                    <form className="space-y-4 mt-6">
                        <div>
                            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                            <input id="email" type="email" placeholder="Correo Electrónico" className="block w-full px-4 py-3 mb-2 border rounded-md text-secundary" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <input id="password" type="password" placeholder="Contraseña" className="block w-full px-4 py-3 mb-2 border rounded-md text-secundary" />
                        </div>
                        <Link href="/Dashboard">
                            <button className="w-full px-4 py-3 mt-4 bg-red-700 hover:bg-red-600 text-white rounded-md  transition-colors">Ingresar</button>

                        </Link>

                    </form>
                </div>
                <div className="w-full lg:w-2/5 h-80 lg:h-auto  flex items-center justify-center p-2 relative">
                    <Image
                        src={'/images/Logo_CTM.png'}
                        alt="Confederación de Trabajadores de México"
                        layout='fill'
                        objectFit='contain'
                        className='p-4'
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
