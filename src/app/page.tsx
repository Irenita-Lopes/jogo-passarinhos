"use client";

import BirdChoice from "@/components/BirdChoice";
import Board from "@/components/Board";
import { IBird } from "@/interfaces/IBird";
import { useEffect, useState } from "react";

export default function Home() {
  const [birdsPlaying, setBirdsPlaying] = useState<IBird[]>([]);
  const [showBirdChoice, setShowBirdChoice] = useState(true);
  const [showBoard, setShowBoard] = useState(false);
  const [playerNow, setPlayerNow] = useState<IBird | null>(null);

  useEffect(() => {
    if (birdsPlaying.length === 2) {
      setShowBirdChoice(false);
      setShowBoard(true);
      setPlayerNow(birdsPlaying[0]);
    }
  }, [birdsPlaying]);

  const handleConfirmPlayer = (bird: IBird) => {
    setBirdsPlaying(prev => [...prev, bird]);
  };

  const handleRestart = () => {
    setBirdsPlaying([]);
    setShowBirdChoice(true);
    setShowBoard(false);
    setPlayerNow(null);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-green-900">
      <h1 className="text-4xl font-bold text-green-900 text-center p-10">
        Jogo dos Passarinhos
      </h1>

      {showBirdChoice && (
        <BirdChoice
          setPlayer={handleConfirmPlayer}
          birdsPlaying={birdsPlaying}
          playerNow={playerNow ?? undefined}
        />
      )}

      {showBoard && (
        <>
          <Board birds={birdsPlaying} />
          <button
            onClick={handleRestart}
            className={`bg-green-900 hover:bg-green-800" : "bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded mt-4 transition-colors`}
          >
            Reiniciar Jogo
          </button>
        </>
      )}
    </div>
  );
}
