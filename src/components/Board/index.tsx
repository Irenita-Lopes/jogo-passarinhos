"use client";
import { IBird } from "@/interfaces/IBird";
import { useState } from "react";
import Image from "next/image";

export interface IBoardProps {
    birds: IBird[];
}

const Board: React.FC<IBoardProps> = ({ birds }) => {
    const [boardData, setBoardData] = useState<(IBird | null)[][]>([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    const handleClick = (rowIndex: number, colIndex: number) => {
       
        const birdToPlace = birds[0]; 
        const newBoardData = boardData.map((row, r) =>
            row.map((cell, c) =>
                r === rowIndex && c === colIndex ? birdToPlace : cell
            )
        );
        setBoardData(newBoardData);
    };

    return (
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
                                    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                                `}
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
    );
};

export default Board;
