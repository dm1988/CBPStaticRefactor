const SUPABASE_URL = "https://nzbyezghtouktoziekcc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_2sg4l0LCzcu3hYarML8Kaw_OEoqw85M";

const ACCOUNT_EMAIL_STORAGE_KEY = "crewbidpro.accountEmail";
const ACCOUNT_STATUS_STORAGE_KEY = "crewbidpro.accountStatus";
const ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY = "crewbidpro.lastOnlineAuthAt";
const CONFIRM_ACCOUNT_URL = "confirm-account.html";
const CHANGE_PASSWORD_URL = "change-password.html";
const CREWBIDPRO_WORK_EMAIL_DOMAIN = "@kalittaair.com";
const WORKSPACE_URL = "workspace.html";
const FIRST_TIME_WORKSPACE_URL = "workspace.html?firstTime=1";
const PROFILE_CHECK_WORKSPACE_URL = "workspace.html?profileCheck=1";
const OTP_TOKEN_PATTERN = /^\d{4,10}$/;
const ACCOUNT_AUTH_TIMEOUT_MS = 8000;
const ACCOUNT_CODE_RESEND_COOLDOWN_SECONDS = 120;
const ACCOUNT_CODE_SENT_AT_STORAGE_KEY = "crewbidpro.accountCodeSentAt";
const ACCOUNT_PENDING_ONBOARDING_STORAGE_KEY = "crewbidpro.pendingAccountOnboarding";
let accountAuthInteractionStarted = false;

const supabaseClient = window.supabase?.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

function $(id) {
  return document.getElementById(id);
}

function setAccountStatus(message, tone = "") {
  const status = $("accountStatus");
  if (!status) return;
  status.className = "account-status";
  if (tone) status.classList.add(`is-${tone}`);
  status.textContent = message;
}

function setSubmitState(isBusy, label = "Working...") {
  document.querySelectorAll("[data-auth-submit]").forEach((button) => {
    button.disabled = isBusy;
    if (isBusy) {
      button.dataset.readyLabel = button.textContent;
      button.textContent = label;
    } else if (button.dataset.readyLabel) {
      button.textContent = button.dataset.readyLabel;
      delete button.dataset.readyLabel;
    }
  });
}

function setScopedSubmitState(container, isBusy, label = "Working...") {
  if (!container) return;
  container.querySelectorAll("[data-auth-submit]").forEach((button) => {
    button.disabled = isBusy;
    if (isBusy) {
      button.dataset.readyLabel = button.textContent;
      button.textContent = label;
    } else if (button.dataset.readyLabel) {
      button.textContent = button.dataset.readyLabel;
      delete button.dataset.readyLabel;
    }
  });
}

function getAccountCodeResendSecondsRemaining(sentAtMs, nowMs = Date.now()) {
  const sentAt = Number(sentAtMs || 0);
  if (!Number.isFinite(sentAt) || sentAt <= 0) return 0;
  return Math.max(0, Math.ceil(((sentAt + (ACCOUNT_CODE_RESEND_COOLDOWN_SECONDS * 1000)) - nowMs) / 1000));
}

function formatAccountCodeResendCountdown(seconds) {
  const remaining = Math.max(0, Math.floor(Number(seconds) || 0));
  const minutes = Math.floor(remaining / 60);
  return `${minutes}:${String(remaining % 60).padStart(2, "0")}`;
}

function getAccountAuthErrorText(error) {
  const message = typeof error?.message === "string" ? error.message.trim() : "";
  return message === "{}" ? "" : message;
}

function isMissingAccountSessionError(error) {
  return /auth session missing|session missing|no active session/i.test(getAccountAuthErrorText(error));
}

function isRetryableAccountAuthError(error) {
  const name = String(error?.name || "");
  const status = Number(error?.status || 0);
  const message = getAccountAuthErrorText(error);
  return (
    name === "AuthRetryableFetchError"
    || name === "AccountAuthTimeoutError"
    || status >= 500
    || !message
    || /failed to fetch|network|timed?\s*out|timeout|connection|temporarily unavailable|load failed/i.test(message)
  );
}

function humanizeAccountAuthError(error, fallback = "Unable to verify your account.") {
  const message = getAccountAuthErrorText(error);
  if (/invalid login credentials/i.test(message)) {
    return "Email or password not recognized. Please try again.";
  }
  if (isRetryableAccountAuthError(error)) {
    return "CrewBidPro's account service is temporarily unavailable. Please wait a moment and try again.";
  }
  return message || fallback;
}

async function withAccountAuthTimeout(operation, timeoutMessage = "Account verification timed out.") {
  let timeoutId = null;
  try {
    return await Promise.race([
      Promise.resolve().then(operation),
      new Promise((_, reject) => {
        timeoutId = window.setTimeout(() => {
          const error = new Error(timeoutMessage);
          error.name = "AccountAuthTimeoutError";
          reject(error);
        }, ACCOUNT_AUTH_TIMEOUT_MS);
      }),
    ]);
  } finally {
    if (timeoutId !== null) window.clearTimeout(timeoutId);
  }
}

function getHashParams() {
  return new URLSearchParams(window.location.hash.replace(/^#/, ""));
}

function isRootAccountPage() {
  const page = window.location.pathname.split("/").pop();
  return page === "" || page === "index.html";
}

function getPostLoginWorkspaceUrl() {
  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") || "";
  if (!next) return PROFILE_CHECK_WORKSPACE_URL;
  try {
    const nextUrl = new URL(next, window.location.href);
    if (nextUrl.origin !== window.location.origin) return PROFILE_CHECK_WORKSPACE_URL;
    if (
      nextUrl.pathname.endsWith("/admin")
      || nextUrl.pathname.endsWith("/admin.html")
      || nextUrl.pathname.endsWith("/admin-user.html")
    ) {
      return `${nextUrl.pathname.split("/").pop() || "admin"}${nextUrl.search}`;
    }
    if (!nextUrl.pathname.endsWith("/workspace.html") && !nextUrl.pathname.endsWith("workspace.html")) {
      return PROFILE_CHECK_WORKSPACE_URL;
    }
    if (!nextUrl.searchParams.has("profileCheck")) {
      nextUrl.searchParams.set("profileCheck", "1");
    }
    return `${nextUrl.pathname.split("/").pop()}${nextUrl.search}`;
  } catch {
    return PROFILE_CHECK_WORKSPACE_URL;
  }
}

function userMustChangePassword(user) {
  const userMetadata = user?.user_metadata || {};
  return Boolean(
    userMetadata.must_change_password
    || userMetadata.password_change_required
  );
}

function getChangePasswordUrl(next = "") {
  const url = new URL(CHANGE_PASSWORD_URL, window.location.href);
  if (next) url.searchParams.set("next", next);
  return `${url.pathname.split("/").pop()}${url.search}`;
}

function redirectRootAuthCallback() {
  if (!isRootAccountPage()) return false;

  const params = new URLSearchParams(window.location.search);
  const hashParams = getHashParams();
  const hasAuthCallback = (
    params.has("code")
    || params.has("error")
    || hashParams.has("access_token")
    || hashParams.has("refresh_token")
    || hashParams.has("error")
  );

  if (!hasAuthCallback) return false;

  const redirectUrl = new URL(CONFIRM_ACCOUNT_URL, window.location.href);
  redirectUrl.search = window.location.search;
  redirectUrl.hash = window.location.hash;
  window.location.replace(redirectUrl.toString());
  return true;
}

function passwordMeetsRequirements(value) {
  return (
    value.length >= 8
    && value.length <= 64
    && /[A-Za-z]/.test(value)
    && /\d/.test(value)
    && /[^A-Za-z0-9]/.test(value)
  );
}

function isAllowedWorkEmail(email) {
  return email.toLowerCase().endsWith(CREWBIDPRO_WORK_EMAIL_DOMAIN);
}

function normalizeOtpToken(value = "") {
  return String(value).replace(/\D/g, "");
}

function safeStorageSet(storage, key, value) {
  try {
    storage?.setItem(key, value);
  } catch {
    // Storage may be blocked on file://, private browsing, or hardened WebViews.
  }
}

function safeStorageRemove(storage, key) {
  try {
    storage?.removeItem(key);
  } catch {
    // Storage is a convenience layer; account auth should continue without it.
  }
}

function normalizePendingAccountOnboarding(value) {
  let pending = value;
  if (typeof pending === "string") {
    try {
      pending = JSON.parse(pending);
    } catch {
      return null;
    }
  }
  if (!pending || pending.phase !== "verify-code") return null;
  const email = String(pending.email || "").trim();
  if (!email || !isAllowedWorkEmail(email)) return null;
  return {
    phase: "verify-code",
    email,
    displayName: String(pending.displayName || "").trim(),
  };
}

function readPendingAccountOnboarding() {
  try {
    const pending = normalizePendingAccountOnboarding(
      window.sessionStorage?.getItem(ACCOUNT_PENDING_ONBOARDING_STORAGE_KEY) || "",
    );
    if (!pending) safeStorageRemove(window.sessionStorage, ACCOUNT_PENDING_ONBOARDING_STORAGE_KEY);
    return pending;
  } catch {
    return null;
  }
}

function rememberPendingAccountOnboarding(email, displayName = "") {
  const pending = normalizePendingAccountOnboarding({
    phase: "verify-code",
    email,
    displayName,
  });
  if (!pending) return;
  safeStorageSet(
    window.sessionStorage,
    ACCOUNT_PENDING_ONBOARDING_STORAGE_KEY,
    JSON.stringify(pending),
  );
}

function clearPendingAccountOnboarding() {
  safeStorageRemove(window.sessionStorage, ACCOUNT_PENDING_ONBOARDING_STORAGE_KEY);
}

async function logSignupAttempt(event, details = {}) {
  try {
    await fetch("/api/signup-attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event,
        source: "account_signup",
        ...details,
      }),
      cache: "no-store",
    });
  } catch {
    // Signup attempt logging is support telemetry only; never block account flow.
  }
}

function rememberSignedInUser(user) {
  const email = user?.email || "";
  if (!email) return;
  safeStorageSet(window.localStorage, ACCOUNT_EMAIL_STORAGE_KEY, email);
  safeStorageSet(window.localStorage, ACCOUNT_STATUS_STORAGE_KEY, "signed-in");
  safeStorageSet(window.localStorage, ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY, String(Date.now()));
}

function forgetSignedInUser() {
  safeStorageRemove(window.localStorage, ACCOUNT_EMAIL_STORAGE_KEY);
  safeStorageRemove(window.localStorage, ACCOUNT_STATUS_STORAGE_KEY);
  safeStorageRemove(window.localStorage, ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY);
  safeStorageRemove(window.sessionStorage, "crewbidpro.currentWorkspacePackage");
}

async function signOutAccountSession(client) {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.warn("Remote sign out skipped:", error.message);
    try {
      await client.auth.signOut({ scope: "local" });
    } catch (localError) {
      console.warn("Local sign out fallback skipped:", localError.message);
    }
  } finally {
    forgetSignedInUser();
  }
}

async function clearPasswordChangeRequirement(client) {
  const { data } = await client.auth.getSession();
  const token = data.session?.access_token || "";
  if (!token) throw new Error("Password changed, but the session could not be verified. Login again and try once more.");

  const response = await fetch("/api/user/password-change-complete", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) {
    throw new Error(payload.error || "Password changed, but CrewBidPro could not clear the temporary-password requirement.");
  }
}

async function requireSupabase() {
  if (!supabaseClient) {
    throw new Error("Account service is unavailable. Refresh and try again.");
  }
  return supabaseClient;
}

async function syncProfile(user) {
  if (!user?.id) return;
  const client = await requireSupabase();
  const displayName = user.user_metadata?.display_name || "";
  const { error } = await client
    .from("profiles")
    .upsert({
      id: user.id,
      email: user.email,
      display_name: displayName,
      plan: "free",
      subscription_status: "inactive",
      updated_at: new Date().toISOString(),
    }, { onConflict: "id" });

  if (error && error.code !== "42P01") {
    console.warn("Profile sync skipped:", error.message);
  }
}

async function handleLogin() {
  const form = $("loginForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    accountAuthInteractionStarted = true;
    const email = $("loginEmail").value.trim();
    const password = $("loginPassword").value;

    setSubmitState(true, "Logging in...");
    setAccountStatus("Checking account...");

    try {
      const client = await requireSupabase();
      const { data, error } = await withAccountAuthTimeout(
        () => client.auth.signInWithPassword({ email, password }),
        "Account login timed out.",
      );
      if (error) throw error;

      rememberSignedInUser(data.user);
      await syncProfile(data.user);
      if (userMustChangePassword(data.user)) {
        setAccountStatus("Temporary password accepted. Choose a new password to continue.", "success");
        window.location.href = getChangePasswordUrl(getPostLoginWorkspaceUrl());
        return;
      }
      setAccountStatus("Login successful. Opening workspace...", "success");
      window.location.href = getPostLoginWorkspaceUrl();
    } catch (error) {
      setAccountStatus(humanizeAccountAuthError(error, "Unable to login."), "error");
    } finally {
      setSubmitState(false);
    }
  });
}

function showOfflineExpiredMessage() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("offlineExpired") !== "1") return;
  setAccountStatus("Offline access expired. Reconnect and sign in to use saved packages.", "warning");
}

function handlePasswordToggles() {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    const input = $(button.dataset.passwordToggle);
    if (!input) return;

    button.addEventListener("click", () => {
      const shouldShow = input.type === "password";
      input.type = shouldShow ? "text" : "password";
      button.textContent = shouldShow ? "Hide" : "Show";
      button.setAttribute("aria-label", shouldShow ? "Hide password" : "Show password");
      button.setAttribute("aria-pressed", String(shouldShow));
      input.focus();
    });
  });
}

function handleAccountSupport() {
  const toggle = $("accountSupportToggle");
  const form = $("accountSupportForm");
  if (!toggle || !form) return;

  const nameInput = $("accountSupportName");
  const emailInput = $("accountSupportEmail");
  const airlineInput = $("accountSupportAirline");
  const cancel = $("accountSupportCancel");

  toggle.addEventListener("click", () => {
    form.hidden = false;
    toggle.hidden = true;
    const loginEmail = $("loginEmail")?.value.trim() || $("passwordRecoveryEmail")?.value.trim();
    if (emailInput && loginEmail) emailInput.value = loginEmail;
    nameInput?.focus();
  });

  cancel?.addEventListener("click", () => {
    form.hidden = true;
    toggle.hidden = false;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const airline = airlineInput.value.trim();

    setScopedSubmitState(form, true, "Submitting...");
    setAccountStatus("Submitting request...");

    try {
      const client = await requireSupabase();
      const { error } = await client
        .from("airline_interest")
        .insert({
          contact_name: name,
          email,
          airline,
          source: "login_help",
        });
      if (error) throw error;

      form.reset();
      form.hidden = true;
      toggle.hidden = false;
      setAccountStatus("Thanks. Your request has been submitted.", "success");
    } catch (error) {
      setAccountStatus(error.message || "Unable to submit request right now.", "error");
    } finally {
      setScopedSubmitState(form, false);
    }
  });
}

async function handlePasswordRecovery() {
  const emailForm = $("passwordRecoveryEmailForm");
  const codeForm = $("passwordRecoveryCodeForm");
  if (!emailForm || !codeForm) return;

  const title = $("passwordRecoveryTitle");
  const emailInput = $("passwordRecoveryEmail");
  const usernameInput = $("passwordRecoveryUsername");
  const codeInput = $("passwordRecoveryCode");
  const passwordInput = $("passwordRecoveryNewPassword");
  const confirmPasswordInput = $("passwordRecoveryConfirmPassword");
  const cancelButton = $("passwordRecoveryCancel");

  function showEmailStep() {
    emailForm.hidden = false;
    codeForm.hidden = true;
    if (title) title.textContent = "Reset Password";
    emailInput?.focus();
  }

  function showCodeStep(email) {
    emailForm.hidden = true;
    codeForm.hidden = false;
    if (title) title.textContent = "Enter Code";
    if (usernameInput) usernameInput.value = email;
    codeInput?.focus();
  }

  cancelButton?.addEventListener("click", () => {
    showEmailStep();
    setAccountStatus("");
  });

  emailForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    setScopedSubmitState(emailForm, true, "Sending code...");
    setAccountStatus("Sending reset code...");

    try {
      const client = await requireSupabase();
      const { error } = await client.auth.resetPasswordForEmail(email);
      if (error) throw error;

      showCodeStep(email);
      setAccountStatus(`Reset code sent to ${email}.`, "success");
    } catch (error) {
      setAccountStatus(error.message || "Unable to send reset code.", "error");
    } finally {
      setScopedSubmitState(emailForm, false);
    }
  });

  codeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = usernameInput.value.trim() || emailInput.value.trim();
    const token = normalizeOtpToken(codeInput.value);
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    setScopedSubmitState(codeForm, true, "Resetting...");
    setAccountStatus("Resetting password...");

    try {
      if (!OTP_TOKEN_PATTERN.test(token)) {
        throw new Error("Enter the code from your email.");
      }
      if (!passwordMeetsRequirements(password)) {
        throw new Error("Password must meet all requirements.");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const client = await requireSupabase();
      const { error: verifyError } = await client.auth.verifyOtp({
        email,
        token,
        type: "recovery",
      });
      if (verifyError) throw verifyError;

      const { data, error } = await client.auth.updateUser({ password });
      if (error) throw error;

      rememberSignedInUser(data.user);
      setAccountStatus("Password reset. Opening workspace...", "success");
      window.location.href = PROFILE_CHECK_WORKSPACE_URL;
    } catch (error) {
      setAccountStatus(error.message || "Unable to reset password.", "error");
    } finally {
      setScopedSubmitState(codeForm, false);
    }
  });
}

async function handleCreateAccount() {
  const form = $("createAccountForm");
  if (!form) return;
  const accountCardTitle = $("accountCardTitle");
  const verifyCodeForm = $("verifyCodeForm");
  const verifyCodeInput = $("createAccountCode");
  const verifyCodeCancel = $("verifyCodeCancel");
  const resendCodeButton = $("resendCreateAccountCode");
  const contactForm = $("developerContactForm");
  const contactName = $("developerContactName");
  const contactEmail = $("developerContactEmail");
  const contactAirline = $("developerContactAirline");
  const contactCancel = $("developerContactCancel");
  const contactToggle = $("developerContactToggle");
  let resendCooldownTimer = null;
  const inMemoryCodeSentAt = new Map();

  function codeSentStorageKey(email) {
    return `${ACCOUNT_CODE_SENT_AT_STORAGE_KEY}:${String(email || "").trim().toLowerCase()}`;
  }

  function readCodeSentAt(email) {
    const storageKey = codeSentStorageKey(email);
    try {
      return Number(window.sessionStorage.getItem(storageKey) || inMemoryCodeSentAt.get(storageKey) || 0);
    } catch (_error) {
      return Number(inMemoryCodeSentAt.get(storageKey) || 0);
    }
  }

  function writeCodeSentAt(email, sentAt) {
    const storageKey = codeSentStorageKey(email);
    inMemoryCodeSentAt.set(storageKey, sentAt);
    try {
      window.sessionStorage.setItem(storageKey, String(sentAt));
    } catch (_error) {
      // The in-memory timestamp preserves the countdown when session storage is unavailable.
    }
  }

  function stopResendCooldownTimer() {
    if (resendCooldownTimer !== null) {
      window.clearInterval(resendCooldownTimer);
      resendCooldownTimer = null;
    }
  }

  function renderResendCooldown(email, sentAt) {
    if (!resendCodeButton) return;
    const remaining = getAccountCodeResendSecondsRemaining(sentAt);
    resendCodeButton.disabled = remaining > 0;
    resendCodeButton.textContent = remaining > 0
      ? `Send New Code (${formatAccountCodeResendCountdown(remaining)})`
      : "Send New Code";
    if (remaining <= 0) stopResendCooldownTimer();
  }

  function startResendCooldown(email, sentAt = Date.now()) {
    stopResendCooldownTimer();
    writeCodeSentAt(email, sentAt);
    renderResendCooldown(email, sentAt);
    if (getAccountCodeResendSecondsRemaining(sentAt) > 0) {
      resendCooldownTimer = window.setInterval(() => renderResendCooldown(email, sentAt), 1000);
    }
  }

  function restoreResendCooldown(email) {
    const sentAt = readCodeSentAt(email);
    if (getAccountCodeResendSecondsRemaining(sentAt) > 0) startResendCooldown(email, sentAt);
    else renderResendCooldown(email, 0);
  }

  async function requestConfirmationCode(email, displayName) {
    const client = await requireSupabase();
    const { error } = await client.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        data: {
          display_name: displayName,
        },
      },
    });
    if (error) throw error;
  }

  function showDeveloperContact(defaultEmail = "", defaultName = "") {
    form.hidden = true;
    if (verifyCodeForm) verifyCodeForm.hidden = true;
    if (accountCardTitle) accountCardTitle.textContent = "Contact Developer";
    if (contactForm) contactForm.hidden = false;
    if (contactName && defaultName) contactName.value = defaultName;
    if (contactEmail && defaultEmail) contactEmail.value = defaultEmail;
    contactName?.focus();
  }

  function showCodeVerification() {
    form.hidden = true;
    if (contactForm) contactForm.hidden = true;
    if (accountCardTitle) accountCardTitle.textContent = "Verify Email";
    if (verifyCodeForm) verifyCodeForm.hidden = false;
    restoreResendCooldown($("createAccountEmail")?.value || "");
    verifyCodeInput?.focus();
  }

  function showCreateAccount() {
    form.hidden = false;
    if (verifyCodeForm) verifyCodeForm.hidden = true;
    if (contactForm) contactForm.hidden = true;
    if (accountCardTitle) accountCardTitle.textContent = "Create An Account";
  }

  function restorePendingAccountOnboarding() {
    const pending = readPendingAccountOnboarding();
    if (!pending) return false;
    if ($("createAccountEmail")) $("createAccountEmail").value = pending.email;
    if ($("createAccountName")) $("createAccountName").value = pending.displayName;
    showCodeVerification();
    setAccountStatus(`Enter the confirmation code sent to ${pending.email}.`, "success");
    return true;
  }

  contactCancel?.addEventListener("click", () => {
    showCreateAccount();
  });

  contactToggle?.addEventListener("click", () => {
    const email = $("createAccountEmail")?.value.trim();
    const displayName = $("createAccountName")?.value.trim();
    showDeveloperContact(email, displayName);
  });

  verifyCodeCancel?.addEventListener("click", () => {
    stopResendCooldownTimer();
    clearPendingAccountOnboarding();
    showCreateAccount();
    setAccountStatus("");
  });

  resendCodeButton?.addEventListener("click", async () => {
    const email = $("createAccountEmail").value.trim();
    const displayName = $("createAccountName").value.trim();
    const sentAt = readCodeSentAt(email);
    if (getAccountCodeResendSecondsRemaining(sentAt) > 0) {
      restoreResendCooldown(email);
      return;
    }

    resendCodeButton.disabled = true;
    resendCodeButton.textContent = "Sending...";
    setAccountStatus("Sending a new confirmation code...");
    try {
      await requestConfirmationCode(email, displayName);
      await logSignupAttempt("otp_sent", {
        email,
        displayName,
        status: "sent",
      });
      rememberPendingAccountOnboarding(email, displayName);
      startResendCooldown(email);
      setAccountStatus(`A new confirmation code was sent to ${email}. It normally arrives within one minute, but Kalitta filtering can take up to two.`, "success");
    } catch (error) {
      await logSignupAttempt("otp_error", {
        email,
        displayName,
        status: "error",
        message: error.message || "Unable to resend confirmation code.",
      });
      resendCodeButton.disabled = false;
      resendCodeButton.textContent = "Send New Code";
      setAccountStatus(error.message || "Unable to resend confirmation code.", "error");
    }
  });

  verifyCodeForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = $("createAccountEmail").value.trim();
    const token = normalizeOtpToken(verifyCodeInput.value);

    setScopedSubmitState(verifyCodeForm, true, "Verifying...");
    setAccountStatus("Verifying code...");

    try {
      if (!OTP_TOKEN_PATTERN.test(token)) {
        throw new Error("Enter the code from your email.");
      }

      const client = await requireSupabase();
      const { data, error } = await client.auth.verifyOtp({
        email,
        token,
        type: "email",
      });
      if (error) throw error;

      await logSignupAttempt("verify_success", {
        email,
        status: "verified",
      });
      clearPendingAccountOnboarding();
      rememberSignedInUser(data.user);
      setAccountStatus("Email confirmed. Opening password setup...", "success");
      window.location.href = CONFIRM_ACCOUNT_URL;
    } catch (error) {
      await logSignupAttempt("verify_error", {
        email,
        status: "error",
        message: error.message || "Unable to verify code.",
      });
      setAccountStatus(error.message || "Unable to verify code.", "error");
    } finally {
      setScopedSubmitState(verifyCodeForm, false);
    }
  });

  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const airline = contactAirline.value.trim();

    setScopedSubmitState(contactForm, true, "Submitting...");
    setAccountStatus("Submitting interest...");

    try {
      const client = await requireSupabase();
      const { error } = await client
        .from("airline_interest")
        .insert({
          contact_name: name,
          email,
          airline,
          source: "account_gate",
        });
      if (error) throw error;

      contactForm.reset();
      contactForm.hidden = true;
      setAccountStatus("Thanks. Your interest has been submitted.", "success");
    } catch (error) {
      setAccountStatus(error.message || "Unable to submit interest right now.", "error");
    } finally {
      setScopedSubmitState(contactForm, false);
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = $("createAccountEmail").value.trim();
    const displayName = $("createAccountName").value.trim();

    try {
      await logSignupAttempt("submit", {
        email,
        displayName,
        status: "submitted",
      });
      if (!isAllowedWorkEmail(email)) {
        await logSignupAttempt("domain_rejected", {
          email,
          displayName,
          status: "rejected",
          message: "Email domain is not eligible for Kalitta access.",
        });
        showDeveloperContact(email, displayName);
        setAccountStatus("");
        return;
      }

      setSubmitState(true, "Sending code...");
      setAccountStatus("Sending confirmation code...");

      const existingSentAt = readCodeSentAt(email);
      if (getAccountCodeResendSecondsRemaining(existingSentAt) > 0) {
        rememberPendingAccountOnboarding(email, displayName);
        showCodeVerification();
        setAccountStatus(`A confirmation code was already sent to ${email}. It normally arrives within one minute, but Kalitta filtering can take up to two.`, "success");
        return;
      }

      await requestConfirmationCode(email, displayName);

      await logSignupAttempt("otp_sent", {
        email,
        displayName,
        status: "sent",
      });
      rememberPendingAccountOnboarding(email, displayName);
      startResendCooldown(email);
      showCodeVerification();
      setAccountStatus(`Confirmation code sent to ${email}. It normally arrives within one minute, but Kalitta filtering can take up to two.`, "success");
    } catch (error) {
      await logSignupAttempt("otp_error", {
        email,
        displayName,
        status: "error",
        message: error.message || "Unable to send confirmation code.",
      });
      setAccountStatus(error.message || "Unable to send confirmation code.", "error");
    } finally {
      setSubmitState(false);
    }
  });

  restorePendingAccountOnboarding();
}

async function handleConfirmAccount() {
  const confirmPanel = $("confirmAccountPanel");
  if (!confirmPanel) return;
  const form = $("confirmAccountForm");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = $("newPassword").value;
    const confirmPassword = $("confirmPassword").value;

    setSubmitState(true, "Setting password...");
    setAccountStatus("Setting password...");

    try {
      if (!passwordMeetsRequirements(password)) {
        throw new Error("Password must meet all requirements.");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const client = await requireSupabase();
      const { data, error } = await client.auth.updateUser({ password });
      if (error) throw error;

      rememberSignedInUser(data.user);
      await syncProfile(data.user);
      setAccountStatus("Password set. Opening your profile...", "success");
      window.location.href = FIRST_TIME_WORKSPACE_URL;
    } catch (error) {
      setAccountStatus(error.message || "Unable to set password.", "error");
    } finally {
      setSubmitState(false);
    }
  });

  setAccountStatus("Confirming account...");
  try {
    const client = await requireSupabase();
    const params = new URLSearchParams(window.location.search);
    const hashParams = getHashParams();
    const authError = hashParams.get("error_description") || params.get("error_description");
    if (authError) {
      $("confirmedEmail").textContent = "Confirmation unavailable";
      setAccountStatus(
        `${authError}. Request a new confirmation code if you still need to finish setup.`,
        "error"
      );
      return;
    }

    if (params.has("code")) {
      const { error } = await client.auth.exchangeCodeForSession(window.location.href);
      if (error) throw error;
    }

    const { data, error } = await client.auth.getUser();
    if (error && /session missing/i.test(error.message || "")) {
      $("confirmedEmail").textContent = "No active confirmation";
      setAccountStatus("Enter the confirmation code from your email, or login if your account is already confirmed.", "warning");
      return;
    }
    if (error) throw error;

    if (data.user) {
      rememberSignedInUser(data.user);
      $("confirmedEmail").textContent = data.user.email || "Confirmed";
      if ($("confirmedUsername")) $("confirmedUsername").value = data.user.email || "";
      if (form) form.hidden = false;
      setAccountStatus("Email confirmed. Set your password to finish account setup.", "success");
      return;
    }

    setAccountStatus("Confirmation complete. Please login to continue.", "success");
  } catch (error) {
    setAccountStatus(error.message || "Unable to confirm account.", "error");
  }
}

async function handleSignOut() {
  const button = $("signOutButton");
  if (!button) return;
  const emailDisplay = $("currentAccountEmail");
  const loginForm = $("loginForm");
  const signedInActions = $("signedInAccountActions");

  button.addEventListener("click", async () => {
    setSubmitState(true, "Signing out...");
    try {
      const client = await requireSupabase();
      await signOutAccountSession(client);
      if (emailDisplay) emailDisplay.textContent = "Not signed in";
      button.hidden = true;
      if (loginForm) loginForm.hidden = false;
      if (signedInActions) signedInActions.hidden = true;
      setAccountStatus("Signed out.", "success");
    } catch (error) {
      setAccountStatus(error.message || "Unable to sign out.", "error");
    } finally {
      setSubmitState(false);
    }
  });
}

async function handleRequiredPasswordChange() {
  const panel = $("changePasswordPanel");
  if (!panel) return;
  const form = $("changePasswordForm");
  const emailDisplay = $("changePasswordEmail");
  const usernameInput = $("changePasswordUsername");

  function getNextUrl() {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next") || PROFILE_CHECK_WORKSPACE_URL;
    try {
      const nextUrl = new URL(next, window.location.href);
      if (nextUrl.origin !== window.location.origin) return PROFILE_CHECK_WORKSPACE_URL;
      const page = nextUrl.pathname.split("/").pop() || "";
      if (!page || page === CHANGE_PASSWORD_URL || page === "login.html") return PROFILE_CHECK_WORKSPACE_URL;
      return `${page}${nextUrl.search}`;
    } catch {
      return PROFILE_CHECK_WORKSPACE_URL;
    }
  }

  try {
    const client = await requireSupabase();
    const { data, error } = await client.auth.getUser();
    if (error || !data.user) {
      setAccountStatus("Login with your temporary password first.", "warning");
      window.location.href = `login.html?next=${encodeURIComponent(getChangePasswordUrl(getNextUrl()))}`;
      return;
    }

    rememberSignedInUser(data.user);
    const email = data.user.email || "";
    if (emailDisplay) emailDisplay.textContent = email || "Signed in";
    if (usernameInput) usernameInput.value = email;
    if (form) form.hidden = false;
    setAccountStatus("Choose a new password to continue.", "warning");
  } catch (error) {
    setAccountStatus(error.message || "Unable to verify account session.", "error");
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = $("changePasswordNewPassword").value;
    const confirmPassword = $("changePasswordConfirmPassword").value;

    setSubmitState(true, "Saving...");
    setAccountStatus("Saving new password...");

    try {
      if (!passwordMeetsRequirements(password)) {
        throw new Error("Password must meet all requirements.");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const client = await requireSupabase();
      const { data, error } = await client.auth.updateUser({ password });
      if (error) throw error;
      await clearPasswordChangeRequirement(client);

      rememberSignedInUser(data.user);
      await syncProfile(data.user);
      setAccountStatus("Password changed. Opening CrewBidPro...", "success");
      window.location.href = getNextUrl();
    } catch (error) {
      setAccountStatus(error.message || "Unable to change password.", "error");
    } finally {
      setSubmitState(false);
    }
  });
}

async function hydrateAccountSummary() {
  const emailDisplay = $("currentAccountEmail");
  if (!emailDisplay) return;
  const signOutButton = $("signOutButton");
  const loginForm = $("loginForm");
  const signedInActions = $("signedInAccountActions");
  const params = new URLSearchParams(window.location.search);

  if (navigator.onLine === false || params.get("offlineExpired") === "1") {
    forgetSignedInUser();
    if (signOutButton) signOutButton.hidden = true;
    if (loginForm) loginForm.hidden = false;
    if (signedInActions) signedInActions.hidden = true;
    emailDisplay.textContent = "Not signed in";
    return;
  }

  try {
    const client = await requireSupabase();
    const { data, error } = await withAccountAuthTimeout(
      () => client.auth.getUser(),
      "Account session verification timed out.",
    );
    if (accountAuthInteractionStarted) return;
    if (error) throw error;
    if (data?.user) {
      rememberSignedInUser(data.user);
      emailDisplay.textContent = data.user.email || "Signed in";
      if (signOutButton) signOutButton.hidden = false;
      if (loginForm) loginForm.hidden = true;
      if (signedInActions) signedInActions.hidden = false;
      return;
    }
  } catch (error) {
    if (accountAuthInteractionStarted) return;
    if (isMissingAccountSessionError(error)) {
      forgetSignedInUser();
      if (signOutButton) signOutButton.hidden = true;
      if (loginForm) loginForm.hidden = false;
      if (signedInActions) signedInActions.hidden = true;
      emailDisplay.textContent = "Not signed in";
      return;
    }
    if (signOutButton) signOutButton.hidden = true;
    if (loginForm) loginForm.hidden = false;
    if (signedInActions) signedInActions.hidden = true;
    emailDisplay.textContent = "Verification delayed";
    setAccountStatus(humanizeAccountAuthError(error), "warning");
    return;
  }

  forgetSignedInUser();
  if (signOutButton) signOutButton.hidden = true;
  if (loginForm) loginForm.hidden = false;
  if (signedInActions) signedInActions.hidden = true;
  emailDisplay.textContent = "Not signed in";
}

if (!redirectRootAuthCallback()) {
  showOfflineExpiredMessage();
  handleLogin();
  handlePasswordToggles();
  handleAccountSupport();
  handlePasswordRecovery();
  handleCreateAccount();
  handleConfirmAccount();
  handleRequiredPasswordChange();
  handleSignOut();
  hydrateAccountSummary();
}
