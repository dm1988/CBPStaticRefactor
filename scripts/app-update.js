(() => {
  const FALLBACK_VERSION = "20260507-update-log";
  const FALLBACK_UPDATED_AT = "2026-05-07T23:30:00Z";
  const DEFAULT_STATUS = "Last App Update";
  const SITE_UPDATE_SEEN_STORAGE_KEY = "crewbidpro.siteUpdateSeenVersion";

  let currentVersionInfo = null;
  let updateStatus = null;
  let modal = null;
  let modalContext = {};

  const pad = (value) => String(value).padStart(2, "0");
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));

  function getTimeZoneLabel(date) {
    const parts = new Intl.DateTimeFormat(undefined, {
      timeZoneName: "short",
    }).formatToParts(date);
    return parts.find((part) => part.type === "timeZoneName")?.value || "Local";
  }

  function formatAppUpdate(updatedAt) {
    const date = new Date(updatedAt || FALLBACK_UPDATED_AT);
    if (Number.isNaN(date.getTime())) return FALLBACK_VERSION;
    const buildDate = `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}`;
    const localHour = pad(date.getHours());
    const localMinute = pad(date.getMinutes());
    return `${buildDate} - ${localHour}:${localMinute} ${getTimeZoneLabel(date)}`;
  }

  async function loadVersionInfo() {

    return { version: FALLBACK_VERSION, updatedAt: FALLBACK_UPDATED_AT, changes: [] };
  }

  function getReleaseEntries(versionInfo) {
    const currentEntry = {
      version: versionInfo?.version || FALLBACK_VERSION,
      updatedAt: versionInfo?.updatedAt || FALLBACK_UPDATED_AT,
      title: versionInfo?.title || "CrewBidPro update",
      changes: Array.isArray(versionInfo?.changes) ? versionInfo.changes : [],
    };
    const previousEntries = Array.isArray(versionInfo?.releases) ? versionInfo.releases : [];
    const seen = new Set();
    return [currentEntry, ...previousEntries].filter((entry) => {
      const key = entry?.version || entry?.updatedAt || entry?.title;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 6);
  }

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "app-update-modal";
    modal.hidden = true;
    modal.innerHTML = `
      <div class="app-update-modal-backdrop" data-close-app-update></div>
      <div class="app-update-modal-card" role="dialog" aria-modal="true" aria-labelledby="appUpdateModalTitle">
        <div class="app-update-modal-header">
          <div>
            <p class="eyebrow">App Update</p>
            <h2 id="appUpdateModalTitle">CrewBidPro updates</h2>
          </div>
          <div class="app-update-modal-actions">
            <button type="button" class="btn-primary" data-refresh-app-update hidden>Update Now</button>
            <button type="button" class="btn-secondary" data-close-app-update>Close</button>
          </div>
        </div>
        <div class="app-update-modal-body" data-app-update-modal-body></div>
      </div>
    `;
    modal.querySelectorAll("[data-close-app-update]").forEach((element) => {
      element.addEventListener("click", closeUpdateLog);
    });
    modal.querySelector("[data-refresh-app-update]")?.addEventListener("click", async (event) => {
      const button = event.currentTarget;
      button.disabled = true;
      button.textContent = "Saving...";
      try {
        await window.CrewBidProWorkspace?.saveRefreshSnapshot?.();
      } catch (error) {
        console.warn("Workspace snapshot before refresh failed:", error.message);
      }
      button.textContent = "Refreshing...";
      const activationStarted = window.CrewBidProOfflineUpdate?.activateWaitingWorker?.() === true;
      if (!activationStarted) {
        window.location.reload();
        return;
      }
      // controllerchange normally performs the reload. Keep a fallback for
      // browsers that activate the waiting worker without emitting it here.
      window.setTimeout(() => window.location.reload(), 4000);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeUpdateLog();
    });
    document.body.appendChild(modal);
    return modal;
  }

  function renderTargets() {
    const targets = document.querySelectorAll("[data-last-app-update]");
    if (!targets.length) return;
    const versionInfo = currentVersionInfo || { version: FALLBACK_VERSION, updatedAt: FALLBACK_UPDATED_AT };
    const defaultHtml = `
      <span class="app-update-line">${escapeHtml(`${DEFAULT_STATUS}: ${formatAppUpdate(versionInfo.updatedAt)}`)}</span>
      <span class="app-update-review-line">CLICK HERE to review recent changes.</span>
    `;
    const statusHtml = updateStatus?.message
      ? `<span class="app-update-line">${escapeHtml(updateStatus.message)}</span>`
      : defaultHtml;
    targets.forEach((target) => {
      target.innerHTML = statusHtml;
      target.classList.toggle("is-update-available", updateStatus?.tone === "available");
      target.setAttribute("role", "button");
      target.setAttribute("tabindex", "0");
      target.setAttribute("title", "Open CrewBidPro update log");
    });
  }

  function renderModalBody(versionInfo = currentVersionInfo || {}) {
    const updateModal = ensureModal();
    const body = updateModal.querySelector("[data-app-update-modal-body]");
    if (!body) return;
    const releases = getReleaseEntries(versionInfo);
    const isNewUpdateContext = modalContext.isNewUpdate || updateStatus?.tone === "available";
    const refreshButton = updateModal.querySelector("[data-refresh-app-update]");
    const closeButton = updateModal.querySelector("[data-close-app-update]:not(.app-update-modal-backdrop)");
    if (refreshButton) {
      refreshButton.hidden = !isNewUpdateContext;
      refreshButton.textContent = "Update Now";
    }
    if (closeButton) closeButton.hidden = isNewUpdateContext;
    const availableBanner = isNewUpdateContext
      ? `<div class="app-update-available-banner">New Update Available.</div>`
      : "";
    body.innerHTML = `
      ${availableBanner}
      <div class="app-update-log">
        ${releases.map((entry, index) => `
          <article class="app-update-entry${index === 0 ? " is-current" : ""}">
            <h3>${escapeHtml(entry.title || "CrewBidPro update")}</h3>
            <p>${escapeHtml(formatAppUpdate(entry.updatedAt))}</p>
            <ul>
              ${(Array.isArray(entry.changes) && entry.changes.length ? entry.changes : ["CrewBidPro was updated."])
                .map((change) => `<li>${escapeHtml(change)}</li>`).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    `;
  }

  function openUpdateLog(versionInfo = currentVersionInfo || {}, options = {}) {
    currentVersionInfo = versionInfo?.version ? versionInfo : currentVersionInfo;
    modalContext = { isNewUpdate: Boolean(options.isNewUpdate || updateStatus?.tone === "available") };
    if (currentVersionInfo?.version && !modalContext.isNewUpdate) {
      try {
        window.localStorage.setItem(SITE_UPDATE_SEEN_STORAGE_KEY, currentVersionInfo.version);
      } catch {
        // Update review state is a convenience only; storage can fail in private modes.
      }
      window.dispatchEvent(new CustomEvent("crewbidpro:update-seen", {
        detail: { version: currentVersionInfo.version },
      }));
    }
    renderModalBody(currentVersionInfo || versionInfo);
    const updateModal = ensureModal();
    const title = updateModal.querySelector("#appUpdateModalTitle");
    if (title) title.textContent = options.title || "CrewBidPro updates";
    updateModal.hidden = false;
    const primaryAction = modalContext.isNewUpdate
      ? updateModal.querySelector("[data-refresh-app-update]")
      : updateModal.querySelector("[data-close-app-update]:not(.app-update-modal-backdrop)");
    primaryAction?.focus();
  }

  function closeUpdateLog() {
    if (modalContext.isNewUpdate) return false;
    if (modal) modal.hidden = true;
    return true;
  }

  function setVersionInfo(versionInfo) {
    if (!versionInfo?.version) return;
    currentVersionInfo = versionInfo;
    renderTargets();
  }

  function setUpdateStatus(status = null) {
    updateStatus = status?.message ? status : null;
    renderTargets();
    if (modal && !modal.hidden) renderModalBody(currentVersionInfo || {});
  }

  async function initialize() {
    const versionInfo = await loadVersionInfo();
    setVersionInfo(versionInfo);
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest?.("[data-last-app-update]");
    if (target) openUpdateLog(currentVersionInfo || {});
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest?.("[data-last-app-update]");
    if (!target) return;
    event.preventDefault();
    openUpdateLog(currentVersionInfo || {});
  });

  window.addEventListener("crewbidpro:version-info", (event) => {
    setVersionInfo(event.detail?.versionInfo);
  });

  window.addEventListener("crewbidpro:update-status", (event) => {
    setUpdateStatus(event.detail || null);
  });

  window.addEventListener("crewbidpro:open-update-log", (event) => {
    openUpdateLog(event.detail?.versionInfo || currentVersionInfo || {}, event.detail || {});
  });

  window.CrewBidProAppUpdate = {
    formatAppUpdate,
    loadVersionInfo,
    openUpdateLog,
    setVersionInfo,
    setUpdateStatus,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
