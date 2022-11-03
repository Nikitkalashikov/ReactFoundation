import React from "react";
import styles from './preview.scss';

interface IPreview{
    thumbnail: string;
    link: string;
}

export function Preview( {thumbnail, link} : IPreview ){
    return (
        <a href={"https://www.reddit.com"+link}  target="_blank" className={styles.preview}>
            <img src={thumbnail} alt="" className={styles.previewImg}/>    
        </a>
    );
}