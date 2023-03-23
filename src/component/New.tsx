import React from "react";

const New = () => {
  return (
    <div className="bg-very-dark-blue my-10 mx-5 p-5 pb-0 lg:w-[100%]">
      <div className="flex flex-col justify-evenly h-[100%] ">
        <div>
          <h2 className="text-soft-orange font-bold text-3xl">New</h2>
          <div className="flex flex-col gap-2 py-6">
            <h3 className="font-bold text-off-white text-xl">
              Hydrogen VS Electric Cars
            </h3>
            <p className="font-extralight text-grayish-blue text-sm">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
        </div>
        <div className="border-t border-grayish-blue"></div>
        <div>
          <div className="flex flex-col gap-2 py-6">
            <h3 className="font-bold text-off-white">
              The Downsides of AI Artistry
            </h3>
            <p className="font-extralight text-grayish-blue text-sm">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
        </div>
        <div>
          <div className="border-t border-grayish-blue"></div>
          <div className="flex flex-col gap-2 py-6">
            <h3 className="font-bold text-off-white">
              Is VC Funding Drying Up?
            </h3>
            <p className="font-extralight text-grayish-blue text-sm">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
