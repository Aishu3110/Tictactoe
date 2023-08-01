import react from 'react';

const Tictac = () =>{
    return(
        <div className="main-content">
          <div className="head">TicTacToe</div>
          <div className="game-content">
              <button className='box' id='1'></button>
              <button className='box' id='2'></button>
              <button className='box' id='3'></button>
              <button className='box' id='4'></button>
              <button className='box' id='5'></button>
              <button className='box' id='6'></button>
              <button className='box' id='7'></button>
              <button className='box' id='8'></button>
              <button className='box' id='9'></button>
          </div>
          <div className='result'>
            <button>Play</button>
          </div>
      </div>
    );
}
export default Tictac;