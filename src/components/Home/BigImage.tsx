import React from "react";
import bigimg from "@/assets/bigimg.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const BigImage = () => {
  return (
    <div className="group mt-5 sm:mt-10 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-[40rem] w-[90%] sm:w-[90%] flex mx-auto justify-center items-center">
        <Image
          src={bigimg}
          alt="nil"
          className="h-full w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <button className="w-3/4 sm:w-1/4 md:w-1/5 mt-32 flex flex-row justify-around items-center rounded-md h-28 py-2 px-3.5 font-com  capitalize text-black bg-white shadow shadow-black/60">
          <div className="flex flex-col justify-start items-start">
            <p className="text-xs text-slate-500">SOLARIS HOUSE</p>
            <p className="text-md md:text-2xl text-left">DISCOVER MORE</p>
          </div>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BigImage;
