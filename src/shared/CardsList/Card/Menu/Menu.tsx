import React, { useState } from "react";
import { Dropdown } from "../../../Dropdown/Dropdown";
import { MenuIcon } from "../../../icons/MenuIcon";
import styles from './menu.scss';

export function Menu(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className={styles.menu}>
            <button className={styles.menuButton} onClick={ () => { return setIsDropdownOpen(true);}}>
                <MenuIcon/>       
            </button>
            <div className="dropdown_root"></div>           

            {isDropdownOpen && (
                <Dropdown
                    onClose={() => { setIsDropdownOpen(false); }}
                />
            )}
        </div>
    );
}