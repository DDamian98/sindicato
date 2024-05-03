'use client'
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";

const BolsaTrabajo = () => {
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
                            src="/images2/4.png"
                            alt="Bolsa de trabajo ctm sección 1"
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
                        <h2 className="text-2xl font-semibold mb-2 border-l-4  border-primary pl-3 z-20">Bolsa de Trabajo</h2>
                        <p className="text-lg pl-3 text-secundary/80 z-20">Contamos con bolsa de trabajo en la que permite que personas de Querétaro y otras ciudades compartan su cv o experiencia laboral, para  dirigirlos  con las empresas afiliadas y ellas puedan contactarlos para continuar con el proceso de reclutamiento.
                        </p>
                        <p className="text-lg pl-3 text-secundary/80 z-20">
                            También realizamos 2 ferias de empleo al año , en modalidad presencial y virtual para que las empresas afiliadas puedan recibir cv´s, solicitud de empleo y realizar entrevistas durante la feria. En colaboración con el Centro Virtual de Negocios que mediante tecnología como: aplicación móvil, Inteligencia Artificial, realidad virtual y mixta, para acercarnos a las nuevas generaciones.
                        </p>
                        <div className="flex items-center gap-8 flex-wrap justify-center ">
                            <span className="text-lg pl-3 text-secundary/80 z-20 font-bold">Déjanos tus datos en el siguiente enlace </span>
                            <a href="https://forms.gle/4Mdpos1YvgRAdaFJA" target="black__" className="bg-red-700 hover:bg-red-600 p-4 text-white w-48 text-center font-bold">Registrate!</a>
                        </div>

                    </div>

                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={fromRightVariants}
                >
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

export default BolsaTrabajo;