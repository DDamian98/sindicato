'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [tipoUsuario, setTipoUsuario] = useState('empleado');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        localStorage.clear();
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
                console.error('Error en la autenticación:', response);
                throw new Error('Error en la autenticación');
            }

            const data = await response.json();
            console.log('Administrador', data.user);

            toast.success('Login exitoso', {
                onClose: () => {
                    if (tipoUsuario === 'empleado') {
                        localStorage.setItem('NroEmpleado', data.user.empleados[0].Nro_empleado);
                        localStorage.setItem('Nombre_Apellidos', data.user.empleados[0].Nombre_Apellidos);
                        localStorage.setItem('Empresa', data.user.empleados[0].Empresa);
                        localStorage.setItem('Nro_Telefono', data.user.empleados[0].Nro_celular);
                        localStorage.setItem('TipoUsuario', 'empleado');
                        window.location.href = '/Dashboard';

                    }
                    if (tipoUsuario === 'proveedor') {
                        localStorage.setItem('Correo', data.user.proveedores[0].Correo);
                        localStorage.setItem('Empresa', data.user.proveedores[0].Empresa);
                        localStorage.setItem('Nro_celular', data.user.proveedores[0].Nro_celular);
                        localStorage.setItem('TipoUsuario', 'proveedor');
                        window.location.href = '/Dashboard';
                    }
                    if (tipoUsuario === 'empleadoAdmin') {
                        localStorage.setItem('Nombre_Apellidos', data.user.nombre);
                        localStorage.setItem('Correo', data.user.email);
                        localStorage.setItem('TipoUsuario', 'Admin');
                        window.location.href = '/Dashboard';

                    }
                },
                autoClose: 500, // Espera 2 segundos antes de llamar a onClose
            });
        } catch (error) {

            console.error('Error en la autenticación:', error);
            toast.error('Credenciales incorrectas');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <ToastContainer />
            <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full lg:w-3/5 p-5">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Sistema Beneficio</h2>
                    <p className="text-gray-600 mt-2 text-center">Bienvenido, por favor ingrese sus datos.</p>
                    <form className="space-y-4 mt-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="tipoUsuario" className="block mb-2 text-sm font-medium text-gray-700">Tipo de usuario</label>
                            <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} className="block w-full px-4 py-3 mb-2 border rounded-md text-secundary bg-white">
                                <option value="empleado">Empleado</option>
                                <option value="proveedor">Proveedor</option>
                                <option value="empleadoAdmin">Administrador</option>

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
                        src={'/images/Logo_CTM.webp'}
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
