import { createSlice } from "@reduxjs/toolkit";
import { useIsAuth } from "../hooks/useIsAuth";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isLogged: useIsAuth,
    },
    reducers: {
        setIsLogged(state, action) {
            state.isLogged = action.payload.isLogged;
        }
    },
});

export const { setIsLogged } = authSlice.actions;

export default authSlice.reducer;