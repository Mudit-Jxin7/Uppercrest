import React from "react";
import Image from "next/image";

import Clarity from "@/assets/Clarity.jpg";
import Professional from "@/assets/Professional.jpg";
import Honesty from "@/assets/Honesty.jpg";

const ImageComponent = () => {
  return (
    <div className="hidden md:flex flex-row w-full -slate-500 mt-32 justify-center gap-10">
      <div className="flex flex-col gap-10 relative justify-center sm:justify-start items-center w-1/2 sm:w-1/5 -red-500">
        <Image src={Honesty} alt="nil" />
        <h3 className=" text-md top-3 xs:text-xl sm:text-3xl text-[#997950] absolute sm:static xs:top-[1rem]">
          HONESTY
        </h3>
        <p className="hidden sm:block text-[0.4rem] sm:text-[0.6rem] md:text-xs w-full text-center  sm:mt-48  lg:mt-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          doloribus tempore eos eius velit ea ad dolor cupiditate atque commodi!
        </p>
      </div>
      <div className="w-3/5 xs:w-2/5 -blue-500 flex justify-center relative items-center">
        <h3 className="absolute text-[1rem] xs:text-xl sm:text-3xl lg:text-[2.5rem]">
          PROFFESIONALISM
        </h3>
        <Image src={Professional} alt="nil" height={500} />
      </div>
      <div className="flex flex-col gap-10 relative justify-center sm:justify-start items-center w-1/2 sm:w-1/5 -green-500">
        <p className="hidden sm:block text-[0.4rem] sm:text-[0.6rem] md:text-xs text-center sm:mb-48  lg:mb-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          doloribus tempore eos eius velit ea ad dolor cupiditate atque commodi!
        </p>
        <h3 className="absolute text-md bottom-2 sm:static sm:bottom-7 xs:text-xl sm:text-3xl text-[#997950]">
          CLARITY
        </h3>
        <Image src={Clarity} alt="nil" />
      </div>
    </div>
  );
};

export default ImageComponent;
