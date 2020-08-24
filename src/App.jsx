import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import React from 'react';
import ControlPanel from './settings/ControlPanel.jsx';
import Clock from './game/Clock.jsx';
import Board from './game/Board.jsx'
import style from './App.module.css';
import Wrapper from './layout/Wrapper.jsx';

const App = ({ dispatch, inProgress, ticksElapsed, direction }) => {

    const containerRef = React.useRef(null);

    const keyPressHandler = event => {
        event.preventDefault();
        switch( event.keyCode ){
            case 37:
                if( direction !== "RIGHT" ){ dispatch({ type: "DIRECTION_LEFT" })};
                return null;
            case 38:
                if( direction !== "DOWN" ){ dispatch({ type: "DIRECTION_UP" })}
                return null;
            case 39:
                if( direction !== "LEFT" ){ dispatch({ type: "DIRECTION_RIGHT" })};
                return null;
            case 40:
                if( direction !== "UP" ){ dispatch({ type: "DIRECTION_DOWN" })};
                return null;
            default:
                break;
        }
    };

    React.useEffect(() => {
        containerRef.current.focus();
    });

    return (
        <Wrapper>
            <div className={style.AppContainer} onKeyDown={keyPressHandler} ref={containerRef} tabIndex={-1}>
                <Clock />
                <ControlPanel />
                <Board />
            </div>
        </Wrapper>
    );
};

let mapStateToProps = ( state ) => {
    let { inProgress, ticksElapsed, direction } = state.gameState;
    return { inProgress, ticksElapsed, direction };
}

export default connect(
    mapStateToProps,
    null,
)(hot(module)(App));
