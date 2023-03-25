import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tailwindcss/dist/tailwind.css';

function Footer() {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-100 uppercase mb-2">Footer Section 1</span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 1</a></span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 2</a></span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 3</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-100 uppercase mt-4 md:mt-0 mb-2">Footer Section 2</span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 1</a></span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 2</a></span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 3</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-100 uppercase mt-4 md:mt-0 mb-2">Footer Section 3</span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 1</a></span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 2</a></span>
              <span className="my-2"><a href="#" className="text-gray-400 text-md hover:text-gray-100">Link 3</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t border-gray-700 py-5">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-auto text-center sm:text-left">
              <span className="text-gray-400 text-sm">© 2023 Your Company. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
