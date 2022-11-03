import React, { useContext } from "react";
import styles from './card.scss';
import { TextContent } from "./TextContent/TextContent";
import { Controls } from "./Controls/Controls";
import { Preview } from "./Preview/Preview";
import { Menu } from "./Menu/Menu";

interface ICard {
    id: string,
    title: string,
    thumbnail: string,
    author: string,
    photo: string,
    preview: string,
    link: string,
    media: string,
    subreddit: string,
}

export function Card( { id, title, thumbnail, photo, author, preview, link, media, subreddit } : ICard ){
    return (
        <li className={styles.card}>
            <TextContent id={id} title={title} photo={photo} author={author} preview={preview} media={media} subreddit={subreddit} />
            <Preview thumbnail={thumbnail} link={link}/>
            <Menu />
            <Controls />
        </li>
    );
}
