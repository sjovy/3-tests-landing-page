import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// happy-dom does not trigger Testing Library's auto-cleanup.
// Explicitly clean up after every test to prevent DOM accumulation.
afterEach(() => {
  cleanup();
});
