import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../src/pages/Login'; // Assuming the component is in a file named Login.js

describe('Login Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Login navigation={{ navigate: jest.fn() }} />);
    expect(getByText('Sign up or log in')).toBeTruthy();
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
  });

  it('navigates to sign up page on "Continue with email" button press', () => {
    const navigateMock = jest.fn();
    const { getByText } = render(<Login navigation={{ navigate: navigateMock }} />);
    const continueWithEmailButton = getByText('Continue with email');

    fireEvent.press(continueWithEmailButton);
    expect(navigateMock).toHaveBeenCalledWith('signup');
  });

  // Add more test cases as needed for different functionalities of the component
});
