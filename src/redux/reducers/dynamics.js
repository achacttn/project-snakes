import {
    MATERIALIZE_SNAKE,
} from '../actionTypes.js';

const initialState = {
    snakeBody   : [],
    snakeFood   : [],
};

export default ( state = initialState, action ) => {
    switch( action.type ){
        case MATERIALIZE_SNAKE:
            let coord = [ action.xCoord, action.yCoord ];
            return Object.assign({}, state, {
                snakeBody: [[action.xCoord, action.yCoord]],
            });
        default:
            return Object.assign({}, state);
    }
};
