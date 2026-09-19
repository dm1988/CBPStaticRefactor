"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const page1 = read("Page_1.html");
const page2 = read("Page_2.html");
const page3 = read("Page_3.html");
const css = `${read("assets/styles.css")}\n${read("css_additions.css")}`;

const primaryGroupMatch = page3.match(
  /<div class=["']tab-group tab-group-primary["'][^>]*>([\s\S]*?)<\/div>/i,
);
const primaryGroupMarkup = primaryGroupMatch ? primaryGroupMatch[1] : "";
const primaryTabs = ["lines", "trips", "reserves", "training", "selection"];
primaryTabs.forEach((tab) => {
  const panelId = `${tab}Panel`;
  const tabId = `${tab}Tab`;
  assert(
    new RegExp(`<button[^>]+data-tab=["']${tab}["'][^>]*>`, "i").test(primaryGroupMarkup),
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

assert(/\.tabs\s+\.tab-group-primary\s*\{[\s\S]*?grid-template-columns:\s*repeat\(5,/m.test(css),
  "Primary navigation must include five visible desktop columns");
assert(/@media\s*\(max-width:\s*1100px\)[\s\S]*?\.tabs\s+\.tab-group-primary[\s\S]*?repeat\(5,/m.test(css),
  "Medium viewport navigation regression rule is missing");
assert(/@media\s*\(max-width:\s*700px\)[\s\S]*?data-tab=["']selection["'][\s\S]*?grid-column:\s*1\s*\/\s*-1/m.test(css),
  "Bid Selection must remain visible as a full-width mobile primary tab");
assert(!page3.includes("tab-group-jumps"), "Bid Selection must not remain inside the mobile-hidden jump group");
assert(page3.includes('class="bid-window-status-row"'), "Bid-window status row is missing");
assert(page3.indexOf('class="workspace-subnav"') < page3.indexOf('class="bid-window-status-row"'),
  "Bid-window status must appear after workspace sub-navigation");
assert(/\.workspace-page\[data-active-tab=["']selection["']\]\s+\.bid-window-status-row:not\(\[hidden\]\)/.test(css),
  "Bid-window status must be scoped to the active Selection view");
assert(/document\.body\.dataset\.activeTab\s*=\s*tabName/.test(read("scripts/app.js")),
  "Tab changes must expose active state for conditional view styling");
assert(/bidWindowStatusRow\.hidden\s*=\s*tabName\s*!==\s*["']selection["']/.test(read("scripts/app.js")),
  "Tab changes must update bid-window status visibility");

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
