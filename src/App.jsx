import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import React from 'react';
import style from './App.module.css';
import ControlPanel from './settings/ControlPanel.jsx';
import Clock from './game/Clock.jsx';
import Board from './game/Board.jsx';
import EndScreen from './game/EndScreen.jsx';
import Wrapper from './layout/Wrapper.jsx';

const App = ({ dispatch, finished, snakeHead, pathHistory }) => {

    const containerRef = React.useRef(null);

    const getDirectionCameFrom = () => {
        if( pathHistory[1] === undefined ){ return };
        let [ currentHeadX, currentHeadY ]      = snakeHead;
        let [ previousHeadX, previousHeadY ]    = pathHistory[1];
        let differenceX = currentHeadX - previousHeadX;
        let differenceY = currentHeadY - previousHeadY;
        let directionCameFrom;
        if( differenceX > 0 ){
            directionCameFrom = "LEFT";
            return directionCameFrom;
        }
        if( differenceX < 0 ){
            directionCameFrom = "RIGHT";
            return directionCameFrom;
        }
        if( differenceY > 0 ){
            directionCameFrom = "UP";
            return directionCameFrom;
        }
        if( differenceY < 0 ){
            directionCameFrom = "DOWN";
            return directionCameFrom;
        }
    }

    const keyPressHandler = event => {
        event.preventDefault();
        let previousDirection = getDirectionCameFrom();
        switch( event.keyCode ){
            case 37:
                if( previousDirection !== "LEFT" ){ dispatch({ type: "SET_DIRECTION", direction: "LEFT" })};
                return null;
            case 38:
                if( previousDirection !== "UP" ){ dispatch({ type: "SET_DIRECTION", direction: "UP" })}
                return null;
            case 39:
                if( previousDirection !== "RIGHT" ){ dispatch({ type: "SET_DIRECTION", direction: "RIGHT" })};
                return null;
            case 40:
                if( previousDirection !== "DOWN" ){ dispatch({ type: "SET_DIRECTION", direction: "DOWN" })};
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
                { finished ? <EndScreen/> : <Board/> }
            </div>
        </Wrapper>
    );
};

let mapStateToProps = ( state ) => {
    let { finished, snakeHead, pathHistory } = state.gameState;
    return { finished, snakeHead, pathHistory };
}

export default connect(
    mapStateToProps,
    null,
)(hot(module)(App));
