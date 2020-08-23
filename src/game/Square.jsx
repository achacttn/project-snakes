import React from 'react';
import style from './Square.module.css';

export default ({ snakeOccupied, rowPos, squarePos }) => {

    React.useEffect(() => {
        if( snakeOccupied ){
            console.log(`Square at column(x):${squarePos} and row(y):${rowPos}`);
        }
    });

    const squareClickHandler = () => {
        console.log(`x:${squarePos}, y:${rowPos}`);
    }

    return (
        <div className={style.SquareContainer} onClick={squareClickHandler}>
            <div className={snakeOccupied ? style.SnakeOccupied : null}></div>
            {/* &nbsp; */}
        </div>
    )
};
