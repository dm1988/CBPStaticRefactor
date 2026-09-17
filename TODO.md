# [ ] CRITICAL: Eliminate DOM-based XSS vulnerabilities

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

## Investigate schedule uploading payloads
Investivate upload validation, rate limits, size limits

How does the schedule import work?

## normalizedFleet XSS

## confirmDestructiveAction is interesting, investigate

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

# [x] Completed: Refactor foundation setup
1. Completed: Link CTA buttons for landing page to login page 2
2. Completed: Link Continue to workspace CTA button to page 3
3. Completed: Load in original styles.css
4. Completed: Load in css_additions.css into all 3 pages

# Landing page
## Tasks
### Current focus: Establish strong multi tenancy
Currently:
The airline selection is a vertical stack where several airlines are marked as "Service not currently available."

Problem: A user not belonging to a listed airline cannot use the app. If a user changes to a different airline, they would have to create a new login. Multiple log in setups adds complexity, takes time to update and manage, 

Purpose: Eliminate the need for multiple databases, implimentations, and login but implimenting a multitenancy set up. Users would have 1 place to log in, but multi tennancy would be determined within a users preferance. 
Having a multi tenancy setup complete eliminate the need for this first landing page. Users don't have to select their airline each time they use the app. 
With multi tenancy, the landing page can now focus on marketing and purpose of the app

Implimentation: back end and front end refactor not covered in this scope.

Completed: Static landing-page treatment for multitenancy. The page now presents one account login path instead of requiring users to choose an airline.

### Feat: Notify me when available
Feature Suggestion: Implement a "Notify Me" flow for unavailable airlines to capture lead data for future expansion. Have user provide email for a mailing list

### Adopt a Two-Column "Hero" Layout
Currently:
The current layout is a single-column stack (grid-template-columns: 649px) centered on the page. On desktop, this leaves a significant amount of wasted horizontal space.

Improvement: Use a split-screen hero layout.
Left Side: Value proposition and "How it works" (The "Bid Smarter" messaging).
Right Side: The Airline Access/Sign-in card.
Implementation: Change .landing-shell to grid-template-columns: 1fr 1fr for screens above 1024px.

### Visual Hierarchy & Messaging
The current brand-panel and access-card have almost equal visual weight.

Improvement: Reduce the size of the "Airline Access" card container and increase the font-weight and scale of your primary headline ("Plan smarter. Bid confidently.").
Visual Polish: The background-color: rgb(7, 26, 47) is very dark. Consider using a subtle gradient or a high-quality aviation-themed background image with an overlay to provide more professional context.

### Suggested CSS Adjustments
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
### Validate users and redirect to workspace
Currently:
Users with an active valid sessions are still displayed a login page with a CTA button `Continue to workspace`. A `sign out` button is displayed when a users main tentent is to log into the workspace

Problem:
Users are presented with an additional step and too much information. 

Fix: Remove the `sign out` button. Valid users with a valid session should be redirected to the workspace. Only users not signed in or users without a verified email should only see this page.

### Investigate unknown markup tags
<cdbm-wrmnv> and <vanwbekn-i>

These tags look like they might be injected by a browser extension, a security script (like bot detection), or they could be remnants of a specific framework. Currently, they have 0x0 dimensions, so they aren't visually impacting the layout, but if they are supposed to be functional (like a chat widget or a cookie banner), they are currently invisible.

### Refactor Script tags within body
Stacking and Scripts
There are three <script> tags placed directly inside the body after the <main> content.

Best Practice: While common, ensure these aren't blocking the initial render. Since they are at the end, they shouldn't, but using defer is usually preferred for modern performance standards.

### Layout & Visual Hierarchy
### Completed: Two-Column Switch
The main.account-shell was using a single-column grid. Updated it to a responsive two-column layout (on larger screens) where the Brand Panel (dark background) sits alongside the Account Card (white background). This is a standard, modern pattern for login/account pages.
Elevation: 
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
### High importance bug: Missing buttons on medium screens
Currently:
In a responsive medium screen, `Lines`, `Trips`, `Reserve`, and `Training` are not rendered to a user.
Problem: Users cannot navigate critical core app functionality on smaller and medium screens.

Fix: Establish tests asserting critical buttons shown on common format screens. Fix the html / css appropriately. 

### UI/UX improvements 

1. Header & Top Navigation
* **Reduce Visual Noise:** Group secondary actions (*FAQ*, *Messages*, *Contact Developer*) into a single drop-down menu or place them in a subtle top bar to free up prominent header space.

Profile Dropdown: The profile section (Avatar and Name) now acts as a trigger for a dropdown menu.
Chevron Indicator: Add a small chevron (▾) next to your name to visually signal that it is an interactive menu.
Button Relocation: The "Account" link has been removed from the main header area and placed inside the new profile dropdown for a cleaner layout. Sign out should be in this accordion.

* **Consolidate App Meta:** Move the update timestamp (*Last App Update...*) into a footer or a small status tooltip near the account section rather than placing it directly beneath the main branding logo.
* 
Support Dropdown: A new interactive element labeled "ⓘ Support ▾" has been added to the header.
Action Consolidation: The FAQ, Messages, and Contact Developer buttons have been moved from the main header into this new dropdown menu.

Flex Alignment: The parent container for these elements has been updated to use display: flex with a row orientation.
Vertical Centering: Both elements are now vertically aligned (align-items: center) to ensure a balanced look.
Spacing: A consistent gap of 12px has been applied between the two items to prevent them from feeling cramped while maintaining a unified grouping.

1. Completed: Establish well defined viewports
- Create 4 view ports with a left to right navigation bar establishing a workflow the user should typically use to bid. 
  - Lines
  - Trips
  - Reserve
  - Training

1. **Summary Metrics Bar**
* Completed: **Improve Visual Hierarchy:** Standardize card heights and alignment for metrics (*Flying lines*, *Reserve lines*, *Trips*, *Line credit range*, etc.). Use lighter borders or subtle card backgrounds to make the key figures stand out more clearly without cluttering the screen.
* **Add Action Indicators:** Make actionable metrics (like clicking into *Flying lines* or *Reserve lines*) visually distinct from static data like *Line credit range*.


* **Filter & Schedule Controls**
* **Establish a 2-Column Layout:** The main view is currently split unevenly between `SCHEDULE` / `FILTER` and the central page content. Align control panels cleanly using a consistent grid layout to eliminate awkward white space and vertical stacking.
* **Foldable Accordions:** Collapsible panels for *Credit & Crew*, *Days & Duty*, *Airports*, and *Miscellaneous* should have consistent, clear visual boundaries and chevron indicators so users know what is open versus collapsed.
* **Floating Floating Action Button (FAB):** The floating `JUMP` button overlaps filter fields on smaller display sizes. Anchor it to a fixed side pane or merge it into the top/bottom page navigation controls.


* **Data Display & Line Cards**
* Completed: **Scannability in Table/Linear View:** The *FLYING LINES* list contains dense blocks of metadata (*Credit gross*, *Carry-In value*, *Airports*, *Remarks*). Using structured columns, badge chips for status tags (e.g., `SPLIT LINE`, `UNLIKELY TO HOLD`), and clear color accents for carry-in vs. regular credit will significantly reduce cognitive load when scanning long lists.
* **Sticky Headers:** Ensure the table headers and quick-filter bar remain fixed at the top when scrolling through long line lists.

### Home button has no function

## UI/UX Optimization: CrewBidPro Workspace

**Context**
Analysis of the CrewBidPro application interface to reduce visual noise, improve information hierarchy, and optimize the layout for high-density data management.

**Diagnostics**
The following architectural and stylistic issues were identified across the main workspace components:

| Component | Findings |
| :--- | :--- |
| **Header** | `topbar-actions` contains 7+ disparate buttons (FAQ, Messages, Contact Developer, Admin, etc.), causing clutter. |
| **App Meta** | `.app-update-strip` is nested inside the brand lockup, competing with the primary logo. |
| **Metrics Bar** | `#summaryGrid` uses a basic block display; lacks visual distinction between clickable and static metrics. |
| **Layout** | Main content sections (`#workspaceControlsDeck`, `#linesPanel`) use `display: block`, causing vertical stacking rather than a 2-column grid. |
| **Navigation** | The "JUMP" FAB (`.tab-jump`) uses `position: static`, preventing it from floating or anchoring to a specific pane. |
| **Table** | `thead` uses `position: static`, causing headers to disappear during scrolling. |

**Actionable Findings**
*   **Action Consolidation:** Group secondary actions (FAQ, Messages, Contact Developer) into a single `<details>` dropdown or a "More" menu to reclaim header space.
*   **Visual Hierarchy:** Apply `display: grid` to `#summaryGrid` to standardize metric card heights. Use `cursor: pointer` and subtle hover states to indicate actionable metrics like "Flying lines" versus static data.
*   **Layout Efficiency:** Transition the main container to a grid layout to support the requested 2-column view for filters and content.
*   **Accordions:** Standardize `.filter-cluster` headers with chevron indicators (`::after` elements) to clarify expansion states.

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
