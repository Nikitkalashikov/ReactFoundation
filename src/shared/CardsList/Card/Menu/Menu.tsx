import React from "react";
import { DropdownControls } from "../../../Dropdown/DropdownControls/DropdownControls";
import { DropdownItems } from "../../../Dropdown/DropdownControls/DropdownItems/DropdownItems";
import { MenuIcon } from "../../../icons/MenuIcon";
import styles from './menu.scss';

export function Menu(){
    return (
        <div className={styles.menu}>
            <DropdownControls
                button = {
                    <button className={styles.menuButton}>
                        <MenuIcon/>       
                    </button>
                }
            >
                <DropdownItems postId="1234"/>
            </DropdownControls>
        </div>
    );
}