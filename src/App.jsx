import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import React from 'react';
import ControlPanel from './settings/ControlPanel.jsx';
import Clock from './game/Clock.jsx';
import Board from './game/Board.jsx'
import style from './App.module.css';
import Wrapper from './layout/Wrapper.jsx';

const App = () => {

    React.useEffect(() => {
        console.log('=== App.jsx mounted ===');
        // console.log('App props: ', inProgress, ticksElapsed, tickRate);
    });

    return (
        <Wrapper>
            <div className={style.AppContainer}>
                <Clock/>
                <ControlPanel />
                <Board />
            </div>
        </Wrapper>
    );
};

// let mapStateToProps = ( state ) => {
//     let { inProgress, ticksElapsed, tickRate } = state.gameState;
//     return { inProgress, ticksElapsed, tickRate };
// }

export default connect(
    null,
    // mapStateToProps,
    null,
)(hot(module)(App));
