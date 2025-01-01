/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom if needed

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white p-8 rounded-lg max-w-lg w-full tracking-wider">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Developer is busy fighting bugs and code principalities...
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Hang tight. Send funds while you're hanging abeg!
        </p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-xl hover:bg-blue-600 transition duration-300"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
