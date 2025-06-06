// __tests__/page.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders "Deploy now" button', () => {
    render(<Home />);
    const deployButton = screen.getByText(/Deploy now/i);
    expect(deployButton).toBeInTheDocument();
  });

  it('renders "Read our docs" button', () => {
    render(<Home />);
    const docsButton = screen.getByText(/Read our docs/i);
    expect(docsButton).toBeInTheDocument();
  });
});
