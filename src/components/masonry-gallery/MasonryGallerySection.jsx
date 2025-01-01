import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FaBirthdayCake, FaUsers, FaAllergies } from 'react-icons/fa';

// Dummy data for the gallery images, each with a category
const images = [
  { id: 1, src: '/assets/img/party4.jpg', category: 'wedding' },
  { id: 2, src: '/assets/img/party1.jpg', category: 'birthday' },
  { id: 3, src: '/assets/img/party2.jpg', category: 'get-together' },
  { id: 4, src: '/assets/img/party3.jpg', category: 'wedding' },
  { id: 5, src: '/assets/img/party4.jpg', category: 'birthday' },
  { id: 6, src: '/assets/img/party1.jpg', category: 'get-together' },
  { id: 7, src: '/assets/img/party2.jpg', category: 'birthday' },
  { id: 8, src: '/assets/img/party3.jpg', category: 'wedding' },
  { id: 9, src: '/assets/img/party4.jpg', category: 'get-together' },
];

const Gallery = () => {
  // State to manage the active filter tab
  const [activeTab, setActiveTab] = useState('all');

  // Filter images based on the active tab
  const filteredImages =
    activeTab === 'all' ? images : images.filter((img) => img.category === activeTab);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-charcoal mb-8">Event Gallery</h2>
        
        {/* Tabs for filtering */}
        <div className="mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 mx-2 text-lg font-semibold ${activeTab === 'all' ? 'bg-yellow text-white' : 'bg-gray-200 text-charcoal'} rounded-lg`}
          >
            <FaAllergies className="inline-block mr-2" />
            All
          </button>
          <button
            onClick={() => setActiveTab('wedding')}
            className={`px-6 py-2 mx-2 text-lg font-semibold ${activeTab === 'wedding' ? 'bg-yellow text-white' : 'bg-gray-200 text-charcoal'} rounded-lg`}
          >
            {/* <FaWeddingRing className="inline-block mr-2" /> */}
            Wedding
          </button>
          <button
            onClick={() => setActiveTab('birthday')}
            className={`px-6 py-2 mx-2 text-lg font-semibold ${activeTab === 'birthday' ? 'bg-yellow text-white' : 'bg-gray-200 text-charcoal'} rounded-lg`}
          >
            <FaBirthdayCake className="inline-block mr-2" />
            Birthday
          </button>
          <button
            onClick={() => setActiveTab('get-together')}
            className={`px-6 py-2 mx-2 text-lg font-semibold ${activeTab === 'get-together' ? 'bg-yellow text-white' : 'bg-gray-200 text-charcoal'} rounded-lg`}
          >
            <FaUsers className="inline-block mr-2" />
            Get Together
          </button>
        </div>

        {/* Masonry Grid with Responsive Columns */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {filteredImages.map((image) => (
              <div key={image.id} className="mb-4">
                <img
                  src={image.src}
                  alt={`Gallery item ${image.id}`}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Gallery;
