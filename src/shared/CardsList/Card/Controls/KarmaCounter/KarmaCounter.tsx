import React from "react";
import styles from './karmacounter.scss';
import {EIcons, Icon } from './../../../../Icon/Icon';

export function KarmaCounter(){
    return (
        <div className={styles.karmaCounter}>
            <button className={styles.up}>
                <Icon name={EIcons.up} size={18}/>    
            </button>
            <button className={styles.karmaValue}>234</button>
            <button className={styles.down}>
                <Icon name={EIcons.down} size={18} />
            </button>
        </div>
    );
}