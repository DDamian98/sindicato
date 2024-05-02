'use client'
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";
import Beneficios from "../Components/Beneficio/Beneficios";
import Empresas from "../Components/Empresas Afiliadas/Empresas";

const ProgramaLealtad = () => {
    const imageUrls = [{
        imagen: "/images/Calzado.png",
        nombre: "Calzado"
    },
    {
        imagen: "/images/Ropa.png",
        nombre: "Ropa"
    },
    {
        imagen: "/images/Bebidas.png",
        nombre: "Bebidas"
    },
    {
        imagen: "/images/Ferretería.png",
        nombre: "Ferretería"
    },
    {
        imagen: "/images/Asesoría.png",
        nombre: "Asesoría"
    },
    {
        imagen: "/images/Educación.png",
        nombre: "Educación"
    },
    {
        imagen: "/images/Hogar.png",
        nombre: "Hogar"
    },
    {
        imagen: "/images/Salud.png",
        nombre: "Salud"
    }];



    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const fromLeftVariants = {
        offscreen: {
            x: -150,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.2
            }
        }
    };
    const fromRightVariants = {
        offscreen: {
            x: 150,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.2
            }
        }
    };
    return (
        <div className="w-full mx-auto  bg-white">
            {/* Banner con la palabra "Nosotros" */}
            <div className='bg-white z-50 sticky top-0 shadow-md'>
                <Nav />
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className=" max-h-screen relative">
                    <div className="w-full h-[400px] sm:h-[380px] xl:h-[480px] 2xl:h-[480px] relative">
                        <Image
                            src="/images/G1.jpeg"
                            alt="Banner Nosotros"
                            layout="fill" objectFit="cover"
                        />
                    </div>

                </div>

            </motion.div>

            <div className="max-w-5xl mx-auto  gap-8  px-10 text-secundary md:pt-5 ">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={fromLeftVariants}
                >
                    <h1 className="text-2xl font-bold text-center p-2">Programa de Beneficio y Descuento</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">¿Para quién va dirigido?</h2>
                        <p className="text-lg pl-3 text-secundary/80 z-20">El programa de beneficios y descuentos va dirigido a nuestros compañeros sindicalizados y sus familias , con el objetivo de aprovechar descuentos, becas, precios especiales y promociones de  nuestros proveedores aliados  que podrán dar atención presencial y virtual a los interesados.

                        </p>
                    </div>
                    <div className="mt-8">
                        <Beneficios />

                    </div>

                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={fromLeftVariants}
                >
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">Empresas afiliadas</h2>
                        <p className="text-lg pl-3 text-secundary/80 z-20">
                            Ampliamos nuestras categorías de productos y servicios con la finalidad de fortalecer la nueva cultura laboral- Conectando empresas de Querétaro, Guadalajara, Ciudad de México, Argentina, Chile, Perú, Colombia con una gran variedad de productos y servicios.
                        </p>
                        <div className="grid">
                            <span className="text-lg pl-3 text-secundary/80 z-20 font-bold">Canales de Comunicación externos</span>
                            <div className="flex flex-wrap items-center text-center justify-center gap-8 mt-4">
                                {imageUrls.map((imagen, index) => (

                                    <div key={index} className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2  w-28 h-28">
                                        <Image
                                            src={imagen.imagen}
                                            alt={imagen.nombre}
                                            width={100}
                                            height={100}
                                            className=" w-14 h-16 mx-auto pt-6"
                                        />
                                        <div className="p-4">
                                            <span className="font-bold text-primary">{imagen.nombre}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">Ser Proveedor</h2>
                            <p className="text-lg pl-3 text-secundary/80 z-20">
                                Si te interesa sumarte como proveedor al programa de descuentos y beneficios, registra tus datos en el siguiente enlace para que uno de nuestros representantes se ponga en contacto contigo y darte mas detalles de la colaboración.                            </p>
                            <div className="flex items-center gap-8 flex-wrap justify-center ">
                                <a href="https://forms.gle/gGKEP9aQfBesU1556 " target="black__" className="bg-red-700 hover:bg-red-600 p-4 text-white w-48 text-center font-bold">Registrate!</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <Enlaces />
                </motion.div>
            </div >
            <Social />
            <Footer />
        </div >

    );
};

export default ProgramaLealtad;