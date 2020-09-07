import React from 'react';
import { connect } from 'react-redux';
import style from './EndScreen.module.css';

const EndScreen = ({ score }) => {
    return (
        <div className={style.EndScreenContainer}>
            Game has ended! Your score is { score }
        </div>
    )
};

let mapStateToProps = ( state ) => {
    let { score } = state.gameState;
    return { score };
}

export default connect(
    mapStateToProps,
    null,
)(EndScreen);
