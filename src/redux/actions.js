import {
    ROW_ADD,
    ROW_SUBTRACT,
    SQUARE_ADD,
    SQUARE_SUBTRACT,
    INCREASE_BOARD,
    DECREASE_BOARD,
    TOGGLE_PLAY,
    CLOCK_RUN,
    CLOCK_STOP,
} from './actionTypes.js';

let actionId = 0;

export const addRow = () => ({
    type: ROW_ADD,
    payload: {
        id: ++actionId,
    }
});

export const subtractRow = () => ({
    type: ROW_SUBTRACT,
    payload: {
        id: ++actionId,
    }
});

export const addSquare = () => ({
    type: SQUARE_ADD,
    payload: {
        id: ++actionId,
    }
});

export const subtractSquare = () => ({
    type: SQUARE_SUBTRACT,
    payload: {
        id: ++actionId,
    }
});

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

export const clockStop = () => ({
    type: CLOCK_STOP,
    payload: {
        id: ++actionId,
    }
});
