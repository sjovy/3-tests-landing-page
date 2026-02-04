import type { TestName } from './types';

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

export const ROUTES = {
  home: '/',
  gateBfas: '/gate/bfas',
  gateDisk: '/gate/disk',
  gateAdcar: '/gate/adcar',
} as const;

// ---------------------------------------------------------------------------
// Test metadata
// ---------------------------------------------------------------------------

interface TestMetadataEntry {
  name: TestName;
  slug: string;
  title: string;
  description: string;
}

export const TEST_METADATA: TestMetadataEntry[] = [
  {
    name: 'bfas',
    slug: 'bfas',
    title: 'BFAS',
    description:
      'En kortfattad personlighetstest som mäter fem centrala karaktärstdrag.',
  },
  {
    name: 'disk',
    slug: 'disk',
    title: 'DiSC',
    description:
      'Kartlägg din arbetslivsstil genom fyra ledande beteendemönster.',
  },
  {
    name: 'adcar',
    slug: 'adcar',
    title: 'Prosci Adkar',
    description:
      'Beräkna din beredskap för förändring med Prosci Adkars fem steg.',
  },
];
