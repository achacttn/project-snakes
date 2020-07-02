import React from 'react';
import style from './Board.module.css';

export default ({ numOfRows, numOfSquares }) => {

    React.useEffect(()=>{
        console.log('=== Board component mounted ===');
        console.log(111, numOfRows, 222, numOfSquares);
    });

    const generateSquares = () => {
        let squares = [];
        for( let i=0; i<numOfSquares; i++ ){
            squares.push(<span key={i}>Y</span>)
        }
        return squares
    }

    const generateRows = () => {
        let rowContainer = [];
        for( let j=0; j<numOfRows; j++ ){
            rowContainer.push(
                <div key={j}>{ generateSquares() }</div>
            )
        }
        return rowContainer
    }

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
            <div>
                {
                    generateRows()
                }
            </div>
        </div>
    )
};
