import React from "react";
import styles from './textcontent.scss';
import { MetaData } from "./MetaData/MetaData";

interface ITextContent {
    title: string,
    link: string
}

export function TextContent( {title, link} : ITextContent ){
    return (
        <div className={styles.textContent}>
            <MetaData />
            
            <h2 className={styles.title}>
                <a href={ link } className={styles.postLink}>
                    { title }
                    {/* Следует отметить, что новая модель организации доверенности Следующая статья будет куда короче или страннее. */}
                </a>
            </h2>
        </div>
    );
}