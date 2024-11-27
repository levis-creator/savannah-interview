import React from 'react'
import NavBar from '@/components/nav-bar';
import useAuthProvider from '@/hook/useAuthProvider';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('next-theme', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    setTheme: jest.fn(),
  }),
}));

jest.mock('@/hook/useAuthProvider', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('@/components/navlist', () => ({
  NavList: [
    { path: '/', navName: 'Home' },
    { path: '/about', navName: 'About' },
  ],
}));

jest.mock('@/components/avatar', () => {
  return function AvatarMock() {
    return <div data-testid="avatar-mock"> Avatar</div>;
  };
});

// Mock the image import
jest.mock('@/assets/logo.png', () => 'mock-logo.png');

describe('NavBar Component', () => {
  it('should render the logo and navigation items', () => {
    // Mock `useAuthProvider` return value (no session, i.e., user not logged in)
    (useAuthProvider as jest.Mock).mockReturnValue({
      session: null, // Simulate no session (logged out state)
    });

    render(<NavBar />);

    // Check if the logo is displayed
    expect(screen.getByAltText('company Logo')).toBeInTheDocument();

    // Check if the navigation items are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();

    // Check if the "SignUp/Login" button is rendered when no session exists
    expect(screen.getByText('SignUp/Login')).toBeInTheDocument();
  });
  it('should show the Avatar when the user is logged in', () => {
    // Mock `useAuthProvider` return value (user is logged in)
    (useAuthProvider as jest.Mock).mockReturnValue({
      session: { user: { name: 'John Doe' } }, // Simulate a logged-in state
    });

    render(<NavBar />);

    // Check if the Avatar is displayed when the user is logged in
    expect(screen.getByTestId('avatar-mock')).toBeInTheDocument();
  });
  it('toggles theme between light and dark on button click', () => {
    // Mock the session state (user not logged in)
    (useAuthProvider as jest.Mock).mockReturnValue({
      session: null, // Simulate no session (logged out state)
    });

    render(<NavBar />);

    // Get the theme toggle button using its aria-label
    const themeToggleBtn = screen.getByRole('button', { name: /toggle theme/i });

    // Initially, the theme button should show the Sun icon (light theme)
    const sunIcon = screen.getByTestId('sun-icon'); // Query for the Sun icon
    expect(sunIcon).toBeInTheDocument();

    // Click the theme toggle button to switch to dark mode
    fireEvent.click(themeToggleBtn);

    // After click, the theme should switch to dark, showing the Moon icon
    const moonIcon = screen.getByTestId('moon-icon'); // Query for the Moon icon
    expect(moonIcon).toBeInTheDocument();
  });

  it('should render SignUp/Login when session is null', () => {
    // Mock the session state (user not logged in)
    (useAuthProvider as jest.Mock).mockReturnValue({
      session: null, // Simulate no session (logged out state)
    });

    render(<NavBar />);

    // Check if the "SignUp/Login" button is rendered when no session exists
    expect(screen.getByText('SignUp/Login')).toBeInTheDocument();
  });

  it('should toggle the mobile menu visibility when the menu button is clicked', () => {
    (useAuthProvider as jest.Mock).mockReturnValue({
      session: null,
    });

    render(<NavBar />);

    const mobileMenuBtn = screen.getByRole('button', { name: /open main menu/i });
    const mobileMenu = screen.getByTestId('navbar-user');

    // Initially, the mobile menu should be hidden
    expect(mobileMenu).toHaveClass('hidden');

    fireEvent.click(mobileMenuBtn);

    // After clicking, the mobile menu should be visible, so 'hidden' class should be removed
    expect(mobileMenu).not.toHaveClass('hidden');
  });
});