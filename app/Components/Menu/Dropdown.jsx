// components/Dropdown.js
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Dropdown = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-start  w-full  border-gray-300 bg-white sm:pr-4 sm:py-2 sm:text-[16px]  md:pr-4 md:py-0  pl-3  text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  dark:text-gray-300 "
      >
        <span className='hover:text-primary'>Servicios </span>
        <svg className="w-3 h-3 mx-1 my-auto text-secundary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
        </svg>

      </button>
      {isOpen && (
        <div className="origin-top-right sm:relative md:absolute  top-0 sm:mt-2 md:mt-8 shadow-lg bg-white z-50   dark:bg-gray-800 sm:w-full md:w-56">
          <a
            href="/AsesoriaLaboral"
            className="block px-4 py-2 text-sm text-secundary dark:text-gray-300 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-600"
            role="menuitem"
          >
            Asesoria Laboral
          </a>
          <a
            href="/GestionLaboral"
            className="block px-4 py-2 text-sm text-secundary dark:text-gray-300 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-600"
            role="menuitem"
          >
            Gestión Laboral

          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-secundary dark:text-gray-300 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-600"
            role="menuitem"
          >
            Alianza Comercial
          </a>
          <a
            href="Capacitacion"
            className="block px-4 py-2 text-sm text-secundary dark:text-gray-300 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-600"
            role="menuitem"
          >
            Capacitación Laboral
          </a>
          <a
            href="/RepresentacionSindical"
            className="block px-4 py-2 text-sm text-secundary dark:text-gray-300 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-600"
            role="menuitem"
          >
            Representación sindical
          </a>
        </div>
      )}
    </div>

  );
};

export default Dropdown;
