'use client'
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";
import AlianzasEstrategicas from "../Components/AlianzasEstrategicas/AlianzasEstrategicas";

const AlianzasEstrate = () => {
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
                            src="/images/Alianzas_comerciales.jpg"
                            alt="Banner Nosotros"
                            layout="fill" objectFit="cover"
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
                        <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">Alianzas Estratégicas</h2>
                        <p className="text-lg pl-3 text-secundary/80 z-20">Nuestros aliados estratégicos son un pilar clave en el crecimiento y evolución del sindicato en la nueva cultura laboral.
                        </p>
                    </div>
                    <div className="mt-6">
                        <AlianzasEstrategicas />
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

export default AlianzasEstrate;