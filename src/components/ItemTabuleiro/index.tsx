import { IBird } from "@/interfaces/IBird";
import Image from "next/image";
import { useState } from "react";

export interface IItemTabuleiroProps {
    bird: IBird | null;
    onClick: (bird: IBird) => void;
    key: number;
}

const ItemTabuleiro: React.FC<IItemTabuleiroProps> = ({
    bird,
    onClick,
    key
}) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleClick = () => {
        if (bird) {
            onClick(bird);
        }
        setDisabled(true);
    };

    return (
        <button
            key={key}
            onClick={handleClick}
            disabled={disabled}
            className={`bg-green-900
            text-zinc-900 text-9xl
            flex
            items-center 
            justify-center
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}>
            {bird && (
                <Image
                    src={bird?.urlImage ?? ""}
                    alt={bird?.name ?? ""}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                />
            )}
        </button>
    );
}
export default ItemTabuleiro;