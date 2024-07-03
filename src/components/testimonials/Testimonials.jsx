import React from "react";
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "lorem ispum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "lorem ispum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "lorem ispum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: "Iuliaa",
        text: "lorem ispum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104"
    },
    {
        id: 4,
        name: "Oussama Alaa",
        text: "lorem ispum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/105/105"
    },
]

const Testimonials = () => {

    var settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToSrcoll:1,
        autoplay: true,
        autoplaySpeed : 2000,
        cssEase: "linear",
        pauseOnHover: true, 
        pauseOnfocus: true, 
        responsive : [
            {
                breakpoint: 10000,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll:1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
                settings: {
                    slidesToShow: 2,
                    slidesToscroll:1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint : 640,
                settings : {
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide:1,
                }
            }
        ]
    }
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm
                 text-primary"
          >
            What Our customers are saying
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl 
                font-bold"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs
                 text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos
            iure voluptate animi facere. Voluptas, repellat debitis deleniti
            nesciunt nulla deserunt molestias quam doloremque corrupti, at
            reiciendis temporibus! Molestiae, voluptatum?
          </p>
        </div>
        {/* testimonials cards */}
        <div data-aos ="zomm-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6"> 
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg
                         py-8 px-6 mx-4 rounded-xl
                         bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className='"text-xs text-gray-400'>{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"
                  >''</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
