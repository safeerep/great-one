// "use client"
import React from 'react';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/actions/userActions/userActions'

const ProfileSidebar = () => {
    const dispatch: any = useDispatch()
  const router = useRouter()
    const handleLogout = () => {
        dispatch(logout(router))
    }
    return (
        <div className="lg:w-1/5 flex flex-col justify-center border-0 border-e-2">
            <div className='w-full flex justify-center'>
                <img
                    src="/profile.jpg"
                    className="bg-slate-200 rounded-full"
                    alt="Profile Picture"
                    style={{ width: '150px', height: '150px' }}
                />
            </div>
            <button
                className={`border my-1 mx-2 p-2 rounded-md ${location.pathname === '/profile' ? 'bg-slate-300' : 'bg-slate-100'} whitespace-nowrap`}
            >My Profile</button>
            <button
                className={`border my-1 mx-2 p-2 rounded-md ${location.pathname === '/my-products' ? 'bg-slate-300' : 'bg-slate-100'} whitespace-nowrap`}
            >Add new product</button>
            <button
                className={`border my-1 mx-2 p-2 rounded-md ${location.pathname === '/my-favourites' ? 'bg-slate-300' : 'bg-slate-100'} whitespace-nowrap`}
            >My Favourites</button>
            <button
                onClick={handleLogout}
                className={`border my-1 mx-2 p-2 rounded-md ${location.pathname === '/signout' ? 'bg-slate-300' : 'bg-slate-100'} whitespace-nowrap`}
            >Sign out</button>
        </div>
    );
};

export default ProfileSidebar;
