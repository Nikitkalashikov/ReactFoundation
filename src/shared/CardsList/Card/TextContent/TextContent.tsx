import React , {useState} from "react";
import styles from './textcontent.scss';
import { MetaData } from "./MetaData/MetaData";
import { Post } from './../../../Post/Post';

interface ITextContent {
    id: string;
    title: string;
    preview: string;
    author: string;
    photo: string,
    media: string;
    subreddit: string;
}

export function TextContent( {id, title, photo, preview, author, media, subreddit} : ITextContent ){
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <div className={styles.textContent}>
            <MetaData author={author} photo={photo}/>
            
            <h2 className={styles.title}>
                <button className={styles.postLink} onClick={ () => {return setIsModalOpened(true);}}>
                    { title }
                </button>
            </h2>
            
            {isModalOpened && (
                <Post 
                    onClose={() => { setIsModalOpened(false); }}
                    id={id}
                    preview={ preview }
                    title={ title }
                    media={media}
                    subreddit={ subreddit }
                />
            )}
        </div>
    );
}
