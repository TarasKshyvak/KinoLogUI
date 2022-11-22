import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./registerSlice";

export default configureStore({
    reducer: {
        register: registerSlice,
    }
});