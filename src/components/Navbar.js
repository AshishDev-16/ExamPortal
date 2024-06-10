import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='h-20 px-8 sm:px-24 py-5 w-full border-b-4 sticky top-0 bg-white flex justify-between items-center'>
        <div>
            <span className='font-semibold text-2xl text-blue-400'>Exam</span>
            <span className='font-semibold text-2xl'>Portal</span>
        </div>  
        <div className='space-x-8 hidden sm:block'>
            <Link href="#" className='text-lg font-semibold text-black hover:text-blue-400'>
                <span>Course</span>
            </Link>
            <Link href="#" className='text-lg font-semibold text-black hover:text-blue-400'>
                <span>Test</span>
            </Link>
            <Link href="#" className='text-lg font-semibold text-black hover:text-blue-400'>
                <span>Exam</span>
            </Link>
            <Link href="#" className='text-lg font-semibold text-black hover:text-blue-400'>
                <span>Profile</span>
            </Link>
        </div>
        <div>
            <Link href="/login" className='text-lg font-semibold text-red-400 hover:text-red-600'>
                <span>Logout</span>
            </Link>
        </div>
    </div>
  )
}
