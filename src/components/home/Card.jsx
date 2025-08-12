import { LucideArrowRight} from 'lucide-react';
import React, { useState,useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({imageUrl,title,time}) => {
  const [isHover, setIsHover] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        AOS.init({ duration: 1500});
      }, 1000);
    }, []);
  return (
    <div
    onMouseEnter={()=>{setIsHover(true)}}
    onMouseLeave={()=>{setIsHover(false)}} 
    data-aos="slide-up"
    className="relative min-h-[500px] w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 rounded-2xl shadow-xl group hover:shadow-2xl">
  
      
      {/* The background image. It uses `absolute` positioning to fill the container.
          The `object-cover` property ensures the image covers the entire space
          without being distorted.
          The `scale-105` on hover creates a subtle zoom effect. */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-130"
        // This is a fallback for the image in case of an error.
        onError={(e) => { e.target.src = "https://placehold.co/400x600/1e293b/e2e8f0?text=Image+Not+Found"; }}
      />
      
      {/* A semi-transparent black overlay.
          It also uses `absolute` positioning to cover the card.
          The `group-hover:bg-black/50` class makes the overlay slightly
          less dark on hover, creating a nice visual effect. */}
      <div className="absolute inset-0 w-full h-full transition-colors duration-300 bg-black/70 mix-blend-color hover:mix-blend-lighten group-hover:bg-black/40"></div>
      
      {/* The text content at the bottom of the card.
          It is positioned at the bottom using `absolute` and centered horizontally.
          `text-white` and `text-2xl` are used for styling.
          The `relative z-10` is used to ensure the text is on top of the overlay. */}
      <div className="relative z-10 flex items-end justify-center w-full min-h-[500px] p-6 text-center">
        <h2 className="text-2xl font-bold text-white  md:text-3xl">
          {title}
          <div className='flex justify-center items-center'>
            <div className={`bg-slate-900 p-3 rounded-full ${isHover ? 'block': 'hidden'}`}>
          <LucideArrowRight/>
            </div>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default Card