"use client";

import Image from "next/image";
import { useGameStore } from "../../store/useGameStore";
import QuestionImage from "./QuestionImage";

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
          <Image
            src={currentPlayerChoiceImage}
            alt="player"
            width={160}
            height={100}
            quality={100}
            priority
            className="sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"
          />
          <Image
            src={currentComputerChoiceImage}
            alt="computer"
            width={160}
            height={100}
            quality={100}
            priority
            className="sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"
          />
        </>
      )}
    </div>
  );
}

export default GameView;
