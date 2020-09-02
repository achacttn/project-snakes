import {
    TOGGLE_PLAY,
    CLOCK_RUN,
    DIRECTION_UP,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_RIGHT,

    MATERIALIZE_SNAKE,
    CREATE_SNAKE_HEAD,
    MOVE_SNAKE,
    MOVE_SNAKE_HEAD,
    GENERATE_FOOD,
    EAT_FOOD,
    ADD_MOVEMENT_HISTORY,
} from '../actionTypes.js';

const initialState = {
    inProgress      : false,
    ticksElapsed    : 0,
    tickRate        : 1000,
    score           : 0,
    direction       : "RIGHT",
    digesting       : 0,
    pathHistory     : [],

    snakeHead       : [],
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
        case CREATE_SNAKE_HEAD:
            let snakeHeadCoords = [ action.xCoord, action.yCoord ];
            return Object.assign({}, state, {
                snakeHead   : snakeHeadCoords,
                pathHistory : [ snakeHeadCoords, ...state.pathHistory ],
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
        case MOVE_SNAKE_HEAD:
            let [ currentHeadX, currentHeadY ] = state.snakeHead;
            let newHeadPosition = [];
            let newPathHistory  = [];
            switch( state.direction ){
                case "UP":
                    newHeadPosition = [ currentHeadX, ( 20+currentHeadY-1 )%20 ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                case "DOWN":
                    newHeadPosition = [ currentHeadX, ( currentHeadY+1 )%20 ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                case "LEFT":
                    newHeadPosition = [ ( 20+currentHeadX-1 )%20, currentHeadY ];
                    newPathHistory  = [ newHeadPosition, ...state.pathHistory ]
                    return Object.assign({}, state, {
                        snakeHead       : newHeadPosition,
                        pathHistory     : newPathHistory,
                        ticksElapsed    : state.ticksElapsed+1,
                    });
                case "RIGHT":
                    newHeadPosition = [ ( currentHeadX+1 )%20, currentHeadY ];
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
                score: state.score+1,
                digesting: state.digesting+1,
            });
        case ADD_MOVEMENT_HISTORY:
            return Object.assign({}, state, {
                pathHistory: [ action.pathHistory, ...state.pathHistory ],
            });
        default:
            return Object.assign({}, state);
    }
};
