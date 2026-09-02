# SUVAN — PORTFOLIO CONTEXT / MASTER REFERENCE
_Last updated: 2026-09-02_

> Purpose: This is the reusable source-of-truth context for revising Suvan's developer portfolio with Antigravity. Keep this file updated whenever a new internship, project, achievement, role, certification, competition, LinkedIn update, photo, or career milestone is added.

---

## 1. PORTFOLIO DIRECTION

### Core goal
Build a portfolio that feels like it was made by a real developer, not generated from an AI portfolio template.

### Visual direction to preserve
- Dark background
- Warm accent tone
- Serif + sans typography pairing
- Overall existing architecture/layout
- Hero, About, Projects, Skills, Contact sections
- Preserve the original design intent; improve texture, hierarchy, personality and information density rather than replacing the whole site

### Explicit implementation plan already reviewed
The existing portfolio review identified:
- Repetitive AI-style copywriting
- Identical section anatomy
- Generic stat-card grid
- Generic gold-on-dark palette
- Redundant skills ticker
- Duplicate availability messaging
- Too little visible personality
- Duplicated CSS blocks
- Navigation referencing a missing Experience section
- Generic photo treatment

### Planned changes
#### Colors / typography
- Replace `#c8a96e` with `#d4a053`
- Add muted slate-blue `#6b8aad`
- Reduce serif usage; reserve it mainly for name/section titles
- Use monospace/sans styling for developer-oriented numeric information
- Remove duplicated CSS blocks

#### Hero
- Remove "AVAILABLE FOR FULL-TIME ROLES"
- Keep the cleaner Open-to-work badge
- Replace generic "Hello, I'm" treatment with a more direct developer identity
- Possible code-style detail such as `// suvan`
- Add a subtle monospace/GitHub/building-now detail
- Improve photo treatment with a restrained overlay/blend treatment

#### About
- Remove the four-stat grid
- Replace it with a more useful/personality-driven "Currently" block or compact timeline
- Potential examples already proposed:
  - Currently building: FinSight AI
  - Riding: TVS Apache RTR 160 4V
  - Reading about: Indian history
- Avoid forcing personality into a gimmicky heading; let the content carry it

#### Projects
- Rename heading to "Work" or "Projects"
- Make FinSight AI visually featured/dominant
- Add numbered labels: 01, 02, 03...
- Give projects subtle individual hover accents

#### Skills
- Rename heading to "Stack" or "Toolkit"
- Remove/rework scrolling ticker
- Keep categorized skill pills
- Add subtle proficiency indicators if useful

#### Contact
- Place Contact after Skills and before footer
- Use direct heading such as "Get in touch" or "Say hello"

#### Navigation
- Remove "Experience" only if no Experience section is added
- Ensure all nav links point to real section IDs
- If an Experience section is created, it should contain genuine internship/work history rather than filler

#### JavaScript
- Fix mailto from placeholder to `suvan0797@gmail.com`
- Add staggered fade-in for project cards
- Extend fade-in treatment beyond Hero/About where it improves UX

#### CSS polish
- Delete duplicate CSS block
- Introduce intentional asymmetry
- Add subtle background grain/noise texture
- Improve hover-state variety instead of repeating one transform everywhere

---

# 2. PERSONAL BRAND

## Positioning
Suvan is building toward software/development roles, with particular interest in backend, AI, Salesforce/technical consulting, and practical engineering.

The portfolio should communicate:
- Builder mindset
- Ability to learn unfamiliar technologies
- Practical project execution
- AI-assisted/agentic engineering workflow
- Strong problem-solving / DSA foundation
- Willingness to work across software stacks
- Career trajectory rather than pretending to already be a senior engineer

## Personality signals worth surfacing
These are useful because they make the site feel human rather than templated:
- TVS Apache RTR 160 4V
- Interest in financial markets
- Interest in Indian history
- Current/featured project: FinSight AI

Do not turn these into gimmicky "fun fact" cards. Use them naturally.

---

# 3. EDUCATION

## SRM Institute of Science and Technology, Chennai
- Degree: B.Tech in Computer Science and Engineering
- CGPA: 9.23 / 10
- Duration: Aug 2022 – Jun 2026

## SBOA School and Junior College, Chennai
- Higher Secondary (12th): 79.4% (Mar 2022)
- Secondary (10th): 82.6% (Mar 2020)

---

# 4. INTERNSHIPS / EXPERIENCE

## 1. Intellect Design Arena, Chennai — Software Engineering Intern
- Dates: May 2026 – Aug 2026
- Focus: Enterprise fintech backend engineering (Java, Spring Boot, REST APIs, Kafka, PL/SQL, Maven, Jira)
- Work:
  - Contributed to Java Spring Boot backend services for enterprise fintech applications.
  - Debugged REST APIs, business logic, SQL mappings, XML configurations, and Angular integrations.
  - Implemented standardized exception logging across multiple backend services.
  - Worked with enterprise event-driven streaming fundamentals (Kafka).

## 2. Supraja Technologies, Vijayawada — Cyber Security Intern
- Dates: May 2025 – Jul 2025
- Focus: Application security assessment & API penetration testing
- Work:
  - Audited authentication, input validation, and session management across multiple web applications, identifying 10+ critical security vulnerabilities.
  - Executed SQL Injection and XSS testing against backend APIs.
  - Proposed code-level remediation strategies to improve API security and server-side validation.

## 3. Salesforce Graduate Builder Lab / AI Builder
- Focus: Agentic AI-assisted engineering assessment (15-min plan → 90-min build → 45-min pitch)
- Note: Accurately described as technical builder lab participation.

Known context:
- Salesforce Graduate Builder Lab / AI Builder process
- Assessment/workflow centered on AI-assisted / agentic engineering
- The user's preparation framework emphasized:
  - 15-minute planning
  - 90-minute build
  - 45-minute pitch / technical defense
- Evaluation emphasis included engineering judgment, architecture, directing an AI coding/agent copilot, validation, debugging, and defending technical decisions
- The Builder Lab process ultimately concluded without selection
- IMPORTANT: This outcome should NOT be framed as a Salesforce employment/internship or as a successful selection.
- It can still be presented as a meaningful achievement/experience if described accurately: participation in a Salesforce Graduate Builder Lab / AI Builder process, what was built/learned, and the technical workflow involved.
- A separate Salesforce Associate Technical Consultant opportunity remained active after the Builder Lab outcome. Do not imply the Builder Lab rejection closed all Salesforce opportunities.

### Portfolio presentation
The user specifically wants to add the Salesforce Builder Lab to the portfolio, potentially with photos similar to the LinkedIn post/update they made recently.

> Add the actual photos/media and exact captions/description from the user's latest LinkedIn post when available. Do not fabricate photo contents, dates, badges, selection status, or claims.

---

# 5. PROJECTS

## FinSight AI
This is the currently highlighted/featured project.

Known context:
- It should receive visual priority in the Projects section.
- It has also been referenced as something the user is "currently building."

> Exact project description, architecture, technologies, AI components, features, deployment status, GitHub link, demo link and measurable outcomes should be filled from the latest project source.

## Other projects
The old portfolio apparently represented 4 projects.

> Do not invent project names/details. Populate this section from the actual existing portfolio/project repositories when supplied.

---

# 6. TECHNICAL PROFILE

## DSA / coding
- The user has practiced LeetCode-style DSA primarily in Python.
- They are now revising DSA in Java as part of placement preparation.
- Java is a newer language for them compared with Python.
- The goal is to become capable of writing common DSA patterns/solutions in Java rather than remaining in a Python comfort zone.

## JavaScript
- The user has been revising JavaScript for Salesforce Associate Technical Consultant preparation.
- Portfolio should list JavaScript only to the level supported by actual project/interview preparation experience.

## AI-assisted development
A major part of the user's recent engineering preparation is using AI coding/agent copilots effectively rather than treating AI as a replacement for engineering judgment.

Useful portfolio positioning:
- AI-assisted development
- Agentic workflows
- Prompting/directing coding agents
- Validation and debugging of AI-generated implementations
- Architecture and technical decision-making

Do not claim advanced production expertise unless supported by actual work.

## Salesforce
Relevant Salesforce career context:
- Graduate Builder Lab / AI Builder participation
- Associate Technical Consultant opportunity
- Interest in Salesforce/backend/AI opportunities
- Long-term interest in potentially moving internally toward development if entering a technical consulting path

---

# 7. ACHIEVEMENTS / CAREER SIGNALS

## Strong items to consider
1. CGPA 9.15/10
2. Salesforce Graduate Builder Lab / AI Builder participation
3. Cybersecurity internship
4. FinSight AI
5. Other verified projects
6. Verified certifications, hackathons, awards, coding achievements and competition results once supplied

### Rule
Do not inflate participation into selection, employment, awards, or offers.

Use precise wording:
- "Participated in..."
- "Built..."
- "Selected for..." only when selection is actually verified
- "Advanced to..." only when actually verified
- "Received..." only for a real award/certificate
- "Worked as..." only for genuine employment/internship

---

# 8. SALESFORCE CAREER CONTEXT

The user's Salesforce journey has two distinct tracks:

### Track A — Graduate Builder Lab / AI Builder
- Process concluded
- User was not selected
- Still valuable as a technical/engineering experience to document accurately

### Track B — Associate Technical Consultant
- Separate opportunity
- User received consideration/invitation/info-session opportunity
- This should not be described as the same process as Builder Lab
- Do not state that a Salesforce-wide cooldown blocks this opportunity

This distinction matters whenever the portfolio or resume describes Salesforce experience.

---

# 9. PORTFOLIO COPY PRINCIPLES

Avoid:
- "actually" repeated across sections
- Generic AI phrases
- Overly polished corporate fluff
- Fake metrics
- Empty claims like "passionate developer" without evidence
- Repetitive heading formula:
  `small label → serif heading → italic gold word`
- Generic statements that could belong to any developer

Prefer:
- Short, direct headings
- Specific technical details
- Evidence over adjectives
- Real project decisions
- Concrete technologies
- What was built
- What problem it solves
- What the user learned
- What tradeoffs were made
- Human details used sparingly

---

# 10. INFORMATION TO KEEP ADDING

Whenever the user provides new information, update this file under the appropriate heading.

### Personal
- Full professional name
- Location (only if user wants it public)
- Professional headline
- GitHub handle
- LinkedIn
- Email
- Portfolio domain
- Resume link

### Education
- Degree
- College/university
- Department/specialization
- Start/end dates
- CGPA
- Academic awards

### Experience
For each internship/job:
- Company
- Role
- Dates
- Location/remote
- Responsibilities
- Technologies
- Projects/deliverables
- Measurable outcomes
- Links/proof

### Projects
For each:
- Name
- One-line value proposition
- Problem
- Solution
- Tech stack
- Architecture
- AI/ML components
- Key features
- Challenges
- Metrics
- GitHub
- Demo
- Screenshots

### Achievements
- Awards
- Hackathons
- Competitive programming
- Certifications
- Selections
- Scholarships
- Leadership
- Publications

### Media
- LinkedIn post URLs
- Salesforce Builder Lab photos
- Certificates
- Project screenshots
- Demo videos
- Event photos

---

# 11. SOURCE-OF-TRUTH RULES FOR ANTIGRAVITY

When asking Antigravity to modify the portfolio:

1. Treat this file as the factual source of truth for Suvan's personal information.
2. Never invent missing companies, roles, achievements, metrics, dates or technologies.
3. If a fact is absent, leave a clearly marked placeholder instead of hallucinating.
4. Preserve verified distinctions, especially:
   - Builder Lab participation ≠ Salesforce employment
   - Builder Lab non-selection ≠ rejection from every Salesforce role
5. Keep the existing visual identity unless a deliberate redesign is requested.
6. Make the portfolio feel handcrafted through information hierarchy, asymmetry, real evidence and personality — not through excessive animations or fake developer gimmicks.
7. Every public-facing claim should be defensible from a real source: project repo, certificate, LinkedIn post, internship record, resume, or user-provided fact.
8. Prefer evidence-rich content over decorative filler.

---

# 12. CURRENT IMPLEMENTATION STATUS

## Agreed direction
- [x] Preserve dark/warm visual identity
- [x] Reduce AI-template feel
- [x] Remove repetitive "actually" copy
- [x] Replace generic stat grid
- [x] Feature FinSight AI
- [x] Rework/remove skills ticker
- [x] Fix navigation structure
- [x] Move Contact after Skills
- [x] Fix mailto
- [x] Clean duplicate CSS
- [x] Add more human personality
- [x] Add Salesforce Builder Lab as a real portfolio achievement/experience
- [ ] Add verified Salesforce photos/media
- [ ] Add complete internship details
- [ ] Add complete project details
- [ ] Add complete education details
- [ ] Add complete achievements/certifications
- [ ] Finalize public-facing copy
- [ ] Final visual QA on desktop/mobile

---

# 13. IMPORTANT: DO NOT GUESS

This file is intentionally designed to grow.

If a future portfolio revision needs information not present here, ask the user for the missing fact or inspect the provided source. Do not manufacture a polished-sounding answer.

The objective is not to make Suvan look impressive at any cost.

The objective is to make the portfolio **credible, technically specific, human, and difficult to mistake for an AI-generated template.**
