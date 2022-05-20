import React from "react";
import styles from './dropdown.scss';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    listClass?: string;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP, listClass}: IDropdownProps){
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);  
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handlerOpen = () => {
        if (isOpen === undefined){
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__button} onClick={handlerOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.dropdown__list + ' ' + listClass} onClick={()=>setIsDropdownOpen(false)}>
                    {children}
                </div>
            )}
        </div>
    );
}