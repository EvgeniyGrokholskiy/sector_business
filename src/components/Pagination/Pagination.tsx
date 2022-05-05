import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./pagination.module.scss";
import {useAppDispatch} from "../../Redux/hooks";
import {setCurrentPage} from "../../Redux/appSlice";
import { IPaginationProps } from "../../types/types";


const Pagination: React.FC<IPaginationProps> = ({ currentPage,pagesCount}) => {

    let pagesArray = [];
    const dispatch = useAppDispatch()
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    return (
        <div className={styles.pageButtonsContainer}>
            <NavLink to={`/page_${currentPage === 1 ? currentPage : currentPage - 1}`} onClick={() => {
                dispatch(setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1))
            }} className={styles.button}>{"Назад"}</NavLink>
            <div className={styles.pageNumbersContainer}>
            {
                pagesArray.map((page) => <NavLink to={`/page_${page}`} key={page} onClick={() => {
                    dispatch(setCurrentPage(page))
                }}
                                                  className={page === currentPage ? `${styles.pageButton} ${styles.current}` : styles.pageButton}>{page}</NavLink>)
            }
            </div>
            <NavLink to={`/page_${currentPage === pagesCount ? currentPage : currentPage + 1}`} onClick={() => {
                dispatch(setCurrentPage(currentPage === pagesCount ? currentPage : currentPage + 1))
            }} className={styles.button}>{"Далее"}</NavLink>
        </div>
    );
};

export default Pagination;