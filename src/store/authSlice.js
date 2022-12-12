import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isLogged: false,
    },
    reducers: {
        setIsLogged(state, action) {
            state.isLogged = action.payload.isLogged;
        }
    },
});

export const { setIsLogged } = authSlice.actions;

export default authSlice.reducer;