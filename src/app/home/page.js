import React from "react";
import Navbar from "../components/Navbar";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: 'url("/bg.png")',
      }}
    >
      <div className="h-full bg-black bg-opacity-50 pt-12 pb-12">
        <Navbar />
        <div className="container mx-auto flex justify-between items-center">
            <div className="mt-[15%] px-4 sm:px-0 max-w-[700px]">
              <h1 className="text-white text-4xl sm:text-5xl max-w-full sm:max-w-[500px] leading-tight">
                Love in the Center of New Delhi, India
              </h1>
              <p className="text-white text-lg sm:text-xl pt-6 sm:pt-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </p>
              <p className=" flex text-white text-3xl sm:text-4xl pt-2">
              <GoArrowLeft className="w-[100px]" /><span>10/12</span> <GoArrowRight  className="w-[100px]"/>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
