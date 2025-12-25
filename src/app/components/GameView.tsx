"use client";

import { useGameStore } from "../../store/useGameStore";
import QuestionImage from "./QuestionImage";
import GameViewImage from "./GameViewImage";

function GameView() {
  const {
    isPlayerSelecting,
    currentPlayerChoiceImage,
    currentComputerChoiceImage,
  } = useGameStore();

  return (
    <div className="w-full flex justify-between items-center mt-8 lg:mt-2">
      {isPlayerSelecting ? (
        <>
          <QuestionImage />
          <QuestionImage />
        </>
      ) : (
        <>
          <GameViewImage image={currentPlayerChoiceImage} />
          <GameViewImage image={currentComputerChoiceImage} />
        </>
      )}
    </div>
  );
}

export default GameView;
