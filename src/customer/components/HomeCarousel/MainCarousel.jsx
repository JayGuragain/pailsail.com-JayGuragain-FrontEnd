import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = [
    <img className="cursor-pointer" src="/images/image1.jpg" alt="" />,
    <img className="cursor-pointer" src="/images/image2.jpg" alt="" />,
    <img className="cursor-pointer" src="/images/image3.jpg" alt="" />,
    <img className="cursor-pointer" src="/images/image4.jpg" alt="" />,
  ];

  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1400}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
