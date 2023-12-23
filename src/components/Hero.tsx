import React from "react";
import Image from "next/image";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";

const Hero = () => {
  return (
    <div className="flex w-full md:flex-row flex-col h-full">
      <div className="w-full md:w-[50%] gap-10  h-screen flex flex-col justify-between  p-8">
        <p className="text-xs w-full sm:w-[80%] md:w-[30%] mx-auto md:mx-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
          aperiam dicta amet hic delectus, nam enim dolorum commodi recusandae!
        </p>
        <div className="w-full gap-10 h-full  -green-500 flex flex-row justify-evenly">
          <div className="relative left-[10%] flex flex-col -blue-500 h-full items-end justify-center mt-5">
            <h3 className="text-7xl">PERFECT</h3>
            <div className="relative">
              <Image
                src={img2}
                alt="nil"
                width={225}
                className="rounded-md relative left-[7%]"
              />
              <p className="absolute text-white bottom-3 left-14">
                DISCOVER INTERIORS
              </p>
            </div>
          </div>
          <div className="gap-10 flex flex-col -red-600 h-full items-center">
            <h3 className="text-7xl ">BALLANCE</h3>
            <div className="relative">
              <Image src={img1} alt="nil" width={225} className="rounded-md" />
              <p className="absolute text-white bottom-3 left-8">
                BEDROOM SELECTIONS
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs w-full sm:w-[80%] md:w-[30%] mx-auto md:mx-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
          aperiam dicta amet hic delectus, nam enim dolorum commodi recusandae!
        </p>
      </div>

      <div className="w-full md:w-[50%] flex flex-col justify-around items-center">
        <div className="relative mt-10">
          <Image
            src={img3}
            alt="nil"
            className="rounded-full rotate-90"
            height={300}
          />
          <p className="absolute text-black w-2/5 bottom-9 left-[30%] text-center font-bold">
            NATURE BASED CONCEPT BEDROOM
          </p>
          <h3 className="absolute w-1/2 text-5xl left-[26%] font-thin bottom-[-40%] text-center">
            FOREST RETREAT
          </h3>
        </div>

        <p className="text-xs w-full sm:w-[80%] md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          repudiandae eaque reiciendis velit nostrum cumque fugiat consequatur
          quis inventore veritatis laboriosam, et sequi in voluptates harum.
          Culpa velit sunt illo?
        </p>
      </div>
    </div>
  );
};

export default Hero;
