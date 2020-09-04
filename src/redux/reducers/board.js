// import {
//     INCREASE_BOARD,
//     DECREASE_BOARD,
// } from '../actionTypes.js';

// const initialState = {
//     size        : 20,
// };

// export default ( state = initialState, action ) => {
//     switch( action.type ){
//         case INCREASE_BOARD:
//             return Object.assign({}, state, {
//                 size: ( state.size > 29 ? state.size : state.size+1 )
//             });
//         case DECREASE_BOARD:
//             return Object.assign({}, state, {
//                 size: ( state.size < 21 ? state.size : state.size-1 )
//             });
//         default:
//             return Object.assign({}, state);
//     }
// };
