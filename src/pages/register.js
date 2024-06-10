"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("Student")
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !email || !password || !role){
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch('/api/register/route',{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name, 
          email, 
          password,
          role,
        }),
      });

      if(res.ok)
        {
          const form = e.target;
          form.reset();
        }else{
          console.log("User registration failed.");
        }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

 

  return (
    <div className="flex h-screen justify-center gap-16 items-center">

      <form onSubmit={handleSubmit} className="space-y-1 p-10 h-[37rem] w-[30rem] shadow-2xl border rounded-2xl">

        <span className="text-2xl font-semibold">Sign Up</span>

        <div className="pt-3">
          <label className="flex mb-3 text-md font-medium text-gray-900">Your Name</label>
          <input 
          onChange={(e) => setName(e.target.value)}
          type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="name" />
        </div>

        <div className="pt-3">
          <label className="flex mb-3 text-md font-medium text-gray-900">Your email</label>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="example@mail.com" />
        </div>

        <div className="pt-3">
          <label className="flex mb-3 text-md font-medium text-gray-900">Your password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          type="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="password" />
        </div>
        <div className="pt-3">
          <label className="flex mb-3 text-md font-medium text-gray-900">Role</label>
          <input 
          
          type="text" disabled value="Student" className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
        </div>

        <div className="pt-3">
          <button className="p-2.5 flex rounded-lg w-full justify-center text-white bg-blue-600 hover:bg-blue-700">Register</button>
        </div>

        { error && (
          <div className="flex justify-center font-sans text-sm text-red-600 ">
            {error}
          </div>)
        
        }

        <div className="">
          <Link href="/" className="text-sm text-blue-700">Already have an account? Log In.</Link>
        </div>

      </form>

      <div className="rounded-2xl h-[30rem] w-[30rem] hidden sm:block">
        <Image
          src="/vector.jpg"
          width={500}
          height={500}
        />
      </div>

    </div>
  );
}
