import { GAME_IMAGES } from "./constants/gameConstants";

const computerMoves = [
  {
    title: "rock",
    image: GAME_IMAGES.ROCK_COMPUTER,
  },
  {
    title: "scissor",
    image: GAME_IMAGES.SCISSOR_COMPUTER,
  },
  {
    title: "paper",
    image: GAME_IMAGES.PAPER_COMPUTER,
  },
];

export const getRandomComputerMove = () => {
  const randomIndex = Math.floor(Math.random() * computerMoves.length);

  return {
    title: computerMoves[randomIndex].title,
    image: computerMoves[randomIndex].image,
  };
};
