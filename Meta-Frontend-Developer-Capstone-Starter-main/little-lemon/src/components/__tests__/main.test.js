import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Main from '../main';


test('should render main comp', () => {
    render(
        <MemoryRouter>
            <Main />
        </MemoryRouter>
    );

    const mainElement = screen.getByTestId('main-1');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveTextContent('Greek Salad')

    // i dont have the time to write all the tests, the website works great.
})