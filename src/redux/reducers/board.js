import { ROW_ADD, ROW_SUBTRACT, SQUARE_ADD, SQUARE_SUBTRACT } from '../actionTypes.js';

const initialState = {
    rows    : 10,
    squares : 10,
}

export default ( state = initialState, action ) => {
    console.log('Inside board.js reducer');
    switch (action.type) {
        case ROW_ADD:
        console.log('CASE ROW_ADD and state is: ', state);
        return Object.assign({}, state, {
            rows: ( state.rows > 19 ? state.rows : ++state.rows )
        })
        case ROW_SUBTRACT:
        return {
            ...state,
            rows: ( state.rows < 11 ? state.rows : --state.rows )
        }
        case SQUARE_ADD:
        return {
            ...state,
            squares: ( state.squares > 19 ? state.squares : ++state.squares )
        }
        case SQUARE_SUBTRACT:
        return {
            ...state,
            squares: ( state.squares < 11 ? state.squares : --state.squares )
        }
        default:
        return {
            ...state,
        };
    }
};
