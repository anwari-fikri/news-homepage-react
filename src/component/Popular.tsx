import React from "react";
import retroPc from "../assets/image-retro-pcs.jpg";
import topLaptops from "../assets/image-top-laptops.jpg";
import gamingGrowth from "../assets/image-gaming-growth.jpg";

const Popular = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mx-5 my-10">
        <img src={retroPc} alt="retro-pc" className="w-24" />
        <div className="flex flex-col gap-1 pl-5 pr-3">
          <h2 className="text-grayish-blue font-bold text-3xl">01</h2>
          <h3 className="font-bold text-lg">Reviving Retro PCs</h3>
          <p className="font-extralight text-dark-grayish-blue text-sm">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mx-5 my-10">
        <img src={topLaptops} alt="retro-pc" className="w-24" />
        <div className="flex flex-col gap-1 pl-5 pr-3">
          <h2 className="text-grayish-blue font-bold text-3xl">02</h2>
          <h3 className="font-bold text-lg">Top 10 Laptops of 2022</h3>
          <p className="font-extralight text-dark-grayish-blue text-sm">
            Our best picks for various needs and budgets
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mx-5 my-10">
        <img src={gamingGrowth} alt="retro-pc" className="w-24" />
        <div className="flex flex-col gap-1 pl-5 pr-3">
          <h2 className="text-grayish-blue font-bold text-3xl">03</h2>
          <h3 className="font-bold text-lg">The Growth of Gaming</h3>
          <p className="font-extralight text-dark-grayish-blue text-sm">
            How the pandemic has sparked fresh opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
