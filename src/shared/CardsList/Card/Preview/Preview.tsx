import React from "react";
import styles from './preview.scss';

interface IPreview{
    preview: string
}

export function Preview( {preview} : IPreview ){
    return (
        <div className={styles.preview}>
            {/* <img src="https://cdn.dribbble.com/userupload/2671446/file/original-4383ec0f149e26c6354b62d0e5217b12.jpg" alt="" className={styles.previewImg}/>     */}
            <img src={preview} alt="" className={styles.previewImg}/>    
        </div>
    );
}