import React from 'react';

function Main() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Main Title</h2>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-3xl text-gray-100 font-bold mb-3">Feature 1</h3>
              <p className="text-gray-400 leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nulla eget magna finibus imperdiet vitae non arcu.</p>
              <a href="#" className="text-purple-500 inline-flex items-center font-semibold tracking-wider">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-3xl text-gray-100 font-bold mb-3">Feature 2</h3>
              <p className="text-gray-400 leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nulla eget magna finibus imperdiet vitae non arcu.</p>
              <a href="#" className="text-purple-500 inline-flex items-center font-semibold tracking-wider">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-3xl text-gray-100 font-bold mb-3">Feature 3</h3>
              <p className="text-gray-400 leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nulla eget magna finibus imperdiet vitae non arcu.</p>
              <a href="#" className="text-purple-500 inline-flex items-center font-semibold tracking-wider">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;