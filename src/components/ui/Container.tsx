import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Max-width wrapper for all page content.
 *
 * - Full width on mobile, capped at max-w-7xl (1200 px) on lg+ breakpoints.
 * - Horizontal padding scales from px-4 (mobile) to px-6 (md+).
 * - No background or border -- intentionally neutral so every page can layer
 *   its own surface colour underneath.
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('w-full max-w-7xl mx-auto px-4 md:px-6', className)}>
      {children}
    </div>
  );
}
