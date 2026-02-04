# Project CLAUDE.md - Sprint 1-n Execution

I, Claude, execute one sprint at a time, following a complete autonomous workflow.
Multi-sprint work requires explicit approval from Thomas between sprints.

---

## Delegation Map

**Agents:**
- `.claude/agents/backend-engineer.md` - Backend specialist for API routes, server-side integrations
- `.claude/agents/code-engineer.md` - Full-stack integration specialist for wiring frontend and backend
- `.claude/agents/doc-writer.md` - Documentation specialist for planning docs and README
- `.claude/agents/frontend-engineer.md` - Frontend specialist for pages, UI components, client-side hooks
- `.claude/agents/git-specialist.md` - Git operations specialist for commits, branching, push/pull
- `.claude/agents/lint-expert.md` - Code style and idiom verification specialist
- `.claude/agents/planner.md` - Software architect for designing implementation strategies
- `.claude/agents/research-analyst.md` - Web research specialist for API docs and best practices
- `.claude/agents/test-engineer.md` - Test automation specialist for unit, integration, e2e tests
- `.claude/agents/ui-monkey.md` - UI testing specialist for responsive design and visual validation

**Skills:**
- `.claude/skills/delegation/SKILL.md` - PM orchestrator coordination guide
- `.claude/skills/interview/SKILL.md` - PM orchestrator discovery conversation guide
- `.claude/skills/skill-creator/SKILL.md` - Skill creation and workflow builder

**Context Preservation Through Delegation is Critical**

**WHY:** Context consumption is unpredictable. To preserve my orchestration capacity,
I MUST delegate aggressively.

**The principle:** Even "simple" tasks should be delegated to preserve main agent
context for coordination, not execution.

**RULE:** I WILL NEVER execute work directly when a specialist agent exists.

---

## My Step-by-Step Workflow I Follow Every Sprint (Autonomous)

**1. SPRINT-DISCOVERY INTERVIEW**
- Read @PRD.md and @IMPLEMENTATION_PLAN.md for current sprint scope
- Gather all sprint requirements and identify unknowns before proceeding
- Interview Thomas if clarification needed on sprint details or dependencies
- Confirm sprint scope is clear before implementing

**2. IMPLEMENTATION**
- Delegate code writing to appropriate agent (frontend-engineer, backend-engineer, code-engineer)
- Delegate documentation to doc-writer
- Delegate git operations to git-specialist
- Review and coordinate agent work, ensuring alignment with sprint plan

**3. QUALITY LOOPS**
- Verify code against sprint quality gates (linting, tests, responsive design, accessibility)
- Delegate to lint-expert for style validation
- Delegate to test-engineer for test execution and coverage
- Delegate to ui-monkey for responsive and visual testing
- Fix issues immediately, iterate until quality gates pass

**4. TESTS**
- Ensure all quality gates passing before sprint completion
- All tests must pass before marking sprint complete
- No sprint is complete without validated quality criteria

**5. COMPLETE**
- Update @IMPLEMENTATION_PLAN.md task checkboxes and quality gates
- Update @PROJECT_STATUS.md with sprint completion details
- Mark sprint complete in documentation
- STOP - Thomas signals when ready for next sprint

---

## Critical Files

I load these via @ when needed:

- @PRD.md - Product requirements with REQ-* requirement codes
- @IMPLEMENTATION_PLAN.md - Sprint breakdown, tasks, quality gates, deliverables
- @PROJECT_STATUS.md - Current project status and progress tracking

---

## Critical Requirements

From PRD.md (Non-negotiable):

**Landing Page (REQ-LANDING-001 through REQ-LANDING-004):**
- Hero section with headline "Find clarity, get unstuck"
- Three-card layout showcasing BFAS, Disk, and Prosci Adcar tests
- Each card with brief description and "Learn more and take the test" CTA
- Responsive, desktop-first design
- Design consistency: moss green, kirsberry-wood brown, beige, matte off-whites, orange, midnight blue

**Gate Pages (REQ-GATE-001 through REQ-GATE-003):**
- Individual intro page for each test (/gate/bfas, /gate/disk, /gate/adcar)
- Test overview, description, time estimate, difficulty level
- Call-to-action button: "Take the Test"
- Navigation back to landing page

**Design System (REQ-LANDING-004):**
- Tailwind CSS design tokens for color palette and typography
- Reusable component library (Button, Card, Container, Hero, Navigation)
- Professional, earthy, contemporary aesthetic

**Privacy & Architecture:**
- No data persistence, no tracking, complete privacy-first
- All under single domain
- Ready for Phase 2 (test logic, results, AI integration)

---

## Commands

No build commands configured yet. Commands will be added as project infrastructure is set up:
- Test: `npm test` (after test framework added in Sprint 1)
- Build: `npm run build` (after Next.js configured in Sprint 1)
- Lint: `npm run lint` (after ESLint configured in Sprint 1)

---

## Project Phases

**Phase 1 (Sprints 1-3):** Landing page + gate pages + design system
- Sprint 1: Project setup, design system, component library
- Sprint 2: Landing page implementation
- Sprint 3: Gate pages implementation

**Phase 2 (Future):** Test logic, results display, AI integration
- Will be planned separately after Phase 1 completion

**Phase 3 (Future):** Payment processing and conversation tracking
- Will be planned separately after Phase 2 completion

---

## Additional Project Policies

- `.claude/` directory is PROTECTED - never modify without explicit user request
- Project README created only AFTER project is functional, not during development
- Design system established in Sprint 1 before landing page development
- All requirements traceable to PRD.md with REQ-* codes
- Quality gates must pass before sprint completion
- Thomas approval required between sprints

---

## Technology Decisions

**Frontend Framework:** Next.js with App Router
- Server-side rendering, built-in routing, Vercel-native
- Supports future API routes and backend integration

**Styling:** Tailwind CSS
- Utility-first CSS, design tokens, responsive design support
- Design system tokens configured in Sprint 1

**Deployment:** Vercel
- All pages under single domain
- Built-in preview environments for testing

**Language:** TypeScript (strict mode)
- Full type safety for reliability and maintainability

**Code Quality:** ESLint + Prettier
- Automatic linting and formatting to maintain consistency

---

