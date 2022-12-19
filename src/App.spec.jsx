import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the search bar', () => {
    render(<App title="React" />);

    const header = screen.getByTestId("search-bar");
    expect(header).toBeInTheDocument();
  });
});