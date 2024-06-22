import React from 'react'
import Img1 from "../../assets/arrival/tshirt.png"
import Img2 from "../../assets/arrival/jean.png" 
import Img3 from "../../assets/arrival/sheckeredshirt.png"
import Img4 from "../../assets/arrival/sleeve-striped-tshirt.png"
import Img5 from "../../assets/arrival/chemise.png"
import { LuStar } from "react-icons/lu";

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "T-shirt with Tape Details",
        rating: 4.5,
        author:"white",
        aosDelay : "0",
    },
    {
        id:2,
        img: Img2,
        title: "Skinny Fit Jeans",
        rating: 3.5,
        author:"red",
        aosDelay : "200",
    },
    {
        id:3,
        img: Img3,
        title: "Checkered Shirt",
        rating: 4.5,
        author:"brown",
        aosDelay : "400",
    },
    {
        id:4,
        img: Img4,
        title: "Sleeve Striped T-shirt",
        rating: 4.5,
        author:"red",
        aosDelay : "600",
    },
    
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section*/}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm
                 text-primary'>
                    Top Selling products for you
                    </p>
                <h1 data-aos="fade-up" className='text-3xl 
                font-bold'>
                    Products</h1>
                <p data-aos="fade-up" className='text-xs
                 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum quos iure voluptate animi facere. Voluptas, 
                    repellat debitis deleniti nesciunt nulla deserunt 
                    molestias quam doloremque corrupti, at reiciendis 
                    temporibus! Molestiae, voluptatum?</p>
            </div>
            {/* Body section*/}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* Card section */}
                    {
                        ProductsData.map(data => (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay} 
                            key={data.id} 
                            className="space-y-3">
                                {/* Your product card content here */}
                                <img src={data.img} alt=""
                                className='h-[220px] w-[150px]
                                object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>
                                        {data.color}</p>
                                        <div className='flex items-center gap-1'>
                                        <LuStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
