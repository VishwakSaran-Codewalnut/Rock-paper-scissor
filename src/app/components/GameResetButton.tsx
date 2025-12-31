"use client";

import { ResetIcon } from "./icons/Icons";

import { useGameStore } from "../../store/useGameStore";
import { resetSound } from "../../../utils/audio/GameAudio";

import CircularIconButton from "./CircularIconButton";

function GameResetButton() {
	const { resetGame } = useGameStore();

	const resetGameHandler = () => {
		resetGame();
		resetSound.play();
	};

	return (
		<CircularIconButton onClick={resetGameHandler} aria-label="Reset Game">
			<ResetIcon className="w-6 md:w-8 h-6 md:h-8 stroke-white" />
		</CircularIconButton>
	);
}

export default GameResetButton;
