import {
    TOGGLE_PLAY,
    CLOCK_RUN,
    DIRECTION_UP,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_RIGHT,

    MATERIALIZE_SNAKE,
    MOVE_SNAKE,
    GENERATE_FOOD,
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
                ticksElapsed: state.ticksElapsed+1,
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
            let newPosition = [];
            switch( state.direction ){
                case "UP":
                    newPosition = state.snakeBody.map( ([ segmentX, segmentY ]) => [ segmentX, (20+segmentY-1)%20 ] );
                    return Object.assign({}, state, {
                        snakeBody: newPosition,
                        ticksElapsed: state.ticksElapsed+1,
                    });
                case "DOWN":
                    newPosition = state.snakeBody.map( ([ segmentX, segmentY ]) => [ segmentX, (segmentY+1)%20 ] );
                    return Object.assign({}, state, {
                        snakeBody: newPosition,
                        ticksElapsed: state.ticksElapsed+1,
                    });
                case "LEFT":
                    newPosition = state.snakeBody.map( ([ segmentX, segmentY ]) => [ (20+segmentX-1)%20, segmentY ] );
                    return Object.assign({}, state, {
                        snakeBody: newPosition,
                        ticksElapsed: state.ticksElapsed+1,
                    });
                case "RIGHT":
                    newPosition = state.snakeBody.map( ([ segmentX, segmentY ]) => [ (segmentX+1)%20, segmentY ] );
                    return Object.assign({}, state, {
                        snakeBody: newPosition,
                        ticksElapsed: state.ticksElapsed+1,
                    });
                default:
                    break;
            }
            break;
        case GENERATE_FOOD:
        default:
            return Object.assign({}, state);
    }
};
