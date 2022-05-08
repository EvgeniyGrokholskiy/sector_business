import './App.css';
import React, {useEffect} from 'react';
import Table from "./components/Table/Table";
import {Route, Routes} from "react-router-dom";
import {setCurrentPage} from "./Redux/appSlice";
import Pagination from "./components/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "./Redux/hooks";
import SearchInput from "./components/SearchInput/SearchInput";
import {getCurrentPage, getSearchString, getTotalPages} from "./Redux/selectors";
import {changeTableSliceValue, getAllPostData, getCurrentPageData} from "./Redux/tableSlice";


const App: React.FC = () => {

    const dispatch = useAppDispatch()
    const totalPages: number = useAppSelector(getTotalPages)
    const currentPage: number = useAppSelector(getCurrentPage)
    const searchString: string = useAppSelector(getSearchString)

    useEffect(() => {
        const currentPageLS = sessionStorage.getItem("currentPage")
        currentPageLS && dispatch(setCurrentPage(Number(currentPageLS)))
    }, [])

    useEffect(() => {
        dispatch(getAllPostData())
    }, [dispatch])

    useEffect(() => {
        dispatch(getCurrentPageData(Number(currentPage)))
    }, [currentPage, dispatch])

    useEffect(() => {
        sessionStorage.setItem("currentPage", currentPage.toString())
    }, [currentPage])

    return (
        <div className={"wrapper"}>
            <div className="App">
                <SearchInput value={searchString} placeholder={"Поиск "} action={changeTableSliceValue}/>
                <Routes>
                    <Route path={"/*"} element={<Table/>}/>
                </Routes>
                <div className={"pagination_wrapper"}>
                    <Pagination currentPage={currentPage} pagesCount={totalPages}/>
                </div>
            </div>
        </div>
    );
};

export default App;
