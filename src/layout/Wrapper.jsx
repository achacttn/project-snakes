import React from 'react';
import style from './Wrapper.module.css';

export default props => {
    return (
        <div className={style.Container}>
            <h1 className={style.Title}>React Snakes!</h1>
            { props.children }
        </div>
    )
};
