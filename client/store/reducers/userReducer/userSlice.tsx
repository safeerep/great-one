import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, login, register, authRequired, logout } from "@/store/actions/userActions/userActions";

interface UserState {
    loading: boolean;
    data: any | null;
    error: string | null | undefined;
}

const INITIAL_STATE: { user: UserState } = {
    user: {
        loading: false,
        data: null,
        error: null
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        // signup
        .addCase(register.pending, ( state) => {
            state.user.loading = true;
        })
        .addCase( register.fulfilled, (state: { user: UserState }, action: PayloadAction<string>) => {
            state.user.loading = false;
            state.user.data = action.payload;
            state.user.error = null;
        })
        .addCase( register.rejected, ( state: any, action) => {
            state.user.loading = false;
            state.user.data = null;
            state.user.error = action.error.message;
        })
        // login
        .addCase(login.pending, ( state) => {
            state.user.loading = true;
        })
        .addCase(login.fulfilled, (state: { user: UserState }, action: PayloadAction<string>) => {
            state.user.loading = false;
            state.user.data = action.payload;
            state.user.error = null;
        })
        .addCase( login.rejected, ( state: any, action) => {
            state.user.loading = false;
            state.user.data = null;
            state.user.error = action.error.message;
        })
        // auth checking
        .addCase( checkAuth.pending, ( state: any) => {
            state.user.pending = true;
        })
        .addCase( checkAuth.fulfilled, (state: { user: UserState }, action: PayloadAction<string>) => {
            state.user.loading = false;
            state.user.data = action.payload;
            state.user.error = null;
        })
        .addCase( checkAuth.rejected, ( state:any, action) => {
            state.user.loading = false;
            state.user.data = null;
            state.user.error = action.error.message;
        })
        // checking auth for where it is needed
        .addCase( authRequired.pending, ( state: any) => {
            state.user.pending = true;
        })
        .addCase( authRequired.fulfilled, (state: { user: UserState }, action: PayloadAction<string>) => {
            state.user.loading = false;
            state.user.data = action.payload;
            state.user.error = null;
        })
        .addCase( authRequired.rejected, ( state: { user: UserState }, action) => {
            state.user.loading = false;
            state.user.data = null;
            state.user.error = action.error.message;
        })
        // on user logout
        .addCase( logout.pending, ( state: any) => {
            state.user.loading = true;
        })
        .addCase( logout.fulfilled, (state: { user: UserState }, action: PayloadAction<string>) => {
            state.user.loading = false;
            state.user.data = null;
            state.user.error = null;
        })
        .addCase( logout.rejected, ( state: any, action) => {
            state.user.loading = false;
            state.user.data = action.payload;
            state.user.error = action.error.message;
        })
    }
})


export default userSlice.reducer;