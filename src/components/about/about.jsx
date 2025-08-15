import React, { useState, useEffect, useRef } from "react";
import { LucideArrowDown } from "lucide-react";
import assets from "../../assets/assets";
const Counter = ({ finalNumber, label, sym }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {

    const currentRef = ref.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && count === 0) {
          let start = 0;
          const duration = 2000; 
          const increment = finalNumber / (duration / 10); 

          const timer = setInterval(() => {
            start += increment;
            if (start >= finalNumber) {
              setCount(`${finalNumber} ${sym}`);
              clearInterval(timer); 
            } else {
              setCount(Math.ceil(start)); 
            }
          }, 10); 
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [finalNumber, count]); 

  return (
    <div ref={ref} className="space-y-2">
      <h3 className="text-4xl sm:text-5xl font-extrabold text-[#05f3ff]">
        {count}
        {finalNumber.toString().includes("+") ? "+" : ""}
      </h3>
      <p className="text-lg text-gray-300">{label}</p>
    </div>
  );
};

const about = () => {
  const backgroundStyle = {
    backgroundImage: `url(${assets.aboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "30vh",
    opacity: 0.8,
  };
  const services = [
    {
      id: 1,
      title: "Top Expertise",
      description:
        "We stay at the forefront of the current and emerging technologies, delivering expertly crafted disruption in domains like AI/ML, Big Data, Extended Reality, and Cloud.",
    },
    {
      id: 2,
      title: "Quality Mangement",
      description:
        "We are big fans of continuous improvement and tools that allow us to scale and meet the highest quality requirements in software engineering. This comes with our equally strong focus on information security and regulatory compliance.",
    },
  ];

  const toggleOpen = (id) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };
  const [openServiceId, setOpenServiceId] = useState(null);

  return (
    <>
      <div className="bg-[#000222] overflow-hidden flex items-start flex-col justify-center px-3 md:px-0 md:pl-40">
        {/* section 1 ************** */}
        <div className="flex  justify-center min-h-[70vh]  text-white">
          <div className="max-w-[950px]  mx-auto flex flex-col lg:flex-row  justify-between gap-10">
            <div className="text-left space-y-6">
              <h1 className="text-3xl sm:text-3xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#05f3ff]">Elevate Your Business</span>
                <br />
                to New Heights with Our Innovative Solutions! partners
              </h1>
              <p className="text-md text-justify md:text-left md:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Welcome to ISLAND 23 TECHNOLOGIES, your gateway to a seamless
                digital experience! Our diverse range of services includes
                cutting-edge web development, dynamic app creation, captivating
                graphic design, innovative NFT solutions, precision 3D modeling,
                and strategic SEO optimization and many more. Elevate your
                online presence with our expertise, where creativity meets
                functionality. ISLAND 23 TECHNOLOGIES – Crafting Digital
                Excellence!
              </p>
            </div>
          </div>
        </div>
        {/* section 2 ******************** */}
        <div className="flex min-h-[70vh] max-w-screen mx-auto md:mx-0 py-20 text-white">
          <div className="max-w-[980px] md:pr-35 mx-auto   flex flex-col items-center  gap-10">
            <div className="w-full">
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-8 ">
                <span className="text-[#008bff]">Key Facts</span> About Us
              </h2>
              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:text-left text-center">
                <Counter
                  finalNumber={2024}
                  sym=" "
                  label="The Year of Foundation"
                />
                <Counter finalNumber={200} sym="+" label="Services Delivered" />
                <Counter
                  finalNumber={50}
                  sym="+"
                  label="Professionals and Growing"
                />
                <div className="sm:col-span-2 lg:col-span-3">
                  <Counter
                    finalNumber={50}
                    sym="+"
                    label="Happy Clients and Counting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 ****************** */}
        <div className=" max-w-4xl border-white pb-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white  font-extrabold mb-8 text-left">
            Why work with us
          </h1>
          <div className="border-b border-white py-1 max-w-screen"></div>
          <div className="space-y-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-b border-white max-w-screen py-3 "
              >
                <button
                  className="flex cursor-pointer  items-center justify-start w-full text-center"
                  onClick={() => toggleOpen(service.id)}
                >
                  <div className="flex items-center justify-between  space-x-0">
                    <h2 className="text-xl text-white text-left   md:text-2xl font-bold w-200">
                      {service.title}
                    </h2>
                  </div>
                  <LucideArrowDown
                    className={`w-4 md:w-6 h-4 md:h-6 transform transition-transform text-white  duration-300 ${
                      openServiceId === service.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {openServiceId === service.id && (
                  <p className="mt-4 text-white max-w-90 text-justify font-semibold text-[14px] px-2 transition-all duration-300 ease-in-out">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* section 4************** */}
        <div className="flex  text-white my-20 font-sans">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Our industry focus
            </h2>
            <div>
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Education
              </span>
              <img
                src={assets.education}
                alt="img not found"
                className="inline px-4 w-17 md:w-25 "
              />
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Financial Services
              </span>
              <img
                src={assets.Financial}
                alt="img not found"
                className="inline px-4 w-17 md:w-25"
              />
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Goverment
              </span>
              <img
                src={assets.goverment}
                alt="img not found"
                className="inline px-4 w-17 md:w-25"
              />
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                HealthCare
              </span>
              <img
                src={assets.heartBeat}
                alt="img not found"
                className="inline px-4 w-17 md:w-25"
              />
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Nonprofit
              </span>
              <img
                src={assets.nonprofit}
                alt="img not found"
                className="inline px-4 w-17 md:w-25"
              />

              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Public Safety
              </span>
              <img
                src={assets.publicSafety}
                alt="img not found"
                className="inline px-4 w-17 md:w-25"
              />
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Manufacturing
              </span>
              <img
                src={assets.manufacturing}
                alt="img not found"
                className="inline px-4 w-17 md:w-25"
              />

              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Retail & Consumer Goods
              </span>
              <img
                src={assets.goods}
                alt="img not found"
                className="inline px-3 md:px-4 w-15 md:w-25"
              />
              <span className="text-xl md:text-5xl text-[#00e1ff] font-semibold">
                Services
              </span>
              <img
                src={assets.services}
                alt="img not found"
                className="inline px-2 md:px-4 w-15 md:w-25"
              />
            </div>
          </div>
        </div>
        {/* section 5************** */}

        <div className="md:flex md:justify-start  border-white w-screen md:w-[80%]">
          <div className=" flex flex-col md:flex-row justify-center md:justify-between w-[680px] mb-15 text-white  font-sans">
            <div className="max-w-120 md:text-justify ">
              <span className="text-[#00e1ff] text-[32px] font-semibold">
                CLIENT FOCUSED
              </span>
              <p className="text-[20px] font-semibold tracking-tight">
                Our success is derived from a deep understanding of our clients
                and is committed to delivering exceptional service and value.
              </p>
            </div>
            <img src={assets.aboutOne} alt="" className="w-40 md:w-55 p-5" />
          </div>
        </div>
        <div className="flex  justify-end  border-white w-screen md:w-[80%]">
          <div className=" flex flex-col justify-between w-[680px] mb-15 text-white  font-sans">
            <img src={assets.aboutTwo} alt="" className="w-40 p-5 md:w-55" />
            <div className="max-w-120 text-justify">
              <span className="text-[#00e1ff] text-[32px] font-semibold">
                LEADERSHIP
              </span>
              <p className="text-[20px] font-semibold tracking-tight">
                Lead by integrity and create an environment for positive change
                built on trust and collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start  border-white w-screen md:w-[80%]">
          <div className=" flex justify-between w-[680px] mb-15 text-white  font-sans">
            <div className="max-w-120 text-justify">
              <span className="text-[#00e1ff] text-[32px] font-semibold">
                EXECUTION EXCELLENCE
              </span>
              <p className="text-[20px] font-semibold tracking-tight">
                Insist on excellence in all we do to support our clients and
                always strive for recognition among the leaders in the industry.
              </p>
            </div>
            <img src={assets.aboutThree} alt="" className="w-40 p-5 md:w-55" />
          </div>
        </div>
        <div className="flex justify-end  border-white w-screen md:w-[80%]">
          <div className=" flex justify-between w-[680px] mb-15 text-white  font-sans">
            <img src={assets.aboutFour} alt="" className="w-40 p-5 md:w-55" />
            <div className="max-w-120 text-justify">
              <span className="text-[#00e1ff] text-[32px] font-semibold">
                ASPIRATION
              </span>
              <p className="text-[20px] font-semibold">
                Aspire individually and collectively to be more tomorrow than we
                are today.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start  border-white w-screen md:w-[80%]">
          <div className=" flex justify-between w-[680px] mb-15 text-white  font-sans">
            <div className="max-w-120 text-justify">
              <span className="text-[#00e1ff] text-[32px] font-semibold">
                RESULT
              </span>
              <p className="text-[20px] font-semibold">
                Accept responsibility for our commitments and expect to be
                accountable for results.
              </p>
            </div>
            <img src={assets.aboutFive} alt="" className="w-40 p-5 md:w-55" />
          </div>
        </div>
      </div>
      {/* section 6 **************/}
      <div className="bg-[#000222] pb-20">
        <div
          style={backgroundStyle}
          className=" w-screen flex items-center text-center md:text-left md:pl-40"
        >
          <div className="max-w-xl">
            <p className="text-white">
              Our consultants are strategists, analysts, thought leaders,
              engineers, and passionate practitioners from every industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default about;
