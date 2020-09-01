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
    MOVE_SNAKE,
    GENERATE_FOOD,
    EAT_FOOD,
} from './actionTypes.js';

// let actionId = 0;

export const increaseBoard = () => ({
    type: INCREASE_BOARD,
    // payload: {
    //     id: ++actionId,
    // }
});

export const decreaseBoard = () => ({
    type: DECREASE_BOARD,
    // payload: {
    //     id: ++actionId,
    // }
});

export const materializeSnake = (xCoord, yCoord) => ({
    type: MATERIALIZE_SNAKE,
    payload: {
        // id      : ++actionId,
        xCoord  : xCoord,
        yCoord  : yCoord,
    },
});

export const togglePlay = () => ({
    type: TOGGLE_PLAY,
    // payload: {
    //     id: ++actionId,
    // }
});

export const clockRun = () => ({
    type: CLOCK_RUN,
    // payload: {
    //     id: ++actionId,
    // }
});

export const directionUp = () => ({
    type: DIRECTION_UP,
    // payload: {
    //     id: ++actionId,
    // }
});

export const directionDown = () => ({
    type: DIRECTION_DOWN,
    // payload: {
    //     id: ++actionId,
    // }
});

export const directionLeft = () => ({
    type: DIRECTION_LEFT,
    // payload: {
    //     id: ++actionId,
    // }
});

export const directionRight = () => ({
    type: DIRECTION_RIGHT,
    // payload: {
    //     id: ++actionId,
    // }
});

export const moveSnake = () => ({
    type: MOVE_SNAKE,
    // payload: {
    //     id: ++actionId,
    // }
});

export const generateFood = (foodX, foodY) => ({
    type: GENERATE_FOOD,
    payload: {
        // id      : ++actionId,
        foodX: foodX,
        foodY: foodY,
    }
});

export const eatFood = (foodX, foodY) => ({
    type: EAT_FOOD,
    payload: {
        foodX: foodX,
        foodY: foodY,
    }
});
