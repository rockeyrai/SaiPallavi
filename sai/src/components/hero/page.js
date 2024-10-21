"use client";
import React, { useEffect, useRef } from "react";
import "./HeroStyles.css";
import Link from "next/link";
import gsap from "gsap"; // Import GSAP
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin

gsap.registerPlugin(TextPlugin); // Register the TextPlugin

const CoustomHero = () => {
  const occRef = useRef(null); // Ref for one element

  useEffect(() => {
    slideleft();
 // Call the function here
  }, []);

  
  const slideleft = () => {
    gsap.fromTo(
      ".occupation p",    // Target element
      { x: 0 },          // Starting position
      {
        x: 70,             // Ending position
        duration: 3,      // Duration of the animation
        yoyo: true,       // Reverse the animation after it's done
        repeat: -1,        // Repeat once, so it goes back and forth
        stagger: 0.5,     // Delay between each staggered element
      }
    );
  };

  return (
    <div className="MainHero">
      <div className="img-info">
        <img className="SaiImage" src="/saipallavi7.jpg" />
        <h1>SAI PALLAVI SENTHAMARAI</h1>
        <p>"Malar" in Malayalam film 'Premam' (2015)</p>
        <div className="flex gap-2 text-xl occupation">
          <div className=" overflow-hidden">
            <p>Actress </p>
          </div>
          |
          <div className=" overflow-hidden">

            <p>Doctor </p>
          </div>
          |
          <div className=" overflow-hidden">
            <p>Dancer</p>
          </div>
        </div>
      </div>
      <div className="right-info ">
        <h1>Short Bio</h1>
        <p>
          Sai Pallavi is an Indian actress and dancer known for her work in
          South Indian cinema, particularly in Tamil, Telugu, and Malayalam
          films. She first gained widespread recognition for her role as Malar
          in the 2015 Malayalam film Premam, which became a massive hit. Her
          natural acting style and lack of makeup in the movie stood out,
          earning her critical and audience praise.
        </p>
        <div className="flex flex-col mt-5 justify-center items-center  overflow-hidden">
          <h2 className="mb-4 text-2xl font-bold">Social Media</h2>
          <div className=" flex justify-around gap-5">
            <Link href={"https://www.facebook.com/SaiPallavi.S"}>
              <img className="contactlogo" src="./facebook.png" />
            </Link>
            <Link
              href={"https://www.instagram.com/saipallavi.senthamarai/?hl=en"}
            >
              <img className="contactlogo " src="./insta.png" />
            </Link>
            <Link href={"https://x.com/SaipallaviFC"}>
              <img className="contactlogo" src="./twiter.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoustomHero;
