// __tests__/page.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// Mock Next.js Image component
// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: ({ src, alt, ...props }: any) => {
//     // eslint-disable-next-line @next/next/no-img-element
//     return <img src={src} alt={alt} {...props} />;
//   },
// }));

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

  it('renders the main instruction text', () => {
    render(<Home />);
    const instructionText = screen.getByText(/Get started by editing/i);
    expect(instructionText).toBeInTheDocument();
  });

  it('renders the code snippet', () => {
    render(<Home />);
    const codeSnippet = screen.getByText('app/page.tsx');
    expect(codeSnippet).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Home />);
    const learnLink = screen.getByText('Learn');
    const examplesLink = screen.getByText('Examples');
    const nextjsLink = screen.getByText('Go to nextjs.org →');
    
    expect(learnLink).toBeInTheDocument();
    expect(examplesLink).toBeInTheDocument();
    expect(nextjsLink).toBeInTheDocument();
  });

  it('has correct external links', () => {
    render(<Home />);
    
    const deployButton = screen.getByRole('link', { name: /Deploy now/i });
    const docsButton = screen.getByRole('link', { name: /Read our docs/i });
    
    expect(deployButton).toHaveAttribute('href', expect.stringContaining('vercel.com'));
    expect(docsButton).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'));
    expect(deployButton).toHaveAttribute('target', '_blank');
    expect(docsButton).toHaveAttribute('target', '_blank');
  });
});