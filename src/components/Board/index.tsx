"use client";
import { IBird } from "@/interfaces/IBird";
import { useState } from "react";
import ItemTabuleiro from "../ItemTabuleiro";

export interface IBoardProps {
    birds: IBird[];
}

const Board: React.FC<IBoardProps> = ({ birds }) => {
    const [boardData, setBoardData] = useState<(IBird | null)[][]>([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    return (
        <div className="grid grid-rows-3 gap-2 p-4 w-80 h-80 relative bg-blue-400">
            {
                boardData.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-3 gap-2">
                        {row.map((cell, colIndex) => (
                            <ItemTabuleiro
                                key={colIndex}
                                bird={cell}
                                onClick={(bird) => {
                                    const newBoardData = [...boardData];
                                    newBoardData[rowIndex][colIndex] = bird;
                                    setBoardData(newBoardData);
                                }}
                            />
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default Board;