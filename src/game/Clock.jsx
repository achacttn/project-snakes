import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, ticksElapsed, tickRate }) => {

    let intervalRef = React.useRef(null);
    intervalRef.current = inProgress;

    React.useEffect(() => {
        // console.log('=== Clock.jsx mounted ===');
        // console.log('inProgress outside setInterval closure: ', inProgress);
        
        const progressTimer = setInterval(function(){
            // console.log('inProgress inside setInterval closure: ', inProgress);
            intervalRef.current ? dispatch({ type: "CLOCK_RUN" }) : clearInterval(progressTimer);
        // }, tickRate);
        }, 2000);

    }, [inProgress]);

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
