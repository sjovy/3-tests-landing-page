import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  // -----------------------------------------------------------------------
  // Basic rendering
  // -----------------------------------------------------------------------
  it('renders without crashing', () => {
    render(<Card title="Title" description="Desc" />);
    expect(screen.getByText('Title')).toBeDefined();
  });

  it('renders as an <article> element', () => {
    const { container } = render(
      <Card title="Article" description="Body text" />
    );
    const article = container.querySelector('article');
    expect(article).toBeDefined();
    expect(article).not.toBeNull();
  });

  // -----------------------------------------------------------------------
  // Title
  // -----------------------------------------------------------------------
  it('renders the title inside an <h3>', () => {
    const { container } = render(<Card title="My Card" description="…" />);
    const heading = container.querySelector('h3');
    expect(heading).not.toBeNull();
    expect(heading!.textContent).toBe('My Card');
  });

  // -----------------------------------------------------------------------
  // Description
  // -----------------------------------------------------------------------
  it('renders the description inside a <p>', () => {
    render(<Card title="T" description="A short description" />);
    // There is exactly one <p> in the default Card (the description).
    const paragraphs = screen
      .getAllByText('A short description')
      .filter((el) => el.tagName === 'P');
    expect(paragraphs).toHaveLength(1);
  });

  // -----------------------------------------------------------------------
  // Children slot
  // -----------------------------------------------------------------------
  it('does not render the children wrapper when no children are provided', () => {
    const { container } = render(<Card title="T" description="D" />);
    // The children wrapper has class mt-4; with no children it should be absent.
    const wrapper = container.querySelector('.mt-4');
    expect(wrapper).toBeNull();
  });

  it('renders children when provided', () => {
    render(
      <Card title="With child" description="D">
        <span data-testid="child-node">Child content</span>
      </Card>
    );
    expect(screen.getByTestId('child-node')).toBeDefined();
    expect(screen.getByTestId('child-node').textContent).toBe('Child content');
  });

  // -----------------------------------------------------------------------
  // Additional className
  // -----------------------------------------------------------------------
  it('merges a custom className onto the article element', () => {
    const { container } = render(
      <Card title="T" description="D" className="extra-class" />
    );
    const article = container.querySelector('article');
    expect(article?.className).toContain('extra-class');
  });

  // -----------------------------------------------------------------------
  // Snapshot
  // -----------------------------------------------------------------------
  it('matches snapshot for default state (no children)', () => {
    const { container } = render(
      <Card title="Snapshot Title" description="Snapshot description" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
