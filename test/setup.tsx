
import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock Howl
vi.mock('howler', () => ({
    Howl: vi.fn(() => ({
        play: vi.fn(),
    })),
}));

// Mock Next/Image
vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src= { src } alt={ alt } { ...props } />
  ),
}));
