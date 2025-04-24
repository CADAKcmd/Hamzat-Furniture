import React, { useEffect, useState } from "react";
import { GalleryImages } from "../Data/GalleryImage";

export default function FurnitureGallery() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300); // Delay animation for smooth effect
  }, []);

  return (
    <div className="p-6 bg-black min-h-screen w-full md:mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Furniture Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {GalleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-md transform transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }} // Staggered effect
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
              <span className="text-white text-lg font-semibold">{image.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
