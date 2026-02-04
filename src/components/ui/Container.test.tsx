import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  // -----------------------------------------------------------------------
  // Basic rendering
  // -----------------------------------------------------------------------
  it('renders without crashing', () => {
    render(<Container>Hello</Container>);
    expect(screen.getByText('Hello')).toBeDefined();
  });

  // -----------------------------------------------------------------------
  // Layout classes
  // -----------------------------------------------------------------------
  it('applies max-w-7xl and mx-auto classes', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('max-w-7xl');
    expect(div.className).toContain('mx-auto');
  });

  it('applies mobile padding class px-4', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('px-4');
  });

  it('applies responsive md+ padding class md:px-6', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('md:px-6');
  });

  it('applies full-width class w-full', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('w-full');
  });

  // -----------------------------------------------------------------------
  // Children
  // -----------------------------------------------------------------------
  it('renders children inside the container div', () => {
    render(
      <Container>
        <span data-testid="inner">Inner element</span>
      </Container>
    );
    expect(screen.getByTestId('inner').textContent).toBe('Inner element');
  });

  // -----------------------------------------------------------------------
  // Additional className
  // -----------------------------------------------------------------------
  it('merges a custom className onto the wrapper div', () => {
    const { container } = render(
      <Container className="my-custom">Content</Container>
    );
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('my-custom');
  });

  // -----------------------------------------------------------------------
  // Snapshot
  // -----------------------------------------------------------------------
  it('matches snapshot for default state', () => {
    const { container } = render(<Container>Snapshot child</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
