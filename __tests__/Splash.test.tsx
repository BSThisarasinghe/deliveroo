import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Splash from '../src/pages/Splash'; // Assuming the component is in a file named Splash.js

describe('Splash Component', () => {
  it('renders correctly', async () => {
    const { getByTestId } = render(<Splash navigation={{ navigate: jest.fn() }} />);
    expect(getByTestId('splash-screen')).toBeTruthy();
    await waitFor(() => {}, { timeout: 2500 }); // Wait for 2.5 seconds (including the 2-second timeout in Splash component)
  });

  it('navigates to home screen after 2 seconds', async () => {
    const navigateMock = jest.fn();
    render(<Splash navigation={{ navigate: navigateMock }} />);
    await waitFor(() => {}, { timeout: 2500 }); // Wait for 2.5 seconds (including the 2-second timeout in Splash component)
    expect(navigateMock).toHaveBeenCalledWith('home');
  });

  // Add more test cases as needed for different functionalities of the component
});
