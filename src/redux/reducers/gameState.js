import {
    TOGGLE_PLAY,
    CLOCK_RUN,
    DIRECTION_UP,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_RIGHT,
} from '../actionTypes.js';

const initialState = {
    inProgress      : false,
    ticksElapsed    : 0,
    tickRate        : 1000,
    score           : 0,
    direction       : "RIGHT",
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
        default:
            return Object.assign({}, state);
    }
};
