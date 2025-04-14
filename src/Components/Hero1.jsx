// Purpose : Hero section containing bg video for large screens and static img for mobile screens in homepage
// Contributor : Aryan Puri (23BCE8560)


import React from 'react'
import video from "../assets/bg.mp4"
import bgImg from "../assets/bgimg.svg"
import line1 from "../assets/Vector 47.svg"
import blue from "../assets/blue.svg"
import green from "../assets/green.svg"
import line2 from "../assets/Vector 48.svg"
import rec3 from "../assets/rec3.svg"
import down from "../assets/down-arrow.png"

const Hero = () => {
    return (
        <div className='relative w-full min-h-screen overflow-hidden'>
            {/* Static image for small screens */}
            <img
                src={bgImg}
                alt="Background"
                className="w-full h-full object-cover object-left absolute top-0 left-0 lg:hidden"
            />
            {/* bg video */}
            <video autoPlay loop muted playsInline className='w-full h-full object-cover object-left absolute top-0 left-0 hidden lg:block'>
                <source src={video} type="video/mp4" />
            </video>


            <div className='relative mt-10'>
                <div className='flex absolute top-20 -left-70 md:top-40 md:left-0'>
                    <img src={line1} />
                    <img src={blue} className='absolute left-90' />
                </div>
                <span className='absolute text-center top-50 left-30 sm:left-50 md:top-75 text-3xl md:left-50 lg:left-10 xl:left-20 font-bold md:text-6xl'>Welcome to</span>
                <span className='font-bold absolute top-60 md:top-95 left-5 sm:left-30 md:left-20 lg:left-10 xl:left-20 text-3xl md:text-6xl text-center overflow-hidden leading-relaxed md:leading-tight'>Google Developer Group VIT-AP</span>
                <div className='flex relative'>
                        <img src={green} className='w-8 absolute right-25 top-100 md:top-150 md:right-70 z-20' />
                        <img src={rec3} className='w-8 absolute right-10 top-100 md:top-149 md:right-40 z-20' />
                        <img src={line2} className='absolute -right-45 top-103 md:top-152 md:right-0' />

                </div>

            </div>

            <div className='absolute bottom-30 left-32 flex flex-col gap-15 lg:bottom-50 lg:left-100 lg:gap-25 xl:bottom-35 xl:left-50 xl:flex xl:flex-row xl:mt-10 xl:gap-20 text-center'>
                <div className="p-4 h-16 w-40 lg:h-18 lg:w-52 xl:h-16 xl:w-40 text-lg lg:text-2xl xl:text-xl rounded-4xl xl:rounded-4xl lg:rounded-6xl border text-center font-bold border-black bg-blue-500 text-black hover:bg-blue-600 cursor-pointer transition duration-200 select-none"
                    onClick={() => console.log("Login clicked!")}
                    role="button">
                    Join Us
                </div>
                <div className="flex gap-1 justify-center items-center h-16 w-40 lg:h-18 lg:w-52 xl:h-16 xl:w-40 rounded-4xl lg:rounded-6xl text-lg lg:text-2xl xl:text-xl border text-center font-bold border-black bg-blue-500 text-black hover:bg-blue-600 cursor-pointer transition duration-200 select-none"
                    onClick={() => console.log("Login clicked!")}
                    role="button">
                    View More 
                    <img src={down} className='w-7 h-7' />
                </div>
            </div>

        </div>
    )
}

export default Hero