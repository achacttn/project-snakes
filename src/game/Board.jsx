import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ dispatch, size, inProgress, ticksElapsed }) => {

    const initializeSnake = async () => {
        try {
            let xCoord = await Math.floor( Math.random() * size );
            let yCoord = await Math.floor( Math.random() * size );
            console.log(`Initializing snake at x:${xCoord}, y:${yCoord}`);
            await dispatch({ type: "MATERIALIZE_SNAKE", x: xCoord, y: yCoord });
            // 1. fix dispatch
            // 2. visual indicator in Row.jsx or Square.jsx of snake-occupied space
        } catch (error) {
            console.log('Error in initializeSnake: ', error);
        }

    }

    const generateFood = () => {
        console.log('Food generated!');
    }

    const gameStartIndicator = async () => {
        try {
            if (inProgress === true && ticksElapsed === 0) {
                await initializeSnake();
                await generateFood();
            }
        } catch (error) {
            console.log('Error in gameStartIndicator: ', error);
        }
    }

    React.useEffect(() => {
        gameStartIndicator();
    }, [inProgress, ticksElapsed]);

    const generateRows = () => {
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
    return { size, inProgress, ticksElapsed };
};

export default connect(
    mapStateToProps,
    null,
)(Board);

