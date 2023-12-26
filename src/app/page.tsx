import Car from "@/components/Car";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import React from "react";

const HomepPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <div className="w-full h-[0.01rem] bg-slate-500 mb-5"></div>
      <Hero />
      <Car />
      <div className="w-full h-[0.01rem] bg-slate-500 my-10"></div>
      <Footer />
    </div>
  );
};

export default HomepPage;
