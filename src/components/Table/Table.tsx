import React, {useEffect} from "react";

import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import styles from "./table.module.scss";
import TableRow from "./TableRow/TableRow";
import {getSortsModeObj, getTableState} from "../../Redux/selectors";
import TableHeader from "./TableHeader/TableHeader";
import {setFilteredArray} from "../../Redux/tableSlice";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";


const Table: React.FC = () => {

    console.log("render table")

    const dispatch = useAppDispatch()
    const {idSortMode, titleSortMode, descriptionSortMode} = useAppSelector(getSortsModeObj)
    const {error, filteredArray, isLoading, postsArray, searchString} = useAppSelector(getTableState)

    useEffect(() => {
        dispatch(setFilteredArray(searchString))
    }, [searchString, postsArray, dispatch])

    return (
        <div className={styles.wrapper}>
            <TableHeader idSortMode={idSortMode} titleSortMode={titleSortMode} descriptionSortMode={descriptionSortMode}/>
            {
                isLoading && <Loader/>
            }
            {
                error && <Error error={error}/>
            }
            {
                filteredArray.map((item) => <TableRow key={item.id} id={item.id} title={item.title}
                                                      description={item.body}/>)
            }
        </div>
    );
};

export default React.memo(Table);