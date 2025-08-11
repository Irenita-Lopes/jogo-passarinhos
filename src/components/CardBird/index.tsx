import { IBird } from "@/interfaces/IBird";
import Image from "next/image";

export interface ICardBirdProps {
    bird: IBird;
    setSelectedBird: (bird: IBird) => void;
    playerSelected: number;
    isSelected?: boolean; 
}

const CardBird: React.FC<ICardBirdProps> = ({ bird, setSelectedBird, playerSelected, isSelected }) => {
    return (
        <button
            onClick={() => setSelectedBird(bird)}
            className={`relative w-full h-full bg-blue-500 cursor-pointer border-4 transition-all
                ${isSelected ? "border-yellow-400 shadow-lg scale-105" : "border-transparent"}
                ${playerSelected ? "opacity-60 pointer-events-none" : ""}
            `}
        >
            <Image
                src={bird.urlImage}
                alt={bird.name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
            />
            <span className="text-white text-center w-full absolute bottom-2 left-0 bg-black bg-opacity-50">
                {bird.name}
            </span>

            {isSelected && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1 rounded">
                    Sua escolha
                </span>
            )}

            {playerSelected > 0 && (
                <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white font-bold px-2 py-1 rounded">
                    {`Jogador ${playerSelected}`}
                </span>
            )}
        </button>
    );
};

export default CardBird;
