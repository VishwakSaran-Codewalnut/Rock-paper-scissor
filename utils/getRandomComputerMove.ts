import { COMPUTER_MOVES } from "./constants/gameConstants";

export const getRandomComputerMove = () => {
  const randomIndex = Math.floor(Math.random() * COMPUTER_MOVES.length);

  return {
    title: COMPUTER_MOVES[randomIndex].title,
    image: COMPUTER_MOVES[randomIndex].image,
  };
};
