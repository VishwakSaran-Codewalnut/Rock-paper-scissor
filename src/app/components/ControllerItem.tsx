import Image from "next/image";

type ControllerItemProps = {
	path: string;
	click: () => void;
};

function ControllerItem({ path, click }: ControllerItemProps) {
	return (
		<Image
			alt="control"
			className="cursor-pointer sm:w-[120px] sm:h-[120px]"
			height={100}
			onClick={click}
			src={path}
			width={100}
		/>
	);
}

export default ControllerItem;
