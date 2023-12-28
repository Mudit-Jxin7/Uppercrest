import React from "react";

const Interested = () => {
  return (
    <div className="flex md:flex-row flex-col mx-10 mt-20 gap-6 md:gap-0 mb-40">
      <div className="flex flex-col gap-24 w-full md:w-1/2 items-center md:items-start">
        <h3 className=" text-5xl md:text-8xl font-bold">INTERESTED?</h3>
        <p className=" tex-sm md:text-xl w-full md:w-1/2 text-slate-400 text-left">
          OUR PROPERTIES FEATURE THE LATEST TECHNOLOGY, INNOVATIVE DESIGN, AND
          ECO-FRIENDLY FEATURES. EXPERIENCE THE HOME OF TOMORROW, TODAY.
        </p>
      </div>
      <div className="flex flex-col gap-10 w-full md:w-1/2 mb-5 md:ml-10 justify-end items-center">
        <p className="text-slate-500 text-sm md:text-md w-full md:w-1/2">
          THE DRIVE TO NEWEST TOWN TAKES AROUND 4 MINUTES WITH CAR, AND
          YOU&apos;LL BE REWARDED WITH CHARMING SHOPS, CAFES, AND GALLERIES TO
          EXPLORE.
        </p>
        <button className="text-xs sm:text-md flex items-center justify-center">
          LETS TALK
        </button>
      </div>
    </div>
  );
};

export default Interested;
