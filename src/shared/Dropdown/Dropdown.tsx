import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { DropdownItems } from "./DropdownItems/DropdownItems";
import styles from './dropdown.scss';

interface IDropdownProps {
    onClose?: () => void;
}

export function Dropdown( props : IDropdownProps){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent){
            if ( event.target instanceof Node && !ref.current?.contains(event.target)){
                props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])

    const node = document.querySelector('.dropdown_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.dropdown} ref={ref}>
            <div className={styles.dropdown__list}>
                <DropdownItems postId="1234"/>
            </div>
        </div>
    ), node);
}