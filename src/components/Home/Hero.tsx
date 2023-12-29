import React from "react";
import Image from "next/image";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";

const Hero = () => {
  return (
    <div className="mb-32 sm:mb-60 flex gap-32 xs:gap-20 sm:gap-60  w-full md:gap-0 md:flex-row flex-col h-full">
      <div className="w-full md:w-[50%] -slate-500 gap-20  h-screen flex flex-col justify-between  p-8">
        <p className="text-normal md:text-xs text-center w-full sm:w-[80%] md:w-[50%] lg:w-[40%] mx-auto md:mx-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
          aperiam dicta amet hic delectus, nam enim dolorum commodi recusandae!
        </p>
        <div className="md:ml-10 mt-16 gap-10 md:gap-5 md:mt-0 w-4/5 sm:w-full h-1/2 sm:h-full mx-auto sm:mx-0  -green-500 flex flex-row justify-evenly">
          <div className="lg:gap-10  flex flex-col -red-600 h-full gap-3 lg:items-center">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
              PERFECT
            </h3>
            <div className="relative w-[130px] h-[200px] sm:w-[225px] md:w-[200px] lg:w-[230px] sm:h-[325px]">
              <Image
                src={img2}
                alt="nil"
                width={225}
                className="rounded-md md:left-[4%] h-full w-full"
              />
              <p className="text-[0.6rem] sm:text-xs text-center lg:text-normal absolute text-white bottom-3 left-4 sm:left-12">
                DISCOVER INTERIORS
              </p>
            </div>
          </div>
          <div className="lg:gap-10  flex flex-col -red-600 h-full gap-3 lg:items-center">
            <h3 className="text-3xl text-center sm:text-5xl lg:text-6xl xl:text-7xl ">
              BALLANCE
            </h3>
            <div className="relative w-[130px] h-[200px] sm:w-[230px] sm:h-[325px]">
              <Image
                src={img1}
                alt="nil"
                width={225}
                className="rounded-md h-full w-full"
              />
              <p className="text-[0.6rem] sm:text-xs lg:text-normal absolute  text-white bottom-3 left-4 sm:left-14 md:left-12">
                BEDROOM SELECTIONS
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-normal md:text-xs w-full sm:w-[80%] md:w-[50%] lg:w-[40%] mx-auto md:mx-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
          aperiam dicta amet hic delectus, nam enim dolorum commodi recusandae!
        </p>
      </div>

      <div className=" w-full md:w-[50%] flex md:flex-col justify-start md:justify-around items-center mb-5 sm:mb-0">
        <div className="relative mt-10 w-full md:w-3/4">
          <Image
            src={img3}
            alt="nil"
            className="rounded-full rotate-90 md:w-3/4 mx-auto"
            height={300}
          />
          <p className=" hidden sm:absolute text-black  text-xs sm:text-normal w-2/5 bottom-9 left-[30%] text-center md:font-bold">
            NATURE BASED CONCEPT BEDROOM
          </p>
          <h3 className="absolute w-1/2 text-xl sm:text-3xl md:text-5xl left-[26%] font-thin bottom-[-40%] text-center">
            FOREST RETREAT
          </h3>
        </div>

        <p className="text-[0.55rem] sm:text-xs sm:text-center w-full sm:w-[60%] md:w-[60%]">
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
