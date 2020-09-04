import React from 'react';
import { connect } from 'react-redux';
import style from './Row.module.css';
import Square from './Square.jsx';

const Row = ({ occupiedSquares, xFoodCoord, size, rowPos,  }) => {

    const generateSquares = () => {
        let squareContainer = [];
        for( let i=0; i<size; i++ ){
            squareContainer.push(
                <Square
                    key={i}
                    rowPos={rowPos}
                    squarePos={i}
                    snakeOccupied={ occupiedSquares&& occupiedSquares.indexOf(i) !== -1 ? true : false }
                    foodOccupied={( xFoodCoord !== undefined ) && xFoodCoord === i ? true : false}
                />
            )
        }
        return squareContainer;
    }

    return (
        <div className={style.RowContainer}>
            {
                generateSquares()
            }
        </div>
    )
};

let mapStateToProps = ( state ) => {
    let { size } = state.gameState;
    return { size };
}

export default connect(
    mapStateToProps,
    null,
)(Row);
