import Car from "@/components/Car";

import Hero from "@/components/Hero";
import ImageComponent from "@/components/ImageComponent";

import React from "react";

const HomepPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Hero />
      <ImageComponent />
      <Car />
    </div>
  );
};

export default HomepPage;
