import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface HeroProps {
  /** Main page headline -- rendered as an <h1>. */
  headline: string;
  /**
   * Optional tagline rendered as a <p> directly below the headline.
   *
   * Design note: a <p> is preferred over <h2> here.  The subheading is
   * descriptive / marketing copy, not a structural document heading.  Using
   * <h2> would pollute the heading outline for screen readers.
   */
  subheading?: string;
  /** Flexible content slot -- e.g. a CTA button (wired up in Sprint 2). */
  children?: ReactNode;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Hero section with headline and optional subheading.
 *
 * Background and imagery are intentionally absent -- Sprint 2 layers those
 * on top by wrapping this component in a styled section.
 */
export default function Hero({
  headline,
  subheading,
  children,
  className,
}: HeroProps) {
  return (
    <section className={cn('py-12 md:py-16 text-center', className)}>
      <h1 className="text-4xl md:text-5xl font-bold text-midnight-blue-900 leading-tight tracking-tighter">
        {headline}
      </h1>

      {subheading && (
        <p className="mt-4 text-lg md:text-xl text-grey-700 leading-snug">
          {subheading}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
