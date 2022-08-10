import React, { useContext } from "react";
import styles from './card.scss';
import { TextContent } from "./TextContent/TextContent";
import { Controls } from "./Controls/Controls";
import { Preview } from "./Preview/Preview";
import { Menu } from "./Menu/Menu";

interface ICard {
    title: string,
    preview: string,
    link: string
}

export function Card( { title, preview, link } : ICard ){
    
    return (
        <li className={styles.card}>
            <TextContent title={title} link={link} />
            <Preview preview={preview} />
            <Menu />
            <Controls />
        </li>
    );
}
