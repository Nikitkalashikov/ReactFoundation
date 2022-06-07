import React from "react";
import { EColor, Text } from "../../../Text/Text";
import styles from './userblock.scss';
import { AnonIcon } from '../../../icons/AnonIcon';

interface IUserBlockProps {
    avatarScr?: string,
    username?: string
}

export function UserBlock({avatarScr, username}: IUserBlockProps){
    return (
        <a href="https://www.reddit.com/api/v1/authorize?client_id=UzbE7JhWiHExG_QeoYt-xA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarScr
                    ? <img src="{avatarSrc" alt="user avatar" className={styles.avatarImage} />
                    : <AnonIcon/>
                }
            </div>

            <div className={styles.username}>
                <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
            </div>
        </a>
    );
}