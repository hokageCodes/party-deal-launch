"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
    "/assets/img/party4.jpg",
    "/assets/img/party3.jpg",
    "/assets/img/party2.jpg",
    "/assets/img/party1.jpg",
    "/assets/img/party2.jpg",
    "/assets/img/party3.jpg",
    "/assets/img/party4.jpg",
    "/assets/img/party1.jpg",
  
  ];
export default function GallerySwiper() {
  return (
    <section className="bg-[#FAFAFA] font-coolvetica tracking-wide leading-tight py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-coolvetica text-charcoal mb-4">
            Our Gallery
          </h2>
          <p className="font-satoshi text-gray-600 text-base md:text-lg max-w-3xl">
            Discover our finest moments and unforgettable setups.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="swiper-container"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-coolvetica">View Image</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
