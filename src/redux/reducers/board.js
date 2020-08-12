import { ROW_ADD, ROW_SUBTRACT, SQUARE_ADD, SQUARE_SUBTRACT, INCREASE_BOARD, DECREASE_BOARD } from '../actionTypes.js';

const initialState = {
    size    : 20,
    rows    : 10,
    squares : 10,
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case INCREASE_BOARD:
            return Object.assign({}, state, {
                size: ( state.size > 29 ? state.size : ++state.size )
            });
        case DECREASE_BOARD:
            return Object.assign({}, state, {
                size: ( state.size < 21 ? state.size : --state.size )
            });
        case ROW_ADD:
            return Object.assign({}, state, {
                rows: ( state.rows > 19 ? state.rows : ++state.rows )
            });
        case ROW_SUBTRACT:
            return Object.assign({}, state, {
                rows: ( state.rows < 11 ? state.rows : --state.rows )
            });
        case SQUARE_ADD:
            return Object.assign({}, state, {
                squares: ( state.squares > 19 ? state.squares : ++state.squares )
            });
        case SQUARE_SUBTRACT:
            return Object.assign({}, state, {
                squares: ( state.squares < 11 ? state.squares : --state.squares )
            });
        default:
            return Object.assign({}, state)
    }
};
