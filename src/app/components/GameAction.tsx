import Image from "next/image";

type GameActionProps = {
  iconPath: string;
  onActionClick: () => void;
};

function GameAction({ iconPath, onActionClick }: GameActionProps) {
  return (
    <button
      onClick={onActionClick}
      className="cursor-pointer sm:w-[120px] sm:h-[120px] p-0 border-none bg-transparent"
      aria-label="Game Action"
    >
      <Image
        src={iconPath}
        width={100}
        height={100}
        alt="Game Action"
        className="w-[100px] h-[100px]"
      />
    </button>
  );
}

export default GameAction;
