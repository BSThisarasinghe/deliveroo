import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../src/pages/Home'; // Assuming the component is in a file named Home.js

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Home Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('New daily Specials')).toBeTruthy();
  });

  it('handles tab click correctly', () => {
    const { getByText } = render(<Home />);
    
    fireEvent.press(getByText('Salads'));
    expect(getByText('Salads')).toBeTruthy();
    
    fireEvent.press(getByText('Gym food'));
    expect(getByText('Gym food')).toBeTruthy();
  });
});
