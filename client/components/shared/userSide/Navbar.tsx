import React from 'react'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { BsChatDots } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'


const Navbar = () => {
  return (
    <div className='w-full h-16 shadow bg-slate-100 flex justify-between'>
      <div className='flex justify-center items-center'>
        <span className='text-black font-semibold ps-10'>EP LINK</span>
      </div>
      <div className='flex relative items-center'>
        <input
          placeholder='Search for products'
          className='text-black font-semibold p-2 pl-8 sm:w-32 md:w-32 lg:w-60 xl:w-80 border rounded-md'
        />
        <BsSearch className='absolute top-6 left-2' />
      </div>
      <div className='flex items-center pe-10'>
        <BsChatDots />
        <Link href='/sign-up' className='text-black font-semibold ps-10 pe-2'>LOGIN</Link>
        <FiUser />
      </div>
    </div>
  )
}

export default Navbar