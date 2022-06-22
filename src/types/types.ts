import {ActionCreatorWithPayload} from "@reduxjs/toolkit/dist/createAction";

/**AppSlice types and interfaces**/

export interface IInitialAppState {
    [key: string]: string | number

    currentPage: number
}

/**TableSlice types and Interfaces**/

export interface IPost {
    [key: string]: number | string

    userId: number
    id: number
    title: string
    body: string
}

export interface ITableInitialState {
    [key: string]: string | number | boolean | Array<IPost>

    id: ">" | "<"
    title: ">" | "<"
    body: ">" | "<"
    error: string
    isLoading: boolean
    totalPages: number
    searchString: string
    filteredArray: Array<IPost>
    postsArray: Array<IPost>
}

/**Props types and interfaces**/

export interface IErrorProps {
    error: string
}

export interface IPaginationProps {
    pagesCount: number
    currentPage: number
}

export interface ISearchInputProps {
    placeholder: string
    value: string
    action: ActionCreatorWithPayload<{ fieldName: string, value: string }, string>
}

export interface ITableRowProps {
    id: number
    title: string
    description: string
}

export interface ITableHeaderProps {
    idSortMode: ">" | "<"
    titleSortMode: ">" | "<"
    descriptionSortMode: ">" | "<"
}