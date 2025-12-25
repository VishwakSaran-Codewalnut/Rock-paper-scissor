import Image from "next/image";

type GameViewImageProps = {
	image: string;
};

function GameViewImage({ image }: GameViewImageProps) {
	return (
		<Image
			alt="player"
			className="sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"
			height={100}
			priority
			quality={100}
			src={image}
			width={160}
		/>
	);
}

export default GameViewImage;
