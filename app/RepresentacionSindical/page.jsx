"use client"
import React from "react";
import Image from 'next/image';
import Empresas from "../Components/Empresas Afiliadas/Empresas";
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";

const RepresentaciónSindical = () => {
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
      {/* Banner con la palabra "Nosotros" */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className=" max-h-screen relative">
          <div className="w-full h-[400px] max-sm:h-[250px] xl:h-[480px] 2xl:h-[480px] relative">
            <Image
              src="/images2/14.png"
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
          variants={fromLeftVariants}
          className="text-secundary/80"
        >
          <div className="flex flex-col mx-auto  lg:mx-0 lg:flex-row lg:gap-x-6 lg:max-w-none">
            <div className="flex-auto lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2 border-l-4  border-primary pl-3 z-20">Representación Sindical</h2>
              <p className="text-lg pl-3 text-secundary/80 z-20">Promovemos la formación profesional de nuestros afiliados, mediante la coordinación de esfuerzos en materia de capacitación y adiestramiento con las autoridades del trabajo federales y del Gobierno del Estado de Querétaro.
                En síntesis, nuestro compromiso es estructurar una clase trabajadora  capacitada, con valores del trabajo, competitiva, que contribuya a atraer y retener inversiones para consolidar a Querétaro como un polo de desarrollo con sólida estabilidad laboral.
              </p>
              <div className="grid place-content-center py-4 text-center">
                <a
                  href="#"
                  className="rounded-md bg-primary/90 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary/100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Me Interesa <span aria-hidden="true">→</span>
                </a>
              </div>

            </div>
            <div className="mx-auto">
              <Image src="/images/G1.jpeg" width={400} height={600} objectFit="cover" alt="Representante sindical"></Image>
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
      </div>
      <Social />
      <Footer />
    </div>

  );
};

export default RepresentaciónSindical;