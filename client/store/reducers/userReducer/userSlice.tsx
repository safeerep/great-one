import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, login, register, authRequired, logout, RequestToResetPassword } from "@/store/actions/userActions/userActions";
import { UserState } from "@/types/user";


const INITIAL_STATE: UserState = {
        loading: false,
        data: null,
        error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        // signup
        .addCase(register.pending, (state: UserState ) => {
            state.loading = true;
        })
        .addCase( register.fulfilled, (state: UserState , action: PayloadAction<string>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase( register.rejected, (state: UserState , action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
        // login
        .addCase(login.pending, ( state: UserState ) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state: UserState , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase( login.rejected, ( state: UserState, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
        // auth checking
        .addCase( checkAuth.pending, (state: UserState) => {
            state.loading = true;
        })
        .addCase( checkAuth.fulfilled, (state: UserState, action: PayloadAction<string>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase( checkAuth.rejected, (state: UserState, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
        // checking auth for where it is needed
        .addCase( authRequired.pending, (state: UserState ) => {
            state.loading = true;
        })
        .addCase( authRequired.fulfilled, (state: UserState, action: PayloadAction<string>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase( authRequired.rejected, ( state: UserState , action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
        // on user logout
        .addCase( logout.pending, (state: UserState ) => {
            state.loading = true;
        })
        .addCase( logout.fulfilled, (state: UserState , action: PayloadAction<string>) => {
            state.loading = false;
            state.data = null;
            state.error = null;
        })
        .addCase( logout.rejected, (state: UserState, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        // on change-password
        .addCase( RequestToResetPassword.pending, (state: UserState ) => {
            state.loading = true;
        })
        .addCase( RequestToResetPassword.fulfilled, (state: UserState, action: PayloadAction<string>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase( RequestToResetPassword.rejected, ( state: UserState, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})


export default userSlice.reducer;