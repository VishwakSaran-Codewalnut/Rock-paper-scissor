import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { GAME_IMAGES } from "../../utils/constants/gameConstants";

interface GameState {
    playerScore: number;
    computerScore: number;
    totalDraws: number;
    currentRoundNumber: number;
    currentPlayerChoice: string;
    currentComputerChoice: string;
    currentPlayerChoiceImage: string;
    currentComputerChoiceImage: string;
    isPlayerSelecting: boolean;

    // Actions
    incrementPlayerScore: () => void;
    incrementComputerScore: () => void;
    incrementDraws: () => void;
    incrementRound: () => void;
    setPlayerChoice: (choice: string) => void;
    setComputerChoice: (choice: string) => void;
    setPlayerChoiceImage: (image: string) => void;
    setComputerChoiceImage: (image: string) => void;
    setIsPlayerChoiceSelectionActive: (isActive: boolean) => void;
    resetGame: () => void;
}

const initialState = {
    playerScore: 0,
    computerScore: 0,
    totalDraws: 0,
    currentRoundNumber: 0,
    currentPlayerChoice: "",
    currentComputerChoice: "",
    currentPlayerChoiceImage: GAME_IMAGES.ROCK_USER,
    currentComputerChoiceImage: GAME_IMAGES.ROCK_COMPUTER,
    isPlayerSelecting: false,
};

export const useGameStore = create<GameState>()(
    persist(
        (set) => ({
            ...initialState,

            incrementPlayerScore: () =>
                set((state) => ({ playerScore: state.playerScore + 1 })),
            incrementComputerScore: () => set((state) => ({ computerScore: state.computerScore + 1 })),
            incrementDraws: () =>
                set((state) => ({ totalDraws: state.totalDraws + 1 })),
            incrementRound: () =>
                set((state) => ({ currentRoundNumber: state.currentRoundNumber + 1 })),
            setPlayerChoice: (choice) => set({ currentPlayerChoice: choice }),
            setComputerChoice: (choice) => set({ currentComputerChoice: choice }),
            setPlayerChoiceImage: (image) => set({ currentPlayerChoiceImage: image }),
            setComputerChoiceImage: (image) => set({ currentComputerChoiceImage: image }),
            setIsPlayerChoiceSelectionActive: (isActive) => set({ isPlayerSelecting: isActive }),
            resetGame: () => set(initialState),
        }),
        {
            name: "game-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                playerScore: state.playerScore,
                computerScore: state.computerScore,
                totalDraws: state.totalDraws,
                currentRoundNumber: state.currentRoundNumber,
                currentPlayerChoiceImage: state.currentPlayerChoiceImage,
                currentComputerChoiceImage: state.currentComputerChoiceImage,
            }),
        }
    )
);
