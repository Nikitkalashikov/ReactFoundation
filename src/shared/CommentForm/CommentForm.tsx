import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef } from "react";
import { commentContext } from "../context/commentContext";
import styles from './CommentForm.scss';

interface ICommentForm {
    customValue?: string;
    onClick?: () => void;
}

export function CommentForm( {customValue, onClick} : ICommentForm){
    const { value, onChange } = useContext(commentContext);
    const ref = useRef<HTMLTextAreaElement>(null); 

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        onChange(event.target.value);
    }
    
    function handleSubmit(event: FormEvent){
        event.preventDefault();
    }
        
    useEffect(() => {
        ref.current?.focus();
    });

    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <textarea ref={ref} className={styles.input} name="comment" value={value} onChange={handleChange} />
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}