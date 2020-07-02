import React from 'react';
import style from './Board.module.css';

export default ({ numOfRows, numOfSquares }) => {

    React.useEffect(()=>{
        console.log('=== Board component mounted ===');
        console.log(111, numOfRows, 222, numOfSquares);
    });

    return (
        <div className={style.BoardContainer}>
            <div>
                <h2>Board</h2>
            </div>
            <div>
                Rows: { numOfRows }
            </div>
            <div>
                Squares: { numOfSquares }
            </div>
        </div>
    )
};
