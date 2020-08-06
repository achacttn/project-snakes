import React from 'react';
import { connect } from 'react-redux';
import style from './ControlPanel.module.css';

const ControlPanel = ({ dispatch, rows, squares }) => {
    
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
                    Row count: { rows }
                </div>
                <div>
                    <button onClick={()=>dispatch({ type: "ROW_SUBTRACT" })}>-</button>
                    <button onClick={()=>dispatch({ type: "ROW_ADD" })}>+</button>
                </div>
            </div>
            <div>
                <div>
                    Square count: { squares }
                </div>
                <div>
                    <button onClick={()=>dispatch({ type: "SQUARE_SUBTRACT" })}>-</button>
                    <button onClick={()=>dispatch({ type: "SQUARE_ADD" })}>+</button>
                </div>
            </div>
            <div>
                Score:
            </div>
            <div>
                Tickrate:
            </div>
            <div>
                Play/Pause
            </div>
        </div>
    );
};

let mapStateToProps = ( state ) => {
    let { rows, squares } = state.board;
    return { rows, squares };
};

export default connect(
    mapStateToProps,
    null,
)(ControlPanel);
