import {Dispatch} from "@reduxjs/toolkit";
import {setSortMode} from "../Redux/tableSlice";

export const getSortMode = (sortMode: string) => {
    let value: string
    if (sortMode === ">") {
        value = "<"
    } else {
        value = ">"
    }
    return value
}

export const changeSortMode = (dispatch: Dispatch, fieldSortMode: string, fieldName: string | undefined) => {
    const value = getSortMode(fieldSortMode)
    if (fieldName) {
        dispatch(setSortMode({fieldName, value}))
    }
}

export const searchFilter = <T>(array: Array<T>, searchString: string): Array<T> => {
    if (!searchString) {
        return array
    }
    return array.filter((item) => {
        return Object.keys(item).some((key: string) => {
            // @ts-ignore
            return item[key].toString().includes(searchString)
        })
    })
}

export const sortedArrayByKeyName = <T>(array: Array<T>, keyName: string, sortMode: string) => {

    const newArray = array.map(a => Object.assign({}, a))

    if (newArray.length >= 1) {

        if (sortMode === ">") {
            // @ts-ignore
            return newArray.sort((a, b) => a[keyName] > b[keyName] ? 1 : -1);
        }
        if (sortMode === "<") {
            // @ts-ignore
            return newArray.sort((a, b) => a[keyName] < b[keyName] ? 1 : -1);
        }
        return newArray
    }
}