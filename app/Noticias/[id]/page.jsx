'use client'
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from "@/app/Components/Menu/Nav";
import Footer from "@/app/Components/Footer/Footer";
import Social from "@/app/Components/Social/Social";
import Enlaces from "@/app/Components/Enlaces/Enlaces";
import CardEventoId from "@/app/Components/CardEvento/CardEventoId";
import CardNoticiaId from "@/app/Components/CardNoticia/CardNoticiaId";

const NoticiaDetails = ({ params }) => {
    const { id } = params
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
            <div className='bg-white z-50 sticky top-0 shadow-md'>
                <Nav />
            </div>
            <div className="max-w-7xl mx-auto gap-8  px-10 text-secundary ">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={fromLeftVariants}
                >
                    <CardNoticiaId idnoticia={id} />
                </motion.div>



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
    )
};

export default NoticiaDetails;
