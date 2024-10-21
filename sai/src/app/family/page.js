"use client"
import CoustomNavbar from '@/components/navbar/page';
import React, { useEffect } from 'react'

const Family = () => {
  console.log("Movies page is being rendered");
  useEffect(() => {
    console.log("This is movie page (from useEffect)");
  }, []);

  return (
    <div>
      {console.log("This is movie page rendering")}
      <div className='w-[200px] h-[400px] bg-blue-300'>
        Movie page
      </div>
    </div>
  );
}

export default Family
