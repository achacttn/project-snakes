import React from 'react';
import { connect } from 'react-redux';
import style from './Square.module.css';

const Square = ({ snakeOccupied, foodOccupied, rowPos, squarePos, score, pathHistory, snakeFood, ticksElapsed }) => {

    // React.useEffect(() => {
    //     if( snakeOccupied ){
    //         console.log(`Square at column(x):${squarePos} and row(y):${rowPos}`);
    //     }
    // });
    
    const squareClickHandler = () => {
        console.log(`x:${squarePos}, y:${rowPos}`);
    }

    return (
        <div className={style.SquareContainer} onClick={squareClickHandler}>
            <div className={snakeOccupied ? style.SnakeOccupied : ( foodOccupied ? style.FoodOccupied : null )}></div>
            {/* index the body and food and use includes */}
            {/* <div className={  }> */}
            {/* </div> */}
        </div>
    )
};

let mapStateToProps = ( state ) => {
    let { score, pathHistory, snakeFood, ticksElapsed } = state.gameState;
    return { score, pathHistory, snakeFood, ticksElapsed };
};

export default connect(
    mapStateToProps,
    null,
)(Square);
