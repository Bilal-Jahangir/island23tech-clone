import React from "react";
import { useState } from "react";
import assets from "../../assets/assets";

const Services = () => {
  const [activeTab, setActiveTab] = useState("webDevelopment");
  const tabContent = {
    webDevelopment: {
      image: assets.serviceOne,
      title: "Web Development",
      packages: [
        {
          name: "Starter Package",
          features: [
            "Single-page responsive website.",
            "Basic contact form.",
            "Ideal for small businesses and portfolios.",
          ],
        },
        {
          name: "Professional Package",
          features: [
            "Multi-page responsive website.",
            "CMS integration (e.g., WordPress).",
            "Basic SEO setup.",
            "Suitable for growing businesses.",
          ],
        },
        {
          name: "Enterprise Package",
          features: [
            "Fully customized web applications.",
            "Advanced CMS or e-commerce functionality.",
            "Basic SEO setup.",
            "Performance optimization and ongoing support",
          ],
        },
      ],
      // You'd replace this with an actual SVG/React component for an icon
    },
    appDevelopment: {
      image: assets.serviceTwo,
      title: "App Development",
      packages: [
        {
          name: "Basic App",
          features: [
            "Prototype or MVP development for one platform (iOS or Android)",
            "Perfect for startups testing their ideas.",
          ],
        },
        {
          name: "Advanced App",
          features: [
            "Full-featured mobile app for one platform.",
            "User-friendly design with core functionality.",
          ],
        },
        {
          name: "Ultimate App",
          features: [
            "Cross-platform mobile app development (iOS and Android).",
            "Advanced features like APIs, payment gateways, and push notifications.",
            "Ongoing maintenance and updates.",
          ],
        },
      ],
    },
    uiUxDesign: {
      image: assets.serviceThree,
      title: "UI/UX Design",
      packages: [
        {
          name: "Essential Package",
          features: [
            "Basic wireframes and mockups for a small project.",
            "Suitable for initial concept visualization.",
          ],
        },
        {
          name: "Comprehensive Package",
          features: [
            "Detailed UI/UX design for websites or apps",
            "Includes user journey mapping and interactive prototypes",
          ],
        },
        {
          name: "Premium Package",
          features: [
            "Advanced designs with animations and user testing",
            "Complete focus on brand consistency and user experiences",
          ],
        },
      ],
    },
    seo: {
      image: assets.serviceFour,
      title: "SEO (Search Engine Optimization)",
      packages: [
        {
          name: "Starter Package",
          features: [
            "On-page SEO optimization.",
            "Keyword research and meta-tag setup.",
          ],
        },
        {
          name: "Growth Package",
          features: [
            "On-page + off-page SEO.",
            "Content optimization and backlink building.",
            "Monthly performance tracking.",
          ],
        },
        {
          name: "Premium Package",
          features: [
            "Comprehensive SEO strategy with advanced analytics.",
            "Competitor analysis and regular reporting",
            "Long-term ranking improvement.",
          ],
        },
      ],
    },
    digitalMarketing: {
      image: assets.serviceFive,
      title: "Digital Marketing",
      packages: [
        {
          name: "Basic Package",
          features: [
            "Social media account setup and optimization",
            "Content calendar suggestions.",
          ],
        },
        {
          name: "Standard Package",
          features: [
            "Social media management.",
            "Email marketing campaigns",
            "Basic ad management (Google Ads, Facebook Ads).",
          ],
        },
        {
          name: "Pro Package",
          features: [
            "Complete digital marketing strategy.",
            "PPC campaigns, influencer collaborations, and detailed analytics.",
            "Multi-platform growth.",
          ],
        },
      ],
    },
    graphicDesign: {
      image: assets.serviceSix,
      title: "Graphic Design",
      packages: [
        {
          name: "Starter Package",
          features: ["Logo design or single promotional graphic."],
        },
        {
          name: "Business Package",
          features: [
            "Branding kit (logo, business cards, letterheads).",
            "Social media graphics and templates.",
          ],
        },
        {
          name: "Complete Package",
          features: [
            "Advanced branding solutions.",
            "Marketing materials (brochures, flyers, banners)",
            "High-quality designs for all platforms.",
          ],
        },
      ],
    },
  };
  return (
    <div className="bg-[#000222]">
      <div className="min-h-[70vh] text-white flex items-center md:items-start justify-center p-8 md:p-16 font-sans">
        <div className="max-w-5xl w-full">
          {/* Main Heading Section */}
          <div className="mb-3">
            <h1 className="text-[30px] sm:text-5xl md:text-7xl font-bold  tracking-tight">
              <span className="text-cyan-400">Unlocking Excellence</span>,
              <br />
              and <span className="text-cyan-400">Elevating Success!</span>
            </h1>
            <p className="mt-4 md:mt-6 text-[18px] md:text-[20px] text-neutral-300 max-w-5xl">
              Your One-Stop Solution Hub: Where Innovation Meets Service
              Excellence Across a Spectrum of Business Needs!
            </p>
          </div>

          {/* Services Heading Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 leading-snug">
              Services to empower
              <br />
              strategic opportunities
            </h2>
          </div>
        </div>
      </div>
      {/* ******* section 2 Starts Here ********/}
      <div className="min-h-screen  text-white p-8 font-sans">
        {" "}
        {/* Adjusted background color */}
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(tabContent).map((tabKey) => (
            <button
              key={tabKey}
              className={`px-6 py-2  font-semibold w-full md:w-auto
              ${
                activeTab === tabKey
                  ? " text-white bg-gradient-to-r from-[#00cdff] to-[#0012fd]  shadow-lg transition-colors duration-700 ease-out" // Blue for active
                  : "bg-[#010653] text-gray-500 hover:bg-gradient-to-r from-[#00cdff] to-[#0012fd] hover:text-white duration-700 ease-out" // Darker for inactive
              }`}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabContent[tabKey].title}
            </button>
          ))}
        </div>
        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:mt-20">
          {/* Left Side: Icon */}
          <div className="flex justify-center  md:justify-end">
            <img
              src={tabContent[activeTab].image}
              alt="service image"
              className="text-8xl text-[#2962FF] md:mr-16 w-50 md:w-100"
            />
          </div>

          {/* Right Side: Title and Packages */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#008bff]">
              {tabContent[activeTab].title}
            </h2>
            {tabContent[activeTab].packages.map((pkg, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-bold mb-3 text-[#008bff]">
                  • {pkg.name}:
                </h3>
                <ul className="list-disc list-inside  text-[#008bff] space-y-1 pl-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ******* section 3 Starts Here ********/}
      <div className="bg-[#000222] text-white py-8 md:py-16 font-sans min-h-[50vh] flex">
        <div className="max-w-4xl mx-auto md:pr-40">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Discover the <span className="text-[#00c2ff]">right</span>
            <br />
            <span className="text-[#00C2FF]">solution</span> for your business
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl">
            Whether you need help with a platform/business strategy, an
            in-flight project, or need a talented consultant to bridge critical
            gaps, ISLAND 23 TECHNOLOGIES is here to help
          </p>

          {/* Call-to-action button */}
          <button className="  px-3 md:px-10 py-2 md:py-4 text-[12px] font-semibold md:text-[16px] text-white bg-gradient-to-r from-[#00cdff] to-[#0012fd] rounded-full shadow-lg hover:from-[#0012fd] hover:to-[#0012fd] transition-colors duration-700 ease-out">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
