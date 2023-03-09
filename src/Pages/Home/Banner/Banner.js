import React from "react";
import banner_1 from "../../../assets/images/banner/1.jpg";
import banner_2 from "../../../assets/images/banner/2.jpg";
import banner_3 from "../../../assets/images/banner/3.jpg";
import banner_4 from "../../../assets/images/banner/4.jpg";
import banner_5 from "../../../assets/images/banner/5.jpg";
import banner_6 from "../../../assets/images/banner/6.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: banner_1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: banner_2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: banner_3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: banner_4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: banner_5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: banner_6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-10 ">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

export default Banner;
