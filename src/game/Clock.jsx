import React from 'react';
import { connect } from 'react-redux';

const Clock = ({ dispatch, inProgress }) => {

    React.useEffect(() => {
        const progressTimer = setInterval(function () {
            if( inProgress ){
                dispatch({ type: "MOVE_SNAKE" });
            }
        }, 750);
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
