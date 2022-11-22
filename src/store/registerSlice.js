import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        newUser: null,
    },
    reducers: {
        resetRegister(state) {
            state.newUser = null;
        },
    },
});

export const { resetRegister } = registerSlice.actions;

export default registerSlice.reducer;