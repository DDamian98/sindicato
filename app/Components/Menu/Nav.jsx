'use client'
import { Navbar, Button } from 'flowbite-react';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Image from "next/image";

const Nav = () => {
  return (
    <div className=''>
      <Navbar fluid={true} rounded={true} className='max-w-7xl mx-auto'>
        <Navbar.Brand href="/">
          <Image
            src="/images/Logo_CTM.webp"
            width={36}
            height={36}
            alt="Confederación de Trabajadores de México"
            className="h-6 sm:h-9"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <div className="flex max-md:flex-col max-md:items-start items-center justify-between w-full">
            <div className="flex  max-md:flex-col items-center  space-x-4">
              <Navbar.Link href="/" className='hover:text-primary'>
                <span className='hover:text-primary'>Inicio</span>

              </Navbar.Link>
              <Navbar.Link href="/About" className='hover:text-primary'>
                <span className='hover:text-primary'>Nosotros</span>

              </Navbar.Link>
              <Dropdown />
              <Navbar.Link className="hover:text-primary" href="/ProgramaLealtad">
                <span className='hover:text-primary'>Beneficios y Descuentos</span>
              </Navbar.Link>
              <Dropdown2 />
              <Navbar.Link className="hover:text-primary" href="/Contacto">
                <span className='hover:text-primary'>Contacto</span>
              </Navbar.Link>
            </div>
            <Button
              href="/Login"
              className="ml-4 text-white border border-primary bg-red-700 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-white " // Se mantiene el margen izquierdo para el botón
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;

