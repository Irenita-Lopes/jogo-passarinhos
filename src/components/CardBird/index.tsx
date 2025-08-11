import { IBird } from "@/interfaces/IBird";
import Image from "next/image";

export interface ICardBirdProps {
    bird: IBird;
    setSelectedBird: (bird: IBird) => void;
}

const CardBird: React.FC<ICardBirdProps> = ({ bird, setSelectedBird }) => {
    return (
        <button
            onClick={() => setSelectedBird(bird)}
            className="w-[100%] h-[100%] bg-blue-500 cursor-pointer relative"
        >
            <Image
                src={bird.urlImage}
                alt={bird.name}
                width={200}
                height={200}
                className="object-cover w-50 h-50"
            />
            <span className="text-white text-center w-full absolute bottom-2 left-0 bg-black bg-opacity-50">{bird.name}</span>
        </button>
    );
}
export default CardBird;