"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { destinations } from "@/utils/data";
import { TimeFromCar } from "@/utils/data";
import dest1 from "@/assets/dest1.png";
import dest2 from "@/assets/dest2.png";
import dest3 from "@/assets/dest3.png";
import car from "@/assets/car.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Car = () => {
  // const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  // console.log(scrollYProgress);
  console.log(Number(scroll.toFixed(1)) - 1000);

  // console.log(scrollY.MotionValue.current);

  return (
    <>
      <h3 className="text-8xl font-bold w-3/4 mx-auto text-center mt-32 mb-32">
        IDEAL LOCATION FOR LIVING IN HARMONY WITH NATURE
      </h3>
      <div className="flex flex-row justify-around mx-auto  items-center w-3/5 h-full mt-10">
        {/* first div */}

        <div className="flex flex-col gap-52 mt-52">
          {/* loop this */}
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={dest1}
              alt="nil"
              className="rounded-full border-spacing-3 border-orange-600 border-2 p-1"
              height={100}
              width={100}
            />
            <p className="font-regular w-3/5 text-center text-xs">
              The Newest Town and local storer
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={dest2}
              alt="nil"
              className="rounded-full border-spacing-3 border-orange-600 border-2 p-1"
              height={100}
              width={100}
            />
            <p className="font-regular w-3/5 text-center text-xs">
              Sports facilities and classes
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={dest3}
              alt="nil"
              className="rounded-full border-spacing-3 border-orange-600 border-2 p-1"
              height={100}
              width={100}
            />
            <p className="font-regular w-3/5 text-center text-xs">
              Lakeview Conserv. Area
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="relative flex justify-center gap-3 mr-[19rem]">
          <motion.div
            initial={{ y: 0 }}
            whileInView={{
              y:
                Number(scroll.toFixed(1)) - 1000 <= 0
                  ? 0
                  : Number(scroll.toFixed(1)) - 1000 >= 685
                  ? 685
                  : Number(scroll.toFixed(1)) - 1000,
            }}
          >
            <Image
              className="relative top-[-3.4rem] left-[9rem] h-[29rem]"
              src={car}
              alt={"nil"}
              width={350}
            />
          </motion.div>
          <div className="flex flex-col gap-[20rem] bg-slate-500 w-[0.004rem] justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
          </div>
        </div>

        {/* third div */}
        <div className="flex flex-col gap-[18rem] mt-40">
          {TimeFromCar.map((item, index) => (
            <div key={index} className="flex flex-row gap-4 items-center">
              <h3 className="text-7xl">{item.time}</h3>
              <p className="w-1/2 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Car;
