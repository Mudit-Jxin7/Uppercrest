import About from "@/components/About/About";
import Interested from "@/components/About/Interested";
import Listing from "@/components/About/Listing";
import React from "react";

const page = () => {
  return (
    <div>
      <About />
      <Interested />
      <Listing />
    </div>
  );
};

export default page;
