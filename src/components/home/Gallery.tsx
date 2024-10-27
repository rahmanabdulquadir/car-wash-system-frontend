import React, { useState } from "react";

// Define the type for each gallery item
interface GalleryItem {
  before: string; // URL for the 'before' image
  after: string; // URL for the 'after' image
  description: string;
}

const Gallery: React.FC = () => {
  // Sample gallery data
  const galleryItems: GalleryItem[] = [
    {
      before:
        "https://media.istockphoto.com/id/157398466/photo/dirty-car.jpg?s=2048x2048&w=is&k=20&c=KnOtexS8IZdkU2qli01x6K5GyrKb08234sVcO9VI2iA=",
      after:
        "https://images.unsplash.com/photo-1523676060187-f55189a71f5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ0fHxjYXIlMjBqdXN0JTIwY2xlYW5lZHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Car wash transformation - Exterior cleaning",
    },
    {
      before:
        "https://media.istockphoto.com/id/592366026/photo/dirty-wheel-of-red-car.jpg?s=2048x2048&w=is&k=20&c=jzj1yy_mtLOlY2itsvdy6CuHalPgEMoBsG5Ih0orVYg=",
      after:
        "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwanVzdCUyMGNsZWFuZWR8ZW58MHx8MHx8fDA%3D",
      description: "Tire shine and detailing",
    },
    {
      before:
        "https://media.istockphoto.com/id/979059274/photo/dirty-car-windscreen-due-to-yellow-sticky-coating-from-being-parked-under-a-linden-tree-caused.jpg?s=2048x2048&w=is&k=20&c=0aNpHj29EU5ABKoB4UA8j3yqOlOl-bnMO6NXgFQVkiU=",
      after:
        "https://images.unsplash.com/photo-1490274494753-fd4f84681e7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxjYXIlMjBqdXN0JTIwY2xlYW5lZHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Interior vacuuming and window cleaning",
    },
    // Add more items as needed
  ];

  // State to manage modal visibility and selected images
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Open modal and set selected item
  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-10">Before & After Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group cursor-pointer" onClick={() => openModal(item)}>
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="flex">
                  <img src={item.before} alt="Before" className="w-1/2 object-cover h-40 transition-transform duration-300 transform group-hover:scale-110" />
                  <img src={item.after} alt="After" className="w-1/2 object-cover h-40 transition-transform duration-300 transform group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white font-semibold text-lg">
                  View Transformation
                </div>
              </div>
              <p className="text-center text-gray-600 mt-3">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Modal for larger view */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
              <button className="absolute top-2 right-2 text-gray-700 text-2xl" onClick={closeModal}>&times;</button>
              <h3 className="text-xl font-semibold text-center mb-4">{selectedItem.description}</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex-1 flex flex-col items-center">
                  <p className="text-center text-gray-500 mb-2">Before</p>
                  <img src={selectedItem.before} alt="Before" className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md" />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="text-center text-gray-500 mb-2">After</p>
                  <img src={selectedItem.after} alt="After" className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
