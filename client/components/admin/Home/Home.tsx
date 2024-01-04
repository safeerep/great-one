"use client"
import AdminNavbar from '@/components/shared/adminSide/AdminNavbar'
import { authRequired } from '@/store/actions/adminActions/adminActions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch: any = useDispatch();
    const router = useRouter

    useEffect(() => {
        dispatch(authRequired(router))
    }, [])
    
  return (
    <>
    <AdminNavbar />
    </>
  )
}

export default Home