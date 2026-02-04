'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/lib/types';

// ---------------------------------------------------------------------------
// Variant styles
// ---------------------------------------------------------------------------

const variantStyles: Record<string, string> = {
  primary: ['bg-moss-green-500 text-white', 'hover:bg-moss-green-700'].join(
    ' '
  ),

  secondary: [
    'border-2 border-moss-green-500 text-moss-green-500 bg-transparent',
    'hover:bg-moss-green-100',
  ].join(' '),

  ghost: ['text-moss-green-500 bg-transparent', 'hover:underline'].join(' '),
};

// ---------------------------------------------------------------------------
// Size styles
// ---------------------------------------------------------------------------

const sizeStyles: Record<string, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
};

// ---------------------------------------------------------------------------
// Shared base classes (all variants and sizes)
// ---------------------------------------------------------------------------

const BASE =
  'inline-flex items-center justify-center font-medium rounded-md ' +
  'transition-colors duration-200 ' +
  'focus:outline-2 focus:outline-offset-2 focus:outline-moss-green-500';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  onClick,
  children,
  className,
}: ButtonProps) {
  const classes = cn(
    BASE,
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  // --- Link path ----------------------------------------------------------
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </Link>
    );
  }

  // --- Button path --------------------------------------------------------
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Re-export the type so consumers can import it from this module if needed.
export type { ButtonProps } from '@/lib/types';
