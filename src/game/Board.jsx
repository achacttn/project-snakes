import React from 'react';
import style from './Board.module.css';

export default () => {

    React.useEffect(()=>{
        console.log('=== Board component mounted ===');
    });

    const [ count, setCount ] = React.useState(0);

    return (
        <div className={style.BoardContainer}>
            <div>
                <h2>Board</h2>
            </div>
            { count }
        </div>
    )
};
