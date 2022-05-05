import {IInitialAppState} from "../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialAppState: IInitialAppState = {
    currentPage: 1,
}

export const appSlice = createSlice({
    name: "app",
    initialState: initialAppState as IInitialAppState,
    reducers: {
        setCurrentPage(state: IInitialAppState, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },

    }
})

export const appReducer = appSlice.reducer
export const {setCurrentPage} = appSlice.actions
