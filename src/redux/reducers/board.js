import {
    INCREASE_BOARD,
    DECREASE_BOARD,
    // MATERIALIZE_SNAKE,
} from '../actionTypes.js';

const initialState = {
    size        : 20,
    // snakeBody   : [],
    // snakeFood   : [],
};

export default ( state = initialState, action ) => {
    switch( action.type ){
        case INCREASE_BOARD:
            return Object.assign({}, state, {
                size: ( state.size > 29 ? state.size : ++state.size )
            });
        case DECREASE_BOARD:
            return Object.assign({}, state, {
                size: ( state.size < 21 ? state.size : --state.size )
            });
        // case MATERIALIZE_SNAKE:
        //     return Object.assign({}, state, {

        //     })
        default:
            return Object.assign({}, state);
    }
};
