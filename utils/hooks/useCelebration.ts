import { useEffect, useState, RefObject } from "react";
import { useConfetti } from "./useConfetti";
import { winnerSound } from "../audio/GameAudio";

export const useCelebration = (
    canvasRef: RefObject<HTMLCanvasElement | null>,
    score: number
) => {
    const [shouldCelebrate, setShouldCelebrate] = useState(false);

    useConfetti(canvasRef, shouldCelebrate);

    useEffect(() => {
        if (score > 0) {
            setShouldCelebrate(true);
            winnerSound.play();
            const timer = setTimeout(() => {
                setShouldCelebrate(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [score]);
};
