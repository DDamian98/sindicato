'use client'
import { Alert } from 'flowbite-react';
import Banner from './Components/Banner/Banner';
import Beneficios from './Components/Beneficio/Beneficios';
import Empresas from './Components/Empresas Afiliadas/Empresas';
import Representantes from './Components/Representantes/Representantes';
import Image from 'next/image';
import Enlaces from './Components/Enlaces/Enlaces';
import { motion } from 'framer-motion';
import CardNoticiaDetail from './Components/CardNoticia/CardNoticiaDetail';
import CardEventoDetail from './Components/CardEvento/CardEventoDetail';
import Nav from './Components/Menu/Nav';
import Social from './Components/Social/Social';
import Footer from './Components/Footer/Footer';
import AlianzasEstrategicas from './Components/AlianzasEstrategicas/AlianzasEstrategicas';

export default function Home() {
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
    <div className="bg-white">
      <div className='bg-white z-50 sticky top-0 shadow-md'>
        <Nav />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Banner />
      </motion.div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white">
          <AlianzasEstrategicas />
          <Beneficios />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mx-auto max-w-full py-2 sm:py-4"
        >
          <div className="relative isolate overflow-hidden bg-bgprimary px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="bg-primary" />
                  <stop offset={1} stopColor="bg-border" />
                </radialGradient>
              </defs>
            </svg>
            <div className="flex flex-col mx-auto max-w-7xl py-7 text-center lg:mx-0 lg:flex-row lg:gap-x-6 lg:max-w-none">
              <div className="flex-auto lg:w-3/4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Confederación de Trabajadores de México
                </h2>
                <p className="mt-6 px-8 text-lg leading-8 text-gray-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-primary/90 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary/100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"          >
                    Contactanos
                  </a>
                  <a href="#" className="text-lg font-semibold leading-6 py-2.5 text-border border-b-2 border-border">
                    Servicios <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="flex-auto mt-16 lg:w-1/4 lg:mt-0">
                <Image
                  className="w-full max-w-none rounded-md "
                  src="/images/Logo_CTM.png"
                  alt="Confederación de Trabajadores de México"
                  width={200}
                  height={300}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fromLeftVariants}
        >
          <div className='max-w-7xl mx-auto flex flex-wrap gap-10 items-center justify-center ' >
            <CardNoticiaDetail />
            <CardEventoDetail />

          </div>
          <Representantes />
        </motion.div>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={fromRightVariants}
          >
          </motion.div>
          <Enlaces />

        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Empresas />
        </motion.div>
      </main>
      <Social />
      <Footer />
    </div>
  );
}

