# Product Requirements Document
## 3-Tests Landing Page & Gates

**Project:** Standalone landing page with intro/gate pages for three self-assessment tests
**Version:** 1.0
**Date:** 2026-02-04

---

## 1. Vision & Goals

**Mission:**
Provide a clear, inviting entry point for people seeking self-improvement, clarity, and perspective on life challenges. Free assessments + paid AI-powered coaching.

**Primary Goals:**
1. Attract and educate visitors about three personality/insight tests
2. Guide visitors to understand each test and choose which to take
3. Present results in a beautiful, printable format
4. Create foundation for paid AI follow-up coaching

**Success Criteria:**
- Landing page clearly communicates value ("Find clarity, get unstuck")
- Gate pages explain each test and encourage participation
- Results display is professional, printable, and privacy-respecting
- All pages follow cohesive design system (color scheme, typography, spacing)
- Desktop-first responsive design

---

## 2. Target Users & Use Cases

**Primary Users:**
- Self-improvement seekers (personal growth, introspection)
- Recruitment candidates (understanding own competencies)
- People feeling stuck (seeking perspective, new ideas, solutions)

**Use Case:**
User lands on page → reads about three tests → chooses one → reads intro/gate → takes test → receives comprehensive analysis (quantitative + AI-generated text) → offered paid AI follow-up questions

---

## 3. Functional Requirements

### Landing Page

**REQ-LANDING-001:** Hero section with primary headline "Find clarity, get unstuck"
- Clear, compelling headline communicating core value proposition
- Supporting subheading or brief descriptive text
- Visual treatment appropriate to design system

**REQ-LANDING-002:** Three-card layout showcasing the tests
- Each card represents one test (BFAS, Disk, Prosci Adcar)
- Card contains: test name, brief description, call-to-action (CTA)
- CTA text: "Learn more about the test and take it here"
- Cards link to respective gate pages

**REQ-LANDING-003:** Responsive design, desktop-first approach
- Primary layout for desktop (1200px+)
- Mobile/tablet adaptations for smaller screens
- Touch-friendly card interactions

**REQ-LANDING-004:** Design consistency
- All elements follow cohesive color scheme and typography
- Establishes design system foundation for gate + results pages

### Test Gate Pages

**REQ-GATE-001:** Individual intro page for each test
- One page per test: BFAS, Disk, Prosci Adcar
- URL structure: `/gate/bfas`, `/gate/disk`, `/gate/adcar`

**REQ-GATE-002:** Gate page content
- Test name and brief overview
- Explanation of what the test measures
- Time estimate / difficulty level (if applicable)
- Call-to-action button: "Take the Test"
- Design consistent with landing page

**REQ-GATE-003:** Navigation back to landing page
- Easy way for users to return and choose different test

### Results Display (Foundation for Phase 2)

**REQ-RESULTS-001:** One-time results view (no storage, no persistence)
- Results shown immediately after test completion
- No login required
- User cannot retrieve results after leaving page
- No personal data stored

**REQ-RESULTS-002:** Results content structure
- Quantitative summary: key scores/metrics from test
- AI-generated text analysis (real-time, powered by Claude)
- Professional presentation suitable for printing

**REQ-RESULTS-003:** Printable format
- Clean, printer-friendly layout
- Option to print/save as PDF
- Maintains design aesthetic in print

**REQ-RESULTS-004:** Privacy assurance
- Clear messaging that no personal data is retained
- User feels confident about privacy

### AI Integration (Foundation for Phase 2)

**REQ-AI-001:** Preparation for AI-powered follow-up questions
- Results page designed to include CTA for paid AI coaching
- Architecture prepared to handle: Claude API calls, conversation flow, payment integration
- Backend ready for stateless Q&A (no conversation history stored initially)
- Soft limit of ~5 questions per test result (not enforced in code, business rule)

---

## 4. Design Requirements

**Color Scheme:**
- Primary: Moss green, kirsberry-wood brown
- Neutral: Beige, matte off-whites
- Accents: Orange, midnight blue
- Aesthetic: Earthy, masculine, contemporary, Asian-inspired (color philosophy, not cultural elements)

**Typography:**
- Modern, clean typefaces (to be selected during implementation)
- Hierarchy clear: headline > subheading > body text

**Spacing & Layout:**
- Generous whitespace, uncluttered
- Desktop-first responsive grid
- Card-based design on landing page

**Visual Elements:**
- Minimal, modern visual treatment (no cultural iconography)
- Icons for each test (if used, must be cohesive)
- Professional, not playful

---

## 5. Technical Requirements

**Frontend Stack:**
- React or Next.js
- Responsive CSS framework (Tailwind, styled-components, or similar)
- Modern tooling and build pipeline

**Backend Stack:**
- Node.js + Express OR Next.js API routes
- RESTful or API route-based architecture
- Ready to integrate: Claude API for AI analysis, payment processing (Stripe) for follow-ups

**Deployment:**
- Vercel
- All pages under single domain

**Database:**
- Not required for Phase 1 (landing + gate pages are static/semi-static)
- Reserved for Phase 2: results storage, anonymous analytics (if desired), conversation history (if storing follow-ups)

**Privacy & Security:**
- No personal data collection on landing page
- No cookies tracking user behavior
- HTTPS enforced
- Privacy-first mindset throughout

---

## 6. Out of Scope (Phase 1)

- Test logic/scoring implementation (comes in Phase 2)
- Results page implementation (comes in Phase 2)
- AI integration/Claude API calls (comes in Phase 2)
- Payment processing (Stripe setup, comes in Phase 2)
- User authentication/accounts
- Data persistence or analytics
- Actual test content/questions
- RAG material organization (done separately, integrated in Phase 2)

---

## 7. Deliverables & Phase Breakdown

**Phase 1 Deliverables:**
1. Landing page (desktop + responsive)
2. Three gate pages (one per test)
3. Design system documentation (colors, typography, spacing)
4. Component library (buttons, cards, layout primitives)
5. Project structure ready for Phase 2 (test logic, results)

**Future Phases:**
- Phase 2: Test logic + results display + AI integration
- Phase 3: Payment processing + conversation tracking

---

## 8. Assumptions & Constraints

**Assumptions:**
- Test scoring formulas (BFAS, Disk) are known and documented
- Prosci Adcar scoring rubric exists
- RAG material (guidelines, context for AI coaching) will be provided separately
- Claude API will be used for AI-generated text analysis

**Constraints:**
- Single domain for all content
- Privacy-first: no data persistence for test results
- Desktop-first design approach
- Vercel deployment
- No user login/authentication required for testing

---

## 9. Success Metrics (Post-Launch)

- Landing page loads quickly and clearly communicates value
- High click-through rate from cards to gate pages
- Gate pages successfully guide users to take tests
- Results display is professional and printable
- User feedback: "Clear, clean, easy to use"
- Foundation solid enough to add test logic and AI coaching without refactoring

