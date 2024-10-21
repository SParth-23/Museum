import React from "react";
import galleryImg1 from "../components/assets/galleryImg1.jpg";
import galleryImg2 from "../components/assets/galleryImg2.jpg";
import galleryImg3 from "../components/assets/galleryImg3.jpg";
import galleryImg4 from "../components/assets/galleryImg4.jpg";
import galleryImg5 from "../components/assets/galleryImg5.jpg";
import galleryImg6 from "../components/assets/galleryImg6.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Ancient Pottery",
    image: galleryImg1,
  },
  {
    id: 2,
    title: "Historic Coins",
    image: galleryImg2,
  },
  {
    id: 3,
    title: "Statues and Sculptures",
    image: galleryImg3,
  },
  {
    id: 4,
    title: "Traditional Textiles",
    image: galleryImg4,
  },
  {
    id: 5,
    title: "Fossils",
    image: galleryImg5,
  },
  {
    id: 6,
    title: "Ancient Manuscripts",
    image: galleryImg6,
  },
];

function Gallery() {
  return (
    <div className="mx-10 md:mx-20 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden border-2 border-gray-300 shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover transition-opacity duration-300 hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h2 className="text-white text-lg font-semibold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
