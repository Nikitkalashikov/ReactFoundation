import React, {useEffect} from "react";
import axios from 'axios';
import styles from './comments.scss';
import { Comment } from "./Comment/Comment";
import { usePostComments } from "../../hooks/usePostComments"; 

interface ICommentsData {
    [N:string]: any;
}

interface IComments {
    id: string;
    subreddit: string;
}

interface IComment {
    id: string;
    created: any;
    body: string;
    author: string;
    photo?: string;
}

export function Comments( props: IComments ){
    const comments = usePostComments(props);
    
    const commentsList = comments[0].map( ( { data } : ICommentsData) => {
        const date = new Date(data.created * 1000);
        
        const comment : IComment = {
            id: data.id,
            created:  date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString(),
            body: data.body,
            author: data.author,
            photo: '',
        }

        // const replies = data.replies.data.children[0];
        
        return <Comment key={comment.id} photo={comment.photo} author={comment.author} created={comment.created} body={comment.body}></Comment>
    });
    
    return (
        <div className={styles.comments}>
            <div className={styles.comments__top}>
                <div className={styles.sorting}>
                    Сортировать по: <span>Лучшее</span>
                </div>
            </div>
            <div className={styles.comments__body}>
                { commentsList }
            </div>
        </div>
    );
}