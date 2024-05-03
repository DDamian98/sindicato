"use client"
import React from "react";
import Image from 'next/image';
import Enlaces from "../Components/Enlaces/Enlaces";
import CardEvento from "../Components/CardEvento/CardEvento";
import { motion } from 'framer-motion';
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";
const Eventos = () => {
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
        <div className="w-full mx-auto bg-white">
            {/* Banner de la página */}
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
                            src="/images2/Evento.png"
                            alt="Banner Nosotros"
                            layout="fill"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 text-white text-center py-4 rounded-b-lg bg-gradient-to-t from-black/60 to-transparent">
                        <h1 className="text-4xl font-bold">Proximos Eventos</h1>
                    </div>
                </div>
            </motion.div>

            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto gap-8 my-10 px-10 text-secundary md:pt-5">
                {/* Sección de eventos */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={fromLeftVariants}
                >
                    <div className=" max-w-5xl grid grid-cols-1 md:grid-cols-1 mx-auto mb-6 ">
                        <div className="absolute opacity-15 inset-x-0 mx-auto flex justify-center ">
                            <Image src="/images/Logo_CTM.webp" width={200} height={200} objectFit="cover" alt="Confederación de Trabajadores de México" className="mx-auto text-center max-md:hidden">
                            </Image>
                        </div>

                        <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">Eventos</h2>
                        <p className="text-lg pl-3 text-secundary/80 z-20">En colaboración con nuestras empresas afiliadas, aliados comerciales y estratégicos realizamos diferentes eventos que van dirigidos para nuestros compañeros sindicalizados para lograr una satisfacción laboral . Algunos de los eventos son: convivencia en fin de año, convenios de colaboración, activaciones de empresas para ofrecer productos y servicios, campañas de prevención para la salud, reuniones , entre otros.
                            En apoyo a nuestras empresas realizamos feria del trabajo con el objetivo de ofrecerles fuentes de empleo a las personas de Querétaro y de otros estados. Con la finalidad de tener capital humano calificado en las empresas.
                        </p>
                    </div>
                </motion.div>

                <section>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={fromLeftVariants}
                        className="text-secundary/80"
                    >
                        <CardEvento />
                    </motion.div>
                </section>

                {/* Sección de enlaces adicionales */}
                <section className="mt-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <Enlaces />
                    </motion.div>
                </section>
            </div>
            <Social />
            <Footer />
        </div>
    );
};

export default Eventos;
