import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, ticksElapsed, tickRate }) => {

    React.useEffect(() => {
        console.log('=== Clock.jsx mounted ===');
        console.log('Clock props: ', inProgress, ticksElapsed, tickRate);

        const progressTimer = setInterval(function(){
            inProgress ? dispatch({ type: "CLOCK_RUN" }) : clearInterval(progressTimer);
        }, tickRate)

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
