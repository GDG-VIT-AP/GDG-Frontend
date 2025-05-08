// Purpose : Projects section with carousel in homepage
// Contributor : Aryan Puri (23BCE8560)


import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../assets/Frame.svg';
import img2 from '../assets/image1.svg';
import img3 from '../assets/d1.svg';
import e3 from '../assets/e3.svg';
import pr1 from '../assets/pr1.svg';
import pr2 from '../assets/pr2.svg';
// import pr3 from '../assets/pr3.svg';
import pr4 from '../assets/pr4.svg';
import pr6 from '../assets/pr6.svg';
import gb from '../assets/gb.svg';
import l1 from '../assets/l1.svg';


import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

const projects = [
  { title: "Project 1", description: "Brief description 1", src: img1 },
  { title: "Project 2", description: "Brief description 2", src: img2 },
  { title: "Project 3", description: "Brief description 3", src: img3 },
  { title: "Project 4", description: "Brief description 4", src: img1 },
];


const CustomArrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute border-2 border-black z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-4xl bg-blue-500 hover:bg-blue-600 ${direction === "left" ? "left-5 xl:left-75 md:left-50" : "right-5 xl:right-75 md:right-50"
      } p-1`}
  >
    <img
      src={direction === "left" ? leftArrow : rightArrow}
      alt={`${direction} arrow`}
      className="h-6 w-6 md:h-8 md:w-8 transition-transform hover:scale-110"
    />
  </button>
);

const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative my-32 md:my-60 w-full sm:p-0 p-5 lg:pt-12 lg:pb-28">
      <img src={pr2} alt="img" className="hidden lg:block absolute top-0 xl:left-130 lg:left-70 w-28" />
      <img src={pr6} alt="img" className="hidden lg:block absolute top-20 xl:left-216 lg:left-160 w-14" />
      <img src={l1} alt="img" className="hidden lg:block absolute top-0 lg:w-46 xl:w-80" />
      <img src={gb} alt="img" className="hidden lg:block absolute xl:top-7 lg:top-9 left-12 w-8" />
      <img src={pr1} alt="img" className="hidden lg:block absolute top-0 right-0" />
      <img src={pr1} alt="img" className="hidden lg:block absolute bottom-0 left-0" />
      <img src={pr4} alt="img" className="hidden lg:block absolute bottom-19 right-25 w-8" />
      <img src={e3} alt="img" className="hidden lg:block absolute bottom-0 right-0 w-76" />

     
      <h2 className="text-3xl text-black mb-12 md:mb-16 lg:mb-16 text-center font-bold">Our Projects</h2>

      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1, 
              // Only 1 slide fully visible on sm and smaller screens
            },
            768: {
              slidesPerView: 1.5, // From md and above, 3 slides visible (center and left-right)
            }
          }}
          spaceBetween={70} // Spacing between slides
          loop={true} // Infinite scrolling
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className=""
          style={{ height: "500px"}} // carousel height
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white shadow-4xl p-8 border-2 border-black h-full flex flex-col justify-center">
                
                {/* Image at top */}
                <img src={project.src} alt={project.title} className="object-contain h-1/2 w-auto z-20 rounded-t-4xl mb-4 mt-[-150px]" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bottom-0 md:bottom-0 bg-white bg-opacity-40 flex flex-col justify-end p-4 md:p-8 w-full">
                  <div className="">
                    <h2 className="text-black text-lg md:text-2xl lg:text-3xl font-bold mb-2">{project.title}</h2>
                    <p className="text-black text-sm md:text-lg lg:text-xl mb-2 break-words overflow-hidden w-1/2">{project.description}</p>
                  </div>

                  {/* button*/}
                  <div className="flex justify-end w-full">
                    <button className="bg-blue-500 text-black px-4 md:px-6 py-1 md:py-2 rounded-2xl border-2 border-black mt-2 hover:bg-blue-600 transition cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav Buttons */}
        <CustomArrow direction="left" onClick={() => swiperRef.current?.slidePrev()} />
        <CustomArrow direction="right" onClick={() => swiperRef.current?.slideNext()} />
      </div>
    </div>
  );
};

export default Projects;
