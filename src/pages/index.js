
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {

  const [error, setError] = useState("");

  return (
    <div className="flex h-screen justify-center gap-16 items-center">

      <form className="space-y-3 p-10 h-[37rem] w-[30rem] shadow-2xl border rounded-2xl">

        <span className="text-2xl font-semibold">Log In</span>

        <div className="pt-5">
          <label className="flex mb-5 text-md font-medium text-gray-900">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="example@mail.com" />
        </div>

        <div className="pt-5">
          <label className="flex mb-5 text-md font-medium text-gray-900">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="password" />
        </div>

        <div className="pt-3">
        <label className="flex mb-5 text-md font-medium text-gray-900">Role</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
            <option selected>Student</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="pt-5">
          <Link href="/dashboard">
            <button className="p-2.5 flex rounded-lg w-full justify-center text-white bg-blue-600 hover:bg-blue-700">Login</button>
          </Link>
        </div>

        { error &&
        (<div className="flex justify-center font-sans text-red-600 ">
          {error}
        </div>)
        }

        <div className="">
          <Link href="/register" className="text-sm text-blue-700">Don't have an account? Sign Up.</Link>
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
