import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full flex flex-col gap-8 items-center justify-center min-h-screen bg-stone-200">
			<Image
				alt="banner"
				className="md:w-[400px]"
				height={300}
				src="/images/banner.png"
				width={300}
			/>
			<Link
				className="text-2xl font-light uppercase underline underline-offset-8 text-yellow-900"
				href="/game"
			>
				click me to start
			</Link>
		</main>
	);
}
