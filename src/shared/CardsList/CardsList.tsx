import React, { useContext } from "react";
import styles from './cardslist.scss'
import { Card } from "./Card/Card";
import { postsContext } from "../context/postsContext";

interface IPostData {
    [N:string]: any;
}

interface IPost {
    title: string,
    preview: string,
    link: string,
    id: string
}

export function CardsList() : any{
    const postsData = useContext(postsContext);
    const postList = postsData.map( ({ data } : IPostData ) => {
        const post : IPost = {
            title: data.sr_detail.title,
            preview: data.sr_detail.banner_img,
            link: data.url,
            id: data.id
        };

        return <Card key={post.id} title={post.title} preview={post.preview} link={post.link}/>;
    });

    return (
        <ul className={styles.cardsList}>
            { postList }
        </ul> 
    );
} 