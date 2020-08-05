import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ rows, squares }) => {

    React.useEffect(()=>{
        console.log('=== Board component mounted ===');
    });

    const generateSquares = () => {
        let squares = [];
        for( let i=0; i<squares; i++ ){
            squares.push(<span key={i}>Y</span>)
        }
        return squares
    }

    const generateRows = () => {
        let rowContainer = [];
        for( let j=0; j<rows; j++ ){
            rowContainer.push(
                <Row key={j}/>
            )
        }
        return rowContainer
    }

    return (
        <div className={style.BoardContainer}>
            <div>
                <h2>Board</h2>
            </div>
            <div>
                Rows: { rows }
            </div>
            <div>
                Squares: { squares }
            </div>
            <div>
                {
                    generateRows()
                }
            </div>
        </div>
    )
};

let mapStateToProps = ( state ) => {
    let { rows, squares } = state.board;
    return { rows, squares};
}

export default connect(
    mapStateToProps,
    null,
)(Board);
