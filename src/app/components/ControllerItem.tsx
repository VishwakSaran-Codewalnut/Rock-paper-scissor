import Image from "next/image";

type ControllerItemProps = {
  iconPath: string;
  ariaLabel: string;
  onClick: () => void;
};

function ControllerItem({ iconPath, ariaLabel, onClick }: ControllerItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="cursor-pointer transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
    >
      <Image
        src={iconPath}
        width={100}
        height={100}
        alt=""
        className="sm:w-[120px] sm:h-[120px]"
      />
    </button>
  );
}

export default ControllerItem;
