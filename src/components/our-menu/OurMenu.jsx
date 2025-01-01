/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Button from "../button/Button";

const MenuSection = () => {
  return (
    <section className="bg-charcoal py-12 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Text Content */}
        <motion.div
          className="flex-1"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-coolvetica text-[#f9f9f9] mb-4">
            Explore Our Full Menu
          </h2>
          <p className="text-lg font-satoshi text-gray-400 text-base md:text-lg max-w-xl mt-4 mb-4">
            Discover the wide variety of delicious Nigerian dishes we offer. From hearty main
            courses to delightful desserts, there's something for everyone. Download our full menu
            now and plan your next meal with us!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              label="View Menu"
              variant="primary"
              size="small"
              icon={<FiArrowRight />}
              onClick={() => window.location.href("/")}
            />
          </motion.div>
        </motion.div>

        {/* Optional Image */}
        <motion.div
          className="flex-1"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src="/assets/img/corp.jpg"
            alt="Delicious Nigerian Dishes"
            className="rounded-lg object-cover h-[500px] w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MenuSection;
