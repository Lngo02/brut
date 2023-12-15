/** @vitest-environment jsdom */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Nav from '../src/components/Nav';
import { USER } from './assets/USER';

describe('Nav healthcheck', () => {
    it('SHOULD render successfully when there isnt a profile passed', () => {
        render(
            <Nav/>
        );
        expect(screen.getByText(/Login/)).toBeInTheDocument();
    });
    it('SHOULD render successfully when there is a profile passed', () => {
        render(
            <Nav
                profile={USER}
            />
        );
        expect(screen.queryByText(/Login/)).not.toBeInTheDocument();
        expect(screen.getByText(/Brut/)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src',USER.images[0].url);
    });
});