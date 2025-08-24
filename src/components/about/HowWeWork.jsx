import { useState } from "react";
import assets from "../../assets/assets";
import { LucideArrowDown } from "lucide-react";

const HowWeWork = () => {
  const [openServiceId, setOpenServiceId] = useState(null);
  const [activeTab, setActiveTab] = useState("agile");
  const tabContent = {
    agile: {
      image: assets.serviceOne,
      title: "Agile",
      heading: "Agile is your go-to methodology when",
      text: "The Agile approach centers around a continuously evolving project scope and iterative development where the team delivers a work product — a new feature or meaningful improvement — at the end of every iteration. This approach allows you to start quickly and make decisions in action based on instant feedback.",
      packages: [
        {
          features: [
            "Your end-product vision is likely to evolve during development",
            "It’s difficult to detail all the requirements at the project onset, for instance, because of its complexity",
            "The success of your product is strongly dependent on user feedback",
            "It’s critical to direct the team’s energy straight off toward development, skipping a lengthy planning stage, to bring your product to market quickly",
          ],
        },
      ],
      // You'd replace this with an actual SVG/React component for an icon
    },
    Waterfall: {
      image: assets.serviceTwo,
      title: "Waterfall",
      heading: "The waterfall methodology is best when:",
      text: "In the waterfall model, your entire project, including phases, tasks, and dependencies, is mapped out before development. This means thoroughly planning and documenting all processes, timelines, deliverables, resources, and costs beforehand. At the end of the day, you get less flexibility but a greater level of predictability.",
      packages: [
        {
          features: [
            "Your end vision and stakeholders’ needs are well defined and are not going to change.",
            "It is possible to fix all the requirements upfront.",
          ],
        },
      ],
    },
  };
  const backgroundStyle = {
    backgroundImage: `url(${assets.banner})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "screen",
  };
  const services = [
    {
      id: 1,
      title: "Time & Materials",
      class: "border-b",
      description:
        "Under the Time and Materials model, we can support either in a linear The model is the right way to go when you don’t have precise requirements and the exact project scope is hard to define or is likely to evolve.",
      list: [
        "This model is the right way to go when you don’t have precise software requirements and the exact project scope is hard to define or is likely to evolve.",
        "We develop your product in increments. You see the deliverables early and provide feedback, keeping the development process under control.",
        "You get regular reports from our project manager to track the project budget and progress.",
        "Kickoff is then really fast: we define a high-level scope, agree on daily or hourly rates, and get started.",
      ],
    },
    {
      id: 2,
      title: "Fixed Price",
      class: "",
      description:
        "With this model, we support a price fixed upfront for the entire project. This often involves planning and estimating the entire project scope before the project starts. ",
      list: [
        "This model is most suitable for projects with a well-specified scope and clear requirements that aren’t going to change.",
        "All of us get a clear understanding of what exactly the end product and deliverables should be.",
        "This model requires little to zero involvement from your side after the requirements elicitation and planning stage",
        "Together with your team, we begin with gathering requirements and planning thoroughly the project scope and time for product delivery.",
      ],
    },
  ];
  const toggleOpen = (id) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };
  const tableData = [
    { features: "Project Size", fixedPrice: "any", timeAndMaterials: "any" },
    {
      features: "Requirements",
      fixedPrice: "fixed",
      timeAndMaterials: "evolving",
    },
    {
      features: "Scope Flexibility",
      fixedPrice: "limited flexibility",
      timeAndMaterials: "flexible",
    },
    {
      features: "Budget Flexibility",
      fixedPrice: "Highest",
      timeAndMaterials: "pay as you go",
    },
    {
      features: "Timelines",
      fixedPrice: "fixed",
      timeAndMaterials: "flexible",
    },
    {
      features: "Clients Involvement",
      fixedPrice: "minimal",
      timeAndMaterials: "regular",
    },
    { features: "Quick Start", fixedPrice: "no", timeAndMaterials: "yes" },
  ];
  return (
    <div className="bg-[#000222] ">
      {/* section 1 */}
      <div
        style={backgroundStyle}
        className="relative h-[35vh] md:h-[75vh] z-0 flex pt-10 md:pt-0  items-center justify-center  overflow-hidden"
      >
        {/* Content Container (Text and Button) */}
        {/* Main Title */}
        <div className="w-[860px] flex justify-center md:justify-start">
          <h1 className="text-white font-bold text-[28px] md:text-[54px] leading-tight md:leading-15  drop-shadow-md tracking-tighter">
            <p> Discover the Power of </p>
            <p>Innovation</p>
            <p>with ISLAND 23</p>
            <p>TECHNOLOGIES!</p>
          </h1>
        </div>
      </div>
      {/* section 2 */}
      <div className="pt-20 w-screen  md:w-[860px] mx-auto text-white  font-sans">
        {/* Adjusted background color */}
        {/* Tab Buttons */}
        <div className="flex  gap-1  mb-4 ">
          {Object.keys(tabContent).map((tabKey) => (
            <button
              key={tabKey}
              className={`px-3 py-[10px] text-[16px]  font-bold w-[50%] 
              ${
                activeTab === tabKey
                  ? " text-[#000222]  bg-gradient-to-r from-[#00cdff] to-[#0012fd]  shadow-lg transition-colors duration-700 ease-out" // Blue for active
                  : "bg-[#010653] text-gray-500 hover:bg-gradient-to-r from-[#00cdff] to-[#0012fd] hover:text-white duration-700 ease-out" // Darker for inactive
              }`}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabContent[tabKey].title}
            </button>
          ))}
        </div>
        {/* Content Area */}
        <div className="flex flex-col border-[#00194c] border-b md:flex-row justify-between md:justify-start gap-6 items-center md:items-start md:mt-10">
          {/* Left Side: Icon */}
          <div className="md:w-[50%] px-4">
            <p>{tabContent[activeTab].text}</p>
          </div>

          {/* Right Side: Title and Packages */}
          <div className="md:w-[50%] ">
            <h2 className="text-[18px] px-6 md:px-4 font-bold mb-6 text-[#008bff]">
              {tabContent[activeTab].heading}
            </h2>
            {tabContent[activeTab].packages.map((pkg, index) => (
              <div key={index} className="mb-8 ">
                <ul className="list-hy font-[inter] list-inside w-[95%] md:w-full text-white space-y-1 pl-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <div className="flex">
                        <span>-</span>
                        <span className="pl-2">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className=" md:min-h-[50vh] mt-10   border-white w-[90vw] md:w-[860px] mx-auto">
        <div className="md:w-1/2 ">
          <h1 className="text-[#009fff] text-[27px] md:text-[20px] font-bold">
            Our engagement models
          </h1>
          <p className="text-white pt-5">
            When selecting an optimum engagement model for our clients, we
            discuss a lot of details, from their primary business objective and
            project scope to the level of flexibility and control they require.
          </p>
        </div>
        <div className=" min-h-[35vh] items-center flex  pt-5 md:pt-0 w-screen md:w-[760px] mx-auto border-white pb-7">
          <div className="space-y-2">
            {services.map((service) => (
              <div
                key={service.id}
                className={` ${service.class} border-white max-w-screen py-3`}
              >
                <button
                  className="flex cursor-pointer  items-center justify-start w-full text-center"
                  onClick={() => toggleOpen(service.id)}
                >
                  <div className="flex items-center justify-between  space-x-0 ">
                    <h2 className="text-[18px] text-white text-left md:text-2xl font-bold md:w-[730px] w-[75vw]">
                      {service.title}
                    </h2>
                  </div>
                  <LucideArrowDown
                    className={`w-4 md:w-6 h-4 md:h-6 transform transition-transform text-white   duration-300 ${
                      openServiceId === service.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {openServiceId === service.id && (
                  <div>
                    <p className="mt-2 mb-5 text-white w-[90%] md:w-full text-justify  text-[14px]  transition-all duration-300 ease-in-out">
                      {service.description}
                    </p>
                    {service.list.map((item) => (
                      <ul className=" flex justify-center text-white text-[14px]">
                        <li className="list-disc w-[80%]  md:w-[90%] pt-5">
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="w-screen md:w-[860px] mx-auto pb-20">
        <h1 className="text-white text-center text-3xl md:text-5xl font-bold">
          Comparison of engagement models
        </h1>
        <div className="flex items-center justify-center min-h-[50vh]  font-inter mt-10">
          <div className="w-full max-w-4xl  rounded-lg  bg-[#020932] ">
            <table className="w-screen md:w-full text-white table-auto">
              {/* Table Header */}
              <thead>
                <tr className="border-1 border-white">
                  <th className="p-1 md:p-2 text-[20px] md:text-[22px] text-left   border-1 border-white text-[#00eeff] font-bold">
                    Features
                  </th>
                  <th className="p-1 md:p-2 text-[20px] md:text-[22px] text-left   border-1 border-white text-[#00eeff] font-bold">
                    Fixed Price
                  </th>
                  <th className="p-1 md:p-2 text-[20px] md:text-[22px] text-left   border-1 border-white text-[#00eeff] font-bold">
                    Time & Materials
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-white ">
                    <td className="p-1 md:p-2 text-[16px] font-semibold   text-white border-white border-l-1">
                      {row.features}
                    </td>
                    <td className="p-1 md:p-2 text-[16px] font-semibold text-white border-white border-l-1">
                      {row.fixedPrice}
                    </td>
                    <td className="p-1 md:p-2 text-[16px] font-semibold text-white border-white border-x-1">
                      {row.timeAndMaterials}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
