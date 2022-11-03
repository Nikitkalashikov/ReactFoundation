import React from "react";
import styles from './metadata.scss';
import { UserLink } from "../../UserLink/UserLink";

interface IMetaData {
    photo?: string;
    created?: Date; 
    author?: string;
}

export function MetaData( props : IMetaData){
    return (
        <div className={styles.metaData}>
            <UserLink name={props.author} photo={props.photo}/>
            
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>Опубликовано  </span>
                { props.created }
            </span>
        </div>
    );
}