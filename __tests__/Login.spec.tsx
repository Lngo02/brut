/** @vitest-environment jsdom */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'; // Allows us to test front-end
import Login from '../src/components/Login';

describe('Login healthcheck', () => {
    it('SHOULD render successfully', () => {
        // Render login. 
        render (
            <Login/> // Short-hand syntax of declaring component bc we arent doing anything with props.
        );
        // if we rendered it, we expect the screen to have a text 'brut' (From the Nav)
        // Note that we shouldn't test directly that 'Nav' was rendered, because thats implmentation details.
        //      We should just test what we expect to see on the login.
        // (That is, on the screen, there is some text 'brut' that exists on the document)
        // Since this is just a health check, we only need to check that one expected thing is rendered.
        expect(screen.getByText(/Brut/)).toBeInTheDocument(); // We could also do toBeDefined() see https://eternaldev.com/blog/testing-a-react-application-with-vitest
    });
});