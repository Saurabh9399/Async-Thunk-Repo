// Import necessary dependencies and the component
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Users from './pages/Users';

// Create a mock store
const mockStore = configureStore();

// Describe the test suite
describe('Users Component', () => {
  let store;

  // Run this before each test
  beforeEach(() => {
    // Initialize the mock store
    store = mockStore({
      user: {
        users: [],
      },
    });
  });

  // First test: Check if the Users component renders correctly
  test('renders Users component', () => {
    // Render the component with the mock store
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    // Add specific assertions based on your component structure
    // For example, checking if certain text or input elements are present
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('Filter:')).toBeInTheDocument();
    // Add more assertions as needed
  });
});
