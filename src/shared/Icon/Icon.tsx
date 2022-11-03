import React from "react";
import styles from './icon.scss';
import { UpIcon } from "../icons/UpIcon";
import { DownIcon } from "../icons/DownIcon";
import { WarningIcon } from "../icons/WarningIcon";
import { ReplyIcon } from "../icons/ReplyIcon";
import { BlockIcon } from "../icons/BlockIcon";
import { CommentsIcon } from "../icons/CommentsIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SaveIcon } from "../icons/SaveIcon";
import classNames from "classnames"; 

export enum EIcons {
    up = 'up',
    down = 'down',
    reply = 'reply',
    warning = 'warning',
    block = 'block',
    comments = 'comments',
    share = 'share',
    save = 'save',
}

const icons = {
    up: <UpIcon />,
    down: <DownIcon />,
    reply: <ReplyIcon />,
    warning: <WarningIcon />,
    block: <BlockIcon />,
    comments: <CommentsIcon />,
    share: <ShareIcon />,
    save: <SaveIcon />,
}

type TSizes = 12 | 14 | 16 | 18 | 19 | 20;

interface IIcons {
    name: EIcons;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    descktopSize?: TSizes;
}

export function Icon(props: IIcons){

    const {
        name,
        size,
        mobileSize,
        tabletSize,
        descktopSize,
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize},
        { [styles[`t${tabletSize}`]]: tabletSize},
        { [styles[`d${descktopSize}`]]: descktopSize},
    );

    const icon = icons[name];
    
    return (
        <svg className={classes}>
            { icon }
        </svg>
    );
}