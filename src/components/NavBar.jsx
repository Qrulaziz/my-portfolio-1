import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { links } from '../model/dataModel.js';
import {Link} from "react-scroll";

const NavBar = () => {
  const [navView, setNavView] = useState(false);    

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className="text-5xl font-semibold ml-2">Qrulaziz</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-100 duration-200">
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNavView(!navView)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
            {navView ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {navView && (
            <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-[60%] h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {links.map(({id, link}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <Link onClick={() => setNavView(!navView)} to={link} smooth duration={450}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default NavBar