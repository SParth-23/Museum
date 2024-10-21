import React from "react";
import { FaAngleRight } from "react-icons/fa";


function Home() {
  return (
    <div className="flex w-screen h-screen relative">
      <video
        loop
        autoPlay
        muted
        className="object-cover w-screen h-screen"
        src="src/components/assets/home.mp4"
      />
      {/* WHITE BOX */}
      <div className="absolute flex">
        <div className="bg-white ml-20 mt-40 pt-7 px-3 w-80 h-72 text-center">
          <h1 className="text-2xl font-semibold text-center capitalize text-black">
            Welcome to the Cultural Heritage & Museum<br></br>
          </h1>
          <h3 className=" pt-3 text-lg font-normal text-center text-black">
            Department of History and Culture
          </h3>
          <h3 className=" pt-3 text-lg font-normal text-center text-black">
            Dr. BhimRao Ambedkar University, Agra.
          </h3>
          <div className="w-full h-12 mt-3 align-middle flex px-3 items-center text-white justify-between bg-black">
            <button className="text-white font-semibold text-lg">Plan your visit!</button>
            <FaAngleRight />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
