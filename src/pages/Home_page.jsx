import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';


function Home_page() {
  return (
    <div className="bg-gray-100">
      <Header />

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to Cavendish University of Uganda</h1>
          <h2 className="text-center text-xl text-gray-700 mt-4">Cavendish University Uganda (CUU) is a leading Private University in Uganda established in 2008 and is licensed and accredited by the Uganda National Council for Higher Education (NCHE).</h2>

          <div className="flex justify-center mt-8">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </header>
      <Main />
      <Footer />
    </div>
  )
}


export default Home_page;