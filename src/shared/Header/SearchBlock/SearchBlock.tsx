import React from "react";
import styles from './searchblock.scss';
import { UserBlock } from "./UserBlock/UserBlock";

export function SearchBlock(){
    return (
        <div className={styles.searchBlock}>
            Search block
            <UserBlock/>
        </div>
    );
}