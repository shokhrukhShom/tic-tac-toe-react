import Square from './Square.jsx'
import { useState } from 'react'


export default function Board () {
  
  //squares is array with 9 null value
  //e.g. squares = null, null, null, null, null, null, null, null, null;  
  const [squares, setSquare] = useState(Array(9).fill(null));
    
    //handClick function triggers when clicked on square
  function handleClick(i){
    // squares.slice() creates shallow copy of squares array to nextSquares
    const nextSquares = squares.slice()
    //for now, assigning 'X' to first array of next square 
    nextSquares[i] = "X";
    //updating w/ useState Hook setSquare to nextSquares array value
    setSquare(nextSquares);
  }
  
    return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
