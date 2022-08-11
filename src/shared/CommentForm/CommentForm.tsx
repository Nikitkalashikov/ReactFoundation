import React, { ChangeEvent, FormEvent, useContext } from "react";
import { commentContext } from "../context/commentContext";
import styles from './CommentForm.scss';

export function CommentForm(){
    const { value, onChange } = useContext(commentContext);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        onChange(event.target.value);
    }
    
    function handleSubmit(event: FormEvent){
        event.preventDefault();

    }

    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <textarea className={styles.input} name="comment" value={value} onChange={handleChange} />
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}