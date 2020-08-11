import React from 'react';
import { connect } from 'react-redux';
import style from './ControlPanel.module.css';

const ControlPanel = ({ dispatch, size, rows, squares }) => {
    
    React.useEffect(()=>{
        console.log('=== ControlPanel.jsx mounted ===');
    });
    
    return (
        <div className={style.ControlPanelContainer}>
            <div>
                <h2>Settings</h2>
            </div>
            <div>
                <div>
                    Size: { size }
                </div>
                <div>
                    <button onClick={()=>dispatch({ type: "INCREASE_BOARD" })}>+</button>
                    <button onClick={()=>dispatch({ type: "DECREASE_BOARD" })}>-</button>
                </div>
            </div>
            <div>
                Score: n/a
            </div>
            <div>
                Tickrate: n/a
            </div>
            <div>
                Play/Pause
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
