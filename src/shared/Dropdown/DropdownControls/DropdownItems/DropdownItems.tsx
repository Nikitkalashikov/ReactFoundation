import React from "react";
import styles from './dropdownitems.scss';
import { WarningIcon } from "../../../icons/WarningIcon";
import { BlockIcon } from "../../../icons/BlockIcon";

interface IDropdownItems {
    postId: string;
}

export function DropdownItems({postId}: IDropdownItems){
    return (
        <div>
            <div className={styles.dropdown__item}>Комментарии</div>
            <div className={styles.dropdown__item}>Поделиться</div>
            <div className={styles.dropdown__item} onClick={()=>console.log(postId)}>
                <WarningIcon/>
                Скрыть
            </div>
            <div className={styles.dropdown__item}>Сохранить</div>
            <div className={styles.dropdown__item}>
                <BlockIcon/>
                Пожаловаться
            </div>
            <div className={styles.dropdown__close}>Закрыть</div>
        </div>
    );
}