"use client";

import { IBird } from "@/interfaces/IBird";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface IBoardProps {
  birds: IBird[]; 
}

const Board: React.FC<IBoardProps> = ({ birds }) => {
  const [boardData, setBoardData] = useState<(IBird | null)[][]>(
    Array(3).fill(null).map(() => Array(3).fill(null))
  );

useEffect(() => {

  const isBoardFull = (board: (IBird | null)[][]): boolean => {
    return board.every(row => row.every(cell => cell !== null));
  };

  const winner = checkWinner(boardData);

  if (winner) {
    setTimeout(() => {
      alert(`O jogador ${winner.name} venceu!`);
    }, 50);
  } else if (isBoardFull(boardData)) {
    setTimeout(() => {
      alert("Empate! O tabuleiro está cheio.");
    }, 50);
  }
}, [boardData]);

 const checkWinner = (board: (IBird | null)[][]): IBird | null => {
    
    for (const row of board) {
      if (row[0] && row.every(cell => cell?.id === row[0]?.id)) {
        return row[0];
      }
    }
    
    for (let col = 0; col < 3; col++) {
      if (board[0][col] && board.every(row => row[col]?.id === board[0][col]?.id)) {
        return board[0][col];
      }
    }
    
    if (
      board[0][0] &&
      board[0][0]?.id === board[1][1]?.id &&
      board[0][0]?.id === board[2][2]?.id
    ) {
      return board[0][0];
    }
    if (
      board[0][2] &&
      board[0][2]?.id === board[1][1]?.id &&
      board[0][2]?.id === board[2][0]?.id
    ) {
      return board[0][2];
    }

    return null; 
  };

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleClick = (rowIndex: number, colIndex: number) => {
    if (boardData[rowIndex][colIndex]) return;

    const birdToPlace = birds[currentPlayerIndex];

    const newBoardData = boardData.map((row, r) =>
      row.map((cell, c) => (r === rowIndex && c === colIndex ? birdToPlace : cell))
    );

    setBoardData(newBoardData);
    setCurrentPlayerIndex(prev => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold mb-2 text-green-900">
        Turno de: <span className="text-green-900">{birds[currentPlayerIndex].name}</span>
      </p>

      <div className="grid grid-rows-3 gap-2 p-4 w-100 h-100 relative bg-white">
        {boardData.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-3 gap-2">
            {row.map((cell, colIndex) => {
              const disabled = !!cell;
              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  disabled={disabled}
                  className={`bg-green-700 text-zinc-900 text-9xl flex items-center justify-center 
                    ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                >
                  {cell && (
                    <Image
                      src={cell.urlImage}
                      alt={cell.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
