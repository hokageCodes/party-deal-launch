"use client"
import React, { useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-charcoal font-coolvetica tracking-wide">
      <div className="max-w-7xl px-4 pb-8 pt-[60px] mx-auto text-[#f9f9f9] lg:pt-[120px]">
        <div className="text-[35px] md:text-[36px] lg:text-[44px] xl:text-[52p9x] leading-[45px] md:leading-[52px] lg:leading-[67px] tracking-wide">
          <h1 className="font-bold text-[#f9f9f9] pt-12">We represent a commitment to</h1>
          <p>
            <span className="text-yellow font-bold">quality, integrity,</span> and a{" "}
            <span className="text-yellow font-bold">solution</span> to your{" "}
            <span className="font-semibold text-[#f9f9f9]">
              catering needs.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-end justify-end w-full mt-3 mb-8 text-base"></div>

        <div className="mb-8">
          <React.Suspense fallback={<Skeleton height={500} width="100%" />}>
            <img
              src="../../assets/img/party1.jpg"
              alt="About Us"
              className="object-cover w-full h-[500px]"
            />
          </React.Suspense>
        </div>

        <div className="text-[32px] text-center text-[#f9f9f9] md:text-[36px] lg:text-[44px] md:px-8">
          <p>Reliable catering service built on trust and expertise.</p>
        </div>
      </div>
    </section>  
    </div>
  );
}
