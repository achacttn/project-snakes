import React from 'react';
// import { connect } from 'react-redux';
import style from './Square.module.css';

const Square = ({ snakeOccupied, foodOccupied, rowPos, squarePos }) => {
    
    const squareClickHandler = () => {
        console.log(`x:${squarePos}, y:${rowPos}`);
    }

    return (
        <div className={style.SquareContainer} onClick={squareClickHandler}>
            <div className={snakeOccupied ? style.SnakeOccupied : ( foodOccupied ? style.FoodOccupied : null )}></div>
        </div>
    )
};

export default Square;
