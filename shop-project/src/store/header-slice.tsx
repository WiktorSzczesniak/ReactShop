import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice ({
    name: "header",
    initialState: {detailsbottomIsShown: false},
    reducers: {
        visible(state) {
            state.detailsbottomIsShown = true;
        },
        hide(state) {
            state.detailsbottomIsShown = false;
        }
    }
});

export const headerActions = headerSlice.actions


export default headerSlice