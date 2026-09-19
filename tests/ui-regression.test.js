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

const primaryTabs = ["lines", "trips", "reserves", "training"];
primaryTabs.forEach((tab) => {
  assert(
    new RegExp(`<button[^>]+data-tab=["']${tab}["'][^>]*>`, "i").test(page3),
    `Missing primary navigation control: ${tab}`,
  );
});

assert(/\.tabs\s+\.tab-group-primary\s*\{[\s\S]*?grid-template-columns:\s*repeat\(4,/m.test(css),
  "Primary navigation must retain four visible columns at responsive widths");
assert(/@media\s*\(max-width:\s*1100px\)[\s\S]*?\.tabs\s+\.tab-group-primary[\s\S]*?repeat\(4,/m.test(css),
  "Medium viewport navigation regression rule is missing");

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
