import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

export default function Course() {
  return (
    <div>
      <Navbar />

      <div className="hidden sm:flex flex-col items-center justify-evenly gap-5 h-full my-10">

        <div className="w-[130vh] h-[50vh] border rounded-2xl flex justify-center items-center">
          <Image src="/maths.jpg" width={800} height={300} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Start</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>

        <div className="w-[130vh] h-[50vh] border rounded-2xl flex justify-center items-center">
          <Image src="/maths.jpg" width={800} height={300} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Start</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>

        <div className="w-[130vh] h-[50vh] border rounded-2xl flex justify-center items-center">
          <Image src="/maths.jpg" width={800} height={300} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Start</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>

      </div>

      <div className="flex sm:hidden flex-col items-center mt-20 sm:mt-1 justify-center space-y-10 px-3 md:flex-row md:space-x-10 md:space-y-0 md:h-[80vh]">
        <div className="w-full md:w-[26rem] border-2 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-evenly">
          <Image src="/maths2.jpg" className="rounded-full" width={500} height={500} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Start</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>
        <div className="w-full md:w-[26rem] border-2 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-evenly">
          <Image src="/maths2.jpg" className="rounded-full" width={500} height={500} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Start</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>
        <div className="w-full md:w-[26rem] border-2 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-evenly">
          <Image src="/maths2.jpg" className="rounded-full" width={500} height={500} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Start</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}