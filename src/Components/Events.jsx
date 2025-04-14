// Purpose : Events section with carousel in homepage
// Contributor : Aryan Puri (23BCE8560)


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../carousel.css';

import img1 from '../assets/Frame.svg';
import img2 from '../assets/image1.svg';
import img3 from '../assets/d1.svg';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import cloud from '../assets/cloud.svg';
import ya from '../assets/ya.svg';
import wa from '../assets/wa.svg';
import rb from '../assets/rb.svg';
import bb from '../assets/bb.svg';
import e1 from '../assets/e1.svg';
import e2 from '../assets/e2.svg';
import e5 from '../assets/e5.svg';
import d1 from '../assets/d1.svg';

// Slide Component
const Slide = ({ image, title }) => (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[500px] flex">
        <img src={image} alt={title} className="object-contain h-1/2 w-auto rounded-lg z-20 md:mt-8" />
        <div className="absolute inset-0 bottom-0 md:bottom-0 bg-white bg-opacity-40 flex flex-col items-start justify-end p-4 md:p-8">
            <h2 className="text-black text-lg md:text-2xl lg:text-3xl font-bold mb-2 ">{title}</h2>
            <button className="bg-blue-500 text-black px-4 md:px-6 py-1 md:py-2 border-2 border-black rounded-2xl mt-2 hover:bg-blue-600 transition cursor-pointer">
                Learn More
            </button>
        </div>
    </div>
);

const CustomArrow = ({ onClick, direction }) => (
    <button
        onClick={onClick}
        className={`absolute z-10 border-2 border-black top-1/2 transform -translate-y-1/2 cursor-pointer rounded-4xl bg-blue-500 hover:bg-blue-600 ${direction === 'left' ? 'left-2' : 'right-2'} p-1`}
    >
        <img
            src={direction === 'left' ? leftArrow : rightArrow}
            alt={`${direction} arrow`}
            className="h-6 w-6 md:h-8 md:w-8 transition-transform hover:scale-110"
        />
    </button>
);

const Events = () => {
    const slidesData = [
        { image: img1, title: 'Event 1: Hackathon' },
        { image: img2, title: 'Event 2: Workshop' },
        { image: img3, title: 'Event 3: Meeting' },
    ];

    return (
        <div className="relative w-full mx-auto my-32 md:my-60 px-4 md:px-20 xl:px-50">
            <h2 className='text-3xl text-black mb-12 md:mb-16 lg:mb-24 text-center font-bold'>Events</h2>
            <div className="hidden lg:flex absolute top-2 left-8 xl:left-32 z-0 gap-40 xl:gap-84 md:pl-2 md:pr-2 xl:w-3/4 pl-0 pr-0 pointer-events-none">
    <img src={cloud} alt="cloud" className="w-60 xl:w-72" />
    <img src={d1} alt="ya" className="w-32" />
    <img src={e1} alt="ya" className="w-44 md:mt-12 xl:mt-16" />

  </div>
  <img src={e5} alt="line" className="hidden absolute xl:block w-52 z-0 top-50 left-0" />
  <img src={rb} className='hidden absolute xl:block w-6 z-0 top-60 left-12' />
  <img src={wa} className='hidden absolute xl:block w-6 z-0 top-64 left-24' />
  <img src={e2} alt="line" className="hidden absolute xl:block w-51 top-60 right-0 z-0" />
  <img src={bb} className='hidden absolute xl:block w-6 z-0 top-58 right-32' />
  <img src={ya} className='hidden absolute xl:block w-6 z-0 top-64 right-24' />


  {/* Mask to hide part of it over carousel */}
  <div className="hidden lg:block absolute xl:top-[133px] xl:left-[200px] xl:w-[1090px] h-[220px] lg:top-[132px] lg:left-[80px] lg:w-[900px] bg-white z-10 pointer-events-none"></div>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                showStatus={false} 
                renderArrowPrev={(onClickHandler) => (
                    <CustomArrow onClick={onClickHandler} direction="left" />
                )}
                renderArrowNext={(onClickHandler) => (
                    <CustomArrow onClick={onClickHandler} direction="right" />
                )}
                className="rounded-4xl shadow-md relative border-2 border-black p-3 z-20"
            >
                {slidesData.map((slide, index) => (
                    <Slide key={index} image={slide.image} title={slide.title} />
                ))}
            </Carousel>
        </div>
    );
};

export default Events;
