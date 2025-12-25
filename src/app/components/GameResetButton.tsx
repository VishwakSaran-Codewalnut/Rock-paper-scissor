"use client";

import { ResetIcon } from "./icons/Icons";

import { useGameStore } from "../../store/useGameStore";
import { resetSound } from "../../../utils/audio/GameAudio";

function GameResetButton() {
	const { resetGame } = useGameStore();

	const resetGameHandler = () => {
		resetGame();
		resetSound.play();
	};

	return (
		<div className="flex flex-col md:flex-row gap-2 md:gap-4 absolute md:left-8 md:top-8 top-48 left-8 z-10">
			<button
				type="button"
				onClick={resetGameHandler}
				className="flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-3xl bg-zinc-600 cursor-pointer"
				aria-label="Reset Game"
			>
				<ResetIcon className="absolute w-6 md:w-8 h-6 md:h-8 stroke-white" />
			</button>
		</div>
	);
}

export default GameResetButton;
