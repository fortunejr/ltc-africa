import React, { useEffect, useState } from "react"; 
import { realestate, agriculture, ewaste } from "../../imports"; 
import { Link } from "react-router-dom"; 
 
const slides = [ 
  { 
    image: realestate, 
    title: "Smart Real Estate Solutions", 
    subtitle: 
      "Connecting properties with global opportunities through innovation.", 
    link: 'real-estate' 
  }, 
  { 
    image: agriculture, 
    title: "Empowering Modern Agriculture", 
    subtitle: 
      "Driving sustainable farming and agribusiness growth worldwide.", 
    link: 'agriculture' 
  }, 
  { 
    image: ewaste, 
    title: "Responsible E-Waste Management", 
    subtitle: 
      "Transforming electronic waste into environmental impact.", 
    link: 'e-waste' 
  }, 
]; 
 
const Hero = () => { 
  const [current, setCurrent] = useState(0); 
 
  // Auto slide background images
  useEffect(() => { 
    const interval = setInterval(() => { 
      setCurrent((prev) => (prev + 1) % slides.length); 
    }, 6000); 
 
    return () => clearInterval(interval); 
  }, []); 
 
  return ( 
    <section className="relative h-screen w-full overflow-hidden"> 
      {/* Background Images (cycling) */} 
      {slides.map((slide, index) => ( 
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ${ 
            index === current ? "opacity-100" : "opacity-0" 
          }`} 
        > 
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="h-full w-full object-cover" 
          /> 
          {/* Dark blue overlay */} 
          <div className="absolute inset-0 bg-blue-950/40" /> 
        </div> 
      ))} 
 
      {/* Static 3-column content overlay */} 
      <div className="absolute inset-0 flex pt-20 md:pt-24"> 
        {slides.map((slide, index) => ( 
          <div 
            key={index} 
            className="relative flex-1 flex items-center justify-center"
          > 
            <div className="px-4 md:px-8 text-center"> 
              <div className="max-w-md text-white"> 
                <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-3 md:mb-4"> 
                  {slide.title} 
                </h2> 
 
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-white/90 mb-6 md:mb-8"> 
                  {slide.subtitle} 
                </p> 
 
                {/* CTA Button */} 
                <Link to={`/${slide.link}`}> 
                  <button className="rounded-xl bg-white px-6 py-2.5 md:px-7 md:py-3 font-semibold text-blue-950 hover:bg-blue-100 transition transform hover:scale-105"> 
                    Learn More 
                  </button> 
                </Link> 
              </div> 
            </div>

            {/* Optional: Divider line between sections */}
            {index < slides.length - 1 && (
              <div className="absolute right-0 top-0 h-full w-px bg-white/30" />
            )}
          </div> 
        ))} 
      </div>
 
      {/* Indicators */} 
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10"> 
        {slides.map((_, index) => ( 
          <button 
            key={index} 
            onClick={() => setCurrent(index)} 
            className={`h-3 w-3 rounded-full transition ${ 
              current === index ? "bg-white" : "bg-white/40" 
            }`} 
          /> 
        ))} 
      </div> 
    </section> 
  ); 
}; 
 
export default Hero;