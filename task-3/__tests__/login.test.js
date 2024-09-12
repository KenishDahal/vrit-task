import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import LoginPage from '../app/login/page';
import { authenticate } from '../utils/auth';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../utils/auth', () => ({
  authenticate: jest.fn(),
}));

describe('LoginPage', () => {
  test('successful login redirects to the dashboard', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    // Mock the authenticate function to return true
    authenticate.mockReturnValue(true);

    render(<LoginPage />);

    // Simulate filling out the form
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });

    // Simulate form submission
    fireEvent.click(screen.getByText(/login/i));

    expect(authenticate).toHaveBeenCalledWith('user', 'password');
    expect(pushMock).toHaveBeenCalledWith('/dashboard');
  });

  test('invalid login shows an error', () => {
    authenticate.mockReturnValue(false);

    render(<LoginPage />);

    // Simulate form submission with wrong credentials
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByText(/login/i));

    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });
});
