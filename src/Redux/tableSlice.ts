import {api} from "../api/api";
import {RootState} from "./store";
import {IPost, ITableInitialState} from "../types/types";
import {searchFilter, sortedArrayByKeyName} from "../helpers/helpers";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialTableState: ITableInitialState = {
    id: ">",
    title: ">",
    body: ">",
    error: "",
    isLoading: false,
    searchString: "",
    totalPages: 1,
    filteredArray: [],
    postsArray: []
}

export const tableSlice = createSlice({
    name: "table",
    initialState: initialTableState as ITableInitialState,
    reducers: {
        changeTableSliceValue(state: ITableInitialState, action: PayloadAction<{ fieldName: string, value: string }>) {
            state[action.payload.fieldName] = action.payload.value
        },
        setFilteredArray(state: ITableInitialState, action: PayloadAction<string>) {
            const newArray = searchFilter<IPost>(state.postsArray, action.payload)
            state.filteredArray = newArray
        },
        setSortMode(state: ITableInitialState, action: PayloadAction<{ fieldName: string, value: string }>) {

            const newArray = sortedArrayByKeyName<IPost>(state.postsArray, action.payload.fieldName, action.payload.value)

            state.idSortMode = ">"
            state.titleSortMode = ">"
            state.descriptionSortMode = ">"
            state[action.payload.fieldName] = action.payload.value
            if (newArray) {
                state.filteredArray = newArray
            }
        }
    },
    extraReducers: (builder => {
        builder.addCase(getAllPostData.pending, (state: ITableInitialState) => {
            state.error = ""
            state.isLoading = true
        })
        builder.addCase(getAllPostData.fulfilled, (state: ITableInitialState, action: PayloadAction<any>) => {
            state.isLoading = false
            state.totalPages = action.payload
        })
        builder.addCase(getAllPostData.rejected, (state: ITableInitialState, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(getCurrentPageData.pending, (state: ITableInitialState) => {
            state.error = ""
            state.isLoading = true
        })
        builder.addCase(getCurrentPageData.fulfilled, (state: ITableInitialState, action: PayloadAction<any>) => {
            state.isLoading = false
            state.postsArray = action.payload
        })
        builder.addCase(getCurrentPageData.rejected, (state: ITableInitialState, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
    })
})

export const getAllPostData = createAsyncThunk<any, void, { state: RootState }>("table/getAllPostData", (_, {
    rejectWithValue
}) => {
    return api.getAllPosts()
        .then((response) => Math.ceil(response.data.length / 10))
        .catch((error) => rejectWithValue(error))
})

export const getCurrentPageData = createAsyncThunk<any, number, { state: RootState }>("table/getCurrentPageData", (currentPage, {
    rejectWithValue
}) => {
    return api.getCurrentPage(currentPage)
        .then((response) => response.data)
        .catch((error) => rejectWithValue(error))
})

export const tableReducer = tableSlice.reducer
export const {changeTableSliceValue, setFilteredArray, setSortMode} = tableSlice.actions
