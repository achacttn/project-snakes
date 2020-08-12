import React from 'react';
import { connect } from 'react-redux';
import style from './ControlPanel.module.css';

const ControlPanel = ({ dispatch, size, rows, squares }) => {
    
    React.useEffect(()=>{
        console.log('=== ControlPanel.jsx mounted ===');
    });
    
    return (
        <div className={style.ControlPanelContainer}>
            <div className={style.ControlPanelGridContainer}>
                <div className={style.GridScoreLabel}>Score</div>
                <div className={style.GridScoreValue}>score-value</div>
                <div className={style.GridSizeLabel}>Size</div>
                <div className={style.GridSizeValue}>{ size }</div>
                <div className={style.GridTickrateLabel}>Tickrate</div>
                <div className={style.GridTickrateValue}>tickrate-value</div>
                <div className={style.GridSizeButtons}>
                    <button onClick={() => dispatch({ type: "DECREASE_BOARD" })} disabled={true}>-</button>
                    <button onClick={() => dispatch({ type: "INCREASE_BOARD" })} disabled={true}>+</button>
                </div>
                <div className={style.GridStateButtons}>
                    <button disabled={true}>Play</button>
                    <button disabled={true}>Pause</button>
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = ( state ) => {
    let { size, rows, squares } = state.board;
    return { size, rows, squares };
};

export default connect(
    mapStateToProps,
    null,
)(ControlPanel);
