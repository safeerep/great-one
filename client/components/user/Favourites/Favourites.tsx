"use client"
import Navbar from '@/components/shared/userSide/Navbar'
import Posts from '../Posts'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authRequired } from '@/store/actions/userActions/userActions'
import { useRouter } from 'next/navigation'

const Favourites = () => {
    const dispatch: any = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(authRequired(router))
    }, [])
    return (
        <>
            <Navbar />
            <h1 className='p-6 text-xl'>Your Favourites</h1>
            <Posts />
        </>
    )
}

export default Favourites