"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import AboutPage from "../components/about-us/AboutUsSection";
import MasonryGallery from "../components/masonry-gallery/MasonryGallerySection";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";

export default function CompanyPage() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, easing: 'ease-in-out' });

    // GSAP scroll animations
    gsap.fromTo(".about-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, scrollTrigger: ".about-section", duration: 1 }
    );
    gsap.fromTo(".why-choose-us", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, scrollTrigger: ".why-choose-us", duration: 1 }
    );
    gsap.fromTo(".gallery-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, scrollTrigger: ".gallery-section", duration: 1 }
    );
  }, []);

  return (
    <div>
      <motion.div 
        className="about-section"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <AboutPage />
      </motion.div>
      
      <motion.div 
        className="why-choose-us"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <WhyChooseUs />
      </motion.div>
      
      <motion.div 
        className="gallery-section"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <MasonryGallery />
      </motion.div>
    </div>
  );
}
