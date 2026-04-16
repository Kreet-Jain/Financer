# Financer Web App - Phased Implementation Plan

This document outlines the step-by-step phased plan to build the Financer "The Ledger" app using React and Vite.

## Phase 1: Foundation and Tech Stack Setup
- **Objective:** Initialize the project and establish the design system.
- **Tasks:**
  - Initialize the project using `npx create-vite` with the React template.
  - Setup routing (e.g., `react-router-dom`).
  - Configure the global CSS (Vanilla CSS or a utility framework if chosen) to match the premium dark green/navy aesthetic.
  - Setup structural folders (`components`, `pages`, `assets`, `utils`, `styles`).
  - Define global design tokens (colors, typography like 'Inter' or 'Outfit', border radii, shadows).

## Phase 2: Core Layout and Navigation
- **Objective:** Build the application shell.
- **Tasks:**
  - Create the `TopBar` component containing the user profile, notification icon, and page title.
  - Create the `BottomNavigation` or `Sidebar` (depending on mobile-first or desktop focus) featuring Overview, Insights, Ledger, Loans, and Drafts tabs.
  - Implement basic routing between empty page placeholders.

## Phase 3: Dashboard & Financial Architecture (Screens 1 & 2)
- **Objective:** Implement the high-level financial overview pages.
- **Tasks:**
  - Create the **Financial Architecture Page**:
    - Net Worth summary component (Hero section).
    - Liquid Capital, Fixed Equity, Marketable Securities breakdown.
    - Wealth Catalyst capability card.
    - Receivables Ledger component.
  - Create the **Insights/Investment Page**:
    - Available to Invest widget.
    - Recommended Allocation breakdown (Stocks, Gold, SIP).
    - Market Context and Strategy Insight cards.

## Phase 4: Toxic Debt Ledger & Lending Entries (Screens & 3)
- **Objective:** Implement the core ledger management features.
- **Tasks:**
  - Create the **Toxic Debt Ledger Page**:
    - Total High Risk Exposure summary.
    - Category Breakdown progress bars.
    - Active Recoveries list (Debt Cards with statuses).
  - Create the **New Lent Entry Page**:
    - Form layout with inputs for Recipient Name, Principal, and Grace Period.
    - Custom styled toggle switch for "Automatic Interest Accrual".
    - Save Entry action button.

## Phase 5: Communication Features (Screen 4)
- **Objective:** Implement the WhatsApp Template Manager.
- **Tasks:**
  - Create the **Template Manager Page**:
    - List of Active Templates with priority tags.
    - Variable Registry display.
    - Template Editor form with a textarea.
    - Implement a Live Preview component mimicking a mobile WhatsApp interface.

## Phase 6: Polish and Integration
- **Objective:** Bring the app to life with animations and final touches.
- **Tasks:**
  - Add micro-animations (hover effects, page transitions).
  - Mock state data or use a simple state management layer (Context API or Zustand) to populate the UI dynamically.
  - Perform responsive design checks to ensure it looks great on varying screen sizes.
  - Final visual review against the provided Figma/PNG mocks.
