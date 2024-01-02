import React, { useEffect } from "react";

const ScrollingText = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        //@ts-ignore
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        //@ts-ignore
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duppcatedItem = item.cloneNode(true);
          //@ts-ignore
          duppcatedItem.setAttribute("aria-hidden", true);
          //@ts-ignore
          scrollerInner.appendChild(duppcatedItem);
        });
      });
    }
  }, []);
  return (
    <div className="scroller" data-speed="fast">
      <div className="tag-pst scroller__inner">
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
         Contact@crest.io
        </p>
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
         Contact@crest.io
        </p>
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
         Contact@crest.io
        </p>
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
         Contact@crest.io
        </p>
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
         Contact@crest.io
        </p>
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
          Contact@crest.io
        </p>
        <p className="text-2xl sm:text-6xl text-orange-500 cursor-pointer hover:text-white transition-all">
          Contact@crest.io
        </p>
      </div>
    </div>
  );
};

export default ScrollingText;
