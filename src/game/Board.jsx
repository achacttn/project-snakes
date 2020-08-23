import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ dispatch, size, inProgress, ticksElapsed, snakeBody }) => {

    const initializeSnake = async () => {
        try {
            let xCoord = await Math.floor( Math.random() * size );
            let yCoord = await Math.floor( Math.random() * size );
            await dispatch({ type: "MATERIALIZE_SNAKE", xCoord: xCoord, yCoord: yCoord });
        } catch (error) {
            console.log('Error in initializeSnake: ', error);
        }
    };

    const generateFood = () => {
        console.log('Food generated!');
    };

    const gameStartIndicator = async () => {
        try {
            if (inProgress === true && ticksElapsed === 0) {
                await initializeSnake();
                await generateFood();
            }
        } catch (error) {
            console.log('Error in gameStartIndicator: ', error);
        }
    };

    React.useEffect(() => {
        gameStartIndicator();
    }, [inProgress, ticksElapsed]);

    const generateRows = () => {
        console.log('Generating rows with snakeBody info: ', snakeBody);
        // 1. loop through snakeBody array to pass information about snake body containing rows
        // 2. only snakebody containing rows can check to see whether they have snakebody containing squares
        let rowContainer = [];
        for( let i=0; i<size; i++ ){
            rowContainer.push(
                <Row key={i} rowPos={i}/>
            )
        }
        return rowContainer;
    };

    return (
        <div className={style.BoardContainer}>
            <div className={style.BoardEdge}>
                <div className={style.GameBoard}>
                    { generateRows() }
                </div>
            </div>
        </div>
    )
};

let mapStateToProps = ( state ) => {
    let { size } = state.board;
    let { inProgress, ticksElapsed } = state.gameState;
    let { snakeBody } = state.dynamics;
    return { size, inProgress, ticksElapsed, snakeBody };
};

export default connect(
    mapStateToProps,
    null,
)(Board);

