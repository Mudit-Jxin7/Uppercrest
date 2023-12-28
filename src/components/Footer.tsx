"use client";
import React from "react";
import { CiMail } from "react-icons/ci";
import "../styles/ScrollingText.css";
import ScrollingText from "./ScrollingText";
import LowerFooter from "./LowerFooter";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-48 mb-10 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between px-20">
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
      <div className="w-full h-[0.01rem] bg-slate-500 my-10"></div>
      <ScrollingText />
      <div className="w-full h-[0.01rem] bg-slate-500 my-10"></div>
      <LowerFooter />
    </>
  );
};

export default Footer;
