//purpose of the file: {/*to display the background images(clouds and lines) */}
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)
import React from 'react'
import cloud2 from '@/assets/cloud2.png';
import cloud3 from '@/assets/cloud3.png';
import cloud from '@/assets/cloud.png'; // ✅ Import the image
import RedDot from '@/assets/RedDot.png';
import GreenDot from '@/assets/GreenDot.png'

 export function HeadingDots({title}) {
    const count=3;
    
  return (
    <>
          {/*events text */}
          <div 
        className="eventsText font-bold text-[#000000] text-[48px] flex flex-row items-center mt-[130px]" // Adjust size and position
        style={{ 
        
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
          {title}
      </div>
      {/* Left Cloud in the page */}
      <div 
        className="h-[225px] w-[240px] absolute top-[116px] left-2 z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${cloud})`, 
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      <div 
        className="h-[134.38px] w-[257.36px] absolute top-[800px] right-[-165px] z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${cloud2})`, 
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      <div 
        className="h-[225px] w-[714px] absolute top-[1.5px] left-[407px] max-xl:left-[250px] max-[1463px]:left-[370px] max-[1424px]:left-[340px] max-[1365px]:left-[310px] max-[1200px]:hidden  z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${RedDot})`, 
          backgroundSize:"cover", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      <div 
        className="h-[62.5px] w-[267.65px] absolute top-[127.5px] left-[407px] max-xl:left-[250px] max-[1463px]:left-[370px] max-[1424px]:left-[340px] max-[1365px]:left-[310px] max-[1200px]:hidden  z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${GreenDot})`, 
          backgroundSize: "cover", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      {/* make apaear the cloud after more number of  event cards appear*/ }
    { count>4 && <div 
        className="h-[134.38px] w-[257.36px] absolute top-[1518px] left-[0px] z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${cloud3})`, 
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
}

    </>
  )
}

