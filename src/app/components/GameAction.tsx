import Image from "next/image";

type GameActionProps = {
  iconPath: string;
  onActionClick: () => void;
};

function GameAction({ iconPath, onActionClick }: GameActionProps) {
  return (
    <Image
      onClick={onActionClick}
      src={iconPath}
      width={100}
      height={100}
      alt="Game Action"
      className="cursor-pointer sm:w-[120px] sm:h-[120px]"
    />
  );
}

export default GameAction;
