"use client"
import BirdChoice from "@/components/BirdChoice";
import Board from "@/components/Board";
import { IBird } from "@/interfaces/IBird";
import { useEffect, useState } from "react";

export default function Home() {
  const [passarosJogando, setPassarosJogando] = useState<IBird[]>([]);
  const [showBirdChoice, setShowBirdChoice] = useState<boolean>(true);
  const [showBoard, setShowBoard] = useState<boolean>(false);

  useEffect(() => {
    if (passarosJogando.length === 2) {
      setShowBirdChoice(false);
      setShowBoard(true);
    }
  }, [passarosJogando]);

  const handleConfirmGamer = (bird: IBird) => {
    setPassarosJogando((oldBirds) => [...oldBirds, bird]);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-amber-300">
      <h1 className="text-4xl font-bold text-indigo-800 text-center p-4">
        Jogo dos Passarinhos
      </h1>
      {showBirdChoice && (
        <BirdChoice
          setGamer={handleConfirmGamer}
          player={`Jogador ${passarosJogando.length + 1}`}
        />
      )}
      {showBoard && <Board birds={passarosJogando} />}
    </div>
  );
}
