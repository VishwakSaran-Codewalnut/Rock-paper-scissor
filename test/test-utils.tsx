
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import GameContextProvider from '../src/app/context/gameContext';

// This component wraps all tests in the necessary providers (Context, Theme, etc)
// If you switch to Zustand/Redux, you ONLY edit this file.
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <GameContextProvider>
            {children}
        </GameContextProvider>
    );
};

// Custom render function that includes providers
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method
export { customRender as render };
