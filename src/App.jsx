import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import React from 'react';
import ControlPanel from './settings/ControlPanel.jsx';
import Clock from './game/Clock.jsx';
import Board from './game/Board.jsx'
import style from './App.module.css';
import Wrapper from './layout/Wrapper.jsx';

const App = ({ inProgress, ticksElapsed }) => {

    const containerRef = React.useRef(null);

    const keyPressHandler = event => {
        event.preventDefault();
        console.log('keypress event: ', event);
        // check which property to use to detect up down left right
        // dispatch events to change direction
    };

    React.useEffect(() => {
        containerRef.current.focus();
    })

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
            <div className={style.AppContainer} onKeyDown={keyPressHandler} ref={containerRef} tabIndex={-1}>
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
