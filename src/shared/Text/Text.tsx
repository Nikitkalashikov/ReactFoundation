import React from "react";
import styles from './text.scss';
import classNames from 'classnames';

export enum EColor {
    white = 'white',
    black = 'black',
    orange = 'orange', 
    green = 'green',
    grayF4 = 'grayF4',
    grayF3 = 'grayF3',
    grayD9 = 'grayD9',
    grayC4 = 'grayC4',
    gray99 = 'gray99',
    gray66 = 'gray66',
    border = 'border',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    descktopSize?: TSizes;
    color?: EColor;
}

export function Text( props: ITextProps){
    const { 
        As = 'span', 
        color = EColor.black,
        children,
        size, 
        mobileSize, 
        tabletSize, 
        descktopSize 
    } = props;
    
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles[`m${mobileSize}`]]: mobileSize},
        { [styles[`t${tabletSize}`]]: tabletSize},
        { [styles[`d${descktopSize}`]]: descktopSize},
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}