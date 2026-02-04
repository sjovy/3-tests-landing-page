import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import Button from '@/components/ui/Button';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface NavigationProps {
  /**
   * When true a "Back to Tests" link is rendered on the right side.
   * Intended for gate / detail pages; omit (or set false) on the landing page.
   */
  showBack?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Site-wide navigation bar.
 *
 * - Left: logo placeholder (text "Tests").
 * - Right: conditional "Back to Tests" link rendered as a ghost Button that
 *   navigates to the landing page via Next.js Link (handled internally by
 *   Button when an href is supplied).
 */
export default function Navigation({
  showBack = false,
  className,
}: NavigationProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'flex items-center justify-between px-6 py-4 bg-beige-50 border-b border-beige-200',
        className
      )}
    >
      {/* Logo placeholder */}
      <span className="text-xl font-bold text-midnight-blue-900">Tests</span>

      {/* Conditional back link */}
      {showBack && (
        <Button variant="ghost" size="sm" href={ROUTES.home}>
          Back to Tests
        </Button>
      )}
    </nav>
  );
}
