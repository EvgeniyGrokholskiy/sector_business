import {appReducer} from "./appSlice";
import {tableReducer} from "./tableSlice";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        app: appReducer,
        table: tableReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;