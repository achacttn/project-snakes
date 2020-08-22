import {
    INCREASE_BOARD,
    DECREASE_BOARD,
    MATERIALIZE_SNAKE,
    TOGGLE_PLAY,
    CLOCK_RUN,
    DIRECTION_UP,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_RIGHT,
} from './actionTypes.js';

let actionId = 0;

export const increaseBoard = () => ({
    type: INCREASE_BOARD,
    payload: {
        id: ++actionId,
    }
});

export const decreaseBoard = () => ({
    type: DECREASE_BOARD,
    payload: {
        id: ++actionId,
    }
});

export const materializeSnake = (xCoordinate, yCoordinate) => ({
    type: MATERIALIZE_SNAKE,
    payload: {
        id      : ++actionId,
        xCoord  : xCoordinate,
        yCoord  : yCoordinate,
    },
});

export const togglePlay = () => ({
    type: TOGGLE_PLAY,
    payload: {
        id: ++actionId,
    }
});

export const clockRun = () => ({
    type: CLOCK_RUN,
    payload: {
        id: ++actionId,
    }
});

// export const clockStop = () => ({
//     type: CLOCK_STOP,
//     payload: {
//         id: ++actionId,
//     }
// });

export const directionUp = () => ({
    type: DIRECTION_UP,
    payload: {
        id: ++actionId,
    }
});

export const directionDown = () => ({
    type: DIRECTION_DOWN,
    payload: {
        id: ++actionId,
    }
});

export const directionLeft = () => ({
    type: DIRECTION_LEFT,
    payload: {
        id: ++actionId,
    }
});

export const directionRight = () => ({
    type: DIRECTION_RIGHT,
    payload: {
        id: ++actionId,
    }
});
