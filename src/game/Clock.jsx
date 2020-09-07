import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress, tickRate }) => {
    
    React.useEffect(() => {
        const progressTimer = setInterval(() => {
            if( inProgress ){
                dispatch({ type: "MOVE_SNAKE_HEAD" });
            }
        }, tickRate );
        return () => clearInterval(progressTimer);
    }, [ inProgress ]);

    return (
        <></>
    )
};

let mapStateToProps = ( state ) => {
    let { inProgress, tickRate } = state.gameState;
    return { inProgress, tickRate };
}
export default connect(
    mapStateToProps,
    null,
)(Clock);
