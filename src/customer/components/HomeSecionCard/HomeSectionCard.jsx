import React from "react";

const HomeSectionCard = () => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-blue-200 rounded-lg shadow-lg 
    overflow-hidden w-[15rm] mx-3 border"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="./images/heroCard1.jpg"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-500">PailSail</h3>
        <p className="mt-2 text-sm text-gray-500">
          lornfa-rotate-180 Lorem ipsum dolor sit amet Blanditiis, vitae?
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
