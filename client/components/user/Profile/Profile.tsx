"use client"
import Navbar from '@/components/shared/userSide/Navbar'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authRequired } from '@/store/actions/userActions/userActions'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(authRequired(router))
  }, [])
  return (
    <>
    <Navbar />
    </>
  )
}

export default Profile