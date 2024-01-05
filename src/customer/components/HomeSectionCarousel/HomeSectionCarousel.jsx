import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSecionCard/HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  //   const items = [
  //     <img className="cursor-pointer" src="/images/heroCard1.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard2.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard3.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard4.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard5.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard6.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard7.jpg" alt="" />,
  //     <img className="cursor-pointer" src="/images/heroCard8.jpg" alt="" />,
  //   ];

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative px-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay={false}
          autoPlayInterval={1400}
          infinite
          responsive={responsive}
          disableDotsControls
        />

        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-level="next"
        >
          <ChevronLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-level="next"
        >
          <ChevronRightIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
