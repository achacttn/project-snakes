import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ dispatch, size, inProgress, ticksElapsed, snakeBody, snakeFood, direction, pathHistory, snakeHead, score }) => {

    // React.useEffect(() => {
    //     console.log('=== PATH HISTORY ===');
    //     console.log(pathHistory);
    // })

    let snakeBodyRef = React.useRef(null);
    snakeBodyRef.current = snakeBody;
    let snakeFoodRef = React.useRef(null);
    snakeFoodRef.current = snakeFood;

    React.useEffect(() => {
        let [ snakeHeadX, snakeHeadY ] = snakeHead;
        let [ snakeFoodX, snakeFoodY ] = snakeFood;
        if( snakeHead.length !==0 ){
            if (snakeHeadX === snakeFoodX && snakeHeadY === snakeFoodY ){
                dispatch({ type: "EAT_FOOD" });
            }
        }
    })

    React.useEffect(() => {
        let currentSnakeHead = snakeBodyRef.current[0];
        if (snakeBodyRef.current.length !== 0) {
            if (currentSnakeHead[0] === snakeFoodRef.current[0] && currentSnakeHead[1] === snakeFoodRef.current[1]) {
                dispatch({ type: "EAT_FOOD" });
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
        if( inProgress && ( snakeFood.length === 0 ) ){
            let newFood = generateFood();
            dispatch({ type: "GENERATE_FOOD", foodX: newFood[0], foodY: newFood[1] })
        }
    });

    React.useEffect(() => {
        if( inProgress && ( ticksElapsed === 0 )){
            let coords = generateCoords();
            dispatch({ type: "CREATE_SNAKE_HEAD", ...coords });
        }
    }, [ inProgress ]);

    const generateRows = () => {
        let xSet    = new Set();
        let ySet    = new Set();
        let snakeBodyCoords = pathHistory.slice( 0, score+1 );
        for( let i=0; i<snakeBodyCoords.length; i++ ){
            xSet.add(snakeBodyCoords[i][0]);
            ySet.add(snakeBodyCoords[i][1]);
        }

        let occupiedSquareContainingRows = {};
        snakeBodyCoords.map( segment => {
            let [ segmentX, segmentY ] = segment;
            if( !occupiedSquareContainingRows.hasOwnProperty( segmentY )){
                occupiedSquareContainingRows[ segmentY ] = [];
            };
            occupiedSquareContainingRows[ segmentY ].push( segmentX );
        });

        let [ xFoodCoord, yFoodCoord ] = snakeFood;
        let rowContainer = [];
        for( let j=0; j<size; j++ ){
            rowContainer.push(
                <Row
                    key={j}
                    rowPos={j}
                    occupiedSquares={( occupiedSquareContainingRows.hasOwnProperty(j) ? occupiedSquareContainingRows[j] : null )}
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
    let { inProgress, ticksElapsed, snakeBody, snakeFood, direction, pathHistory, snakeHead, score } = state.gameState;
    return { size, inProgress, ticksElapsed, snakeBody, snakeFood, direction, pathHistory, snakeHead, score };
};

export default connect(
    mapStateToProps,
    null,
)(Board);

