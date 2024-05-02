"use client"
import React, { useState } from "react";
import Image from "next/image";
import CardCurso from "../Components/CardCurso/CardCurso";
import { motion } from 'framer-motion';
import Enlaces from "../Components/Enlaces/Enlaces";
import Nav from "../Components/Menu/Nav";
import Social from "../Components/Social/Social";
import Footer from "../Components/Footer/Footer";

const Capacitacion = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Todos");

  const handleFiltrarCursos = () => {
    setTipoSeleccionado("Cursos");
  };

  const handleFiltrarTalleres = () => {
    setTipoSeleccionado("Talleres");
  };
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
          <div className="w-full h-[400px] sm:h-[380px] xl:h-[480px] 2xl:h-[480px] relative">
            <Image
              src="/images/Capacitaion_1.jpeg"
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
            <div className="absolute opacity-15 inset-x-0 mx-auto flex justify-center ">
              <Image
                src="/images/Logo_CTM.webp"
                width={220}
                height={220}
                objectFit="cover"
                alt="Confederación de Trabajadores de México"
                className="mx-auto text-center"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-primary pl-3 z-20">
              Capacitación Laboral
            </h2>
            <p className="text-lg pl-3 text-secundary/80 z-20">
              Capacitamos a los Comités Sindicales para la administración de sus
              Contratos Colectivos de Trabajo, dentro del marco jurídico y legal
              vigente en México; con visión negociadora, ajena a la confrontación,
              sin menoscabar el derecho de los trabajadores, tenemos 24 cursos
              registrados en la STPS. En materia de Modernidad laboral, Productividad,
              Competitividad, Comisiones Mixtas de Capacitación y Adiestramiento para
              fomentar las Competencias técnicas y formales y la cultura de la Seguridad,
              Higiene y Medio Ambiente del Trabajo cuidando la integridad de nuestros agremiados.
            </p>
            <div className="flex justify-center my-4">
              <button
                className={`mr-4 px-4 py-2 rounded-lg border border-primary text-primary ${tipoSeleccionado === "Todos" ? "bg-primary text-white" : ""
                  }`}
                onClick={() => setTipoSeleccionado("Todos")}
              >
                Todos
              </button>
              <button
                className={`px-4 py-2 rounded-lg border border-primary text-primary ${tipoSeleccionado === "Cursos" ? "bg-primary text-white" : ""
                  }`}
                onClick={handleFiltrarCursos}
              >
                Cursos
              </button>
              <button
                className={`ml-4 px-4 py-2 rounded-lg border border-primary text-primary ${tipoSeleccionado === "Talleres" ? "bg-primary text-white" : ""
                  }`}
                onClick={handleFiltrarTalleres}
              >
                Talleres
              </button>
            </div>
          </div>
        </motion.div>

        <div className="my-10 gap-8 mx-auto">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={fromLeftVariants}>
            <CardCurso tipoSeleccionado={tipoSeleccionado} />
          </motion.div>
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

export default Capacitacion;
