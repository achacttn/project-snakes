import React from 'react';
import style from './Wrapper.module.css';

export default props => {
    return (
        <div className={style.Container}>
            <div className={style.InnerBorder}>
                {props.children}
            </div>
        </div>
    )
};
