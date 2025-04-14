// Purpose : About section in homepage
// Contributor : Aryan Puri (23BCE8560)


import React from 'react'
import logo from "../assets/image1.svg";
import group from "../assets/Frame.svg";


const About = () => {
    return (
        <div className='relative w-full mt-50 sm: md:mt-70 overflow-hidden px-8 mx-auto max-w-6xl'>
            <div className='flex flex-col xl:flex-row gap-20 sm:gap-20 md:gap-20 xl:gap-20 justify-center items-center'>
                <div className='flex-[1.5] relative md:w-3/4 w-full'>
                    <div className='border-2 border-black rounded-4xl shadow-md p-6 text-sm text-black bg-white'>

                        <img
                            src={logo}
                            className="absolute top-1 right-0 sm:top-0 sm:right-0 h-12 w-12 sm:h-20 sm:w-20 object-contain -translate-x-2 -translate-y-2"
                        />

                        <h2 className='text-3xl lg:text-4xl font-bold mb-2 text-center'>About GDG VIT-AP</h2>
                        <p className='text-black font-medium text-lg lg:text-lg xl:text-sm p-2 lg:p-6 leading-relaxed'>Google Developer Group (GDG) VIT AP is a dynamic community dedicated to fostering innovation, collaboration, and learning among tech enthusiasts. As part of the global GDG network, we provide a platform for students, developers, and tech enthusiasts to come together and explore cutting-edge technologies.

                            <br /><br />Our mission is to empower individuals with the <span className='text-red-600'>knowledge</span> and <span className='text-blue-500'>skills</span> to build <span className='text-yellow-400'>impactful projects</span>, <span className='text-green-400'>solve real-world challenges</span>, and connect with industry experts. Through engaging workshops, inspiring talks, hackathons, and hands-on sessions, GDG VIT AP encourages creativity and continuous learning.

                            <br /><br />Whether you are a beginner or an experienced developer, GDG VIT AP welcomes everyone who shares a passion for technology. Join us to grow, network, and make a difference in the tech community.</p>
                    </div>
                </div>

                <div className='flex-1 flex items-center justify-center'>
                    <img src={group} className='h-full px-8 sm:w-auto max-w-md object-contain' />
                </div>

            </div>
        </div>
    )
}

export default About
