import { render } from '@testing-library/react';
import NewsCardsList from './NewsCardsList';

describe('News cards list component tests:', () => {
    it('Component renders', () => {
        const { getAllByRole } = render(<NewsCardsList />);
        const cards = getAllByRole('img');

        expect(cards).toBeDefined();
        expect(cards).toHaveLength(9);
    });
});
