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
    width:'100%',
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

  const data = [
    {
      title: "Education",
      image: assets.education,
    },
    {
      title: "Financial Services",
      image: assets.Financial,
    },
    {
      title: "Goverment",
      image: assets.goverment,
    },
    {
      title: "Healthcare",
      image: assets.heartBeat,
    },
    {
      title: "Nonprofit",
      image: assets.nonprofit,
    },
    {
      title: "Public Safety",
      image: assets.publicSafety,
    },
    {
      title: "Manufacturing",
      image: assets.manufacturing,
    },
    {
      title: "Retail & Consumer Goods",
      image: assets.goods,
    },
    {
      title: "Services",
      image: assets.services,
    },
  ];

  return (
    <>
      <div className="bg-[#000222] mt-[-180px] overflow-hidden w-[100%] flex items-start  flex-col justify-center px-3 md:px-0 leading-tight">
        <div className="md:h-[35vh] h-[25vh]"></div>
        {/* section 1 ************** */}
        <div className="flex  justify-center  min-h-[55vh] w-full md:w-[860px] mx-auto   text-white">
          <div className="  flex flex-col lg:flex-row  justify-between gap-9 ">
            <div className="text-left space-y-4 ">
              <h1 className="text-3xl sm:text-3xl lg:text-[58px] font-[700] leading-tight ">
                <span className="text-[#00e1ff]">
                  Elevate Your Business <span className="text-white">to</span>
                </span>
                <br />
                New Heights with Our Innovative Solutions! partner
              </h1>
              <p className=" text-left text-[16px] font-[550]  text-gray-300 max-w-3xl mx-auto lg:mx-0 ">
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
        <div className="flex min-h-[60vh]  w-full md:w-[860px]  mx-auto pt-5  text-white">
          <div className="w-full ">
            <h2 className="text-2xl  sm:text-[40px] font-bold  leading-tight mb-9 ">
              <span className="text-[#008bff]">Key Facts</span> About Us
            </h2>
            <div className="grid  grid-cols-1  inter-font  sm:grid-cols-2 lg:grid-cols-3 gap-12 md:text-left text-center ">
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
        {/* section 3 ****************** */}
        <div className=" min-h-[40vh]  w-full pt-5 md:pt-0 md:w-[860px] mx-auto border-white pb-7">
          <h1 className="text-2xl   md:text-[40px] text-white  font-bold mb-4 text-left">
            Why work with us
          </h1>
          <div className="border-b border-white py-1 max-w-screen "></div>
          <div className="space-y-2 ">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-b border-white max-w-screen py-3"
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
                    className={`w-5 h-5 stroke-[5px] text-white`}
                  />
                </button>
                 <div
                className={`
                  transition-all duration-1500  overflow-hidden
                  ${openServiceId === service.id
                    ? 'max-h-96 ' // Visible state
                    : 'max-h-0 ' // Hidden state
                  }
                `}
              >
                <p className="text-gray-200 text-justify text-[14px] px-2 font-semibold">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
        {/* section 4************** */}
        <div className="flex justify-center text-white min-h-[50vh] w-[90vw] md:w-[860px] mx-auto my-5 font-sans">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-[40px] font-bold mb-5">
              Our industry focus
            </h2>

            {data.map((item) => (
              <div className=" inline">
                <span className="text-[16px] md:text-[40px] text-[#00e1ff] font-bold">
                  {item.title}
                </span>
                <img
                  src={item.image}
                  alt="img not found"
                  className="inline mx-2 md:mx-5 w-13 md:w-14  "
                />
              </div>
            ))}
          </div>
        </div>
        {/* section 5************** */}

        <div className="md:flex md:justify-start  flex-col mx-auto pt-6 border-white w-screen md:w-[860px]">
          {/* client focused */}
          <div className=" flex flex-col md:flex-row   md:justify-between w-[95vw] items-center text-center md:text-left md:w-[570px] mb-10 text-white  font-sans">
            <div className="max-w-100  ">
              <span className="text-[#00e1ff] text-[32px] font-[700]">
                CLIENT FOCUSED
              </span>
              <p className="text-[18px] md:text-[20px]  pt-3 tracking-tight">
                Our success is derived from a deep understanding of our clients
                and is committed to delivering exceptional service and value.
              </p>
            </div>
            <img src={assets.aboutOne} alt="" className="w-40  pt-4 md:pt-0" />
          </div>
          {/* LEADERSHIP */}
          <div className=" flex flex-col md:flex-row md:ml-60  md:justify-between w-[95vw] items-center text-center md:text-left md:w-[570px] mb-10 text-white  font-sans">
            <img src={assets.aboutTwo} alt="" className="w-40  pt-4 md:pt-0" />
            <div className="max-w-100  ">
              <span className="text-[#00e1ff] text-[32px] font-[700]">
                LEADERSHIP
              </span>
              <p className="text-[18px] md:text-[20px]  pt-3 tracking-tight">
                Lead by integrity and create an environment for positive change
                built on trust and collaboration.
              </p>
            </div>
          </div>
          {/* execution excellence */}
          <div className=" flex flex-col md:flex-row   md:justify-between w-[95vw] items-center text-center md:text-left md:w-[570px] mb-10 text-white  font-sans">
            <div className="max-w-100  ">
              <span className="text-[#00e1ff] text-[32px] font-[700]">
                EXECUTION EXCELLENCE
              </span>
              <p className="text-[18px] md:text-[20px]  pt-3 tracking-tight">
                Insist on excellence in all we do to support our clients and
                always strive for recognition among the leaders in the industry.
              </p>
            </div>
            <img
              src={assets.aboutThree}
              alt=""
              className="w-40  pt-4 md:pt-0"
            />
          </div>
          {/* Aspiration */}
          <div className=" flex flex-col md:flex-row md:ml-60  md:justify-between w-[95vw] items-center text-center md:text-left md:w-[570px] mb-10 text-white  font-sans">
            <img
              src={assets.aboutFour}
              alt=""
              className="w-40 px-3 pt-4 md:pt-0"
            />
            <div className="max-w-100  ">
              <span className="text-[#00e1ff] text-[32px] font-[700]">
                ASPIRATION
              </span>
              <p className="text-[18px] md:text-[20px]  pt-3 tracking-tight">
                Aspire individually and collectively to be more tomorrow than we
                are today.{" "}
              </p>
            </div>
          </div>
          {/* results */}
          <div className=" flex flex-col md:flex-row   md:justify-between w-[95vw] items-center text-center md:text-left md:w-[570px] mb-10 text-white  font-sans">
            <div className="max-w-100  ">
              <span className="text-[#00e1ff] text-[32px] font-[700]">
                RESULTS
              </span>
              <p className="text-[18px] md:text-[20px]  pt-3 tracking-tight">
                Accept responsibility for our commitments and expect to be
                accountable for results.{" "}
              </p>
            </div>
            <img
              src={assets.aboutFive}
              alt=""
              className="w-40 px-3 pt-4 md:pt-0"
            />
          </div>
        </div>
        {/* ************************ */}
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
