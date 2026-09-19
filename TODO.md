# [x] CRITICAL: Eliminate DOM-based XSS vulnerabilities

`scripts/app.js` builds HTML with `innerHTML` in multiple places using values from uploaded bid documents, API responses, browser storage, and application state. Several values are not HTML-escaped before insertion, including summary metrics, airport and region labels, bid/line names, element attributes, selection chips, and modal content. A malicious or corrupted upload or API response could therefore inject markup or JavaScript into the workspace.

Required remediation:
1. Replace dynamic `innerHTML` templates with `textContent`, `createElement`, and safe DOM property/attribute assignment wherever possible.
2. Escape every remaining dynamic value according to its context; HTML-text escaping alone is not sufficient for URL, style, or attribute contexts.
3. Treat all uploaded-document fields, API responses, local/session storage values, and IndexedDB records as untrusted input.
4. Restrict `openSupportModal` and `showHoverPopup` to trusted templates or sanitize their HTML with a vetted sanitizer.
5. Validate and normalize line names, airport codes, region/group labels, and other parsed fields before rendering.
6. Add automated XSS regression tests using payloads in imported documents and mocked API responses, including attribute-breaking payloads.
7. Deploy a restrictive Content Security Policy as defense in depth, without relying on CSP as the primary fix.

Known high-risk locations include `renderSummary`, `renderAirportAvoidButtons`, `renderBidListPanel`, `renderSelection`, `openSupportModal`, `showHoverPopup`, and profile-avatar rendering in `scripts/app.js`.

## [x] Investigate schedule uploading payloads
Investivate upload validation, rate limits, size limits

How does the schedule import work?

## Completed: normalizedFleet XSS investigation
Fleet values are normalized through the supported-fleet allowlist before use, and the remaining profile label is rendered through safe text assignment.

## Completed: confirmDestructiveAction investigation
Confirmation titles, messages, and action labels are assigned with `textContent`; callers cannot inject HTML through this modal.

# Usage
1. This is a static refactor only, no dynamic data is provided in this scope.
2. Mark completed tasks with `Completed: `

## Original code
Original html code is provided in:
Original_page_1.html
Original_page_2.html
Original_page_3.html
## Refactored code
Refactored code is in the following html files:
Page_1.html
Page_2.html
Page_3.html
empty-state.html

# [x] Completed: Refactor foundation setup
1. Completed: Link CTA buttons for landing page to login page 2
2. Completed: Link Continue to workspace CTA button to page 3
3. Completed: Load in original styles.css
4. Completed: Load `assets/styles.css` and `css_additions.css` into all static pages

# Landing page
## Tasks

### Completed: Rename tabs
Renamed the workspace tabs to "Bid Lines", "View Trips", "Bid Reserve", "Training Lines", and "Review Bids", and added a functional sixth tab, "Submit Bids".

### Completed: Empty state
Created `empty-state.html` with the standard top header but without workspace tabs or sub-navigation. It presents a centered upload CTA that opens the real Import panel, and the Page 3 Support menu links to the empty-state preview.

### Completed: Establish static multi-tenancy treatment
Currently:
The airline selection is a vertical stack where several airlines are marked as "Service not currently available."

Problem: A user not belonging to a listed airline cannot use the app. If a user changes to a different airline, they would have to create a new login. Multiple log in setups adds complexity, takes time to update and manage, 

Purpose: Eliminate the need for multiple databases, implimentations, and login but implimenting a multitenancy set up. Users would have 1 place to log in, but multi tennancy would be determined within a users preferance. 
Having a multi tenancy setup complete eliminate the need for this first landing page. Users don't have to select their airline each time they use the app. 
With multi tenancy, the landing page can now focus on marketing and purpose of the app

Implimentation: back end and front end refactor not covered in this scope.

Completed: Static landing-page treatment for multitenancy. The page now presents one account login path instead of requiring users to choose an airline.

### Completed: Notify me when available
The landing page links to a focused airline-interest form that captures name, email, and airline through the existing `airline_interest` workflow.

### Completed: Adopt a Two-Column "Hero" Layout
Currently:
The current layout is a single-column stack (grid-template-columns: 649px) centered on the page. On desktop, this leaves a significant amount of wasted horizontal space.

Improvement: Use a split-screen hero layout.
Left Side: Value proposition and "How it works" (The "Bid Smarter" messaging).
Right Side: The Airline Access/Sign-in card.
Implementation: Change .landing-shell to grid-template-columns: 1fr 1fr for screens above 1024px.

### Completed: Visual Hierarchy & Messaging
The current brand-panel and access-card have almost equal visual weight.

Improvement: Reduce the size of the "Airline Access" card container and increase the font-weight and scale of your primary headline ("Plan smarter. Bid confidently.").
Visual Polish: The background-color: rgb(7, 26, 47) is very dark. Consider using a subtle gradient or a high-quality aviation-themed background image with an overlay to provide more professional context.

### Completed: Suggested CSS Adjustments
/* Example of a more responsive, multi-tenant grid */
.landing-shell {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 48px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card improvements for airline selection */
.landing-access-card .airline-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

# Login page
## Tasks
### Completed: Validate users and redirect to workspace
Currently:
Users with an active valid sessions are still displayed a login page with a CTA button `Continue to workspace`. A `sign out` button is displayed when a users main tentent is to log into the workspace

Problem:
Users are presented with an additional step and too much information. 

Completed implementation: Removed the `sign out` button. Valid verified sessions redirect to the workspace; users without a session or verified email remain on this page.

Completed: The login page no longer renders Sign Out or signed-in continuation controls. Verified sessions redirect to `Page_3.html`; unverified sessions remain on the login page with guidance.

### Completed: Investigate unknown markup tags
<cdbm-wrmnv> and <vanwbekn-i>

These tags look like they might be injected by a browser extension, a security script (like bot detection), or they could be remnants of a specific framework. Currently, they have 0x0 dimensions, so they aren't visually impacting the layout, but if they are supposed to be functional (like a chat widget or a cookie banner), they are currently invisible.

Completed: Neither custom tag exists in the refactored source. Regression coverage prevents them from being committed; any runtime appearance is external injection.

### Completed: Refactor Script tags within body
Stacking and Scripts
There are three <script> tags placed directly inside the body after the <main> content.

Best Practice: While common, ensure these aren't blocking the initial render. Since they are at the end, they shouldn't, but using defer is usually preferred for modern performance standards.

Completed: Login dependencies now load with `defer` from the document head in dependency order. The missing legacy offline script reference was removed.

### Completed: Layout & Visual Hierarchy
### Completed: Two-Column Switch
The main.account-shell was using a single-column grid. Updated it to a responsive two-column layout (on larger screens) where the Brand Panel (dark background) sits alongside the Account Card (white background). This is a standard, modern pattern for login/account pages.
Completed: Elevation:
Replace the heavy, dark shadow with a softer, multi-layered shadow to give the card a "floating" feel.
Completed: Rounded Corners: Increased the border-radius from 8px to 16px for a friendlier, modern aesthetic.
2. Refined Branding
Completed: Gradients: Added a subtle linear gradient to the account-brand-panel to give it more depth than the flat dark blue.
Completed: Page Background: Replaced the transparent/white background with a soft, tinted gradient background that complements the brand colors, making the central card pop.
3. Content Cleanup
Completed: Redundant Information: Hide the "Last App Update" and technical timestamp strings. These often clutter the UI for end-users and are better placed in a footer or a "system status" page.
Completed: Grid Simplification: Removed the internal gap between the two panels within the main shell, allowing them to sit flush for a cohesive "card" look.
4. Centering & Responsiveness
Completed: Fixed the body's centering logic to ensure the card stays perfectly centered regardless of the viewport size, while using a 95% width constraint to prevent it from touching screen edges on mobile.

# CBP Workspace
## Tasks
### Completed: High importance bug: Missing buttons on medium screens
Currently:
In a responsive medium screen, `Lines`, `Trips`, `Reserve`, and `Training` are not rendered to a user.
Problem: Users cannot navigate critical core app functionality on smaller and medium screens.

Completed implementation: Added regression tests asserting critical controls and responsive four-column navigation rules for common viewport layouts.

Completed: Lines, Trips, Reserve, and Training use an explicit four-column responsive grid through medium and phone layouts. `tests/ui-regression.test.js` asserts the controls and breakpoint rules.

## Completed: UI/UX improvements

1. Header & Top Navigation
* Completed: **Reduce Visual Noise:**
  Group secondary actions (*FAQ*, *Messages*, *Contact Developer*) into a single drop-down menu or place them in a subtle top bar to free up prominent header space.

Completed: Profile Dropdown: The profile section (Avatar and Name) now acts as a trigger for a dropdown menu.
Completed: Chevron Indicator: Added a small chevron (▾) next to the name to visually signal that it is an interactive menu.
Completed: Button Relocation: The "Account" link and Sign Out action have been placed inside the profile dropdown for a cleaner layout.

* Completed: **Consolidate App Meta:** Moved the update timestamp (*Last App Update...*) into the profile/account menu rather than placing it directly beneath the main branding logo.
* 
Completed: Support Dropdown: A new interactive element labeled "ⓘ Support ▾" has been added to the header.
Completed: Action Consolidation: The FAQ, Messages, and Contact Developer buttons have been moved from the main header into this new dropdown menu.

Completed: Flex Alignment: The parent container for these elements uses a flex row.
Completed: Vertical Centering: Both elements are vertically aligned for a balanced header.
Completed: Spacing: A consistent 12px gap separates the two items.

1. Completed: Establish well defined viewports
- Create 4 view ports with a left to right navigation bar establishing a workflow the user should typically use to bid. 
  - Lines
  - Trips
  - Reserve
  - Training
- Completed: Package status and Import sit in a full-width strip above the primary navigation; Calendar, Filters, and Results use a dedicated sub-navigation row below it.
- Completed: Replaced the boxed Lines, Trips, Reserve, and Training buttons with minimalist underline tabs and flattened the secondary navigation container.
- Completed: Refined the navigation typography, removed the remaining Jump-group border, and restyled Support as a compact utility pill with a mobile-safe touch target.
- Completed: Softened schedule, filter, and bid-panel typography with sentence case, normal tracking, and medium weights for headings, labels, and Jump navigation.
- Completed: Applied a scoped Modern Soft workspace theme with slate text hierarchy, 24px spacing, 12px radii, subtle layered shadows, and restrained hover depth.

1. **Summary Metrics Bar**
* Completed: **Improve Visual Hierarchy:** Standardize card heights and alignment for metrics (*Flying lines*, *Reserve lines*, *Trips*, *Line credit range*, etc.). Use lighter borders or subtle card backgrounds to make the key figures stand out more clearly without cluttering the screen.
* Completed: **Add Action Indicators:** Actionable metrics (*Flying lines*, *Reserve lines*, and *Trips*) are visually distinct and navigate to their respective results.


* Completed: **Filter & Schedule Controls**
* Completed: **Establish a 2-Column Layout:** The schedule and active filter controls use a responsive two-column grid when space permits.
* Completed: **Foldable Accordions:** Filter groups have clear boundaries and individual collapse controls with state-aware chevrons.
* Completed: **Floating Action Button (FAB):** The `JUMP` control remains anchored to the side pane, while navigation tabs stay in their normal header flow.


* Completed: **Data Display & Line Cards**
* Completed: **Scannability in Table/Linear View:** The *FLYING LINES* list contains dense blocks of metadata (*Credit gross*, *Carry-In value*, *Airports*, *Remarks*). Using structured columns, badge chips for status tags (e.g., `SPLIT LINE`, `UNLIKELY TO HOLD`), and clear color accents for carry-in vs. regular credit will significantly reduce cognitive load when scanning long lists.
* Completed: **Sticky Table Headers:** Table headers use the workspace navigation offset and remain visible while scrolling long line lists.
* Completed: **Sticky Quick Filters:** Result controls remain beneath both navigation rows on roomy screens, table headers offset below them, and short viewports retain the non-sticky layout.

### Completed: Removed the redundant Home control and its divider so the primary bid views lead the navigation

## UI/UX Optimization: CrewBidPro Workspace

**Context**
Analysis of the CrewBidPro application interface to reduce visual noise, improve information hierarchy, and optimize the layout for high-density data management.

**Diagnostics**
The following architectural and stylistic issues were identified across the main workspace components:

| Component | Findings |
| :--- | :--- |
| Completed: **Header** | Support actions are consolidated into one menu; account actions use the profile menu. |
| Completed: **App Meta** | `.app-update-strip` is located in the profile/account menu. |
| Completed: **Metrics Bar** | `#summaryGrid` uses equal-height grid rows; actionable metrics are buttons with pointer, hover, and focus states while static metrics remain neutral. |
| Completed: **Layout** | `#workspaceControlsDeck` uses a responsive two-column grid when active filters are present. |
| Completed: **Navigation** | The actual JUMP control now uses the dedicated `.workspace-jump-fab` selector and is anchored to the lower-right safe area. Header `.tab-jump` controls remain in the sticky navigation flow. |
| Completed: **Mobile Bid Selection** | Bid Selection is an accessible primary tab at every breakpoint. Its bid-window status row sits below the workspace sub-navigation and appears only while the Selection panel is active. |
| Completed: **Dataset Banner** | Removed the embedded Import action and hint, and set the status to “Viewing October 2026 - 777 Bids” across initial markup and hydrated rendering. |
| Completed: **Navigation Icons** | Added consistent inline stroke icons for Bid Lines, View Trips, Bid Reserve, Training Lines, Review Bids, and Submit Bids, with inherited state colors and stronger active strokes. |
| Completed: **Table** | Table headers are sticky with navigation and quick-filter offsets. |

**Actionable Findings**
*   Completed: **Action Consolidation:** FAQ, Messages, and Contact Developer use a single Support `<details>` menu.
*   Completed: **Visual Hierarchy:** `#summaryGrid` uses a grid with standardized card heights. Actionable metrics such as "Flying lines" use pointer, hover, and focus states, while static metrics remain visually neutral.
*   Completed: **Layout Efficiency:** The schedule and active-filter container uses a responsive two-column grid.
*   Completed: **Accordions:** `.filter-cluster` headers use accessible controls and state-aware chevron indicators.

**Code Guidance**


The following structural change is suggested to move the update timestamp from the header to a less prominent location:


`````js
// Relocate App Update Strip to a potential footer or meta section
const updateStrip = document.querySelector('.app-update-strip');
const targetContainer = document.querySelector('.topbar-meta'); // Or a footer if available
if (updateStrip && targetContainer) {
    targetContainer.appendChild(updateStrip);
}
`````
