import React from "react";

export default function Navbar() {
    return( 
        <nav className="bg-gray-800 h-12"> 
            <ul className="flex leading-10 place-content-evenly items-center">
                <h2 className="w-96 hover:text-blue-300 text-white">Navbar</h2>
           <li > <a className="hover:text-blue-300 text-white" href="#">Home</a></li>
           <li > <a className="hover:text-blue-300 text-white" href="#">Argent</a></li>
           <li > <a className="hover:text-blue-300 text-white" href="#">About </a></li>
           <li > <a className="hover:text-blue-300 text-white" href="#">Contact Us</a></li>
           </ul>
           </nav>
    )
}