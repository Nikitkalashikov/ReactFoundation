import React, { ChangeEvent, useContext, useRef, useState} from "react";
import styles from './comment.scss';
import { MetaData } from './../../CardsList/Card/TextContent/MetaData/MetaData';
import {EIcons, Icon} from '../../Icon/Icon';
import { commentContext } from "../../context/commentContext";
import { CommentForm } from "../../CommentForm/CommentForm";

interface IComment {
    body: string;
    created: Date;
    author: string;
    photo?: string;
}

export function Comment( props : IComment ){  
    const { value, onChange } = useContext(commentContext);
    const [isFormOpened, setIsFormOpened] = useState(false);

    function handleClick(){
        onChange(props.author + ', ');
        return setIsFormOpened(!isFormOpened)
    }

    return (
        <div className={styles.comment}>
            <div className={styles.comment__side}>
                <div className={styles.comment__side_arrow}>
                    <Icon name={EIcons.up} size={18} />
                    <Icon name={EIcons.down} size={18} />
                </div>
                <div className={styles.comment__side_line}></div>
            </div>
            <MetaData created={props.created} author={props.author} photo={props.photo}></MetaData>
            <div className={styles.comment__content}>
                { props.body }
            </div>
            <div className={styles.comment__bottom}>
                <div className={styles.comment__menu}>
                    <button className={styles.comment__menu_item} onClick={handleClick}>
                        <Icon name={EIcons.reply} size={16} />
                        Ответить
                    </button>
                    <button className={styles.comment__menu_item}>
                        <Icon name={EIcons.share} size={16} />
                        Поделиться
                    </button>
                    <button className={styles.comment__menu_item}>
                        <Icon name={EIcons.warning} size={16} />
                        Пожаловаться
                    </button>
                </div>
            </div>
            {isFormOpened && (
                <CommentForm customValue={value}></CommentForm>
            )}
        </div>
    )
}