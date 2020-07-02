import { hot } from 'react-hot-loader';
import React from 'react';
import ControlPanel from './settings/ControlPanel.jsx';
import Board from './game/Board.jsx'
import style from './App.module.css';
import Wrapper from './layout/Wrapper.jsx';

const App = () => {

    React.useEffect(() => {
        console.log('=== App.jsx mounted ===');
    });

    const [ row, setRow ]       = React.useState(10);

    const [ square, setSquare ] = React.useState(10);

    const manageRow = direction => {
        if( direction === "increase" && row < 20 ){
            setRow( row + 1 );
        }
        if( direction === "decrease" && row > 10 ){
            setRow( row - 1 );
        }
    }

    const manageSquares = direction => {
        if (direction === "increase" && square < 20) {
            setSquare( square + 1 );
        }
        if (direction === "decrease" && square > 10) {
            setSquare( square - 1 );
        }
    }

    return (
        <Wrapper>
            <div className={style.AppContainer}>
                <ControlPanel
                    numOfRows       ={ row }
                    numOfSquares    ={ square }
                    rowHandler      ={ manageRow }
                    squareHandler   ={ manageSquares }
                />
                <Board
                    numOfRows={row}
                    numOfSquares={square}
                />
            </div>
        </Wrapper>
    );
};

export default hot(module)(App);
