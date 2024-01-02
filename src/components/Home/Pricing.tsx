import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import Clarity from "@/assets/Clarity.jpg";
import Professional from "@/assets/Professional.jpg";
import Honesty from "@/assets/Honesty.jpg";

const Pricing = () => {
  return (
    <div className="md:hidden grid grid-cols-1 w-[90%] sm:w-full mx-auto gap-20 md:gap-5 md:grid-cols-2 lg:grid-cols-3 mb-20 mt-16 md:mt-80">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div className="h-96 w-full">
          <Image
            src={Honesty}
            alt="nil"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center ">
          <h1 className="font-dmserif text-5xl font-normal  text-white">
            Honesty
          </h1>

          {/* <button className="mt-32 flex flex-row justify-around items-center rounded-md w-full h-20 py-2 px-3.5 font-com  capitalize text-black bg-white shadow shadow-black/60">
            <div className="flex flex-col justify-center">
              <p className="text-xs text-slate-500">READY FOR MOVE</p>
              <p className="text-2xl">425.955,00 $</p>
            </div>
            <FaArrowRight />
          </button> */}
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-full">
          <Image
            src={Professional}
            alt="nil"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center ">
          <h1 className="font-dmserif text-4xl font-normal  text-white">
            Professionalism
          </h1>

          {/* <button className="mt-32 flex flex-row justify-around items-center rounded-md w-full h-20 py-2 px-3.5 font-com  capitalize text-black bg-white shadow shadow-black/60">
            <div className="flex flex-col justify-center">
              <p className="text-xs text-slate-500">READY FOR MOVE</p>
              <p className="text-2xl">234.344,00 $</p>
            </div>
            <FaArrowRight />
          </button> */}
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-full">
          <Image
            src={Clarity}
            alt="nil"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center">
          <h1 className="font-dmserif text-5xl font-normal  text-white">
            Clarity
          </h1>

          {/* <button className="mt-32 flex flex-row justify-around items-center rounded-md w-full h-20 py-2 px-3.5 font-com  capitalize text-black bg-white shadow shadow-black/60">
            <div className="flex flex-col justify-center">
              <p className="text-xs text-slate-500">READY FOR MOVE</p>
              <p className="text-2xl">399.343,00 $</p>
            </div>
            <FaArrowRight />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
