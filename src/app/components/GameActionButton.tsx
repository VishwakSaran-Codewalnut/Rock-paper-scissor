import Image from "next/image";
import Button from "./Button";

type GameActionButtonProps = {
    iconPath: string;
    onActionClick: () => void;
};

function GameActionButton({ iconPath, onActionClick }: GameActionButtonProps) {
    return (
        <Button
            onClick={onActionClick}
            className="cursor-pointer sm:w-[120px] sm:h-[120px] p-0 border-none bg-transparent hover:bg-transparent"
            aria-label="Game Action"
            variant="ternary"
        >
            <Image
                src={iconPath}
                width={100}
                height={100}
                alt="Game Action"
                className="w-[100px] h-[100px]"
            />
        </Button>
    );
}

export default GameActionButton;
