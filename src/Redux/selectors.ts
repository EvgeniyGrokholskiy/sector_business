import {RootState} from "./store";

/**AppSlice selectors**/

export const getCurrentPage = (state: RootState) => state.app.currentPage

/**TableSlice selector**/
export const getTableState = (state: RootState) => state.table
export const getError = (state: RootState) => state.table.error
export const getIDSortMode = (state: RootState) => state.table.id
export const getIsLoading = (state: RootState) => state.table.isLoading
export const getPostArray = (state: RootState) => state.table.postsArray
export const getTitleSortMode = (state: RootState) => state.table.title
export const getTotalPages = (state: RootState) => state.table.totalPages
export const getDescriptionSortMode = (state: RootState) => state.table.body
export const getSearchString = (state: RootState) => state.table.searchString
export const getFilteredArray = (state: RootState) => state.table.filteredArray

export const getSortsModeObj = (state: RootState) => {

    const idSortMode: ">" | "<" = state.table.id
    const titleSortMode: ">" | "<" = state.table.title
    const descriptionSortMode: ">" | "<" = state.table.body

    return {
        idSortMode,
        titleSortMode,
        descriptionSortMode
    }
}
