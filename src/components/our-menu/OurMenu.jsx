/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../button/Button';

const MenuSection = () => {
  return (
    <section className="bg-charcoal py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-coolvetica text-[#f9f9f9] mb-4">
            Explore Our Full Menu
          </h2>
          <p className="text-lg font-satoshi text-gray-400 text-base md:text-lg max-w-xl mt-4 mb-4">
            Discover the wide variety of delicious Nigerian dishes we offer. From hearty main
            courses to delightful desserts, there's something for everyone. Download our full menu
            now and plan your next meal with us!
          </p>
          <Button
            label="View Menu"
            variant="primary"
            size="medium"
            icon={<FiArrowRight />}
            onClick={() => window.location.href("/")}
          />
        </motion.div>

        {/* Optional Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <img
            src="/assets/img/corp.jpg"
            alt="Delicious Nigerian Dishes"
            className="rounded-lg object-cover h-[500px] w-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
