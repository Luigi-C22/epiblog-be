import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-700 p-4 flex flex-wrap justify-between items-center">
            <div>
                <Link to="/home">
                    
                    <h1 className="font-bold text-center text-4xl text-yellow-500">
                        .Blogghissimo
                        <span className=""> uh-LA-LA</span>
                    </h1>
                </Link>
            </div>
            <div>
                <ul className="flex flex-wrap text-white gap-4">
                    <Link to="/home">
                        <li>HomePage</li>
                    </Link>
                    <li>Contattaci</li>
                    <li>Impostazioni</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;