"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const page1 = read("Page_1.html");
const page2 = read("Page_2.html");
const page3 = read("Page_3.html");
const emptyState = read("empty-state.html");
const app = read("scripts/app.js");
const css = `${read("assets/styles.css")}\n${read("css_additions.css")}`;

const primaryGroupMatch = page3.match(
  /<div class=["']tab-group tab-group-primary["'][^>]*>([\s\S]*?)<\/div>/i,
);
const primaryGroupMarkup = primaryGroupMatch ? primaryGroupMatch[1] : "";
const primaryTabs = {
  lines: "Bid Lines",
  trips: "View Trips",
  reserves: "Bid Reserve",
  training: "Training Lines",
  selection: "Review Bids",
  submit: "Submit Bids",
};
Object.entries(primaryTabs).forEach(([tab, label]) => {
  const panelId = `${tab}Panel`;
  const tabId = `${tab}Tab`;
  assert(
    new RegExp(`<button[^>]+data-tab=["']${tab}["'][^>]*>${label}<\/button>`, "i").test(primaryGroupMarkup),
    `Missing primary navigation control: ${tab}`,
  );
  assert(
    new RegExp(`<button[^>]+id=["']${tabId}["'][^>]+role=["']tab["'][^>]+aria-selected=["'](?:true|false)["'][^>]+aria-controls=["']${panelId}["']`, "i").test(primaryGroupMarkup),
    `Primary navigation ARIA relationship is incomplete: ${tab}`,
  );
  assert(
    new RegExp(`<section[^>]+id=["']${panelId}["'][^>]+role=["']tabpanel["'][^>]+aria-labelledby=["']${tabId}["']`, "i").test(page3),
    `Tab panel ARIA relationship is incomplete: ${tab}`,
  );
});
assert(/tab-group tab-group-primary["'][^>]+role=["']tablist["']/.test(page3),
  "Primary navigation must expose a tablist role");

assert(/\.tabs\s+\.tab-group-primary\s*\{[\s\S]*?grid-template-columns:\s*repeat\(6,/m.test(css),
  "Primary navigation must include six desktop columns");
assert(/@media\s*\(max-width:\s*1100px\)[\s\S]*?\.tabs\s+\.tab-group-primary[\s\S]*?repeat\(6,/m.test(css),
  "Large and tablet viewport navigation must retain one six-tab row");
assert(/@media\s*\(max-width:\s*767px\)[\s\S]*?\.tabs\s+\.tab-group-primary[\s\S]*?repeat\(3,/m.test(css),
  "Small viewport navigation must use three columns");
assert(/@media\s*\(max-width:\s*520px\)[\s\S]*?\.tabs\s+\.tab-group-primary[\s\S]*?repeat\(2,/m.test(css),
  "Phone navigation must use two readable columns");
assert(!page3.includes("tab-group-jumps"), "Bid Selection must not remain inside the mobile-hidden jump group");
assert(page3.includes('class="bid-window-status-row"'), "Bid-window status row is missing");
assert(page3.indexOf('class="workspace-subnav"') < page3.indexOf('class="bid-window-status-row"'),
  "Bid-window status must appear after workspace sub-navigation");
assert(/\.workspace-page\[data-active-tab=["']selection["']\]\s+\.bid-window-status-row:not\(\[hidden\]\)/.test(css),
  "Bid-window status must be scoped to the active Selection view");
assert(/document\.body\.dataset\.activeTab\s*=\s*tabName/.test(app),
  "Tab changes must expose active state for conditional view styling");
assert(/bidWindowStatusRow\.hidden\s*=\s*tabName\s*!==\s*["']selection["']/.test(app),
  "Tab changes must update bid-window status visibility");
assert(/supportedTabs\.includes\(requestedTab\)/.test(app) && app.includes('"submit"'),
  "Workspace deep links and navigation state must support Submit Bids");

assert(!/<nav\b/i.test(emptyState), "Empty state must not render workspace navigation");
assert(/href=["']Page_3\.html\?tab=import["']/.test(emptyState),
  "Empty-state CTA must open the workspace Import panel");
assert(/>Upload bid package<\/a>/i.test(emptyState), "Empty-state upload CTA is missing");
assert(/href=["']empty-state\.html["']/.test(page3), "Support menu must link to the empty-state preview");

["--button-primary-bg", "--button-active-bg", "--button-ghost-bg", "--button-ghost-border", "--button-link"].forEach((token) => {
  assert(css.includes(token), `Missing semantic workspace button token: ${token}`);
});
assert(/--button-active-bg:\s*#005f87/i.test(css), "Active workspace controls must use the brand mid-blue");
assert(/--button-ghost-bg:\s*#f8fafc/i.test(css), "Light-theme ghost controls must use a neutral background");
assert(/\.lines-panel-navigation-button[\s\S]*?var\(--button-ghost-bg\)/m.test(css),
  "Panel navigation buttons must use the shared ghost palette");
assert(/\.line-show-help-button,\s*\.fatigue-help-link\)[\s\S]*?color:\s*var\(--button-link\)/m.test(css),
  "Help controls must use the accessible button-link color");

const relativeLuminance = (hex) => {
  const channels = hex.match(/[a-f\d]{2}/gi).map((channel) => parseInt(channel, 16) / 255);
  const linear = channels.map((channel) => (
    channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4)
  ));
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
};
const contrastRatio = (foreground, background) => {
  const foregroundLuminance = relativeLuminance(foreground);
  const backgroundLuminance = relativeLuminance(background);
  return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
};
[
  ["005f87", "ffffff", "brand blue on white"],
  ["005f87", "f8fafc", "brand link on ghost background"],
  ["101c29", "f8fafc", "light-theme ghost button"],
  ["eef6fb", "172839", "dark-theme ghost button"],
].forEach(([foreground, background, label]) => {
  assert(contrastRatio(foreground, background) >= 4.5, `${label} must meet WCAG AA text contrast`);
});

["calendar", "filters", "results"].forEach((target) => {
  assert(page3.includes(`data-view-target="${target}"`), `Missing sub-navigation target: ${target}`);
});
assert(page3.includes('class="workspace-subnav"'), "Workspace sub-navigation landmark is missing");

const datasetIndex = page3.indexOf("dataset-status-bar");
const primaryNavIndex = page3.indexOf('class="tabs"');
assert(datasetIndex >= 0 && datasetIndex < primaryNavIndex,
  "Dataset status must appear above the primary navigation");

assert(/@media\s*\(min-width:\s*768px\)\s*and\s*\(min-height:\s*700px\)/.test(css),
  "Roomy-viewport sticky quick-filter guard is missing");
assert(css.includes("--quick-filter-height"), "Quick-filter/table-header offset is missing");

assert(page1.includes("airlineInterest=1"), "Landing airline-interest CTA is missing");
assert(!/id=["']signOutButton["']/.test(page2), "Login page must not expose a sign-out button");
assert(!/id=["']signedInAccountActions["']/.test(page2), "Login page must not expose signed-in continuation UI");
assert(/<button[^>]+type=["']submit["'][^>]*data-auth-submit[^>]*>Login<\/button>/i.test(page2),
  "Login must submit through the authentication form");
assert((page2.match(/<script\s+defer\s+src=/g) || []).length >= 3,
  "Login dependencies must load with defer");
assert(!/<\/?(?:cdbm-wrmnv|vanwbekn-i)\b/i.test(page2), "Unknown injected tags must not be present");

console.log("UI regression checks passed for landing, login, and workspace navigation.");
