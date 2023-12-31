import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signUpCredentials } from "@/types/user";
import {USERS_SERVICE_BASE_URL} from '../../../constants/index'

export const register = createAsyncThunk('/register', async ( userCredentials: signUpCredentials) => {
    try {
        console.log(userCredentials);
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/signup`, userCredentials, {
            headers: {"Content-Type": "application/json" },
            withCredentials: true
        })
        if (response) {
            console.log(response);
            return response.data;
        } else {
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
})


export const sendOtp = createAsyncThunk('/send-otp', async ( userEmail: string) => {
    try {
        console.log(userEmail);
        const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/user/send-otp`, userEmail, {
            headers: {"Content-Type": "application/json" },
            withCredentials: true
        })
        if (response) {
            console.log(response);
            return response.data;
        } else {
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
})


