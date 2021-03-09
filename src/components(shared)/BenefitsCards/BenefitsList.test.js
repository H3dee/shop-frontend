import { render } from '@testing-library/react';
import BenefitsList from './BenefitsList';

describe('Benefits list component tests', () => {
    it('Component renders', () => {
        const { getAllByRole } = render(<BenefitsList />);
        const cards = getAllByRole('img');

        expect(cards).toBeDefined();
        expect(cards).toHaveLength(3);
    });
});
