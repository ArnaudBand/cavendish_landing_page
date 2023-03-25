import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">
            <a className="text-gray-800 hover:text-gray-900" href="#">
              {/* <img src="https://www.cavendish.ac.ug/wp-content/themes/CUU_wp_2023/img/retouched-logo.png" alt="" /> */}
              Cavendish
            </a>
          </div>

          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              {isOpen ? (
                <AiOutlineClose />
                ) : (
                <AiOutlineMenu />
              )}
            </button>
          </div>
        </div>

        <div className={`md:flex justify-between items-center ${isOpen ? "block" : "hidden"}`}>
          <a className="block text-white hover:text-gray-600 mt-4 md:mt-0 md:inline-block px-3" href="#">Home</a>
          <a className="block text-white hover:text-gray-600 mt-4 md:mt-0 md:inline-block px-3" href="#">Features</a>
          <a className="block text-white hover:text-gray-600 mt-4 md:mt-0 md:inline-block px-3" href="#">Pricing</a>
          <a className="block text-white hover:text-gray-600 mt-4 md:mt-0 md:inline-block px-3" href="#">Contact Us</a>
          <button className="py-2 px-4 bg-white-600 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;