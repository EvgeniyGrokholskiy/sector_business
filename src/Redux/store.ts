import thunk from "redux-thunk";
import {appReducer} from "./appSlice";
import {tableReducer} from "./tableSlice";
import {applyMiddleware, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";

/*const rootReducer = combineReducers({
    app: appReducer,
    table: tableReducer
})*/


export const store = configureStore({
    reducer: {
        app: appReducer,
        table: tableReducer
    },
});

//export const store = createStore(rootReducer, applyMiddleware(thunk)) //Deprecated symbol used, consult docs for better alternative
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
// For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;