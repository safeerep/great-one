import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signUpCredentialsWithOtp, signInCredentials } from "@/types/user";
import {USERS_SERVICE_BASE_URL} from '../../../constants/index'

export const register = createAsyncThunk('/user/register', async ( userCredentials: signUpCredentialsWithOtp) => {
    try {
        
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/signup`, { ...userCredentials }, {
            headers: {"Content-Type": "application/json" },
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


export const sendOtp = createAsyncThunk('/user/send-otp-for-signup', async ( {email, phone}: {email:string, phone: number}) => {
    try {
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/send-otp`, {email, phone}, {
            headers: {"Content-Type": "application/json" },
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


export const login = createAsyncThunk('/user/login', async ( userCredentials: signInCredentials) => {
    try {
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/signin`, { ...userCredentials }, {
            headers: {"Content-Type": "application/json" },
            withCredentials: true
        })
        if (response) {
            console.log('in response if');
            return response.data;
        } else {
            console.log('in else');
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        // when response with status 401
        return {
            message: 'entered credentials are invalid'
        }
    }
})
