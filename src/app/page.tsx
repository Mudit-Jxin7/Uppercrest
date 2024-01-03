import Car from "@/components/Home/Car";
import Pricing from "@/components/Home/Pricing";
import Hero from "@/components/Home/Hero";
import ImageComponent from "@/components/Home/ImageComponent";
import BigImage from "@/components/Home/BigImage";
import React from "react";
import SmallText from "@/components/Home/SmallText";

const HomepPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      {/* <Hero /> */}
        <SmallText />
      <ImageComponent />
      <Pricing />
      {/* <BigImage /> */}
      {/* <Car /> */}
    </div>
  );
};

export default HomepPage;
