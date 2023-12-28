import React from "react";
import { Listings } from "@/utils/data";
import { TbHandFinger } from "react-icons/tb";

const Listing = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        {Listings.map((listing, index) => (
          <div key={index}>
            <div className="w-[90%] mx-auto flex flex-col xs:flex-row gap-10 -slate-500">
              <div className="w-1/2 md:w-1/4 -red-500 flex flex-col gap-10 md:gap-20">
                <p className="text-[0.8rem] text-slate-500">
                  {listing.distance}
                </p>
                <h3 className="xs:block hidden text-6xl md:text-9xl">
                  {listing.number}
                </h3>
                <p className="xs:block hidden text-[0.8rem] ">{listing.desc}</p>
              </div>
              <div className="w-full xs:w-1/2 md:w-[40%] -red-500 flex flex-col gap-10 md:gap-20">
                <p className="xs:block hidden text-[0.8rem]">NEW Listing</p>
                <h3 className="text-3xl xs:text-4xl md:text-6xl">
                  {listing.title}
                </h3>
                <p className="text-[0.8rem] w-3/4 md:w-1/2">
                  {listing.address}
                </p>
              </div>
              <div className="w-0 hidden md:w-[45%] -red-500 md:flex justify-end items-center">
                <h3 className="text-3xl">{listing.price}</h3>
              </div>
            </div>
            <TbHandFinger className="flex mx-4 my-4 cursor-pointer h-5 w-5 xs:hidden" />
            <div className="w-full h-[0.01rem] bg-slate-500 my-10"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listing;
