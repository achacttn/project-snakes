import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ dispatch, size, inProgress, ticksElapsed, snakeBody, snakeFood }) => {

    const generateCoords = () => {
        let xCoord = Math.floor( Math.random() * size );
        let yCoord = Math.floor( Math.random() * size );
        return { xCoord, yCoord };
    };

    React.useEffect(() => {
        if( inProgress && ( snakeFood.length === 0 )){
            let newFood = Object.values(generateCoords());
            let snakeBodyHash = {};
            snakeBody.map(( segment, index ) => snakeBodyHash[segment] = index);
            while( snakeBodyHash.hasOwnProperty(newFood) ){
                newFood = Object.values(generateCoords());
            }
            dispatch({ type: "GENERATE_FOOD", foodX: newFood[0], foodY: newFood[1] });
        }
    }, [ticksElapsed, snakeFood, snakeBody]);

    React.useEffect(() => {
        if( inProgress && ( ticksElapsed === 0 )){
            let coords = generateCoords();
            dispatch({ type: "MATERIALIZE_SNAKE", ...coords });
        }
    }, [inProgress, ticksElapsed]);

    const generateRows = () => {
        let xSet    = new Set();
        let ySet    = new Set();
        for( let i=0; i<snakeBody.length; i++ ){
            xSet.add(snakeBody[i][0]);
            ySet.add(snakeBody[i][1]);
        }
        let [ xFoodCoord, yFoodCoord ] = snakeFood;
        let rowContainer = [];
        for( let j=0; j<size; j++ ){
            rowContainer.push(
                <Row
                    key={j}
                    rowPos={j}
                    xSet={ySet && ySet.has(j) ? xSet : null}
                    xFoodCoord={yFoodCoord && yFoodCoord === j ? xFoodCoord : null}
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
    let { inProgress, ticksElapsed, snakeBody, snakeFood } = state.gameState;
    return { size, inProgress, ticksElapsed, snakeBody, snakeFood };
};

export default connect(
    mapStateToProps,
    null,
)(Board);

