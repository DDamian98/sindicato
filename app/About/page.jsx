'use client'
import React from "react";
import Representantes from "../Components/Representantes/Representantes";
import Image from 'next/image';
import Social from "../Components/Social/Social";
import styles from "./styles.module.css"
import Enlaces from "../Components/Enlaces/Enlaces";
import { motion } from 'framer-motion';
import Nav from "../Components/Menu/Nav";
import Footer from "../Components/Footer/Footer";

const Nosotros = () => {
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
              src="/images/ctm_capacitación.jpg"
              alt="Banner Nosotros"
              layout="fill" objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0  text-white text-center py-4 rounded-b-lg">
            <h1 className="text-3xl font-semibold text-primary">Nosotros</h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-secundary md:pt-5">
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3">Historia</h2>
            <p className="text-lg pl-3 text-secundary/80 ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque rutrum, cubilia pretium taciti id mattis ac dictum consequat dui, nascetur augue quisque dignissim ultricies tempor euismod donec. Integer porta in interdum lectus erat convallis magnis feugiat turpis suspendisse faucibus nascetur, accumsan risus quam mus ullamcorper fusce praesent venenatis habitasse pharetra. Imperdiet tempus eleifend sed ligula platea dictum sollicitudin turpis facilisi primis, mus dictumst est quisque justo sagittis magna tristique sapien, porta lacinia feugiat velit volutpat nisi dui class ut.


            </p>
          </div>
          <div className="text-center mx-auto ">
            <Image src="/images/Logo_CTM.webp" width={400} height={400} alt="curso">
            </Image>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={fromLeftVariants}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-secundary md:pt-5">
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3">Misión</h2>
            <p className="text-lg pl-3 text-secundary/80 ">En esta Federación Regional optamos por la libertad sindical, de acuerdo a los lineamientos de la Organización Internacional del Trabajo y por ello brindamos asesoría personalizada en cada caso, a nuestros sindicatos afiliados, existe libertad para administrar su contrato y finanzas.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3">Visión</h2>
            <p className="text-lg pl-3 text-secundary/80 ">El sindicalismo de vanguardia que promueve la “Federación Regional de Trabajadores Sección 1 del Estado de Querétaro CTM”, dentro de la Nueva Cultura Laboral tiene como objetivo principal el desarrollo humano del trabajador, como factor determinante de la productividad y competitividad de las empresas.</p>
          </div>
        </div>
      </motion.div>
      <div className={`${styles.bg} py-4`}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fromRightVariants}>
          <div className="max-w-5xl mx-auto">
            <h2 class="text-white font-bold text-center text-3xl my-8 ">Nuestros valores</h2>
          </div>
          <div className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   mb-20 text-secundary text-center">
            <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="text-primary w-28 h-28 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                <path stroke="currentColor" strokeWidth="2" d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-3.4c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" /></svg>
              <div className="p-4">
                <p className="text-base ">Consideramos al trabajador como persona con dignidad y no como un recurso más de la Empresa.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2 ">
              <svg class="w-28 h-28 text-primary mx-auto pt-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
              </svg>
              <div className="p-4">
                <p className="text-base">Consideramos al trabajo como el medio idóneo para la superación del ser humano y su plena realización.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="text-primary w-28 h-28 mx-auto pt-6" aria-hidden="true" fill="currentColor">
                <path d="M488.2 59.1C478.1 99.6 441.7 128 400 128s-78.1-28.4-88.2-68.9L303 24.2C298.8 7.1 281.4-3.3 264.2 1S236.7 22.6 241 39.8l8.7 34.9c11 44 40.2 79.6 78.3 99.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V174.3c38.1-20 67.3-55.6 78.3-99.6L559 39.8c4.3-17.1-6.1-34.5-23.3-38.8S501.2 7.1 497 24.2l-8.7 34.9zM400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zm-8 32c-35.3 0-64 28.7-64 64v96l0 .6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352H88V480c0 17.7 14.3 32 32 32s32-14.3 32-32V252.7l13 20.5c5.9 9.2 16.1 14.9 27 14.9h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H209.6l-37.4-58.9C157.6 142 132.1 128 104.7 128H72z" />
              </svg>
              <div className="p-4">
                <p className="text-base">Los sindicatos son las organizaciones que generan opciones de mejoramiento de vida de sus miembros, mediante el estímulo a su potencialidad individual.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2">
              <svg class="w-28 h-28 text-primary mx-auto pt-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
              </svg>
              <div className="p-4">
                <p className="text-base">Impulsamos la productividad como un beneficio que genera riqueza para lograr la realización de los intereses legítimos de las partes de la relación laboral; utilidades para la empresa y mejoramiento de las condiciones de vida del trabajador y su familia.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


      <div className="max-w-5xl mx-auto py-4 ">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fromLeftVariants}
        >
          <Representantes />
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

export default Nosotros;