/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQs = [
  { question: "What catering services do you offer?", answer: "We provide a range of catering services, including buffet-style, plated dinners, cocktail parties, and custom menu options to suit your event needs." },
  { question: "Do you accommodate dietary restrictions?", answer: "Absolutely! We can cater to vegetarian, vegan, gluten-free, and other dietary needs. Let us know your requirements during consultation." },
  { question: "What is the booking process?", answer: "Simply contact us to discuss your event details. We'll create a custom quote, and upon approval, we'll secure your date with a deposit." },
  { question: "How far in advance should I book?", answer: "We recommend booking at least 3-6 months in advance for larger events, but feel free to reach out for last-minute availability." },
  { question: "Do you provide event staff?", answer: "Yes, we can provide experienced chefs, servers, and bartenders to ensure your event runs smoothly." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9f9f9] text-charcoal font-coolvetica py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl tracking-wide capitalize">
            Frequently Asked Questions
          </h2>
          <p className="text-lg leading-relaxed font-satoshi">
            Planning an event? Here are some common questions about our catering services. 
            If you need more information, don't hesitate to get in touch!
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-6">
          {FAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-2 border-charcoal bg-yellow p-6 rounded-xl cursor-pointer hover:bg-charcoal hover:text-[#f9f9f9] transition-all duration-300"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between font-coolvetica items-center">
                <h3 className="text-xl tracking-wide">{faq.question}</h3>
                <span className="text-2xl font-black">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              <motion.p
                className={`mt-4 overflow-hidden text-base leading-relaxed font-satoshi hover:text-[#f9f9f9] ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
