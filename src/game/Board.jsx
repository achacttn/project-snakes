import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ size, inProgress, ticksElapsed }) => {

    // 1. attach controls

    const gameStartIndicator = () => {
        if (inProgress === true && ticksElapsed === 0) {
            console.log('Game has JUST started');
            // 2. generateBody and Food
        } else {
            console.log('Game has NOT just started');
        }
    }

    // 3. Logic for snake growth

    React.useEffect(() => {
        gameStartIndicator();
    });

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
                    {
                        generateRows()
                    }
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
