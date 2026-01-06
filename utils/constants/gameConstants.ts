
export const GAME_CONSTANTS = {
    MAX_PARTICLE_COUNT: 100,
    PARTICLE_SPEED: 1,
    CONFETTI_DURATION: 800,
    RESET_TIMEOUT: 1000,
} as const;

export const CONFETTI_COLORS = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson",
] as const;

export const GAME_IMAGES = {
    ROCK_USER: "/images/rock2.png",
    SCISSOR_USER: "/images/scissors2.png",
    PAPER_USER: "/images/paper2.png",
    ROCK_COMPUTER: "/images/rock1.png",
    SCISSOR_COMPUTER: "/images/scissors1.png",
    PAPER_COMPUTER: "/images/paper1.png",
    // UI Icons for Controller
    ROCK_ICON: "/images/rock-user.png",
    PAPER_ICON: "/images/paper-user.png",
    SCISSOR_ICON: "/images/scissors-user.png",
} as const;

export const COMPUTER_MOVES = [
    {
        title: "rock",
        image: GAME_IMAGES.ROCK_COMPUTER,
    },
    {
        title: "scissors",
        image: GAME_IMAGES.SCISSOR_COMPUTER,
    },
    {
        title: "paper",
        image: GAME_IMAGES.PAPER_COMPUTER,
    },
] as const;
