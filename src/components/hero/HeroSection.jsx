"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";
import { FiArrowRight } from "react-icons/fi";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    // Animate heading and paragraph to part away on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top", // When the top of the section hits the top of the viewport
        end: "bottom top", // When the bottom of the section hits the top of the viewport
        scrub: true, // Smooth scrubbing effect
      },
    });

    tl.to("#hero-heading", {
      x: -200,
      opacity: 0,
      duration: 1,
    })
      .to("#hero-paragraph", { x: 200, opacity: 0, duration: 1 }, "<")
      .to("#hero-buttons", { y: 100, opacity: 0, duration: 1 }, "<")
      .to("#hero-image", { scale: 0.8, opacity: 0, duration: 1 }, "<");

    // Reverse animations when scrolling back
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      onEnterBack: () => {
        gsap.to("#hero-heading", { x: 0, opacity: 1, duration: 0.6 });
        gsap.to("#hero-paragraph", { x: 0, opacity: 1, duration: 0.6 });
        gsap.to("#hero-buttons", { y: 0, opacity: 1, duration: 0.6 });
        gsap.to("#hero-image", { scale: 1, opacity: 1, duration: 0.6 });
      },
    });
  }, []);

  return (
    <section
      id="hero-section"
      className="bg-charcoal font-coolvetica relative flex flex-col lg:flex-row items-center justify-center gap-8 p-8 lg:p-16 h-screen mt-16"
    >
      {/* Left Side */}
      <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-4xl z-10 mt-12 lg:mt-0">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-wide mt-8 md:mt-12"
        >
          Special{" "}
          <span className="text-yellow">Occasions</span> Deserve Special
          Catering to
        </h1>
        <p
          id="hero-paragraph"
          className="font-satoshi text-gray-400 text-base md:text-lg lg:text-xl max-w-lg"
        >
          Whether you&#39;re hosting a wedding, corporate event, or private
          party in Nigeria, we excel at delivering customized catering services
          designed to impress your guests and leave lasting memories.
        </p>
        <div
          id="hero-buttons"
          className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button
            label="Book Now"
            variant="primary"
            size="large"
            icon={<FiArrowRight />}
            onClick={() => console.log("Button Clicked!")}
          />
          <div className="hidden md:block">
            <Button
              label="Our Services"
              variant="outline"
              size="large"
              icon={<FiArrowRight />}
              onClick={() => console.log("Button Clicked!")}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        id="hero-image"
        className="relative flex justify-center lg:justify-end w-full lg:w-auto"
      >
        <div className="rounded-2xl overflow-hidden max-w-full h-auto lg:mt-20">
          <img
            src="/assets/img/ch.png"
            alt="American Special Salad"
            className="object-contain w-[80%] lg:w-[400px] h-auto mx-auto lg:mx-0"
          />
        </div>
        <div className="absolute top-4 right-4 bg-red px-4 py-2 mt-12 rounded-lg shadow-md text-white font-medium text-sm md:text-base">
          Today&#39;s Choice
        </div>
      </div>
    </section>
  );
}
