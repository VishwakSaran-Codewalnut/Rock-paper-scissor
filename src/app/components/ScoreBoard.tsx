"use client";

import { useGameStore } from "../../store/useGameStore";
import ScoreBox from "./ScoreBox";

function ScoreBoard() {
  const { totalDraws, computerScore, playerScore } = useGameStore();
  return (
    <div className="w-full flex py-6 px-8 justify-center items-center gap-6 md:gap-28">
      <ScoreBox
        title="Win"
        score={playerScore}
        scoreColor={
          playerScore > computerScore
            ? "text-green-500"
            : playerScore === computerScore
              ? "text-blue-500"
              : "text-red-500"
        }
      />
      <ScoreBox title="Equal" score={totalDraws} scoreColor="text-zinc-800" />
      <ScoreBox
        title="Win"
        score={computerScore}
        scoreColor={
          computerScore > playerScore
            ? "text-green-500"
            : playerScore === computerScore
              ? "text-blue-500"
              : "text-red-500"
        }
      />
    </div>
  );
}

export default ScoreBoard;
