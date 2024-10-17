import React from "react";
import "./HeroStyles.css";

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
          earning her critical and audience praise.{" "}
        </p>
      </div>
    </div>
  );
};

export default CoustomHero;
