import react, { useState } from 'react';

const Tictac = () =>{
  const renderSquare = (index) => {
    return (
      <button className='square' onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };
    return(
        <div className="main-content">
          <div className="head">TicTacToe</div>
          <div className='status'>{status}</div>
          <div className="game-content" >
              <button {renderSquare(1)} className='box' id='1'></button>
              <button {renderSquare(2)} className='box' id='2'></button>
              <button {renderSquare(3)} className='box' id='3'></button>
              <button {renderSquare(4)} className='box' id='4'></button>
              <button {renderSquare(5)} className='box' id='5'></button>
              <button {renderSquare(6)} className='box' id='6'></button>
              <button {renderSquare(7)} className='box' id='7'></button>
              <button {renderSquare(8)} className='box' id='8'></button>
              <button {renderSquare(9)} className='box' id='9'></button>
          </div>
          <div className='result'>
            <button>Play</button>
          </div>
      </div> 
    );
}
export default Tictac;