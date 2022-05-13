import React from "react";
import styles from './metadata.scss';
import { UserLink } from "../../UserLink/UserLink";

export function MetaData(){
    return (
        <div className={styles.metaData}>
            <UserLink />
            
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>Опубликовано  </span>
                4 часа назад
            </span>
        </div>
    );
}