import React from 'react';
import style from './ControlPanel.module.css';

export default () => {
    
    const [ row, setRow ]       = React.useState(10);
    
    const [ column, setColumn ] = React.useState(10);
    
    return (
        <div className={style.ControlPanelContainer}>
            <div>
                <h2>Control Panel</h2>
            </div>
            <div>
                Row count: { row }
                <button onClick={()=>setRow( row + 1 )}>+</button>
                <button onClick={()=>setRow( row - 1 )}>-</button>
            </div>
            <div>
                Column count: { column }
                <button onClick={()=>setColumn( column + 1 )}>+</button>
                <button onClick={()=>setColumn( column - 1 )}>-</button>
            </div>
        </div>
    );
};
