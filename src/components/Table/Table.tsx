import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import React, {useEffect} from "react";
import {IPost} from "../../types/types";
import styles from "./table.module.scss";
import TableRow from "./TableRow/TableRow";
import TableHeader from "./TableHeader/TableHeader";
import {setFilteredArray} from "../../Redux/tableSlice";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import {getError, getFilteredArray, getIsLoading, getPostArray, getSearchString} from "../../Redux/selectors";


const Table = () => {

    const dispatch = useAppDispatch()
    const error: string = useAppSelector(getError)
    const isLoading: boolean = useAppSelector(getIsLoading)
    const searchString: string = useAppSelector(getSearchString)
    const postArray: Array<IPost> = useAppSelector(getPostArray)
    const filteredArray: Array<IPost> = useAppSelector(getFilteredArray)

    useEffect(() => {
        dispatch(setFilteredArray(searchString))
    }, [searchString, postArray, dispatch])

    return (
        <div className={styles.wrapper}>
            <TableHeader/>
            {
                isLoading && <Loader/>
            }
            {
                error && <Error error={error}/>
            }
            {
                filteredArray.map((item) => {
                    return <TableRow key={item.id} id={item.id} title={item.title} description={item.body}/>
                })

            }
        </div>
    );
};

export default Table;