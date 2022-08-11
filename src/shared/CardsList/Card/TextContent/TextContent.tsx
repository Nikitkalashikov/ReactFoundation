import React , {useState} from "react";
import styles from './textcontent.scss';
import { MetaData } from "./MetaData/MetaData";
import { Post } from './../../../Post/Post';

interface ITextContent {
    title: string,
    link: string
}

export function TextContent( {title, link} : ITextContent ){
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <div className={styles.textContent}>
            <MetaData />
            
            <h2 className={styles.title}>
                <button className={styles.postLink} onClick={ () => {return setIsModalOpened(true);}}>
                    { title }
                </button>
            </h2>
            
            {isModalOpened && (
                <Post 
                    onClose={() => { setIsModalOpened(false); }}
                />
            )}
        </div>
    );
}
