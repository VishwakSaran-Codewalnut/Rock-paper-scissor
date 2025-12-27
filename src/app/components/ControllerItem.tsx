import Image from "next/image";

type ControllerItemProps = {
  path: string;
  label: string;
  click: () => void;
};

function ControllerItem({ path, label, click }: ControllerItemProps) {
  return (
    <Image
      role="button"
      aria-label={label}
      onClick={click}
      src={path}
      width={100}
      height={100}
      alt="control"
      className="cursor-pointer sm:w-[120px] sm:h-[120px]"
    />
  );
}

export default ControllerItem;
