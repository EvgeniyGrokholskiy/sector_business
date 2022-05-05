import React from "react";
import styles from "./tableRow.module.scss"

interface ITableRowProps {
    id: number
    title: string
    description: string
}

const TableRow: React.FC<ITableRowProps> = ({id, title, description}) => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.item} ${styles.id}`}>{id}</div>
            <div className={`${styles.item} ${styles.title}`}>{title}</div>
            <div className={`${styles.item} ${styles.description}`}>{description}</div>
        </div>
    );
};

export default TableRow;