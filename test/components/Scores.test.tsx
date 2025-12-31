import { render, screen, waitFor } from '../test-utils';
import Scores from '../../src/app/components/Scores';
import { useGameContext } from '../../src/app/context/gameContext';
import { useEffect } from 'react';

function ScoreSeeder() {
    const { dispatch } = useGameContext();
    useEffect(() => {
        dispatch({ type: 'INCREMENT_USER_SCORE' });
        dispatch({ type: 'INCREMENT_USER_SCORE' });

        dispatch({ type: 'INCREMENT_PC_SCORE' });

    }, [dispatch]);
    return null;
}

describe('Scores Component', () => {
    it('renders score titles and updated values correctly', async () => {
        render(
            <>
                <ScoreSeeder />
                <Scores />
            </>
        );

        const winTitles = screen.getAllByText('Win');
        expect(winTitles).toHaveLength(2);
        expect(screen.getByText('Equal')).toBeInTheDocument();

        await waitFor(() => {
            const userScores = screen.getAllByText('2');
            expect(userScores.length).toBeGreaterThan(0);
        });

        await waitFor(() => {
            const pcScores = screen.getAllByText('1');
            expect(pcScores.length).toBeGreaterThan(0);
        });

        const tieScores = screen.getAllByText('0');
        expect(tieScores.length).toBeGreaterThan(0);
    });
});
