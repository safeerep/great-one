"use client"
import Navbar from '@/components/shared/userSide/Navbar'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authRequired } from '@/store/actions/userActions/userActions'
import { useRouter } from 'next/navigation'
import ProfileSidebar from '../ProfileSidebar'
import Posts from '../Posts'

const Profile = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(authRequired(router))
  }, [])
  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row md:flex-col sm:flex-col w-full px-8 p-2">
        <ProfileSidebar />
        <div className="flex-grow bg-gray-50">
          <h1 className='text-xl p-3'> Your Products </h1>
          <Posts />
        </div>
      </div>
    </>
  )
}

export default Profile;