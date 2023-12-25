import React from "react";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full mt-60 flex flex-col items-center justify-center md:flex-row md:justify-between px-20">
      <div className="flex flex-row gap-4 items-center">
        <div className="bg-white rounded-full h-7 w-7 flex justify-center items-center">
          <CiMail className="bg-black" />
        </div>
        <p>support@crest.estate</p>
      </div>
      <div className="flex flex-row text-slate-500 font-semibold gap-4">
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Dribbble</p>
      </div>
    </div>
  );
};

export default Footer;
