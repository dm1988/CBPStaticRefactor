# Self XSS

## Avatar URL
```
function renderProfileButton() {
  const name = state.preferences.displayName.trim() || "Crew Profile";
  const profileName = $("profileName");
  if (profileName) profileName.textContent = name;
  const seniorityBadge = $("profileSeniorityBadge");
  if (seniorityBadge) seniorityBadge.textContent = getProfileFleetSeatLabel() || "Employee not confirmed";
  const avatarMarkup = state.preferences.avatarDataUrl
    ? `<img src="${state.preferences.avatarDataUrl}" alt="${escapeHtml(name)}" style="object-position: ${getAvatarObjectPosition()}">`
    : initialsForName(name);
  const profileAvatar = $("profileAvatar");
  const preferencesAvatar = $("preferencesAvatar");
  if (profileAvatar) profileAvatar.innerHTML = avatarMarkup;
  if (preferencesAvatar) preferencesAvatar.innerHTML = avatarMarkup;
}
```

## Render renderLineCalendar

function renderLineCalendar(rows, resultSections) {
  lineCalendarDatePartsCache.clear();
  const timeline = $("lineCalendarTimeline");
  const summary = $("lineCalendarSummary");
  if (!timeline || !summary) return;
  const dates = getLineCalendarAxisDates(state.data?.lines || []);
  if (!dates.length) {
    summary.textContent = "No published schedule range is available.";
    timeline.innerHTML = '<p class="empty">No schedule information is available for this package.</p>';
    return;
  }
  rememberLineCalendarScrollPosition();
  const firstDate = getLineCalendarDateParts(dates[0]).full;
  const lastDate = getLineCalendarDateParts(dates[dates.length - 1]).full;
  summary.textContent = `${rows.length} lines in the current view · ${firstDate} – ${lastDate}`;
  timeline.innerHTML = `
    <div class="line-calendar-scroller" role="table" aria-label="Flying Lines linear view">
      ${renderLineCalendarAxis(dates)}
      ${resultSections.map((section) => renderLineCalendarSection(section, dates)).join("")}
    </div>
  `;
