import React from "react";
import styles from './card.scss';
import { TextContent } from "./TextContent/TextContent";
import { Controls } from "./Controls/Controls";
import { Preview } from "./Preview/Preview";
import { Menu } from "./Menu/Menu";

export function Card(){
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}
