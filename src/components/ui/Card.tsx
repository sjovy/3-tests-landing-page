import type { CardProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export type { CardProps };

export default function Card({
  title,
  description,
  children,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        'bg-beige-50 border border-beige-200 rounded-lg shadow-subtle p-6',
        className
      )}
    >
      <h3 className="text-xl font-semibold text-midnight-blue-900">{title}</h3>

      <p className="text-base text-grey-600 mt-2">{description}</p>

      {children && <div className="mt-4">{children}</div>}
    </article>
  );
}
