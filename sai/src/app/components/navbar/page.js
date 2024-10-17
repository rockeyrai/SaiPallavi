'use client'
import React, { useState } from 'react'
import './Navbar.css'; // Importing a global CSS file
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const CoustomNavbar = () => {
  const Links =[
    {name: "Home", path:"/"},
    {name: "Movie", path: "/movie"},
    {name: "Family", path: "/family"},
    {name: "Career", path: '/career'}
  ]

    const [navtoggle,setNavtoggle] = useState(false)
    const handleMobileNav=()=>setNavtoggle(!navtoggle) 

  const pathname = usePathname()
  return (
    <div className='nabar'>
      <h1  className='text-2xl text-pink-700 font-extrabold'>Khannan</h1>
      <button onClick={handleMobileNav} > { navtoggle? <RxCross2  className=' navToggle'  />:
      <IoReorderThreeOutline className=' navToggle'  /> }</button>
      <div className= {navtoggle ? "navbarItem active": "navbarItem" } >
     
        {Links.map((link,id)=>{
          return <Link className={` ${link.path === pathname && "text-pink-600 border-b-2" } text-white hover:text-pink-600 border-pink-600 `} key={id} href={link.path}>{link.name}</Link>
        })}
      </div>
    </div>
  )
}

export default CoustomNavbar
