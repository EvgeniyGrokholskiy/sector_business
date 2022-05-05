import React from "react";
import styles from "./tableHeader.module.scss";
import {changeSortMode} from "../../../helpers/helpers";
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";
import {ReactComponent as Chevron} from "../../../assets/img/chevron.svg";
import {getDescriptionSortMode, getIDSortMode, getTitleSortMode} from "../../../Redux/selectors";


const TableHeader: React.FC = () => {

    const dispatch = useAppDispatch()
    const idSortMode: ">" | "<" = useAppSelector(getIDSortMode)
    const titleSortMode: ">" | "<" = useAppSelector(getTitleSortMode)
    const descriptionSortMode: ">" | "<" = useAppSelector(getDescriptionSortMode)

    return (
        <div className={styles.header}>
            <div className={`${styles.header_item} ${styles.header_id}`}>{"ID"}
                <div data-tag={"id"}
                     className={`${idSortMode === ">" ? styles.chevron : `${styles.chevron} ${styles.chevron__turned}`}`}
                     onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                         changeSortMode(dispatch, idSortMode, event.currentTarget.dataset.tag)
                     }}
                >
                    <Chevron/>
                </div>
            </div>
            <div className={`${styles.header_item} ${styles.header_title}`}>{"Заголовок"}
                <div data-tag={"title"}
                     className={`${titleSortMode === ">" ? styles.chevron : `${styles.chevron} ${styles.chevron__turned}`}`}
                     onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                         changeSortMode(dispatch, titleSortMode, event.currentTarget.dataset.tag)
                     }}
                >
                    <Chevron/>
                </div>
            </div>
            <div className={`${styles.header_item} ${styles.header_description}`}>{"Описание"}
                <div data-tag={"body"}
                     className={`${descriptionSortMode === ">" ? styles.chevron : `${styles.chevron} ${styles.chevron__turned}`}`}
                     onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                         changeSortMode(dispatch, descriptionSortMode, event.currentTarget.dataset.tag)
                     }}
                >
                    <Chevron/>
                </div>
            </div>
        </div>
    );
};

export default TableHeader;