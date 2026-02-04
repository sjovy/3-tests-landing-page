# Implementation Plan: 3-Tests Landing Page & Gates
## Phase 1 Delivery Plan

**Project:** 3-Tests Landing Page + Gate Pages
**Phase:** 1 (Landing page, gate pages, design system)
**Date:** 2026-02-04
**Status:** Ready for execution

---

## Overview

Phase 1 delivers a responsive landing page, three test gate pages, and a design system foundation. All pages are static/semi-static with no backend logic required. Architecture is structured to support Phase 2 (test logic, results, AI integration).

### Sprint Structure
- **Sprint 1:** Project setup, design system, foundational components
- **Sprint 2:** Landing page hero and card layout
- **Sprint 3:** Three gate pages with consistent styling

Each sprint builds on previous work and is independently testable.

---

## Sprint 1: Project Setup & Design System

### Goal
Establish Next.js project structure, design system tokens (colors, typography, spacing), and build foundational UI components (buttons, cards, layout primitives) that will be reused across landing and gate pages.

### Scope
- REQ-LANDING-004 (Design consistency): Color palette, typography, spacing system
- Foundation for REQ-LANDING-002, REQ-GATE-002 (Cards, buttons, layout components)

### Entry Criteria
- Fresh development environment
- No existing code/components
- Team access to design specifications (colors, typography)

### Exit Criteria
- Next.js project initialized and running locally
- Design system tokens (Tailwind config) documented
- Foundational components built (Button, Card, Container, Hero layout primitives)
- All components pass responsive validation (mobile, tablet, desktop)
- Linting and formatting configured and passing
- README with setup instructions created
- All tests passing (component snapshot tests)

### Tasks

#### 1.1 Initialize Next.js Project & Configure Build Tools
- [ ] Initialize Next.js project with App Router
- [ ] Create src/app structure
- [ ] Configure next.config.js with build and image optimization
- [ ] Set up environment configuration for Vercel deployment
- **Deliverable:** Running Next.js dev server, next.config.js configured

#### 1.2 Configure Tailwind CSS & Design Tokens
- [ ] Define design system tokens per REQ-LANDING-004
- [ ] Create Tailwind config with color palette (moss green, kirsberry-wood brown, beige, matte off-whites, orange, midnight blue)
- [ ] Define typography scale (headings, body, captions)
- [ ] Define spacing scale (consistent with design)
- [ ] Create CSS variables for reusable patterns
- [ ] Create global.css with design system foundation
- **Deliverable:** tailwind.config.ts with complete color/spacing/typography system, global.css

#### 1.3 Set Up Linting & Code Style
- [ ] Configure ESLint, Prettier, and TypeScript
- [ ] Create .eslintrc.json with recommended rules
- [ ] Create prettier.config.js with project style guide
- [ ] Configure tsconfig.json for strict TypeScript
- [ ] Add lint/format scripts to package.json
- **Deliverable:** Linter and formatter configured, lint script working

#### 1.4 Create Utility Functions & Types
- [ ] Build utility layer for frontend
- [ ] Create src/lib/utils.ts with cn() class merger
- [ ] Create src/lib/types.ts with shared types (test names, routes)
- [ ] Create src/lib/constants.ts (routes, test metadata)
- **Deliverable:** utils.ts, types.ts, constants.ts with basic utilities

#### 1.5 Build Foundational UI Components
- [ ] Create reusable component library per REQ-LANDING-004 and REQ-LANDING-002
- [ ] Button component (primary, secondary variants, sizes)
- [ ] Card component (standardized layout for test cards)
- [ ] Container component (responsive width constraints)
- [ ] Hero component (headline + subheading layout)
- [ ] Navigation component (logo + back link)
- [ ] Stack/Flex layout primitives
- **Deliverable:** Component files in src/components/ui/ with Tailwind styling

#### 1.6 Create Component Documentation & Snapshot Tests
- [ ] Document components and test rendering
- [ ] Create snapshots for each component (Button, Card, Container, Hero, Nav)
- [ ] Verify responsive rendering at mobile/tablet/desktop breakpoints
- [ ] Document component props and usage in comments
- **Deliverable:** Component snapshot tests passing, component files documented

#### 1.7 Create README with Setup Instructions
- [ ] Document project setup and development workflow
- [ ] Installation steps
- [ ] Running development server
- [ ] Project structure overview
- [ ] Contributing guidelines
- [ ] Deployment to Vercel steps
- **Deliverable:** README.md in project root

### Quality Gates

- [ ] **Linting:** All components pass ESLint and Prettier checks
- [ ] **Tests:** All component snapshot tests passing
- [ ] **Responsive:** All components render correctly at 375px, 768px, 1440px
- [ ] **TypeScript:** No type errors (build succeeds)
- [ ] **Accessibility:** Button, Card, Nav components are semantic and keyboard-navigable

### Key Files

- `src/app/layout.tsx` - Root layout with design system
- `src/app/globals.css` - Global styles and design tokens
- `tailwind.config.ts` - Tailwind design system configuration
- `src/components/ui/Button.tsx` - Reusable button component
- `src/components/ui/Card.tsx` - Reusable card component
- `src/components/ui/Container.tsx` - Layout container
- `src/components/ui/Hero.tsx` - Hero section primitives
- `src/components/ui/Navigation.tsx` - Navigation header
- `src/lib/utils.ts` - Utility functions
- `src/lib/types.ts` - Shared TypeScript types
- `src/lib/constants.ts` - Constants (routes, test data)
- `.eslintrc.json` - Linter configuration
- `prettier.config.js` - Code formatter configuration
- `package.json` - Project dependencies and scripts
- `README.md` - Setup and contribution guide

### Dependencies

- No external sprint dependencies (this is the foundation)
- Blocks: Sprint 2, Sprint 3

---

## Sprint 2: Landing Page Implementation

### Goal
Build the landing page with hero section and three-card layout showcasing the tests. Page is responsive, follows design system from Sprint 1, and links to gate pages.

### Scope
- REQ-LANDING-001 (Hero section with headline "Find clarity, get unstuck")
- REQ-LANDING-002 (Three-card layout for BFAS, Disk, Prosci Adcar tests)
- REQ-LANDING-003 (Responsive desktop-first design)

### Entry Criteria
- Sprint 1 complete and all quality gates passing
- Design system tokens and components available
- Project running locally without errors

### Exit Criteria
- Landing page displays correctly at all breakpoints (375px, 768px, 1440px)
- Hero section shows headline, subheading, and visual treatment
- Three cards display test information and CTAs
- Cards link to correct gate page routes (/gate/bfas, /gate/disk, /gate/adcar)
- Page passes accessibility checks (heading hierarchy, semantic HTML, link text)
- All responsive design tests passing
- Linting and formatting passing
- Visual inspection confirms design system alignment

### Tasks

#### 2.1 Create Landing Page Layout & Hero Section
- [ ] Build page with hero section per REQ-LANDING-001
- [ ] Create src/app/page.tsx (landing page)
- [ ] Add headline "Find clarity, get unstuck"
- [ ] Add supporting subheading describing value proposition
- [ ] Style headline according to design system (typography, color, spacing)
- [ ] Add visual background treatment
- **Deliverable:** src/app/page.tsx with hero section

#### 2.2 Build Three-Test Card Section
- [ ] Create test card layout per REQ-LANDING-002
- [ ] Create src/components/TestCardGrid.tsx
- [ ] Define test metadata (name, description, link) for BFAS, Disk, Prosci Adcar
- [ ] Build responsive grid (1 column mobile, 2-3 columns desktop)
- [ ] Each card shows test name, brief description, "Learn more and take the test" CTA
- [ ] Cards link to /gate/[testName] routes
- **Deliverable:** TestCardGrid.tsx component, integrated into page.tsx

#### 2.3 Implement Responsive Behavior
- [ ] Ensure mobile-first responsive design per REQ-LANDING-003
- [ ] Test layout at 375px, 768px, 1440px
- [ ] Cards stack vertically on mobile, grid layout on tablet/desktop
- [ ] Typography scales appropriately for screen size
- [ ] Touch targets are minimum 44x44 pixels
- [ ] Images/visuals scale responsively
- **Deliverable:** Page renders correctly on all screen sizes

#### 2.4 Add Navigation & Metadata
- [ ] Complete page metadata and navigation
- [ ] Add page title and meta description to layout.tsx
- [ ] Import Navigation component for consistent header
- [ ] Ensure proper heading hierarchy (h1 for main headline)
- [ ] Set up favicon and OpenGraph tags for sharing
- **Deliverable:** page.tsx with metadata, proper semantic HTML

#### 2.5 Visual Testing & Design System Validation
- [ ] Verify design consistency per REQ-LANDING-004
- [ ] Color palette matches design system
- [ ] Typography matches Tailwind config
- [ ] Spacing and layout use design system scale
- [ ] Buttons and cards use component variants from Sprint 1
- [ ] No hardcoded colors or spacing
- **Deliverable:** Screenshots of landing page at all breakpoints

### Quality Gates

- [ ] **Responsive:** Page renders correctly at 375px, 768px, 1440px
- [ ] **Accessibility:** Headings in proper hierarchy, links have descriptive text, color contrast passes WCAG AA
- [ ] **Design System:** All colors, fonts, spacing from Tailwind config (no inline styles)
- [ ] **Linting:** Code passes ESLint and Prettier checks
- [ ] **Links:** All three cards link to correct gate pages
- [ ] **Performance:** Page loads in <3 seconds (Lighthouse check)

### Key Files

- `src/app/page.tsx` - Landing page
- `src/components/TestCardGrid.tsx` - Test cards grid layout
- `src/app/layout.tsx` - Updated with meta tags
- Design system tokens from Sprint 1

### Dependencies

- **Depends on:** Sprint 1 (design system, components)
- **Blocks:** Sprint 3 (gate pages need navigation pattern)

---

## Sprint 3: Gate Pages Implementation

### Goal
Build three individual gate pages (one per test) with intro/context content, test overview, and CTA to take the test. Pages follow design system and link back to landing page.

### Scope
- REQ-GATE-001 (Individual intro page per test: BFAS, Disk, Prosci Adcar)
- REQ-GATE-002 (Gate page content: test name, overview, time estimate, CTA button)
- REQ-GATE-003 (Navigation back to landing page)
- REQ-LANDING-003, REQ-LANDING-004 (Responsive design, design consistency)

### Entry Criteria
- Sprint 1 complete (design system, components)
- Sprint 2 complete (landing page establishes pattern)
- Routes (/gate/[testName]) defined in Next.js
- Test metadata available (name, description, time estimate, overview text)

### Exit Criteria
- All three gate pages created and rendering
- Each page has correct URL route (/gate/bfas, /gate/disk, /gate/adcar)
- Content displayed: test name, overview, time estimate, difficulty level, CTA button
- Back-to-landing navigation works on all pages
- Pages responsive at 375px, 768px, 1440px
- Design consistency with landing page verified
- All accessibility checks passing
- Linting and formatting passing

### Tasks

#### 3.1 Create Gate Page Dynamic Route Structure
- [ ] Set up dynamic routing for gate pages per REQ-GATE-001
- [ ] Create src/app/gate/[test]/page.tsx dynamic route
- [ ] Create src/lib/gatePageData.ts with test metadata (BFAS, Disk, Prosci Adcar)
- [ ] Define test data structure: name, description, overview, time estimate, difficulty
- [ ] Implement dynamic page rendering based on test param
- [ ] Add 404 handling for invalid test names
- **Deliverable:** src/app/gate/[test]/page.tsx, gatePageData.ts with test metadata

#### 3.2 Build Gate Page Layout & Content
- [ ] Create gate page UI layout per REQ-GATE-002
- [ ] Create src/components/GatePageLayout.tsx (reusable layout)
- [ ] Display test name as h1
- [ ] Show test overview/description paragraph
- [ ] Display time estimate
- [ ] Display difficulty level (if applicable)
- [ ] Add additional context about what test measures
- [ ] Style consistently with landing page
- **Deliverable:** GatePageLayout.tsx, populated with test content

#### 3.3 Add Call-to-Action & Navigation
- [ ] Create CTA and navigation per REQ-GATE-002 and REQ-GATE-003
- [ ] Add "Take the Test" button (primary CTA)
- [ ] Disable button if test logic not yet available
- [ ] Add "Back to Tests" link to return to landing page
- [ ] Ensure navigation is prominent and easy to find
- **Deliverable:** CTA button, back navigation in gate page

#### 3.4 Implement Responsive & Design System Consistency
- [ ] Ensure responsive and consistent design per REQ-LANDING-003 and REQ-LANDING-004
- [ ] Test all three pages at 375px, 768px, 1440px
- [ ] Verify color palette matches landing page
- [ ] Typography and spacing use design system
- [ ] Cards, buttons, layout use Sprint 1 components
- [ ] No hardcoded styles or values
- **Deliverable:** Gate pages render correctly across breakpoints

#### 3.5 Add Page Metadata & SEO
- [ ] Complete page metadata for each gate
- [ ] Dynamic meta titles and descriptions (per test)
- [ ] Proper heading hierarchy
- [ ] OpenGraph tags for sharing
- [ ] Ensure each gate page is unique and identifiable
- **Deliverable:** Updated layout.tsx or dynamic meta generation

#### 3.6 Visual Testing & UI Validation
- [ ] Test all gate pages in browser
- [ ] Load each gate page (/gate/bfas, /gate/disk, /gate/adcar)
- [ ] Verify content displays correctly
- [ ] Test back-to-landing navigation
- [ ] Test responsive behavior
- [ ] Check for console errors
- [ ] Verify links work and styling is consistent
- **Deliverable:** Screenshots of all three gate pages at multiple breakpoints

### Quality Gates

- [ ] **Routes:** All three gate pages accessible at /gate/bfas, /gate/disk, /gate/adcar
- [ ] **Content:** Each page displays test name, overview, time estimate, CTA, back link
- [ ] **Responsive:** All pages render correctly at 375px, 768px, 1440px
- [ ] **Consistency:** Design and styling matches landing page and design system
- [ ] **Accessibility:** Heading hierarchy correct, links descriptive, color contrast passes WCAG AA
- [ ] **Navigation:** Back-to-landing link works from all pages
- [ ] **Linting:** Code passes ESLint and Prettier checks
- [ ] **Error Handling:** Invalid test names show 404 gracefully

### Key Files

- `src/app/gate/[test]/page.tsx` - Dynamic gate page route
- `src/components/GatePageLayout.tsx` - Reusable gate page layout
- `src/lib/gatePageData.ts` - Test metadata (name, description, time, overview)
- Design system tokens from Sprint 1

### Dependencies

- **Depends on:** Sprint 1 (design system), Sprint 2 (navigation pattern)
- **Blocks:** None (Phase 1 complete)

---

## Phase 1 Testing & Quality Gates

### Responsive Design Testing (All Sprints)
- Verify all pages at mobile (375px), tablet (768px), desktop (1440px)
- Check touch targets (minimum 44x44px on mobile)
- Verify images scale responsively
- Check text readability at all sizes

### Component Testing (Sprint 1)
- Unit tests: Button, Card, Container, Hero, Navigation components
- Snapshot tests for visual regression detection
- Accessibility tests (keyboard navigation, focus states)

### Integration Testing (Sprint 2-3)
- Landing page: Hero renders, cards link to gate pages
- Gate pages: Content displays, back navigation works, responsive
- Cross-page navigation works (landing → gate → landing)

### Visual Testing (All Sprints)
- Design consistency: colors, typography, spacing match design system
- No hardcoded values or inline styles
- Consistent visual treatment across pages

### Accessibility Testing (All Sprints)
- Heading hierarchy correct (h1, h2, h3 in order)
- Links have descriptive text
- Color contrast meets WCAG AA standards
- Keyboard navigation works
- Semantic HTML used throughout

### Performance Testing (Sprint 2-3)
- Lighthouse score >90 for desktop and mobile
- Page load time <3 seconds
- Core Web Vitals met (LCP, CLS, FID)

---

## Post-Sprint Deliverables (Phase 1 Complete)

### 1. Deployed Project
- All three pages live on Vercel
- HTTPS enforced
- Environment variables configured

### 2. Design System Documentation
- Tailwind config documented (colors, typography, spacing)
- Component library documented (Button, Card, Hero, etc. with props)
- Design philosophy documented (color palette, aesthetic)

### 3. Project Structure & Handoff
- Clear folder structure documented
- TypeScript types documented
- Pattern examples for Phase 2 developers

### 4. README & Contributing Guide
- Setup and dev instructions
- Deployment steps
- Contributing guidelines for Phase 2 work

---

## Key Architecture Decisions

### 1. Next.js App Router
- **Rationale:** Server-side rendering, built-in routing, Vercel-native, supports future API routes
- **Trade-off:** Supports modern React practices and prepares for Phase 2

### 2. Tailwind CSS for Styling
- **Rationale:** Utility-first CSS, design tokens, responsive design support
- **Trade-off:** Larger HTML class names vs. cleaner component code and consistency

### 3. Design System First
- **Rationale:** Reusable components reduce duplication, ensure consistency, prepare for Phase 2
- **Trade-off:** More upfront work in Sprint 1, but faster Phase 2 execution

### 4. No Backend in Phase 1
- **Rationale:** Landing and gate pages are static/semi-static, no data required
- **Trade-off:** Phase 2 will need API routes, but no additional refactoring needed

### 5. Dynamic Gate Pages with [test] Route
- **Rationale:** Single codebase for three similar pages, easier maintenance, consistent pattern
- **Trade-off:** Requires centralized test metadata, but more flexible and scalable

---

## Execution Checklist

### Before Starting
- [ ] Thomas approves this implementation plan
- [ ] GitHub repository created (if using version control)

### Sprint 1
- [ ] Code-engineer + frontend-engineer: Build project setup and components
- [ ] Lint-expert: Validate code style
- [ ] Test-engineer: Verify component tests pass
- [ ] Doc-writer: Create README
- [ ] Commit with clear messages

### Sprint 2
- [ ] Frontend-engineer: Build landing page
- [ ] UI-monkey: Test responsive rendering and links
- [ ] Lint-expert: Validate style
- [ ] Commit changes

### Sprint 3
- [ ] Frontend-engineer: Build gate pages
- [ ] UI-monkey: Test all three gate pages and navigation
- [ ] Lint-expert: Validate style
- [ ] Commit changes

### Phase 1 Complete
- [ ] All tests passing
- [ ] All pages deployed to Vercel
- [ ] README and design system documented
- [ ] Thomas approves Phase 1 completion
- [ ] Ready for Phase 2 planning

---

**Plan Created:** 2026-02-04
**Version:** 1.0
**Status:** Ready for Execution
