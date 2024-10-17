'use client'
import React, { useState } from 'react'
import './Navbar.css'; // Importing a global CSS file
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CoustomNavbar = () => {
  const Links =[
    {name: "Home", path:"/"},
    {name: "Movie", path: "/movie"},
    {name: "Family", path: "/family"}
  ]

    const [navtoggle,setNavtoggle] = useState(true)
    const handleMobileNav=()=>setNavtoggle(!navtoggle) 

  const pathname = usePathname()
  return (
    <div className='nabar'>
      <h1  className='text-xl font-bold'>Sai Pallavi</h1>
      <button onClick={handleMobileNav} className=' navToggle' > </button>
      <div className= {`navbarItem ${navtoggle && "right-[-450px]"} `} >
     
        {Links.map((link,id)=>{
          return <Link className={`text-white hover:text-blue-400 border-blue-400 ${link.path === pathname && "text-blue-400 border-b-2"}`} key={id} href={link.path}>{link.name}</Link>
        })}
      </div>
    </div>
  )
}

export default CoustomNavbar
