import React, { useState } from "react";
import assets from "../../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    message: "",
  });
   const backgroundStyle = {
    backgroundImage: `url(${assets.contact})`,
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode:'screen',
    height: '110vh',
  };
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    const messageBox = document.createElement("div");
    messageBox.textContent = "Form submitted! Check the console for the data.";
    messageBox.className =
      "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl animate-fade-in-up";
    document.body.appendChild(messageBox);
    setTimeout(() => {
      messageBox.remove();
    }, 3000);
  };

  return (
    <>
      {/* The form container*/}
      <div id="contact" style={backgroundStyle}  className={`w-full mt-[-180px] overflow-hidden px-4 md:py-20 md:px-25 bg-[#000222] text-white shadow-xl backdrop-blur-sm bg-opacity-50`}>
        {/* Page Title */}
        <div className="h-[25vh]"></div>
        <div className="w-screen md:w-[860px] mx-auto">
        <h1 className="text-xl md:text-7xl font-bold mb-12  text-left">
          Get In Touch
        </h1>

        {/* The form element */}
        <form onSubmit={handleSubmit} className="space-y-8 mt-20 w-full md:w-[70%]">
          {/* Input fields section*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="bg-transparent border-b placeholder-white border-white focus:outline-none focus:border-white transition-colors duration-300 text-[14px] py-1"
              />
            

            {/* City Field */}
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="bg-transparent border-b placeholder-white border-white focus:outline-none focus:border-white transition-colors duration-300 text-[14px] py-1"
              />

            {/* Phone Field */}
            
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="bg-transparent border-b border-white focus:outline-none focus:border-white transition-colors duration-300 text-[14px]  placeholder-white py-1"
              />

            {/* Email Field */}
          
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-transparent border-b placeholder-white border-white focus:outline-none focus:border-white transition-colors duration-300 text-[14px] py-1"
              />
          </div>

         <div className="flex flex-col md:flex-row mt-10 pb-20">
          {/* Message Textarea */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              rows="1"
              className="bg-transparent border-b w-full md:w-1/2 placeholder-white border-white focus:outline-none focus:border-white transition-colors duration-300 text-[14px] py-1 resize-none"
            ></textarea>
        {/* Submit button */}
            <button
              type="submit"
              className="w-50  mt-10 py-[7px] md:mt-0 md:w-1/2 md:px-8 md:ml-5  text-white  text-[14px] rounded-full
                         bg-gradient-to-r from-[#00cdff] to-[#0012fd]
                         hover:from-[#0012fd] hover:to-[#0012fd] transition-colors duration-700 ease-out
                         "
            >
              SEND MESSAGE
            </button>
         </div>

          
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
