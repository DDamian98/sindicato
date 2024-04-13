import React from 'react'
import Image from 'next/image';
const Footer = () => {
    return (
      <footer className="bg-black">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <Image src="/images/Logo_CTM.png" alt="Logo Comite Mexico" width={40} height={40}> 
                  </Image>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Comite</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Servicios</h2>
                  <ul className="text-gray-300  font-medium">
                      <li className="mb-4">
                          <a href="" className=" hover:text-primary">Asesoria Laboral</a>
                      </li>
                      <li className='mb-4'>
                          <a href="" className="hover:text-primary">Gestión Laboral</a>
                      </li>
                      <li>
                          <a href="" className="hover:text-primary">Capacitación Laboral</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Difusión</h2>
                  <ul className="text-gray-300 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:text-primary ">Eventos</a>
                      </li>
                      <li  className="mb-4">
                          <a href="" className="hover:text-primary">Noticia</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:text-primary">Comunicación CTM</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase hover:text-primary ">
                    <a href="" className='p-3 bg-primary hover:text-white'>Contactanos</a></h2>
                  
              </div>
          </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="text-center">
          <span className="text-sm  text-white/80 sm:text-center ">© 2023 <a href="/" className="hover:underline">La Confederación de Trabajadores de México</a>. Todos los derechos resevados.
          </span>
      </div>
    </div>
</footer>
    );
  };
  
  export default Footer;
  