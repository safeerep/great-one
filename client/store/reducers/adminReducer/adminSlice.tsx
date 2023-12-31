import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminState } from "@/types/admin";
import { login, checkAuth, authRequired, logout, getAllUsers, banAUser } from "@/store/actions/adminActions/adminActions";


const INITIAL_STATE: AdminState = {
    loading: false,
    data: null,
    error: null
}

const adminSlice = createSlice({
    name: 'admin',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // admin login
            .addCase(login.pending, (state: AdminState) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state: AdminState, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state: AdminState, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // auth-check
            .addCase(checkAuth.pending, (state: AdminState) => {
                state.loading = true;
            })
            .addCase(checkAuth.fulfilled, (state: AdminState, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(checkAuth.rejected, (state: AdminState, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // auth-check on required pages
            .addCase(authRequired.pending, (state: AdminState) => {
                state.loading = true;
            })
            .addCase(authRequired.fulfilled, (state: AdminState, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(authRequired.rejected, (state: AdminState, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // users-fetching
            .addCase( getAllUsers.pending, (state: AdminState) => {
                state.loading = true;
            })
            .addCase ( getAllUsers.fulfilled, (state: AdminState, action) => {
                state.loading = false;
                state.data = {...state.data, ...action.payload};
                state.error = null;
            })
            .addCase ( getAllUsers.rejected, (state: AdminState, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // on ban of a user
            .addCase( banAUser.pending, (state: AdminState) => {
                state.loading = true;
            })
            .addCase ( banAUser.fulfilled, (state: AdminState, action) => {
                state.loading = false;
                state.data = {...state.data, ...action.payload};
                state.error = null;
            })
            .addCase ( banAUser.rejected, (state: AdminState, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default adminSlice.reducer;