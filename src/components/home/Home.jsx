import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { LucideArrowDown } from "lucide-react";
import ParticleBg from "./ParticleBg";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Cloud",
      icon: assets.iconOne,
      description:
        "Our cloud-agnostic approach keeps your business innovating with modern infrastructure and operations. Innovate faster, increase visibility (across all cloud platforms and on-premises solutions), and optimize your processes with continuous, automated governance, risk management, and compliance.",
    },
    {
      id: 2,
      title: "Web Development",
      icon: assets.iconTwo,
      description:
        "At Island 23 Technologies, we transform visions into digital realities through our unparalleled web development expertise. Our dedicated team crafts dynamic and user-friendly websites that not only captivate your audience but also elevate your online presence. From responsive design to seamless functionality, we pride ourselves on delivering tailored solutions that bring your unique brand to life in the ever-evolving digital landscape. Choose Island 23 Technologies for a web development experience that goes beyond expectations.",
    },
    {
      id: 3,
      title: "DevOps",
      icon: assets.iconThree,
      description:
        "Our DevOps professionals are here to assist you in making the most of cutting-edge innovation. We provide DevOps consulting and implementation services that help you to use new technology to your advantage. From continuous integration/continuous delivery (CI/CD) to cloud DevOps services, microservices, managed services, and digital platform strategies, DevOps Transformed.",
    },
    {
      id: 4,
      title: "Application Development",
      icon: assets.iconFour,
      description:
        "At Island 23 Technologies, we specialize in turning ideas into powerful, user-friendly applications. Our expert team of developers thrives on transforming concepts into reality, crafting bespoke applications that seamlessly integrate functionality, design, and user experience. Whether you're envisioning a mobile app, web platform, or enterprise solution, we bring innovation to every line of code, ensuring your application stands out in the digital landscape. Elevate your business with our exceptional application development services and let your ideas flourish in the hands of our skilled developers.",
    },
    {
      id: 5,
      title: "SEO And Digital Marketing",
      icon: assets.iconFive,
      description:
        "Fuel your online success with Island 23 Technologies, your gateway to unparalleled SEO and Digital Marketing expertise. Our team navigates the ever-evolving digital landscape, optimizing your online presence to soar through search engine ranks. From strategic SEO campaigns to targeted digital marketing solutions, we ensure your brand shines brightly in the digital realm. Let us drive your success through the power of visibility and engagement, transforming clicks into customers and prospects into loyal advocates.",
    },
  ];
  const [openServiceId, setOpenServiceId] = useState(null);
  const [isEnquiry, setIsEnquiry] = useState(false);
  const toggleOpen = (id) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${assets.bgS4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "screen",
  };

  return (
    <>
      {/* Make an enquiry button*************/}
        
      {isEnquiry ? (
        <button 
        onClick={() => setIsEnquiry(!isEnquiry)}
        className="fixed bottom-5 right-5 flex items-center transition-all duration-700 ease-in-out justify-between  z-50  px-3  py-3 rounded-full">
          <span className="bg-[#ffffff] p-1 rounded-full ml-2">
            <img src={assets.cross} alt="chat" className="h-7 w-7 p-1 " />
          </span>
        </button>

      ) : (
        <button
          onClick={() => setIsEnquiry(!isEnquiry)}
          className={`${isEnquiry ? 'w-0' : 'w-39'} whitespace-nowrap  transition-all duration-700 ease-in-out fixed bottom-5 right-5 flex items-center justify-between
            z-50  px-3  py-3  bg-gradient-to-r from-[#00aaff] to-40% bg-[#0211d9] rounded-full`}
        >
          <span className="z-50 text-[11px]  text-white">Make An Enquiry</span>
          <span className="bg-[#ffffff] p-1 rounded-full ml-2">
            <img src={assets.chat} alt="chat" className="h-5 w-5 " />
          </span>
        </button>
      )}

      {/* section 1 starts here *************/}

      <div className="relative h-[75vh] md:h-screen z-0 flex pt-10 md:pt-0 items-start md:items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.homeOne}
            alt="Futuristic digital globe"
            className="w-full h-full object-cover brightness-[98%]"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/1920x1080/000000/FFFFFF?text=Placeholder+Image";
            }}
          />
        </div>

        {/* Content Container (Text and Button) */}
        <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-64 flex flex-col items-center justify-center space-y-6">
          {/* Main Title */}
          <h1
            data-aos="slide-right"
            className="text-white  px-5 font-bold text-2xl sm:text-5xl md:text-[56px] leading- tracking- drop-shadow-md"
          >
            Elevate Your Experience with Our Multifaceted Services Where
            Innovation Meets Quality!
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            className="text-white text-[16px]  md:text-[18px] font-medium max-w-2xl  drop-shadow-sm"
          >
            Transforming Visions into Reality: Your One-Stop Hub for Diverse
            Services and Unparalleled Excellence!
          </p>

          {/* Call-to-Action Button */}
          <Link to="/about">
            <button className="mt-4 px-5 md:px-5 py-3 font-semibold  text-[14px]  text-white bg-gradient-to-r from-[#00cdff] to-[#0012fd] rounded-full shadow-lg hover:from-[#0012fd] hover:to-[#0012fd] transition-colors duration-700 ease-out">
              WHO WE ARE
            </button>
          </Link>
        </div>
      </div>

      {/* section 2 starts here *************/}

      <div className="bg-slate-950 min-h-[80vh] text-white font-sans p-8 md:p-16 relative overflow-hidden">
        <ParticleBg />
        <div className="relative z-10 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl  font-bold mb-12 text-center md:text-left">
            What We Do
          </h1>
          <div className="border-b border-white "></div>
          <div className="space-y-0">
            {services.map((service) => (
              <div key={service.id} className="border-b border-white py-1 ">
                <button
                  className=" cursor-pointer w-full"
                  onClick={() => toggleOpen(service.id)}
                >
                  <div className="flex justify-between items-center space-x-0">
                    <img
                      src={service.icon}
                      alt="iconOne"
                      className="w-11 h-11"
                    />

                    <h2 className="text-[16px]  mx-auto text-left  md:text-2xl font-bold md:w-78">
                      {service.title}
                    </h2>

                    <LucideArrowDown
                      className={`w-6 h-6  transform transition-transform duration-300 ${
                        openServiceId === service.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>
                {openServiceId === service.id && (
                  <p className="mt-4 text-white text-justify transition-all duration-500 ease-in-out  font-semibold text-[18px] px-2 ">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 3 starts here *************/}

      <div className="relative min-h-[75vh] md:min-h-screen flex items-center justify-start text-left overflow-hidden">
        {/* Background Image Container with Overlay */}
        <div className="absolute bg-slate-900 inset-0 z-0">
          <img
            src={assets.homeTwo} // Placeholder image URL
            alt="sec 3 img"
            className="w-full h-full object-cover brightness-[100%]"
            // This onerror handler can be used to handle cases where the image fails to load
            onError={(e) => {
              e.target.src =
                "https://placehold.co/1920x1080/000000/FFFFFF?text=Placeholder+Image";
            }}
          />
        </div>

        {/* Content Container (Text and Button) */}
        <div className="relative z-10 p-0 px-5 md:pl-50 flex flex-col items-start justify-center space-y-6 max-w-[70%] md:max-w-[50%]">
          {/* Main Title */}
          <h1
            data-aos="slide-right"
            className="text-white font-bold text-xl md:text-4xl leading-tight tracking-tight  max-w-85 drop-shadow-md"
          >
            Ignite Success Together: Your Gateway to Innovation and Growth!
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-right"
            className="text-white text-5 md:text-[16px] font-medium max-w-xl  drop-shadow-sm"
          >
            Join forces with [ISLAND 23 TECHNOLOGIES] – Where Visionaries,
            Partners, and Experts Unite to Shape the Future of Success!
          </p>

          {/* Call-to-Action Button */}
          <Link to="/about">
            <button className="mt-4 px-5 md:px-5 py-3 font-semibold  text-[14px]  text-white bg-gradient-to-r from-[#00cdff] to-[#0012fd] rounded-full shadow-lg hover:from-[#0012fd] hover:to-[#0012fd] transition-colors duration-700 ease-out">
              LEARN MORE
            </button>
          </Link>
        </div>
        <div className="text-3xl text-white z-10 hidden relative  border- md:flex items-start justify-center  w-[50%]">
          <img
            src={assets.homeThree}
            alt="globe img"
            width={400}
            className="animate-spin animation-time"
          />
        </div>
      </div>

      {/* section 4 starts here *************/}
      <div
        style={backgroundStyle}
        className={`md:h-[150vh] relative overflow-hidden`}
      >
        <div className=" text-white px-4 py-15 md:px-48  flex flex-col items-center justify-center">
          <p
            data-aos="slide-left"
            className="font-bold text-[16px] md:text-[28px]   text-center"
          >
            Unlock a world of possibilities with our one-stop business hub! From
            tailored solutions to cutting-edge services, we're your gateway to
            success. Elevate your business with us – where versatility meets
            excellence!
          </p>
          <Link to="/howWeWork">
            <button className="mt-4 z-10 cursor-pointer md:mt-8 px-5 md:px-5 py-3 font-semibold  text-[14px]  text-white bg-gradient-to-r from-[#00cdff] to-[#0012fd] rounded-full shadow-lg hover:from-[#0012fd] hover:to-[#0012fd] transition-colors duration-700 ease-out">
              HOW WE WORK
            </button>
          </Link>
        </div>

        <div className=" px-10  md:px-25 pb-35 flex flex-col items-center">
          <h1 className="text-[#00cdff]  md:w-[80%] z-10 text-2xl font-semibold">
            CAPABILITIES
          </h1>
          <div className="py-10 flex justify-between flex-col md:flex-row gap-5 z-50">
            <Card
              imageUrl={assets.cardOne}
              title={"Manged Services"}
              time={"600"}
            />
            <Card
              imageUrl={assets.cardTwo}
              title={"Enterprises Business Service"}
              time={"1000"}
            />
            <Card
              imageUrl={assets.cardThree}
              title={"Cloud Services"}
              time={"1400"}
            />
          </div>
          <div className=" text-center absolute mt-100 tracking-[15px] z-0">
            <h1 className="text-[152px] hidden md:block animate-pulse text-[#00cdff] capability">
              CAPABILITIES
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
