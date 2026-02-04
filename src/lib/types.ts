import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Test identity
// ---------------------------------------------------------------------------

export type TestName = 'bfas' | 'disk' | 'adcar';

// ---------------------------------------------------------------------------
// Button
// ---------------------------------------------------------------------------

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

export interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}
