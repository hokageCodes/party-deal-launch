/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="not-found flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-white to-yellow-100 text-gray-800">
      <img
        src="/assets/img/404.png"
        alt="Empty Plate"
        className="w-64 mb-8 mt-16"
      />
      <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-500 mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        Oops! The page you're looking for isn't on the menu.
      </h2>
      <p className="text-lg md:text-xl text-center mb-8 max-w-md">
        It seems we’ve run out of this dish! Let’s get you back to something
        tasty.
      </p>
      <Link
        to="/"
        className="px-6 py-4 bg-charcoal hover:bg-yellow-400 text-white rounded-lg text-lg font-medium shadow-md transition duration-300 ease-in-out"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
