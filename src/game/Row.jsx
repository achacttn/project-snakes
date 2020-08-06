import React from 'react';
import { connect } from 'react-redux';
import style from './Row.module.css';
import Square from './Square.jsx';

const Row = ({ squares, rowPos }) => {

    React.useEffect(()=>{
        console.log('=== Row component mounted ===');
    });

    const generateSquares = () => {
        let squareContainer = [];
        for( let i=0; i<squares; i++ ){
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
    let { rows, squares } = state.board;
    return { rows, squares };
}

export default connect(
    mapStateToProps,
    null,
)(Row);
