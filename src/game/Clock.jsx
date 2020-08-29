import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, direction, snakeBody, snakeFood }) => {

    let intervalRef = React.useRef(null);
    intervalRef.current = inProgress;

    // might not need these refs
    // let directionRef = React.useRef(null);
    // directionRef.current = direction;
    // let snakeBodyRef = React.useRef(null);
    // snakeBodyRef.current = snakeBody;
    // let snakeFoodRef = React.useRef(null);
    // snakeFoodRef.current = snakeFood;

    React.useEffect(() => {
        console.log('Clock component')
        // console.log('inProgress redux state & ref: ', inProgress, intervalRef.current);
        // console.log('direction redux state & ref: ', direction, directionRef.current);
        // console.log('snakeBody redux state & ref: ', snakeBody, snakeBodyRef.current);
        // console.log('snakeFood redux state & ref: ', snakeFood, snakeFoodRef.current);
        const progressTimer = setInterval(function(){
            if( intervalRef.current ){
                // detect collision type
                // food: move the snake, grow the snake, and generate different food
                // snake: kill the snake, end the game
                // none: dispatch({ type: "MOVE_SNAKE" })
                dispatch({ type: "MOVE_SNAKE" });
            } else {
                clearInterval(progressTimer);
            }
        }, 1000);
    }, [ inProgress ]);

    return (
        <></>
    )
};

let mapStateToProps = ( state ) => {
    let { inProgress, direction, snakeBody, snakeFood } = state.gameState;
    return { inProgress, direction, snakeBody, snakeFood };
}

export default connect(
    mapStateToProps,
    null,
)(Clock);
