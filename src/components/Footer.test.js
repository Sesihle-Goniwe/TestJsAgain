import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // ✅ important for custom matchers
import Footer from './Footer';

describe('Footer component', () => {
  test('renders the About header', () => {
    render(<Footer />);
    const aboutElements = screen.getAllByText(/About/i);
    expect(aboutElements.length).toBeGreaterThan(0);
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
