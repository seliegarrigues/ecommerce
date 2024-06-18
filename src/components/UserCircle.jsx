import React from 'react'
import essaiPng from "../../src/assets/hamburger-black-picto.png"

const UserCircle = () => {
    const [theme,setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light")
  return (
    <div className='relative'>
        <img src={essaiPng} alt=""
        className='w-12 cursor-pointer drop-shadow
        [1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 *: 
        absolute right-0 z-10'
        />
    </div>
  )
}

export default UserCircle