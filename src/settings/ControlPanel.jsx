import React from 'react';
import { connect } from 'react-redux';
import style from './ControlPanel.module.css';

const ControlPanel = ({ dispatch }) => {
    
    React.useEffect(()=>{
        console.log('=== ControlPanel.jsx mounted ===');
    });
    
    return (
        <div className={style.ControlPanelContainer}>
            <div>
                <h2>Control Panel</h2>
            </div>
            <div>
                <div>
                    Row count: number-of-rows-here
                </div>
                <div>
                    <button onClick={()=>dispatch({ type: "ROW_SUBTRACT" })}>-</button>
                    <button onClick={()=>dispatch({ type: "ROW_ADD" })}>+</button>
                </div>
            </div>
            <div>
                <div>
                    Square count: number-of-squares-here
                </div>
                <div>
                    <button onClick={()=>dispatch({ type: "SQUARE_SUBTRACT" })}>-</button>
                    <button onClick={()=>dispatch({ type: "SQUARE_ADD" })}>+</button>
            </div>
                </div>
        </div>
    );
};

export default connect(
    null,
    null,
)(ControlPanel);
