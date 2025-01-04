"use client";
import Button from "../button/Button";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Default easing for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-16">
      {/* Intro Section */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between md:items-start">
            <div className="text-left md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-coolvetica text-charcoal mb-4">
                Our Catering Services
            </h1>
            <p className="text-gray-700 font-satoshi text-lg leading-relaxed mb-6">
                Our catering services are designed to make your events unforgettable. We provide custom-tailored menus with fresh, carefully sourced ingredients to ensure a remarkable dining experience.
            </p>
            </div>
            <div className="flex justify-center md:justify-start ml-[-100px] md:ml-8">
            <Button
                label="Book Our Service"
                variant="primary"
                size="medium"
                icon={<FiArrowRight />}
                onClick={() => console.log("Explore Services Clicked!")}
            />
            </div>
        </div>
        </div>


      {/* Cards Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service Card 1 - Weddings */}
        <div
          className="card-brutalism border-2 border-charcoal shadow-xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Weddings</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src="/assets/img/wed.jpg"
              alt="wedding service"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Celebrate your love with a wedding feast that&#39;s as special as your big day. From plated dinners to buffet options, we craft the perfect menu for your dream celebration.
            </p>
          </div>
        </div>

        {/* Service Card 2 - Birthdays */}
        <div
          className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Birthdays</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src="/assets/img/bday.jpg"
              alt="birthday service"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Make your birthday memorable with a custom menu designed to delight your guests. From cakes to hors d&#39;oeuvres, we bring fun and flavor to your celebration.
            </p>
          </div>
        </div>

        {/* Service Card 3 - Corporate Events */}
        <div
          className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Corporate Events</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src="/assets/img/office.jpg"
              alt="corporate meeting service"
                className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Impress your colleagues and clients with a catered spread that elevates your corporate events. We provide a variety of options, from formal dinners to casual break snacks.
            </p>
          </div>
        </div>

        {/* Service Card 4 - Picnics */}
        <div
          className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Picnics & Get-togethers</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src="/assets/img/picnicc.avif"
              alt="picnic service"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Experience the joy of outdoor dining with our picnic catering services. Perfect for family gatherings or corporate outings, we offer a gourmet approach to relaxed dining.
            </p>
          </div>
        </div>

        {/* Service Card 5 - Gala Dinners */}
        <div
          className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Gala Dinners & Buffets</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src="/assets/img/buffet.jpg"
              alt="gala dinner service"
            className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Make your gala a night to remember with a sophisticated dining experience. Our buffet and plated dinner options provide luxury and elegance for formal events and fundraisers.
            </p>
          </div>
        </div>

        {/* Service Card 6 - Special Orders / Deliveries */}
        <div
          className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Special Orders & Deliveries</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src="/assets/img/pack.png"
              alt="themed party service"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Let us handle your themed parties and special orders with personalized menus that bring your vision to life. We also offer convenient delivery services for any occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
