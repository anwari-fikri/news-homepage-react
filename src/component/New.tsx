import React from "react";

const NewItem = ({ title, content }: { title: string; content: string }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-2 py-6">
          <h3 className="font-bold text-off-white text-xl">{title}</h3>
          <p className="font-extralight text-grayish-blue text-sm">{content}</p>
        </div>
      </div>
    </>
  );
};

const New = () => {
  return (
    <div className="bg-very-dark-blue my-10 mx-5 p-5 pb-0 lg:w-[100%]">
      <div className="flex flex-col justify-evenly h-[100%] ">
        <h2 className="text-soft-orange font-bold text-3xl">New</h2>
        <NewItem
          title="Hydrogen VS Electric Cars"
          content="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <div className="border-t border-grayish-blue"></div>
        <NewItem
          title="The Downsides of AI Artistry"
          content="What are the possible adverse effects of on-demand AI image
          generation?"
        />
        <div className="border-t border-grayish-blue"></div>
        <NewItem
          title="Is VC Funding Drying Up?"
          content="Private funding by VC firms is down 50% YOY. We take a look at
          what that means."
        />
      </div>
    </div>
  );
};

export default New;
