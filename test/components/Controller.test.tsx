import { screen, render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import Controller from '../../src/app/components/Controller';

describe('Controller Component', () => {
    it('renders all game option buttons', () => {
        const mockPcMove = vi.fn();

        render(<Controller pcMove={mockPcMove} />);

        expect(screen.getByRole('button', { name: /rock/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /paper/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /scissors/i })).toBeInTheDocument();
    });

    it.each([
        ['rock'],
        ['paper'],
        ['scissors'],
    ])('calls pcMove callback immediately when user selects %s', async (option) => {
        const user = userEvent.setup();
        const mockPcMove = vi.fn();

        render(<Controller pcMove={mockPcMove} />);

        const button = screen.getByRole('button', { name: new RegExp(option, 'i') });
        await user.click(button);
        expect(mockPcMove).toHaveBeenCalledTimes(1);
    });
});
