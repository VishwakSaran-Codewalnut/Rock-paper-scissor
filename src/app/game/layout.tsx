import GameContextProvider from "../context/gameContext";
import ThemeProvider from "../context/ThemeContext";

import type React from "react";

export default function GameLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<GameContextProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</GameContextProvider>
	);
}
