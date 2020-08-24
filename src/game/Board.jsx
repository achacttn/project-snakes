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

    const generateFood = async () => {
        try {
            // 1. call coordinate generator (attempt)
            // 2. if intersection with snake body segment, generate again
            // 3. if no intersection, dispatch action
            let foodX = await Math.floor( Math.random() * size );
            let foodY = await Math.floor( Math.random() * size );
        } catch (error) {
            console.log('Error in generateFood: ', error);
        }
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
        let xSet    = new Set();
        let ySet    = new Set();
        for( let i=0; i<snakeBody.length; i++ ){
            xSet.add(snakeBody[i][0]);
            ySet.add(snakeBody[i][1]);
        }
        let rowContainer = [];
        for( let j=0; j<size; j++ ){
            rowContainer.push(
                <Row
                    key={j}
                    rowPos={j}
                    xSet={ySet && ySet.has(j) ? xSet : null}
                />
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
    let { inProgress, ticksElapsed, snakeBody } = state.gameState;
    return { size, inProgress, ticksElapsed, snakeBody };
};

export default connect(
    mapStateToProps,
    null,
)(Board);

