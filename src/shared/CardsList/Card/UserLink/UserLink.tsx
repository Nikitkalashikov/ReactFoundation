import React from "react";
import styles from './userlink.scss';

export function UserLink(){
    return (
        <div className={styles.userLink}>
            <img src="https://cdn.dribbble.com/users/4132872/avatars/normal/c71a8819d1705dba6b42ed55616f2523.jpg" alt="" className={styles.avatar} />
            <a href="#user-url" className={styles.username}>Никита Калашников</a>
        </div>
    );
}