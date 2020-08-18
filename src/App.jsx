import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import React from 'react';
import ControlPanel from './settings/ControlPanel.jsx';
import Clock from './game/Clock.jsx';
import Board from './game/Board.jsx'
import style from './App.module.css';
import Wrapper from './layout/Wrapper.jsx';

const App = ({ inProgress, ticksElapsed }) => {

    // const gameStartIndicator = () => {
    //     if( inProgress === true && ticksElapsed === 0 ){
    //         console.log('Game has JUST started');
    //     } else {
    //         console.log('Game has NOT just started');
    //     }
    // }

    // React.useEffect(() => {
    //     gameStartIndicator();
    // });

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

let mapStateToProps = ( state ) => {
    let { inProgress, ticksElapsed } = state.gameState;
    return { inProgress, ticksElapsed };
}

export default connect(
    mapStateToProps,
    null,
)(hot(module)(App));
