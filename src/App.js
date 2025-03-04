import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    function handleClick(index) {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(board);
    const status = winner ? `Ganador: ${winner}` : `Turno de: ${isXNext ? "X" : "O"}`;

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <div className="status">{status}</div>
            <div className="board">
                {board.map((value, index) => (
                    <button key={index} className="square" onClick={() => handleClick(index)}>
                        {value}
                    </button>
                ))}
            </div>
            <button className="reset" onClick={() => setBoard(Array(9).fill(null))}>Reiniciar</button>
            <style jsx>{`
        .game {
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .board {
          display: grid;
          grid-template-columns: repeat(3, 80px);
          gap: 5px;
          justify-content: center;
        }
        .square {
          width: 80px;
          height: 80px;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          background: white;
          border: 2px solid black;
          cursor: pointer;
        }
        .reset {
          margin-top: 10px;
          padding: 10px;
          font-size: 16px;
          background: #ff4444;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}
