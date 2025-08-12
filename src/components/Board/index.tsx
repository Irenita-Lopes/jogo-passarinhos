"use client";

import { IBird } from "@/interfaces/IBird";
import { useState } from "react";
import Image from "next/image";

export interface IBoardProps {
  birds: IBird[]; 
}

const Board: React.FC<IBoardProps> = ({ birds }) => {
  const [boardData, setBoardData] = useState<(IBird | null)[][]>(
    Array(3).fill(null).map(() => Array(3).fill(null))
  );

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
      <p className="text-lg font-semibold mb-2 text-white">
        Turno de: <span className="text-yellow-300">{birds[currentPlayerIndex].name}</span>
      </p>

      <div className="grid grid-rows-3 gap-2 p-4 w-80 h-80 relative bg-blue-400">
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
