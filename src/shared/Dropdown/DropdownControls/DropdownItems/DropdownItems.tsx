import React from "react";
import styles from './dropdownitems.scss';

export function DropdownItems(){
    return (
        <div>
            <div className={styles.dropdown__item}>Комментарии</div>
            <div className={styles.dropdown__item}>Поделиться</div>
            <div className={styles.dropdown__item}>Скрыть</div>
            <div className={styles.dropdown__item}>Сохранить</div>
            <div className={styles.dropdown__item}>Пожаловаться</div>
            <div className={styles.dropdown__close}>Закрыть</div>
        </div>
    );
}