import React from "react";
import styles from "./tableHeader.module.scss";
import {useAppSelector} from "../../../Redux/hooks";
import {getSortsModeObj} from "../../../Redux/selectors";
import SortModeChevron from "../../SortModeChevron/SortModeChevron";


const TableHeader: React.FC = () => {

    const {idSortMode, titleSortMode, descriptionSortMode} = useAppSelector(getSortsModeObj)

    return (
        <div className={styles.header}>
            <div className={`${styles.header_item} ${styles.header_id}`}>{"ID"}
                <SortModeChevron collumName={"id"} sortMode={idSortMode}/>
            </div>
            <div className={`${styles.header_item} ${styles.header_title}`}>{"Заголовок"}
                <SortModeChevron collumName={"title"} sortMode={titleSortMode}/>
            </div>
            <div className={`${styles.header_item} ${styles.header_description}`}>{"Описание"}
                <SortModeChevron collumName={"body"} sortMode={descriptionSortMode}/>
            </div>
        </div>
    );
};

export default TableHeader;