import { screen, waitFor, render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import Controller from '../../src/app/components/Controller';
import GameView from '../../src/app/components/GameView';

describe('Controller Component', () => {
    it('updates game UI when user selects an option', async () => {
        const user = userEvent.setup();
        const mockPcMove = vi.fn();

        render(
            <>
                <GameView />
                <Controller pcMove={mockPcMove} />
            </>
        );

        expect(screen.queryByAltText('question')).not.toBeInTheDocument();

        const rockButton = screen.getByRole('button', { name: /rock/i });

        await user.click(rockButton);

        await waitFor(() => {
            expect(screen.getAllByAltText('question')).toHaveLength(2);
        });
        await waitFor(() => {
            expect(screen.queryByAltText('question')).not.toBeInTheDocument();
            expect(mockPcMove).toHaveBeenCalled();
        }, { timeout: 2000 });
    });
});
