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

            <div className=" max-w-7xl mx-auto  py-7 text-center">
              <iframe className=' w-[680px] max-md:w-full mx-auto' width="100%" height="480" src="https://www.youtube.com/embed/nU0hpfRVAlI" title="Secretario General" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fromLeftVariants}
        >
          <div className='max-w-7xl mx-auto  gap-10 grid grid-cols-1 md:grid-cols-2  ' >
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

