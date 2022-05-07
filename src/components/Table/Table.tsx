import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import React, {useEffect} from "react";
import styles from "./table.module.scss";
import TableRow from "./TableRow/TableRow";
import {getTableState} from "../../Redux/selectors";
import TableHeader from "./TableHeader/TableHeader";
import {setFilteredArray} from "../../Redux/tableSlice";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";


const Table: React.FC = () => {

    const dispatch = useAppDispatch()
    const {error, filteredArray, isLoading, postsArray, searchString} = useAppSelector(getTableState)


    useEffect(() => {
        dispatch(setFilteredArray(searchString))
    }, [searchString, postsArray, dispatch])

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