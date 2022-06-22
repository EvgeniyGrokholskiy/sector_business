import React from "react";

import styles from "./loader.module.scss";


const Loader: React.FC = () => (
    <div className={styles.wrapper}>
        <h1>Loading...</h1>
    </div>
);

export default Loader;