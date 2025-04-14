import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/image1.svg";
import circle from "../assets/Ellipse 1.svg";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/events", label: "Events" },
        { path: "/project", label: "Project" },
        { path: "/Team", label: "Our Team" },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-40 p-2 backdrop-blur-xl">
            <div className="flex justify-between items-center px-4 md:px-8 py-2 bg-transparent">
                {/* Hamburger for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-800">
                        <img
                            src={isOpen ? close : menu}
                            alt="Menu"
                            className={`${isOpen ? "h-6 w-6" : "h-8 w-8"}`}
                        />
                    </button>
                </div>
                {/* Logo*/}
                <div className="sm:items-end ml-auto md:ml-0 flex md:items-center gap-3 mx-auto md:mx-0">
                    <img src={logo} alt="GDG Logo" className="h-12 w-12 object-contain" />
                    <div className="leading-tight flex flex-col items-center">
                        <h1 className="text-lg font-bold text-black text-center">Google Developer Group</h1>
                        <h2 className="text-md font-bold text-black text-center">VIT-AP</h2>
                    </div>
                </div>

                {/* Desktop navbar*/}
                <div className="hidden md:flex items-center space-x-8">
                    

                    <ul className="flex space-x-8 lg:text-lg md:text-sm">
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className="font-semibold hover:underline hover:decoration-1 hover:decoration-blue-500 hover:underline-offset-8"
                                    onClick={() => setIsOpen(false)} 
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/*Login*/}
                    <div className="flex items-center space-x-5">
                        <div
                            className="p-1 h-10 w-24 rounded-4xl border text-center font-semibold border-black bg-blue-500 text-black hover:bg-blue-600 cursor-pointer transition duration-200 select-none"
                            onClick={() => console.log("Login clicked!")}
                            role="button"
                        >
                            Login
                        </div>
                        <img
                            src={circle}
                            alt="circle"
                            className="h-10 w-10 rounded-full"
                        />
                    </div>
                </div>


            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden inline-block backdrop-blur-sm">
                    <ul className="flex flex-col items-start ml-2 py-0 pl-2 space-y-2">
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className="font-semibold hover:underline hover:decoration-1 hover:decoration-blue-500 hover:underline-offset-8"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <div
                            className="p-0 h-8 w-24 rounded-4xl border text-center font-semibold border-black bg-blue-500 text-black hover:bg-blue-600 cursor-pointer transition duration-200 select-none"
                            onClick={() => console.log("Login clicked!")}
                            role="button"
                        >
                            Login
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
