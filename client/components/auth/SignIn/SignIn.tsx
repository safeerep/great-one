"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Image from 'next/image'
import { signInValidationSchema } from '@/models/validationSchemas'


const SignIn = () => {

    const handleSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <>
            <div className="flex justify-around w-full min-h-screen items-center">
                <div className='w-[600] p-4 shadow'>
                    <header className='text-center font-bold'>Welcome back to EP LINK !!!</header>
                    <main className="flex  justify-center items-center full">
                        <div>
                            <Image src="/logo/HD-wallpaper-nike-logo-nike-wallpaped-nike-logo-nike-nike-logo-nike.jpg" alt='logo'
                                width={200} height={200}>
                            </Image>
                        </div>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={signInValidationSchema}
                            onSubmit={(values) => {
                                handleSubmit(values);
                            }} >
                            <Form className='flex flex-col items-center'>
                                <Field
                                    name="email"
                                    placeholder='enter your email here'
                                    type='email'
                                    className='border border-black p-3 m-1'
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs text-start" />
                                <Field
                                    name="password"
                                    placeholder='enter your password here'
                                    type="password"
                                    className='border border-black p-3 m-1'
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs text-start" />
                                <button type="submit" className='bg-gray-950 py-2 px-5 rounded-sm'>
                                    <span className='font-bold text-white'> SignIn </span>
                                </button>
                            </Form>
                        </Formik>
                    </main>
                </div>
            </div>
        </>
    )
}

export default SignIn