import React from "react";
import styles from "./searchInput.module.scss";
import {useAppDispatch} from "../../Redux/hooks";
import { ISearchInputProps } from "../../types/types";
import {ReactComponent as Lens} from "../../assets/img/Leans.svg";


const SearchInput: React.FC<ISearchInputProps> = ({
                                                      placeholder,
                                                      value,
                                                      action
                                                  }) => {

    const dispatch = useAppDispatch()

    return (
        <div className={styles.wrapper}>
            <input className={styles.input} type={"text"} placeholder={placeholder} value={value}
                   onChange={(event) => {
                       const fieldName = "searchString"
                       const value = event.target.value
                       dispatch(action({fieldName, value}))
                   }}/>
            <div className={styles.lens}>
                <Lens/>
            </div>
        </div>
    );
};

export default SearchInput;