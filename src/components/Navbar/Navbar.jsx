import React from 'react'
import { LuMenu } from "react-icons/lu";
import Logo from "../../assets/Logo.png";
import { LuSearch } from "react-icons/lu";
import { FaCartShopping } from 'react-icons/fa6';
import { LuUserCircle2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='shadow-mg bg-white
    duration-200 relative z-40'>
      {/* upper Navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex
        justify-between items-center'>
          <div>
            <a href="#"
            className='font-bold text-2xl sm:text-3xl flex gap-2'
            >
              <LuMenu 
              className='w-10'
              />
              
            </a>
          </div>
          <div>
            <a href="#"
            className='font-bold text-2xl sm:text-3xl flex gap-2'
            >
              <img src={Logo} alt="Logo" 
              className='w-10'/>
              Shop
            </a>
          </div>
          {/*search bar */}
          <div className='flex justify-between 
          items-center gap-4'>
            <div className=' relative group hidden 
            sm:block'>
              <input type='text'
              placeholder='Search for products...'
              className='w-[200px] sm:w-[200px]
              group-hover:w-[300px] transition-all
              duration-300 rounded-full border
              border-black-300 px-2 py-1
              focus: outline-none focus: border-1
              focus: border-primary'
              />
              <LuSearch
              className='text-gray-500
              group-hover:text-primary absolute
              top-1/2 -translate-y-1/2 right-3 w-10'/>
            </div>
          </div>
          {/* order button */}
          <button onClick={()=> alert("Ordering not available yet")}
            className=' transition-all duration-200
            py-1 px-4 rounded-full flex 
            items-center gap-3 group'
            >
            <span
            className='group-hover:block
            hidden transition-all duration-200'>
              Buy Now
              </span>
              <FaCartShopping
              className=' w-10 text-xl drop-shadow-sm
              cursor-pointer'
              />
          </button>
          {/*user*/}
          <div>
          <a href="#"
            className='font-bold text-2xl sm:text-3xl flex gap-2'
            >
          <LuUserCircle2
          className='w-10'
          />
          </a>
          </div>
        </div>
      </div>
      {/*lower Navbar*/}
      <div></div>
    </div>
  )
}

export default Navbar
