import {
    TOGGLE_PLAY,
    CLOCK_RUN,
    DIRECTION_UP,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_RIGHT,

    MATERIALIZE_SNAKE,
    MOVE_SNAKE,
} from '../actionTypes.js';

const initialState = {
    inProgress      : false,
    ticksElapsed    : 0,
    tickRate        : 1000,
    score           : 0,
    direction       : "RIGHT",

    snakeBody       : [],
    snakeFood       : [],
};

export default ( state = initialState, action ) => {
    switch( action.type ){
        case TOGGLE_PLAY:
            return Object.assign({}, state, {
                inProgress: !state.inProgress
            });
        case CLOCK_RUN:
            return Object.assign({}, state, {
                ticksElapsed: ++state.ticksElapsed,
            });
        case DIRECTION_UP:
            return Object.assign({}, state, {
                direction: "UP",
            });
        case DIRECTION_DOWN:
            return Object.assign({}, state, {
                direction: "DOWN",
            });
        case DIRECTION_LEFT:
            return Object.assign({}, state, {
                direction: "LEFT",
            });
        case DIRECTION_RIGHT:
            return Object.assign({}, state, {
                direction: "RIGHT",
            });
        case MATERIALIZE_SNAKE:
            return Object.assign({}, state, {
                snakeBody: [[action.xCoord, action.yCoord]],
            });
        case MOVE_SNAKE:
            console.log('MOVE_SNAKE reducer snakeBody: ', state.snakeBody);
            let newPosition = [];
            for( let i=0; i<state.snakeBody.length; i++ ){
                let [ segmentX, segmentY ] = state.snakeBody[i];
                console.log('segmentX: ', segmentX, 'segmentY: ', segmentY);
                newPosition.push([ segmentX+1 % 19, segmentY ]);
            };
            console.log('gameState reducer, moving snake to: ', newPosition);
            return Object.assign({}, state, {
                snakeBody: newPosition,
                ticksElapsed: ++state.ticksElapsed,
            });
        default:
            return Object.assign({}, state);
    }
};
