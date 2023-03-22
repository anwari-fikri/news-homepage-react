import React from "react";
import heroImage from "../assets/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col py-10 px-5 gap-5">
      <img src={heroImage} alt="iconMenu" />
      <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
      <p className="text-dark-grayish-blue">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="bg-soft-red text-off-white w-1/2 p-3 text-xs font-bold tracking-[0.3em]">
        READ MORE
      </button>
    </div>
  );
};

export default Hero;
