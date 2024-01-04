import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signUpCredentialsWithOtp, signInCredentials } from "@/types/user";
import { USERS_SERVICE_BASE_URL } from '../../../constants/index'


export const register = createAsyncThunk('/user/register', async (userCredentials: signUpCredentialsWithOtp) => {
    try {
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/signup`, { ...userCredentials }, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response) {
            return response.data;
        } else {
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        // when response with status 401
        return {
            message: 'otp is not matching'
        }
    }
})


export const sendOtp = createAsyncThunk('/user/send-otp-for-signup', async ({ email, phone }: { email: string, phone: number }) => {
    try {
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/send-otp-for-signup`, { email, phone }, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            console.log(response?.data);
            return response?.data;
        } else {
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
})


export const login = createAsyncThunk('/user/login',
    async ({ userCredentials, router, setError }: { userCredentials: signInCredentials, router: any, setError: React.Dispatch<React.SetStateAction<any>> }) => {
        try {
            const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/signin`, { ...userCredentials }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            if (response) {
                if (response.data.success) router.push('/')
            } else throw new Error(response?.data?.message)
        } catch (error: any) {
            // when response with status 401
            console.log(error.response.data);
            setError(error?.response?.data?.message)
            return error.response.data
        }
})

export const checkAuth = createAsyncThunk('/user/check-auth', async (router: any) => {
    try {
        const response: any = await axios.get(`${USERS_SERVICE_BASE_URL}/user/check-auth`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            console.log('check auth response');
            console.log(response.data.userData);
            console.log(response.data.success);
            if (response.data.success) router.push('/')
            return response.data;
        } else {
            console.log('in else');
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        console.log('something went wrong', error);
    }
})

export const authRequired = createAsyncThunk('/user/auth-required', async (router: any) => {
    try {
        const response: any = await axios.get(`${USERS_SERVICE_BASE_URL}/user/check-auth`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            if (!response.data.success) router.push('/sign-up')
            else return response.data;
        } else {
            console.log('in else');
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        console.log('something went wrong', error);
    }
})


export const logout = createAsyncThunk('/user/logout', async (router: any) => {
    try {
        const response: any = await axios.get(`${USERS_SERVICE_BASE_URL}/user/logout`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            if (response.data.success) router.push('/')
            return response.data;
        } else {
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        console.log('something went wrong', error);
    }
})

export const sendEmailToResetPassword = createAsyncThunk('/user/send-email',
    async ({ userEmail, setSuccess, setError }: { userEmail: any, setSuccess: any, setError: any }) => {
        try {
            const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/send-reset-password-email`,
                { ...userEmail }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            if (response?.data) {
                if (response?.data?.success) {
                    setError(null)
                    setSuccess(response?.data?.message)
                }
                else {
                    setSuccess(null)
                    setError(response?.data?.message)
                };
            }
            else throw new Error('something went wrong')
        } catch (error: any) {
            console.log('something went wrong', error);
        }
    })


export const RequestToResetPassword = createAsyncThunk('/user/reset-password',
    async ({ passwords, token, setSuccess, setError, router }: { passwords: any, token: string, setSuccess: any, setError: any, router: any }) => {
        try {
            const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/change-password`,
                { ...passwords, token }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            if (response?.data) {
                if (response?.data?.success) {
                    setError(null)
                    setSuccess(response?.data?.message)
                    router.push('/')
                    return response?.data;
                }
                else {
                    setSuccess(null)
                    setError(response?.data?.message)
                };
            }
            else throw new Error('something went wrong')
        } catch (error: any) {
            console.log('something went wrong', error);
        }
    }
)
