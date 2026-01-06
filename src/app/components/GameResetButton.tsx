"use client";

import { ResetIcon } from "./icons/Icons";

import { useGameStore } from "../../store/useGameStore";
import { resetSound } from "../../../utils/audio/GameAudio";

import Button from "./Button";

function GameResetButton() {
	const { resetGame } = useGameStore();

	const resetGameHandler = () => {
		resetGame();
		resetSound.play();
	};

	return (
		<Button
			onClick={resetGameHandler}
			aria-label="Reset Game"
			variant="icon"
			leadingIcon={<ResetIcon className="w-6 md:w-8 h-6 md:h-8 stroke-white" />}
		/>
	);
}

export default GameResetButton;
