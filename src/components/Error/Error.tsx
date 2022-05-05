import React from "react";
import styles from "./error.module.scss";
import { IErrorProps } from "../../types/types";


const Error: React.FC<IErrorProps> = ({error}) => {

    return (
        <div className={styles.wrapper}>
            {error}
            <button className={styles.reload_button} onClick={() => window.location.reload()}>Reload</button>
        </div>
    );
};

export default Error;