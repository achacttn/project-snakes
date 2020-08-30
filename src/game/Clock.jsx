import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, direction, snakeBody, snakeFood }) => {

    React.useEffect(() => {
        console.log('Clock component')
        const progressTimer = setInterval(function () {
            if ( inProgress ) {
                // detect collision type
                // food: move the snake, grow the snake, and generate different food
                // snake: kill the snake, end the game
                // none: dispatch({ type: "MOVE_SNAKE" })
                dispatch({ type: "MOVE_SNAKE" });
            }
        }, 1000);
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
