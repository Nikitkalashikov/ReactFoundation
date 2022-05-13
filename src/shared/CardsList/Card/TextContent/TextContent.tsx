import React from "react";
import styles from './textcontent.scss';
import { MetaData } from "./MetaData/MetaData";

export function TextContent(){
    return (
        <div className={styles.textContent}>
            <MetaData />
            
            <h2 className={styles.title}>
                <a href="" className={styles.postLink}>
                    Следует отметить, что новая модель организации доверенности Следующая статья будет куда короче или страннее.
                </a>
            </h2>
        </div>
    );
}