import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

// ---------------------------------------------------------------------------
// Mock next/link so Button's link-path renders a plain <a>.
// ---------------------------------------------------------------------------
vi.mock('next/link', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    const { href, children, ...rest } = props;
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  },
}));

import Navigation from './Navigation';
import { ROUTES } from '@/lib/constants';

describe('Navigation', () => {
  // -----------------------------------------------------------------------
  // Basic rendering
  // -----------------------------------------------------------------------
  it('renders without crashing', () => {
    render(<Navigation />);
    // Logo text is always present.
    expect(screen.getByText('Tests')).toBeDefined();
  });

  // -----------------------------------------------------------------------
  // Semantic element and aria
  // -----------------------------------------------------------------------
  it('renders as a <nav> element', () => {
    const { container } = render(<Navigation />);
    const nav = container.querySelector('nav');
    expect(nav).not.toBeNull();
  });

  it('has aria-label="Main navigation" on the <nav>', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  // -----------------------------------------------------------------------
  // Back link -- hidden by default
  // -----------------------------------------------------------------------
  it('does NOT render a back link when showBack is false (default)', () => {
    render(<Navigation />);
    // "Back to Tests" text should not appear.
    const backLink = screen.queryByText('Back to Tests');
    expect(backLink).toBeNull();
  });

  it('does NOT render a back link when showBack is explicitly false', () => {
    render(<Navigation showBack={false} />);
    const backLink = screen.queryByText('Back to Tests');
    expect(backLink).toBeNull();
  });

  // -----------------------------------------------------------------------
  // Back link -- visible
  // -----------------------------------------------------------------------
  it('renders a back link when showBack is true', () => {
    render(<Navigation showBack={true} />);
    const backLink = screen.getByText('Back to Tests');
    expect(backLink).toBeDefined();
  });

  it('back link points to ROUTES.home', () => {
    render(<Navigation showBack={true} />);
    // The back link is rendered via Button with href, which becomes an <a>.
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', ROUTES.home);
  });

  it("back link text reads 'Back to Tests'", () => {
    render(<Navigation showBack={true} />);
    const link = screen.getByRole('link');
    expect(link.textContent).toBe('Back to Tests');
  });

  // -----------------------------------------------------------------------
  // Back link uses Button component (ghost variant)
  // We verify this indirectly: Button ghost applies specific class signatures.
  // -----------------------------------------------------------------------
  it('back link element carries ghost Button classes', () => {
    render(<Navigation showBack={true} />);
    const link = screen.getByRole('link');
    // Ghost variant classes from Button
    expect(link.className).toContain('hover:underline');
    // sm size class from Button
    expect(link.className).toContain('text-sm');
    // Base Button class
    expect(link.className).toContain('inline-flex');
  });

  // -----------------------------------------------------------------------
  // Logo placeholder
  // -----------------------------------------------------------------------
  it("renders the logo text 'Tests'", () => {
    render(<Navigation />);
    const logo = screen.getByText('Tests');
    expect(logo.tagName).toBe('SPAN');
  });

  // -----------------------------------------------------------------------
  // Additional className
  // -----------------------------------------------------------------------
  it('merges a custom className onto the <nav>', () => {
    const { container } = render(<Navigation className="nav-extra" />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('nav-extra');
  });

  // -----------------------------------------------------------------------
  // Snapshots
  // -----------------------------------------------------------------------
  it('matches snapshot without back link (default state)', () => {
    const { container } = render(<Navigation />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot with back link', () => {
    const { container } = render(<Navigation showBack={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
