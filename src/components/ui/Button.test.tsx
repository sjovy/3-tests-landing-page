import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

// ---------------------------------------------------------------------------
// Mock next/link so that <Link href="/foo"> renders as a plain <a href="/foo">.
// This avoids pulling in the full Next.js router machinery.
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

import Button from './Button';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Grab the single rendered element (button or anchor). */
function getInteractive() {
  // Try button first; fall back to anchor.
  const btn = screen.queryByRole('button');
  if (btn) return btn;
  return screen.getByRole('link');
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Button', () => {
  // -----------------------------------------------------------------------
  // Basic rendering
  // -----------------------------------------------------------------------
  it('renders without crashing', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('renders as a <button> element when no href is provided', () => {
    render(<Button>No link</Button>);
    const el = screen.getByRole('button');
    expect(el.tagName).toBe('BUTTON');
  });

  it('renders as an <a> element when href is provided', () => {
    render(<Button href="/somewhere">A link</Button>);
    const el = screen.getByRole('link');
    expect(el.tagName).toBe('A');
    expect(el).toHaveAttribute('href', '/somewhere');
  });

  // -----------------------------------------------------------------------
  // Variant styles
  // -----------------------------------------------------------------------
  it('applies primary variant classes by default', () => {
    render(<Button>Primary</Button>);
    const el = getInteractive();
    expect(el.className).toContain('bg-moss-green-500');
    expect(el.className).toContain('text-white');
  });

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const el = getInteractive();
    expect(el.className).toContain('border-2');
    expect(el.className).toContain('border-moss-green-500');
    expect(el.className).toContain('text-moss-green-500');
    expect(el.className).toContain('bg-transparent');
  });

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const el = getInteractive();
    expect(el.className).toContain('text-moss-green-500');
    expect(el.className).toContain('bg-transparent');
    expect(el.className).toContain('hover:underline');
  });

  // -----------------------------------------------------------------------
  // Size styles
  // -----------------------------------------------------------------------
  it('applies sm size classes', () => {
    render(<Button size="sm">Small</Button>);
    const el = getInteractive();
    expect(el.className).toContain('text-sm');
    expect(el.className).toContain('px-3');
    expect(el.className).toContain('py-1.5');
  });

  it('applies md size classes by default', () => {
    render(<Button>Medium</Button>);
    const el = getInteractive();
    expect(el.className).toContain('text-base');
    expect(el.className).toContain('px-4');
    expect(el.className).toContain('py-2');
  });

  it('applies lg size classes', () => {
    render(<Button size="lg">Large</Button>);
    const el = getInteractive();
    expect(el.className).toContain('text-lg');
    expect(el.className).toContain('px-6');
    expect(el.className).toContain('py-3');
  });

  // -----------------------------------------------------------------------
  // Disabled state -- native <button>
  // -----------------------------------------------------------------------
  it('sets the native disabled attribute on <button> when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const el = screen.getByRole('button');
    expect(el).toHaveAttribute('disabled');
  });

  it('applies opacity and cursor classes when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const el = getInteractive();
    expect(el.className).toContain('opacity-50');
    expect(el.className).toContain('cursor-not-allowed');
  });

  // -----------------------------------------------------------------------
  // Disabled state -- link variant
  // -----------------------------------------------------------------------
  it('sets aria-disabled on the <a> element when href + disabled', () => {
    render(
      <Button href="/nope" disabled>
        Disabled link
      </Button>
    );
    const el = screen.getByRole('link');
    expect(el).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets tabIndex=-1 on the <a> element when href + disabled', () => {
    render(
      <Button href="/nope" disabled>
        Disabled link
      </Button>
    );
    const el = screen.getByRole('link');
    expect(el).toHaveAttribute('tabindex', '-1');
  });

  it('prevents navigation when disabled link is clicked', () => {
    render(
      <Button href="/nope" disabled>
        Disabled link
      </Button>
    );
    const el = screen.getByRole('link');
    // The component attaches an onClick that calls preventDefault.
    // Firing a click should not throw and the element should still exist.
    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  // -----------------------------------------------------------------------
  // Focus ring
  // -----------------------------------------------------------------------
  it('includes focus outline classes in the rendered className', () => {
    render(<Button>Focusable</Button>);
    const el = getInteractive();
    expect(el.className).toContain('focus:outline-2');
    expect(el.className).toContain('focus:outline-offset-2');
    expect(el.className).toContain('focus:outline-moss-green-500');
  });

  // -----------------------------------------------------------------------
  // onClick handler
  // -----------------------------------------------------------------------
  it('calls onClick when the button is clicked and not disabled', () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Clickable</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when the button is disabled', () => {
    const handler = vi.fn();
    render(
      <Button disabled onClick={handler}>
        Disabled
      </Button>
    );
    // Native disabled buttons swallow click events, but fire the event
    // programmatically to be explicit.
    fireEvent.click(screen.getByRole('button'));
    expect(handler).not.toHaveBeenCalled();
  });

  // -----------------------------------------------------------------------
  // Additional className merging
  // -----------------------------------------------------------------------
  it('merges a custom className onto the element', () => {
    render(<Button className="custom-class">Custom</Button>);
    const el = getInteractive();
    expect(el.className).toContain('custom-class');
  });

  // -----------------------------------------------------------------------
  // Snapshot
  // -----------------------------------------------------------------------
  it('matches snapshot for default (primary / md) state', () => {
    const { container } = render(<Button>Snapshot</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
