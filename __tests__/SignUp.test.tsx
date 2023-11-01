import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignUp from '../src/pages/SignUp'; // Assuming the component is in a file named SignUp.js

describe('SignUp Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<SignUp />);
    expect(getByText('Sign up or log in')).toBeTruthy();
    expect(getByPlaceholderText('e.g: name@example.com')).toBeTruthy();
  });

  it('handles input changes correctly', () => {
    const { getByPlaceholderText } = render(<SignUp />);
    const emailInput = getByPlaceholderText('e.g: name@example.com');

    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('calls handleLogin function on button press', () => {
    const { getByText } = render(<SignUp />);
    const continueButton = getByText('Continue');
    const handleLoginMock = jest.fn();

    fireEvent.press(continueButton);
    expect(handleLoginMock).toHaveBeenCalled();
  });

  it('calls handleLogin function on "Forgot password" button press', () => {
    const { getByText } = render(<SignUp />);
    const forgotPasswordButton = getByText('Forgot password');
    const handleLoginMock = jest.fn();

    fireEvent.press(forgotPasswordButton);
    expect(handleLoginMock).toHaveBeenCalled();
  });
});
