import React from "react";

const antiquities = [
  {
    id: 1,
    title: "OCP Pottery",
    antiquity: "Antiquity: OCP Pottery",
    site: "Site: Krithua",
    district: "District: Mainpuri",
    date: "Approx. 2000 BCE",
    image: "https://cdn-images.prepp.in/public/image/ccad0ea255b1155af4d579c1d931c106.png?tr=w-350,h-235,c-force",
  },
  {
    id: 2,
    title: "Brick",
    antiquity: "Antiquity: Brick",
    site: "Site: Krithua",
    district: "District: Mainpuri",
    date: "Size: 14\"x9\"x3\" cm",
    period: "Kushana and Shunga Period",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaOzW41I7bf8tke6YY11IwVeOdlQKs8MWCg&",
  },
  {
    id: 3,
    title: "Black Ware Pottery",
    antiquity: "Antiquity: Black Ware Pottery",
    site: "Site: Krithua",
    district: "District: Mainpuri",
    date: "Approx. 800 BCE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIdtncXEj7lFuEsd7Rko_iP_qPx0xImru_w&s",
  },
  {
    id: 4,
    title: "Red Ware Pottery (Krithua)",
    antiquity: "Antiquity: Red Ware Pottery",
    site: "Site: Krithua",
    district: "District: Mainpuri",
    date: "Approx. 800 BCE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReslsBeginMWWrfyRMK52Gri9ZAU4B6kZ2eg&s",
  },
  {
    id: 5,
    title: "Red Ware Pottery (Ujhiyani)",
    antiquity: "Antiquity: Red Ware Pottery",
    site: "Site: Ujhiyani, Saifai",
    district: "District: Mainpuri",
    date: "Approx. 800 BCE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRgFKUQRXstEUt9bKXGVaTJU93LmMT0ceRaFcZEgf_xnJMcS08MAR4j6W4rKqVF-0Nac&usqp=CAU",
  },
  {
    id: 6,
    title: "Northern Black Polished Ware Pottery",
    antiquity: "Antiquity: Northern Black Polished Ware Pottery",
    site: "Site: Krithua",
    district: "District: Mainpuri",
    date: "Approx. 600 BCE",
    image: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-51726-1_3555-1/MediaObjects/184254_0_En_3555-1_Fig1_HTML.jpg",
  },
];

const Pottery = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Pottery Cultures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {antiquities.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "fallback-image-url.png"; // Add a fallback image URL
              }}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-1">{item.antiquity}</p>
              <p className="text-gray-600">{item.site}</p>
              <p className="text-gray-600">{item.district}</p>
              <p className="text-gray-600">{item.date}</p>
              {item.period && <p className="text-gray-600">{item.period}</p>}
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg transition duration-300 hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pottery;
