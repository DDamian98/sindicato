"use client"
import React from "react";
import Image from 'next/image';
import CardNoticia from "../Components/CardNoticia/CardNoticia";
import Enlaces from "../Components/Enlaces/Enlaces";
import { motion } from 'framer-motion';
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";

const Noticias = () => {
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
          <div className="absolute bottom-0 left-0 right-0 text-white text-center py-4 rounded-b-lg bg-gradient-to-t from-black/60 to-transparent">
            <h1 className="text-4xl font-bold">Noticias</h1>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto  gap-8 my-10 px-10 text-secundary md:pt-5 ">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={fromLeftVariants}
          className="text-secundary/80"
        >
          <CardNoticia />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Enlaces />
        </motion.div>
      </div>
      <Social />
      <Footer />
    </div>

  );
};

export default Noticias;