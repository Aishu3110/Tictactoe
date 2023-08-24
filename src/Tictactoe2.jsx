import React, { useState, useEffect } from 'react';
import './Tictactoe.css'

const X = 'X';
const O = 'O';

const Tictactoe2 = () => {
    const [board, setBoard] = useState(Array(35).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    // console.log(board);
useEffect(() => {
    const storedBoard = JSON.parse(localStorage.getItem('ticTacToeBoard'));
    if (storedBoard) {
        setBoard(storedBoard);
    }
},[]);

    useEffect(() => {
        localStorage.setItem('ticTacToeBoard', JSON.stringify(board));
    }, [board]);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }

        const newBoard = board.slice();
        newBoard[index] = xIsNext ? X : O;
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23],
            [24, 25, 26, 27, 28, 29],
            [30, 31, 32, 33, 34, 35],
            [0, 6, 12, 18, 24, 30],
            [1, 7, 13, 19, 25, 31],
            [2, 8, 14, 20, 26, 32],
            [3, 9, 15, 21, 27, 33],
            [4, 10, 16, 22, 28, 34],
            [5, 11, 17, 23, 29, 35],
            [0, 7, 14, 21, 28, 35],
            [5, 10, 15, 20, 25, 30]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d, e , f] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c] &&
                squares[a] === squares[d] &&
                squares[a] === squares[e] &&
                squares[a] === squares[f]
            ) {
                return squares[a];
            }
        }

        return null;
    };
    const renderSquare = (index) => {
        return (
            <button className='square' onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    const winner = calculateWinner(board);
    const statuss = winner
        ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? X : O}`;

    return (
        // <API />
        <div className='game'><br />
        <div className='statuss'>{statuss}</div> <br />
            <div className='game-board'>
                
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                    {renderSquare(9)}
                    {renderSquare(10)}
                    {renderSquare(11)}
                </div>
                <div className='board-row'>
                    {renderSquare(12)}
                    {renderSquare(13)}
                    {renderSquare(14)}
                    {renderSquare(15)}
                    {renderSquare(16)}
                    {renderSquare(17)}
                </div>
                <div className='board-row'>
                    {renderSquare(18)}
                    {renderSquare(19)}
                    {renderSquare(20)}
                    {renderSquare(21)}
                    {renderSquare(22)}
                    {renderSquare(23)}
                </div>
                <div className='board-row'>
                    {renderSquare(24)}
                    {renderSquare(25)}
                    {renderSquare(26)}
                    {renderSquare(27)}
                    {renderSquare(28)}
                    {renderSquare(29)}
                </div>
                <div className='board-row'>
                    {renderSquare(30)}
                    {renderSquare(31)}
                    {renderSquare(32)}
                    {renderSquare(33)}
                    {renderSquare(34)}
                    {renderSquare(35)}
                </div>
            </div>
        </div>
    );
};

export default Tictactoe2;

