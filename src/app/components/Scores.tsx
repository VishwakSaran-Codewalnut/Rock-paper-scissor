"use client";

import { useGameContext } from "../context/gameContext";
import ScoreBox from "./ScoreBox";

function Scores() {
	const { state } = useGameContext();
	const { gameTies, pcScore, userScore } = state;
	return (
		<div className="w-full flex py-6 px-8 justify-center items-center gap-6 md:gap-28">
			<ScoreBox
				score={userScore}
				scoreColor={
					userScore > pcScore
						? "text-green-500"
						: userScore === pcScore
							? "text-blue-500"
							: "text-red-500"
				}
				title="Win"
			/>
			<ScoreBox score={gameTies} scoreColor="text-zinc-800" title="Equal" />
			<ScoreBox
				score={pcScore}
				scoreColor={
					pcScore > userScore
						? "text-green-500"
						: userScore === pcScore
							? "text-blue-500"
							: "text-red-500"
				}
				title="Win"
			/>
		</div>
	);
}

export default Scores;
