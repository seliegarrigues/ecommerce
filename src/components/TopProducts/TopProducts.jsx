import React from 'react'
import Img1 from "../../assets/TopSelling/chemise.png"
import Img2 from "../../assets/TopSelling/tshirtcourage.png" 
import Img3 from "../../assets/TopSelling/jean-bermuda.png"
import Img4 from "../../assets/TopSelling/jean-black.png"
import { FaStar } from 'react-icons/fa'

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Vertical Striped Shirt",
        rating: 5.0,
        price:"$212",
        Sold:"$232",
        aosDelay : "0",
    },
    {
        id:2,
        img: Img2,
        title: "Courage Graphic T-shirt",
        rating: 4.0,
        price:"$145",
        aosDelay : "200",
    },
    {
        id:3,
        img: Img3,
        title: "Loose Fit Bermuda Shorts",
        rating: 3.0,
        price:"$80",
        aosDelay : "400",
    },
    {
        id:4,
        img: Img4,
        title: "Faded Skinny Jeans",
        rating: 4.5,
        price:"$210",
        aosDelay : "600",
    },
    
]


const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section*/}
            <div className='text-left mb-24 '>
                <p data-aos="fade-up" className='text-sm
                 text-primary'>
                    Top Selling 
                    </p>
                <h1 data-aos="fade-up" className='text-3xl 
                font-bold'>
                     Best Products</h1>
                <p data-aos="fade-up" className='text-xs
                 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum quos iure voluptate animi facere. Voluptas, 
                    repellat debitis deleniti nesciunt nulla deserunt 
                    molestias quam doloremque corrupti, at reiciendis 
                    temporibus! Molestiae, voluptatum?</p>
            </div>
            {/* Body section*/}
            <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
            >
                {
                    ProductsData.map((data)=>(
                        <div
                        data-aos='zoom-in'
                        className='rounded-2xl bg-white hover:bg-black/80 hover:text-white relative
                        shadow-xl duration-300 group-max-w[300px]'
                        >
                            {/*image section*/}
                        <div className='h-[100px]'>
                            <img src={data.img} alt=""
                            className='max-w-[140px] block mx-auto
                            transform -translate-y-20
                            group-hover:scale-105 duration-300
                            drop-shadow-md'
                            />
                        </div>
                            {/*details section*/}
                            <div className='p-4 text-center'>
                                {/* star rating*/}
                                <div className='w-full flex items-center
                                justify-center gap-1'>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.
                                title}</h1>
                                <p className='text-gray-500
                                group-hover:text-white duration-300
                                text-sm line-clamp-2'>
                                </p>
                                <button
                                className='hover:scale-105
                                duration-300 text-white py-1 px-4
                                rounded-full mt-4 group-hover:bg-white
                                group-hover:text-gray'
                                //onClick={handleOrderPopup}
                                >
                                Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default TopProducts