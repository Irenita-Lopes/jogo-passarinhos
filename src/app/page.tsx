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

  return (
    <div className="flex min-h-screen flex-col items-center bg-amber-300">
      <h1 className="text-4xl font-bold text-indigo-800 text-center p-4">
        Jogo dos Passarinhos
      </h1>

      {showBirdChoice && (
        <BirdChoice
          setPlayer={handleConfirmPlayer}
          birdsPlaying={birdsPlaying}
          playerNow={playerNow ?? undefined}
        />
      )}

      {showBoard && <Board birds={birdsPlaying} />}
    </div>
  );
}
