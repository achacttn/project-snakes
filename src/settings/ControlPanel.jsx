import React from 'react';
import style from './ControlPanel.module.css';

export default ({ numOfRows, numOfSquares, rowHandler, squareHandler }) => {
    
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
                    Row count: { numOfRows }
                </div>
                <div>
                    <button onClick={()=>rowHandler("decrease")}>-</button>
                    <button onClick={()=>rowHandler("increase")}>+</button>
                </div>
            </div>
            <div>
                <div>
                    Square count: { numOfSquares }
                </div>
                <div>
                    <button onClick={()=>squareHandler("decrease")}>-</button>
                    <button onClick={()=>squareHandler("increase")}>+</button>
                </div>
            </div>
        </div>
    );
};
