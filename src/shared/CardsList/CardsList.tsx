import React, { useContext } from "react";
import styles from './cardslist.scss'
import { Card } from "./Card/Card";
import { postsContext } from "../context/postsContext";

interface IPostData {
    [N:string]: any;
}

interface IPost {
    title: string,
    thumbnail: string,
    preview: string,
    link: string,
    id: string,
    photo: string,
    author: string,
    media: string,
    subreddit: string,
}

export function CardsList() : any{
    const postsData = useContext(postsContext);
    const postList = postsData.map( ({ data } : IPostData ) => {
        const post : IPost = {
            title: data.title,
            thumbnail: data.thumbnail,
            link: data.permalink,
            id: data.id,
            photo: data.sr_detail.icon_img,
            author: data.author,
            media: data.media?data.media.reddit_video.fallback_url:'',
            subreddit: data.subreddit,
            preview: data.url?data.url:'',
        };
        
        return <Card key={post.id} id={post.id} author={post.author} title={post.title} preview={post.preview} photo={post.photo} thumbnail={post.thumbnail} link={post.link} media={post.media} subreddit={post.subreddit}/>;
    });

    return (
        <ul className={styles.cardsList}>
            { postList }
        </ul> 
    );
} 