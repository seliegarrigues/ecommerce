import React from "react";
import image1 from "../../assets/hero/couple.png";
import image2 from "../../assets/hero/twinkle-black2.png";
import image3 from "../../assets/hero/tshirt.png";
import image4 from "../../assets/hero/jean.png";
import slider from "react-slick";

const imageList = [
  {
    id: 1,
    img: image1,
    title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    description: "lorem lorem lorem ",
  },
  {
    id: 2,
    img: image2,
    title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    description: "twinkle black",
  },
  {
    id: 3,
    img: image3,
    title: "T-shirt with Tape Details",
    description: "$120 ",
  },
  {
    id: 4,
    img: image4,
    title: "Skinny Fit Jeans",
    description: "$240 $260 -20% ",
  },
];

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        Infinity:true,
        speed:800,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnfocus: true,
    };
  return (
    <div
      className=" relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center
     items-center dark:bg-gray-950 dark:text-white
    duration-200"
    >
      {/*background pattern */}
      <div
        className="h-[700px] bg-primary/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45
        -z-9"
      >
        <div></div>
      </div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <slider>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div
                className="flex flex-col justify-center
                gap-4 pt-12 sm:pt-0 text-center sm:text-left
                order-2 sm:order-1 relative z-10"
              >
                <h1
                  className="text-5xl sm:text-6xl
                     lg:text-7xl font-bold"
                >
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-sm">
                  Browse through our diverse range of meticulously crafted
                  garmens, designed to bring out your individualy and cater to
                  your sense of style.
                </p>
                <div>
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 
                        duration-200 text-white py-2 px-4
                        rounded-full"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              {/* image section */}
              <div className="order-1 sm:order-2 ">
                <div className="relative z-10">
                  <img
                    src={image1}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-
                        [450px] sm:w-[450px] sm:scale-125
                        object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </slider>
      </div>
    </div>
  );
};

export default Hero;
