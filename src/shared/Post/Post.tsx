import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from './post.scss';
import { CommentForm } from './../CommentForm/CommentForm';
import { Comments } from './../Comments/Comments';

interface IPost {
    onClose?: () => void;
    id: string;
    title: string;
    preview: string;
    media: string;
    subreddit: string;
}

export function Post( props: IPost ){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent){
            if (event.target instanceof Node && !ref.current?.contains(event.target)){
                props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <div className={styles.modal__inner}>
                <h2 className={styles.modal__title}>{ props.title }</h2>
                <div className={styles.modal__head}>
                    {props.preview && !props.media ? (
                        <img className={styles.modal__img} src={props.preview} alt={ "Preview of - " + props.title }/>
                    ): ''}
                    {props.media ? (
                        <video width="100%" height="240" controls><source src={props.media} type="video/mp4" /></video>
                    ): ''}
                </div>
                <div className={styles.content}>
                    <CommentForm />
                    <Comments id={props.id} subreddit={props.subreddit}></Comments>
                </div>
            </div>
        </div>
    ), node);
}