import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ dispatch, size, inProgress, ticksElapsed, snakeBody, snakeFood, direction }) => {

    let snakeBodyRef = React.useRef(null);
    snakeBodyRef.current = snakeBody;
    let snakeFoodRef = React.useRef(null);
    snakeFoodRef.current = snakeFood;
    let directionRef = React.useRef(null);
    directionRef.current = direction;

    const getNextSnakeBody = () => {
        let newPosition = [];
        switch (direction) {
            case "UP":
                newPosition = snakeBodyRef.current.map(([segmentX, segmentY]) => [segmentX, (20 + segmentY - 1) % 20]);
                return newPosition;
            case "DOWN":
                newPosition = snakeBodyRef.current.map(([segmentX, segmentY]) => [segmentX, (segmentY + 1) % 20]);
                return newPosition;
            case "LEFT":
                newPosition = snakeBodyRef.current.map(([segmentX, segmentY]) => [(20 + segmentX - 1) % 20, segmentY]);
                return newPosition;
            case "RIGHT":
                newPosition = snakeBodyRef.current.map(([segmentX, segmentY]) => [(segmentX + 1) % 20, segmentY]);
                return newPosition;
            default:
                break;
        }
    }

    React.useEffect(() => {
        let currentSnakeHead = snakeBodyRef.current[0];
        let nextSnakeBody = getNextSnakeBody();
        if (snakeBodyRef.current.length !== 0) {
            if (currentSnakeHead[0] === snakeFoodRef.current[0] && currentSnakeHead[1] === snakeFoodRef.current[1]) {
                // console.log('=== COLLISION IN PROGRESS ===');
                // GROW FUNCTION
                dispatch({ type: "EAT_FOOD" });
            }
        }
        // if statement for detecting body collision
        // => end game
        if (nextSnakeBody.length !== 0) {
            let nextSnakeHead = nextSnakeBody[0];
            if (nextSnakeHead[0] === snakeFoodRef.current[0] && nextSnakeHead[1] === snakeFoodRef.current[1]) {
                // dispatch({ type: "EAT_FOOD" })
                console.log('=== IMMINENT COLLISION ===');
            }
        }
    });

    const generateCoords = () => {
        let xCoord = Math.floor( Math.random() * size );
        let yCoord = Math.floor( Math.random() * size );
        return { xCoord, yCoord };
    };

    const generateFood = () => {
        let newFood = Object.values(generateCoords());
        let snakeBodyHash = {};
        snakeBody.map(( segment, index ) => snakeBodyHash[segment] = index );
        while( snakeBodyHash.hasOwnProperty( newFood )){
            newFood = Object.values(generateCoords());
        }
        return newFood;
    };

    React.useEffect(() => {
        console.log('Hook to generate food');
        if( inProgress && ( snakeFood.length === 0 ) ){
            let newFood = generateFood();
            dispatch({ type: "GENERATE_FOOD", foodX: newFood[0], foodY: newFood[1] })
        }
    });

    React.useEffect(() => {
        console.log('Hook to materialize snake')
        if( inProgress && ( ticksElapsed === 0 )){
            let coords = generateCoords();
            dispatch({ type: "MATERIALIZE_SNAKE", ...coords });
        }
    }, [inProgress]);

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
                    xFoodCoord={( yFoodCoord !== undefined ) && yFoodCoord === j ? xFoodCoord : null}
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
    let { inProgress, ticksElapsed, snakeBody, snakeFood, direction } = state.gameState;
    return { size, inProgress, ticksElapsed, snakeBody, snakeFood, direction };
};

export default connect(
    mapStateToProps,
    null,
)(Board);

