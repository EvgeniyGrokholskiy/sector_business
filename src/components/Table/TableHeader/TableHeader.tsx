import React from "react";

import styles from "./tableHeader.module.scss";
import SortModeChevron from "../../SortModeChevron/SortModeChevron";
import {ITableHeaderProps} from "../../../types/types";


const TableHeader: React.FC<ITableHeaderProps> = ({idSortMode, titleSortMode, descriptionSortMode}) => {
    console.log("render table header")

    //const {idSortMode, titleSortMode, descriptionSortMode} = useAppSelector(getSortsModeObj)

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

const areEqual = (prevProps: ITableHeaderProps, nextProps: ITableHeaderProps) => {
    return  prevProps.idSortMode === nextProps.idSortMode || prevProps.titleSortMode === nextProps.titleSortMode || prevProps.descriptionSortMode === nextProps.descriptionSortMode
}

export default React.memo(TableHeader, areEqual);