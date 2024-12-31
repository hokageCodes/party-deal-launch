"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Button from "../button/Button";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
    useEffect(() => {
        // Animate each character in the hero heading
        gsap.fromTo(
            "#hero-heading .char",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
            }
        );
}, []);

  return (
    <section className="bg-charcoal font-coolvetica relative flex flex-col lg:flex-row items-center justify-center gap-8 p-8 lg:p-16 h-screen mt-16 md:mt-[-50px]">
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
          Whether it&#39;s a wedding, corporate event, or even a corporate party in Nigeria, we specialize in providing tailored catering services that will delight your guests.
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
          {/* Remove 'Our Menu' CTA on mobile */}
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
      <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
        <div
          className="rounded-2xl overflow-hidden max-w-full h-auto lg:mt-20"
        >
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
