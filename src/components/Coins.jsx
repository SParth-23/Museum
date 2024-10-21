import React from "react";

const coins = [
  {
    id: 1,
    name: "Punched Mark Coins",
    description: "Coins that have been marked with a punch, widely used in ancient India.",
    image: "https://cdn-images.prepp.in/public/image/7ffef65e6445245820d2ecbc0aee0fff.jpeg?tr=w-512,h-232,c-force", 
  },
  {
    id: 2,
    name: "Indo-Scythian Coins",
    description: "Coins from the Indo-Scythian period, reflecting the culture and trade of the time.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSDcJ170TBWjC2FrgsCshDWW09A_086Dgrg&s", 
},
{
    id: 3,
    name: "Shunga Coins",
    description: "Coins from the Shunga dynasty, known for their unique iconography and artistry.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyou27rnvRFs2P9ua9u251-vU3Pj4z1gpjLQ&s", 
},
{
    id: 4,
    name: "Kushana Coins",
    description: "Coins issued by the Kushana Empire, often featuring deities and rulers.",
    image: "https://www.coinworld.com/images/default-source/news/cma_india_merged.jpg?sfvrsn=a0655457_0", 
},
{
    id: 5,
    name: "Panchala Coins",
    description: "Coins from the Panchala region, significant for trade in ancient times.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_9p6u2xrrbRGrSOmDRParQGdxGs0vxtWmA&s", 
},
{
    id: 6,
    name: "Satavahana Coins",
    description: "Coins from the Satavahana dynasty, showcasing rich cultural motifs.",
    image: "https://media.licdn.com/dms/image/C4D12AQFr9srwQKYKHQ/article-cover_image-shrink_600_2000/0/1636450506544?e=2147483647&v=beta&t=JjtBa0yq-Ina1_vb8oxSK5NQDtBYyzcqKn7eoEyq2DE", 
  },
//   {
//     id: 7,
//     name: "Western Kshatrap Coins",
//     description: "Coins minted by the Western Kshatrap rulers, featuring Greek influences.",
//     image: "https://example.com/western_kshatrap_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 8,
//     name: "Ikshvaku Dynasty Coins",
//     description: "Coins from the Ikshvaku dynasty, important for their historical context.",
//     image: "https://example.com/ikshvaku_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 9,
//     name: "Chola Dynasty Coins",
//     description: "Coins from the Chola dynasty, known for their detailed craftsmanship.",
//     image: "https://example.com/chola_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 10,
//     name: "Gurjar Pratihar Coins",
//     description: "Coins from the Gurjar Pratihar dynasty, reflecting the wealth and culture of the period.",
//     image: "https://example.com/gurjar_pratihar_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 11,
//     name: "Tomars of Delhi Coins",
//     description: "Coins minted by the Tomar dynasty in Delhi, significant for their design.",
//     image: "https://example.com/tomars_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 12,
//     name: "Yadava Dynasty Coins",
//     description: "Coins from the Yadava dynasty, highlighting the regional history.",
//     image: "https://example.com/yadava_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 13,
//     name: "Delhi Sultanate Coins",
//     description: "Coins issued during the Delhi Sultanate, marking a significant era in Indian history.",
//     image: "https://example.com/delhi_sultanate_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 14,
//     name: "Mughal Coins",
//     description: "Coins from the Mughal Empire, renowned for their artistic beauty and intricate designs.",
//     image: "https://example.com/mughal_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 15,
//     name: "Kota Kula Devi Coins",
//     description: "Coins related to the Kota Kula Devi, reflecting local traditions.",
//     image: "https://example.com/kota_kula_devi_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 16,
//     name: "Goddess Laxmi Coins",
//     description: "Coins featuring Goddess Laxmi, symbolizing wealth and prosperity.",
//     image: "https://example.com/goddess_laxmi_coins.jpg", // Replace with actual image URL
//   },
//   {
//     id: 17,
//     name: "Indo-Dutch Fanam",
//     description: "Coins used during the Indo-Dutch trade period, showcasing cultural exchange.",
//     image: "https://example.com/indo_dutch_fanam.jpg", // Replace with actual image URL
//   },
];

const Coins = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Coins of India</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <div key={coin.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <img src={coin.image} alt={coin.name} className="w-full h-24 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{coin.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{coin.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center items-center">
      <button className=" bg-blue-500 text-white py-2 px-4 rounded text-2xl font-semibold">View More...</button>
      </div>
    </div>
  );
};

export default Coins;
