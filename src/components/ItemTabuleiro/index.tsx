import { IBird } from "@/interfaces/IBird";
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
            onClick={handleClick}
            disabled={disabled}
            className={`bg-green-700
            text-zinc-900 text-9xl
            flex
            items-center 
            justify-center
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}>
        </button>
    );
}
export default ItemTabuleiro;