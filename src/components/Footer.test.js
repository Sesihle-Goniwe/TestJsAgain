import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders the About header', () => {
    render(<Footer />);
    const headerElement = screen.getByText(/About/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the About Us heading', () => {
    render(<Footer />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('About Us');
  });

  test('renders the first paragraph text', () => {
    render(<Footer />);
    expect(screen.getByText(/We connect talented freelancers/i)).toBeInTheDocument();
  });

  test('renders the second paragraph text', () => {
    render(<Footer />);
    expect(screen.getByText(/Your go-to platform/i)).toBeInTheDocument();
  });
});
