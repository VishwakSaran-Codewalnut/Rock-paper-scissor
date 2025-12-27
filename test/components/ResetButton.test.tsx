import { screen, waitFor, render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import ButtonBox from '../../src/app/components/ResetButton';
import Scores from '../../src/app/components/Scores'; // Use REAL Scores component
import { useGameContext } from '../../src/app/context/gameContext';
import { useEffect } from 'react';

function DataSeeder() {
    const { dispatch } = useGameContext();
    useEffect(() => {
        dispatch({ type: 'INCREMENT_USER_SCORE' });
        dispatch({ type: 'INCREMENT_USER_SCORE' });
    }, [dispatch]);
    return null;
}

describe('ResetButton Component', () => {
    it('resets the game score when clicked', async () => {
        const user = userEvent.setup();

        render(
            <>
                <DataSeeder />
                <Scores />
                <ButtonBox />
            </>
        );

        const initialScores = await screen.findAllByText('2');
        expect(initialScores.length).toBeGreaterThan(0);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        await user.click(button);

        await waitFor(() => {
            const zeroScores = screen.getAllByText('0');
            expect(zeroScores.length).toBeGreaterThan(0);
        });

        expect(screen.queryByText('2')).not.toBeInTheDocument();
    });
});
