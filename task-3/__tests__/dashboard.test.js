import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import DashboardPage from '../app/dashboard/page';
import withAuth from '../components/withAuth';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../components/withAuth', () => {
  return jest.fn((Component) => (props) => {
    const isAuthenticated = document.cookie.includes('auth=true');
    const router = useRouter();

    if (!isAuthenticated) {
      router.push('/login');
      return null;
    }

    return <Component {...props} />;
  });
});

describe('DashboardPage (Protected Route)', () => {
  beforeEach(() => {
    // Clear cookies before each test
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });

  test('redirects unauthenticated users to the login page', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<DashboardPage />);

    expect(pushMock).toHaveBeenCalledWith('/login');
  });
});
