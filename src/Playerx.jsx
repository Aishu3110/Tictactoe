import React from 'react'

export default function Playerx(props) {
    const { status, handleClick, board, xIsNext } = props;
  const renderSquare = (index) => {
    return (
      <button
        disabled={xIsNext ? false : true}
        className="square"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };
  return (
    <>
    <h1>Player x</h1>
    <div className="game1">
      <div className="game1-board1">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
    </>
  )
}
