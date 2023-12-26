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
  // const isAndroid: boolean = false;
  // const isIOS: boolean = false;

  // if (typeof window !== "undefined") {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  //   console.log("Is Android:", isAndroid);
  //   console.log("Is iOS:", isIOS);
  // }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  // console.log(scrollYProgress);
  console.log(Number(scroll.toFixed(1)) - 1000);

  // console.log(scrollY.MotionValue.current);

  return (
    <>
      <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold w-3/4 mx-auto text-center mt-32 mb-32">
        IDEAL LOCATION FOR LIVING IN HARMONY WITH NATURE
      </h3>
      <div className="flex flex-row  mx-auto justify-between lg:justify-around w-full -blue-500 md:w-4/5 lg:w-3/5 h-[85%] sm:h-full mt-10">
        {/* first div */}

        <div className="flex flex-col w-[15%] md:w-[15%] lg:w-[20%] gap-52 mt-52 -slate-500">
          {/* loop this */}
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={dest1}
              alt="nil"
              className="rounded-full border-spacing-3 border-orange-600 border-2 p-[0.1rem] sm:p-1"
              height={100}
              width={100}
            />
            <p className="font-regular w-[90%] md:w-3/5 text-center text-[0.5rem] md:text-xs">
              The Newest Town and local storer
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={dest2}
              alt="nil"
              className="rounded-full border-spacing-3 border-orange-600 border-2 p-[0.1rem] sm:p-1"
              height={100}
              width={100}
            />
            <p className="font-regular w-4/5 md:w-3/5 text-center text-[0.5rem] md:text-xs">
              Sports facilities and classes
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={dest3}
              alt="nil"
              className="rounded-full border-spacing-3 border-orange-600 border-2 p-[0.1rem] sm:p-1"
              height={100}
              width={100}
            />
            <p className="font-regular w-4/5 md:w-3/5 text-center text-[0.5rem] md:text-xs">
              Lakeview Conserv. Area
            </p>
          </div>
        </div>

        {/* second div */}
        <div className="-red-600 relative lg:w-2/5 sm:w-1/2 w-1/2">
          <motion.div
            initial={{ y: 0 }}
            whileInView={{
              y:
                Number(scroll.toFixed(1)) - 1000 <= 0
                  ? 0
                  : Number(scroll.toFixed(1)) - 1000 >= 877 &&
                    (isAndroid || isIOS)
                  ? 877
                  : Number(scroll.toFixed(1)) - 1000 >= 685 &&
                    !(isAndroid || isIOS)
                  ? 685
                  : Number(scroll.toFixed(1)) - 1000,
            }}
          >
            <Image
              className="absolute  top-[-3.4rem] h-[15rem] sm:h-[29rem] w-[335px]"
              src={car}
              alt={"nil"}
            />
          </motion.div>
          <div className="flex mx-auto flex-col gap-[20rem] bg-slate-500 w-[0.004rem] justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 border-red-600 border-[1.5px]"></div>
          </div>
        </div>

        {/* third div */}
        <div className="flex flex-col gap-[18rem] w-[20%] md:w-[20%] lg:w-[20%] mt-52 -yellow-400">
          {TimeFromCar.map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-1 lg:gap-4 mr-2 items-center"
            >
              <h3 className="text-2xl sm:text-4xl lg:text-7xl">{item.time}</h3>
              <p className="w-3/4 lg:w-1/2 text-[0.4rem] md:text-xs lg:text-sm">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Car;
