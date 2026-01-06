import { useEffect, useRef, RefObject } from "react";
import { GAME_CONSTANTS, CONFETTI_COLORS } from "../constants/gameConstants";

type Particle = {
    color: string;
    x: number;
    y: number;
    diameter: number;
    tilt: number;
    tiltAngleIncrement: number;
    tiltAngle: number;
};

const colors = [...CONFETTI_COLORS] as string[];
const resetParticle = (particle: Particle, width: number, height: number) => {
    return {
        ...particle,
        color: colors[Math.floor(Math.random() * colors.length)],
        x: Math.random() * width,
        y: Math.random() * height - height,
        diameter: Math.random() * 10 + 5,
        tilt: Math.random() * 10 - 10,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05,
        tiltAngle: 0,
    };
};

export const useConfetti = (
    canvasRef: RefObject<HTMLCanvasElement | null>,
    shouldCelebrate: boolean
) => {
    const particles = useRef<Particle[]>([]);
    const animationTimer = useRef<number | null>(null);
    const waveAngle = useRef(0);
    const streamingConfetti = useRef(false);
    const maxParticleCount = GAME_CONSTANTS.MAX_PARTICLE_COUNT;
    const particleSpeed = GAME_CONSTANTS.PARTICLE_SPEED;

    const runAnimation = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const context = canvasRef.current?.getContext("2d");

        if (!context) return;

        context.clearRect(0, 0, width, height);

        if (particles.current.length === 0) {
            animationTimer.current = null;
            context.clearRect(0, 0, width, height);
        } else {
            const currentParticles = particles.current;
            waveAngle.current += 0.01;

            for (let i = 0; i < currentParticles.length; i += 1) {
                let particle = currentParticles[i];
                if (!streamingConfetti.current && particle.y < -15) {
                    particle = { ...particle, y: height + 100 };
                } else {
                    particle = {
                        ...particle,
                        tiltAngle: particle.tiltAngle + particle.tiltAngleIncrement,
                        x: particle.x + Math.sin(waveAngle.current),
                        y: (Math.cos(waveAngle.current) + particle.diameter + particleSpeed) * 0.5 + particle.y,
                        tilt: Math.sin(particle.tiltAngle) * 15,
                    };
                }

                if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                    if (streamingConfetti.current && currentParticles.length <= maxParticleCount) {
                        currentParticles[i] = resetParticle(particle, width, height);
                    } else {
                        currentParticles.splice(i, 1);
                        i -= 1;
                    }
                } else {
                    currentParticles[i] = particle;
                }
            }

            for (let i = 0; i < currentParticles.length; i += 1) {
                const particle = currentParticles[i];
                context.beginPath();
                context.lineWidth = particle.diameter;
                context.strokeStyle = particle.color;
                const x = particle.x + particle.tilt;
                context.moveTo(x + particle.diameter / 2, particle.y);
                context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
                context.stroke();
            }

            animationTimer.current = requestAnimationFrame(runAnimation);
        }
    };

    const stopConfetti = () => {
        streamingConfetti.current = false;
    };

    const startConfetti = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        while (particles.current.length < maxParticleCount) {
            particles.current.push(resetParticle({} as Particle, width, height));
        }

        streamingConfetti.current = true;

        if (animationTimer.current === null) {
            runAnimation();
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (shouldCelebrate) {
            startConfetti();
            timer = setTimeout(stopConfetti, GAME_CONSTANTS.CONFETTI_DURATION);
        }

        return () => {
            if (timer) clearTimeout(timer);
            stopConfetti();
            if (animationTimer.current) cancelAnimationFrame(animationTimer.current);
            particles.current = [];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldCelebrate]);
};
