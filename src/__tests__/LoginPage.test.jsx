import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';



const renderWithProviders = (ui) => {
    return render(
        <BrowserRouter>
            <AuthProvider>
                {ui}
            </AuthProvider>
        </BrowserRouter>
    );
};

describe('LoginPage Validation', () => {
    it('shows error when phone number is empty', async () => {
        renderWithProviders(<LoginPage />);
        const loginButton = screen.getByRole('button', { name: /login securely/i });

        fireEvent.click(loginButton);

        expect(await screen.findByText(/phone number is required/i)).toBeInTheDocument();
    });

    it('shows error when phone number does not start with +254', async () => {
        renderWithProviders(<LoginPage />);
        const input = screen.getByPlaceholderText(/\+254712345678/i);
        const loginButton = screen.getByRole('button', { name: /login securely/i });

        fireEvent.change(input, { target: { value: '0712345678' } });
        fireEvent.click(loginButton);

        expect(await screen.findByText(/phone number must start with \+254/i)).toBeInTheDocument();
    });

    it('shows error for invalid phone number format', async () => {
        renderWithProviders(<LoginPage />);
        const input = screen.getByPlaceholderText(/\+254712345678/i);
        const loginButton = screen.getByRole('button', { name: /login securely/i });

        fireEvent.change(input, { target: { value: '+254123' } });
        fireEvent.click(loginButton);

        expect(await screen.findByText(/please enter a valid format/i)).toBeInTheDocument();
    });
});
