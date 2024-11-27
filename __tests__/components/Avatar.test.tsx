import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Avatar from '@/components/avatar'

// Mock next-auth's signOut method
jest.mock('next-auth/react', () => ({
  signOut: jest.fn()
}))

// Create a mock session for testing
const mockSession: Session = {
  user: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://www.example.com/avatar.jpg'
  },
  expires: 'mock-expiry'
}

describe('Avatar component', () => {
  it('should render the user avatar and user menu', () => {
    render(<Avatar data={mockSession} />)

    // Check if the avatar image is rendered
    const avatarImage = screen.getByAltText('user photo')
    expect(avatarImage).toBeInTheDocument()

    // Click on the avatar to toggle the menu
    const avatarButton = screen.getByRole('button')
    fireEvent.click(avatarButton)

    // Ensure the user menu is shown
    const userMenu = screen.getByText(/dashboard/i)
    expect(userMenu).toBeInTheDocument()
  })

  it('should toggle the user menu when the avatar is clicked', () => {
    render(<Avatar data={mockSession} />)

    const avatarButton = screen.getByRole('button')

    // Ensure the menu is not visible initially
    expect(screen.queryByText(/dashboard/i)).not.toBeInTheDocument()

    // Click to open the menu
    fireEvent.click(avatarButton)
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()

    // Click again to close the menu
    fireEvent.click(avatarButton)
    expect(screen.queryByText(/dashboard/i)).not.toBeInTheDocument()
  })

  it('should call signOut when clicking the Sign Out button', async () => {
    render(<Avatar data={mockSession} />)

    const avatarButton = screen.getByRole('button')

    // Open the user menu
    fireEvent.click(avatarButton)

    // Click on the Sign Out button
    const signOutButton = screen.getByText(/sign out/i)
    fireEvent.click(signOutButton)

    // Ensure that the signOut function was called
    await waitFor(() => expect(signOut).toHaveBeenCalled())
  })

  it('should display the user name and email correctly', () => {
    render(<Avatar data={mockSession} />)
  
    const userName = mockSession.user?.name;
    const userEmail = mockSession.user?.email;
  
    // Ensure userName and userEmail are not undefined before proceeding
    if (userName && userEmail) {
      fireEvent.click(screen.getByRole('button')) // Open the user menu
  
      // Check that both the userName and userEmail are rendered in the document
      expect(screen.getByText(userName)).toBeInTheDocument();
      expect(screen.getByText(userEmail)).toBeInTheDocument();
    } else {
      throw new Error('User name or email is missing');
    }
  })
})
