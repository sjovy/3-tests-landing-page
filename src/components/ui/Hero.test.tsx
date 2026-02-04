import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Hero from './Hero';

describe('Hero', () => {
  // -----------------------------------------------------------------------
  // Basic rendering
  // -----------------------------------------------------------------------
  it('renders without crashing', () => {
    render(<Hero headline="Hello" />);
    expect(screen.getByText('Hello')).toBeDefined();
  });

  // -----------------------------------------------------------------------
  // Headline
  // -----------------------------------------------------------------------
  it('renders the headline as an <h1>', () => {
    const { container } = render(<Hero headline="Main Title" />);
    const h1 = container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1!.textContent).toBe('Main Title');
  });

  // -----------------------------------------------------------------------
  // Subheading (conditional)
  // -----------------------------------------------------------------------
  it('does not render a <p> subheading when subheading prop is omitted', () => {
    const { container } = render(<Hero headline="No sub" />);
    // The only content should be the h1; no <p> present.
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(0);
  });

  it('renders the subheading as a <p> when provided', () => {
    render(<Hero headline="H" subheading="Tagline text" />);
    const paragraphs = screen
      .getAllByText('Tagline text')
      .filter((el) => el.tagName === 'P');
    expect(paragraphs).toHaveLength(1);
  });

  // -----------------------------------------------------------------------
  // Children slot
  // -----------------------------------------------------------------------
  it('does not render the children wrapper when no children are provided', () => {
    const { container } = render(
      <Hero headline="No children" subheading="Sub" />
    );
    // Children wrapper has class mt-6; should be absent with no children.
    const wrapper = container.querySelector('.mt-6');
    expect(wrapper).toBeNull();
  });

  it('renders children when provided', () => {
    render(
      <Hero headline="H">
        <button data-testid="cta">Take the Test</button>
      </Hero>
    );
    expect(screen.getByTestId('cta')).toBeDefined();
    expect(screen.getByTestId('cta').textContent).toBe('Take the Test');
  });

  // -----------------------------------------------------------------------
  // Section element
  // -----------------------------------------------------------------------
  it('renders as a <section> element', () => {
    const { container } = render(<Hero headline="Section check" />);
    const section = container.querySelector('section');
    expect(section).not.toBeNull();
  });

  // -----------------------------------------------------------------------
  // Additional className
  // -----------------------------------------------------------------------
  it('merges a custom className onto the section', () => {
    const { container } = render(
      <Hero headline="H" className="extra-hero-class" />
    );
    const section = container.querySelector('section');
    expect(section?.className).toContain('extra-hero-class');
  });

  // -----------------------------------------------------------------------
  // Snapshots
  // -----------------------------------------------------------------------
  it('matches snapshot for headline + subheading state', () => {
    const { container } = render(
      <Hero
        headline="Find clarity, get unstuck"
        subheading="Take a short test to discover yourself"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot for headline-only state', () => {
    const { container } = render(<Hero headline="Headline Only" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
