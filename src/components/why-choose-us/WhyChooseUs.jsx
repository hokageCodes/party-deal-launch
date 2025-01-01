import { FaUtensils, FaConciergeBell, FaListAlt, FaTags } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-charcoal mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#f9f9f9] text-charcoal p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaUtensils className="text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 font-coolvetica tracking-wide">Exceptional Quality & Freshness</h3>
            <p className='font-satoshi'>We ensure that every dish is made from the finest ingredients, delivering the freshest and most delicious experience for your guests.</p>
          </div>
          <div className="bg-[#f9f9f9] text-charcoal p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaListAlt className="text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 font-coolvetica tracking-wide">Tailored Menus for Every Event</h3>
            <p className='font-satoshi'>Our team will work with you to customize a menu that suits the theme and taste preferences of your event, making it truly special.</p>
          </div>
          <div className="bg-[#f9f9f9] text-charcoal p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaConciergeBell className="text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 font-coolvetica tracking-wide">Professional Service</h3>
            <p className='font-satoshi'>Our staff are trained professionals who are committed to providing excellent service, ensuring everything runs smoothly during your event.</p>
          </div>
          <div className="bg-[#f9f9f9] text-charcoal p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaTags className="text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 font-coolvetica tracking-wide">Affordable & Transparent Pricing</h3>
            <p className='font-satoshi'>We believe in providing high-quality catering at fair prices, with clear, upfront pricing with no hidden costs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
