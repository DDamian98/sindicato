'use client'
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";
import CardComunicacion from "../Components/CardComunicacion/CardComunicacion";

const Comunicacion = () => {
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
                    <div className="w-full h-[400px] max-sm:h-[250px] xl:h-[480px] 2xl:h-[480px] relative">
                        <Image
                            src="/images2/11.png"
                            alt="Banner Nosotros"
                            layout="fill"
                        />
                    </div>

                </div>

            </motion.div>

            <div className="max-w-5xl mx-auto  gap-8 my-10 px-10 text-secundary md:pt-5 ">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={fromLeftVariants}
                >
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <div className="absolute opacity-15 inset-x-0 mx-auto flex justify-center ">
                            <Image src="/images/Logo_CTM.webp" width={200} height={200} objectFit="cover" alt="Confederación de Trabajadores de México" className="mx-auto text-center max-md:hidden">
                            </Image>
                        </div>

                        <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">Comunicación CTM</h2>
                        <p className="text-lg pl-3 text-secundary/80 z-20">Difundimos nuestras actividades a través de los medios de comunicación y en la edición de nuestro periódico Federación Regional de Trabajadores Sección Uno del Estado de Querétaro CTM, con la intención de consolidar las relaciones entre las empresas y sus trabajadores.
                        </p>
                        <p className="text-lg pl-3 text-secundary/80 z-20">Además de utilizar nuestros canales de comunicación internos y externos que permite que nuestros compañeros sindicalizados estén informados sobre acontecimientos laborales o beneficios para ellos o sus familias.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="grid">
                            <span className="text-lg pl-3 text-secundary/80 z-20 font-bold">Canales de Comunicación externos</span>
                            <div className="flex flex-wrap items-center text-center justify-center gap-8 mt-4">
                                <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2  w-28 h-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="text-primary  w-16 h-16 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                                        <path stroke="currentColor" strokeWidth="2" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" /></svg>
                                    <div className="p-4">
                                        <span>Página web</span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2  w-28 h-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-primary w-16 h-16 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                                        <path stroke="currentColor" strokeWidth="2" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                                    <div className="p-4">
                                        <span>Redes Sociales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <span className="text-lg pl-3 text-secundary/80 z-20 font-bold">Canales de Comunicación interna</span>
                            <div className="flex flex-wrap  items-center justify-center gap-8 text-center mt-4">
                                <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2 w-28 h-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-primary w-16 h-16 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                                        <path stroke="currentColor" strokeWidth="2" d="M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z" /></svg>
                                    <div className="p-4">
                                        <span >Carteles</span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2  w-28 h-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="text-primary w-16 h-16 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                                        <path stroke="currentColor" strokeWidth="2" d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z" /></svg>
                                    <div className="p-4">
                                        <span>Material electrónico</span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2  w-28 h-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384  512" className="text-primary w-16 h-16 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                                        <path stroke="currentColor" strokeWidth="2" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" /></svg>
                                    <div className="p-4">
                                        <span>Sistemas de comunicación (App)</span>
                                    </div>
                                </div>
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
                    <div className="mt-8">
                        <CardComunicacion />

                    </div>
                    <Enlaces />
                </motion.div>
            </div >
            <Social />
            <Footer />
        </div >

    );
};

export default Comunicacion;