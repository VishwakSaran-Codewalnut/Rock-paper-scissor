"use client";

import { useRef } from "react";
import { useGameStore } from "../../store/useGameStore";
import { useCelebration } from "../../../utils/hooks/useCelebration";

function WinCelebration() {
	const { playerScore } = useGameStore();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useCelebration(canvasRef, playerScore);

	return (
		<div className="absolute w-[350px] md:w-[600px] h-screen mx-auto top-0 right-0 left-0 flex justify-center pointer-events-none">
			<canvas className="w-[350px] md:w-[500px]" height={500} ref={canvasRef} />
		</div>
	);
}

export default WinCelebration;
