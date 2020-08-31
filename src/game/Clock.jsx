import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, direction, snakeBody, snakeFood }) => {

    let snakeBodyRef = React.useRef(null);
    snakeBodyRef.current = snakeBody;
    let snakeFoodRef = React.useRef(null);
    snakeFoodRef.current = snakeFood;
    let directionRef = React.useRef(null);
    directionRef.current = direction;

    const getStats = () => {
        console.log('=== getStats ===');
        console.log('inProgress: ', inProgress);
        console.log('snakeBody: ', snakeBody);
        console.log('snakeFood: ', snakeFood);
    };

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
        // console.log('=== Clock.jsx ===');
        // getStats();
        console.log('current snakebody: ', snakeBodyRef.current);
        let currentSnakeHead = snakeBodyRef.current[0];
        let nextSnakeBody = getNextSnakeBody();
        console.log('next snakeBody: ', getNextSnakeBody());
        console.log('food position: ', snakeFoodRef.current);
        if( snakeBodyRef.current.length !== 0 ){
            if( currentSnakeHead[0] === snakeFoodRef.current[0] && currentSnakeHead[1] === snakeFoodRef.current[1] ){
                console.log('=== COLLISION IN PROGRESS ===');
            }
        }
        if( nextSnakeBody.length !== 0 ){
            let nextSnakeHead = nextSnakeBody[0];
            if( nextSnakeHead[0] === snakeFoodRef.current[0] && nextSnakeHead[1] === snakeFoodRef.current[1] ){
                console.log('=== IMMINENT COLLISION ===');
            }
        }
        // find when there is a collision event CURRENTLY with food
            // => new food & score
        // find when there is a collision event CURRENTLY with snake body
            // => end app
    });

    // this should no longer have reliance on [ snakeBody ] and only [ inProgress ]
    // it should only progress clock tick
    // display current position
    // display potential next head position
    // dispatch action depending on whether potential head position collides with 1) food, 2) body, 3) nothing and dispatch accordingly
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
