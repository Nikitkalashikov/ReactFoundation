import React from "react";
import styles from './controls.scss';
import { KarmaCounter } from "./KarmaCounter/KarmaCounter";
import { CommentsButton } from "./CommentsButton/CommentsButton";
import { ShareButton } from "./ShareButton/ShareButton";
import { SaveButton } from "./SaveButton/SaveButton";

export function Controls(){
    return (
        <div className={styles.controls}>
            <KarmaCounter />
            <CommentsButton />
            
            <div className={styles.actions}>
                <ShareButton />
                <SaveButton />
            </div>
        </div>
    );
}