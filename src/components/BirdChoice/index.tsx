"use client";

import { IBird } from "@/interfaces/IBird";
import { useState } from "react";
import CardBird from "../CardBird";

export interface IBirdChoiceProps {
  setPlayer: (bird: IBird) => void;
  birdsPlaying: IBird[];
  playerNow?: IBird;
}

const BirdChoice: React.FC<IBirdChoiceProps> = ({
  setPlayer,
  birdsPlaying,
  playerNow
}) => {
  const [selectedBird, setSelectedBird] = useState<IBird | null>(null);

  const birds: IBird[] = [
    { id: "1", name: "Saí-Azul", urlImage: "https://casadospassaros.net/wp-content/uploads/2016/12/Sai-Azul-Macho.jpg" },
    { id: "2", name: "Ferreirinho-Relógio", urlImage: "https://inaturalist-open-data.s3.amazonaws.com/photos/177770532/medium.jpg" },
    { id: "3", name: "Verão", urlImage: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302049031/1800" },
    { id: "4", name: "Picapauzinho-de-Coleira", urlImage: "https://photoaves.com/wp-content/uploads/aves/picidae/picapauzinho-de-coleira.jpg" },
  ];

  const handleConfirmPlayer = () => {
    if (!selectedBird) return;
    setPlayer(selectedBird);
    setSelectedBird(null);
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-900 flex justify-center p-2">
        {`Jogador ${birdsPlaying.length + 1}`} - escolha seu pássaro
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 w-full">
        {birds.map(bird => (
          <CardBird
            key={bird.id}
            bird={bird}
            setSelectedBird={setSelectedBird}
            isSelected={selectedBird?.id === bird.id}
            playerSelected={birdsPlaying.findIndex(b => b.id === bird.id) + 1 || 0}
          />
        ))}
      </section>

      <button
        className={`mt-4 px-4 py-2 text-white rounded transition-colors cursor-pointer 
          ${selectedBird ? "bg-green-900 hover:bg-green-800" : "bg-gray-400 cursor-not-allowed"}`}
        onClick={handleConfirmPlayer}
        disabled={!selectedBird}
      >
        Confirmar
      </button>
    </div>
  );
};

export default BirdChoice;
