import React from "react";
import heroImageMobile from "../assets/image-web-3-mobile.jpg";
import heroImageDesktop from "../assets/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col py-10 px-5 gap-10">
      <img src={heroImageMobile} alt="iconMenu" className="md:hidden" />
      <img src={heroImageDesktop} alt="iconMenu" className="hidden md:flex" />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="basis-5/12">
          <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="flex flex-col basis-7/12 justify-between gap-5">
          <p className="text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red text-off-white w-1/2 p-3 text-xs font-bold tracking-[0.3em] hover:bg-very-dark-blue">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
