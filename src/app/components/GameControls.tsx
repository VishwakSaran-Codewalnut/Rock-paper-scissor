"use client";

import { useGameStore } from "../../store/useGameStore";
import GameAction from "./GameAction";
import { GAME_IMAGES } from "../../../utils/constants/gameConstants";

type GameControlsProps = {
  onComputerMove: () => void;
};

function GameControls({ onComputerMove }: GameControlsProps) {
  const {
    setIsPlayerChoiceSelectionActive,
    setPlayerChoice,
    setPlayerChoiceImage,
  } = useGameStore();

  const handlePlayerMove = (choice: string, imagePath: string) => {
    setIsPlayerChoiceSelectionActive(true);
    setTimeout(() => {
      setPlayerChoice(choice);
      setPlayerChoiceImage(imagePath);
      onComputerMove();
      setIsPlayerChoiceSelectionActive(false);
    }, 1000);
  };

  const handleMoveClick = (move: "rock" | "scissors" | "paper") => {
    const images = {
      rock: GAME_IMAGES.ROCK_USER,
      scissors: GAME_IMAGES.SCISSOR_USER,
      paper: GAME_IMAGES.PAPER_USER,
    };

    handlePlayerMove(move, images[move]);
  };

  return (
    <div className="w-full mt-10 mb-10 flex gap-4 md:gap-8 items-center justify-center z-10">
      <GameAction
        onActionClick={() => handleMoveClick("rock")}
        iconPath={GAME_IMAGES.ROCK_ICON}
      />
      <GameAction
        onActionClick={() => handleMoveClick("paper")}
        iconPath={GAME_IMAGES.PAPER_ICON}
      />
      <GameAction
        onActionClick={() => handleMoveClick("scissors")}
        iconPath={GAME_IMAGES.SCISSOR_ICON}
      />
    </div>
  );
}

export default GameControls;
