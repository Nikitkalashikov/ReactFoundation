import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ProgressPlugin } from "webpack";
import styles from './post.scss';
import { CommentForm } from './../CommentForm/CommentForm';

interface IPost {
    onClose?: () => void;
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
            <h2>Заголовок</h2>
            <div className={styles.content}>
                <p>Текст рыбный</p>
                <p>Текст рыбный</p>
                <p>Текст рыбный</p>

                <CommentForm />
            </div>
        </div>
    ), node);
}