import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: 'url("/bg.png")', backgroundPosition: 'cover', backgroundRepeat: 'no-repeat'}}
    >
      <div className=" h-full bg-black bg-opacity-50 pt-12">
        <Navbar />
        <div className="mt-[15%] pl-[6%] max-w-[700px]">
          <h1 className="text-white text-5xl max-w-[500px] ">
            Love in the Center of New Delhi, India
          </h1>
          <p className="text-white text-xl pt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <p className="text-white text-4xl pt-2"> ------<span>10/12</span>--------</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
