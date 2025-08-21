import { LucideArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ imageUrl, title,time}) => {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
      AOS.init({ duration: 1500
       });
  }, []);
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      data-aos="slide-up"
      data-aos-delay={time}
      className={`relative min-h-[400px]   w-[280px] mx-auto overflow-hidden transition-all duration-300 rounded-2xl shadow-xl group hover:shadow-2xl`}
    >
      <img
        src={imageUrl}
        alt={title}
        className=" absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-130 "
        onError={(e) => {
          e.target.src =
            "https://placehold.co/400x600/1e293b/e2e8f0?text=Image+Not+Found";
        }}
      />

      <div className="absolute inset-0 w-full h-full bg-black/70 mix-blend-color group-hover:mix-blend-lighten  transition-colors duration-700 group-hover:bg-gradient-to-t from-[#0967a2] to-black/10 "></div>

      <div className="relative z-10 flex  items-end justify-center w-full h-full p-6 text-center">
        <h2 className="text-[23px]  text-white  ">
          {title}
          <div className="flex justify-center items-center">
            <div
              className={`bg-slate-900 p-2 rounded-full ${
                isHover ? "block" : "hidden"
              }`}
            >
              <LucideArrowRight />
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Card;
