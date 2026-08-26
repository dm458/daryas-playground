# Shadow-Frog in Lattice — Feature Requirements

**Status:** Draft for alignment<br>
**Feature:** Cross-project idea discovery in Lattice

## Problem and value proposition

MSR researchers cannot reliably discover promising ideas outside their immediate projects. Knowledge is fragmented across teams, and discovery depends on knowing what—or whom—to search for.

**Shadow-Frog in Lattice turns distributed research knowledge into ranked, evidence-backed opportunities.** Shadow-Frog generates and validates ideas across authorized sources; Lattice makes the best ideas discoverable and actionable.

## Target users and user stories

| As a | I want to | So that I can |
| --- | --- | --- |
| MSR researcher | Discover novel ideas related to my work | Pursue directions I would not have found myself |
| MSR portfolio owner | Discover synergies across projects | Identify high-impact investments opportunities created by combining complementary work |

## Open questions

| Question | Decision | Rationale notes |
| --- | --- | --- |
| Do we want to surface ideas only? Do we want to show idea scores? If so, how granular? |  |  |
| What kind of feedback do we want to collect from users? |  |  |
| Where do the ideas surface? In an ideas session? |  |  |
| What’s the scope for portfolio owners? |  |  |
|  |  |  |
|  |  |  |

## MVP user flow

1. Shadow-Frog surfaces multiple evidence-backed cross-project ideas directly in the right-hand chat session while the researcher remains on the existing project page. Each idea shows its source projects and STAC-generated novelty and utility/feasibility scores, and the researcher can move between generated ideas.
2. The researcher can engage with the idea:
   - **Not interested:** Optionally explain why the idea is not useful.
   - **Add issue:** Open a prefilled issue in the project repository.
   - **Chat about / refine it:** Use a guided conversation to inspect the connection and refine the idea, then choose **Not interested** or **Add issue**.

See the [interactive session-panel mockup](mockup/index.html) and PNG views of the [first idea](mockup/screenshots/shadow-frog-user-flow-overview.png), [expanded idea details](mockup/screenshots/shadow-frog-user-flow-idea-details.png), [second generated idea](mockup/screenshots/shadow-frog-user-flow-second-idea.png), [optional rejection feedback](mockup/screenshots/shadow-frog-user-flow-not-interested.png), and [refinement chat](mockup/screenshots/shadow-frog-user-flow-refined-chat.png).

Watch the [interactive clickthrough video](mockup/demo/shadow-frog-clickthrough.mp4).

## Dependencies and risks

| Dependency | Requirement / risk |
| --- | --- |
| **Cross-project discovery** | Shadow-Frog is largely repository-centric today; MVP needs cross-project discovery, deduplication, and relationship finding. |
| **Lattice integration** | Idea-card contract, role-specific feed/detail UX, identity, and feedback events. |
| **STAC evaluation** | Human-aligned rubrics for novelty, usefulness, feasibility, and evidence quality. |
| **Knowledge connectors** | Authorized access to repositories, issues, conversations, MSR Directory, and research artifacts, with normalized project/person relationships. |
| **Governance and operations** | Source-level ACL propagation, opt-in, provenance, redaction, retention, reporting, compute budgets, freshness, and monitoring. |

## Success signals

- Researchers and portfolio owners rate ideas as **novel and valuable** and act on them.
- Accepted ideas create measurable cross-project investigations or collaborations.

## Non-goals for MVP

Autonomously changing source artifacts, selecting research investments, exposing unrestricted MSR content, or searching outside connected MSR sources.
