"use client";

import { IBird } from "@/interfaces/IBird";
import { useState } from "react";
import CardBird from "../CardBird";

export interface IBirdChoiceProps {
    setGamer: (bird: IBird) => void;
    player: string;
}

const BirdChoice: React.FC<IBirdChoiceProps> = ({ setGamer, player }) => {

    const [selectedBird, setSelectedBird] = useState<IBird | null>(null);

    var birds: IBird[] = [
        { id: "1", name: "Saí-Azul", urlImage: "https://casadospassaros.net/wp-content/uploads/2016/12/Sai-Azul-Macho.jpg" },
        { id: "2", name: "Ferreirinho-Relógio", urlImage: "https://inaturalist-open-data.s3.amazonaws.com/photos/177770532/medium.jpg" },
        { id: "3", name: "Verão", urlImage: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302049031/1800" },
        { id: "4", name: "Picapauzinho-de-Coleira", urlImage: "https://photoaves.com/wp-content/uploads/aves/picidae/picapauzinho-de-coleira.jpg" },
    ];

    const handleConfirmGamer = () => {
        selectedBird && setGamer(selectedBird);
        birds = birds.filter((bird) => bird.id !== selectedBird?.id);
        setSelectedBird(null);
    };

    return (
        <div className="flex flex-col items-center mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 items-center flex justify-center p-2">
                {player}- escolha seu pássaro
            </h2>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-full">
                {birds.map((bird: IBird) => (
                    <CardBird
                        key={bird.id}
                        bird={bird}
                        setSelectedBird={setSelectedBird}
                    />
                ))}
            </section>
            <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer"
                onClick={handleConfirmGamer}>
                Confirmar
            </button>
        </div>
    );
}
export default BirdChoice;