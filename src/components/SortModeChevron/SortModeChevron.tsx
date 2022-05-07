import React from 'react';
import {useAppDispatch} from "../../Redux/hooks";
import styles from "./sortModeChevron.module.scss";
import {changeSortMode} from "../../helpers/helpers";
import {ReactComponent as Chevron} from "../../assets/img/chevron.svg";

interface ISortModeChevronProps {
    collumName: string
    sortMode: ">" | "<"
}

const SortModeChevron: React.FC<ISortModeChevronProps> = ({collumName, sortMode}) => {

    const dispatch = useAppDispatch()

    const handleChangeSortMode = (event: React.MouseEvent<HTMLDivElement>) => {
        changeSortMode(dispatch, sortMode, event.currentTarget.dataset.tag)
    }

    return (
        <div>
            <div data-tag={collumName}
                 className={`${sortMode === ">" ? styles.chevron : `${styles.chevron} ${styles.chevron__turned}`}`}
                 onClick={handleChangeSortMode}>
                <Chevron/>
            </div>
        </div>
    );
};

export default SortModeChevron;