"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { signupValidationSchema } from '@/models/validationSchemas'
import { signUpCredentials, signUpCredentialsWithOtp } from '@/types/user'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { register, sendOtp } from '@/store/actions/userActions/userActions'
import Modal from '../OtpModal/OtpModal'

const Signup = () => {
    const dispatch:any = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [credentials, setCredentials] = useState<signUpCredentials | null>(null)
    
    const handleSubmit = (userCredentials: signUpCredentials) => {
        dispatch(sendOtp(userCredentials.email))
        .then((data: any) => {
            console.log(`from send otp called`);
            console.log(data.payload);
            setCredentials(userCredentials)
            setIsModalOpen(true);
        }).catch(( err: any) => {
            console.log(`an error occured ${err}`);
        })
    }

    const handleOtpModalSubmit = ( userData: signUpCredentials | null, otp: number) => {
        console.log('OTP submitted:', otp);
        console.log('OTP submitted user', userData);
        const userDataWithOtp: any = { ...userData, otp};
        dispatch(register(userDataWithOtp))
        // Close the modal
        // setIsModalOpen(false);

    };
    return (
        <>
            <div className="flex justify-around w-full min-h-screen items-center">
                <div className='p-4 shadow w-2/4'>
                    <header className='text-center font-bold'>Welcome to EP LINK !!!</header>
                    <main className="flex justify-between items-center">
                        <div className='flex justify-center items-center'>
                            <Image src="/logo/HD-wallpaper-nike-logo-nike-wallpaped-nike-logo-nike-nike-logo-nike.jpg" alt='logo'
                                width={200} height={200}>
                            </Image>
                        </div>
                        <Formik
                            initialValues={{ userName: "", email: "", phone: "", password: "" }}
                            validationSchema={signupValidationSchema}
                            onSubmit={(userCredentials) => {
                                handleSubmit(userCredentials);
                            }} >
                            <Form className='sm:w-full md:w-full lg:w-1/2 flex flex-col items-center px-2'>
                                <Field
                                    name="userName"
                                    placeholder='enter your user name'
                                    type='text'
                                    className='w-full border border-black p-3 m-1'
                                />
                                <ErrorMessage name="userName" component="div" className="text-red-500 text-xs text-start" />
                                <Field
                                    name="email"
                                    placeholder='enter your email here'
                                    type='email'
                                    className='w-full border border-black p-3 m-1'
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs text-start" />
                                <Field
                                    name="phone"
                                    placeholder='enter your phone number'
                                    type='number'
                                    id="phone"
                                    className='w-full border border-black p-3 m-1'
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs text-start" />
                                <Field
                                    name="password"
                                    placeholder='enter your password here'
                                    type="password"
                                    className='w-full border border-black p-3 m-1'
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs text-start" />
                                <p>already have an account?
                                    <Link className='text-blue-600' href='/sign-in'>Login</Link>
                                </p>
                                <button type="submit" className='bg-gray-950 m-5 rounded-md w-full py-2'>
                                    <span className='font-bold text-white'> Sign up </span>
                                </button>
                                <div className='w-full m-5 flex items-center relative'>
                                    <hr className='flex w-full border border-black' />
                                    <div className='font-bold absolute w-full flex justify-center'>
                                        <span className='bg-white px-2'>OR</span>
                                    </div>
                                </div>
                                <Link className='w-full border border-black p-3 m-1 flex justify-center items-center rounded-md' href='/sign-up-with-google'>
                                    <Image src='/google-icon.png' width={20} height={20} alt='google icon' />
                                    <span className='font-semibold ps-2'>Sign up with Google</span>
                                </Link>
                            </Form>
                        </Formik>
                    </main>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onModalSubmit={handleOtpModalSubmit} 
                userData = {credentials}
            />
        </>
    )
}

export default Signup