import Image from "next/image";

function QuestionImage() {
	return (
		<Image
			alt="question"
			className="sm:w-[90px] sm:h-[120px] md:w-[130px] md:h-[150px] lg:w-[150px] lg:h-[250p] mx-12 md:mx-16"
			height={80}
			src="/images/question1.png"
			width={80}
		/>
	);
}

export default QuestionImage;
