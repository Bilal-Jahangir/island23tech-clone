import { useState, useEffect } from "react";
import {
  Contact,
  Header,
  Footer,
  Home,
  About,
  Services,
  HowWeWork,
} from "./components";
import { Routes, Route } from "react-router-dom";
import assets from "./assets/assets";
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [])
  
  return (
      <>
       <div className={`${isLoading ? 'flex': 'hidden'}   items-center justify-center absolute top-0 opacity-90 z-50 w-full  h-screen bg-[#000000]`}>
          <img src={assets.logo} alt="Logo" className={`${isLoading ? 'flex': 'hidden'} w-32`} />
        </div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/howWeWork" element={<HowWeWork />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
      </>
  );
};

export default App;
