import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, ticksElapsed, tickRate }) => {

    let intervalRef = React.useRef(null);
    intervalRef.current = inProgress;

    // React.useEffect(() => {
    //     // console.log('=== Clock.jsx mounted ===');
    //     const progressTimer = setInterval(function(){
    //         intervalRef.current ? 
    //         dispatch({ type: "MOVE_SNAKE" }) : clearInterval(progressTimer);
    //     // }, tickRate);
    //     }, 1000);
    // }, [inProgress]);

    React.useEffect(() => {
        const progressTimer = setInterval(function(){
            if( intervalRef.current ){
                dispatch({ type: "MOVE_SNAKE" })
            } else {
                clearInterval(progressTimer);
            }
        }, 1000);
    }, [ inProgress ]);

    return (
        <></>
    )
};

let mapStateToProps = ( state ) => {
    let { inProgress, ticksElapsed, tickRate } = state.gameState;
    return { inProgress, ticksElapsed, tickRate };
}

export default connect(
    mapStateToProps,
    null,
)(Clock);
