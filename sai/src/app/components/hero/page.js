import React from "react";
import "./HeroStyles.css";
import Link from "next/link";

const CoustomHero = () => {
  return (
    <div className="MainHero">
      <div className="img-info">
        <img className="SaiImage" src="/saipallavi7.jpg" />
        <h1>SAI PALLAVI SENTHAMARAI</h1>
        <p>"Malar" in Malayalam film 'Preman' (2015)</p>
        <p>Actress | Doctor | Dancer</p>
      </div>
      <div className="right-info">
        <h1>Short Bio</h1>
        <p>
          Sai Pallavi is an Indian actress and dancer known for her work in
          South Indian cinema, particularly in Tamil, Telugu, and Malayalam
          films. She first gained widespread recognition for her role as Malar
          in the 2015 Malayalam film Premam, which became a massive hit. Her
          natural acting style and lack of makeup in the movie stood out,
          earning her critical and audience praise.
        </p>
        <div className="flex flex-col mt-5 justify-center items-center">
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
