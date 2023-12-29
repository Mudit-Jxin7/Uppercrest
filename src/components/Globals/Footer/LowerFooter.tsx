import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const LowerFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-around justify-start mb-4">
      <div className="w-full md:w-1/2 flex flex-col justify-start lg:justify-around mb-[-16rem] sm:mb-0  gap-0 md:gap-40">
        <div className="flex flex-row justify-around md:justify-between md:mx-10">
          <h3 className="text-md sm:text-xl md:text-2xl">
            +5 (389) 734-51-10{" "}
            <span className="text-slate-400 ">
              <br /> MODERN HOMES THAT <br /> CONNECT WITH NATURE
            </span>
          </h3>
          <button className="rounded-full border-2 border-slate-500 w-28 h-14 py-2 text-xs md:text-sm">
            Let&apos;s Talk
          </button>
        </div>
        <div className="hidden lg:flex flex-row justify-between mx-10">
          <p className="text-md">
            Office :
            <br />
            9101 Modern Avenue
          </p>
          <FaHome className="h-9 w-9" />
        </div>
      </div>
      <div className="w-[0.03px] h-[300px] bg-slate-500"></div>
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-10 sm:gap-20 lg:gap-40">
        <div className="flex flex-row justify-around">
          <p className="text-xs sm:text-sm w-3/4 sm:w-1/2 text-slate-500">
            If you&apos;re ready to find your perfect retreat, our real estate
            landing page is the perfect place to start. Browse our listings and
            discover homes that seamlessly blend natural design with modern
            technology. Interested in learning more? Discuss your options with
            one of our agents today.
          </p>
          <FaArrowUp
            className="sm-6 sm:h-9 sm-6 sm:w-9 cursor-pointer"
            onClick={handleScrollToTop}
          />
        </div>
        <div className="flex flex-row gap-12 sm:gap-0 justify-start sm:justify-start md:justify-center mx-5 md:mx-10">
          <p className="text-[0.6rem] sm:text-sm">
            &#169; UpperCrest Powered by Cosedge
          </p>
          {/* <p className="text-[0.6rem] sm:text-sm">Developed By Cosedge</p> */}
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
