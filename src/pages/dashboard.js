import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-20 sm:mt-1 justify-center space-y-10 px-3 md:flex-row md:space-x-10 md:space-y-0 md:h-[80vh]">
        <div className="w-full md:w-[26rem] border-2 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-evenly">
          <Image src="/course.jpg" className="rounded-full" width={500} height={500} />
         <Link href="/course"><div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Course</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
          </Link>
        </div>
        <div className="w-full md:w-[26rem] border-2 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-evenly">
          <Image src="/exam.jpg" className="rounded-full" width={500} height={500} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Exam</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>
        <div className="w-full md:w-[26rem] border-2 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col justify-evenly">
          <Image src="/test.jpg" className="rounded-full" width={500} height={500} />
          <div className="m-5 p-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full flex flex-row justify-center space-x-2">
            <button className="text-md font-semibold">Test</button>
            <FaArrowRight size={16} className="mt-1" />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20 sm:mt-1 justify-center items-center space-y-5 mb-20">
        <span className="text-2xl font-bold">About Us</span>
        <span className="text-lg text-justify py-5 px-8 md:px-24">
          The Scholarship Portal features an intuitive interface that allows
          students to easily search and filter through thousands of scholarship
          opportunities based on criteria such as academic field, location, and
          eligibility requirements. With our user-friendly application system,
          students can efficiently apply for multiple scholarships with just a
          few clicks, saving time and effort in the process. For scholarship
          providers, our platform offers robust tools for managing applications,
          reviewing candidates, and awarding scholarships. From creating custom
          application forms to tracking applicant data and communicating with
          recipients, our portal simplifies the administrative tasks associated
          with scholarship management, allowing organizations to focus on
          supporting students and furthering educational opportunities. Whether
          you're a student looking for financial assistance to pursue your
          educational goals or a scholarship provider seeking to connect with
          qualified applicants, The Scholarship Portal is your one-stop solution
          for all your scholarship needs. Join our community today and take the
          first step towards a brighter future through education.
        </span>
      </div>

      <Footer />
    </div>
  );
}
