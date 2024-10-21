import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col  items-center justify-center p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover the history, art, and culture at our museum.
        </p>
      </header>

      <section className="bg-white w-5/6 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl underline-offset-8 font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700">
          Welcome to the Museum of Department of History & Culture- “Sanskrit
          Dharohar evam Sanghralaya/ Cultural Heritage and Museum”, a vibrant
          celebration of the country’s rich cultural heritage and diverse
          history. Our mission is to preserve, display, and educate visitors
          about the myriad traditions, art forms, and historical narratives that
          define India.
        </p>
      </section>
      <section className="bg-white w-5/6 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl underline-offset-8 font-semibold text-gray-800 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700">
          We envision a space where history comes alive, fostering understanding
          and appreciation of India’s vast tapestry of cultures. Through our
          exhibitions, educational programs, and community outreach, we strive
          to create a dialogue that connects people to their roots and to one
          another.
        </p>
      </section>
      <section className="bg-white  w-5/6 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl underline-offset-8 font-semibold text-gray-800 mb-4">
          Our Collections
        </h2>
        <p className="text-gray-700">
          The Museum houses an extensive collection of artifacts, artworks, and
          historical documents, ranging from ancient relics to contemporary
          pieces. Each exhibit thoughtfully curated to highlight the regional
          diversity and the evolution of Indian society, displaying everything
          from traditional textiles and sculptures to modern art and multimedia
          installations. It also houses the dedicated space to display the
          History of Agra from Ancient times to the Present times along with the
          freedom fighter of Agra.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
