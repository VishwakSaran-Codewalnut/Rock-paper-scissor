
import { render, screen } from '@testing-library/react';
import Round from '../../src/app/components/Round';

describe('Round Component', () => {
    it('renders the current round number', () => {
        render(<Round round={5} />);

        expect(screen.getByText('Round')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
    });
});
