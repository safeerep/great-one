"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkAuth } from '@/store/actions/userActions/userActions'
import { useRouter } from 'next/navigation'
import Navbar from '../../shared/userSide/Navbar'
import Banner from '../Banner'

const Home = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(checkAuth(router))
  }, [])
  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  )
}

export default Home