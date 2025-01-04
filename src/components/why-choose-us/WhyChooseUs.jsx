import { FaUtensils, FaConciergeBell, FaListAlt, FaTags } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-charcoal py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow mb-4 font-coolvetica tracking-wide">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300 font-satoshi max-w-3xl mx-auto">
            Elevate your dining experience with our unparalleled quality, professional service, and customized solutions for every occasion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              icon: <FaUtensils className="text-yellow text-5xl" />,
              title: "Exceptional Quality & Freshness",
              description:
                "We ensure that every dish is made from the finest ingredients, delivering the freshest and most delicious experience for your guests.",
            },
            {
              icon: <FaListAlt className="text-yellow text-5xl" />,
              title: "Tailored Menus for Every Event",
              description:
                "Our team will work with you to customize a menu that suits the theme and taste preferences of your event, making it truly special.",
            },
            {
              icon: <FaConciergeBell className="text-yellow text-5xl" />,
              title: "Professional Service",
              description:
                "Our staff are trained professionals who are committed to providing excellent service, ensuring everything runs smoothly during your event.",
            },
            {
              icon: <FaTags className="text-yellow text-5xl" />,
              title: "Affordable & Transparent Pricing",
              description:
                "We believe in providing high-quality catering at fair prices, with clear, upfront pricing with no hidden costs.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="border bg-charcoal rounded-lg p-8 transform transition duration-300 hover:scale-105 hover:bg-[#f9f9f9] hover:text-charcoal"
            >
              <div className="flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl tracking-wide text-yellow mb-4 text-center font-coolvetica hover:text-charcoal">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-satoshi text-center hover:text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
