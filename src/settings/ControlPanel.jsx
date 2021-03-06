import React from 'react';
import { connect } from 'react-redux';
import style from './ControlPanel.module.css';

const ControlPanel = ({ dispatch, size, inProgress, ticksElapsed, tickRate, direction, score }) => {

    return (
        <div className={style.ControlPanelContainer}>
            <div className={style.ControlPanelGridContainer}>
                <div className={style.GridScoreLabel}>Score</div>
                <div className={style.GridScoreValue}>{ score.toString() }</div>
                <div className={style.GridSizeLabel}>Board size</div>
                <div className={style.GridSizeValue}>{ size.toString() }</div>
                <div className={style.GridTickrateLabel}>Tickrate</div>
                <div className={style.GridTickrateValue}>{ tickRate.toString() } ms<sup>-1</sup></div>
                <div className={style.GridTimeElapsedLabel}>Time</div>
                <div className={style.GridTimeElapsedValue}>{ ticksElapsed.toString() }</div>
                <div className={style.GridDirectionLabel}>Direction</div>
                <div className={style.GridDirectionValue}>{ direction }</div>
                <div className={style.GridSizeButtons}>
                    <button onClick={() => dispatch({ type: "DECREASE_BOARD" })} disabled={true}>-</button>
                    <button onClick={() => dispatch({ type: "INCREASE_BOARD" })} disabled={true}>+</button>
                </div>
                <div className={style.GridStateButton}>
                    <button onClick={() => dispatch({ type: "TOGGLE_PLAY" })}>{( inProgress ? "Pause" : "Play" )}</button>
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = ( state ) => {
    let { size, inProgress, ticksElapsed, tickRate, direction, score } = state.gameState;
    return { size, inProgress, ticksElapsed, tickRate, direction, score };
};

export default connect(
    mapStateToProps,
    null,
)(ControlPanel);
