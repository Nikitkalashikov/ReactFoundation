import React, { useEffect, useReducer, useRef, useState } from "react";
import { Dropdown } from "../Dropdown";
import { DropdownItems } from "./DropdownItems/DropdownItems";
import styles from './dropdowncontrols.scss';
import ReactDOM from 'react-dom';

interface IDropdownControlsProps {
    onClose?: () => void;
}

export function DropdownControls(props :IDropdownControlsProps){
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
    }, []);

    const node = document.querySelector('#dropdown_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div></div>
    ), node);
}