import React from 'react';
import { connect } from 'react-redux';
import style from './Row.module.css';
import Square from './Square.jsx';

const Row = ({ xSet, size, rowPos, snakeBody }) => {

    // React.useEffect(()=>{
    //     console.log('=== Row component mounted ===');
    //     console.log(`Row ${rowPos} with xSet: `, xSet);
    // });

    const generateSquares = () => {
        let squareContainer = [];
        for( let i=0; i<size; i++ ){
            squareContainer.push(
                <Square
                    key={i}
                    rowPos={rowPos}
                    squarePos={i}
                    snakeOccupied={xSet && xSet.has(i) ? true : false}
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
    let { size } = state.board;
    let { snakeBody } = state.gameState;
    return { size, snakeBody };
}

export default connect(
    mapStateToProps,
    null,
)(Row);
