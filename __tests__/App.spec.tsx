/** @vitest-environment jsdom */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

describe('App healthcheck', () => {
    it('SHOULD render successfully when there isnt a token',  () => {
        render(
            <App/>
        );
        expect(screen.getByText(/Brut/)).toBeInTheDocument();
    });
    it('SHOULD render successfully when there is a token', async () => {
        // mock token
        // Since we can't pass token as a prop, we need to use parent components
        const mockParentComponent = {token: 'token'};

        // Create wrapper for app component so that we can pass something into it
        //      and have it pass down into the children (in this case App component)
        const MockParentComponentContext = {
            Provider: ({ children }: {children: any}) => children,
            Consumer: ({ children }: {children: any}) => children(mockParentComponent)
        }

        await render(
            <MockParentComponentContext.Provider>
                {() => <App />}
            </MockParentComponentContext.Provider>
        );
        expect(screen.queryByText(/Brut/)).not.toBeInTheDocument();
    });
});