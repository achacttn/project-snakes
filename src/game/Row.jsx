import React from 'react';
import { connect } from 'react-redux';
import style from './Row.module.css';
import Square from './Square.jsx';

const Row = ({ size, rowPos, snakeBody }) => {

    // let [ xCoord, yCoord ] = snakeBody[0];

    React.useEffect(()=>{
        // console.log('=== Row component mounted ===');
        // console.log('snakeBody props: ', snakeBody);
    });

    const generateSquares = () => {
        let squareContainer = [];
        for( let i=0; i<size; i++ ){
            squareContainer.push(<Square key={i} rowPos={rowPos} squarePos={i}/>)
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
    let { snakeBody } = state.dynamics;
    return { size, snakeBody };
}

export default connect(
    mapStateToProps,
    null,
)(Row);
