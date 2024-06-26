'use client'
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";

const GestionLaboral = () => {
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
      {/* Banner con la palabra "Nosotros" */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className=" max-h-screen relative">
          <div className="w-full h-[400px] max-sm:h-[250px] xl:h-[480px] 2xl:h-[480px] relative">
            <Image
              src="/images2/4.png"
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
              <Image src="/images/Logo_CTM.webp" width={300} height={300} objectFit="cover" alt="Confederación de Trabajadores de México" className="mx-auto text-center">
              </Image>
            </div>

            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20">Gestión Laboral</h2>
            <p className="text-lg pl-3 text-secundary/80 z-20">Nos actualizamos permanentemente en prácticas sindicales, con el apoyo de la Organización Internacional del Trabajo, Fundación Friederich Ebert, Secretaría del Trabajo y Previsión Social, Congreso del Trabajo, Servicio Nacional de Empleo y otros Organismos reconocidos.
              Convenimos con el Instituto Mexicano del Seguro Social, la impartición de pláticas sobre la nueva Ley del I.M.S.S., a nuestros representantes sindicales con el propósito de evitar ausentismo laboral por la atención a familiares del trabajador que se encuentren en atención médica.
              Participamos con nuestra estructura sindical en el Consejo Consultivo de Higiene, Seguridad y Medio Ambiente en el Trabajo, lo que nos permite conocer las normas oficiales mexicanas en esta materia para que las Comisiones Mixtas de Higiene y Seguridad alcancen el objetivo de disminuir los niveles de accidentes de trabajo.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-row flex-wrap items-center justify-center my-10 gap-8">

          <Image src="/images/G1.jpeg" alt="Capacitacion" className="mx-auto mb-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-border" width={400} height={350} />
          <Image src="/images/G2.jpeg" alt="Capacitacion" className="mx-auto mb-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-border" width={400} height={350} />
          <Image src="/images/Capacitación 1.jpg" alt="Capacitacion" className="mx-auto mb-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-border" width={400} height={350} />
        </div>
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

export default GestionLaboral;