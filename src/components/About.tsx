import React from "react";
import Link from "next/link";
import Image from "next/image";
import image4 from "@/assets/img4.jpg";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <Image src={image4} alt="Nil" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <h3 className=" text-4xl font-semibold">
          About <span className=" text-brightGreen">Us</span>
        </h3>
        <p className=" text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>

        <Link href="/contact">
          <button className=" bg-white text-black py-2 px-5 rounded-full mt-4 outline">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
