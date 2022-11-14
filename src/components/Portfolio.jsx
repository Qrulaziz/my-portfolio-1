import React from 'react';
import { portfolios } from '../model/dataModel.js';

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-44">
          <p className="text-4xl font-bold text-center border-b-4 border-gray-500">Portfolio</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({id, src}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-100" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio