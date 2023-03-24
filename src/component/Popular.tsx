import React from "react";
import retroPc from "../assets/image-retro-pcs.jpg";
import topLaptops from "../assets/image-top-laptops.jpg";
import gamingGrowth from "../assets/image-gaming-growth.jpg";

const PopularItem = ({
  image,
  number,
  title,
  content,
}: {
  image: any;
  number: string;
  title: string;
  content: string;
}) => {
  return (
    <>
      <div className="cursor-pointer flex flex-row items-center justify-left mx-5 my-10 hover:text-soft-red">
        <img src={image} alt="retro-pc" className="w-28" />
        <div className="flex flex-col gap-1 pl-5 pr-3 ">
          <h2 className="text-grayish-blue font-bold text-3xl">{number}</h2>
          <h3 className="cursor-pointer font-bold text-lg ">{title}</h3>
          <p className="font-extralight text-dark-grayish-blue text-sm">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

const Popular = () => {
  return (
    <section className="flex flex-col md:flex-row ">
      <PopularItem
        image={retroPc}
        number="1"
        title="Reviving Retro PCs"
        content="What happens when old PCs are given modern upgrades?"
      />
      <PopularItem
        image={topLaptops}
        number="2"
        title="Top 10 Laptops of 2022"
        content="Our best picks for various needs and budgets"
      />
      <PopularItem
        image={gamingGrowth}
        number="3"
        title="The Growth of Gaming"
        content="How the pandemic has sparked fresh opportunities"
      />
    </section>
  );
};

export default Popular;
