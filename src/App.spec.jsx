import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    const header = screen.getByRole("heading", {name: /Weather App/} );
    expect(header).toBeInTheDocument();
  });
});