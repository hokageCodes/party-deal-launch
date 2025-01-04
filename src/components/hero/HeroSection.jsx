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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to("#hero-heading", {
      x: -200,
      opacity: 0,
      duration: 1,
    })
      .to("#hero-paragraph", { x: 200, opacity: 0, duration: 1 }, "<")
      .to("#hero-buttons", { y: 100, opacity: 0, duration: 1 }, "<");

    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      onEnterBack: () => {
        gsap.to("#hero-heading", { x: 0, opacity: 1, duration: 0.6 });
        gsap.to("#hero-paragraph", { x: 0, opacity: 1, duration: 0.6 });
        gsap.to("#hero-buttons", { y: 0, opacity: 1, duration: 0.6 });
      },
    });
  }, []);

  return (
    <section
      id="hero-section"
      className="font-coolvetica relative bg-cover bg-no-repeat h-screen mt-12 flex items-center"
      style={{
        backgroundImage: "url('/assets/img/party1.jpg')",
        backgroundPosition: "right",
        backgroundSize: "cover",
        opacity: 0.9, // Set the opacity for the background image
      }}
    >
      {/* Left Content */}
      <div className="bg-charcoal flex flex-col justify-center items-start gap-6 text-left max-w-2xl px-8 mx-12 rounded-2xl z-10 p-12 opacity-80">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide"
        >
          Special <span className="text-yellow">Occasions</span> Deserve Special
          Catering to
        </h1>
        <p
          id="hero-paragraph"
          className="font-satoshi text-gray-200 text-base md:text-base lg:text-base max-w-xl"
        >
          Whether you&#39;re hosting a wedding, corporate event, or private
          party in Nigeria, we excel at delivering customized catering services
          designed to impress your guests and leave lasting memories.
        </p>
        <div id="hero-buttons" className="flex flex-col md:flex-row gap-4">
          <Button
            label="Book Now"
            variant="primary"
            size="large"
            icon={<FiArrowRight />}
            onClick={() => console.log("Button Clicked!")}
          />
          <Button
            label="Our Services"
            variant="outline"
            size="large"
            icon={<FiArrowRight />}
            onClick={() => console.log("Button Clicked!")}
          />
        </div>
      </div>
    </section>
  );
}
