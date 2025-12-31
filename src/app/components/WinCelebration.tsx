"use client";

import { useRef, useEffect, useState } from "react";
import { useGameStore } from "../../store/useGameStore";
import { winnerSound } from "../../../utils/audio/GameAudio";
import { useConfetti } from "../../../utils/hooks/useConfetti";

function WinCelebration() {
	const { playerScore } = useGameStore();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [shouldCelebrate, setShouldCelebrate] = useState(false);

	useConfetti(canvasRef, shouldCelebrate);

	useEffect(() => {
		if (playerScore > 0) {
			setShouldCelebrate(true);
			winnerSound.play();
			const timer = setTimeout(() => {
				setShouldCelebrate(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [playerScore]);

	return (
		<div className="absolute w-[350px] md:w-[600px] h-screen mx-auto top-0 right-0 left-0 flex justify-center pointer-events-none">
			<canvas className="w-[350px] md:w-[500px]" height={500} ref={canvasRef} />
		</div>
	);
}

export default WinCelebration;
