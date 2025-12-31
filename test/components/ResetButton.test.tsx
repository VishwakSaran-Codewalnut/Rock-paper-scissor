import { screen, render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import ResetButton from '../../src/app/components/ResetButton';
import Scores from '../../src/app/components/Scores';

describe('ResetButton Component', () => {
    it('renders a reset button', () => {
        render(<ResetButton />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('displays 0 in UI when reset button is clicked', async () => {
        const user = userEvent.setup();

        render(
            <>
                <Scores />
                <ResetButton />
            </>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(screen.queryAllByText('0').length).toBeGreaterThan(0);
    });
});
