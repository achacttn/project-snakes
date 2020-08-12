import React from 'react';
import { connect } from "react-redux";
import style from './Board.module.css';
import Row from './Row.jsx';

const Board = ({ size }) => {

    React.useEffect(()=>{
        console.log('=== Board component mounted ===');
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
    return { size };
};

export default connect(
    mapStateToProps,
    null,
)(Board);
