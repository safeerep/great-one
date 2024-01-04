import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { USERS_SERVICE_BASE_URL } from "@/constants"
import { signInCredentials } from "@/types/admin"

export const login = createAsyncThunk('/admin/login',
    async ({ adminCredentials, router, setError }: { adminCredentials: signInCredentials, router: any, setError: React.Dispatch<React.SetStateAction<any>> }) => {
        try {
            const response: any = await axios.post(`${USERS_SERVICE_BASE_URL}/admin/signin`, { ...adminCredentials }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            if (response) {
                if (response.data.success) router.push('/admin')
                else setError(response?.data?.message)
            } else throw new Error(response?.data?.message)
        } catch (error: any) {
            // when response with status 401
            console.log(error.response.data);
            setError(error?.response?.data?.message)
            return error.response.data
        }
})

export const checkAuth = createAsyncThunk('/admin/check-auth', async (router: any) => {
    try {
        const response: any = await axios.get(`${USERS_SERVICE_BASE_URL}/admin/check-auth`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            console.log(response.data);
            
            if (response.data.success) router.push('/admin')
            return response.data;
        } else {
            console.log('in else');
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        console.log('something went wrong', error);
    }
})


export const authRequired = createAsyncThunk('/admin/auth-required', async (router: any) => {
    try {
        const response: any = await axios.get(`${USERS_SERVICE_BASE_URL}/admin/check-auth`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            console.log(response.data);
            if (!response.data.success) router.push('/admin/sign-in')

            return response.data;
        } else {
            console.log('in else');
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        console.log('something went wrong', error);
    }
})

export const logout = createAsyncThunk('/admin/logout', async (router: any) => {
    try {
        const response: any = await axios.get(`${USERS_SERVICE_BASE_URL}/admin/logout`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        if (response?.data) {
            if (response.data.success) router.push('/admin/sign-in')
            return response.data;
        } else {
            throw new Error(response?.data?.message)
        }
    } catch (error: any) {
        console.log('something went wrong', error);
    }
})