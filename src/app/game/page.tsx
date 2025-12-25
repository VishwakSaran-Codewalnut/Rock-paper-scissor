"use client";

import { useEffect } from "react";
import ScoreBoard from "../components/ScoreBoard";
import Round from "../components/Round";
import GameView from "../components/GameView";
import ThemeToggleButton from "../components/ThemeToggleButton";
import GameResetButton from "../components/GameResetButton";
import GameControls from "../components/GameControls";
import { getRandomComputerMove } from "../../../utils/getRandomComputerMove";
import WinCelebration from "../components/WinCelebration";
import { useGameStore } from "../../store/useGameStore";

function GamePage() {
	const {
		currentPlayerChoice,
		currentComputerChoice,
		currentRoundNumber,
		setComputerChoiceImage,
		setComputerChoice,
		incrementRound,
		incrementDraws,
		incrementPlayerScore,
		incrementComputerScore,
	} = useGameStore();

	// handle pc Move after user clicked on controller button
	const handleComputerMove = () => {
		const { title, image } = getRandomComputerMove();
		// set in state
		setComputerChoiceImage(image);
		setComputerChoice(title);
		incrementRound();
	};

	// point the winner after each round
	const determineWinner = (user: string, pc: string) => {
		// check equal user and pc
		if (user === pc) {
			return incrementDraws();
		}

		// condition for win the user
		// and else pc is winner
		if (
			(user === "rock" && pc === "scissor") ||
			(user === "paper" && pc === "rock") ||
			(user === "scissor" && pc === "paper")
		) {
			return incrementPlayerScore();
		}

		return incrementComputerScore();
	};

	// every change user and pc selection call determineWinner function
	useEffect(() => {
		if (currentPlayerChoice && currentComputerChoice) {
			determineWinner(currentPlayerChoice, currentComputerChoice);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRoundNumber]);

	return (
		<div className="w-full min-h-screen bg-primary flex flex-col select-none relative">
			<ScoreBoard />
			<Round currentRoundNumber={currentRoundNumber} />
			<GameView />
			<GameControls onComputerMove={handleComputerMove} />
			<ThemeToggleButton />
			<GameResetButton />
			<WinCelebration />
		</div>
	);
}

export default GamePage;
