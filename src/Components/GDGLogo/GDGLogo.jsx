import React from 'react';
import GDG_Logo from "../../assets/Elements/image.svg";

function GDGLogo() {
    return (
        <div className="hidden md:flex md:w-1/2 relative items-center justify-center">

             {/*Google developers Logo */}
            <img
                src={GDG_Logo}
                alt="GDG Logo"
                className="w-3/3 left-7 h-auto relative z-10"
            />
            {/* Vertical Line */}
            <div className="absolute inset-y-0 left-[10%] bg-black w-[1px]" />
        </div>
    );
}

export default GDGLogo;
