import React from "react";
import styles from './dropdownitems.scss';
import { EIcons, Icon } from "../../../Icon/Icon";

interface IDropdownItems {
    postId: string;
}

export function DropdownItems({postId}: IDropdownItems){
    return (
        <div>
            <div className={styles.dropdown__item}>
                <Icon name={EIcons.comments} size={16} />
                Комментарии
            </div>
            <div className={styles.dropdown__item}>
                <Icon name={EIcons.share} size={16} />
                Поделиться
            </div>
            <div className={styles.dropdown__item} onClick={()=>console.log(postId)}>
                <Icon name={EIcons.block} size={16} />
                Скрыть
            </div>
            <div className={styles.dropdown__item}>
                <Icon name={EIcons.save} size={16} />
                Сохранить
            </div>
            <div className={styles.dropdown__item}>
                <Icon name={EIcons.warning} size={16} />
                Пожаловаться
            </div>
            <div className={styles.dropdown__close}>Закрыть</div>
        </div>
    );
}