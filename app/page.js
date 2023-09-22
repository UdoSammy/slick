"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function page() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" p-10 bg-emerald-500  text-white h-screen">
      <h1>Carousel</h1>

      <Slider {...settings}>
        <div className="w-full bg-red-500 h-[300px]">
          <h3>1</h3>
        </div>

        <div className="w-full bg-red-500 h-[300px]">
          <h3>2</h3>
        </div>

        <div className="w-full bg-red-500 h-[300px]">
          <h3>3</h3>
        </div>

        <div className="w-full bg-red-500 h-[300px]">
          <h3>4</h3>
        </div>

        <div className="w-full bg-red-500 h-[300px]">
          <h3>5 </h3>
        </div>
      </Slider>
    </div>
  );
}

export default page;
