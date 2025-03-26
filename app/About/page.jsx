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
import RepresentantesEmpresa from "../Components/Representantes/RepresentantesEmpresa";

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
      <div className="bg-white z-50 sticky top-0 shadow-md">
        <Nav />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className=" max-h-screen relative">
          <div className="w-full h-[400px] max-sm:h-[250px] xl:h-[480px] 2xl:h-[480px] relative">
            <Image src="/images2/11.png" alt="Banner Nosotros" layout="fill" />
          </div>
          <div className="absolute bottom-0 left-0 right-0  text-white text-center py-4 rounded-b-lg"></div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1  my-10 text-secundary md:pt-5">
          <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3">
            Nosotros
          </h2>
          <iframe
            className=" w-[680px] max-md:w-full mx-auto"
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/nU0hpfRVAlI"
            title="Secretario General"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={fromLeftVariants}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-secundary ">
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3">
              Misión
            </h2>
            <p className="text-lg pl-3 text-secundary/80 ">
              En esta Federación Regional optamos por la libertad sindical, de
              acuerdo a los lineamientos de la Organización Internacional del
              Trabajo y por ello brindamos asesoría personalizada en cada caso,
              a nuestros sindicatos afiliados, existe libertad para administrar
              su contrato y finanzas.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3">
              Visión
            </h2>
            <p className="text-lg pl-3 text-secundary/80 ">
              El sindicalismo de vanguardia que promueve la “Federación Regional
              de Trabajadores Sección 1 del Estado de Querétaro CTM”, dentro de
              la Nueva Cultura Laboral tiene como objetivo principal el
              desarrollo humano del trabajador, como factor determinante de la
              productividad y competitividad de las empresas.
            </p>
          </div>
        </div>
      </motion.div>
      <div className={`${styles.bg} py-4`}>
        <div className="max-w-5xl mx-auto">
          <h2 class="text-white font-bold text-center text-3xl my-8 ">
            Nuestros valores
          </h2>
        </div>
        <div className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   mb-20 text-secundary text-center">
          <div className="bg-white rounded-lg overflow-hidden  shadow-lg border-gray-200 border-2">
            <Image
              src="images/Valor1.png"
              width={112}
              height={112}
              alt="Valor"
              className="mx-auto pt-6"
            ></Image>
            <div className="p-4">
              <p className="text-base ">
                Consideramos al trabajador como persona con dignidad y no como
                un recurso más de la Empresa.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2 ">
            <Image
              src="images/Valor2.png"
              width={112}
              height={112}
              alt="Valor"
              className="mx-auto pt-6"
            ></Image>
            <div className="p-4">
              <p className="text-base">
                Consideramos al trabajo como el medio idóneo para la superación
                del ser humano y su plena realización.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2">
            <Image
              src="images/Valor3.png"
              width={112}
              height={112}
              alt="Valor"
              className="mx-auto pt-6"
            ></Image>
            <div className="p-4">
              <p className="text-base">
                Los sindicatos son las organizaciones que generan opciones de
                mejoramiento de vida de sus miembros, mediante el estímulo a su
                potencialidad individual.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2">
            <Image
              src="images/Valor4.png"
              width={112}
              height={112}
              alt="Valor"
              className="mx-auto pt-6"
            ></Image>
            <div className="p-4">
              <p className="text-base">
                Impulsamos la productividad como un beneficio que genera riqueza
                para lograr la realización de los intereses legítimos de las
                partes de la relación laboral; utilidades para la empresa y
                mejoramiento de las condiciones de vida del trabajador y su
                familia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-4 ">
        <Representantes />
        <div className="grid grid-cols-1 md:grid-cols-1">
          <h2 className="text-2xl font-semibold mb-2 border-l-4  border-border pl-3 z-20 text-secundary">
            ¿Cómo estamos conformados?
          </h2>
          <p className="text-lg pl-3 text-secundary/80 z-20">
            Federación Regional Sección 1 CTM
          </p>
          <span className="text-2xl pl-3 text-secundary/80 font-bold mt-4 text-center">
            Sindicato de Industrial de Maquiladoras
          </span>
          <div className="flex flex-col flex-wrap  justify-center items-center text-center gap-8 mt-4 ">
            {/* <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">Sección Mann+Hummel</span>
              <div className="grid place-content-center place-items-center pt-4 text-center">
                <Image src="https://i.postimg.cc/Y9BpYsj2/Mann-Hummel.jpg" width={300} height={180} objectFit="cover" alt="Mann+Hummel" >
                </Image>
              </div>
              <RepresentantesEmpresa Empresa={'MANN+HUMMEL'} />
            </div> */}
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección Novem Car
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/6pVzB7RH/Novem.jpg"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"NOVEM"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección Industrias CROWN Montacargas
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/NGm5LRJk/CROWN-Montacargas.jpg "
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"CROWN"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección FOAM Fabricators
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/NjwqNHBb/FOAM.jpg"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"FOAM"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección MSA
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/02DhJyDS/Msa.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"MSA"} />
            </div>
            {/* <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">Sección EXCELSIOR</span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image src="https://i.postimg.cc/Y9BpYsj2/Mann-Hummel.jpg" width={300} height={180} objectFit="cover" alt="Mann+Hummel" >
                </Image>
              </div>

            </div> */}
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección WIELAND
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/4NWVPz6R/Wieland.png"
                  width={300}
                  height={150}
                  objectFit="cover"
                  alt="Mann+Hummel"
                  className="w-[200px] h-[120px]"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"WIELAND"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección de Ganaderos y Asociados de Querétaro
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/Y2WtbkQr/Ganaderos-y-Asociados-de-Quer-taro.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
            </div>
            {/* <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">Sección MANN FILTER</span>
              <div className="grid place-content-center place-items-center pt-4">

                <Image src="https://i.postimg.cc/Y9BpYsj2/Mann-Hummel.jpg" width={300} height={180} objectFit="cover" alt="Mann+Hummel" >
                </Image>
              </div>
            </div> */}
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sección AMERICAN MUFFLER
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/TYKNrYb0/American-Muffler.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                  className="h-[120px]"
                ></Image>
              </div>
            </div>
          </div>

          <span className="text-2xl pl-3 text-secundary/80 font-bold mt-4 text-center">
            Sindicato únicos
          </span>
          <div className="flex flex-col flex-wrap  justify-center items-center text-center gap-8 mt-4 ">
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                RIDE CONTROL
              </span>
              <div className="grid place-content-center place-items-center pt-4 text-center">
                <Image
                  src="https://i.postimg.cc/28GFJpfJ/RIDE-CONTROL.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"RIDE CONTROL MEXICANA"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                EXPO HORT
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/fytnP7Vq/EXPOR-HORT.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"EXPO HORT"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                TRACTO CAMIONES EUROPEOS
              </span>
              <div className="grid place-content-center place-items-center pt-4">
                <Image
                  src="https://i.postimg.cc/x8C2KyfV/7fe376c2-1d40-465a-97df-60017bbeaad8.jpg "
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
              <RepresentantesEmpresa Empresa={"TRACTO CAMIONES EUROPEOS"} />
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">SOLAMEX</span>
              <div className="grid place-content-center place-items-center pt-2">
                <Image
                  src="https://i.postimg.cc/2S7ySPhZ/SOLAMEX.png"
                  width={300}
                  height={140}
                  className="h-[120px]"
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
            </div>
          </div>

          <span className="text-2xl pl-3 text-secundary/80 font-bold mt-4 text-center ">
            Organizaciones de Transporte y Materiales
          </span>
          <div className="flex flex-col flex-wrap  justify-center items-center text-center gap-8 mt-4 ">
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sindicato de Taxistas
              </span>
              <div className="grid place-content-center place-items-center pt-4 text-center">
                <Image
                  src="https://i.postimg.cc/Zqjy1Qvc/ORGANIZACI-N-DE-TAXISTAS.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col flex-grow   p-2 duration-300 ease-in-out  ">
              <span className="text-secundary font-bold text-xl">
                Sindicato de Camiones Materialistas
              </span>
              <div className="grid place-content-center place-items-center">
                <Image
                  src="https://i.postimg.cc/tR8DS1jg/ORGANIZACI-N-DE-CAMIONES-MATERIALISTAS.png"
                  width={300}
                  height={180}
                  objectFit="cover"
                  alt="Mann+Hummel"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <Enlaces />
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Nosotros;