import {
    INCREASE_BOARD,
    DECREASE_BOARD,
    TOGGLE_PLAY,
    CLOCK_RUN,
    CREATE_SNAKE_HEAD,
    MOVE_SNAKE_HEAD,
    EAT_FOOD,
    GENERATE_FOOD,
    ADD_MOVEMENT_HISTORY,
    SET_DIRECTION,
    END_GAME,
} from '../actionTypes.js';

const initialState = {
    size            : 20,
    inProgress      : false,
    ticksElapsed    : 0,
    tickRate        : 1000,
    score           : 0,
    direction       : "RIGHT",
    pathHistory     : [],

    snakeHead       : [],
    snakeBody       : [],
    snakeFood       : [],

    finished        : false,
};

export default ( state = initialState, action ) => {
    switch( action.type ){
        case INCREASE_BOARD:
            return Object.assign({}, state, {
                size: ( state.size > 29 ? state.size : state.size+1 )
            });
        case DECREASE_BOARD:
            return Object.assign({}, state, {
                size: ( state.size < 21 ? state.size : state.size-1 )
            });
        case TOGGLE_PLAY:
            return Object.assign({}, state, {
                inProgress: !state.inProgress
            });
        case CLOCK_RUN:
            return Object.assign({}, state, {
                ticksElapsed: state.ticksElapsed+1,
            });
        case SET_DIRECTION:
            return Object.assign({}, state, {
                direction: action.direction,
            });
        case CREATE_SNAKE_HEAD:
            let snakeHeadCoords = [ action.xCoord, action.yCoord ];
            return Object.assign({}, state, {
                snakeHead   : snakeHeadCoords,
                pathHistory : [ snakeHeadCoords, ...state.pathHistory ],
            });
        case MOVE_SNAKE_HEAD:
            let [ currentHeadX, currentHeadY ] = state.snakeHead;
            let newHeadPosition = [];
            let newPathHistory  = [];
            switch( state.direction ){
                case "UP":
                    newHeadPosition = [ currentHeadX, ( state.size+currentHeadY-1 )%state.size ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                case "DOWN":
                    newHeadPosition = [ currentHeadX, ( currentHeadY+1 )%state.size ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                case "LEFT":
                    newHeadPosition = [ ( state.size+currentHeadX-1 )%state.size, currentHeadY ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                case "RIGHT":
                    newHeadPosition = [ ( currentHeadX+1 )%state.size, currentHeadY ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                default:
                    break;
            }
        case GENERATE_FOOD:
            return Object.assign({}, state, {
                snakeFood: [action.foodX, action.foodY]
            });
        case EAT_FOOD:
            return Object.assign({}, state, {
                snakeFood: [],
                score: state.score + 1,
        });
        case ADD_MOVEMENT_HISTORY:
            return Object.assign({}, state, {
                pathHistory: [ action.pathHistory, ...state.pathHistory ],
            });
        case END_GAME:
            return Object.assign({}, state, {
                inProgress  : false,
                finished    : true,
            });
        default:
            return Object.assign({}, state);
    }
};
