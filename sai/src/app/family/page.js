"use client";
import "./FamilyStyle.css";
import React, { useEffect } from "react";

const Family = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center  bg-[rgb(253,158,206)]">
      <div className="main-container">

          <div className="Family-info">
            <img src="saipallavi6.jpg" />
            <h1 className="underline">Father</h1>
            <h2>Senthamarai Kannan</h2>
            <p>
              Senthamarai Kannan is a central excise officer. As part of India’s
              revenue services, he works in the customs and excise department,
              which is responsible for duties on goods. He has maintained a low
              profile despite his daughter's fame, but Sai Pallavi has often
              expressed her gratitude for the support and values he instilled in
              her, especially regarding education and humility.
            </p>
          </div>
 

          <div className="Family-info">
            <img src="saipallavi6.jpg" />
            <h1 className="underline">Mother</h1>
            <h2>Radha Kannan</h2>
            <p>
            Radha Kannan is a homemaker and has been a strong pillar of support for Sai Pallavi. Sai Pallavi frequently mentions her mother in interviews, highlighting how close they are. Radha Kannan has been instrumental in ensuring her daughters' upbringing was grounded despite their professional successes.
            </p>
          </div>

          <div className="Family-info">
            <img src="saipallavi6.jpg" />
            <h1 className="underline">Sister</h1>
            <h2>Pooja Kannan</h2>
            <p>
            Pooja Kannan is Sai Pallavi’s younger sister and is also an actress, although she is still in the early stages of her career. Pooja has appeared in short films and minor roles in a few South Indian films. In 2021, she made her debut in a lead role in the Tamil movie Chithirai Sevvaanam. Sai Pallavi is known to be very supportive of her sister’s career and often encourages her.
            </p>
        </div>

      </div>
    </div>
  );
};

export default Family;
