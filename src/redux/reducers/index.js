import { combineReducers } from "redux";
import board from './board.js';
import gameState from './gameState.js';

export default combineReducers({ board, gameState });
