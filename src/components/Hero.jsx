import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import React from "react";

/**
 * Hero Component
 *
 * Displays the hero section of the page, featuring the iPhone 15 Pro.
 * Includes a video background that changes based on screen size,
 * and GSAP animations for smooth fade-in effects.
 *
 * @component
 * @returns {JSX.Element} The hero section.
 */
const Hero = () => {
  // State to manage the video source based on screen width
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  /**
   * Updates the video source based on window size.
   * Uses the smaller video for screens less than 760px wide.
   */
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  // Effect to update video source on window resize
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });

  // GSAP animations for fading in hero elements
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        {/* Hero Title */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        {/* Hero Video */}
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc} // Ensures correct video reload on source change
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* Call-To-Action (CTA) Section */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0  translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
