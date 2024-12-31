"use client";

import { FiFileText, FiPhoneCall, FiMail, FiSmile, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
// import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Button from "../button/Button";

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animations trigger only once
    });
  }, []);

  const steps = [
    {
      title: "Fill Our Booking Form",
      description:
        "Complete our booking form with the requested information to kickstart your journey.",
      icon: <FiFileText size={24} />,
    },
    {
      title: "Get Contacted by a Satisfaction Rep",
      description:
        "Our client's satisfaction rep will reach out to confirm your booking and finalize arrangements.",
      icon: <FiPhoneCall size={24} />,
    },
    {
      title: "Receive Final Confirmation",
      description:
        "You'll receive a confirmation email with all details, including the agreed quote or invoice.",
      icon: <FiMail size={24} />,
    },
    {
      title: "Enjoy Your Event",
      description:
        "Sit back and enjoy your event with mouthwatering food and excellent services.",
      icon: <FiSmile size={24} />,
    },
  ];

  return (
    <section className="bg-charcoal font-coolvetica tracking-wide leading-tight py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-[#fafafa] text-3xl md:text-5xl font-bold mb-4 md:mb-0 tracking-wide">
              How It Works
            </h2>
            <p className="font-satoshi text-gray-400 text-base md:text-lg max-w-xl mt-2">
              Follow these simple steps to make your event truly memorable.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              label="Book Now"
              variant="outline"
              size="medium"
              icon={<FiArrowRight />}
              onClick={() => console.log("Book Now Clicked!")}
            />
          </div>
        </motion.div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              data-aos="fade-up"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-yellow text-white rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-charcoal text-xl font-bold mb-2 font-coolvetica">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-coolvetica">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
