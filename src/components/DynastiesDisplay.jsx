import React from "react";

const dynasties = [
  {
    id: 1,
    name: "Maurya Dynasty",
    description: "The Maurya Dynasty (c. 322–185 BCE) was the first large empire in India, founded by Chandragupta Maurya. It reached its peak under Ashoka the Great.",
    image: "https://edurev.gumlet.io/ApplicationImages/Temp/20279018_829f4d73-7987-41ba-8e75-27ca258556d3_lg.png?w=300&dpr=2.6",  },
  {
    id: 2,
    name: "Gupta Dynasty",
    description: "The Gupta Dynasty (c. 240–550 CE) is known as the Golden Age of India due to significant achievements in art, science, and literature.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvBo3A9iNGhR72cE0eGhIZGpOMVb3a-Gco3XCkGJ7tRCnwmGP3G0s6IhJnXDuKTlmoPY&usqp=CAU",
  },
  {
    id: 3,
    name: "Chola Dynasty",
    description: "The Chola Dynasty (c. 300 BCE–1279 CE) was one of the longest-ruling dynasties in southern India, renowned for its architecture and naval power.",
    image: "https://theantiquestory.com/cdn/shop/articles/Antiquestory.com_antiques_indian_antiques_antique_shop_collectibles_curio_shop_antique_store_vintage_store_antic_antiq_1200x1200.jpg?v=1580975560",  },
  {
    id: 4,
    name: "Mughal Dynasty",
    description: "The Mughal Dynasty (c. 1526–1857) is known for its cultural and architectural achievements, including the Taj Mahal, built by Shah Jahan.",
    image: "https://cdn.britannica.com/44/215044-050-7DD6EF9F/emperors-Akbar-Jahangir-Shah-Jahan-Prince-Dara-Shikoh.jpg?w=740&h=416&c=crop",
  },
  {
    id: 5,
    name: "Maratha Empire",
    description: "The Maratha Empire (c. 1674–1818) played a significant role in Indian history, known for its military prowess and administration under Shivaji Maharaj.",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*bPsUXDE20Wb4aqDT",
  },
];

const DynastiesDisplay = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Indian Dynasties</h1>
      <div className="relative">
        <div className="absolute left-1/2 h-full border-l-4 border-blue-500"></div>
        <div className="flex flex-col space-y-12">
          {dynasties.map((dynasty, index) => (
            <div key={dynasty.id} className="flex items-start space-x-4 relative">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src={dynasty.image} alt={dynasty.name} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 flex-1">
                <h2 className="text-xl font-semibold">{dynasty.name}</h2>
                <p className="text-gray-600">{dynasty.description}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynastiesDisplay;
