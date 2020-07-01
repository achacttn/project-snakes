import { hot } from 'react-hot-loader';
import React from 'react';
import ControlPanel from './settings/ControlPanel.jsx';
import Board from './game/Board.jsx'
import style from './App.module.css';
import Wrapper from './layout/Wrapper.jsx';

const App = () => {

    const [ row, setRow ] = React.useState(10);
    
    return (
        <Wrapper>
            <div className={style.AppContainer}>
                <ControlPanel/>
                <Board/>
            </div>
        </Wrapper>
    );
};

export default hot(module)(App);
