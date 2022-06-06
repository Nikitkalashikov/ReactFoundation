 import React, { useState } from "react";
import { Dropdown } from "../Dropdown";
import styles from './dropdowncontrols.scss';

interface IDropdownControlsProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function DropdownControls({button, children}:IDropdownControlsProps){
    return (
        <Dropdown 
            button = {button}
            listClass = {styles.dropdown__list}
        >
            {children}
        </Dropdown>
    );
}