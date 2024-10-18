'use client';
import React, { useEffect, useState } from "react";
import "./HeroStyles2.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const awardsPhoto = [
  "/award.jpg", "/award1.jpg", "/award2.jpg"
];

const awards = [
  { name: "Filmfare Awards South", wins: 6, nominations: 7 },
  { name: "South Indian International Movie Awards", wins: 2, nominations: 7 },
  { name: "Ananda Vikatan Cinema Awards", wins: 1, nominations: 2 },
  { name: "Asianet Film Awards", wins: 2, nominations: 2 },
  { name: "Asiavision Awards", wins: 1, nominations: 1 },
  { name: "Chennai International Film Festival", wins: 1, nominations: 1 },
  { name: "CPC Cine Awards", wins: 1, nominations: 1 },
  { name: "Indian Film Festival of Melbourne", wins: 0, nominations: 1 },
  { name: "Norway Tamil Film Festival Awards", wins: 1, nominations: 1 },
  { name: "Vanitha Film Awards", wins: 1, nominations: 1 },
];

const totalWins = awards.reduce((sum, award) => sum + award.wins, 0);
const totalNominations = awards.reduce(
  (sum, award) => sum + award.nominations,
  0
);

const CoustomHero2 = () => {
  const [changeAward, setChangeAward] = useState(awardsPhoto[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const element = ".awarimage"; // Target element for animation

    // Set initial state to ensure it's not visible
    gsap.set(element, { opacity: 0 });

    // Animation with ScrollTrigger
    const animation = gsap.fromTo(
      element,
      { y: 200 }, // Starting position
      {
        y: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: element,
          start: "top 70%", // When the top of the element hits 60% of the viewport
          end: "bottom 99%",
          scrub: true,
          once: false, // Prevent repeat on scroll back
          markers: false // Enable markers for debugging
        },
      }
    );

    // Cleanup on unmount
    return () => {
      animation.kill(); // Kill the animation when component unmounts
    };
  }, []);

  useEffect(() => {
    const element = ".totalawardData"; // Target element for animation

    // Set initial state to ensure it's not visible
    gsap.set(element, { opacity: 0 });

    // Animation with ScrollTrigger
    const animation = gsap.fromTo(
      element,
      { y: -100 }, // Starting position
      {
        y: 0,
        opacity: 1,
        
        duration: 5,
        scrollTrigger: {
          trigger: element,
          start: "top 70%", // When the top of the element hits 60% of the viewport
          end: "bottom 80%",
          scrub: true,
          once: false, // Prevent repeat on scroll back
          markers: false // Enable markers for debugging
        },
      }
    );

    // Cleanup on unmount
    return () => {
      animation.kill(); // Kill the animation when component unmounts
    };
  }, []);

  useEffect(() => {
    const element = ".rightaward"; // Target element for animation

    // Set initial state to ensure it's not visible
    gsap.set(element, { opacity: 0 });

    // Animation with ScrollTrigger
    const animation = gsap.fromTo(
      element,
      { y: 100 }, // Starting position
      {
        y: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: element,
          start: "top 100%", // When the top of the element hits 60% of the viewport
          end: "bottom 80%",
          scrub: true,
          once: false, // Prevent repeat on scroll back
          markers: false // Enable markers for debugging
        },
      }
    );

    // Cleanup on unmount
    return () => {
      animation.kill(); // Kill the animation when component unmounts
    };
  }, []); // Run only once on mount

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awardsPhoto.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    setChangeAward(awardsPhoto[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="hero2">
      <div className="awardtab">
        <div className="rightaward">
          <h1>Award and Nomination</h1>
          <div className="rounded-md border bg-blue-50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Awards</TableHead>
                  <TableHead className="text-center">Wins</TableHead>
                  <TableHead className="text-center">Nominations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {awards.map((award) => (
                  <TableRow key={award.name}>
                    <TableCell className="font-medium">{award.name}</TableCell>
                    <TableCell className="text-center bg-green-200">
                      {award.wins}
                    </TableCell>
                    <TableCell className="text-center bg-pink-200">
                      {award.nominations}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="totalaward">
          <div>
            <div className="overflow-hidden">
            <img className="awarimage" src={changeAward} />

            </div>
            <div className="overflow-hidden">

          
            <div className="totalawardData">
              <Table>
                <TableBody className="bg-blue-120">
                  <TableRow>
                    <TableCell colSpan={3} className="font-bold text-lg">
                      Totals
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Wins</TableCell>
                    <TableCell
                      colSpan={2}
                      className="text-center bg-green-200 font-bold"
                    >
                      {totalWins}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nominations</TableCell>
                    <TableCell
                      colSpan={2}
                      className="text-center rounded-br-xl bg-pink-200 font-bold"
                    >
                      {totalNominations}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            </div>
          </div>
          <div className="text-center recentAward">
            <h1>RECENT AWARD</h1>
            <p>
              Sai Pallavi's most recent major award is from 2023, where she won
              the Best Actress award for her performance in the Tamil film Gargi
              at the Norway Tamil Film Festival. Gargi also earned her a
              nomination at the South Indian International Movie Awards (SIIMA)​.
              Additionally, her critically acclaimed roles in Shyam Singha Roy and
              Love Story previously won her two Filmfare Awards South in 2021​.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoustomHero2;
