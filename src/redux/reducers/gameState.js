import { TOGGLE_PLAY } from '../actionTypes.js';

const initialState = {
    inProgress      : false,
    ticksElapsed    : 0,
    tickRate        : 0,
    score           : 0,
}

export default ( state = initialState, action ) => {
    switch( action.type ){
        case TOGGLE_PLAY:
            return Object.assign({}, state, {
                inProgress: !state.inProgress
            });
        default:
            return Object.assign({}, state);
    }
};
