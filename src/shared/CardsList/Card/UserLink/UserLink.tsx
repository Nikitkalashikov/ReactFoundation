import React from "react";
import styles from './userlink.scss';

interface IUserLink {
    name?: string;
    photo?: string; 
}

export function UserLink(props: IUserLink){

    return (
        <div className={styles.userLink}>
            <img src={props.photo} alt="" className={styles.avatar} />
            <a href="#user-url" className={styles.username}>{props.name}</a>
        </div>
    );
}