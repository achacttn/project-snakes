import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, direction, snakeBody, snakeFood }) => {

    let snakeBodyRef = React.useRef(null);
    snakeBodyRef.current = snakeBody;
    let snakeFoodRef = React.useRef(null);
    snakeFoodRef.current = snakeFood;
    let directionRef = React.useRef(null);
    directionRef.current = direction;

    // this should no longer have reliance on [ snakeBody ] and only [ inProgress ]
    // it should only progress clock tick
    // display current position
    // display potential next head position
    // dispatch action depending on whether potential head position collides with 1) food, 2) body, 3) nothing and dispatch accordingly
    React.useEffect(() => {
        const progressTimer = setInterval(function () {
            if( inProgress ){
                // console.log('Calculating next action')
                console.log('Current snakeHead from redux: ', snakeBody[0]);
                console.log('Current snakeHead from ref: ', snakeBodyRef.current[0]);
                // let [ snakeHeadX, snakeHeadY ] = snakeBodyRef.current[0];
                // let newSnakeHeadPosition = [];
                // switch( directionRef.current ){
                //     case "UP":
                //         newSnakeHeadPosition = [ snakeHeadX, ( 20+snakeHeadY-1 )%20 ];
                //     case "DOWN":
                //         newSnakeHeadPosition = [ snakeHeadX, ( snakeHeadY+1 )%20 ];
                //     case "LEFT":
                //         newSnakeHeadPosition = [ ( 20+snakeHeadX-1 )%20, snakeHeadY ];
                //     case "RIGHT":
                //         newSnakeHeadPosition = [ ( snakeHeadX+1 )%20, snakeHeadY ];
                //     default:
                //         break;
                // }
                // console.log('new head position: ', newSnakeHeadPosition)
                // if( newSnakeHeadPosition[0] === snakeFood[0] && newSnakeHeadPosition[1] && snakeFood[1] ){
                //     console.log('FOOD COLLISION!')
                // }
                // detect collision type
                // food: move the snake, grow the snake, and generate different food
                // snake: kill the snake, end the game
                // none: dispatch({ type: "MOVE_SNAKE" })
                dispatch({ type: "MOVE_SNAKE" });
            }
        }, 1000);
        return () => clearInterval(progressTimer);
    }, [ inProgress, snakeBody ]);

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
