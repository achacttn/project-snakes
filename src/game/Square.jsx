import React from 'react';
import style from './Square.module.css';

export default ({ rowPos, squarePos }) => {

    // React.useEffect(() => {
    //     console.log('=== Square component mounted ===');
    //     console.log('Square component props: ', rowPos, squarePos);
    // });

    const squareClickHandler = () => {
        console.log(`x:${rowPos}, y:${squarePos}`);
    }

    return (
        <div className={style.SquareContainer} onClick={squareClickHandler}>
            &nbsp;
        </div>
    )
};
