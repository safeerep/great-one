import { createSlice } from "@reduxjs/toolkit";
import { register } from "@/store/actions/userActions/userActions";

const INITIAL_STATE = {
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
        builder.addCase(register.pending, ( state, action) => {
            state.user.loading = true;
        })
        .addCase( register.fulfilled, ( state, action) => {
            state.user.loading = false;
            state.user.data = action.payload;
            state.user.error = null;
        })
        .addCase( register.rejected, ( state: any, action) => {
            state.user.loading = false;
            state.user.data = null;
            state.user.error = action.error.message;
        })
    }
})


export default userSlice.reducer;