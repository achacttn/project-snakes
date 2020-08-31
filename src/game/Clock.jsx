import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, direction, snakeBody, snakeFood }) => {

    let snakeBodyRef = React.useRef(null);
    snakeBodyRef.current = snakeBody;
    let snakeFoodRef = React.useRef(null);
    snakeFoodRef.current = snakeFood;
    let directionRef = React.useRef(null);
    directionRef.current = direction;

    const getNextSnakeBody = () => {
        let newPosition = [];
        switch( direction ){
            case "UP":
                newPosition = snakeBodyRef.current.map( ([ segmentX, segmentY ]) => [ segmentX, ( 20+segmentY-1 )%20 ]);
                return newPosition;
            case "DOWN":
                newPosition = snakeBodyRef.current.map( ([ segmentX, segmentY ]) => [ segmentX, ( segmentY+1 )%20 ]);
                return newPosition;
            case "LEFT":
                newPosition = snakeBodyRef.current.map( ([ segmentX, segmentY ]) => [ ( 20+segmentX-1 )%20, segmentY ]);
                return newPosition;
            case "RIGHT":
                newPosition = snakeBodyRef.current.map( ([ segmentX, segmentY ]) => [ ( segmentX+1 )%20, segmentY ]);
                return newPosition;
            default:
                break;
        }
    }

    React.useEffect(() => {
        console.log('current snakebody: ', snakeBodyRef.current);
        let currentSnakeHead = snakeBodyRef.current[0];
        let nextSnakeBody = getNextSnakeBody();
        console.log('next snakeBody: ', getNextSnakeBody());
        console.log('food position: ', snakeFoodRef.current);
        if( snakeBodyRef.current.length !== 0 ){
            if( currentSnakeHead[0] === snakeFoodRef.current[0] && currentSnakeHead[1] === snakeFoodRef.current[1] ){
                console.log('=== COLLISION IN PROGRESS ===');
                // generate new food and update score here
            }
        }
        // if statement for detecting body collision
        // => end game
        if( nextSnakeBody.length !== 0 ){
            let nextSnakeHead = nextSnakeBody[0];
            if( nextSnakeHead[0] === snakeFoodRef.current[0] && nextSnakeHead[1] === snakeFoodRef.current[1] ){
                console.log('=== IMMINENT COLLISION ===');
            }
        }
    });

    React.useEffect(() => {
        const progressTimer = setInterval(function () {
            if( inProgress ){
                dispatch({ type: "MOVE_SNAKE" });
            }
        }, 500);
        return () => clearInterval(progressTimer);
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
