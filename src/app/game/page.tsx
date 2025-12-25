"use client";

import { randomPcMove } from "../../../utils/randomPcMove";
import BombAnimation from "../components/BombAnimation";
import Controller from "../components/Controller";
import GameView from "../components/GameView";
import ButtonBox from "../components/ResetButton";
import Round from "../components/Round";
import Scores from "../components/Scores";
import ToggleButton from "../components/ToggleButton";
import { useGameContext } from "../context/gameContext";

import { useEffect } from "react";

function GamePage() {
	const { state, dispatch } = useGameContext();

	// handle pc Move after user clicked on controller button
	const pcMoveHandler = () => {
		const { title, image } = randomPcMove();
		// set in state
		dispatch({ type: "SET_PC_IMAGE", payload: image });
		dispatch({ type: "SET_PC_SYMBOL", payload: title });
		dispatch({ type: "INCREMENT_ROUND" });
	};

	// point the winner after each round
	// every change user and pc selection call determineWinner function
	const { userSelect, pcSelect } = state;

	// every change user and pc selection call determineWinner function
	useEffect(() => {
		const determineWinner = (user: string, pc: string) => {
			// check equal user and pc
			if (user === pc) {
				return dispatch({ type: "INCREMENT_GAME_TIES" });
			}

			// condition for win the user
			// and else pc is winner
			if (
				(user === "rock" && pc === "scissor") ||
				(user === "paper" && pc === "rock") ||
				(user === "scissor" && pc === "paper")
			) {
				return dispatch({ type: "INCREMENT_USER_SCORE" });
			}

			return dispatch({ type: "INCREMENT_PC_SCORE" });
		};

		if (userSelect && pcSelect) {
			determineWinner(userSelect, pcSelect);
		}
	}, [userSelect, pcSelect, dispatch]);

	return (
		<div className="w-full min-h-screen bg-primary flex flex-col select-none relative">
			<Scores />
			<Round round={state.roundCounter} />
			<GameView />
			<Controller pcMove={pcMoveHandler} />
			<ToggleButton />
			<ButtonBox />
			<BombAnimation />
		</div>
	);
}

export default GamePage;
