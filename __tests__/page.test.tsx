// __tests__/page.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders calculator input', () => {
    render(<Home />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();
  });

  it('can click number buttons and update input', () => {
    render(<Home />);
    const inputField = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('9'));

    expect(inputField).toHaveValue('789');
  });

  it('can click operator buttons and update input', () => {
    render(<Home />);
    const inputField = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));

    expect(inputField).toHaveValue('7+3');
  });

  it('can perform evaluation of an expression', () => {
    render(<Home />);
    const inputField = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(inputField).toHaveValue('10');
  });

  it('can clear the input', () => {
    render(<Home />);
    const inputField = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('C'));

    expect(inputField).toHaveValue('');
  });

  it('shows error for invalid input', () => {
    render(<Home />);
    const inputField = screen.getByRole('textbox');

    // Update division operator to match the actual symbol used (÷ instead of /)
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('÷')); // Correct the division operator symbol here
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));

    expect(inputField).toHaveValue('Error');
  });
});
