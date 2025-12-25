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

  const handleRockClick = () => {
    handlePlayerMove("rock", GAME_IMAGES.ROCK_USER);
  };

  const handleScissorClick = () => {
    handlePlayerMove("scissor", GAME_IMAGES.SCISSOR_USER);
  };

  const handlePaperClick = () => {
    handlePlayerMove("paper", GAME_IMAGES.PAPER_USER);
  };

  return (
    <div className="w-full mt-28 md:mt-12 absolute bottom-24 sm:bottom-16 md:bottom-10 flex gap-4 md:gap-8 items-center justify-center z-10">
      <GameAction onActionClick={handleRockClick} iconPath={GAME_IMAGES.ROCK_ICON} />
      <GameAction onActionClick={handlePaperClick} iconPath={GAME_IMAGES.PAPER_ICON} />
      <GameAction onActionClick={handleScissorClick} iconPath={GAME_IMAGES.SCISSOR_ICON} />
    </div>
  );
}

export default GameControls;
