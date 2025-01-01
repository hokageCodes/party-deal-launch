"use client"
import { useEffect } from "react";
import gsap from "gsap";
import ContactSection from "../components/contact/ContactSection";
import FAQSection from "../components/faqs/FAQsSection";
import Gallery from "../components/gallery/Gallery";
import HeroSection from "../components/hero/HeroSection";
import HowItWorks from "../components/how-it-works/HowItWorksSection";
import MenuSection from "../components/our-menu/OurMenu";
import Services from "../components/our-services/OurServicesSection";

export default function LandingPage() {
  useEffect(() => {
    // GSAP Parallax Scroll Animations
    const sections = document.querySelectorAll(".parallax");
    
    gsap.utils.toArray(sections).forEach((section) => {
      gsap.fromTo(
        section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger the animation when the section is 80% from the top
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    // GSAP for other animations on scroll (optional)
    gsap.fromTo(
      ".hero-element",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".hero-element",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      <HeroSection className="parallax hero-element" />
      <Services className="parallax" />
      <HowItWorks className="parallax" />
      <FAQSection className="parallax" />
      <MenuSection className="parallax" />
      <Gallery className="parallax" />
      <ContactSection className="parallax" />
    </div>
  );
}
