'use client'
import React, { useEffect, useRef, useState } from 'react';
import './MoviesStyle.css';

const CoustomMovie = () => {
  const trackRef = useRef(null);
  const [opacity, setOpacity] = useState(1); // State for opacity

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleOnDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage;

      // Update opacity based on movement
      const newOpacity = Math.max(0, 1 + nextPercentage / 100); // Change opacity based on percentage
      setOpacity(newOpacity); // Update the state

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      for (const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    };

    // Add event listeners
    window.onmousedown = handleOnDown;
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = handleOnUp;
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = handleOnMove;
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);

    // Cleanup function
    return () => {
      window.onmousedown = null;
      window.ontouchstart = null;
      window.onmouseup = null;
      window.ontouchend = null;
      window.onmousemove = null;
      window.ontouchmove = null;
    };
  }, []);

  return (
    <div className='MoviePage'>
      <div className='movie-info' style={{ opacity }}> {/* Set opacity here */}
        <h1 className='text-3xl font-bold mb-5'>Movies</h1>
        <p className='text-xl'>
          Sai Pallavi is a celebrated Indian actress known for her roles in Telugu, Tamil, and Malayalam films. She rose to fame with her performance in *Premam* (2015) and gained further recognition with hits like *Fidaa* (2017) and *NGK* (2019). Praised for her natural acting style and exceptional dance skills, she often portrays strong female characters. Balancing her flourishing acting career with a medical degree, Sai Pallavi remains one of the most admired actresses in Indian cinema today.
        </p>
      </div>
      <div className="image-track" ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
        <img className='image' src='permam.jpg' draggable='false' />
        <img className='image' src='Maari_2.jpg' draggable='false' />
        <img className='image' src='Shyamsinga.jpg' draggable='false' />
        <img className='image' src='gargi.jpg' draggable='false' />
        <img className='image' src='kali.jpg' draggable='false' />
        <img className='image' src='Paava.jpg' draggable='false' />
        <img className='image' src='lovestory.jpg' draggable='false' />
      </div>
      <div className='movie-info-right' style={{ opacity: 1 - opacity }}> {/* Set opacity here */}
        <h1 className='text-3xl font-bold mb-5'>Upcoming Movies</h1>
        <p className='text-xl'>
        Sai Pallavi is involved in several exciting projects currently in progress. One of the major films is Ramayana, where she will play the role of Sita, alongside Ranbir Kapoor as Lord Ram. The film is set to begin shooting in early 2024, and it will be a part of a grand trilogy exploring the epic tale​
        </p>
      </div>
    </div>
  );
};

export default CoustomMovie;
