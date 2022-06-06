import React from "react";
import styles from './icon.scss';
import { WarningIcon } from "../icons/WarningIcon";
import { BlockIcon } from "../icons/BlockIcon";
import { CommentsIcon } from "../icons/CommentsIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SaveIcon } from "../icons/SaveIcon";
import classNames from "classnames"; 

export enum EIcons {
    warning = <WarningIcon/>,
    block = <BlockIcon/>,
    comments = <CommentsIcon/>,
    share = <ShareIcon/>,
    save = <SaveIcon/>,
}

type TSizes = 12 | 14 | 16 | 18 | 20;

interface IIcons {
    name?: EIcons;
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
    
    return (
        <svg className={classes}>
            { name } warning
        </svg>
    );
}