import React from 'react';
import style from './Row.module.css';

export default () => {

    React.useEffect(()=>{
        console.log('=== Row component mounted ===');
    });

    return (
        <div className={style.RowContainer}>
            Row
        </div>
    )

};
