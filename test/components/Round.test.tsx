
import { render, screen } from '@testing-library/react';
import Round from '../../src/app/components/Round';

describe('Round Component', () => {
    it('renders the round title', () => {
        render(<Round round={5} />);

        expect(screen.getByText('Round')).toBeInTheDocument();
    });

    it('renders the current round number', () => {
        render(<Round round={5} />);

        expect(screen.getByText('5')).toBeInTheDocument();
    });
});
