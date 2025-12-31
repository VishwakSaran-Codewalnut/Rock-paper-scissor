
import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('howler', () => ({
    Howl: vi.fn(() => ({
        play: vi.fn(),
    })),
}));

vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} {...props} />
    ),
}));
