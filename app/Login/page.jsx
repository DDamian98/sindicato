'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Login = () => {
    const [tipoUsuario, setTipoUsuario] = useState('empleado');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        localStorage.removeItem('NroEmpleado');
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();


        const url = `/api/${tipoUsuario}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }

            const data = await response.json();
            if (data.user && data.user.empleados.length > 0) {
                alert('Login exitoso');
                localStorage.setItem('NroEmpleado', data.user.empleados[0].Nro_empleado);
                window.location.href = '/Dashboard';
            }
        } catch (error) {

            console.error('Error en la autenticación:', error);
            alert('Login fallido');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full lg:w-3/5 p-5">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Sistema Cupon</h2>
                    <p className="text-gray-600 mt-2 text-center">Bienvenido, por favor ingrese sus datos.</p>
                    <form className="space-y-4 mt-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="tipoUsuario" className="block mb-2 text-sm font-medium text-gray-700">Tipo de usuario</label>
                            <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} className="block w-full px-4 py-3 mb-2 border rounded-md text-secundary bg-white">
                                <option value="empleado">Empleado</option>
                                <option value="proveedor">Proveedor</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo Electrónico" className="block w-full px-4 py-3 mb-2 border rounded-md text-secundary" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" className="block w-full px-4 py-3 mb-2 border rounded-md text-secundary" required />
                        </div>
                        <button type="submit" className="w-full px-4 py-3 mt-4 bg-red-700 hover:bg-red-600 text-white rounded-md  transition-colors">Ingresar</button>

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
