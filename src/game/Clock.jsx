import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress }) => {
    
    React.useEffect(() => {
        const progressTimer = setInterval(() => {
            if( inProgress ){
                dispatch({ type: "MOVE_SNAKE_HEAD" });
            }
        }, 500);
        return () => clearInterval(progressTimer);
    }, [ inProgress ]);

    return (
        <></>
    )
};

let mapStateToProps = ( state ) => {
    let { inProgress } = state.gameState;
    return { inProgress };
}
export default connect(
    mapStateToProps,
    null,
)(Clock);
