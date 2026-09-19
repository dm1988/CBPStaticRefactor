const state = {
  data: null,
  defaultData: null,
  activeTab: "lines",
  avoidDates: new Set(),
  lineAvoidCities: new Set(),
  bidList: [],
  lastImportFiles: [],
  importPendingFleet: "",
  importSuccessfulFleet: "",
  preferences: {
    displayName: "",
    personalEmail: "",
    personalEmailVerifiedAt: "",
    pendingPersonalEmail: "",
    pendingPersonalEmailExpiresAt: "",
    outbidNotifications: false,
    newlyAvailableNotifications: false,
    systemNotifications: false,
    workEmail: "",
    avatarDataUrl: "",
    avatarPositionX: 50,
    avatarPositionY: 50,
    phoneNumber: "",
    phoneNumberVerifiedAt: "",
    employeeNumber: "",
    seniorityNumber: "",
    seniorityListDate: "",
    seniorityRosterSize: 0,
    rosterAircraftType: "",
    rosterSeatClass: "",
    aircraftType: "",
    seatClass: "",
    assignmentSource: "",
    assignmentUpdatedAt: "",
    identityConfirmedAt: "",
    identitySource: "",
    peerGroupPosition: 0,
    peerGroupSize: 0,
    bidStrengthPercent: 0,
    longStayThresholdHours: 24,
    breakfastStartTime: "09:00",
    defaultTab: "lines",
    theme: "light",
    pilotType: "any",
    avoidRegions: new Set(),
    avoidCountries: new Set(),
    avoidAirports: new Set(),
  },
  showBidListOnly: false,
  showAvailablePlusSubmittedOnly: false,
  bulkResultSets: {
    lines: null,
    reserves: null,
    training: null,
  },
  collapsedBidResultSections: {
    lines: new Set(),
    reserves: new Set(),
    training: new Set(),
  },
  newlyAvailableReviewScope: "",
  availabilityWatchSyncTimers: {},
  availabilityReviewRemoteLoadKey: "",
  availabilityReviewDeepLinkHandled: false,
  ui012PreviewAcknowledged: false,
  personalEmailChangeEditing: false,
  personalEmailDraft: "",
  notificationPreferencesSaveInFlight: false,
  notificationPreferencesSaveQueued: false,
  notificationPreferencesLastSaved: null,
  profileDetailsSaveInFlight: false,
  profileDetailsSaveQueued: false,
  filtersReady: false,
  recentMoveFeedback: {},
  pendingTheme: null,
  subscriptionAccess: null,
  developerNote: null,
  currentSavedPackage: null,
  latestSavedPackage: null,
  availableSavedPackages: null,
  availableGlobalPackage: null,
  availableGlobalPackages: null,
  currentPackageSource: "",
  currentBidSelectionKey: "",
  bidSelectionSyncTimer: null,
  bidSelectionSyncInFlight: false,
  crewbidsCredential: null,
  crewbidsCredentialLoadError: "",
  crewbidsCredentialCheckInFlight: false,
  crewbidsMonitors: [],
  crewbidsAlerts: [],
  crewbidsBidAvoidRules: [],
  crewbidsBidAvoidRequiresResolution: false,
  crewbidsBidAvoidMigrationMessage: "",
  crewbidsBidAvoidNagShown: false,
  crewbidsBidAvoidCheck: null,
  crewbidsBidAvoidAutoCheckKey: "",
  crewbidsBidAvoidAutoCheckTimer: null,
  crewbidsBuddyBidRules: [],
  crewbidsBuddyBidCheck: null,
  crewbidsBuddyBidAutoCheckKey: "",
  crewbidsBuddyBidAutoCheckTimer: null,
  crewbidsWinOddsCheck: null,
  crewbidsSeniorNoBidders: null,
  crewbidsSeniorNoBiddersInFlight: false,
  crewbidsSeniorNoBiddersKey: "",
  monthlyBidRankEstimate: null,
  monthlyBidRankEstimateKey: "",
  monthlyBidRankEstimateInFlight: false,
  profileMonthlyBidRankEstimate: null,
  profileMonthlyBidRankEstimateKey: "",
  crewbidsSharedLineProjection: null,
  crewbidsSharedLineProjectionInFlight: false,
  crewbidsSharedLineProjectionKey: "",
  crewbidsSharedLineProjectionRefreshPending: false,
  crewbidsBidsPlacedSearchInFlight: false,
  crewbidsBidsPlacedSearchReturnHandled: false,
  latestCrewbidsBidsPlacedSearch: null,
  crewbidsSubmission: {},
  crewbidsSubmissionVerifyTimer: null,
  crewbidsSubmissionInFlight: false,
  crewbidsCurrentBidInFlight: false,
  crewbidsCurrentServerBid: null,
  crewbidsBidAvoidCheckInFlight: false,
  crewbidsBuddyBidCheckInFlight: false,
  crewbidsMonitorRefreshInFlight: false,
  crewbidsMonitorManualRefreshInFlight: false,
  crewbidsSharedRefresh: null,
  crewbidsMonitorAutoStartInFlight: false,
  crewbidsWinOddsAutoRefreshKey: "",
  bidWindowTimer: null,
  crewbidsCycle: null,
  crewbidsCycleCheckedAt: 0,
  crewbidsCycleCheckInFlight: false,
  latestSiteVersion: null,
  detectedSiteUpdate: null,
  siteUpdatePollTimer: null,
  siteUpdateCheckInFlight: false,
  siteUpdateAutoShownVersion: "",
  siteUpdateBaselineVersion: "",
  workspaceConnectivityWorkflowInitialized: false,
  workspaceConnectivityProbeInFlight: false,
  workspaceReconnectPromptInFlight: false,
  workspaceOfflineObserved: navigator.onLine === false,
  workspaceConnectivityStatus: navigator.onLine === false ? "offline" : "unknown",
  supportModalHeaderAction: null,
  workspaceVerifyStartedAt: Date.now(),
  workspaceVerifyTimer: null,
  userActivityHeartbeatTimer: null,
  userActivityHeartbeatInFlight: false,
  startupTabOverride: "",
  activeViewTarget: "",
  lockedViewTarget: "",
  navigationStateReady: false,
  supportToolsInitialized: false,
  confirmToolsInitialized: false,
  employeeIdentitySetupInitialized: false,
  employeeIdentityLookupInFlight: false,
  employeeIdentityConfirmInFlight: false,
  employeeIdentityMatch: null,
  profileAssignmentConfirmed: { fleet: "", seat: "" },
  profileAssignmentDraft: { fleet: "", seat: "" },
  profileAssignmentSaveInFlight: false,
  profileAssignmentNavigationGuardInitialized: false,
  profileAssignmentNavigationBypass: false,
  pendingProfileAssignmentNavigation: null,
  bidResultsReport: null,
  bidResultsReportError: "",
  crewbidsSiteStatus: null,
  moneyLine: {
    enabled: false,
    context: null,
    contextLoaded: false,
    setupInFlight: false,
    diagnosticKeys: new Set(),
  },
  remarkPillVisibility: {
    hideLongStay: false,
    hideCrewResults: false,
  },
  fatigueScoresVisible: true,
  lineStartTimesVisible: true,
  linesViewMode: "table",
  lineCalendarCollapsed: false,
  lineCalendarScroll: { left: 0, top: 0 },
  officialLineAwards: {
    key: "",
    available: false,
    lines: {},
  },
  officialLineAwardsInFlightKey: "",
};

let avoidCalendarDrag = null;

const APP_BUILD_VERSION = "20260715-seniority-percentile";
const MINIMUM_GUARANTEE_MINUTES = 64 * 60;
const MONEYLINE_DAILY_MINIMUM_HALF_MINUTES = 4 * 60 * 2;
const MONEYLINE_RATE_TABLE_VERSION = "cks-cba-appendix-5a-2024-01-01";
const MONEYLINE_DIAGNOSTIC_PARSER_VERSION = "moneyline-carry-v1";
const MONEYLINE_RATES = Object.freeze({
  CA: Object.freeze([165.55, 211.53, 245.06, 252.82, 263.11, 270.86, 278.61, 286.33, 294.08, 301.80, 309.55, 316.01]),
  FO: Object.freeze([117.00, 143.84, 166.63, 171.88, 178.90, 184.17, 189.46, 194.70, 199.98, 205.22, 209.32, 213.52]),
});
const DEFAULT_LONG_STAY_THRESHOLD_HOURS = 24;
const DEFAULT_BREAKFAST_WINDOW_START_TIME = "06:30";
const DEFAULT_BREAKFAST_START_TIME = "09:00";
const DOMESTIC_FLIGHT_DISPLAY_TAXI_ALLOWANCE_MINUTES = 35;
const BID_LIST_STORAGE_KEY = "kalittaBidParser.bidList";
const PREFERENCES_STORAGE_KEY = "kalittaBidParser.preferences";
const ACCOUNT_EMAIL_STORAGE_KEY = "crewbidpro.accountEmail";
const ACCOUNT_STATUS_STORAGE_KEY = "crewbidpro.accountStatus";
const ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY = "crewbidpro.lastOnlineAuthAt";
const SUPPORT_MESSAGES_READ_STORAGE_KEY = "crewbidpro.supportMessagesReadAt";
const SUPPORT_MESSAGES_DELETED_STORAGE_KEY = "crewbidpro.supportMessagesDeleted";
const SUPPORT_WELCOME_MESSAGE_STORAGE_KEY = "crewbidpro.supportWelcomeMessageAt";
const CREW_PROFILE_COMPLETION_STORAGE_KEY = "crewbidpro.completedCrewProfiles";
const PENDING_EMPLOYEE_IDENTITY_SOURCE = "employee_number_pending_roster";
const WORKSPACE_SCROLL_STORAGE_KEY = "crewbidpro.workspaceScrollPosition";
const WORKSPACE_ACCORDION_STORAGE_KEY = "crewbidpro.workspaceAccordionState";
const WORKSPACE_NAV_STORAGE_KEY = "crewbidpro.workspaceNavigationState";
const WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY = "crewbidpro.currentWorkspacePackage";
const WORKSPACE_OFFLINE_OBSERVED_STORAGE_KEY = "crewbidpro.workspaceOfflineObserved.v2";
const WORKSPACE_OFFLINE_OBSERVED_LEGACY_STORAGE_KEY = "crewbidpro.workspaceOfflineObserved";
const WORKSPACE_OFFLINE_OBSERVED_STORAGE_VALUE = "device-offline";
const CREWBIDS_SEARCH_RETURN_PARAM = "crewbidsSearch";
const CREWBIDS_PROFILE_RETURN_PARAM = "crewbidsReturn";
const SITE_UPDATE_SEEN_STORAGE_KEY = "crewbidpro.siteUpdateSeenVersion";
const NEW_USER_SPLASH_SEEN_STORAGE_KEY = "crewbidpro.newUserSplashSeen";
const DEVELOPER_NOTE_SEEN_STORAGE_KEY = "crewbidpro.developerNoteSeen";
const CREWBIDS_SEEN_OUTBID_ALERTS_STORAGE_KEY = "crewbidpro.seenOutbidAlerts";
const AVAILABILITY_REVIEW_STORAGE_KEY = "crewbidpro.availabilityReview.v1";
const MONEYLINE_TOGGLE_STORAGE_KEY = "crewbidpro.moneylineEnabled.v1";
const REMARK_PILL_VISIBILITY_STORAGE_KEY = "crewbidpro.remarkPillVisibility.v1";
const FATIGUE_SCORE_VISIBILITY_STORAGE_KEY = "crewbidpro.fatigueScoresVisible.v1";
const LINE_START_TIME_VISIBILITY_STORAGE_KEY = "crewbidpro.lineStartTimesVisible.v1";
const LINE_RESULTS_VIEW_STORAGE_KEY = "crewbidpro.linesViewMode.v1";
const OFFICIAL_LINE_AWARDS_STORAGE_KEY = "crewbidpro.officialLineAwards.v1";
const SUBSCRIPTION_ACCESS_STORAGE_KEY = "crewbidpro.subscriptionAccess";
const SITE_UPDATE_POLL_INTERVAL_MS = 30 * 1000;
const WORKSPACE_VERIFY_MIN_MS = 2000;
const WORKSPACE_VERIFY_MAX_MS = 12000;
const WORKSPACE_REMOTE_TIMEOUT_MS = 8000;
const WORKSPACE_AUTH_TIMEOUT_MS = 6000;
const WORKSPACE_LOGIN_URL = "login.html";
const OFFLINE_DB_NAME = "crewbidpro-offline";
const OFFLINE_DB_VERSION = 3;
const OFFLINE_PACKAGE_STORE = "packages";
const OFFLINE_BID_SELECTION_STORE = "bidSelections";
const OFFLINE_MONEYLINE_CONTEXT_STORE = "moneylineContexts";
const OFFLINE_MONEYLINE_DIAGNOSTIC_STORE = "moneylineDiagnostics";
const CREWBIDS_OFFLINE_STATE_VERSION = 1;
const CREWBIDS_BID_AVOID_CHECK_VERSION = "projected-package-lines-20260607";
const CREWBIDS_WIN_ODDS_CALCULATION_VERSION = "current-roster-award-walk-20260715";
const LOCAL_WORKSPACE_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
const BID_LIST_COOKIE_KEY = "kalittaBidParser_bidList";
const PREFERENCES_COOKIE_KEY = "kalittaBidParser_preferences";
const PENDING_BILLING_MODAL_STORAGE_KEY = "crewbidpro.pendingBillingModal";
const BILLING_PAUSED = true;
const PENDING_BILLING_MODAL_TTL_MS = 30 * 60 * 1000;
const OFFLINE_AUTH_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;
const WORKSPACE_CURRENT_PACKAGE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const USER_ACTIVITY_HEARTBEAT_MS = 45 * 1000;
const SELECTION_MOVE_FEEDBACK_MS = 1440;
const CREWBIDS_SUBMISSION_VERIFY_WINDOW_MS = 30 * 1000;
const CREWBIDS_STALE_EVIDENCE_MS = 5 * 60 * 1000;
const ACTIVE_FILTER_PENDING_MS = 1400;
const PACKAGE_FLEETS = ["777", "747"];
const SUPABASE_URL = "https://nzbyezghtouktoziekcc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_2sg4l0LCzcu3hYarML8Kaw_OEoqw85M";
const OHIO_ONBOARDING_FIXTURE_TOKEN_KEY = "crewbidpro.ohioOnboardingFixtureToken";
const OHIO_ONBOARDING_FIXTURE_HEADER = "X-CrewBidPro-Onboarding-Fixture";
const OHIO_ONBOARDING_FIXTURE_EMAIL = "ohio-onboarding-test@crewbidpro.invalid";
const OHIO_ONBOARDING_FIXTURE_EMPLOYEE_NUMBER = "990000000001";
const OHIO_ONBOARDING_HOST = "crewbidpro-ohio.onrender.com";
const supabaseClient = window.supabase?.createClient?.(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
const ACCESS_TIER_STORAGE_KEY = "crewbidpro.accessTier";
const DEVELOPMENT_DEFAULT_ACCESS_TIER = "paid";
const SUBSCRIPTION_MONTHLY_PRICE_LABEL = "$9.99/mo";
const SUBSCRIPTION_YEARLY_PRICE_LABEL = "$100/year";
const SUBSCRIPTION_TRIAL_LABEL = "1 month full access, no card required";
const FEATURE_ACCESS = {
  basicSearch: ["free", "paid"],
  advancedLineFilters: ["paid"],
  advancedTripFilters: ["paid"],
  reserveFilters: ["paid"],
  trainingFilters: ["paid"],
  avoidCalendar: ["paid"],
  cityAvoid: ["paid"],
  profileDefaults: ["paid"],
  profileRestrictions: ["paid"],
  customThresholds: ["paid"],
  lineResultInsights: ["paid"],
  tripResultInsights: ["paid"],
  reserveResultInsights: ["paid"],
  trainingResultInsights: ["paid"],
};

const PROFILE_PHOTO_MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const PROFILE_PHOTO_MAX_RENDER_PIXELS = 768;
const PROFILE_PHOTO_OUTPUT_QUALITY = 0.85;
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
const activeFilterTimers = new WeakMap();
const SHARED_SEARCH_IDS = ["lineSearch", "tripSearch", "reserveSearch", "trainingSearch"];
const SHARED_CREW_FILTER_IDS = ["lineCrew", "tripCrew", "reserveCrew", "trainingCrew"];
const LINE_TRIP_SHARED_FILTER_IDS = [
  "lineGuarantee",
  "tripGuarantee",
  "lineDeadheads",
  "tripDeadheads",
  "lineStart",
  "tripStart",
  "lineEnd",
  "tripEnd",
  "lineThrough",
  "tripThrough",
  "lineLongStay",
  "tripLongStay",
];

const EMPTY_DATA = {
  generatedAt: "",
  metadata: {},
  summary: {
    lineCount: 0,
    reserveCount: 0,
    tripCount: 0,
    lineCredit: {},
    tripCredit: {},
    topAirports: [],
    topLegs: [],
  },
  lines: [],
  reserves: [],
  trips: [],
};

const AIRPORT_TIME_ZONES = {
  ALA: "Asia/Almaty",
  ANC: "America/Anchorage",
  BOG: "America/Bogota",
  BRU: "Europe/Brussels",
  CVG: "America/New_York",
  DFW: "America/Chicago",
  DWC: "Asia/Dubai",
  EMA: "Europe/London",
  FRA: "Europe/Berlin",
  HAN: "Asia/Bangkok",
  HKG: "Asia/Hong_Kong",
  HNL: "Pacific/Honolulu",
  ICN: "Asia/Seoul",
  JFK: "America/New_York",
  LAX: "America/Los_Angeles",
  LEJ: "Europe/Berlin",
  LGG: "Europe/Brussels",
  MIA: "America/New_York",
  NGO: "Asia/Tokyo",
  NRT: "Asia/Tokyo",
  ONT: "America/Los_Angeles",
  ORD: "America/Chicago",
  PVG: "Asia/Shanghai",
  SCL: "America/Santiago",
  SDF: "America/New_York",
  SIN: "Asia/Singapore",
  TLV: "Asia/Jerusalem",
  VCP: "America/Sao_Paulo",
  YHM: "America/Toronto",
  YYZ: "America/Toronto",
};

const AIRPORT_NAMES = {
  ALA: "Almaty International Airport",
  ANC: "Ted Stevens Anchorage International Airport",
  BOG: "El Dorado International Airport",
  BRU: "Brussels Airport",
  CGO: "Zhengzhou Xinzheng International Airport",
  CVG: "Cincinnati/Northern Kentucky International Airport",
  DFW: "Dallas Fort Worth International Airport",
  DOV: "Dover Air Force Base",
  DWC: "Al Maktoum International Airport",
  EDF: "Joint Base Elmendorf-Richardson",
  EHU: "Ezhou Huahu Airport",
  EMA: "East Midlands Airport",
  FRA: "Frankfurt Airport",
  HAN: "Noi Bai International Airport",
  HFE: "Hefei Xinqiao International Airport",
  HGH: "Hangzhou Xiaoshan International Airport",
  HIK: "Hickam Air Force Base",
  HKG: "Hong Kong International Airport",
  HNL: "Daniel K. Inouye International Airport",
  ICN: "Incheon International Airport",
  JFK: "John F. Kennedy International Airport",
  KWI: "Kuwait International Airport",
  LAX: "Los Angeles International Airport",
  LEJ: "Leipzig/Halle Airport",
  LGG: "Liege Airport",
  MIA: "Miami International Airport",
  NGO: "Chubu Centrair International Airport",
  NLU: "Felipe Angeles International Airport",
  NRT: "Narita International Airport",
  OKO: "Yokota Air Base",
  ONT: "Ontario International Airport",
  ORD: "Chicago O'Hare International Airport",
  OSN: "Osan Air Base",
  PVG: "Shanghai Pudong International Airport",
  RMS: "Ramstein Air Base",
  SCL: "Santiago International Airport",
  SDF: "Louisville Muhammad Ali International Airport",
  SIN: "Singapore Changi Airport",
  SUU: "Travis Air Force Base",
  TLV: "Ben Gurion Airport",
  TPE: "Taiwan Taoyuan International Airport",
  UAM: "Andersen Air Force Base",
  VCP: "Viracopos International Airport",
  XIY: "Xi'an Xianyang International Airport",
  XJD: "Al Udeid Air Base",
  XMN: "Xiamen Gaoqi International Airport",
  YHM: "John C. Munro Hamilton International Airport",
  YYZ: "Toronto Pearson International Airport",
};

const AIRPORT_COUNTRIES = {
  ALA: "Kazakhstan",
  ANC: "United States",
  BOG: "Colombia",
  BRU: "Belgium",
  CGO: "China",
  CVG: "United States",
  DFW: "United States",
  DOV: "United States",
  DWC: "United Arab Emirates",
  EDF: "United States",
  EHU: "China",
  EMA: "United Kingdom",
  FRA: "Germany",
  HAN: "Vietnam",
  HFE: "China",
  HGH: "China",
  HIK: "United States",
  HKG: "Hong Kong",
  HNL: "United States",
  ICN: "South Korea",
  JFK: "United States",
  KWI: "Kuwait",
  LAX: "United States",
  LEJ: "Germany",
  LGG: "Belgium",
  MIA: "United States",
  NGO: "Japan",
  NLU: "Mexico",
  NRT: "Japan",
  OKO: "Japan",
  ONT: "United States",
  ORD: "United States",
  OSN: "South Korea",
  PVG: "China",
  RMS: "Germany",
  SCL: "Chile",
  SDF: "United States",
  SIN: "Singapore",
  SUU: "United States",
  TLV: "Israel",
  TPE: "Taiwan",
  UAM: "Guam",
  VCP: "Brazil",
  XIY: "China",
  XJD: "Qatar",
  XMN: "China",
  YHM: "Canada",
  YYZ: "Canada",
};

const AIRPORT_REGIONS = {
  ALA: "Asia",
  ANC: "North America",
  BOG: "South America",
  BRU: "Europe",
  CGO: "Asia",
  CVG: "North America",
  DFW: "North America",
  DOV: "North America",
  DWC: "Middle East",
  EDF: "North America",
  EHU: "Asia",
  EMA: "Europe",
  FRA: "Europe",
  HAN: "Asia",
  HFE: "Asia",
  HGH: "Asia",
  HIK: "North America",
  HKG: "Asia",
  HNL: "North America",
  ICN: "Asia",
  JFK: "North America",
  KWI: "Middle East",
  LAX: "North America",
  LEJ: "Europe",
  LGG: "Europe",
  MIA: "North America",
  NGO: "Asia",
  NLU: "Central America",
  NRT: "Asia",
  OKO: "Asia",
  ONT: "North America",
  ORD: "North America",
  OSN: "Asia",
  PVG: "Asia",
  RMS: "Europe",
  SCL: "South America",
  SDF: "North America",
  SIN: "Asia",
  SUU: "North America",
  TLV: "Middle East",
  TPE: "Asia",
  UAM: "Australia",
  VCP: "South America",
  XIY: "Asia",
  XJD: "Middle East",
  XMN: "Asia",
  YHM: "North America",
  YYZ: "North America",
};

const PREFERENCE_REGIONS = [
  "Europe",
  "Asia",
  "Middle East",
  "South America",
  "Central America",
  "Africa",
  "Australia",
];

const FAQ_ITEMS = [
  {
    question: "What does the CrewBidPro Fatigue Score mean?",
    answer: "The 0–100 score is a comparative prediction of how fatiguing one published flying line may be relative to another. Lower numbers indicate less predicted fatigue; higher numbers indicate more. The categories are Minimal (0–19), Low (20–39), Moderate (40–59), High (60–74), Very High (75–89), and Extreme (90–100). It is not a fitness-for-duty determination or an exact physiological measurement.",
  },
  {
    question: "How is the Fatigue Score calculated?",
    answer: "CrewBidPro follows the entire rotation as one continuous sequence using the published Trip Report times in Zulu. It estimates wake one hour before the published Show Time and the earliest practical hotel sleep opportunity two hours after Debriefing. It then models predicted sleep, restorative recovery, cumulative sleep pressure, continuous wakefulness, circadian timing, time-zone adaptation, duty duration and intensity, biological-night operations, ocean crossings, deadheads, crew complement, possible in-flight rest, and predicted fatigue during critical phases. The final score combines the peak fatigue-sensitive event, the worst sustained portion of the rotation, time spent at elevated fatigue, repeated high-fatigue duties, and the recovery state near the end of the line. Hybrid reserve periods remain schedule-unknown rather than being assigned invented duty times.",
  },
  {
    question: "What is the Fatigue Score based on?",
    answer: "The CrewBidPro Fatigue Score is an original comparative model informed by established sleep science and aviation fatigue research. Its foundations include the interaction between time awake and sleep, biological-time effects on alertness, cumulative sleep loss, circadian disruption, time-zone adaptation, recovery sleep, and the reduced restorative value of in-flight rest. CrewBidPro applies these principles to the published schedule using transparent assumptions about wake time, hotel readiness, predicted sleep, crew complement, bunk opportunity, deadheads, and recovery between duties. The methodology is informed by recognized Two-Process and Three-Process fatigue concepts, peer-reviewed pilot sleep studies, and guidance from NASA, the FAA, ICAO, and CASA. It does not reproduce a proprietary fatigue model, measure an individual pilot's physiology, determine fitness for duty, or replace an airline Fatigue Risk Management System.",
  },
  {
    question: "What do the colors mean?",
    answer: "Green-toned pills highlight standard flying or positively emphasized route items. Warm gold and tan tones usually mark reserve-related context. Red-toned pills call attention to split lines, deadheads, minimum-rest issues, or caution items. Gray or faded airport entries usually mean the crew is staying put without new movement that day.",
  },
  {
    question: "Why are some airport pills slashed?",
    answer: "A slash through an airport pill marks a deadhead segment instead of active operating flying. It helps the eye separate company movement from duty flying inside a line.",
  },
  {
    question: "What counts as a long stay?",
    answer: "A long stay is a planned rest or layover block above your long-stay threshold. The default is more than 24 hours, and custom thresholds can be adjusted in Crew Profile.",
  },
  {
    question: "What does breakfast-friendly mean?",
    answer: "Breakfast-friendly looks at the first show time of the first trip, converts that Zulu time to local departure time, and flags the line when duty starts between 6:30 a.m. local and your breakfast cut-off. The default cut-off is 9:00 a.m. local.",
  },
  {
    question: "Do duty days include carry-in days?",
    answer: "No. The Duty column shows the duty days published with the line itself. Carry-in days are shown separately because they are required workdays that still affect your month, but they are not counted inside the line's published duty-day total.",
  },
  {
    question: "What does FLEX RSV mean?",
    answer: "FLEX RSV marks a reserve block that may be handled separately from the flying portion of the line. Depending on Crew Scheduling and crew coordination, those reserve days may remain separate, be tied to the flying portion, or sometimes be dropped from the schedule. FLEX RSV does not automatically mean the line is a SPLIT LINE. If you are awarded a line with FLEX RSV, it is a good idea to call Crew Scheduling and confirm how the reserve portion will be handled.",
  },
  {
    question: "Why can't we connect directly to Kalitta's CrewBids site?",
    answer: "CrewBidPro can use saved CrewBid (Kalitta) credentials for hosted monitoring, submitted-bids checks, and user-confirmed new bids. Credentials are stored server-side in encrypted form, can be revoked from Crew Profile, and every new bid still requires an explicit confirmation step.\n\nCrewBidPro assists with bid preparation and monitoring, but each crewmember remains responsible for verifying official CrewBids results and bid outcomes.",
  },
];

const CONTACT_PLACEHOLDER_HTML = `
  <form id="contactDeveloperForm" class="contact-workflow">
    <div class="contact-workflow-intro">
      <p>Send a support request to the CrewBidPro developer.</p>
      <p>Include the line, trip, fleet, bid month, and what looked wrong.</p>
    </div>
    <div class="contact-field-grid">
      <label>
        Request Type
        <select id="contactRequestType">
          <option value="Parser issue">Parser issue</option>
          <option value="Import problem">Import problem</option>
          <option value="Display problem">Display problem</option>
          <option value="Account Setup">Account Setup</option>
          <option value="Account question">Account question</option>
          <option value="Request a feature">Request a feature</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Reply Contact
        <input id="contactReplyTo" type="text" autocomplete="email" placeholder="Name, email, or phone">
      </label>
    </div>
    <label>
      What Happened
      <textarea id="contactMessage" class="contact-message" rows="6" placeholder="Line/trip, fleet, bid month, what you clicked, and what looked wrong"></textarea>
    </label>
    <label>
      Support Summary
      <textarea id="contactSummary" class="report-payload contact-summary" rows="12" spellcheck="false" readonly></textarea>
    </label>
    <div class="report-actions">
      <button id="submitContactRequest" type="submit" class="btn-primary">Submit Request</button>
      <button id="copyContactSummary" type="button" class="btn-secondary">Copy Summary</button>
      <span id="copyContactStatus" class="report-copy-status" aria-live="polite"></span>
    </div>
  </form>
`;

const $ = (id) => document.getElementById(id);

let pendingConfirmResolve = null;
let pendingConfirmTrigger = null;
let pendingConfirmAllowsCancel = true;

const safeStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};

const DEFAULT_WORKSPACE_ACCORDION_STATE = {
  import: true,
  calendar: true,
  filters: true,
  cityAvoid: true,
};

function loadWorkspaceAccordionState() {
  try {
    const parsed = JSON.parse(safeStorage.get(WORKSPACE_ACCORDION_STORAGE_KEY) || "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return { ...DEFAULT_WORKSPACE_ACCORDION_STATE };
    return Object.fromEntries(
      Object.entries(DEFAULT_WORKSPACE_ACCORDION_STATE).map(([key, defaultValue]) => [
        key,
        typeof parsed[key] === "boolean" ? parsed[key] : defaultValue,
      ]),
    );
  } catch {
    return { ...DEFAULT_WORKSPACE_ACCORDION_STATE };
  }
}

function saveWorkspaceAccordionState(nextState) {
  safeStorage.set(WORKSPACE_ACCORDION_STORAGE_KEY, JSON.stringify(nextState));
}

function applyWorkspaceAccordionDataset(accordionState) {
  if (isProfilePage()) return;
  const root = document.documentElement;
  root.dataset.workspaceCalendarExpanded = String(accordionState.calendar !== false);
  root.dataset.workspaceFiltersExpanded = String(accordionState.filters !== false);
  root.dataset.workspaceCityAvoidExpanded = String(accordionState.cityAvoid !== false);
}

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const setCookie = (name, value) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 365}`;
};

const clearCookie = (name) => {
  document.cookie = `${name}=; path=/; max-age=0`;
};

const getWorkspaceParams = () => new URLSearchParams(window.location.search);
const shouldOpenFirstTimeProfile = () => getWorkspaceParams().has("firstTime");
const shouldOpenWelcomeSplash = () => shouldOpenFirstTimeProfile() || getWorkspaceParams().has("welcome") || getWorkspaceParams().has("onboardingPreview");
const shouldForceWelcomeSplash = () => getWorkspaceParams().has("welcome") || getWorkspaceParams().has("onboardingPreview");
const shouldCheckProfileCompletion = () => getWorkspaceParams().has("profileCheck");
const shouldRequireProfileIdentity = () => getWorkspaceParams().has("profileRequired");
const shouldResetLocalProfile = () => getWorkspaceParams().has("localProfileReset") || getWorkspaceParams().has("resetLocalProfile");
const shouldResetOnboardingPreview = () => getWorkspaceParams().has("profileReset") || getWorkspaceParams().has("onboardingPreview");
const shouldPreviewSupportMessage = () => getWorkspaceParams().has("messagePreview") || getWorkspaceParams().has("messagesPreview");
const shouldPreviewUserView = () => getWorkspaceParams().has("userPreview") || getWorkspaceParams().has("userViewPreview");
const shouldPreviewUi012Availability = () => getWorkspaceParams().get("ui012Preview") === "1"
  && (isLocalWorkspaceHost() || window.location.hostname === "crewbidpro-ohio.onrender.com");
const shouldPreviewProfileIdentity = () => getWorkspaceParams().has("profilePreview") || getWorkspaceParams().has("employeeIdPreview");
const shouldHideAdminWorkspaceControls = () => shouldPreviewUserView()
  || shouldPreviewSupportMessage()
  || shouldOpenFirstTimeProfile()
  || shouldResetOnboardingPreview();
const isProfilePage = () => document.body?.dataset.page === "profile";
const getCurrentAccountEmail = () => (safeStorage.get(ACCOUNT_EMAIL_STORAGE_KEY) || "").trim().toLowerCase();
const getNewUserSplashIdentity = () => getCurrentAccountEmail() || "local";
const DEVELOPER_PROFILE_EMAILS = new Set(["rmontoya@kalittaair.com"]);
const canEditDeveloperProfileFields = () => {
  const email = getCurrentAccountEmail() || String(state.preferences.workEmail || "").trim().toLowerCase();
  return DEVELOPER_PROFILE_EMAILS.has(email);
};
const shouldShowOwnerAdminShortcut = () => DEVELOPER_PROFILE_EMAILS.has(getCurrentAccountEmail());
function isLocalWorkspaceHost(hostname = window.location.hostname) {
  if (LOCAL_WORKSPACE_HOSTS.has(hostname)) return true;
  if (hostname.endsWith(".local")) return true;
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
  const match = hostname.match(/^172\.(\d{1,3})\.\d{1,3}\.\d{1,3}$/);
  if (match) {
    const secondOctet = Number(match[1]);
    return secondOctet >= 16 && secondOctet <= 31;
  }
  return false;
}

const isLocalPreviewEnvironment = () => window.location.protocol === "file:" || isLocalWorkspaceHost();
const getOhioOnboardingFixtureToken = () => (
  window.location.hostname === OHIO_ONBOARDING_HOST
    ? String(window.sessionStorage?.getItem(OHIO_ONBOARDING_FIXTURE_TOKEN_KEY) || "").trim()
    : ""
);
const isOhioOnboardingFixtureMode = () => Boolean(getOhioOnboardingFixtureToken());
const hasWorkspaceAuthHeaders = (headers = {}) => Boolean(
  headers.Authorization || headers[OHIO_ONBOARDING_FIXTURE_HEADER]
);
const shouldBypassProfileIdentityLogin = () => shouldRequireProfileIdentity()
  && shouldPreviewProfileIdentity()
  && isLocalPreviewEnvironment();
const shouldRequireWorkspaceAuth = () => !isLocalPreviewEnvironment();
const shouldUseRemoteWorkspaceServices = () => shouldRequireWorkspaceAuth()
  || getWorkspaceParams().has("remoteServices")
  || shouldCheckProfileCompletion()
  || (shouldRequireProfileIdentity() && !shouldBypassProfileIdentityLogin());
const shouldSimulateSiteUpdate = () => isLocalWorkspaceHost() && getWorkspaceParams().has("simulateUpdate");

function redirectToLoginForWorkspace() {
  clearOfflineAuthEntitlement();
  const redirectUrl = new URL(WORKSPACE_LOGIN_URL, window.location.href);
  redirectUrl.searchParams.set("next", `${window.location.pathname.split("/").pop() || "workspace.html"}${window.location.search || "?profileCheck=1"}`);
  if (navigator.onLine === false) redirectUrl.searchParams.set("offlineExpired", "1");
  window.location.replace(redirectUrl.toString());
}

function userMustChangePassword(user) {
  const userMetadata = user?.user_metadata || {};
  return Boolean(
    userMetadata.must_change_password
    || userMetadata.password_change_required
  );
}

async function getServerPasswordChangeRequired() {
  if (!supabaseClient || navigator.onLine === false) return null;
  const { data } = await supabaseClient.auth.getSession();
  const token = data.session?.access_token || "";
  if (!token) return null;
  const response = await fetch("/api/user/password-change-status", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) throw new Error(payload.error || "Unable to verify password status.");
  return Boolean(payload.mustChangePassword);
}

async function shouldRedirectForPasswordChange(user) {
  if (!userMustChangePassword(user)) return false;
  const serverRequired = await getServerPasswordChangeRequired();
  return serverRequired !== false;
}

function redirectToRequiredPasswordChange() {
  const redirectUrl = new URL("change-password.html", window.location.href);
  redirectUrl.searchParams.set("next", `${window.location.pathname.split("/").pop() || "workspace.html"}${window.location.search || "?profileCheck=1"}`);
  window.location.replace(redirectUrl.toString());
}

function redirectToLoginForProfileIdentity() {
  clearOfflineAuthEntitlement();
  const redirectUrl = new URL(WORKSPACE_LOGIN_URL, window.location.href);
  redirectUrl.searchParams.set("next", "workspace.html?profileCheck=1");
  window.location.replace(redirectUrl.toString());
}

function rememberOnlineWorkspaceAuth(user) {
  const previousAccount = (safeStorage.get(ACCOUNT_EMAIL_STORAGE_KEY) || "").trim().toLowerCase();
  const nextAccount = String(user?.email || "").trim().toLowerCase();
  if (previousAccount && nextAccount && previousAccount !== nextAccount) {
    clearOfflineMoneyLineContext(previousAccount).catch(() => {});
  }
  safeStorage.set(ACCOUNT_EMAIL_STORAGE_KEY, nextAccount);
  safeStorage.set(ACCOUNT_STATUS_STORAGE_KEY, "signed-in");
  safeStorage.set(ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY, String(Date.now()));
}

function clearOfflineAuthEntitlement() {
  safeStorage.remove(ACCOUNT_EMAIL_STORAGE_KEY);
  safeStorage.remove(ACCOUNT_STATUS_STORAGE_KEY);
  safeStorage.remove(ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY);
}

function hasFreshOfflineAuthEntitlement() {
  const lastOnlineAuthAt = Number(safeStorage.get(ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY) || 0);
  return lastOnlineAuthAt > 0 && Date.now() - lastOnlineAuthAt <= OFFLINE_AUTH_WINDOW_MS;
}

function hasOfflineWorkspaceSession() {
  return navigator.onLine === false
    && hasFreshOfflineAuthEntitlement()
    && Boolean(safeStorage.get(ACCOUNT_EMAIL_STORAGE_KEY) || loadCurrentWorkspacePackageRef());
}

let workspaceVerifiedUser = null;
let workspaceUserVerificationPromise = null;
let workspaceHydratedProfile = null;
let workspaceProfileHydrationPromise = null;

async function getVerifiedWorkspaceUser() {
  if (workspaceVerifiedUser) return workspaceVerifiedUser;
  if (workspaceUserVerificationPromise) return workspaceUserVerificationPromise;
  workspaceUserVerificationPromise = (async () => {
    const { data, error } = await withWorkspaceStartupTimeout(
      supabaseClient.auth.getUser(),
      WORKSPACE_AUTH_TIMEOUT_MS,
      "Account verification",
    );
    if (error) throw error;
    workspaceVerifiedUser = data.user || null;
    return workspaceVerifiedUser;
  })();
  try {
    return await workspaceUserVerificationPromise;
  } finally {
    workspaceUserVerificationPromise = null;
  }
}

async function requireWorkspaceSession() {
  if (isOhioOnboardingFixtureMode()) {
    const token = getOhioOnboardingFixtureToken();
    try {
      const response = await fetch("/api/testing/onboarding-fixture/session", {
        headers: { [OHIO_ONBOARDING_FIXTURE_HEADER]: token },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("The OHIO onboarding test session expired.");
      rememberOnlineWorkspaceAuth({ email: OHIO_ONBOARDING_FIXTURE_EMAIL });
      setupOhioOnboardingFixtureControls();
      return true;
    } catch (error) {
      window.sessionStorage?.removeItem(OHIO_ONBOARDING_FIXTURE_TOKEN_KEY);
      clearOfflineAuthEntitlement();
      window.location.replace("login.html?next=admin");
      return false;
    }
  }
  if (!shouldRequireWorkspaceAuth()) return true;
  if (hasOfflineWorkspaceSession()) return true;
  if (navigator.onLine === false) {
    redirectToLoginForWorkspace();
    return false;
  }
  if (!supabaseClient) {
    redirectToLoginForWorkspace();
    return false;
  }

  try {
    const user = await getVerifiedWorkspaceUser();
    if (!user) {
      redirectToLoginForWorkspace();
      return false;
    }
    if (await shouldRedirectForPasswordChange(user)) {
      redirectToRequiredPasswordChange();
      return false;
    }
    rememberOnlineWorkspaceAuth(user);
    return true;
  } catch (error) {
    console.warn("Workspace auth check failed:", error.message);
    if (hasOfflineWorkspaceSession()) return true;
    redirectToLoginForWorkspace();
    return false;
  }
}

async function hydrateWorkspaceAccountIdentity() {
  if (isOhioOnboardingFixtureMode()) {
    rememberOnlineWorkspaceAuth({ email: OHIO_ONBOARDING_FIXTURE_EMAIL });
    await hydrateCurrentUserProfilePreferences();
    setupOhioOnboardingFixtureControls();
    return;
  }
  if (!supabaseClient || !shouldUseRemoteWorkspaceServices()) return;
  if (navigator.onLine === false) return;

  try {
    const user = await getVerifiedWorkspaceUser();
    const email = (user?.email || "").trim();
    if (!email) {
      if (shouldOpenFirstTimeProfile() || shouldCheckProfileCompletion()) {
        clearOfflineAuthEntitlement();
      }
      return;
    }

    if (await shouldRedirectForPasswordChange(user)) {
      redirectToRequiredPasswordChange();
      return;
    }

    rememberOnlineWorkspaceAuth(user);
    await hydrateCurrentUserProfilePreferences();
  } catch (error) {
    console.warn("Account identity sync skipped:", error.message);
  }
}

function applyRemoteProfileToPreferences(profile = {}, auth = {}) {
  if (!profile && !auth) return false;
  const hasFleetPreference = Object.prototype.hasOwnProperty.call(profile, "fleet_preference");
  const rosterFleet = ["747", "777"].includes(profile.aircraft_type) ? profile.aircraft_type : "";
  const rosterSeat = ["CA", "FO", "FE"].includes(String(profile.seat_class || "").toUpperCase())
    ? String(profile.seat_class).toUpperCase()
    : "";
  const effectiveFleet = ["747", "777"].includes(profile.effective_aircraft_type)
    ? profile.effective_aircraft_type
    : ["747", "777"].includes(profile.fleet_preference)
      ? profile.fleet_preference
      : rosterFleet;
  const effectiveSeat = ["CA", "FO", "FE"].includes(String(profile.effective_seat_class || "").toUpperCase())
    ? String(profile.effective_seat_class).toUpperCase()
    : rosterSeat;
  state.preferences.displayName = profile.display_name || state.preferences.displayName || "";
  state.preferences.workEmail = auth.email || profile.email || state.preferences.workEmail || "";
  state.preferences.personalEmail = profile.personal_email || state.preferences.personalEmail || "";
  state.preferences.personalEmailVerifiedAt = profile.personal_email_verified_at || "";
  if (Object.prototype.hasOwnProperty.call(profile, "pending_personal_email")) {
    state.preferences.pendingPersonalEmail = profile.pending_personal_email || "";
    state.preferences.pendingPersonalEmailExpiresAt = profile.pending_personal_email_expires_at || "";
  }
  const notificationPreferences = profile.notification_preferences && typeof profile.notification_preferences === "object"
    ? profile.notification_preferences
    : {};
  state.preferences.outbidNotifications = notificationPreferences.outbid_notifications === true;
  state.preferences.newlyAvailableNotifications = notificationPreferences.newly_available_notifications === true;
  state.preferences.systemNotifications = notificationPreferences.system_notifications === true;
  state.notificationPreferencesLastSaved = getNotificationPreferencesSnapshot();
  state.preferences.phoneNumber = profile.phone_number || auth.phone || state.preferences.phoneNumber || "";
  state.preferences.phoneNumberVerifiedAt = profile.phone_number_verified_at || "";
  state.preferences.employeeNumber = profile.employee_number || state.preferences.employeeNumber || "";
  state.preferences.seniorityNumber = profile.seniority_number || state.preferences.seniorityNumber || "";
  state.preferences.rosterAircraftType = rosterFleet || state.preferences.rosterAircraftType || "";
  state.preferences.rosterSeatClass = rosterSeat || state.preferences.rosterSeatClass || "";
  state.preferences.aircraftType = effectiveFleet || state.preferences.aircraftType || "";
  state.preferences.seatClass = effectiveSeat || state.preferences.seatClass || "";
  state.preferences.assignmentSource = profile.assignment_source || state.preferences.assignmentSource || "";
  state.preferences.assignmentUpdatedAt = profile.assignment_updated_at || state.preferences.assignmentUpdatedAt || "";
  state.preferences.identityConfirmedAt = profile.identity_confirmed_at || state.preferences.identityConfirmedAt || "";
  state.preferences.identitySource = profile.identity_source || state.preferences.identitySource || "";
  state.preferences.peerGroupPosition = Number(profile.peer_group_position || state.preferences.peerGroupPosition || 0);
  state.preferences.peerGroupSize = Number(profile.peer_group_size || state.preferences.peerGroupSize || 0);
  state.preferences.bidStrengthPercent = Number(profile.bid_strength_percent || state.preferences.bidStrengthPercent || 0);
  if (hasFleetPreference || effectiveFleet) state.preferences.pilotType = effectiveFleet || "any";
  setConfirmedProfileAssignment(effectiveFleet, effectiveSeat);
  savePreferences();
  return true;
}

async function hydrateCurrentUserProfilePreferences({ force = false } = {}) {
  if (!force && workspaceHydratedProfile) return workspaceHydratedProfile;
  if (!force && workspaceProfileHydrationPromise) return workspaceProfileHydrationPromise;
  const hydrate = async () => {
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    if (!hasWorkspaceAuthHeaders(headers)) return null;
    const response = await fetchWithWorkspaceTimeout("/api/user/profile", { headers, cache: "no-store" });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.error) throw new Error(payload.error || "Unable to load profile");
    applyRemoteProfileToPreferences(payload.profile || {}, payload.auth || {});
    workspaceHydratedProfile = payload.profile || {};
    return workspaceHydratedProfile;
  };
  if (force) return hydrate();
  workspaceProfileHydrationPromise = hydrate();
  try {
    return await workspaceProfileHydrationPromise;
  } finally {
    workspaceProfileHydrationPromise = null;
  }
}

function renderMoneyLineToggleControls() {
  document.querySelectorAll("[data-moneyline-toggle]").forEach((toggle) => {
    toggle.checked = Boolean(state.moneyLine.enabled);
    toggle.disabled = Boolean(state.moneyLine.setupInFlight);
    toggle.closest("label")?.classList.toggle("is-active", state.moneyLine.enabled);
  });
}

async function fetchMoneyLineContext() {
  if (navigator.onLine === false || !shouldUseRemoteWorkspaceServices()) return null;
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) return null;
  const response = await fetchWithWorkspaceTimeout("/api/user/moneyline-context", {
    headers,
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) throw new Error(payload.error || "Unable to load MoneyLine context.");
  if (payload.context?.longevityDate) {
    state.moneyLine.context = payload.context;
    await saveOfflineMoneyLineContext(payload.context);
  }
  if (payload.rosterUpdated) {
    window.setTimeout(() => {
      openSupportModal(
        "MoneyLine™ updated",
        "Crew Profile",
        "<p>Your official seniority-list information is now available. CrewBidPro has replaced your provisional hire-date estimate with your official LONG (longevity date) context.</p><p>No protected date is shown here.</p>",
      );
    }, 1200);
  }
  return payload;
}

async function hydrateMoneyLineState() {
  loadMoneyLineTogglePreference();
  state.moneyLine.context = await loadOfflineMoneyLineContext();
  if (navigator.onLine !== false) {
    try {
      await fetchMoneyLineContext();
      syncOfflineMoneyLineDiagnostics().catch(() => {});
    } catch (error) {
      console.warn("MoneyLine context refresh skipped:", error.message);
    }
  }
  state.moneyLine.contextLoaded = true;
  if (state.moneyLine.context?.rateTableVersion !== MONEYLINE_RATE_TABLE_VERSION) {
    state.moneyLine.context = null;
    state.moneyLine.enabled = false;
    saveMoneyLineTogglePreference(false);
  }
  renderMoneyLineToggleControls();
}

function setMoneyLineEnabled(enabled) {
  state.moneyLine.enabled = Boolean(enabled);
  saveMoneyLineTogglePreference(state.moneyLine.enabled);
  renderMoneyLineToggleControls();
  if ($("bidResultsProfileContent")) {
    renderBidResultsCard();
  } else if (state.data) {
    renderActiveTab();
  }
}

function openMoneyLineHireDateModal() {
  openSupportModal(
    "Set up MoneyLine™",
    "One-time setup",
    `
      <div class="moneyline-setup">
        <p>Your official LONG (longevity date) is not available yet. Enter your company Date of Hire for a provisional estimate.</p>
        <p>CrewBidPro will automatically use your official LONG (longevity date) when it appears on a future seniority list.</p>
        <label>
          Company Date of Hire
          <input id="moneyLineHireDate" type="date" autocomplete="off" max="${new Date().toISOString().slice(0, 10)}">
        </label>
        <p class="moneyline-setup-note">This date can be confirmed once. Contact the CrewBidPro admin if it needs correction later.</p>
        <div class="moneyline-setup-actions">
          <button id="confirmMoneyLineHireDate" type="button" class="btn-primary">Continue</button>
        </div>
        <p id="moneyLineSetupStatus" class="import-status" aria-live="polite"></p>
      </div>
    `,
  );
  $("moneyLineHireDate")?.focus();
  $("confirmMoneyLineHireDate")?.addEventListener("click", async () => {
    const input = $("moneyLineHireDate");
    const status = $("moneyLineSetupStatus");
    const hireDate = input?.value || "";
    if (!hireDate) {
      if (status) {
        status.textContent = "Enter your company Date of Hire.";
        status.classList.add("is-error");
      }
      input?.focus();
      return;
    }
    const confirmed = await confirmDestructiveAction({
      title: "Confirm your hire date",
      message: `Are you sure ${new Date(`${hireDate}T12:00:00`).toLocaleDateString()} is your hire date? Once confirmed, contact the CrewBidPro admin to change it.`,
      confirmLabel: "Yes, this is my hire date",
    });
    if (!confirmed) {
      input?.focus();
      return;
    }
    const button = $("confirmMoneyLineHireDate");
    if (button) {
      button.disabled = true;
      button.textContent = "Saving...";
    }
    try {
      const headers = await getSupabaseAuthHeaders({ forceRemote: true });
      if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Reconnect and sign in to finish the one-time setup.");
      const response = await fetch("/api/user/moneyline-context", {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hireDate }),
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || payload.error || !payload.context?.longevityDate) {
        throw new Error(payload.error || "MoneyLine setup could not be completed.");
      }
      state.moneyLine.context = payload.context;
      await saveOfflineMoneyLineContext(payload.context);
      closeSupportModal();
      setMoneyLineEnabled(true);
    } catch (error) {
      if (status) {
        status.textContent = error.message;
        status.classList.add("is-error");
      }
      if (button) {
        button.disabled = false;
        button.textContent = "Continue";
      }
    }
  });
}

async function enableMoneyLineWithSetup() {
  if (state.moneyLine.setupInFlight) return false;
  state.moneyLine.setupInFlight = true;
  renderMoneyLineToggleControls();
  try {
    if (!state.moneyLine.context && navigator.onLine !== false) {
      const payload = await fetchMoneyLineContext();
      if (payload && payload.eligible === false) {
        openSupportModal("MoneyLine™ unavailable", "Crew Profile", `<p>${escapeHtml(payload.reason || "Confirm a Captain or First Officer rank first.")}</p>`);
        return false;
      }
    }
    if (state.moneyLine.context) {
      setMoneyLineEnabled(true);
      return true;
    }
    if (!["CA", "FO"].includes(String(state.preferences.seatClass || "").toUpperCase())) {
      openSupportModal(
        "MoneyLine™ unavailable",
        "Crew Profile",
        "<p>MoneyLine dollar estimates require a confirmed Captain or First Officer Crew Profile rank.</p>",
      );
      return false;
    }
    if (navigator.onLine === false) {
      openSupportModal(
        "Connect once to set up MoneyLine™",
        "Offline",
        "<p>The first MoneyLine setup must be confirmed online. After setup, personalized estimates remain available offline on this device.</p>",
      );
      return false;
    }
    openMoneyLineHireDateModal();
    return false;
  } finally {
    state.moneyLine.setupInFlight = false;
    renderMoneyLineToggleControls();
  }
}

function setupMoneyLineControls() {
  document.querySelectorAll("[data-moneyline-toggle]").forEach((toggle) => {
    toggle.addEventListener("change", async () => {
      if (!toggle.checked) {
        setMoneyLineEnabled(false);
        return;
      }
      const enabled = await enableMoneyLineWithSetup();
      if (!enabled) renderMoneyLineToggleControls();
    });
  });
}

function renderRemarkPillVisibilityControls() {
  document.querySelectorAll("[data-remark-pill-toggle]").forEach((toggle) => {
    const preference = toggle.dataset.remarkPillToggle;
    toggle.checked = preference === "longStay"
      ? !state.remarkPillVisibility.hideLongStay
      : !state.remarkPillVisibility.hideCrewResults;
    toggle.closest("label")?.classList.toggle("is-active", toggle.checked);
  });
}

function getLongStayThresholdHours() {
  return clamp(
    Number(state.preferences.longStayThresholdHours) || DEFAULT_LONG_STAY_THRESHOLD_HOURS,
    1,
    96,
  );
}

function renderLongStayThresholdHelp() {
  const hours = getLongStayThresholdHours();
  const canCustomize = canUseFeature("customThresholds");
  return `
    <div class="long-stay-threshold-help">
      <p>A Long Stay is a planned rest or layover after a route that lasts longer than your selected threshold. Matching lines and trips receive a LONG STAY remark and can be found with the Long Stay filter.</p>
      <div class="long-stay-threshold-current">
        <span>Current setting</span>
        <strong>More than ${hours} ${hours === 1 ? "hour" : "hours"}</strong>
      </div>
      <div class="long-stay-threshold-editor">
        <label for="lineLongStayThresholdInput">
          Hours
          <input id="lineLongStayThresholdInput" type="number" min="1" max="96" step="1" inputmode="numeric" value="${hours}" ${canCustomize ? "" : "disabled"}>
        </label>
        <button id="saveLineLongStayThreshold" type="button" class="btn-primary" ${canCustomize ? "" : "disabled"}>Save</button>
      </div>
      ${canCustomize
        ? ""
        : `<p class="long-stay-threshold-note">Your current access uses CrewBidPro's default threshold of more than ${DEFAULT_LONG_STAY_THRESHOLD_HOURS} hours. Custom thresholds are available with Full Access.</p>`}
    </div>
  `;
}

function openLongStayThresholdHelp() {
  openSupportModal("Long Stay", "Line Display", renderLongStayThresholdHelp());
  $("supportModal")?.classList.add("is-long-stay-threshold-modal");
  const input = $("lineLongStayThresholdInput");
  const saveButton = $("saveLineLongStayThreshold");
  if (!input || !saveButton || saveButton.disabled) return;
  saveButton.addEventListener("click", () => {
    const hours = clamp(Number(input.value) || DEFAULT_LONG_STAY_THRESHOLD_HOURS, 1, 96);
    state.preferences.longStayThresholdHours = hours;
    input.value = hours;
    const profileInput = $("preferenceLongStayThreshold");
    if (profileInput) profileInput.value = hours;
    savePreferences();
    renderActiveTab();
    closeSupportModal();
  });
}

function setupRemarkPillVisibilityControls() {
  renderRemarkPillVisibilityControls();
  document.querySelectorAll("[data-remark-pill-toggle]").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      const preference = toggle.dataset.remarkPillToggle;
      if (preference === "longStay") {
        state.remarkPillVisibility.hideLongStay = !toggle.checked;
      } else if (preference === "crewResults") {
        state.remarkPillVisibility.hideCrewResults = !toggle.checked;
      }
      saveRemarkPillVisibilityPreferences();
      renderRemarkPillVisibilityControls();
      renderActiveTab();
    });
  });
  document.querySelectorAll("[data-long-stay-help]").forEach((button) => {
    button.addEventListener("click", openLongStayThresholdHelp);
  });
}

function renderFatigueScoreControls() {
  document.querySelectorAll("[data-fatigue-toggle]").forEach((toggle) => {
    toggle.checked = state.fatigueScoresVisible;
    toggle.closest("label")?.classList.toggle("is-active", state.fatigueScoresVisible);
  });
}

function setupFatigueScoreControls() {
  renderFatigueScoreControls();
  document.querySelectorAll("[data-fatigue-toggle]").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      state.fatigueScoresVisible = toggle.checked;
      saveFatigueScoreVisibilityPreference();
      renderFatigueScoreControls();
      renderActiveTab();
    });
  });
  document.querySelectorAll("[data-fatigue-help]").forEach((button) => {
    button.addEventListener("click", () => {
      openSupportModal("How Fatigue Scores Work", "Fatigue Score", renderFatigueMethodHelp());
    });
  });
}

function renderLineStartTimeControls() {
  document.querySelectorAll("[data-line-start-toggle]").forEach((toggle) => {
    toggle.checked = state.lineStartTimesVisible;
    toggle.closest("label")?.classList.toggle("is-active", state.lineStartTimesVisible);
  });
}

function setupLineStartTimeControls() {
  renderLineStartTimeControls();
  document.querySelectorAll("[data-line-start-toggle]").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      state.lineStartTimesVisible = toggle.checked;
      saveLineStartTimeVisibilityPreference();
      renderLineStartTimeControls();
      renderActiveTab();
    });
  });
  document.querySelectorAll("[data-line-start-help]").forEach((button) => {
    button.addEventListener("click", () => {
      openSupportModal("How Line Start Works", "First Show Time", renderLineStartMethodHelp());
    });
  });
}

function getCompletedCrewProfiles() {
  try {
    const parsed = JSON.parse(safeStorage.get(CREW_PROFILE_COMPLETION_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.map((email) => String(email).toLowerCase()) : []);
  } catch {
    return new Set();
  }
}

function isPendingEmployeeIdentity() {
  return Boolean(
    state.preferences.employeeNumber
    && String(state.preferences.identitySource || "").toLowerCase() === PENDING_EMPLOYEE_IDENTITY_SOURCE
    && !state.preferences.identityConfirmedAt
  );
}

function hasAcceptedEmployeeIdentity() {
  return Boolean(state.preferences.employeeNumber && state.preferences.identityConfirmedAt) || isPendingEmployeeIdentity();
}

function isCurrentCrewProfileComplete() {
  return hasAcceptedEmployeeIdentity()
    && ["747", "777"].includes(getProfileAircraftType())
    && ["CA", "FO", "FE"].includes(String(state.preferences.seatClass || "").toUpperCase());
}

function markCurrentCrewProfileComplete() {
  const email = getCurrentAccountEmail();
  if (!email || !state.preferences.employeeNumber) return;
  const completedProfiles = getCompletedCrewProfiles();
  completedProfiles.add(email);
  safeStorage.set(CREW_PROFILE_COMPLETION_STORAGE_KEY, JSON.stringify([...completedProfiles]));
}

const getProfileFleetPreference = () => {
  const inferredAircraft = String(state.preferences.aircraftType || "");
  if (["747", "777"].includes(inferredAircraft)) return inferredAircraft;
  return ["747", "777"].includes(state.preferences.pilotType) ? state.preferences.pilotType : "";
};

function requireCrewProfileFleetForWorkspace() {
  if (isProfilePage()) return false;
  if (!shouldCheckProfileCompletion() && !shouldUseRemoteWorkspaceServices()) return false;
  if (isCurrentCrewProfileComplete()) return false;
  setImportStatus("Confirm your employee number in Crew Profile before loading a bid package.", "error");
  window.location.assign("profile.html?firstTime=1&profileRequired=1");
  return true;
}

function getSeenNewUserSplashes() {
  try {
    const parsed = JSON.parse(safeStorage.get(NEW_USER_SPLASH_SEEN_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.map((value) => String(value).toLowerCase()) : []);
  } catch {
    return new Set();
  }
}

function clearNewUserPreviewState() {
  safeStorage.remove(NEW_USER_SPLASH_SEEN_STORAGE_KEY);
  safeStorage.remove(CREW_PROFILE_COMPLETION_STORAGE_KEY);
}

function clearLocalCrewProfileState() {
  safeStorage.remove(PREFERENCES_STORAGE_KEY);
  clearCookie(PREFERENCES_COOKIE_KEY);
  clearNewUserPreviewState();
  state.preferences = defaultPreferences();
}

function hasSeenNewUserSplash() {
  return getSeenNewUserSplashes().has(getNewUserSplashIdentity());
}

function markNewUserSplashSeen() {
  const seen = getSeenNewUserSplashes();
  seen.add(getNewUserSplashIdentity());
  safeStorage.set(NEW_USER_SPLASH_SEEN_STORAGE_KEY, JSON.stringify([...seen]));
}

function shouldShowNewUserSplash() {
  return !isProfilePage() && shouldOpenWelcomeSplash() && (shouldForceWelcomeSplash() || !hasSeenNewUserSplash());
}

function closeNewUserSplash({ remember = true } = {}) {
  const modal = $("newUserSplashModal");
  if (!modal) return;
  if (remember) markNewUserSplashSeen();
  modal.hidden = true;
}

function openNewUserSplash({ force = false } = {}) {
  const modal = $("newUserSplashModal");
  if (!modal || (!force && !shouldShowNewUserSplash())) return;
  modal.hidden = false;
  $("newUserOpenProfile")?.focus();
}

function scheduleNewUserSplash() {
  if (!shouldShowNewUserSplash()) return;
  window.setTimeout(openNewUserSplash, 500);
}

function setupNewUserSplash() {
  $("closeNewUserSplash")?.addEventListener("click", () => closeNewUserSplash());
  $("newUserStartWorkspace")?.addEventListener("click", () => closeNewUserSplash());
  $("newUserOpenImport")?.addEventListener("click", () => {
    closeNewUserSplash();
    setActiveTab("import", { userInitiated: true, scrollToPanel: true });
  });
  $("newUserOpenProfile")?.addEventListener("click", () => markNewUserSplashSeen());
  document.querySelectorAll("[data-new-user-destination]").forEach((card) => {
    card.addEventListener("click", () => {
      const destination = card.dataset.newUserDestination;
      if (destination === "profile") {
        markNewUserSplashSeen();
        window.location.assign("profile.html?firstTime=1");
        return;
      }
      closeNewUserSplash();
      if (destination === "import") {
        setActiveTab("import", { userInitiated: true, scrollToPanel: true });
      }
    });
  });
  document.querySelectorAll("[data-close-new-user-splash]").forEach((element) => {
    element.addEventListener("click", () => closeNewUserSplash());
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNewUserSplash();
  });
}

function applyAccountIdentityToPreferences() {
  const email = getCurrentAccountEmail();
  if (!email) return;
  state.preferences.workEmail = email;
}

const shouldOpenProfileSetup = () => isProfilePage() && shouldOpenFirstTimeProfile();

function openProfileSetup() {
  if (!isProfilePage()) {
    window.location.assign("profile.html?firstTime=1");
    return;
  }
  requestAnimationFrame(() => {
    scrollElementBelowTabs($("profilePanel"));
    $("preferenceDisplayName")?.focus();
  });
}

const getWorkspaceScrollUrlKey = () => `${window.location.pathname}${window.location.search}`;

function saveWorkspaceScrollPosition() {
  if (isProfilePage()) return;
  try {
    window.sessionStorage?.setItem(WORKSPACE_SCROLL_STORAGE_KEY, JSON.stringify({
      at: Date.now(),
      top: Math.max(0, Math.round(window.scrollY || 0)),
      url: getWorkspaceScrollUrlKey(),
    }));
  } catch {
    // Best-effort viewport restore only.
  }
}

function loadWorkspaceNavigationState() {
  try {
    const parsed = JSON.parse(safeStorage.get(WORKSPACE_NAV_STORAGE_KEY) || "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return {
      activeTab: ["lines", "trips", "reserves", "training", "selection", "submit", "import"].includes(parsed.activeTab) ? parsed.activeTab : "",
      activeViewTarget: SECTION_JUMP_TARGETS.has(parsed.activeViewTarget) ? parsed.activeViewTarget : "",
    };
  } catch {
    return {};
  }
}

function saveWorkspaceNavigationState() {
  if (isProfilePage() || !state.navigationStateReady) return;
  try {
    safeStorage.set(WORKSPACE_NAV_STORAGE_KEY, JSON.stringify({
      activeTab: state.activeTab,
      activeViewTarget: state.activeViewTarget,
    }));
  } catch {
    // Best-effort navigation restore only.
  }
}

function setupWorkspaceScrollPersistence() {
  if (isProfilePage()) return;
  window.addEventListener("pagehide", saveWorkspaceScrollPosition);
  window.addEventListener("beforeunload", saveWorkspaceScrollPosition);
}

function restoreWorkspaceScrollAfterHydration() {
  if (isProfilePage() || state.lockedViewTarget) return;
  let saved = null;
  try {
    saved = JSON.parse(window.sessionStorage?.getItem(WORKSPACE_SCROLL_STORAGE_KEY) || "null");
  } catch {
    saved = null;
  }
  if (!saved || saved.url !== getWorkspaceScrollUrlKey() || Date.now() - Number(saved.at || 0) > 30 * 60 * 1000) return;
  const top = Math.max(0, Number(saved.top) || 0);
  if (!top) return;
  const restore = () => {
    window.scrollTo({ top, behavior: "auto" });
    schedulePageJumpHighlightUpdate();
  };
  requestAnimationFrame(() => {
    restore();
    window.setTimeout(restore, 120);
  });
}

function revealWorkspace() {
  requestAnimationFrame(() => document.body?.classList.remove("workspace-is-hydrating"));
}

function saveCurrentWorkspacePackageRef(source, fleet) {
  if (!["saved", "vetted"].includes(source) || !["747", "777"].includes(fleet)) return;
  const serialized = JSON.stringify({
    source,
    fleet,
    at: Date.now(),
  });
  if (safeStorage.set(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY, serialized)) {
    try {
      window.sessionStorage?.removeItem(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY);
    } catch {
      // Ignore cleanup failures.
    }
    return;
  }
  try {
    window.sessionStorage?.setItem(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY, serialized);
  } catch {
    // Storage is only a convenience for restoring the last non-secret package pointer.
  }
}

function clearCurrentWorkspacePackageRef() {
  safeStorage.remove(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY);
  try {
    window.sessionStorage?.removeItem(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}

function loadCurrentWorkspacePackageRef() {
  try {
    const stored = safeStorage.get(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY)
      || window.sessionStorage?.getItem(WORKSPACE_CURRENT_PACKAGE_STORAGE_KEY)
      || "null";
    const saved = JSON.parse(stored);
    if (!saved || !["saved", "vetted"].includes(saved.source) || !["747", "777"].includes(saved.fleet)) return null;
    if (Date.now() - Number(saved.at || 0) > WORKSPACE_CURRENT_PACKAGE_TTL_MS) {
      clearCurrentWorkspacePackageRef();
      return null;
    }
    return saved;
  } catch {
    return null;
  }
}

function setOfflinePackageStatus(message = "Offline cache not ready.", tone = "neutral") {
  const status = $("offlinePackageStatus");
  if (!status) return;
  status.className = "offline-package-status";
  if (tone) status.classList.add(`is-${tone}`);
  status.textContent = message;
}

function withWorkspaceStartupTimeout(promise, timeoutMs = WORKSPACE_REMOTE_TIMEOUT_MS, label = "Workspace request") {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error(`${label} timed out.`)), timeoutMs);
    Promise.resolve(promise).then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      },
    );
  });
}

async function fetchWithWorkspaceTimeout(resource, options = {}, timeoutMs = WORKSPACE_REMOTE_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(resource, { ...options, signal: controller.signal });
  } catch (error) {
    if (error?.name === "AbortError") throw new Error("Workspace request timed out.");
    throw error;
  } finally {
    window.clearTimeout(timer);
  }
}

function startWorkspaceVerificationWatchdog() {
  if (state.workspaceVerifyWatchdogTimer) window.clearTimeout(state.workspaceVerifyWatchdogTimer);
  state.workspaceVerifyWatchdogTimer = window.setTimeout(() => {
    state.workspaceVerifyWatchdogTimer = null;
    releaseWorkspaceVerification();
    const datasetBanner = $("currentDatasetBanner");
    if (datasetBanner && /standby|verifying/i.test(datasetBanner.textContent || "")) {
      datasetBanner.textContent = hasLoadedPackageData()
        ? getCurrentDatasetBanner(state.data)
        : "Workspace checks are taking longer than expected. You may continue with saved data or open Import.";
    }
    const bidWindowMessage = $("bidWindowMessage");
    if (bidWindowMessage && /standby/i.test(bidWindowMessage.textContent || "") && !hasLoadedPackageData()) {
      bidWindowMessage.textContent = "LOAD A BID PACKAGE TO VIEW BID WINDOW INFORMATION.";
    }
  }, WORKSPACE_VERIFY_MAX_MS);
}

function markWorkspaceVerified() {
  const banner = $("currentDatasetBanner")?.closest(".current-dataset-banner");
  if (!banner) return;
  const elapsed = Date.now() - state.workspaceVerifyStartedAt;
  const delay = Math.max(0, WORKSPACE_VERIFY_MIN_MS - elapsed);
  if (state.workspaceVerifyTimer) window.clearTimeout(state.workspaceVerifyTimer);
  state.workspaceVerifyTimer = window.setTimeout(() => {
    banner.classList.remove("is-verifying");
    document.body?.classList.remove("workspace-is-verifying");
    if (state.workspaceVerifyWatchdogTimer) {
      window.clearTimeout(state.workspaceVerifyWatchdogTimer);
      state.workspaceVerifyWatchdogTimer = null;
    }
    const datasetBanner = $("currentDatasetBanner");
    if (datasetBanner && /standby|verifying/i.test(datasetBanner.textContent || "") && !hasLoadedPackageData()) {
      datasetBanner.textContent = "Workspace ready. Open Import to load an available bid package.";
    }
    const bidWindowMessage = $("bidWindowMessage");
    if (bidWindowMessage && /standby/i.test(bidWindowMessage.textContent || "") && !hasLoadedPackageData()) {
      bidWindowMessage.textContent = "LOAD A BID PACKAGE TO VIEW BID WINDOW INFORMATION.";
    }
    state.workspaceVerifyTimer = null;
  }, delay);
}

function releaseWorkspaceVerification() {
  const banner = $("currentDatasetBanner")?.closest(".current-dataset-banner");
  if (state.workspaceVerifyTimer) {
    window.clearTimeout(state.workspaceVerifyTimer);
    state.workspaceVerifyTimer = null;
  }
  if (state.workspaceVerifyWatchdogTimer) {
    window.clearTimeout(state.workspaceVerifyWatchdogTimer);
    state.workspaceVerifyWatchdogTimer = null;
  }
  banner?.classList.remove("is-verifying");
  document.body?.classList.remove("workspace-is-verifying");
}

function waitForWorkspacePaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

async function releaseWorkspaceVerificationBeforeHeavyRender() {
  const elapsed = Date.now() - state.workspaceVerifyStartedAt;
  const delay = Math.max(0, WORKSPACE_VERIFY_MIN_MS - elapsed);
  if (delay) {
    await new Promise((resolve) => window.setTimeout(resolve, delay));
  }
  releaseWorkspaceVerification();
  await waitForWorkspacePaint();
}

function offlinePackageKey(source, fleet) {
  return `${source || ""}:${fleet || ""}`;
}

function openOfflineDb() {
  if (!("indexedDB" in window)) return Promise.resolve(null);
  return new Promise((resolve) => {
    const request = window.indexedDB.open(OFFLINE_DB_NAME, OFFLINE_DB_VERSION);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(OFFLINE_PACKAGE_STORE)) {
        request.result.createObjectStore(OFFLINE_PACKAGE_STORE, { keyPath: "key" });
      }
      if (!request.result.objectStoreNames.contains(OFFLINE_BID_SELECTION_STORE)) {
        request.result.createObjectStore(OFFLINE_BID_SELECTION_STORE, { keyPath: "key" });
      }
      if (!request.result.objectStoreNames.contains(OFFLINE_MONEYLINE_CONTEXT_STORE)) {
        request.result.createObjectStore(OFFLINE_MONEYLINE_CONTEXT_STORE, { keyPath: "key" });
      }
      if (!request.result.objectStoreNames.contains(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE)) {
        request.result.createObjectStore(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE, { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

async function saveOfflinePackageCache({ source, fleet, packageInfo, data }) {
  if (!["saved", "vetted"].includes(source) || !["747", "777"].includes(fleet) || !data) return false;
  const db = await openOfflineDb();
  if (!db) return false;
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_PACKAGE_STORE, "readwrite");
    tx.objectStore(OFFLINE_PACKAGE_STORE).put({
      key: offlinePackageKey(source, fleet),
      source,
      fleet,
      package: packageInfo || null,
      data,
      savedAt: Date.now(),
    });
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function loadOfflinePackageCache(source, fleet) {
  if (!["saved", "vetted"].includes(source) || !["747", "777"].includes(fleet)) return null;
  const db = await openOfflineDb();
  if (!db) return null;
  const cached = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_PACKAGE_STORE, "readonly");
    const request = tx.objectStore(OFFLINE_PACKAGE_STORE).get(offlinePackageKey(source, fleet));
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => resolve(null);
  });
  db.close();
  return cached?.data ? cached : null;
}

function moneyLineAccountKey() {
  return getCurrentAccountEmail();
}

function moneyLineToggleStorageKey() {
  const accountKey = moneyLineAccountKey();
  return accountKey ? `${MONEYLINE_TOGGLE_STORAGE_KEY}.${accountKey}` : "";
}

function loadMoneyLineTogglePreference() {
  const key = moneyLineToggleStorageKey();
  state.moneyLine.enabled = Boolean(key && safeStorage.get(key) === "1");
  return state.moneyLine.enabled;
}

function saveMoneyLineTogglePreference(enabled) {
  const key = moneyLineToggleStorageKey();
  if (!key) return false;
  return safeStorage.set(key, enabled ? "1" : "0");
}

function remarkPillVisibilityStorageKey() {
  const accountKey = getCurrentAccountEmail();
  return accountKey ? `${REMARK_PILL_VISIBILITY_STORAGE_KEY}.${accountKey}` : "";
}

function loadRemarkPillVisibilityPreferences() {
  const key = remarkPillVisibilityStorageKey();
  if (!key) return;
  try {
    const saved = JSON.parse(safeStorage.get(key) || "{}");
    state.remarkPillVisibility.hideLongStay = saved.hideLongStay === true;
    state.remarkPillVisibility.hideCrewResults = saved.hideCrewResults === true;
  } catch {
    state.remarkPillVisibility.hideLongStay = false;
    state.remarkPillVisibility.hideCrewResults = false;
  }
}

function saveRemarkPillVisibilityPreferences() {
  const key = remarkPillVisibilityStorageKey();
  if (!key) return false;
  return safeStorage.set(key, JSON.stringify(state.remarkPillVisibility));
}

function fatigueScoreVisibilityStorageKey() {
  const accountKey = getCurrentAccountEmail();
  return accountKey ? `${FATIGUE_SCORE_VISIBILITY_STORAGE_KEY}.${accountKey}` : "";
}

function loadFatigueScoreVisibilityPreference() {
  const key = fatigueScoreVisibilityStorageKey();
  state.fatigueScoresVisible = !key || safeStorage.get(key) !== "0";
}

function saveFatigueScoreVisibilityPreference() {
  const key = fatigueScoreVisibilityStorageKey();
  if (!key) return false;
  return safeStorage.set(key, state.fatigueScoresVisible ? "1" : "0");
}

function lineStartTimeVisibilityStorageKey() {
  const accountKey = getCurrentAccountEmail();
  return accountKey ? `${LINE_START_TIME_VISIBILITY_STORAGE_KEY}.${accountKey}` : "";
}

function loadLineStartTimeVisibilityPreference() {
  const key = lineStartTimeVisibilityStorageKey();
  state.lineStartTimesVisible = !key || safeStorage.get(key) !== "0";
}

function saveLineStartTimeVisibilityPreference() {
  const key = lineStartTimeVisibilityStorageKey();
  if (!key) return false;
  return safeStorage.set(key, state.lineStartTimesVisible ? "1" : "0");
}

function lineResultsViewStorageKey() {
  const accountKey = getCurrentAccountEmail();
  return accountKey ? `${LINE_RESULTS_VIEW_STORAGE_KEY}.${accountKey}` : "";
}

function loadLineResultsViewPreference() {
  const key = lineResultsViewStorageKey();
  state.linesViewMode = key && safeStorage.get(key) === "calendar" ? "calendar" : "table";
  return state.linesViewMode;
}

function saveLineResultsViewPreference() {
  const key = lineResultsViewStorageKey();
  if (!key) return false;
  return safeStorage.set(key, state.linesViewMode);
}

async function saveOfflineMoneyLineContext(context) {
  const key = moneyLineAccountKey();
  if (!key || !context?.longevityDate || !["CA", "FO"].includes(context.seatClass)) return false;
  const db = await openOfflineDb();
  if (!db) return false;
  const record = {
    key,
    context: {
      seatClass: context.seatClass,
      longevityDate: context.longevityDate,
      source: context.source || "",
      provisional: Boolean(context.provisional),
      rateTableVersion: context.rateTableVersion || MONEYLINE_RATE_TABLE_VERSION,
      verifiedAt: context.verifiedAt || new Date().toISOString(),
    },
    savedAt: Date.now(),
  };
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_MONEYLINE_CONTEXT_STORE, "readwrite");
    tx.objectStore(OFFLINE_MONEYLINE_CONTEXT_STORE).put(record);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function loadOfflineMoneyLineContext() {
  const key = moneyLineAccountKey();
  if (!key) return null;
  const db = await openOfflineDb();
  if (!db) return null;
  const record = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_MONEYLINE_CONTEXT_STORE, "readonly");
    const request = tx.objectStore(OFFLINE_MONEYLINE_CONTEXT_STORE).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => resolve(null);
  });
  db.close();
  return record?.context || null;
}

async function clearOfflineMoneyLineContext(accountKey = moneyLineAccountKey()) {
  const key = String(accountKey || "").trim().toLowerCase();
  if (!key) return false;
  const db = await openOfflineDb();
  if (!db) return false;
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_MONEYLINE_CONTEXT_STORE, "readwrite");
    tx.objectStore(OFFLINE_MONEYLINE_CONTEXT_STORE).delete(key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function queueOfflineMoneyLineDiagnostic(diagnostic) {
  if (!diagnostic?.key) return false;
  const db = await openOfflineDb();
  if (!db) return false;
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE, "readwrite");
    tx.objectStore(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE).put({
      key: diagnostic.key,
      payload: diagnostic.payload,
      savedAt: Date.now(),
    });
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function loadOfflineMoneyLineDiagnostics() {
  const db = await openOfflineDb();
  if (!db) return [];
  const records = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE, "readonly");
    const request = tx.objectStore(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => resolve([]);
  });
  db.close();
  return records;
}

async function removeOfflineMoneyLineDiagnostic(key) {
  const db = await openOfflineDb();
  if (!db) return false;
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE, "readwrite");
    tx.objectStore(OFFLINE_MONEYLINE_DIAGNOSTIC_STORE).delete(key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function loadOfflinePackageAvailability(source) {
  if (!["saved", "vetted"].includes(source)) return {};
  const entries = await Promise.all(PACKAGE_FLEETS.map(async (fleet) => {
    const cached = await loadOfflinePackageCache(source, fleet);
    if (!cached?.data || detectFleetType(cached.data) !== fleet) return [fleet, null];
    return [fleet, {
      package: cached.package || { fleet },
      data: cached.data,
      offline: true,
    }];
  }));
  return Object.fromEntries(entries.filter(([, payload]) => payload));
}

async function cacheAvailablePackagesForOffline(source, packagesByFleet = {}) {
  if (!navigator.onLine || !["saved", "vetted"].includes(source)) return { attempted: 0, saved: 0 };
  const entries = Object.entries(packagesByFleet)
    .filter(([fleet, payload]) => PACKAGE_FLEETS.includes(fleet) && payload?.data);
  const results = await Promise.all(entries.map(async ([fleet, payload]) => {
    const packageInfo = source === "saved"
      ? normalizeSavedPackageInfo(payload.package)
      : normalizeGlobalPackageInfo(payload.package);
    return saveOfflinePackageCache({
      source,
      fleet,
      packageInfo,
      data: payload.data,
    });
  }));
  return {
    attempted: entries.length,
    saved: results.filter(Boolean).length,
  };
}

function mergePackageAvailability(remotePackages = {}, cachedPackages = {}) {
  return Object.fromEntries(PACKAGE_FLEETS
    .map((fleet) => [fleet, remotePackages?.[fleet] || cachedPackages?.[fleet]])
    .filter(([, payload]) => payload?.data));
}

async function hydrateOfflinePackageAvailability() {
  const [cachedSavedPackages, cachedGlobalPackages] = await Promise.all([
    loadOfflinePackageAvailability("saved"),
    loadOfflinePackageAvailability("vetted"),
  ]);
  state.availableSavedPackages = mergePackageAvailability(state.availableSavedPackages, cachedSavedPackages);
  state.availableGlobalPackages = mergePackageAvailability(state.availableGlobalPackages, cachedGlobalPackages);
}

async function prepareAvailablePackagesForOffline() {
  const [savedResult, globalResult] = await Promise.all([
    cacheAvailablePackagesForOffline("saved", state.availableSavedPackages),
    cacheAvailablePackagesForOffline("vetted", state.availableGlobalPackages),
  ]);
  const attempted = savedResult.attempted + globalResult.attempted;
  const saved = savedResult.saved + globalResult.saved;
  if (!attempted) return;
  if (!hasLoadedPackageData()) {
    setOfflinePackageStatus(
      saved === attempted
        ? "Available packages are ready for offline use."
        : "Some available packages could not be prepared for offline use.",
      saved === attempted ? "ready" : "error",
    );
  }
}

function setSelectionSyncStatus(message = "Selections save automatically per package.", tone = "neutral") {
  const status = $("selectionSyncStatus");
  if (!status) return;
  status.className = "selection-sync-status";
  if (tone) status.classList.add(`is-${tone}`);
  status.textContent = message;
}

function dispatchAppUpdateVersion(versionInfo) {
  if (!versionInfo?.version) return;
  window.dispatchEvent(new CustomEvent("crewbidpro:version-info", {
    detail: { versionInfo },
  }));
  window.CrewBidProAppUpdate?.setVersionInfo?.(versionInfo);
}

function setAppUpdateStatus(message = "", tone = "") {
  const detail = message ? { message, tone } : null;
  window.dispatchEvent(new CustomEvent("crewbidpro:update-status", { detail }));
  window.CrewBidProAppUpdate?.setUpdateStatus?.(detail);
}

function openAppUpdateLog(versionInfo = state.latestSiteVersion, options = {}) {
  if (!versionInfo?.version) return;
  const detail = { versionInfo, ...options };
  window.dispatchEvent(new CustomEvent("crewbidpro:open-update-log", { detail }));
  if (window.CrewBidProAppUpdate?.openUpdateLog) {
    window.CrewBidProAppUpdate.openUpdateLog(versionInfo, options);
  } else {
    window.setTimeout(() => window.CrewBidProAppUpdate?.openUpdateLog?.(versionInfo, options), 0);
  }
}

function createLocalSimulatedUpdateVersion() {
  const now = new Date();
  return {
    version: `local-simulated-update-${now.getTime()}`,
    updatedAt: now.toISOString(),
    title: "Local update notice test",
    changes: [
      "This simulated update appeared after the workspace had already loaded.",
      "The app detected the update during polling and opened the update window.",
      "This is a local-only test flow for the update notice experience.",
    ],
    releases: state.latestSiteVersion ? [state.latestSiteVersion] : [],
  };
}

async function fetchSiteVersionInfo() {
  if (navigator.onLine === false) return null;
  try {
    const response = await fetch(`/version.json?t=${Date.now()}`, { cache: "no-store" });
    const payload = await response.json();
    if (response.ok && payload?.version) return payload;
  } catch (error) {
    console.warn("Site update check skipped:", error.message);
  }
  return null;
}

async function isRefreshPromptSafe() {
  if (navigator.onLine === false) return false;
  if (state.bidSelectionSyncInFlight || state.bidSelectionSyncTimer) return false;
  if (state.importPendingFleet) return false;
  const pendingRecords = await loadPendingBidSelectionRecords();
  return pendingRecords.length === 0;
}

async function evaluateDetectedSiteUpdate({ autoOpen = false } = {}) {
  if (!state.detectedSiteUpdate?.version) return;
  const seenVersion = safeStorage.get(SITE_UPDATE_SEEN_STORAGE_KEY) || "";
  if (seenVersion === state.detectedSiteUpdate.version) {
    setAppUpdateStatus();
    return;
  }
  if (!(await isRefreshPromptSafe())) return;
  setAppUpdateStatus("New update available. CLICK HERE to see.", "available");
  if (autoOpen && state.siteUpdateAutoShownVersion !== state.detectedSiteUpdate.version) {
    state.siteUpdateAutoShownVersion = state.detectedSiteUpdate.version;
    openAppUpdateLog(state.detectedSiteUpdate, { title: state.detectedSiteUpdate.title || "CrewBidPro update", isNewUpdate: true });
  }
}

async function checkSiteUpdate({ fromPoll = false, autoOpen = false } = {}) {
  if (state.siteUpdateCheckInFlight) return;
  state.siteUpdateCheckInFlight = true;
  try {
    const versionInfo = await fetchSiteVersionInfo();
    if (!versionInfo?.version) return;
    state.latestSiteVersion = versionInfo;
    dispatchAppUpdateVersion(versionInfo);

    if (!state.siteUpdateBaselineVersion) {
      state.siteUpdateBaselineVersion = versionInfo.version;
      setAppUpdateStatus();
      const seenVersion = safeStorage.get(SITE_UPDATE_SEEN_STORAGE_KEY) || "";
      if (seenVersion !== versionInfo.version && !shouldShowNewUserSplash()) {
        state.siteUpdateAutoShownVersion = versionInfo.version;
        openAppUpdateLog(versionInfo, {
          title: versionInfo.title || "CrewBidPro update",
          isNewUpdate: false,
        });
      }
      return;
    }

    if (fromPoll && versionInfo.version !== state.siteUpdateBaselineVersion) {
      state.detectedSiteUpdate = versionInfo;
      await evaluateDetectedSiteUpdate({ autoOpen: autoOpen && !shouldShowNewUserSplash() });
    } else if (!state.detectedSiteUpdate) {
      setAppUpdateStatus();
    }
  } finally {
    state.siteUpdateCheckInFlight = false;
    scheduleK4ConnectionPrompt();
  }
}

function stopSiteUpdatePolling() {
  if (!state.siteUpdatePollTimer) return;
  window.clearInterval(state.siteUpdatePollTimer);
  state.siteUpdatePollTimer = null;
}

function startSiteUpdatePolling() {
  if (document.visibilityState !== "visible" || state.siteUpdatePollTimer) return;
  state.siteUpdatePollTimer = window.setInterval(() => {
    if (document.visibilityState !== "visible") {
      stopSiteUpdatePolling();
      return;
    }
    checkSiteUpdate({ fromPoll: true, autoOpen: true });
  }, SITE_UPDATE_POLL_INTERVAL_MS);
}

function scheduleLocalSimulatedSiteUpdate() {
  if (!shouldSimulateSiteUpdate()) return;
  const delay = Math.max(5000, Math.min(Number(getWorkspaceParams().get("simulateUpdateDelay") || 8000), 30000));
  window.setTimeout(() => {
    if (!state.siteUpdateBaselineVersion) return;
    state.detectedSiteUpdate = createLocalSimulatedUpdateVersion();
    evaluateDetectedSiteUpdate({ autoOpen: true });
  }, delay);
}

function setupSiteUpdateWorkflow() {
  checkSiteUpdate().then(() => {
    scheduleLocalSimulatedSiteUpdate();
    startSiteUpdatePolling();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      checkSiteUpdate({ fromPoll: true, autoOpen: true }).then(startSiteUpdatePolling);
    } else {
      stopSiteUpdatePolling();
    }
  });
  window.addEventListener("online", () => {
    checkSiteUpdate({ fromPoll: true, autoOpen: true }).then(() => {
      evaluateDetectedSiteUpdate();
      startSiteUpdatePolling();
    });
  });
  window.addEventListener("offline", () => {
    setAppUpdateStatus();
    stopSiteUpdatePolling();
  });
  window.addEventListener("crewbidpro:update-seen", (event) => {
    const seenVersion = event.detail?.version || "";
    if (seenVersion && state.detectedSiteUpdate?.version === seenVersion) {
      state.detectedSiteUpdate = null;
    }
    setAppUpdateStatus();
  });
  window.addEventListener("crewbidpro:update-ready", () => {
    state.detectedSiteUpdate = state.latestSiteVersion || {
      version: "service-worker-update",
      title: "CrewBidPro update ready",
      changes: ["Refresh when ready to load the latest offline workspace."],
    };
    evaluateDetectedSiteUpdate({ autoOpen: true });
  });
}

function hasObservedWorkspaceOffline() {
  return state.workspaceOfflineObserved
    || safeStorage.get(WORKSPACE_OFFLINE_OBSERVED_STORAGE_KEY) === WORKSPACE_OFFLINE_OBSERVED_STORAGE_VALUE;
}

function markWorkspaceOfflineObserved() {
  state.workspaceOfflineObserved = true;
  state.workspaceConnectivityStatus = "offline";
  safeStorage.set(WORKSPACE_OFFLINE_OBSERVED_STORAGE_KEY, WORKSPACE_OFFLINE_OBSERVED_STORAGE_VALUE);
  setOfflinePackageStatus("Offline. Saved CrewBidPro data remains available on this device.", "neutral");
  renderCrewbidsMonitoringPanel();
}

function clearWorkspaceOfflineObserved() {
  state.workspaceOfflineObserved = false;
  safeStorage.remove(WORKSPACE_OFFLINE_OBSERVED_STORAGE_KEY);
  safeStorage.remove(WORKSPACE_OFFLINE_OBSERVED_LEGACY_STORAGE_KEY);
}

function discardLegacyWorkspaceOfflineObservation() {
  safeStorage.remove(WORKSPACE_OFFLINE_OBSERVED_LEGACY_STORAGE_KEY);
}

async function probeWorkspaceConnectivity() {
  if (state.workspaceConnectivityProbeInFlight) {
    return state.workspaceConnectivityStatus === "online";
  }
  if (navigator.onLine === false) {
    markWorkspaceOfflineObserved();
    return false;
  }
  state.workspaceConnectivityProbeInFlight = true;
  try {
    const response = await fetch(`/api/health?t=${Date.now()}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    const payload = await response.json();
    if (!response.ok || payload?.ok !== true) throw new Error("CrewBidPro server is unavailable");
    state.workspaceConnectivityStatus = "online";
    return true;
  } catch (error) {
    console.warn("Workspace connectivity probe failed:", error.message);
    if (!hasObservedWorkspaceOffline()) state.workspaceConnectivityStatus = "unknown";
    return false;
  } finally {
    state.workspaceConnectivityProbeInFlight = false;
  }
}

async function checkWorkspaceConnectivityAfterResume({ source = "" } = {}) {
  if (document.visibilityState === "hidden"
    || state.workspaceReconnectPromptInFlight
    || state.workspaceConnectivityProbeInFlight) return false;
  const wasOffline = hasObservedWorkspaceOffline();
  const isOnline = await probeWorkspaceConnectivity();
  if (!isOnline) return false;
  if (!wasOffline) {
    const shouldRefreshCrewbidsState = source === "page resume" || state.crewbidsCredential === null;
    if (shouldRefreshCrewbidsState && !state.crewbidsMonitorRefreshInFlight) {
      refreshCrewbidsMonitoringState()
        .catch((error) => console.warn("CrewBids access refresh after connectivity check failed:", error.message));
    }
    return true;
  }

  state.workspaceReconnectPromptInFlight = true;
  try {
    await confirmDestructiveAction({
      eyebrow: "Connection Restored",
      title: "Internet connection restored",
      message: "CrewBidPro is back online. Update this page with current server and database information.",
      confirmLabel: "Update Now",
      allowCancel: false,
    });
    clearWorkspaceOfflineObserved();
    setOfflinePackageStatus("Back online. Saving your workspace before updating...", "neutral");
    await saveWorkspaceRefreshSnapshot();
    window.location.reload();
    return true;
  } finally {
    state.workspaceReconnectPromptInFlight = false;
    if (source) console.info(`Workspace connectivity checked after ${source}.`);
  }
}

function setupWorkspaceConnectivityWorkflow() {
  if (state.workspaceConnectivityWorkflowInitialized) return;
  state.workspaceConnectivityWorkflowInitialized = true;
  discardLegacyWorkspaceOfflineObservation();
  if (navigator.onLine === false) markWorkspaceOfflineObserved();
  window.addEventListener("offline", markWorkspaceOfflineObserved);
  window.addEventListener("online", () => {
    checkWorkspaceConnectivityAfterResume({ source: "online event" });
  });
  window.addEventListener("pageshow", () => {
    checkWorkspaceConnectivityAfterResume({ source: "page resume" });
  });
  window.addEventListener("focus", () => {
    checkWorkspaceConnectivityAfterResume({ source: "window focus" });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      checkWorkspaceConnectivityAfterResume({ source: "app resume" });
    }
  });
  window.setTimeout(() => {
    checkWorkspaceConnectivityAfterResume({ source: "app open" });
  }, 1000);
}

function getCurrentBidSelectionIdentity(data = state.data) {
  const fleet = detectFleetType(data) || state.importSuccessfulFleet || "";
  if (!["747", "777"].includes(fleet) || !["saved", "vetted", "local"].includes(state.currentPackageSource)) return null;
  const packageInfo = state.currentPackageSource === "saved"
    ? state.currentSavedPackage
    : state.currentPackageSource === "vetted"
      ? state.availableGlobalPackage?.package
      : null;
  const metadata = data?.metadata || {};
  const bidMonth = packageInfo?.bidMonth || getPackageBidMonthFromData(data) || "";
  const planningPeriod = packageInfo?.planningPeriod || metadata.planningPeriod || "";
  const packageId = packageInfo?.id || "";
  const source = state.currentPackageSource;
  const packageKey = [
    source,
    fleet,
    bidMonth || planningPeriod || "current",
    packageId || "latest",
  ].join(":");
  return {
    key: packageKey,
    source,
    fleet,
    bidMonth,
    planningPeriod,
    packageId,
  };
}

function getPackageBidMonthFromData(data = state.data) {
  const start = String(data?.metadata?.start || "");
  const match = start.match(/^(\d{4})-(\d{2})-\d{2}$/);
  if (match) return `${match[1]}-${match[2]}`;
  return String(data?.metadata?.planningPeriod || "").trim();
}

function officialLineAwardsKey(identity = getCurrentBidSelectionIdentity()) {
  if (!identity?.fleet || !/^\d{4}-\d{2}$/.test(identity.bidMonth || "")) return "";
  return `${identity.fleet}:${identity.bidMonth}`;
}

function officialLineAwardsStorageKey(identity = getCurrentBidSelectionIdentity()) {
  const accountKey = getCurrentAccountEmail();
  const awardKey = officialLineAwardsKey(identity);
  return accountKey && awardKey
    ? `${OFFICIAL_LINE_AWARDS_STORAGE_KEY}.${accountKey}.${awardKey}`
    : "";
}

function normalizeOfficialLineAwards(payload = {}, expectedIdentity = getCurrentBidSelectionIdentity()) {
  const expectedKey = officialLineAwardsKey(expectedIdentity);
  const payloadKey = `${String(payload.fleet || "")}:${String(payload.bidMonth || "")}`;
  if (!expectedKey || payloadKey !== expectedKey || payload.available !== true) return null;
  const lines = Object.entries(payload.lines && typeof payload.lines === "object" ? payload.lines : {})
    .reduce((result, [line, seats]) => {
      const normalizedLine = normalizeCrewbidsLineName(line);
      if (!normalizedLine || !seats || typeof seats !== "object") return result;
      const normalizedSeats = {};
      ["CA", "FO"].forEach((seat) => {
        const names = Array.isArray(seats[seat])
          ? [...new Set(seats[seat].map((name) => String(name || "").trim()).filter(Boolean))]
          : [];
        if (names.length) normalizedSeats[seat] = names;
      });
      if (Object.keys(normalizedSeats).length) result[normalizedLine] = normalizedSeats;
      return result;
    }, {});
  return {
    key: expectedKey,
    available: true,
    lines,
  };
}

function loadCachedOfficialLineAwards(identity = getCurrentBidSelectionIdentity()) {
  const storageKey = officialLineAwardsStorageKey(identity);
  if (!storageKey) return null;
  try {
    return normalizeOfficialLineAwards(JSON.parse(safeStorage.get(storageKey) || "{}"), identity);
  } catch {
    return null;
  }
}

function saveCachedOfficialLineAwards(payload, identity = getCurrentBidSelectionIdentity()) {
  const storageKey = officialLineAwardsStorageKey(identity);
  if (!storageKey || payload?.available !== true) return false;
  return safeStorage.set(storageKey, JSON.stringify({
    available: true,
    fleet: identity.fleet,
    bidMonth: identity.bidMonth,
    lines: payload.lines || {},
    cachedAt: new Date().toISOString(),
  }));
}

function applyOfficialLineAwards(nextAwards, expectedKey) {
  if (officialLineAwardsKey() !== expectedKey) return false;
  const current = state.officialLineAwards;
  const changed = current.key !== nextAwards.key
    || current.available !== nextAwards.available
    || JSON.stringify(current.lines || {}) !== JSON.stringify(nextAwards.lines || {});
  state.officialLineAwards = nextAwards;
  if (changed && state.data) renderActiveTab();
  return changed;
}

async function refreshOfficialLineAwardsForCurrentPackage() {
  const identity = getCurrentBidSelectionIdentity();
  const key = officialLineAwardsKey(identity);
  if (!key) {
    state.officialLineAwards = { key: "", available: false, lines: {} };
    return;
  }

  const cached = loadCachedOfficialLineAwards(identity);
  applyOfficialLineAwards(cached || { key, available: false, lines: {} }, key);
  if (navigator.onLine === false || !shouldUseRemoteWorkspaceServices()) return;
  if (state.officialLineAwardsInFlightKey === key) return;

  state.officialLineAwardsInFlightKey = key;
  try {
    const payload = await crewbidsApiFetch(
      `/api/user/official-line-awards?fleet=${encodeURIComponent(identity.fleet)}&bidMonth=${encodeURIComponent(identity.bidMonth)}`,
    );
    if (officialLineAwardsKey() !== key) return;
    if (payload.available === true) {
      const normalized = normalizeOfficialLineAwards(payload, identity);
      if (!normalized) throw new Error("Official line awards did not match the active package.");
      saveCachedOfficialLineAwards(payload, identity);
      applyOfficialLineAwards(normalized, key);
    } else {
      safeStorage.remove(officialLineAwardsStorageKey(identity));
      applyOfficialLineAwards({ key, available: false, lines: {} }, key);
    }
  } finally {
    if (state.officialLineAwardsInFlightKey === key) state.officialLineAwardsInFlightKey = "";
  }
}

function scheduleOfficialLineAwardsRefresh() {
  refreshOfficialLineAwardsForCurrentPackage()
    .catch((error) => console.warn("Official line awards refresh skipped:", error.message));
}

function filterBidListForData(bidList, data = state.data) {
  const names = new Set([
    ...(data?.lines || []).map((line) => line.name),
    ...(data?.reserves || []).map((reserve) => reserve.name),
  ].filter(Boolean));
  return (Array.isArray(bidList) ? bidList : []).filter((lineName) => names.has(lineName));
}

function getBidSelectionDetailsForSync(bidList = filterBidListForData(state.bidList), data = state.data) {
  const selected = new Set(Array.isArray(bidList) ? bidList : []);
  const details = [];
  (data?.lines || []).forEach((line) => {
    if (!line?.name) return;
    details.push({
      line: line.name,
      crew: line.crewComplement || line.crew || "",
      type: "line",
      selected: selected.has(line.name),
    });
  });
  (data?.reserves || []).forEach((reserve) => {
    if (!reserve?.name) return;
    details.push({
      line: reserve.name,
      crew: reserve.crewComplement || reserve.crew || "",
      type: "reserve",
      selected: selected.has(reserve.name),
    });
  });
  return details;
}

function hasCompleteBidSelectionDetails(selection = {}, data = state.data) {
  const details = Array.isArray(selection?.bidDetails) ? selection.bidDetails : [];
  const expectedLines = (data?.lines || []).length + (data?.reserves || []).length;
  if (!expectedLines || details.length < expectedLines) return false;
  const detailLines = new Set(details.map((item) => String(item?.line || "").trim()).filter(Boolean));
  return [...(data?.lines || []), ...(data?.reserves || [])]
    .filter((item) => item?.name)
    .every((item) => detailLines.has(item.name));
}

function getCrewbidsPackageKey(value = {}) {
  return value.packageKey || value.package_key || "";
}

function getCrewbidsSubmissionPackageContext(submission = {}) {
  const context = submission?.packageContext && typeof submission.packageContext === "object"
    ? submission.packageContext
    : {};
  return {
    packageKey: submission.packageKey || context.packageKey || "",
    fleet: submission.fleet || context.fleet || "",
    bidMonth: submission.bidMonth || context.bidMonth || "",
    planningPeriod: submission.planningPeriod || context.planningPeriod || "",
    packageId: submission.packageId || context.packageId || "",
  };
}

function isCrewbidsSubmissionCurrentForIdentity(submission = {}, identity = getCurrentBidSelectionIdentity()) {
  if (!submission || !Object.keys(submission).length) return false;
  if (!identity?.key) return false;
  const context = getCrewbidsSubmissionPackageContext(submission);
  if (context.packageKey && context.packageKey !== identity.key) return false;
  if (context.fleet && identity.fleet && context.fleet !== identity.fleet) return false;
  if (context.bidMonth && identity.bidMonth && context.bidMonth !== identity.bidMonth) return false;
  if (context.planningPeriod && identity.planningPeriod && context.planningPeriod !== identity.planningPeriod) return false;
  if (context.packageId && identity.packageId && context.packageId !== identity.packageId) return false;
  return true;
}

function isCurrentCrewbidsBidAvoidCheck(check = {}, identity = getCurrentBidSelectionIdentity()) {
  return Boolean(
    check
    && typeof check === "object"
    && check.checkVersion === CREWBIDS_BID_AVOID_CHECK_VERSION
    && identity?.key
    && check.packageKey === identity.key
  );
}

function isCurrentCrewbidsBuddyBidCheck(check = {}, identity = getCurrentBidSelectionIdentity()) {
  return Boolean(
    check
    && typeof check === "object"
    && check.checkVersion === CREWBIDS_BID_AVOID_CHECK_VERSION
    && identity?.key
    && check.packageKey === identity.key
  );
}

function getCrewbidsOfflineStateSnapshot(identity = getCurrentBidSelectionIdentity()) {
  if (!identity?.key) return null;
  const monitor = getCurrentCrewbidsMonitor();
  const monitorId = monitor?.id || "";
  const alerts = (state.crewbidsAlerts || []).filter((alert) => !monitorId || alert.monitor_id === monitorId || alert.monitorId === monitorId);
  const winOddsCheck = getCurrentPackageWinOddsCheck();
  const bidAvoidCheck = isCurrentCrewbidsBidAvoidCheck(state.crewbidsBidAvoidCheck)
    ? state.crewbidsBidAvoidCheck
    : null;
  const buddyBidCheck = isCurrentCrewbidsBuddyBidCheck(state.crewbidsBuddyBidCheck)
    ? state.crewbidsBuddyBidCheck
    : null;
  const snapshot = {
    version: CREWBIDS_OFFLINE_STATE_VERSION,
    packageKey: identity.key,
    savedAt: new Date().toISOString(),
    monitors: monitor ? [monitor] : [],
    alerts,
    winOddsCheck: winOddsCheck?.packageKey === identity.key ? winOddsCheck : null,
    bidAvoidCheck,
    bidAvoidAutoCheckKey: bidAvoidCheck ? state.crewbidsBidAvoidAutoCheckKey || "" : "",
    bidAvoidRules: state.crewbidsBidAvoidRules || [],
    bidAvoidRequiresResolution: Boolean(state.crewbidsBidAvoidRequiresResolution),
    bidAvoidMigrationMessage: state.crewbidsBidAvoidMigrationMessage || "",
    buddyBidCheck,
    buddyBidAutoCheckKey: buddyBidCheck ? state.crewbidsBuddyBidAutoCheckKey || "" : "",
    buddyBidRules: state.crewbidsBuddyBidRules || [],
    siteStatus: state.crewbidsSiteStatus || null,
  };
  const hasSavedCrewbidsState = snapshot.monitors.length
    || snapshot.alerts.length
    || Boolean(snapshot.winOddsCheck)
    || Boolean(snapshot.bidAvoidCheck)
    || snapshot.bidAvoidRules.length
    || Boolean(snapshot.buddyBidCheck)
    || snapshot.buddyBidRules.length
    || Boolean(snapshot.siteStatus);
  return hasSavedCrewbidsState ? snapshot : null;
}

function restoreCrewbidsOfflineStateSnapshot(snapshot = {}, identity = getCurrentBidSelectionIdentity()) {
  if (!identity?.key || snapshot.packageKey !== identity.key) return false;
  const monitors = Array.isArray(snapshot.monitors) ? snapshot.monitors : [];
  const alerts = Array.isArray(snapshot.alerts) ? snapshot.alerts : [];
  if (monitors.length) {
    const snapshotKeys = new Set(monitors.map((monitor) => getCrewbidsPackageKey(monitor)).filter(Boolean));
    state.crewbidsMonitors = [
      ...monitors,
      ...(state.crewbidsMonitors || []).filter((monitor) => !snapshotKeys.has(getCrewbidsPackageKey(monitor))),
    ];
  }
  if (alerts.length) {
    const snapshotAlertKeys = new Set(alerts.map((alert) => alert.id || `${alert.monitor_id || alert.monitorId || ""}:${alert.alert_type || alert.alertType || ""}:${alert.created_at || alert.createdAt || ""}`));
    state.crewbidsAlerts = [
      ...alerts,
      ...(state.crewbidsAlerts || []).filter((alert) => !snapshotAlertKeys.has(alert.id || `${alert.monitor_id || alert.monitorId || ""}:${alert.alert_type || alert.alertType || ""}:${alert.created_at || alert.createdAt || ""}`)),
    ];
  }
  if (snapshot.winOddsCheck?.packageKey === identity.key) {
    state.crewbidsWinOddsCheck = snapshot.winOddsCheck;
  } else {
    hydrateCrewbidsWinOddsFromMonitor();
  }
  if (isCurrentCrewbidsBidAvoidCheck(snapshot.bidAvoidCheck)) {
    state.crewbidsBidAvoidCheck = snapshot.bidAvoidCheck;
    state.crewbidsBidAvoidAutoCheckKey = snapshot.bidAvoidAutoCheckKey || getCrewbidsBidAvoidCheckKey(identity);
  }
  if (Array.isArray(snapshot.bidAvoidRules)) state.crewbidsBidAvoidRules = snapshot.bidAvoidRules;
  if (typeof snapshot.bidAvoidRequiresResolution === "boolean") {
    state.crewbidsBidAvoidRequiresResolution = snapshot.bidAvoidRequiresResolution;
  }
  state.crewbidsBidAvoidMigrationMessage = snapshot.bidAvoidMigrationMessage || state.crewbidsBidAvoidMigrationMessage || "";
  if (isCurrentCrewbidsBuddyBidCheck(snapshot.buddyBidCheck)) {
    state.crewbidsBuddyBidCheck = snapshot.buddyBidCheck;
    state.crewbidsBuddyBidAutoCheckKey = snapshot.buddyBidAutoCheckKey || getCrewbidsBuddyBidCheckKey(identity);
  }
  if (Array.isArray(snapshot.buddyBidRules)) state.crewbidsBuddyBidRules = snapshot.buddyBidRules;
  if (snapshot.siteStatus) state.crewbidsSiteStatus = snapshot.siteStatus;
  return true;
}

async function saveLocalBidSelectionRecord({ pendingSync = true, data = state.data } = {}) {
  const identity = getCurrentBidSelectionIdentity();
  if (!identity) {
    saveLegacyBidList();
    return false;
  }
  const db = await openOfflineDb();
  if (!db) return false;
  const crewbidsOfflineState = getCrewbidsOfflineStateSnapshot(identity);
  const record = {
    key: identity.key,
    identity,
    bidList: filterBidListForData(state.bidList, data),
    crewbidsSubmission: state.crewbidsSubmission && Object.keys(state.crewbidsSubmission).length
      ? state.crewbidsSubmission
      : {},
    updatedAt: Date.now(),
    pendingSync,
  };
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_BID_SELECTION_STORE, "readwrite");
    const store = tx.objectStore(OFFLINE_BID_SELECTION_STORE);
    const request = store.get(identity.key);
    request.onsuccess = () => {
      const existing = request.result || {};
      store.put({
        ...record,
        crewbidsOfflineState: crewbidsOfflineState || existing.crewbidsOfflineState || null,
      });
    };
    request.onerror = () => {
      store.put({
        ...record,
        crewbidsOfflineState: crewbidsOfflineState || null,
      });
    };
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function loadLocalBidSelectionRecord(identity) {
  if (!identity?.key) return null;
  const db = await openOfflineDb();
  if (!db) return null;
  const record = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_BID_SELECTION_STORE, "readonly");
    const request = tx.objectStore(OFFLINE_BID_SELECTION_STORE).get(identity.key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => resolve(null);
  });
  db.close();
  return record;
}

async function saveCrewbidsOfflineStateForCurrentPackage() {
  const identity = getCurrentBidSelectionIdentity();
  const crewbidsOfflineState = getCrewbidsOfflineStateSnapshot(identity);
  if (!identity?.key || !crewbidsOfflineState) return false;
  const db = await openOfflineDb();
  if (!db) return false;
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_BID_SELECTION_STORE, "readwrite");
    const store = tx.objectStore(OFFLINE_BID_SELECTION_STORE);
    const request = store.get(identity.key);
    request.onsuccess = () => {
      const existing = request.result || {};
      store.put({
        key: identity.key,
        identity,
        bidList: Array.isArray(existing.bidList) ? existing.bidList : filterBidListForData(state.bidList),
        crewbidsSubmission: existing.crewbidsSubmission || {},
        pendingSync: Boolean(existing.pendingSync),
        updatedAt: existing.updatedAt || Date.now(),
        ...existing,
        crewbidsOfflineState,
      });
    };
    request.onerror = () => {
      store.put({
        key: identity.key,
        identity,
        bidList: filterBidListForData(state.bidList),
        crewbidsSubmission: state.crewbidsSubmission && Object.keys(state.crewbidsSubmission).length
          ? state.crewbidsSubmission
          : {},
        pendingSync: false,
        updatedAt: Date.now(),
        crewbidsOfflineState,
      });
    };
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function fetchRemoteBidSelection(identity) {
  if (!identity?.key || navigator.onLine === false) return null;
  const headers = await getSupabaseAuthHeaders();
  if (!hasWorkspaceAuthHeaders(headers)) return null;
  try {
    const response = await fetchWithWorkspaceTimeout(`/api/bid-selections?packageKey=${encodeURIComponent(identity.key)}`, {
      cache: "no-store",
      headers,
    });
    const payload = await response.json().catch(() => ({}));
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(payload.error || "Selection unavailable");
    return payload.selection || null;
  } catch (error) {
    console.warn("Bid selection restore skipped:", error.message);
    return null;
  }
}

async function pushRemoteBidSelection(identity = getCurrentBidSelectionIdentity(), bidList = filterBidListForData(state.bidList), options = {}) {
  if (!identity?.key || navigator.onLine === false) return false;
  const headers = await getSupabaseAuthHeaders();
  if (!hasWorkspaceAuthHeaders(headers)) {
    if (identity.source === "local") return false;
    throw new Error("No signed-in session available for selection sync");
  }
  const response = await fetch("/api/bid-selections", {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...identity,
      bidList,
      bidDetails: getBidSelectionDetailsForSync(bidList),
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || "Selection sync failed");
  if (options.updateCurrentLocal !== false) {
    await saveLocalBidSelectionRecord({ pendingSync: false });
  }
  queueMicrotask(() => {
    ensureCrewbidsMonitoringForSelection(identity, bidList)
      .catch((error) => console.warn("CrewBids automatic monitoring start failed:", error.message));
  });
  return true;
}

async function loadPendingBidSelectionRecords() {
  const db = await openOfflineDb();
  if (!db) return [];
  const records = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_BID_SELECTION_STORE, "readonly");
    const request = tx.objectStore(OFFLINE_BID_SELECTION_STORE).getAll();
    request.onsuccess = () => resolve(Array.isArray(request.result) ? request.result : []);
    request.onerror = () => resolve([]);
  });
  db.close();
  return records.filter((record) => record?.pendingSync && record?.identity?.key);
}

async function markBidSelectionRecordSynced(record) {
  const db = await openOfflineDb();
  if (!db || !record?.key) return false;
  const ok = await new Promise((resolve) => {
    const tx = db.transaction(OFFLINE_BID_SELECTION_STORE, "readwrite");
    tx.objectStore(OFFLINE_BID_SELECTION_STORE).put({
      ...record,
      pendingSync: false,
      syncedAt: Date.now(),
    });
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
  db.close();
  return ok;
}

async function syncPendingBidSelections() {
  if (navigator.onLine === false) return;
  const pendingRecords = await loadPendingBidSelectionRecords();
  if (!pendingRecords.length) return;
  for (const record of pendingRecords) {
    try {
      await pushRemoteBidSelection(record.identity, Array.isArray(record.bidList) ? record.bidList : [], { updateCurrentLocal: false });
      await markBidSelectionRecordSynced(record);
    } catch (error) {
      console.warn("Pending bid selection sync failed:", error.message);
      return;
    }
  }
}

async function restoreBidSelectionForCurrentPackage(data = state.data) {
  try {
    if (data && data !== state.data) prepareData(data);
    const identity = getCurrentBidSelectionIdentity(data);
    state.currentBidSelectionKey = identity?.key || "";
    if (!identity) {
      state.crewbidsSubmission = {};
      state.crewbidsCurrentServerBid = null;
      loadBidList();
      setSelectionSyncStatus("Selections save on this device.", "pending");
      return true;
    }
    const [localRecord, remoteSelection] = await Promise.all([
      loadLocalBidSelectionRecord(identity),
      fetchRemoteBidSelection(identity),
    ]);
    const remoteUpdatedAt = Date.parse(remoteSelection?.updatedAt || "") || 0;
    const localUpdatedAt = Number(localRecord?.updatedAt || 0);
    const hasLocalRecord = Boolean(localRecord);
    const shouldPreferLocalRecord = Boolean(localRecord?.pendingSync)
      || (hasLocalRecord && localUpdatedAt >= remoteUpdatedAt);
    const selected = !shouldPreferLocalRecord && remoteUpdatedAt > localUpdatedAt
      ? remoteSelection?.bidList
      : localRecord?.bidList || [];
    const remoteCrewbidsSubmission = remoteSelection?.crewbidsSubmission || {};
    const localCrewbidsSubmission = localRecord?.crewbidsSubmission || {};
    const currentRemoteCrewbidsSubmission = isCrewbidsSubmissionCurrentForIdentity(remoteCrewbidsSubmission, identity)
      ? remoteCrewbidsSubmission
      : {};
    const currentLocalCrewbidsSubmission = isCrewbidsSubmissionCurrentForIdentity(localCrewbidsSubmission, identity)
      ? localCrewbidsSubmission
      : {};
    const restoredCrewbidsSubmission = Object.keys(currentRemoteCrewbidsSubmission).length
      ? currentRemoteCrewbidsSubmission
      : Object.keys(currentLocalCrewbidsSubmission).length
        ? currentLocalCrewbidsSubmission
        : {};
    if (Object.keys(remoteCrewbidsSubmission).length && !Object.keys(currentRemoteCrewbidsSubmission).length) {
      console.warn("Ignored stale CrewBids submission state for a different package.");
    }
    if (Object.keys(localCrewbidsSubmission).length && !Object.keys(currentLocalCrewbidsSubmission).length) {
      console.warn("Ignored stale local CrewBids submission state for a different package.");
    }
    state.bidList = filterBidListForData(selected || [], data);
    restoreCrewbidsOfflineStateSnapshot(localRecord?.crewbidsOfflineState || {}, identity);
    if (remoteSelection && !shouldPreferLocalRecord) {
      restoreCrewbidsSubmissionState(restoredCrewbidsSubmission, identity);
      scheduleCrewbidsSubmissionVerificationRerender();
      await saveLocalBidSelectionRecord({ pendingSync: false, data });
      setSelectionSyncStatus(state.bidList.length ? "Selections restored from CrewBidPro." : "No saved selections for this package.", "saved");
      if (state.bidList.length && !hasCompleteBidSelectionDetails(remoteSelection, data)) {
        scheduleBidSelectionSync();
      }
    } else if (localRecord) {
      restoreCrewbidsSubmissionState(restoredCrewbidsSubmission, identity);
      scheduleCrewbidsSubmissionVerificationRerender();
      setSelectionSyncStatus(
        localRecord.pendingSync ? "Offline selections saved on this device. Sync pending." : "Selections restored on this device.",
        localRecord.pendingSync ? "pending" : "saved",
      );
      if (localRecord.pendingSync) scheduleBidSelectionSync();
    } else {
      state.crewbidsSubmission = {};
      state.crewbidsCurrentServerBid = null;
      if (state.bidList.length) {
        await saveLocalBidSelectionRecord({ pendingSync: true, data });
        scheduleBidSelectionSync();
        setSelectionSyncStatus("Selections saved for this package. Sync pending.", "pending");
      } else {
        setSelectionSyncStatus("No saved selections for this package.", "saved");
      }
    }
    saveLegacyBidList();
    if (state.bidList.length && navigator.onLine !== false) {
        // .catch((error) => console.warn("CrewBids monitoring refresh after bid selection restore failed:", error.message));
    }
    return true;
  } catch (error) {
    console.warn("Saved bid selections could not be restored; opening the bid package without them:", error.message);
    state.bidList = [];
    state.crewbidsSubmission = {};
    state.crewbidsCurrentServerBid = null;
    loadBidList();
    setSelectionSyncStatus("Bid package ready. Saved selections could not be restored.", "pending");
    return false;
  }
}

function scheduleBidSelectionSync() {
  if (state.bidSelectionSyncTimer) window.clearTimeout(state.bidSelectionSyncTimer);
  state.bidSelectionSyncTimer = window.setTimeout(syncCurrentBidSelection, 900);
}

async function syncCurrentBidSelection() {
  if (state.bidSelectionSyncTimer) {
    window.clearTimeout(state.bidSelectionSyncTimer);
    state.bidSelectionSyncTimer = null;
  }
  if (state.bidSelectionSyncInFlight) return;
  const identity = getCurrentBidSelectionIdentity();
  if (!identity) return;
  if (navigator.onLine === false) {
    setSelectionSyncStatus("Offline - selections saved on this device. Sync pending.", "pending");
    return;
  }
  state.bidSelectionSyncInFlight = true;
  setSelectionSyncStatus("Saving selections...", "saving");
  try {
    const synced = await pushRemoteBidSelection(identity);
    if (!synced && identity.source === "local") {
      await saveLocalBidSelectionRecord({ pendingSync: false });
    }
    await syncPendingBidSelections();
    setSelectionSyncStatus(
      synced ? "Selections saved to CrewBidPro." : "Selections saved on this device.",
      "saved",
    );
  } catch (error) {
    console.warn("Bid selection sync failed:", error.message);
    await saveLocalBidSelectionRecord({ pendingSync: true });
    setSelectionSyncStatus("Selections saved on this device. Sync will retry.", "pending");
  } finally {
    state.bidSelectionSyncInFlight = false;
    evaluateDetectedSiteUpdate();
  }
}

async function saveWorkspaceRefreshSnapshot() {
  saveWorkspaceScrollPosition();
  saveWorkspaceNavigationState();
  saveWorkspaceAccordionState(loadWorkspaceAccordionState());
  savePreferences();
  saveLegacyBidList();
  try {
    await saveLocalBidSelectionRecord({ pendingSync: true });
  } catch (error) {
    console.warn("Refresh snapshot selection save failed:", error.message);
  }
  try {
    await syncCurrentBidSelection();
  } catch (error) {
    console.warn("Refresh snapshot remote sync skipped:", error.message);
  }
  return true;
}

window.CrewBidProWorkspace = {
  ...(window.CrewBidProWorkspace || {}),
  saveRefreshSnapshot: saveWorkspaceRefreshSnapshot,
};

function getCurrentAccessTier() {
  if (shouldUseRemoteWorkspaceServices()) {
    const cachedAccess = state.subscriptionAccess || loadCachedSubscriptionAccess(state.preferences.workEmail || getCurrentAccountEmail());
    const accessState = cachedAccess?.accessState || "";
    return ["paid_active", "admin_override"].includes(accessState) ? "paid" : "free";
  }
  const storedTier = (safeStorage.get(ACCESS_TIER_STORAGE_KEY) || "").trim().toLowerCase();
  return ["free", "paid"].includes(storedTier) ? storedTier : DEVELOPMENT_DEFAULT_ACCESS_TIER;
}

const getSubscriptionStatusCopy = () => {
  const tier = getCurrentAccessTier();
  const remoteServices = shouldUseRemoteWorkspaceServices();
  if (tier === "free") {
    return {
      badge: "Free Limited",
      title: "Limited access",
      body: "Your verified work email keeps the app available in Free Limited mode. Upgrade only when you want Full Access after the no-card trial expires.",
      tone: "free",
      primaryAction: "Start Full Access",
      secondaryAction: "Compare Plans",
    };
  }
  return {
    badge: "Full Access",
    title: remoteServices ? "Full access" : "Full access preview",
    body: remoteServices
      ? "Your CrewBidPro Full Access is active."
      : "This local build is currently showing the full-access experience.",
    tone: "paid",
    primaryAction: "Manage Billing",
    secondaryAction: "View Plans",
  };
};

function canUseFeature(feature) {
  const allowedTiers = FEATURE_ACCESS[feature];
  if (!allowedTiers) return true;
  return allowedTiers.includes(getCurrentAccessTier());
}

const getFeatureLockMessage = (feature) => ({
  advancedLineFilters: "Line optimization filters are locked to Full Access.",
  advancedTripFilters: "Trip optimization filters are locked to Full Access.",
  reserveFilters: "Reserve filters are locked to Full Access.",
  trainingFilters: "Training filters are locked to Full Access.",
  avoidCalendar: "Days to Avoid is locked to Full Access.",
  cityAvoid: "Airport Avoid is locked to Full Access.",
  profileDefaults: "Saved profile defaults are locked to Full Access.",
  profileRestrictions: "Saved preference filters are locked to Full Access.",
  customThresholds: "Custom thresholds are locked to Full Access.",
  lineResultInsights: "Line insight details are locked to Full Access.",
  tripResultInsights: "Trip insight details are locked to Full Access.",
  reserveResultInsights: "Reserve remarks are locked to Full Access.",
  trainingResultInsights: "Training patterns are locked to Full Access.",
}[feature] || "This feature is locked to Full Access.");

const renderFeatureLockPopup = (feature) => `
  <div class="feature-lock-popup">
    <strong>Full Access</strong>
    <span>${escapeHtml(getFeatureLockMessage(feature))}</span>
  </div>
`;

function updateDevTierToggle() {
  const button = $("devTierToggle");
  if (!button) return;
  const isFreeTier = getCurrentAccessTier() === "free";
  button.classList.toggle("is-free-tier", isFreeTier);
  button.textContent = isFreeTier ? "Full Access View" : "Free Tier View";
  button.setAttribute("aria-pressed", String(isFreeTier));
}

function setupDevTierToggle() {
  const button = $("devTierToggle");
  if (!button) return;
  updateDevTierToggle();
  button.addEventListener("click", () => {
    const nextTier = getCurrentAccessTier() === "free" ? "paid" : "free";
    safeStorage.set(ACCESS_TIER_STORAGE_KEY, nextTier);
    updateDevTierToggle();
    renderActiveTab();
    if (state.activeTab === "preferences") renderSubscriptionPanel();
  });
}

function resetLockedAccessControl(control) {
  if (control.matches("button, [type='file'], [type='hidden']")) return;
  if (control.type === "checkbox" || control.type === "radio") {
    control.checked = control.defaultChecked;
    return;
  }
  if (control.tagName === "SELECT") {
    const defaultOption = [...control.options].find((option) => option.defaultSelected) || control.options[0];
    if (defaultOption) control.value = defaultOption.value;
    return;
  }
  control.value = control.defaultValue || "";
}

function applyAccessLocks(root = document) {
  root.querySelectorAll("[data-feature]").forEach((element) => {
    const feature = element.dataset.feature;
    const isLocked = !canUseFeature(feature);
    element.classList.toggle("is-feature-locked", isLocked);
    element.setAttribute("aria-disabled", String(isLocked));
    element.dataset.lockMessage = isLocked ? getFeatureLockMessage(feature) : "";
    if (isLocked && !element.hasAttribute("tabindex")) element.setAttribute("tabindex", "0");
    if (!isLocked && element.dataset.lockTabindex === "added") {
      element.removeAttribute("tabindex");
      delete element.dataset.lockTabindex;
    }
    if (isLocked && element.getAttribute("tabindex") === "0") element.dataset.lockTabindex ||= "added";

    const controls = [
      ...(element.matches("input, select, textarea, button") ? [element] : []),
      ...element.querySelectorAll("input, select, textarea, button"),
    ];
    controls.forEach((control) => {
      if (control.classList.contains("accordion-toggle")) return;
      if (isLocked) resetLockedAccessControl(control);
      control.disabled = isLocked;
      control.setAttribute("aria-disabled", String(isLocked));
    });

    if (!element.matches("input, select, textarea")) {
      const existingLabel = element.querySelector(":scope > .feature-lock-label");
      if (isLocked && !existingLabel) {
        const label = document.createElement("span");
        label.className = "feature-lock-label";
        label.textContent = "Full access";
        label.dataset.lockMessage = getFeatureLockMessage(feature);
        element.append(label);
      } else if (!isLocked && existingLabel) {
        existingLabel.remove();
      }
    }
  });
  enableSupportTopbarButtons();
}

function syncSortOptionsForAccess(root = document) {
  const isFreeTier = getCurrentAccessTier() === "free";
  root.querySelectorAll("select").forEach((select) => {
    const paidOptions = [...select.querySelectorAll("option[data-paid-sort]")];
    if (!paidOptions.length) return;

    paidOptions.forEach((option) => {
      option.hidden = isFreeTier;
      option.disabled = isFreeTier;
    });

    if (isFreeTier && select.selectedOptions[0]?.dataset.paidSort !== undefined) {
      const fallback = [...select.options].find((option) => !option.disabled && !option.hidden);
      if (fallback) select.value = fallback.value;
    }
  });
}

const shouldUsePreferenceRestrictions = () => canUseFeature("profileRestrictions");
const shouldUseAvoidCalendar = () => canUseFeature("avoidCalendar");
const shouldUseCityAvoid = () => canUseFeature("cityAvoid");
const canUseLineResultInsights = () => canUseFeature("lineResultInsights");
const canUseTripResultInsights = () => canUseFeature("tripResultInsights");
const canUseReserveResultInsights = () => canUseFeature("reserveResultInsights");
const canUseTrainingResultInsights = () => canUseFeature("trainingResultInsights");

const parseTimeInputToMinutes = (value) => {
  const match = String(value || "").match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours > 23 || minutes > 59) return null;
  return (hours * 60) + minutes;
};

const formatMinutesAsTimeInput = (minutes) => {
  const normalized = clamp(minutes, 0, (23 * 60) + 59);
  const hours = Math.floor(normalized / 60);
  const remainder = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
};

const getLongStayThresholdMinutes = () => {
  if (!canUseFeature("customThresholds")) return DEFAULT_LONG_STAY_THRESHOLD_HOURS * 60;
  const hours = Number(state.preferences.longStayThresholdHours);
  return clamp(Number.isFinite(hours) ? hours : DEFAULT_LONG_STAY_THRESHOLD_HOURS, 1, 96) * 60;
};

const getBreakfastCutoffMinutes = () => {
  if (!canUseFeature("customThresholds")) return parseTimeInputToMinutes(DEFAULT_BREAKFAST_START_TIME);
  return parseTimeInputToMinutes(state.preferences.breakfastStartTime) ?? parseTimeInputToMinutes(DEFAULT_BREAKFAST_START_TIME);
};

const getBreakfastWindowStartMinutes = () => parseTimeInputToMinutes(DEFAULT_BREAKFAST_WINDOW_START_TIME);

const loadBidList = () => {
  try {
    const persisted = safeStorage.get(BID_LIST_STORAGE_KEY) || getCookie(BID_LIST_COOKIE_KEY) || "[]";
    const parsed = JSON.parse(persisted);
    state.bidList = Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    state.bidList = [];
  }
};

const saveLegacyBidList = () => {
  const serialized = JSON.stringify(state.bidList);
  safeStorage.set(BID_LIST_STORAGE_KEY, serialized);
  setCookie(BID_LIST_COOKIE_KEY, serialized);
};

const saveBidList = () => {
  if (shouldPreviewUi012Availability()) return;
  saveLegacyBidList();
  saveLocalBidSelectionRecord({ pendingSync: true }).catch((error) => {
    console.warn("Local bid selection save failed:", error.message);
  });
  scheduleBidSelectionSync();
};

const defaultPreferences = () => ({
  displayName: "",
  personalEmail: "",
  personalEmailVerifiedAt: "",
  pendingPersonalEmail: "",
  pendingPersonalEmailExpiresAt: "",
  outbidNotifications: false,
  newlyAvailableNotifications: false,
  systemNotifications: false,
  workEmail: "",
  phoneNumber: "",
  phoneNumberVerifiedAt: "",
  employeeNumber: "",
  seniorityNumber: "",
  seniorityListDate: "",
  seniorityRosterSize: 0,
  rosterAircraftType: "",
  rosterSeatClass: "",
  aircraftType: "",
  seatClass: "",
  assignmentSource: "",
  assignmentUpdatedAt: "",
  identityConfirmedAt: "",
  identitySource: "",
  peerGroupPosition: 0,
  peerGroupSize: 0,
  bidStrengthPercent: 0,
  avatarDataUrl: "",
  avatarPositionX: 50,
  avatarPositionY: 50,
  longStayThresholdHours: DEFAULT_LONG_STAY_THRESHOLD_HOURS,
  breakfastStartTime: DEFAULT_BREAKFAST_START_TIME,
  defaultTab: "lines",
  theme: "light",
  pilotType: "any",
  avoidRegions: new Set(),
  avoidCountries: new Set(),
  avoidAirports: new Set(),
  specialRestrictions: new Set(),
});

const loadPreferences = () => {
  try {
    const persisted = safeStorage.get(PREFERENCES_STORAGE_KEY) || getCookie(PREFERENCES_COOKIE_KEY) || "{}";
    const parsed = JSON.parse(persisted);
    state.preferences = {
      ...defaultPreferences(),
      ...parsed,
      personalEmail: parsed.personalEmail || "",
      personalEmailVerifiedAt: parsed.personalEmailVerifiedAt || "",
      pendingPersonalEmail: parsed.pendingPersonalEmail || "",
      pendingPersonalEmailExpiresAt: parsed.pendingPersonalEmailExpiresAt || "",
      outbidNotifications: parsed.outbidNotifications === true,
      systemNotifications: parsed.systemNotifications === true,
      workEmail: parsed.workEmail || "",
      phoneNumber: parsed.phoneNumber || "",
      phoneNumberVerifiedAt: parsed.phoneNumberVerifiedAt || "",
      employeeNumber: parsed.employeeNumber || "",
      seniorityNumber: parsed.seniorityNumber || "",
      seniorityListDate: parsed.seniorityListDate || "",
      seniorityRosterSize: Number(parsed.seniorityRosterSize || 0),
      rosterAircraftType: parsed.rosterAircraftType || "",
      rosterSeatClass: parsed.rosterSeatClass || "",
      aircraftType: parsed.aircraftType || "",
      seatClass: parsed.seatClass || "",
      assignmentSource: parsed.assignmentSource || "",
      assignmentUpdatedAt: parsed.assignmentUpdatedAt || "",
      identityConfirmedAt: parsed.identityConfirmedAt || "",
      identitySource: parsed.identitySource || "",
      peerGroupPosition: Number(parsed.peerGroupPosition || 0),
      peerGroupSize: Number(parsed.peerGroupSize || 0),
      bidStrengthPercent: Number(parsed.bidStrengthPercent || 0),
      avatarPositionX: Number.isFinite(Number(parsed.avatarPositionX)) ? Number(parsed.avatarPositionX) : 50,
      avatarPositionY: Number.isFinite(Number(parsed.avatarPositionY)) ? Number(parsed.avatarPositionY) : 50,
      longStayThresholdHours: Number.isFinite(Number(parsed.longStayThresholdHours))
        ? clamp(Number(parsed.longStayThresholdHours), 1, 96)
        : DEFAULT_LONG_STAY_THRESHOLD_HOURS,
      breakfastStartTime: parseTimeInputToMinutes(parsed.breakfastStartTime) !== null ? parsed.breakfastStartTime : DEFAULT_BREAKFAST_START_TIME,
      defaultTab: parsed.defaultTab === "preferences" ? "lines" : parsed.defaultTab || "lines",
      theme: parsed.theme || "light",
      pilotType: parsed.pilotType || "any",
      avoidRegions: new Set(Array.isArray(parsed.avoidRegions) ? parsed.avoidRegions : []),
      avoidCountries: new Set(Array.isArray(parsed.avoidCountries) ? parsed.avoidCountries : []),
      avoidAirports: new Set(Array.isArray(parsed.avoidAirports) ? parsed.avoidAirports : []),
      specialRestrictions: new Set(Array.isArray(parsed.specialRestrictions) ? parsed.specialRestrictions : []),
    };
  } catch {
    state.preferences = defaultPreferences();
  }
  applyAccountIdentityToPreferences();
  setConfirmedProfileAssignment(getProfileAircraftType(), state.preferences.seatClass);
};

const savePreferences = () => {
  const serialized = JSON.stringify({
    ...state.preferences,
    avoidRegions: [...state.preferences.avoidRegions],
    avoidCountries: [...state.preferences.avoidCountries],
    avoidAirports: [...state.preferences.avoidAirports],
    specialRestrictions: [...state.preferences.specialRestrictions],
  });
  safeStorage.set(PREFERENCES_STORAGE_KEY, serialized);
  setCookie(PREFERENCES_COOKIE_KEY, serialized);
};

const getBidRank = (lineName) => {
  const index = state.bidList.indexOf(lineName);
  return index >= 0 ? index + 1 : null;
};

const isBidLineSelected = (lineName) => state.bidList.includes(lineName);

const retainSelectedBidRows = (rows, allScopeRows) => {
  const includedNames = new Set(rows.map((row) => row.name));
  return [
    ...allScopeRows.filter((row) => isBidLineSelected(row.name) && !includedNames.has(row.name)),
    ...rows,
  ];
};

const pinSelectedBidRows = (rows) => {
  const bidRankByName = new Map(state.bidList.map((lineName, index) => [lineName, index]));
  return [...rows].sort((a, b) => {
    const aRank = bidRankByName.get(a.name);
    const bRank = bidRankByName.get(b.name);
    const aSelected = aRank !== undefined;
    const bSelected = bRank !== undefined;
    if (aSelected && bSelected) return aRank - bRank;
    if (aSelected) return -1;
    if (bSelected) return 1;
    return 0;
  });
};

const BID_RESULT_SECTION_DEFINITIONS = Object.freeze([
  Object.freeze({ key: "selected", label: "User Selected" }),
  Object.freeze({ key: "available", label: "Available" }),
  Object.freeze({ key: "unavailable", label: "Currently Unavailable" }),
]);

const getBidResultSections = (rows, isAvailable = isLineCurrentlyAvailable) => {
  const selectedNames = new Set(state.bidList);
  const rowsBySection = new Map(BID_RESULT_SECTION_DEFINITIONS.map(({ key }) => [key, []]));
  rows.forEach((row) => {
    const sectionKey = selectedNames.has(row.name)
      ? "selected"
      : isAvailable(row.name)
        ? "available"
        : "unavailable";
    rowsBySection.get(sectionKey).push(row);
  });
  return BID_RESULT_SECTION_DEFINITIONS.map((definition) => ({
    ...definition,
    rows: rowsBySection.get(definition.key),
  }));
};

const isBidResultSectionExpanded = (scope, sectionKey) => !state.collapsedBidResultSections[scope]?.has(sectionKey);

const renderBidResultSectionHeader = (scope, section, columnCount) => {
  const expanded = isBidResultSectionExpanded(scope, section.key);
  const countLabel = `${section.rows.length} line${section.rows.length === 1 ? "" : "s"}`;
  return `
    <tr id="${scope}-results-${section.key}" class="bid-result-section-header-row is-${section.key}" data-bid-result-section="${section.key}">
      <th colspan="${columnCount}" scope="rowgroup">
        <button
          type="button"
          class="bid-result-section-toggle"
          data-bid-result-section-toggle="${scope}"
          data-section-key="${section.key}"
          aria-expanded="${expanded}"
          aria-label="${expanded ? "Collapse" : "Expand"} ${escapeHtml(section.label)}, ${countLabel}"
        >
          <span class="bid-result-section-title">${escapeHtml(section.label)}</span>
          <span class="bid-result-section-meta">
            <strong>${countLabel}</strong>
            <span>${expanded ? "Collapse" : "Expand"}</span>
            <span class="bid-result-section-chevron" aria-hidden="true"></span>
          </span>
        </button>
      </th>
    </tr>
  `;
};

const renderBidResultSections = (scope, sections, columnCount, renderRows) => sections
  .filter((section) => section.rows.length)
  .map((section) => `${renderBidResultSectionHeader(scope, section, columnCount)}${
    isBidResultSectionExpanded(scope, section.key) ? renderRows(section.rows, section.key) : ""
  }`)
  .join("");

function setupBidResultSectionControls() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest?.("[data-bid-result-section-toggle]");
    if (!button) return;
    const scope = button.dataset.bidResultSectionToggle;
    const sectionKey = button.dataset.sectionKey;
    const collapsedSections = state.collapsedBidResultSections[scope];
    if (!collapsedSections || !BID_RESULT_SECTION_DEFINITIONS.some((section) => section.key === sectionKey)) return;
    if (collapsedSections.has(sectionKey)) {
      collapsedSections.delete(sectionKey);
    } else {
      collapsedSections.add(sectionKey);
    }
    renderActiveTab();
  });
}

const BID_PANEL_NAVIGATION_TARGETS = Object.freeze(["filters", "selected", "available", "unavailable"]);
const BID_PANEL_NAVIGATION_SCOPES = new Set(["lines", "reserves", "training"]);

const getLinePanelTabsOffset = () => {
  const tabs = document.querySelector(".tabs");
  if (!tabs || window.getComputedStyle(tabs).position !== "sticky") return 0;
  const rect = tabs.getBoundingClientRect();
  return rect.top >= -1 && rect.bottom > 0 ? Math.ceil(rect.height) : 0;
};

const getLinePanelNavigationTarget = (target, scope = state.activeTab) => {
  if (!BID_PANEL_NAVIGATION_SCOPES.has(scope)) return null;
  if (target === "filters") return getWorkspaceFilters(scope);
  if (!BID_PANEL_NAVIGATION_TARGETS.includes(target)) return null;
  if (scope === "lines" && state.linesViewMode === "calendar") {
    return document.getElementById(`lines-calendar-results-${target}`);
  }
  return document.getElementById(`${scope}-results-${target}`);
};

const getLinePanelTableHeaderOffset = (scope = state.activeTab) => {
  if (scope === "lines" && state.linesViewMode === "calendar") {
    const calendarHeader = document.querySelector("#lineCalendarView .line-calendar-axis");
    if (calendarHeader && window.getComputedStyle(calendarHeader).display !== "none") {
      return Math.ceil(calendarHeader.getBoundingClientRect().height || 0);
    }
  }
  const panelId = scope === "reserves" ? "reservesPanel" : scope === "training" ? "trainingPanel" : "linesPanel";
  const tableHeader = document.querySelector(`#${panelId} .table-wrap thead`);
  if (!tableHeader || window.getComputedStyle(tableHeader).display === "none") return 0;
  return Math.ceil(tableHeader.getBoundingClientRect().height || 0);
};

const scrollElementBelowLinePanelNavigation = (element, behavior = "smooth", scope = state.activeTab) => {
  if (!element) return;
  const calendarScroller = element.closest?.(".line-calendar-scroller");
  if (calendarScroller) {
    const scrollerRect = calendarScroller.getBoundingClientRect();
    const axisHeight = getLinePanelTableHeaderOffset(scope);
    const targetTop = calendarScroller.scrollTop
      + element.getBoundingClientRect().top
      - scrollerRect.top
      - axisHeight;
    calendarScroller.scrollTo({
      left: calendarScroller.scrollLeft,
      top: Math.max(0, targetTop),
      behavior,
    });
    const calendarView = $("lineCalendarView");
    const pageY = calendarView.getBoundingClientRect().top + window.scrollY - getLinePanelTabsOffset();
    window.scrollTo({ top: Math.max(0, pageY), behavior });
    return;
  }
  const tableHeaderOffset = element === getWorkspaceFilters(scope) ? 0 : getLinePanelTableHeaderOffset(scope);
  const y = element.getBoundingClientRect().top + window.scrollY - getLinePanelTabsOffset() - tableHeaderOffset;
  window.scrollTo({ top: Math.max(0, y), behavior });
};

function setLinePanelNavigationOpen(open, { returnFocus = false, scope = state.activeTab } = {}) {
  const navigation = document.querySelector(`[data-bid-panel-navigation="${scope}"]`);
  const toggle = navigation?.querySelector("[data-bid-panel-navigation-toggle]");
  const menu = navigation?.querySelector(".lines-panel-navigation-menu");
  const backdrop = navigation?.querySelector(".lines-panel-navigation-backdrop");
  if (!navigation || !toggle || !menu || !backdrop) return;
  const label = navigation.dataset.navigationLabel || "Bid results";
  const nextOpen = Boolean(open && state.activeTab === scope);
  navigation.classList.toggle("is-open", nextOpen);
  toggle.setAttribute("aria-expanded", String(nextOpen));
  toggle.setAttribute("aria-label", `${nextOpen ? "Close" : "Open"} ${label} section navigation`);
  menu.hidden = !nextOpen;
  backdrop.hidden = !nextOpen;
  if (!nextOpen && returnFocus) toggle.focus({ preventScroll: true });
}

function setActiveLinePanelNavigationTarget(target = "", scope = state.activeTab) {
  const navigation = document.querySelector(`[data-bid-panel-navigation="${scope}"]`);
  if (!navigation) return;
  navigation.querySelectorAll("[data-lines-navigation-target]").forEach((button) => {
    const isCurrent = button.dataset.linesNavigationTarget === target && !button.disabled;
    button.classList.toggle("is-active", isCurrent);
    if (isCurrent) {
      button.setAttribute("aria-current", "location");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  const toggle = navigation.querySelector("[data-bid-panel-navigation-toggle]");
  if (toggle) {
    const label = navigation.dataset.navigationLabel || "Bid results";
    const currentLabel = target ? ` Current section: ${target}.` : "";
    const action = toggle.getAttribute("aria-expanded") === "true" ? "Close" : "Open";
    toggle.setAttribute("aria-label", `${action} ${label} section navigation.${currentLabel}`);
  }
}

function syncLinePanelNavigation() {
  document.querySelectorAll("[data-bid-panel-navigation]").forEach((navigation) => {
    const scope = navigation.dataset.bidPanelNavigation;
    navigation.querySelectorAll("[data-lines-navigation-target]").forEach((button) => {
      const target = button.dataset.linesNavigationTarget;
      const targetElement = getLinePanelNavigationTarget(target, scope);
      const available = Boolean(targetElement);
      button.disabled = !available;
      button.title = available ? `Jump to ${button.textContent.trim()}` : `No ${button.textContent.trim().toLowerCase()} lines are currently shown`;
    });
  });
}

let linePanelNavigationFrame = 0;

function updateLinePanelNavigationHighlight() {
  linePanelNavigationFrame = 0;
  if (!BID_PANEL_NAVIGATION_SCOPES.has(state.activeTab)) {
    BID_PANEL_NAVIGATION_SCOPES.forEach((scope) => setActiveLinePanelNavigationTarget("", scope));
    return;
  }
  const scope = state.activeTab;
  const threshold = getLinePanelTabsOffset() + getLinePanelTableHeaderOffset(scope) + 18;
  const activeTarget = BID_PANEL_NAVIGATION_TARGETS.reduce((current, target) => {
    const element = getLinePanelNavigationTarget(target, scope);
    return element && element.getBoundingClientRect().top <= threshold ? target : current;
  }, "");
  setActiveLinePanelNavigationTarget(activeTarget || "filters", scope);
}

function scheduleLinePanelNavigationHighlight() {
  if (linePanelNavigationFrame) return;
  linePanelNavigationFrame = requestAnimationFrame(updateLinePanelNavigationHighlight);
}

function setupLinePanelNavigation() {
  const navigations = [...document.querySelectorAll("[data-bid-panel-navigation]")];
  if (!navigations.length) return;
  navigations.forEach((navigation) => {
    const scope = navigation.dataset.bidPanelNavigation;
    navigation.addEventListener("click", (event) => {
      if (event.target.closest?.("[data-bid-panel-navigation-toggle]")) {
        setLinePanelNavigationOpen(!navigation.classList.contains("is-open"), { scope });
        return;
      }
      if (event.target.closest?.("[data-lines-navigation-dismiss]")) {
        setLinePanelNavigationOpen(false, { returnFocus: true, scope });
        return;
      }
      const button = event.target.closest?.("[data-lines-navigation-target]");
      if (!button || button.disabled) return;
      const target = button.dataset.linesNavigationTarget;
      const targetElement = getLinePanelNavigationTarget(target, scope);
      if (!targetElement) return;
      setActiveLinePanelNavigationTarget(target, scope);
      setLinePanelNavigationOpen(false, { scope });
      scrollElementBelowLinePanelNavigation(targetElement, "smooth", scope);
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const navigation = navigations.find((candidate) => candidate.classList.contains("is-open"));
    if (!navigation) return;
    setLinePanelNavigationOpen(false, {
      returnFocus: true,
      scope: navigation.dataset.bidPanelNavigation,
    });
  });
  window.addEventListener("scroll", scheduleLinePanelNavigationHighlight, { passive: true });
  window.addEventListener("resize", scheduleLinePanelNavigationHighlight);
  syncLinePanelNavigation();
  scheduleLinePanelNavigationHighlight();
}

function syncLineResultsView() {
  const viewMode = state.linesViewMode === "calendar" ? "calendar" : "table";
  document.querySelectorAll("[data-line-view]").forEach((button) => {
    const active = button.dataset.lineView === viewMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-line-results-view]").forEach((view) => {
    view.hidden = view.dataset.lineResultsView !== viewMode;
  });
  const collapseButton = $("lineCalendarCollapse");
  const timeline = $("lineCalendarTimeline");
  if (collapseButton && timeline) {
    const expanded = !state.lineCalendarCollapsed;
    collapseButton.setAttribute("aria-expanded", String(expanded));
    collapseButton.querySelector(".accordion-toggle-label").textContent = expanded ? "Collapse" : "Expand";
    timeline.hidden = !expanded;
  }
  syncLinePanelNavigation();
  scheduleLinePanelNavigationHighlight();
}

function setLineResultsView(viewMode) {
  if (!["table", "calendar"].includes(viewMode)) return;
  rememberLineCalendarScrollPosition();
  state.linesViewMode = viewMode;
  saveLineResultsViewPreference();
  setLinePanelNavigationOpen(false);
  syncLineResultsView();
  if (state.data) renderLines();
  updateStickyOffsets();
}

const rememberLineCalendarScrollPosition = () => {
  const scroller = document.querySelector("#lineCalendarTimeline .line-calendar-scroller");
  if (!scroller) return;
  state.lineCalendarScroll = {
    left: scroller.scrollLeft,
    top: scroller.scrollTop,
  };
};

function setupLineViewControls() {
  loadLineResultsViewPreference();
  document.querySelectorAll("[data-line-view]").forEach((button) => {
    button.addEventListener("click", () => setLineResultsView(button.dataset.lineView));
  });
  $("lineCalendarCollapse")?.addEventListener("click", () => {
    state.lineCalendarCollapsed = !state.lineCalendarCollapsed;
    syncLineResultsView();
    updateStickyOffsets();
  });
  syncLineResultsView();
}

const toggleBidLine = (lineName) => {
  if (!lineName) return;
  if (shouldPreviewUi012Availability()) return;
  rememberLineCalendarScrollPosition();
  const index = state.bidList.indexOf(lineName);
  if (index >= 0) {
    state.bidList.splice(index, 1);
  } else {
    state.bidList.push(lineName);
  }
  saveBidList();
  renderActiveTab();
};

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[char]));

const formatHours = (minutes) => {
  if (minutes === null || minutes === undefined) return "";
  return `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`;
};

const formatRemarkHours = (minutes) => {
  if (minutes === null || minutes === undefined) return "";
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
};

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00Z`);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", timeZone: "UTC" });
};

const parseTimeToMinutes = (value) => {
  if (!value) return null;
  const parts = String(value).trim().split(/[:+]/);
  if (parts.length !== 2) return null;
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);
  return Number.isFinite(hours) && Number.isFinite(minutes) ? hours * 60 + minutes : null;
};

const addDays = (value, days) => {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

const localMinutesForZone = (utcDate, timeZone) => {
  if (!utcDate || !timeZone) return null;
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(utcDate);
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  return Number.isFinite(hour) && Number.isFinite(minute) ? hour * 60 + minute : null;
};

const unique = (items) => [...new Set(items.filter(Boolean))].sort((a, b) => {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
});

const initialsForName = (name) => {
  const parts = String(name || "Crew Profile").trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() || "").join("") || "CP";
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const getProfileCropValue = (value) => (Number.isFinite(Number(value)) ? Number(value) : 50);

const getAvatarObjectPosition = () => (
  `${clamp(getProfileCropValue(state.preferences.avatarPositionX), 0, 100)}% ${clamp(getProfileCropValue(state.preferences.avatarPositionY), 0, 100)}%`
);

const getLocalThemePreview = () => {
  if (!["127.0.0.1", "localhost", "::1"].includes(window.location.hostname)) return "";
  const previewTheme = new URLSearchParams(window.location.search).get("previewTheme");
  return ["dark", "light"].includes(previewTheme) ? previewTheme : "";
};

const applyTheme = () => {
  const isDark = (getLocalThemePreview() || state.preferences.theme) === "dark";
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  document.documentElement.style.backgroundColor = isDark ? "#07111d" : "#f2f5f8";
  document.body.style.backgroundColor = isDark ? "#07111d" : "#f2f5f8";
  document.documentElement.classList.toggle("theme-dark", isDark);
  document.body.classList.toggle("theme-dark", isDark);
};

const validateWorkEmail = (value) => (
  !value || /@kalittaair\.com$/i.test(String(value).trim())
);

const updateStickyOffsets = () => {
  const tabs = document.querySelector(".tabs");
  const subnav = document.querySelector(".workspace-subnav");
  const quickFilters = document.querySelector(".panel.is-active .result-header");
  const tabsHeight = Math.ceil(tabs?.getBoundingClientRect().height || 0);
  const subnavHeight = Math.ceil(subnav?.getBoundingClientRect().height || 0);
  const quickFilterHeight = Math.ceil(quickFilters?.getBoundingClientRect().height || 0);
  document.documentElement.style.setProperty("--primary-tabs-offset", `${tabsHeight}px`);
  document.documentElement.style.setProperty("--tabs-offset", `${tabsHeight + subnavHeight}px`);
  document.documentElement.style.setProperty("--quick-filter-height", `${quickFilterHeight}px`);
};

const getTabsOffset = () => {
  const tabs = document.querySelector(".tabs");
  const subnav = document.querySelector(".workspace-subnav");
  const tabsHeight = Math.ceil(tabs?.getBoundingClientRect().height || 0);
  const subnavHeight = Math.ceil(subnav?.getBoundingClientRect().height || 0);
  return tabsHeight + subnavHeight + 12;
};

const scrollElementBelowTabs = (element, behavior = "smooth") => {
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY - getTabsOffset();
  window.scrollTo({ top: Math.max(0, y), behavior });
};

const getActivePanel = () => $(`${state.activeTab}Panel`);

const WORKSPACE_FILTER_IDS = Object.freeze({
  lines: "lineFiltersContent",
  trips: "tripFiltersContent",
  reserves: "reserveFiltersContent",
  training: "trainingFiltersContent",
  selection: "selectionFiltersHeader",
});
const workspaceFilterHomes = new Map();

const getWorkspaceFilters = (tabName = state.activeTab) => {
  const filterId = WORKSPACE_FILTER_IDS[tabName];
  return filterId ? $(filterId) : null;
};

function syncWorkspaceControlsDeck(tabName = state.activeTab) {
  const deck = $("workspaceControlsDeck");
  const slot = $("activeFiltersSlot");
  if (!deck || !slot) return;

  Object.entries(WORKSPACE_FILTER_IDS).forEach(([filterTab, filterId]) => {
    const filters = $(filterId);
    if (!filters) return;
    if (!workspaceFilterHomes.has(filterTab)) {
      const home = document.createComment(`${filterTab} filters home`);
      filters.before(home);
      workspaceFilterHomes.set(filterTab, home);
    }
    const home = workspaceFilterHomes.get(filterTab);
    if (filterTab !== tabName && filters.parentElement === slot && home?.parentNode) {
      home.parentNode.insertBefore(filters, home.nextSibling);
    }
  });

  const activeFilters = getWorkspaceFilters(tabName);
  if (activeFilters) slot.appendChild(activeFilters);
  deck.classList.toggle("has-active-filters", Boolean(activeFilters));
}

const getResultAnchor = (tabName = state.activeTab) => {
  const panel = $(`${tabName}Panel`);
  if (!panel) return null;
  if (tabName === "selection") return $("selectionResultsHeader") || panel;
  return panel.querySelector(".result-header") || panel.querySelector(".selection-summary") || panel.querySelector(".preferences-grid") || panel;
};

const MONTH_ABBREV = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

const getTripBaseYear = () => (
  state.data?.metadata?.start ? Number(state.data.metadata.start.slice(0, 4)) : new Date().getFullYear()
);

const buildTripResolvedDateMap = (lines, defaultYear = getTripBaseYear()) => {
  const resolved = new Map();
  let currentYear = defaultYear;
  let previousMonth = null;

  lines.forEach((line, index) => {
    const match = String(line || "").match(/^(\d{1,2})([A-Za-z]{3})(?:\s+[A-Za-z]{2})?$/);
    if (!match) return;
    const month = MONTH_ABBREV[match[2].slice(0, 3)];
    if (!month) return;
    if (previousMonth !== null && month < previousMonth) currentYear += 1;
    previousMonth = month;
    const parsedDate = new Date(Date.UTC(currentYear, month - 1, Number(match[1])));
    if (Number.isNaN(parsedDate.getTime())) return;
    resolved.set(index, parsedDate.toISOString().slice(0, 10));
  });

  return resolved;
};

const findLatestResolvedDateBeforeIndex = (resolvedDates, index, fallback = "") => {
  for (let cursor = index; cursor >= 0; cursor -= 1) {
    const resolved = resolvedDates.get(cursor);
    if (resolved) return resolved;
  }
  return fallback;
};

const parseTripCalendarFromText = (text, defaultYear) => {
  if (!text) return [];
  const lines = String(text).split("\n").map((line) => line.trim()).filter(Boolean);
  const dates = new Set(buildTripResolvedDateMap(lines, defaultYear).values());
  return [...dates].sort();
};

const getTripCalendar = (trip) => {
  if (trip.date || trip.dutyDays) return getTripCalendarDates(trip);
  const defaultYear = state.data?.metadata?.start ? Number(state.data.metadata.start.slice(0, 4)) : new Date().getFullYear();
  return parseTripCalendarFromText(trip.rawText || "", defaultYear);
};

const formatCalendarDayNumber = (value) => {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return String(date.getDate());
};

const formatCalendarWeekday = (value) => {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString(undefined, { weekday: "short" }).slice(0, 2);
};

const fillSelect = (element, values, label = "All") => {
  if (!element) return;
  element.innerHTML = "";
  const all = document.createElement("option");
  all.value = "";
  all.textContent = label;
  all.defaultSelected = true;
  all.selected = true;
  element.appendChild(all);
  unique(values.map((value) => String(value || "").trim()).filter(Boolean)).forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    element.appendChild(option);
  });
};

const textMatch = (value, needle) => String(value || "").toLowerCase().includes(needle);

const matchesSearchNeedle = (needle, identifierValues = [], textValues = []) => {
  if (!needle) return true;
  if (/^\d+$/.test(needle)) {
    const numericTokens = identifierValues
      .flatMap((value) => String(value || "").toLowerCase().match(/[a-z]*\d+/g) || [])
      .map((token) => token.replace(/^[a-z]+/, ""));
    return numericTokens.includes(needle);
  }
  const fullHaystack = [...identifierValues, ...textValues].join(" ").toLowerCase();
  return textMatch(fullHaystack, needle);
};

const numericFilter = (value, minHours, maxHours) => {
  const hours = (value || 0) / 60;
  if (minHours !== "" && hours < Number(minHours)) return false;
  if (maxHours !== "" && hours > Number(maxHours)) return false;
  return true;
};

const pillList = (items, limit = 10) => {
  const visible = items.slice(0, limit);
  const extra = items.length - visible.length;
  return `<div class="pill-list">${visible.map((item) => `<span class="pill">${item}</span>`).join("")}${extra > 0 ? `<span class="pill">+${extra}</span>` : ""}</div>`;
};

const EMPTY_RESULT_CONFIG = {
  lines: { panelId: "linesPanel", searchId: "lineSearch", availableId: "lineAvailableToggle" },
  trips: { panelId: "tripsPanel", searchId: "tripSearch" },
  reserves: { panelId: "reservesPanel", searchId: "reserveSearch", availableId: "reserveAvailableToggle" },
  training: { panelId: "trainingPanel", searchId: "trainingSearch", availableId: "trainingAvailableToggle" },
};

const getEmptyResultRecovery = (tabName) => {
  const config = EMPTY_RESULT_CONFIG[tabName] || {};
  const panel = config.panelId ? $(config.panelId) : null;
  const search = config.searchId ? $(config.searchId) : null;
  if (String(search?.value || "").trim()) {
    return { label: "Review Search", target: search };
  }

  const filters = getWorkspaceFilters(tabName);
  const activeFilterControl = [...(filters?.querySelectorAll("input, select") || [])]
    .find(isFilterControlActive);
  if (activeFilterControl) {
    return { label: "Review Filters", target: activeFilterControl };
  }

  const available = config.availableId ? $(config.availableId) : null;
  if (available?.checked) {
    return { label: "Review Applicable", target: available };
  }

  if (state.lineAvoidCities.size && ["lines", "trips"].includes(tabName)) {
    return { label: "Review City Avoid", target: panel?.querySelector(".city-avoid-panel") };
  }
  if (state.avoidDates.size) {
    return { label: "Review Dates", target: document.querySelector(".calendar-panel") };
  }
  if (state.showBidListOnly) {
    return { label: "Show All Results", target: panel?.querySelector(".bid-list-show"), clearBidListOnly: true };
  }
  return { label: "Review Filters", target: filters || panel };
};

const emptyRow = (colspan, tabName = "") => {
  if (!tabName) return `<tr><td colspan="${colspan}" class="empty">No matches. Loosen a filter and try again.</td></tr>`;
  const recovery = getEmptyResultRecovery(tabName);
  return `
    <tr class="empty-results-row">
      <td colspan="${colspan}" class="empty empty-results-cell">
        <div class="empty-results-recovery">
          <span>No matches. Review the active search or filters and try again.</span>
          <button type="button" class="btn-secondary empty-results-action" data-empty-results-recovery="${tabName}">${escapeHtml(recovery.label)}</button>
        </div>
      </td>
    </tr>
  `;
};

function bindEmptyResultRecovery(tabName) {
  const button = document.querySelector(`[data-empty-results-recovery="${tabName}"]`);
  if (!button) return;
  button.addEventListener("click", () => {
    const recovery = getEmptyResultRecovery(tabName);
    if (recovery.clearBidListOnly) {
      state.showBidListOnly = false;
      renderActiveTab();
      return;
    }
    const target = recovery.target;
    if (!target) return;
    const collapsedFilters = target.closest?.(".filters.is-collapsed");
    if (collapsedFilters?.id) {
      document.querySelector(`.accordion-toggle[aria-controls="${collapsedFilters.id}"]`)?.click();
    }
    const scrollTarget = target.closest?.("label, .city-avoid-panel, .calendar-panel, .filters") || target;
    requestAnimationFrame(() => {
      scrollElementBelowTabs(scrollTarget);
      target.focus?.({ preventScroll: true });
      if (target.matches?.('input[type="search"]')) target.select?.();
    });
  });
}

const lineNumber = (name) => Number(String(name).replace(/\D/g, ""));

const getTripStartAirport = (trip) => trip?.startAirport || trip?.routes?.[0]?.from || "";

const getTripEndAirport = (trip) => trip?.endAirport || trip?.routes?.[trip.routes.length - 1]?.to || "";

const getTripAirports = (trip) => {
  if (trip?.airports?.length) return trip.airports;
  return unique((trip?.routes || []).flatMap((route) => [route.from, route.to]));
};

const getAirportsCountries = (airports) => unique((airports || []).map((airport) => AIRPORT_COUNTRIES[airport]).filter(Boolean));

const getAirportsRegions = (airports) => unique((airports || []).map((airport) => AIRPORT_REGIONS[airport]).filter(Boolean));

const US_MILITARY_BASE_AIRPORTS = new Set(["DOV", "EDF", "HIK", "OKO", "OSN", "RMS", "SUU", "UAM", "XJD"]);
const KNOWN_AIRPORT_CODES = new Set([
  ...Object.keys(AIRPORT_NAMES),
  ...Object.keys(AIRPORT_COUNTRIES),
  ...Object.keys(AIRPORT_REGIONS),
  ...US_MILITARY_BASE_AIRPORTS,
]);
const ICAO_TO_IATA_OVERRIDES = {
  CYYZ: "YYZ",
  CYHM: "YHM",
  EBBR: "BRU",
  EBLG: "LGG",
  EDDF: "FRA",
  EDDP: "LEJ",
  EGNX: "EMA",
  LLBG: "TLV",
  OMDW: "DWC",
  PANC: "ANC",
  PHNL: "HNL",
  RJAA: "NRT",
  RJGG: "NGO",
  RKSI: "ICN",
  SBKP: "VCP",
  SCEL: "SCL",
  SKBO: "BOG",
  VHHH: "HKG",
  WSSS: "SIN",
  ZSPD: "PVG",
};

const normalizeAirportPreferenceEntry = (rawValue) => {
  const token = rawValue.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!token) return "";
  if (/^[A-Z0-9]{3}$/.test(token)) return token;
  if (!/^[A-Z0-9]{4}$/.test(token)) return "";
  if (ICAO_TO_IATA_OVERRIDES[token]) return ICAO_TO_IATA_OVERRIDES[token];
  const possibleIata = token.slice(1);
  if (KNOWN_AIRPORT_CODES.has(possibleIata)) return possibleIata;
  return "";
};

const parseAirportPreferenceInput = (value) => {
  const entries = value.split(/[\s,;]+/).filter(Boolean);
  const codes = [];
  const rejected = [];
  entries.forEach((entry) => {
    const code = normalizeAirportPreferenceEntry(entry);
    if (code) {
      if (!codes.includes(code)) codes.push(code);
    } else {
      rejected.push(entry.trim().toUpperCase());
    }
  });
  return { codes, rejected };
};

const hasPreferenceAirportConflict = (airports) => (airports || []).some((airport) => state.preferences.avoidAirports.has(airport));

const hasPreferenceCountryConflict = (airports) => getAirportsCountries(airports)
  .some((country) => state.preferences.avoidCountries.has(country));

const hasPreferenceRegionConflict = (airports) => getAirportsRegions(airports)
  .some((region) => state.preferences.avoidRegions.has(region));

const hasPreferenceSpecialConflict = (airports) => (
  state.preferences.specialRestrictions.has("usMilitaryBases")
  && (airports || []).some((airport) => US_MILITARY_BASE_AIRPORTS.has(airport))
);

const collectAvailablePreferenceAirports = () => unique([
  ...(state.data?.lines || []).flatMap((line) => line.airports || []),
  ...(state.data?.trips || []).flatMap((trip) => trip.airports || []),
]);

const collectAvailablePreferenceCountries = () => unique(collectAvailablePreferenceAirports()
  .map((airport) => AIRPORT_COUNTRIES[airport])
  .filter(Boolean));

const collectAvailablePreferenceRegions = () => [...PREFERENCE_REGIONS];

const collectAvailableSpecialRestrictions = () => (
  collectAvailablePreferenceAirports().some((airport) => US_MILITARY_BASE_AIRPORTS.has(airport))
    ? [{ value: "usMilitaryBases", label: "U.S. Military Bases" }]
    : []
);

const detectFleetType = (data = state.data) => {
  const plan = String(data?.metadata?.plan || "");
  const match = plan.match(/\b(747|777)\b/);
  return match?.[1] || "";
};

const getTripLines = (trip) => String(trip?.rawText || "").split("\n").map((line) => line.trim()).filter(Boolean);

const parseTripDateToken = (value) => {
  const match = String(value || "").match(/^(\d{1,2})([A-Za-z]{3})(?:\s+[A-Za-z]{2})?$/);
  if (!match) return null;
  const month = MONTH_ABBREV[match[2].slice(0, 3)];
  if (!month) return null;
  const year = getTripBaseYear();
  const parsedDate = new Date(Date.UTC(year, month - 1, Number(match[1])));
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate.toISOString().slice(0, 10);
};

const getFirstTripDuty = (trip) => {
  const lines = getTripLines(trip);
  const resolvedDates = buildTripResolvedDateMap(lines);
  const showIndex = lines.findIndex((line, index) => line === "Show Time" && isDurationToken(lines[index + 1]));
  const routeIndex = lines.findIndex((line) => getRouteFromLeg(line));
  if (showIndex < 0 || routeIndex < 0) return null;
  const route = getRouteFromLeg(lines[routeIndex]);
  const departureMinutes = parseTimeToMinutes(lines[routeIndex + 1]);
  const showMinutes = parseTimeToMinutes(lines[showIndex + 1]);
  const routeDate = trip?.date || findLatestResolvedDateBeforeIndex(resolvedDates, routeIndex - 1);
  if (!route || showMinutes === null || !routeDate) return null;
  const showDate = departureMinutes !== null && showMinutes > departureMinutes ? addDays(routeDate, -1) : routeDate;
  return {
    showDate,
    showTime: lines[showIndex + 1],
    showMinutes,
    departureAirport: route.from,
  };
};

const getBreakfastFriendlyInfo = (trip) => {
  const duty = getFirstTripDuty(trip);
  if (!duty) return { isFriendly: false };
  const timeZone = AIRPORT_TIME_ZONES[duty.departureAirport];
  if (!timeZone) return { isFriendly: false, reason: "No local timezone" };
  const [hour, minute] = duty.showTime.split(":").map(Number);
  const utcDate = new Date(Date.UTC(
    Number(duty.showDate.slice(0, 4)),
    Number(duty.showDate.slice(5, 7)) - 1,
    Number(duty.showDate.slice(8, 10)),
    hour,
    minute,
  ));
  const localMinutes = localMinutesForZone(utcDate, timeZone);
  const breakfastWindowStart = getBreakfastWindowStartMinutes();
  const breakfastCutoff = getBreakfastCutoffMinutes();
  return {
    isFriendly: localMinutes !== null
      && breakfastWindowStart !== null
      && breakfastCutoff !== null
      && localMinutes >= breakfastWindowStart
      && localMinutes <= breakfastCutoff,
    localMinutes,
    departureAirport: duty.departureAirport,
    timeZone,
  };
};

const isBreakfastFriendlyLine = (line) => {
  const firstTrip = getLineTripDetails(line)[0];
  return Boolean(firstTrip && getBreakfastFriendlyInfo(firstTrip).isFriendly);
};

const AIRPORT_REGION_GROUPS = [
  {
    region: "Asia",
    groups: [
      { label: "West to East", airports: ["SIN", "HAN", "TPE", "HKG", "XMN", "CGO", "XIY", "HFE", "HGH", "EHU", "PVG", "ICN", "OSN", "NGO", "NRT", "OKO", "UAM"] },
    ],
  },
  {
    region: "North & South America + Hawaii",
    groups: [
      { label: "Alaska + Canada", airports: ["ANC", "EDF", "YHM", "YYZ"] },
      { label: "Continental U.S. + Hawaii", airports: ["HNL", "HIK", "LAX", "ONT", "SUU", "DFW", "ORD", "SDF", "CVG", "DOV", "MIA", "JFK"] },
      { label: "Central America + Caribbean", airports: ["NLU"] },
      { label: "South America", airports: ["BOG", "VCP", "SCL"] },
    ],
  },
  {
    region: "Europe + Africa",
    layout: "quadrants",
    groups: [
      { label: "Europe", area: "europe", airports: ["BRU", "EMA", "LGG", "FRA", "RMS", "LEJ"] },
      { label: "Africa", area: "africa", airports: [] },
      { label: "Middle East", area: "middle-east", airports: ["TLV", "KWI", "XJD", "DWC", "ALA"] },
    ],
  },
];

const ALL_REGION_AIRPORTS = new Set(
  AIRPORT_REGION_GROUPS.flatMap((region) => region.groups.flatMap((group) => group.airports)),
);

const getLineTripDetails = (line) => {
  const refs = line.trips || [];
  const details = line.tripDetails?.length
    ? line.tripDetails
    : refs.map((ref) => state.tripById?.get(String(ref.tripId)) || ref);

  return details.map((detail, index) => ({
    ...detail,
    date: refs[index]?.date || detail.date,
    tripId: detail.tripId || refs[index]?.tripId,
  }));
};

const getLineFirstShowInfo = (line) => {
  const tripDetails = getLineTripDetails(line);
  const firstTrip = tripDetails
    .filter((trip) => trip?.date)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))[0]
    || tripDetails[0];
  const duty = firstTrip ? getFirstTripDuty(firstTrip) : null;
  if (!duty?.showDate || duty.showMinutes === null || duty.showMinutes === undefined) return null;
  return {
    ...duty,
    timestamp: new Date(`${duty.showDate}T${duty.showTime}:00Z`).getTime(),
  };
};

const compareLineFirstShowTimes = (a, b, direction = "asc") => {
  const aStart = getLineFirstShowInfo(a);
  const bStart = getLineFirstShowInfo(b);
  if (!aStart && !bStart) return 0;
  if (!aStart) return 1;
  if (!bStart) return -1;
  const timeDifference = direction === "desc"
    ? bStart.showMinutes - aStart.showMinutes
    : aStart.showMinutes - bStart.showMinutes;
  if (timeDifference) return timeDifference;
  return aStart.timestamp - bStart.timestamp;
};

const formatLineFirstShowDate = (value) => {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return "";
  const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][date.getUTCMonth()];
  return `${String(date.getUTCDate()).padStart(2, "0")} ${month}`;
};

const formatLineFirstShowTime = (value) => {
  const match = String(value || "").match(/^(\d{1,2}):(\d{2})$/);
  return match ? `${match[1].padStart(2, "0")}${match[2]}Z` : "";
};

const getContiguousCalendarGroups = (entries = []) => {
  const sorted = [...entries]
    .filter((entry) => entry?.date && entry.status !== "RSV")
    .sort((a, b) => getTimeValue(a.date) - getTimeValue(b.date));
  const groups = [];
  sorted.forEach((entry) => {
    const current = groups[groups.length - 1];
    if (current && getTimeValue(entry.date) - getTimeValue(current[current.length - 1].date) === DAY_MS) {
      current.push(entry);
      return;
    }
    groups.push([entry]);
  });
  return groups;
};

const applyLineDerivedTripCalendars = () => {
  const derived = new Map();

  (state.data.lines || []).forEach((line) => {
    const refs = (line.trips || []).slice().sort((a, b) => getTimeValue(a.date) - getTimeValue(b.date));
    const groups = getContiguousCalendarGroups(line.calendar || []);

    groups.forEach((group) => {
      const groupStart = group[0]?.date;
      const groupEnd = group[group.length - 1]?.date;
      const groupTripRefs = refs.filter((ref) => ref?.date && ref.date >= groupStart && ref.date <= groupEnd);
      if (!groupTripRefs.length) return;

      let pointer = 0;
      groupTripRefs.forEach((ref, index) => {
        const trip = state.tripById?.get(String(ref.tripId));
        const dutyDays = Number(trip?.dutyDays) || 1;
        const remainingTrips = groupTripRefs.length - index - 1;
        const maxSliceEnd = Math.max(pointer + dutyDays, group.length - remainingTrips);
        const slice = group.slice(pointer, Math.min(maxSliceEnd, group.length));
        if (!slice.length) return;
        pointer += slice.length;

        const tripId = String(ref.tripId);
        const dates = slice.map((entry) => entry.date);
        const existing = derived.get(tripId);
        if (!existing || getTimeValue(dates[0]) < getTimeValue(existing[0])) {
          derived.set(tripId, dates);
        }
      });
    });
  });

  derived.forEach((dates, tripId) => {
    const trip = state.tripById?.get(tripId);
    if (!trip || !dates.length) return;
    trip.lineDerivedCalendar = dates;
    trip.displayDate = dates[0];
  });
};

const getLineStartAirport = (line) => getTripStartAirport(getLineTripDetails(line)[0]);

const getLineEndAirport = (line) => {
  const trips = getLineTripDetails(line);
  return getTripEndAirport(trips[trips.length - 1]);
};

const getTimeValue = (date) => new Date(`${date}T00:00:00Z`).getTime();

const DAY_MS = 24 * 60 * 60 * 1000;

const getLineTripEndDate = (line, trips, index) => {
  const trip = trips[index];
  if (!trip?.date) return "";
  const dutyDays = Number(trip.dutyDays);
  if (Number.isFinite(dutyDays) && dutyDays > 0) return addDays(trip.date, dutyDays - 1);
  const tripDates = (trip.calendar || [])
    .filter((date) => date >= trip.date)
    .sort();
  return tripDates[tripDates.length - 1] || trip.date;
};

const shouldShowSplitMarker = (line, trips, index) => {
  const tripEnd = getLineTripEndDate(line, trips, index);
  const nextStart = trips[index + 1]?.date;
  if (!tripEnd || !nextStart) return false;
  return getTimeValue(nextStart) - getTimeValue(tripEnd) > DAY_MS;
};

const hasSplitLine = (line) => {
  const trips = getLineTripDetails(line).filter((trip) => trip.date);
  return trips.some((_, index) => shouldShowSplitMarker(line, trips, index));
};

const getLineCalendarStartValue = (line) => {
  const calendarStart = (line.calendar || [])
    .filter((entry) => (entry?.status || "") !== "RSV")
    .map((entry) => entry?.date)
    .filter(Boolean)
    .sort()[0];
  if (calendarStart) return getTimeValue(calendarStart);
  const tripStart = getLineTripDetails(line)
    .map((trip) => trip.date)
    .filter(Boolean)
    .sort()[0];
  return tripStart ? getTimeValue(tripStart) : Number.MAX_SAFE_INTEGER;
};

const isDurationToken = (value) => /^\d{1,3}:\d{2}$/.test(String(value || ""));

const durationTokenToMinutes = (value) => {
  const [hours, minutes] = String(value).split(":").map(Number);
  return hours * 60 + minutes;
};

const isAircraftToken = (value) => /^(?:\d{3}|7\d{2}|BUS|BUS\s+\w)$/i.test(String(value || ""));

const US_AIRPORTS = new Set(["ANC", "CVG", "DFW", "HNL", "JFK", "LAX", "MIA", "ONT", "ORD", "SDF"]);

const minimumInternationalRestMinutes = (dutyMinutes) => {
  if (dutyMinutes === null || dutyMinutes === undefined) return null;
  if (dutyMinutes > 24 * 60) return 18 * 60;
  if (dutyMinutes > 20 * 60) return 14 * 60;
  if (dutyMinutes > 18 * 60) return 13 * 60;
  return 11 * 60;
};

const minimumDomesticRestMinutes = (scheduledFlightMinutes) => {
  if (scheduledFlightMinutes === null || scheduledFlightMinutes === undefined) return null;
  if (scheduledFlightMinutes < 8 * 60) return 9 * 60;
  if (scheduledFlightMinutes < 9 * 60) return 10 * 60;
  return 11 * 60;
};

const minimumRestLabel = (rule) => (rule === "domestic" ? "MIN REST - DOM (FARs)" : "MIN REST - INT'L (CBA)");

const parseTripDayToken = (value, defaultYear) => {
  const match = String(value || "").match(/^(\d{1,2})([A-Za-z]{3})(?:\s+[A-Za-z]{2})?$/);
  if (!match) return null;
  const month = MONTH_ABBREV[match[2].slice(0, 3)];
  if (!month) return null;
  const parsedDate = new Date(defaultYear, month - 1, Number(match[1]));
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate.toISOString().slice(0, 10);
};

const getTripLongSitBreaks = (trip) => {
  const lines = String(trip.rawText || "").split("\n").map((line) => line.trim()).filter(Boolean);
  const routes = trip.routes || [];
  const breaks = [];
  let searchFrom = 0;
  const resolvedDates = buildTripResolvedDateMap(lines);

  routes.forEach((route, index) => {
    const currentRouteIndex = lines.findIndex((line, lineIndex) => lineIndex >= searchFrom && line === route.leg);
    if (currentRouteIndex < 0) {
      breaks.push(false);
      return;
    }

    const nextRoute = routes[index + 1];
    const nextRouteIndex = nextRoute
      ? lines.findIndex((line, lineIndex) => lineIndex > currentRouteIndex && line === nextRoute.leg)
      : -1;
    const segmentEnd = nextRouteIndex > -1 ? nextRouteIndex : lines.length;
    const segment = lines.slice(currentRouteIndex + 1, segmentEnd);
    const currentDate = findLatestResolvedDateBeforeIndex(resolvedDates, currentRouteIndex - 1);
    const nextDate = nextRouteIndex > -1
      ? findLatestResolvedDateBeforeIndex(resolvedDates, nextRouteIndex - 1)
      : null;
    const restMinutes = findRestAfterRoute(segment);
    const hasLongSit = segment.some((line, segmentIndex) => {
      if (!isDurationToken(line)) return false;
      const previous = segment[segmentIndex - 1];
      const next = segment[segmentIndex + 1];
      const minutes = durationTokenToMinutes(line);
      return minutes > 12 * 60 && next === "Block" && isAircraftToken(previous);
    });
    const hasRestStay = Boolean(
      restMinutes !== null
      && (nextRoute && (restMinutes > 0 || (currentDate && nextDate && currentDate !== nextDate))),
    );

    breaks.push(Boolean(nextRoute && (hasLongSit || hasRestStay)));
    searchFrom = currentRouteIndex + 1;
  });

  return breaks;
};

const getTripRouteEntriesByDate = (trip) => {
  const lines = String(trip.rawText || "").split("\n").map((line) => line.trim()).filter(Boolean);
  const routes = trip.routes || [];
  const breakFlags = getTripLongSitBreaks(trip);
  const entriesByDate = new Map();
  let searchFrom = 0;
  const resolvedDates = buildTripResolvedDateMap(lines);

  routes.forEach((route, index) => {
    const currentRouteIndex = lines.findIndex((line, lineIndex) => lineIndex >= searchFrom && line === route.leg);
    if (currentRouteIndex < 0) return;
    const currentDate = findLatestResolvedDateBeforeIndex(resolvedDates, currentRouteIndex - 1, trip.date || "");
    if (currentDate) {
      const entries = entriesByDate.get(currentDate) || [];
      entries.push({ ...route, breakAfter: Boolean(breakFlags[index]) });
      entriesByDate.set(currentDate, entries);
    }
    searchFrom = currentRouteIndex + 1;
  });

  return entriesByDate;
};

const splitRouteEntriesByBreaks = (entries = []) => {
  const blocks = [];
  let current = [];
  entries.forEach((entry) => {
    current.push(entry);
    if (entry.breakAfter) {
      blocks.push(current);
      current = [];
    }
  });
  if (current.length) blocks.push(current);
  return blocks;
};

const formatThroughAirports = (entries) => {
  if (!entries.length) return "";
  const airports = [entries[0].from, ...entries.map((entry) => entry.to)];
  return airports.slice(1, -1).map((airport, index) => (
    `${airport}${entries[index]?.breakAfter ? " |" : ""}`
  )).join(" ");
};

const findDutyBeforeRoute = (lines, startIndex, routeIndex) => {
  const segment = lines.slice(startIndex, routeIndex);
  for (let index = segment.length - 2; index >= 0; index -= 1) {
    if (segment[index] === "Duty" && isDurationToken(segment[index + 1])) {
      return {
        index: startIndex + index,
        minutes: durationTokenToMinutes(segment[index + 1]),
      };
    }
  }
  return null;
};

const findRestAfterRoute = (segment) => {
  const restIndex = segment.findIndex((line) => line === "Rest");
  if (restIndex < 0 || !isDurationToken(segment[restIndex + 1])) return null;
  return durationTokenToMinutes(segment[restIndex + 1]);
};

const getRouteFromLeg = (leg) => {
  const match = String(leg || "").match(/^([A-Z]{3})-([A-Z]{3})$/);
  return match ? { from: match[1], to: match[2], leg } : null;
};

const getRouteBlockMinutes = (lines, routeIndex) => {
  const rowBlock = lines[routeIndex + 3];
  if (isDurationToken(rowBlock)) return durationTokenToMinutes(rowBlock);

  const blockLabelIndex = lines.slice(routeIndex + 1, routeIndex + 8).findIndex((line) => line === "Block");
  if (blockLabelIndex < 0) return 0;
  const value = lines[routeIndex + 1 + blockLabelIndex + 1];
  return isDurationToken(value) ? durationTokenToMinutes(value) : 0;
};

const getDutyRoutes = (lines, startIndex, endIndex) => lines
  .slice(startIndex, endIndex)
  .map((line, offset) => ({ route: getRouteFromLeg(line), index: startIndex + offset }))
  .filter((entry) => entry.route);

const compactDutyRoute = (routes) => {
  if (!routes.length) return "";
  return [routes[0].from, ...routes.map((route) => route.to)].join(" ");
};

const formatRestRemark = ({ airport, restMinutes, dutyMinutes, scheduledFlightMinutes, rule, dutyRoute }) => {
  const prefix = minimumRestLabel(rule);
  const routeText = dutyRoute ? ` ${dutyRoute}` : "";
  const displayFlightMinutes = rule === "domestic"
    ? Math.max(0, scheduledFlightMinutes - DOMESTIC_FLIGHT_DISPLAY_TAXI_ALLOWANCE_MINUTES)
    : scheduledFlightMinutes;
  const lines = [
    `${prefix}:${routeText}`,
    `Duty Day: ${formatRemarkHours(dutyMinutes)}`,
  ];
  if (rule === "domestic") {
    lines.push(`Flight: ${formatRemarkHours(displayFlightMinutes)}`);
  }
  lines.push(`Rest @ ${airport}: ${formatRemarkHours(restMinutes)}`);
  return lines.join("\n");
};

const getTripRouteAnalysis = (trip) => {
  const lines = String(trip.rawText || "").split("\n").map((line) => line.trim()).filter(Boolean);
  const routes = trip.routes || [];
  const longSitBreaks = getTripLongSitBreaks(trip);
  const analysis = [];
  let searchFrom = 0;
  let currentDuty = null;

  routes.forEach((route, index) => {
    const currentRouteIndex = lines.findIndex((line, lineIndex) => lineIndex >= searchFrom && line === route.leg);
    const nextDuty = currentRouteIndex >= 0 ? findDutyBeforeRoute(lines, searchFrom, currentRouteIndex) : null;
    if (nextDuty) currentDuty = nextDuty;

    const nextRoute = routes[index + 1];
    const nextRouteIndex = currentRouteIndex >= 0 && nextRoute
      ? lines.findIndex((line, lineIndex) => lineIndex > currentRouteIndex && line === nextRoute.leg)
      : -1;
    const segmentEnd = nextRouteIndex > -1 ? nextRouteIndex : lines.length;
    const segment = currentRouteIndex >= 0 ? lines.slice(currentRouteIndex + 1, segmentEnd) : [];
    const restMinutes = findRestAfterRoute(segment);
    const dutyStartIndex = currentDuty?.index ?? searchFrom;
    const dutyRoutes = currentRouteIndex >= 0 ? getDutyRoutes(lines, dutyStartIndex, segmentEnd) : [];
    const isDomesticDuty = dutyRoutes.length > 0 && dutyRoutes.every((entry) => (
      US_AIRPORTS.has(entry.route.from) && US_AIRPORTS.has(entry.route.to)
    ));
    const scheduledFlightMinutes = dutyRoutes.reduce((sum, entry) => (
      sum + getRouteBlockMinutes(lines, entry.index)
    ), 0);
    const dutyRoute = compactDutyRoute(dutyRoutes.map((entry) => entry.route));
    const minimumRestMinutes = isDomesticDuty
      ? minimumDomesticRestMinutes(scheduledFlightMinutes)
      : minimumInternationalRestMinutes(currentDuty?.minutes);
    const rule = isDomesticDuty ? "domestic" : "international";
    const isMinimumRest = Boolean(
      nextRoute
      && minimumRestMinutes !== null
      && restMinutes !== null
      && restMinutes <= minimumRestMinutes + 30,
    );

    analysis.push({
      route,
      stayAfter: Boolean(longSitBreaks[index]),
      longStayAfter: Boolean(nextRoute && restMinutes !== null && restMinutes > getLongStayThresholdMinutes()),
      restMinutes,
      minimumRestAfter: isMinimumRest,
      remark: isMinimumRest
        ? formatRestRemark({
          airport: route.to,
          restMinutes,
          dutyMinutes: currentDuty?.minutes,
          scheduledFlightMinutes,
          rule,
          dutyRoute,
        })
        : "",
    });

    if (currentRouteIndex >= 0) searchFrom = currentRouteIndex + 1;
  });

  return analysis;
};

const routeAirportSequence = (trip) => {
  const routes = trip.routes || [];
  const deadheadRouteFlags = getTripDeadheadRouteFlags(trip);
  if (!routes.length) {
    return getTripAirports(trip).map((airport) => ({
      airport,
      longSitAfter: false,
      longStay: false,
      minimumRest: false,
      deadhead: false,
    }));
  }

  const routeAnalysis = getTripRouteAnalysis(trip);
  const sequence = [{
    airport: routes[0].from,
    longSitAfter: false,
    minimumRest: false,
    deadhead: Boolean(deadheadRouteFlags[0]),
    remark: "",
  }];
  routeAnalysis.forEach((entry, index) => {
    sequence.push({
      airport: entry.route.to,
      longSitAfter: entry.stayAfter,
      longStay: entry.longStayAfter,
      minimumRest: entry.minimumRestAfter,
      deadhead: Boolean(deadheadRouteFlags[index]),
      remark: entry.remark,
    });
  });
  return sequence;
};

const getTripSitMinutes = (trip) => getTripRouteAnalysis(trip)
  .reduce((sum, entry) => sum + (entry.restMinutes || 0), 0);

const getLineSitMinutes = (line) => getLineTripDetails(line)
  .reduce((sum, trip) => sum + getTripSitMinutes(trip), 0);

const getTripStayRestAirports = (trip) => unique(getTripRouteAnalysis(trip)
  .filter((entry) => entry.restMinutes !== null || entry.stayAfter)
  .map((entry) => entry.route.to));

const getLineStayRestAirports = (line) => unique(getLineTripDetails(line).flatMap(getTripStayRestAirports));

const getTripChronologicalRemarks = (trip) => getTripRouteAnalysis(trip)
  .flatMap((entry) => [
    ...(entry.minimumRestAfter && entry.remark ? [entry.remark] : []),
    ...(entry.longStayAfter ? [`LONG STAY (> ${formatHours(getLongStayThresholdMinutes())}):\n@ ${entry.route.to} - ${formatHours(entry.restMinutes)}`] : []),
  ]);

const hasTripLongStay = (trip) => getTripRouteAnalysis(trip).some((entry) => entry.longStayAfter);

const hasLineLongStay = (line) => getLineTripDetails(line).some(hasTripLongStay);

const elapsedMinutes = (start, end) => {
  const startMinutes = parseTimeToMinutes(start);
  const endMinutes = parseTimeToMinutes(end);
  if (startMinutes === null || endMinutes === null) return null;
  return endMinutes >= startMinutes ? endMinutes - startMinutes : endMinutes + 24 * 60 - startMinutes;
};

const extractDeadheadsFromRawText = (trip) => {
  const lines = getTripLines(trip);
  const resolvedDates = buildTripResolvedDateMap(lines);
  const details = [];
  lines.forEach((line, index) => {
    if (!/\bDH\b/.test(line)) return;
    const route = getRouteFromLeg(lines[index + 1]);
    if (!route) return;
    const start = lines[index + 2] || "";
    const end = lines[index + 3] || "";
    const minutes = elapsedMinutes(start, end);
    details.push({
      date: findLatestResolvedDateBeforeIndex(resolvedDates, index, ""),
      route: route.leg,
      type: /\bDH\s+CX\b/i.test(line) || /\bDH\s+(?!K4\b)[A-Z0-9]+\b/i.test(line) ? "commercial" : "kalitta",
      start,
      end,
      durationMinutes: minutes,
      duration: minutes === null ? "" : formatHours(minutes),
      raw: line,
      tripId: trip.tripId,
    });
  });
  return details;
};

const getTripDeadheads = (trip) => {
  const parsed = (trip.deadheads || []).map((deadhead) => ({
    ...deadhead,
    tripId: trip.tripId,
    durationMinutes: deadhead.durationMinutes ?? parseTimeToMinutes(deadhead.duration),
    duration: deadhead.duration || (deadhead.durationMinutes !== undefined ? formatHours(deadhead.durationMinutes) : ""),
  }));
  if (parsed.some((deadhead) => deadhead.start || deadhead.end || deadhead.duration)) return parsed;
  return extractDeadheadsFromRawText(trip);
};

const getLineDeadheads = (line) => getLineTripDetails(line).flatMap(getTripDeadheads);

const joinReportValues = (values) => values.filter((value) => value !== "" && value !== null && value !== undefined).join(", ") || "None";

const getReportButtonLabel = (kind) => (kind === "trip" ? "REPORT TRIP" : "REPORT LINE");

const renderReportButton = (kind, id, extraClass = "") => `
  <button type="button" class="btn-secondary report-button ${extraClass}" data-report-kind="${escapeHtml(kind)}" data-report-id="${escapeHtml(id)}">${getReportButtonLabel(kind)}</button>
`;

const getAppBuildTag = () => {
  const asset = document.querySelector("script[src*='app.js']")?.getAttribute("src")
    || document.querySelector("link[href*='styles.css']")?.getAttribute("href")
    || "";
  return new URL(asset, window.location.href).searchParams.get("v") || "local";
};

function getReportDeviceContext() {
  const userAgent = navigator.userAgent || "";
  const userAgentPlatform = navigator.userAgentData?.platform || navigator.platform || "";
  const isTouchMac = /Mac/i.test(userAgentPlatform) && Number(navigator.maxTouchPoints || 0) > 1;
  let device = "Unknown device";
  if (/iPhone|iPod/i.test(userAgent)) device = "iPhone";
  else if (/iPad/i.test(userAgent) || isTouchMac) device = "iPad";
  else if (/Android/i.test(userAgent) && /Mobile/i.test(userAgent)) device = "Android phone";
  else if (/Android/i.test(userAgent)) device = "Android tablet";
  else if (/Windows/i.test(userAgentPlatform || userAgent)) device = "Windows computer";
  else if (/Mac/i.test(userAgentPlatform || userAgent)) device = "Mac";
  else if (/Linux/i.test(userAgentPlatform || userAgent)) device = "Linux computer";

  let browser = "Unknown browser";
  const browserMatchers = [
    [/(?:EdgiOS|EdgA|Edg)\/([\d.]+)/i, "Microsoft Edge"],
    [/(?:CriOS|Chrome)\/([\d.]+)/i, "Chrome"],
    [/(?:FxiOS|Firefox)\/([\d.]+)/i, "Firefox"],
    [/Version\/([\d.]+).*Safari/i, "Safari"],
  ];
  for (const [pattern, name] of browserMatchers) {
    const match = userAgent.match(pattern);
    if (match) {
      browser = `${name} ${match[1]}`;
      break;
    }
  }

  return {
    device,
    browser,
    platform: userAgentPlatform,
    mobile: typeof navigator.userAgentData?.mobile === "boolean"
      ? navigator.userAgentData.mobile
      : isLikelyMobilePhone(),
    viewportWidth: Math.round(window.innerWidth || 0),
    viewportHeight: Math.round(window.innerHeight || 0),
    screenWidth: Math.round(window.screen?.width || 0),
    screenHeight: Math.round(window.screen?.height || 0),
    pixelRatio: Number(window.devicePixelRatio || 1),
    touchPoints: Number(navigator.maxTouchPoints || 0),
    language: navigator.language || "",
    userAgent,
  };
}

function getReportDatasetLines() {
  const metadata = state.data?.metadata || {};
  const fleet = detectFleetType() ? describeImportFleet(detectFleetType()) : "Unknown";
  return [
    `Fleet: ${fleet}`,
    `Bid period: ${getDisplayBidMonth(state.data, { month: "long", uppercase: false })}`,
    `Planning period: ${metadata.planningPeriod || "Unknown"}`,
    `Plan: ${metadata.plan || "Unknown"}`,
    `Generated: ${state.data?.generatedAt || "Unknown"}`,
    `App build: ${getAppBuildTag()}`,
    `URL: ${window.location.href}`,
  ];
}

function getReportScopeContext() {
  const fleet = detectFleetType();
  const metadata = state.data?.metadata || {};
  return {
    fleet: ["747", "777"].includes(fleet) ? fleet : "",
    fleetLabel: ["747", "777"].includes(fleet) ? describeImportFleet(fleet) : "",
    bidMonth: getDisplayBidMonth(state.data, { month: "long", uppercase: false }),
    planningPeriod: metadata.planningPeriod || "",
  };
}

function buildReportTitle(itemLabel, fleet = detectFleetType()) {
  const fleetLabel = ["747", "777"].includes(String(fleet)) ? describeImportFleet(String(fleet)) : "";
  return ["Report", fleetLabel, String(itemLabel || "").trim()].filter(Boolean).join(" ");
}

function buildLineReport(line, typeLabel = "Line") {
  const trips = getLineTripDetails(line);
  const remarks = trips.flatMap(getTripRemarks);
  return [
    "CrewBidPro parser report",
    "",
    `Report type: ${typeLabel}`,
    `Item: ${line.name || "Unknown"}`,
    ...getReportDatasetLines(),
    "",
    "Parsed values:",
    `Crew: ${line.crewComplement || "Unknown"}`,
    `Credit: ${line.credit || formatHours(line.creditMinutes) || "Unknown"}`,
    `Duty days: ${line.dutyDays ?? "Unknown"}`,
    `Days off: ${line.daysOff ?? "Unknown"}`,
    `Carry-in days: ${line.carryIn ?? "Unknown"}`,
    `Deadheads: ${line.deadheadCount ?? 0}`,
    `Reserve window: ${line.startDate && line.endDate ? `${line.startDate} to ${line.endDate}` : "None"}`,
    `Trips: ${joinReportValues(trips.map((trip) => trip.tripId))}`,
    `Airports: ${joinReportValues(line.airports || [])}`,
    `Route text: ${line.routeText || "None"}`,
    `Remarks: ${joinReportValues(remarks)}`,
    "",
    "What looks wrong?",
    "[User: describe the missing or incorrect parser result here.]",
  ].join("\n");
}

function buildLineReportSummary(line, typeLabel = "Line") {
  const trips = getLineTripDetails(line);
  return [
    `Type: ${typeLabel}`,
    `Line: ${line.name || "Unknown"}`,
    `Crew: ${line.crewComplement || "Unknown"}`,
    `Credit: ${line.credit || formatHours(line.creditMinutes) || "Unknown"}`,
    `Duty / Off: ${line.dutyDays ?? "?"} / ${line.daysOff ?? "?"}`,
    `Trips: ${joinReportValues(trips.map((trip) => trip.tripId))}`,
  ];
}

function buildTripReport(trip) {
  const remarks = getTripRemarks(trip);
  return [
    "CrewBidPro parser report",
    "",
    "Report type: Trip",
    `Item: Trip ${trip.tripId || "Unknown"}`,
    ...getReportDatasetLines(),
    "",
    "Parsed values:",
    `Operates: ${trip.operates || trip.displayDate || "Unknown"}`,
    `Crew: ${trip.crew || "Unknown"}`,
    `Credit: ${trip.credit || "Unknown"}`,
    `Block: ${trip.block || "Unknown"}`,
    `Duty days: ${trip.dutyDays || "Unknown"}`,
    `TAFB: ${trip.tafb || "Unknown"}`,
    `Deadheads: ${trip.deadheadCount ?? 0}`,
    `Airports: ${joinReportValues(trip.airports || [])}`,
    `Route text: ${trip.routeText || "None"}`,
    `Remarks: ${joinReportValues(remarks)}`,
    "",
    "What looks wrong?",
    "[User: describe the missing or incorrect parser result here.]",
  ].join("\n");
}

function buildTripReportSummary(trip) {
  return [
    "Type: Trip",
    `Trip: ${trip.tripId || "Unknown"}`,
    `Starts: ${trip.operates || trip.displayDate || "Unknown"}`,
    `Crew: ${trip.crew || "Unknown"}`,
    `Credit: ${trip.credit || "Unknown"}`,
    `Duty / DH: ${trip.dutyDays || "?"} / ${trip.deadheadCount ?? 0}`,
  ];
}

function buildTrainingReport(reserve) {
  const trainingWindow = getReserveTrainingWindow(reserve);
  const statuses = (reserve.reserveDays || [])
    .map((entry) => [entry.date, entry.status].filter(Boolean).join(": "))
    .filter(Boolean);
  return [
    "CrewBidPro parser report",
    "",
    "Report type: Training Line",
    `Item: ${reserve.name || "Unknown"}`,
    ...getReportDatasetLines(),
    "",
    "Parsed values:",
    `Crew: ${reserve.crewComplement || "Unknown"}`,
    `Credit: ${reserve.credit || "Unknown"}`,
    `Day count: ${reserve.dayCount ?? "Unknown"}`,
    `Training window: ${getReserveWindowLabel(reserve) || "Unknown"}`,
    `Training dates: ${renderInlineDateRange(trainingWindow.startDate, trainingWindow.endDate).replace(/<[^>]*>/g, "") || "Unknown"}`,
    `Pattern/statuses: ${joinReportValues(statuses)}`,
    `Airports: ${joinReportValues(reserve.airports || [])}`,
    "",
    "What looks wrong?",
    "[User: describe the missing or incorrect parser result here.]",
  ].join("\n");
}

function buildTrainingReportSummary(reserve) {
  const trainingWindow = getReserveTrainingWindow(reserve);
  return [
    "Type: Training Line",
    `Line: ${reserve.name || "Unknown"}`,
    `Crew: ${reserve.crewComplement || "Unknown"}`,
    `Credit: ${reserve.credit || "Unknown"}`,
    `Training window: ${renderInlineDateRange(trainingWindow.startDate, trainingWindow.endDate).replace(/<[^>]*>/g, "") || "Unknown"}`,
  ];
}

const getTripDeadheadRouteFlags = (trip) => {
  const routes = trip.routes || [];
  const lines = getTripLines(trip);
  const rawFlags = [];
  let searchFrom = 0;

  routes.forEach((route) => {
    const routeIndex = lines.findIndex((line, index) => index >= searchFrom && line === route.leg);
    if (routeIndex < 0) {
      rawFlags.push(null);
      return;
    }
    rawFlags.push(Boolean(routeIndex > 0 && /\bDH\b/.test(lines[routeIndex - 1])));
    searchFrom = routeIndex + 1;
  });

  const unmatchedDeadheadsByRoute = new Map();
  getTripDeadheads(trip).forEach((deadhead) => {
    if (!deadhead.route) return;
    unmatchedDeadheadsByRoute.set(
      deadhead.route,
      (unmatchedDeadheadsByRoute.get(deadhead.route) || 0) + 1,
    );
  });
  rawFlags.forEach((flag, index) => {
    if (!flag) return;
    const route = routes[index]?.leg || "";
    const remaining = unmatchedDeadheadsByRoute.get(route) || 0;
    if (remaining > 0) unmatchedDeadheadsByRoute.set(route, remaining - 1);
  });

  return rawFlags.map((flag, index) => {
    if (flag !== null) return flag;
    const route = routes[index]?.leg || "";
    const remaining = unmatchedDeadheadsByRoute.get(route) || 0;
    if (remaining < 1) return false;
    unmatchedDeadheadsByRoute.set(route, remaining - 1);
    return true;
  });
};

const dateGapDays = (fromDate, toDate) => {
  if (!fromDate || !toDate) return 0;
  return Math.round((getTimeValue(toDate) - getTimeValue(fromDate)) / DAY_MS);
};

const getTripRouteSegmentsByDate = (trip) => {
  const lines = getTripLines(trip);
  const routes = trip.routes || [];
  const segmentsByDate = new Map();
  const resolvedDates = buildTripResolvedDateMap(lines);
  let routeIndex = 0;

  lines.forEach((line, index) => {
    const route = getRouteFromLeg(line);
    const currentDate = findLatestResolvedDateBeforeIndex(resolvedDates, index - 1, trip.date || "");
    if (!route || !currentDate) return;
    const expectedRoute = routes[routeIndex];
    if (expectedRoute && expectedRoute.leg === route.leg) routeIndex += 1;
    const segments = segmentsByDate.get(currentDate) || [];
    segments.push(route);
    segmentsByDate.set(currentDate, segments);
  });

  return segmentsByDate;
};

const airportsForSegments = (segments) => {
  if (!segments?.length) return [];
  return [segments[0].from, ...segments.map((segment) => segment.to)];
};

const getLineRouteSegmentsByDate = (line) => {
  const trips = getLineTripDetails(line);
  const segmentsByDate = new Map();

  trips.forEach((trip) => {
    getTripRouteEntriesByDate(trip).forEach((entries, date) => {
      segmentsByDate.set(date, [...(segmentsByDate.get(date) || []), ...entries]);
    });
  });

  return segmentsByDate;
};

const getLineRouteRows = (line, { collapseReserveBlocks = true } = {}) => {
  const trips = getLineTripDetails(line);
  const segmentsByDate = getLineRouteSegmentsByDate(line);
  const datedTrips = trips.filter((trip) => trip.date);
  const splitBeforeDates = new Set();

  datedTrips.forEach((_, index) => {
    if (shouldShowSplitMarker(line, datedTrips, index) && datedTrips[index + 1]?.date) {
      splitBeforeDates.add(datedTrips[index + 1].date);
    }
  });

  const rows = [];
  let lastEndCity = "";

  const calendarEntries = line.calendar || [];
  for (let index = 0; index < calendarEntries.length; index += 1) {
    const entry = calendarEntries[index];
    const isReserve = entry.status === "RSV";
    if (splitBeforeDates.has(entry.date)) {
      rows.push({ split: true, rawDate: entry.date });
    }
    if (isReserve && collapseReserveBlocks) {
      let endIndex = index;
      while (
        calendarEntries[endIndex + 1]?.status === "RSV"
        && getTimeValue(calendarEntries[endIndex + 1].date) - getTimeValue(calendarEntries[endIndex].date) === DAY_MS
      ) {
        endIndex += 1;
      }
      const endEntry = calendarEntries[endIndex];
      rows.push({
        date: formatDateRange(entry.date, endEntry.date),
        rawDate: entry.date,
        start: "RSV",
        through: "-",
        end: "RSV",
        isStay: false,
        isReserve: true,
      });
      index = endIndex;
      continue;
    }
    if (isReserve) {
      rows.push({
        date: formatDate(entry.date),
        rawDate: entry.date,
        start: "RSV",
        through: "-",
        end: "RSV",
        isStay: false,
        isReserve: true,
      });
      continue;
    }
    const blocks = splitRouteEntriesByBreaks(segmentsByDate.get(entry.date) || []);
    if (!blocks.length) {
      let fallbackCity = lastEndCity || "";
      if (!fallbackCity) {
        const nextBlock = calendarEntries
          .slice(index + 1)
          .map((futureEntry) => splitRouteEntriesByBreaks(segmentsByDate.get(futureEntry.date) || [])[0])
          .find(Boolean);
        fallbackCity = nextBlock?.[0]?.from || "";
      }
      rows.push({
        date: formatDate(entry.date),
        rawDate: entry.date,
        start: fallbackCity,
        through: "-",
        end: fallbackCity,
        isStay: true,
        isReserve,
      });
      continue;
    }
    blocks.forEach((block) => {
      const airports = [block[0].from, ...block.map((segment) => segment.to)];
      const start = airports[0] || lastEndCity || "";
      const end = airports[airports.length - 1] || lastEndCity || start;
      const through = airports.length > 2 ? formatThroughAirports(block) : "";
      if (end) lastEndCity = end;
      rows.push({
        date: formatDate(entry.date),
        rawDate: entry.date,
        start,
        through,
        end,
        isStay: false,
        isReserve,
      });
    });
  }

  return rows;
};

const renderLineRoutePopup = (line) => {
  const rows = getLineRouteRows(line);
  return `
    <div class="line-route-popup">
      <div class="line-route-title">${line.name}</div>
      <div class="line-route-grid">
        <strong>Date</strong>
        <strong>Start</strong>
        <strong>Thru</strong>
        <strong>End</strong>
        ${rows.map((row) => row.split ? `
          <div class="line-route-split">SPLIT LINE</div>
        ` : `
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""} ${row.isReserve ? "is-reserve" : ""}">${row.date}</span>
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""} ${row.isReserve ? "is-reserve" : ""}">${row.start}</span>
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""} ${row.isReserve ? "is-reserve" : ""}">${row.through || "-"}</span>
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""} ${row.isReserve ? "is-reserve" : ""}">${row.end}</span>
        `).join("")}
      </div>
    </div>
  `;
};

const getLineFatigueScore = (line) => {
  const score = Number(line?.fatigue?.overallScore);
  return line?.fatigue?.available && Number.isInteger(score) && score >= 0 && score <= 100
    ? score
    : null;
};

const renderLineStartMethodHelp = () => `
  <div class="line-start-method-help">
    <section>
      <h3>What Line Start shows</h3>
      <p>Line Start is the published Show Time for the first flying duty on the line. It is not the first flight's departure time.</p>
    </section>
    <section>
      <h3>Zulu date and time</h3>
      <p>The date and time are shown in Zulu. When the Show Time falls on the prior Zulu day, CrewBidPro shows that earlier date so the midnight boundary is clear.</p>
    </section>
    <section>
      <h3>How sorting works</h3>
      <p>Earliest and Latest sort by the first Show Time's Zulu clock time. Lines with the same time are ordered by date, and a line without a published Show Time appears last.</p>
    </section>
  </div>
`;

const renderLineStartTimeChip = (line) => {
  if (!state.lineStartTimesVisible) return "";
  const firstShow = getLineFirstShowInfo(line);
  if (!firstShow) {
    return '<span class="line-start-time-chip is-unavailable"><span>First Show</span><strong>Unavailable</strong></span>';
  }
  const date = formatLineFirstShowDate(firstShow.showDate);
  const time = formatLineFirstShowTime(firstShow.showTime);
  return `
    <span
      class="line-start-time-chip"
      aria-label="${escapeHtml(`First Show ${date} at ${time.replace("Z", " Zulu")}`)}"
    ><span>First Show</span><strong>${escapeHtml(date)}</strong><strong>${escapeHtml(time)}</strong></span>
  `;
};

const renderFatigueMethodHelp = () => `
  <div class="fatigue-method-help">
    <section>
      <h3>What the number means</h3>
      <p>The Fatigue Score is a 0–100 comparison between published flying lines. Lower is less predicted fatigue; higher is more predicted fatigue.</p>
      <div class="fatigue-category-key" aria-label="Fatigue Score categories">
        <span>0–19 Minimal</span><span>20–39 Low</span><span>40–59 Moderate</span>
        <span>60–74 High</span><span>75–89 Very High</span><span>90–100 Extreme</span>
      </div>
    </section>
    <section>
      <h3>What CrewBidPro models</h3>
      <p>The calculation follows the whole rotation in sequence. It uses published Zulu timing to estimate sleep opportunity, restorative sleep, sleep debt, continuous wakefulness, biological-night exposure, circadian and time-zone disruption, recovery between duties, duty intensity, deadheads, ocean crossings, crew complement, possible in-flight rest, and fatigue during critical flight phases.</p>
    </section>
    <section>
      <h3>Scientific roots and practical assumptions</h3>
      <p>The model combines recognized sleep and circadian principles with the operational realities represented in Kalitta's published Trip Reports. When actual sleep information is unavailable, CrewBidPro estimates wake one hour before the published Show Time and the earliest practical hotel sleep opportunity two hours after Debriefing. Predicted sleep is placed within that window using sleep pressure and biological timing. The methodology is informed by Two-Process and Three-Process fatigue concepts, peer-reviewed pilot sleep studies, and guidance from NASA, the FAA, ICAO, and CASA. It is an original comparative model and does not reproduce a proprietary fatigue model.</p>
    </section>
    <section>
      <h3>How the line score is formed</h3>
      <p>The overall number is not simply the worst event or an average. It combines the peak fatigue-sensitive event, the worst sustained quarter of the rotation, time spent at elevated fatigue, repeated high-fatigue duties, and the recovery state near the end of the line.</p>
    </section>
    <p class="fatigue-disclaimer"><strong>Important:</strong> The score supports relative bid-line comparison. It does not determine fitness for duty, provide an exact physiological measurement, or replace an airline Fatigue Risk Management System.</p>
  </div>
`;

const safeFatigueColor = (value, fallback) => /^#[0-9a-f]{6}$/i.test(String(value || ""))
  ? String(value)
  : fallback;

const renderFatigueScoreChip = (line) => {
  if (!state.fatigueScoresVisible) return "";
  const score = getLineFatigueScore(line);
  const category = line?.fatigue?.category;
  if (score === null || !category?.label) return "";
  const background = safeFatigueColor(category.color, "#e5e7eb");
  const foreground = safeFatigueColor(category.textColor, "#172026");
  const label = `Fatigue ${score} – ${category.label}`;
  return `
    <button
      type="button"
      class="fatigue-score-chip"
      data-fatigue-line="${escapeHtml(line.name)}"
      style="--fatigue-color:${background};--fatigue-text:${foreground}"
      aria-label="${escapeHtml(`${label}. Show fatigue details for ${line.name}`)}"
      title="${escapeHtml(label)}"
    ><span>Fatigue</span><strong>${score}</strong></button>
  `;
};

const renderFatigueScorePopup = (line) => {
  const fatigue = line?.fatigue || {};
  const score = getLineFatigueScore(line);
  if (score === null) return "";
  const contributors = Array.isArray(fatigue.primaryContributors)
    ? fatigue.primaryContributors.slice(0, 2)
    : [];
  return `
    <div class="fatigue-score-popup">
      <div class="fatigue-score-popup-heading">
        <strong>${escapeHtml(line.name)} · Fatigue ${score}</strong>
        <span>${escapeHtml(fatigue.category?.label || "Predicted fatigue")}</span>
      </div>
      ${contributors.length ? `<p>Primary reasons: ${contributors.map((item) => escapeHtml(item.label || "")).join("; ")}.</p>` : ""}
      ${contributors[0]?.evidence ? `<p>${escapeHtml(contributors[0].evidence)}</p>` : ""}
      <small>Tap or click the score for the full breakdown.</small>
    </div>
  `;
};

const attachFatigueScoreInteractions = (root = document) => {
  root.querySelectorAll(".fatigue-score-chip").forEach((chip) => {
    const line = state.data?.lines?.find((entry) => entry.name === chip.dataset.fatigueLine);
    if (!line) return;
    const show = (event) => {
      event.stopPropagation();
      showHoverPopup(event, renderFatigueScorePopup(line));
    };
    chip.addEventListener("mouseenter", show);
    chip.addEventListener("mouseover", show);
    chip.addEventListener("focus", show);
    chip.addEventListener("mouseleave", hideHoverPopup);
    chip.addEventListener("blur", hideHoverPopup);
    chip.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
      openLineFatigueBreakdown(line);
    });
  });
};

const formatFatigueCalendarDate = (value) => {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return "";
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Number(match[2]) - 1];
  return month ? `${month} ${Number(match[3])}` : "";
};

const getFatigueDutyLabel = (item, fallbackIndex = 0) => {
  const modeledDay = Number(item?.dutyDay);
  const dutyDay = Number.isInteger(modeledDay) && modeledDay > 0 ? modeledDay : fallbackIndex + 1;
  const calendarDate = formatFatigueCalendarDate(item?.calendarDate);
  return {
    dutyDay,
    calendarDate,
    shortLabel: `Day ${dutyDay}`,
    fullLabel: `Day ${dutyDay}${calendarDate ? ` · ${calendarDate}` : ""}`,
  };
};

const renderFatigueProfileChart = (fatigue) => {
  const points = Array.isArray(fatigue?.dailyProfile?.points) ? fatigue.dailyProfile.points : [];
  if (!points.length) return '<p class="fatigue-empty">No daily fatigue profile is available.</p>';
  const accessibleSummary = points
    .map((point, index) => `${getFatigueDutyLabel(point, index).fullLabel}: ${Number(point.score) || 0}`)
    .join(", ");
  return `
    <div class="fatigue-profile-chart" role="img" aria-label="${escapeHtml(`Predicted daily fatigue profile. ${accessibleSummary}`)}">
      ${points.map((point, index) => {
        const score = Math.max(0, Math.min(100, Number(point.score) || 0));
        const dayLabel = getFatigueDutyLabel(point, index);
        return `
          <div class="fatigue-profile-point" title="${escapeHtml(`${dayLabel.fullLabel} · ${point.description || "Peak predicted fatigue"}`)} – Fatigue ${score}">
            <strong>${score}</strong>
            <span class="fatigue-profile-bar" style="--fatigue-height:${score}%"></span>
            <small><span>${escapeHtml(dayLabel.shortLabel)}</span>${dayLabel.calendarDate ? `<span>${escapeHtml(dayLabel.calendarDate)}</span>` : ""}</small>
          </div>
        `;
      }).join("")}
    </div>
  `;
};

const renderFatigueBreakdown = (line) => {
  const fatigue = line?.fatigue || {};
  const score = getLineFatigueScore(line);
  const category = fatigue.category || {};
  if (score === null) {
    return '<div class="fatigue-detail"><p>A fatigue comparison is not available for this line.</p></div>';
  }
  const background = safeFatigueColor(category.color, "#e5e7eb");
  const foreground = safeFatigueColor(category.textColor, "#172026");
  const contributors = Array.isArray(fatigue.primaryContributors) ? fatigue.primaryContributors : [];
  const events = Array.isArray(fatigue.highestFatigueEvents) ? fatigue.highestFatigueEvents : [];
  const end = fatigue.dailyProfile?.endOfRotation;
  const warnings = Array.isArray(fatigue.warnings) ? fatigue.warnings.filter(Boolean) : [];
  return `
    <div class="fatigue-detail">
      <section class="fatigue-detail-summary" style="--fatigue-color:${background};--fatigue-text:${foreground}">
        <div class="fatigue-detail-score"><span>Fatigue Score</span><strong>${score}</strong></div>
        <div><h3>${escapeHtml(category.label || "Predicted fatigue")}</h3><p>${escapeHtml(fatigue.scoreExplanation || "")}</p></div>
      </section>
      <section>
        <h3>Primary contributors</h3>
        ${contributors.length ? `<ul class="fatigue-contributor-list">${contributors.map((item) => `
          <li><strong>${escapeHtml(item.label || "Modeled contributor")}</strong><span>${escapeHtml(item.evidence || "")}</span></li>
        `).join("")}</ul>` : '<p class="fatigue-empty">No primary contributors were identified.</p>'}
      </section>
      <section>
        <div class="fatigue-section-heading"><h3>Fatigue profile</h3>${end ? `<span>End of rotation: ${escapeHtml(end.score)}</span>` : ""}</div>
        ${renderFatigueProfileChart(fatigue)}
      </section>
      <section>
        <h3>Highest predicted fatigue events</h3>
        ${events.length ? `<ol class="fatigue-event-list">${events.map((event, index) => `
          <li>
            <div><strong>${escapeHtml(getFatigueDutyLabel(event, index).fullLabel)} — ${escapeHtml(event.description || event.phase || "Event")}</strong><span>Fatigue ${escapeHtml(event.score)}</span></div>
            <p>${escapeHtml(event.explanation || "")}</p>
          </li>
        `).join("")}</ol>` : '<p class="fatigue-empty">No fatigue-sensitive events are available.</p>'}
      </section>
      ${warnings.length ? `<details class="fatigue-model-notes"><summary>Model notes</summary><ul>${warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}</ul></details>` : ""}
      <p class="fatigue-disclaimer"><strong>Important:</strong> ${escapeHtml(fatigue.disclaimer || "This score is for relative bid-line comparison only.")}</p>
    </div>
  `;
};

const openLineFatigueBreakdown = (line) => {
  openSupportModal(`${line.name} Fatigue Score`, "Predicted rotation fatigue", renderFatigueBreakdown(line));
};

const getTripCalendarDates = (trip) => {
  if (trip.lineDerivedCalendar?.length) return [...trip.lineDerivedCalendar];
  if (!trip.date) return [];
  const dutyDays = Number(trip.dutyDays);
  if (Number.isFinite(dutyDays) && dutyDays > 0) {
    return Array.from({ length: dutyDays }, (_, index) => addDays(trip.date, index));
  }
  const tripStartTime = getTimeValue(trip.date);
  return (trip.calendar?.length ? [...trip.calendar].sort() : [trip.date])
    .filter((date) => getTimeValue(date) >= tripStartTime);
};

const intersectsAvoidDates = (dates) => state.avoidDates.size && dates.some((date) => state.avoidDates.has(date));

const getLineTripDates = (line) => {
  const lineCalendarDates = (line.calendar || [])
    .filter((entry) => entry?.date && entry.status !== "RSV")
    .map((entry) => entry.date);
  if (lineCalendarDates.length) return unique(lineCalendarDates);
  return unique(getLineTripDetails(line).flatMap(getTripCalendarDates));
};

const getLineReserveDates = (line) => (line.reserveDays || [])
  .filter((entry) => (entry.status || "RSV") === "RSV")
  .map((entry) => entry.date)
  .filter(Boolean);

const getContiguousDateBlocks = (dates) => {
  const sortedDates = unique(dates).sort();
  const blocks = [];
  sortedDates.forEach((date) => {
    const current = blocks[blocks.length - 1];
    if (current && getTimeValue(date) - getTimeValue(current.end) === DAY_MS) {
      current.end = date;
      current.dates.push(date);
      return;
    }
    blocks.push({ start: date, end: date, dates: [date] });
  });
  return blocks;
};

const getLineReserveBlocks = (line) => getContiguousDateBlocks(getLineReserveDates(line));

const isAdjacentToTripDate = (date, tripDates) => {
  const tripDateSet = new Set(tripDates);
  return tripDateSet.has(addDays(date, -1)) || tripDateSet.has(addDays(date, 1));
};

const hasUnscheduledGapBetweenDates = (line, dateA, dateB) => {
  const startValue = getTimeValue(dateA);
  const endValue = getTimeValue(dateB);
  const gapDays = Math.abs(endValue - startValue) / DAY_MS - 1;
  if (gapDays < 1) return false;
  const activeDates = new Set((line.calendar || [])
    .filter((entry) => entry.marker)
    .map((entry) => entry.date));
  const start = startValue < endValue ? dateA : dateB;
  for (let cursor = addDays(start, 1); getTimeValue(cursor) < Math.max(startValue, endValue); cursor = addDays(cursor, 1)) {
    if (activeDates.has(cursor)) return false;
  }
  return true;
};

const isFlexReserveLine = (line) => {
  if (!isMixedReserveLine(line)) return false;
  const tripDates = getLineTripDates(line);
  return getLineReserveBlocks(line).some((block) => {
    const touchesFlying = block.dates.some((reserveDate) => isAdjacentToTripDate(reserveDate, tripDates));
    if (touchesFlying) return false;
    return block.dates.some((reserveDate) => tripDates.some((tripDate) => (
      hasUnscheduledGapBetweenDates(line, reserveDate, tripDate)
    )));
  });
};

const hasHardAvoidDateConflict = (line) => intersectsAvoidDates(getLineTripDates(line));

const hasReserveAvoidDateConflict = (line) => intersectsAvoidDates(getLineReserveDates(line));

const renderTripRoutePopup = (trip) => {
  const segmentsByDate = getTripRouteEntriesByDate(trip);
  const rows = [];
  let lastEndCity = "";
  const tripStartDate = trip.displayDate || trip.date;

  getTripCalendarDates(trip).forEach((date) => {
    const entries = segmentsByDate.get(date) || [];
    const blocks = splitRouteEntriesByBreaks(entries);
    if (!blocks.length) {
      rows.push({
        date: formatDate(date),
        start: lastEndCity || "",
        through: "",
        end: lastEndCity || "",
        isStay: true,
      });
      return;
    }
    blocks.forEach((block) => {
      const airports = [block[0].from, ...block.map((entry) => entry.to)];
      const start = airports[0] || lastEndCity || "";
      const end = airports[airports.length - 1] || lastEndCity || start;
      const through = airports.length > 2 ? formatThroughAirports(block) : "";
      if (end) lastEndCity = end;
      rows.push({
        date: formatDate(date),
        start,
        through,
        end,
        isStay: false,
      });
    });
  });

  return `
    <div class="line-route-popup">
      <div class="line-route-title">${trip.tripId} - ${formatDate(tripStartDate)} (${trip.dutyDays || "?"})</div>
      <div class="line-route-grid">
        <strong>Date</strong>
        <strong>Start</strong>
        <strong>Thru</strong>
        <strong>End</strong>
        ${rows.map((row) => `
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""}">${row.date}</span>
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""}">${row.start}</span>
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""}">${row.through || "-"}</span>
          <span class="line-route-cell ${row.isStay ? "is-stay" : ""}">${row.end}</span>
        `).join("")}
      </div>
    </div>
  `;
};

const renderLineReservePopup = (line, blockIndex = null) => {
  const blocks = getLineReserveBlocks(line);
  const block = blockIndex === null ? null : blocks[blockIndex];
  const reserveDays = block?.dates?.length
    ? (line.reserveDays || []).filter((day) => block.dates.includes(day.date))
    : (line.reserveDays || []);
  return `
    <div class="line-route-popup">
      <div class="line-route-title">${line.name} Reserve</div>
      <div class="line-route-grid reserve-route-grid">
        <strong>Date</strong>
        <strong>Status</strong>
        ${reserveDays.map((day) => `
          <span class="line-route-cell is-reserve">${formatDate(day.date)}</span>
          <span class="line-route-cell is-reserve">RSV</span>
        `).join("")}
      </div>
    </div>
  `;
};

const getLineCarryInMinutes = (line) => {
  if (!(getLineCarryInDays(line) > 0)) return 0;
  const tripCreditMinutes = getLineTripDetails(line).reduce((sum, trip) => sum + (trip.creditMinutes || 0), 0);
  return Math.max(0, tripCreditMinutes - (line.creditMinutes || 0));
};

const getLineDisplayMonthRange = (line) => {
  const match = String(line?.bidMonth || "").match(/^(\d{4})-(\d{2})$/);
  if (!match) return getDisplayMonthRange();
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  return {
    startDate: new Date(Date.UTC(year, month, 1)).toISOString().slice(0, 10),
    endDate: new Date(Date.UTC(year, month + 1, 0)).toISOString().slice(0, 10),
  };
};

const getLineCarryInDates = (line) => {
  const { startDate, endDate } = getLineDisplayMonthRange(line);
  if (!startDate || !endDate) return [];
  return unique((line.calendar || [])
    .map((entry) => entry?.date)
    .filter((date) => date && date >= "1900-01-01" && (date < startDate || date > endDate)))
    .sort();
};

const deriveTripDailyCreditAnalysis = (trip) => {
  const lines = getTripLines(trip);
  const resolvedDates = buildTripResolvedDateMap(lines);
  const daily = new Map();
  let currentDate = "";

  lines.forEach((line, index) => {
    if (resolvedDates.has(index)) {
      currentDate = resolvedDates.get(index);
      return;
    }
    if (!currentDate || !getRouteFromLeg(line) || index + 3 >= lines.length) return;

    const start = lines[index + 1];
    const end = lines[index + 2];
    const block = lines[index + 3];
    const values = daily.get(currentDate) || { blockMinutes: 0, transportMinutes: 0 };
    if (isDurationToken(block)) {
      values.blockMinutes += durationTokenToMinutes(block);
      daily.set(currentDate, values);
      return;
    }
    if (block !== "-") return;
    const transportMinutes = elapsedMinutes(start, end);
    if (transportMinutes === null) return;
    values.transportMinutes += transportMinutes;
    daily.set(currentDate, values);
  });

  const entries = [...daily.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([date, values]) => ({
      date,
      blockMinutes: values.blockMinutes,
      transportMinutes: values.transportMinutes,
      creditMinutes: values.blockMinutes + Math.floor(values.transportMinutes / 2),
    }));
  const calculatedMinutes = entries.reduce((sum, entry) => sum + entry.creditMinutes, 0);
  const publishedMinutes = Number(trip.creditMinutes);
  return {
    entries,
    calculatedMinutes,
    publishedMinutes,
    reconciled: entries.length > 0
      && Number.isFinite(publishedMinutes)
      && calculatedMinutes === publishedMinutes,
  };
};

const getTripDailyCreditAnalysis = (trip) => {
  if (Object.prototype.hasOwnProperty.call(trip, "dailyCreditReconciled")) {
    const entries = (trip.dailyCredits || [])
      .filter((entry) => entry?.date && Number.isFinite(Number(entry.creditMinutes)))
      .map((entry) => ({
        date: entry.date,
        blockMinutes: Number(entry.blockMinutes || 0),
        transportMinutes: Number(entry.transportMinutes || 0),
        creditMinutes: Number(entry.creditMinutes),
      }));
    const calculatedMinutes = entries.reduce((sum, entry) => sum + entry.creditMinutes, 0);
    const publishedMinutes = Number(trip.creditMinutes);
    return {
      entries,
      calculatedMinutes,
      publishedMinutes,
      reconciled: trip.dailyCreditReconciled === true
        && entries.length > 0
        && Number.isFinite(publishedMinutes)
        && calculatedMinutes === publishedMinutes,
    };
  }
  return deriveTripDailyCreditAnalysis(trip);
};

const getLineCarryInDailyCreditAnalysis = (line) => {
  const dates = getLineCarryInDates(line);
  if (!dates.length) return { entries: [], calculatedMinutes: 0, reconciled: false };
  const carryDates = new Set(dates);
  const creditByDate = new Map(dates.map((date) => [date, 0]));
  const tripAnalyses = getLineTripDetails(line).map(getTripDailyCreditAnalysis);

  tripAnalyses.forEach((analysis) => {
    analysis.entries.forEach((entry) => {
      if (!carryDates.has(entry.date)) return;
      creditByDate.set(entry.date, (creditByDate.get(entry.date) || 0) + entry.creditMinutes);
    });
  });

  const entries = dates.map((date) => ({
    date,
    key: date,
    label: formatDate(date),
    minutes: creditByDate.get(date) || 0,
  }));
  const calculatedMinutes = entries.reduce((sum, entry) => sum + entry.minutes, 0);
  return {
    entries,
    calculatedMinutes,
    reconciled: tripAnalyses.length > 0
      && tripAnalyses.every((analysis) => analysis.reconciled)
      && calculatedMinutes === getLineCarryInMinutes(line),
  };
};

const getMoneyLineCarryBasisAnalysis = (line) => {
  const carryInDates = getLineCarryInDates(line);
  if (!carryInDates.length) {
    return { rankable: true, reasonCode: "", entries: [], totalHalfMinutes: 0 };
  }

  const carryInCreditAnalysis = getLineCarryInDailyCreditAnalysis(line);
  if (!carryInCreditAnalysis.reconciled) {
    return { rankable: false, reasonCode: "daily_credit_unreconciled", entries: [], totalHalfMinutes: null };
  }

  const carryDateSet = new Set(carryInDates);
  const componentsByDate = new Map(carryInDates.map((date) => [date, {
    blockMinutes: 0,
    deadheadMinutes: 0,
  }]));

  getLineTripDetails(line).map(getTripDailyCreditAnalysis).forEach((analysis) => {
    analysis.entries.forEach((entry) => {
      if (!carryDateSet.has(entry.date)) return;
      const components = componentsByDate.get(entry.date);
      components.blockMinutes += Number(entry.blockMinutes || 0);
    });
  });

  let explicitDeadheadsVerified = true;
  getLineDeadheads(line).forEach((deadhead) => {
    if (!carryDateSet.has(deadhead?.date)) return;
    if (deadhead.durationMinutes === null || deadhead.durationMinutes === undefined || deadhead.durationMinutes === "") {
      explicitDeadheadsVerified = false;
      return;
    }
    const durationMinutes = Number(deadhead.durationMinutes);
    if (!Number.isFinite(durationMinutes)) {
      explicitDeadheadsVerified = false;
      return;
    }
    componentsByDate.get(deadhead.date).deadheadMinutes += durationMinutes;
  });
  if (!explicitDeadheadsVerified) {
    return { rankable: false, reasonCode: "missing_deadhead_duration", entries: [], totalHalfMinutes: null };
  }

  const entries = carryInDates.map((date) => {
    const components = componentsByDate.get(date);
    const calculatedHalfMinutes = (components.blockMinutes * 3) + components.deadheadMinutes;
    return {
      date,
      blockMinutes: components.blockMinutes,
      deadheadMinutes: components.deadheadMinutes,
      halfMinutes: components.blockMinutes > 0
        ? calculatedHalfMinutes
        : Math.max(MONEYLINE_DAILY_MINIMUM_HALF_MINUTES, calculatedHalfMinutes),
    };
  });
  return {
    rankable: true,
    reasonCode: "",
    entries,
    totalHalfMinutes: entries.reduce((sum, entry) => sum + entry.halfMinutes, 0),
  };
};

const getMoneyLineRegularDailyCreditAnalysis = (line) => {
  const { startDate, endDate } = getLineDisplayMonthRange(line);
  const publishedMinutes = Number(line?.creditMinutes);
  if (!startDate || !endDate || !Number.isFinite(publishedMinutes)) {
    return { entries: [], calculatedMinutes: 0, publishedMinutes, reconciled: false };
  }

  const tripAnalyses = getLineTripDetails(line).map(getTripDailyCreditAnalysis);
  const creditByDate = new Map();
  tripAnalyses.forEach((analysis) => {
    analysis.entries.forEach((entry) => {
      if (!entry.date || entry.date < startDate || entry.date > endDate) return;
      creditByDate.set(entry.date, (creditByDate.get(entry.date) || 0) + Number(entry.creditMinutes || 0));
    });
  });
  const entries = [...creditByDate.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([date, creditMinutes]) => ({ date, creditMinutes }));
  const calculatedMinutes = entries.reduce((sum, entry) => sum + entry.creditMinutes, 0);
  return {
    entries,
    calculatedMinutes,
    publishedMinutes,
    reconciled: tripAnalyses.length > 0
      && tripAnalyses.every((analysis) => analysis.reconciled)
      && calculatedMinutes === publishedMinutes,
  };
};

const getMoneyLineRegularCreditBasisAnalysis = (line) => {
  const publishedMinutes = Number(line?.creditMinutes);
  if (!Number.isFinite(publishedMinutes)) {
    return { entries: [], totalHalfMinutes: null, reconciled: false, fallback: false };
  }
  const totalHalfMinutes = Math.max(publishedMinutes, MINIMUM_GUARANTEE_MINUTES) * 2;
  const dailyAnalysis = getMoneyLineRegularDailyCreditAnalysis(line);
  if (dailyAnalysis.reconciled && dailyAnalysis.entries.length && publishedMinutes > 0) {
    let assignedHalfMinutes = 0;
    const entries = dailyAnalysis.entries.map((entry, index) => {
      const isLast = index === dailyAnalysis.entries.length - 1;
      const halfMinutes = isLast
        ? totalHalfMinutes - assignedHalfMinutes
        : totalHalfMinutes * (entry.creditMinutes / publishedMinutes);
      assignedHalfMinutes += halfMinutes;
      return { ...entry, halfMinutes };
    });
    return { entries, totalHalfMinutes, reconciled: true, fallback: false };
  }

  const { startDate, endDate } = getLineDisplayMonthRange(line);
  const fallbackDates = dailyAnalysis.entries.map((entry) => entry.date);
  getLineTripDetails(line).forEach((trip) => {
    if (trip?.date && trip.date >= startDate && trip.date <= endDate) fallbackDates.push(trip.date);
  });
  const valuationDate = fallbackDates.filter(Boolean).sort().at(-1) || endDate;
  return {
    entries: valuationDate ? [{ date: valuationDate, halfMinutes: totalHalfMinutes }] : [],
    totalHalfMinutes,
    reconciled: false,
    fallback: true,
  };
};

const getMoneyLineSortAnalysis = (line) => {
  const publishedCreditMinutes = Number(line?.creditMinutes);
  if (!Number.isFinite(publishedCreditMinutes)) {
    return {
      rankable: false,
      reasonCode: "missing_published_credit",
      baseHalfMinutes: null,
      opportunityHalfMinutes: null,
      valueHalfMinutes: null,
    };
  }

  const baseHalfMinutes = Math.max(publishedCreditMinutes, MINIMUM_GUARANTEE_MINUTES) * 2;
  const carryInDates = getLineCarryInDates(line);
  if (!carryInDates.length) {
    return {
      rankable: true,
      reasonCode: "",
      baseHalfMinutes,
      opportunityHalfMinutes: 0,
      valueHalfMinutes: baseHalfMinutes,
    };
  }

  const carryBasisAnalysis = getMoneyLineCarryBasisAnalysis(line);
  if (!carryBasisAnalysis.rankable) {
    return {
      rankable: false,
      reasonCode: carryBasisAnalysis.reasonCode,
      baseHalfMinutes,
      opportunityHalfMinutes: null,
      valueHalfMinutes: null,
    };
  }
  const opportunityHalfMinutes = carryBasisAnalysis.totalHalfMinutes;
  return {
    rankable: true,
    reasonCode: "",
    baseHalfMinutes,
    opportunityHalfMinutes,
    valueHalfMinutes: baseHalfMinutes + opportunityHalfMinutes,
  };
};

const getMoneyLineLongevityStep = (longevityDate, calculationDate = new Date()) => {
  const match = String(longevityDate || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match || Number.isNaN(calculationDate?.getTime?.())) return null;
  const [, yearText, monthText, dayText] = match;
  const startYear = Number(yearText);
  const startMonth = Number(monthText);
  const startDay = Number(dayText);
  const currentYear = calculationDate.getFullYear();
  const currentMonth = calculationDate.getMonth() + 1;
  const currentDay = calculationDate.getDate();
  let completedYears = currentYear - startYear;
  if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
    completedYears -= 1;
  }
  return Math.max(1, Math.min(12, completedYears + 1));
};

const getMoneyLineRateContext = (calculationDate = new Date()) => {
  const context = state.moneyLine.context;
  if (!context || context.rateTableVersion !== MONEYLINE_RATE_TABLE_VERSION) return null;
  const rates = MONEYLINE_RATES[context.seatClass];
  const longevityStep = getMoneyLineLongevityStep(context.longevityDate, calculationDate);
  if (!rates || !longevityStep) return null;
  return {
    ...context,
    longevityStep,
    hourlyRate: rates[longevityStep - 1],
  };
};

const getMoneyLineRateContextForIsoDate = (date) => {
  const match = String(date || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const [, yearText, monthText, dayText] = match;
  return getMoneyLineRateContext(new Date(
    Number(yearText),
    Number(monthText) - 1,
    Number(dayText),
    12,
  ));
};

const moneyLineCentsForHalfMinutes = (halfMinutes, hourlyRate) => {
  if (!Number.isFinite(halfMinutes) || !Number.isFinite(hourlyRate)) return null;
  return Math.round((halfMinutes / 120) * hourlyRate * 100);
};

const formatMoneyLineHalfMinutes = (halfMinutes) => {
  if (!Number.isFinite(halfMinutes)) return "";
  const totalSeconds = Math.round(halfMinutes * 30);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}:${String(minutes).padStart(2, "0")}${seconds ? `:${String(seconds).padStart(2, "0")}` : ""}`;
};

const formatMoneyLineRate = (rateContext) => (
  rateContext
    ? `${rateContext.seatClass} Year ${rateContext.longevityStep} · $${rateContext.hourlyRate.toFixed(2)}/hr`
    : "Rate unavailable"
);

const getMoneyLineRateDisclosure = (entries) => {
  const datedEntries = (entries || []).filter((entry) => entry?.rateContext && entry?.date);
  if (!datedEntries.length) return { label: "", title: "" };
  const uniqueRates = [...new Map(datedEntries.map((entry) => {
    const context = entry.rateContext;
    return [`${context.seatClass}|${context.longevityStep}|${context.hourlyRate}`, context];
  })).values()];
  const labels = uniqueRates.map(formatMoneyLineRate);
  const title = datedEntries
    .map((entry) => `${formatDate(entry.date)}: ${formatMoneyLineRate(entry.rateContext)}`)
    .join("; ");
  if (uniqueRates.length === 1) return { label: labels[0], title };
  const seatClasses = unique([...uniqueRates.map((context) => context.seatClass)]).join("/");
  const steps = uniqueRates.map((context) => context.longevityStep).sort((left, right) => left - right);
  const rates = uniqueRates.map((context) => context.hourlyRate).sort((left, right) => left - right);
  return {
    label: `${seatClasses} Years ${steps[0]}–${steps.at(-1)} · $${rates[0].toFixed(2)}–$${rates.at(-1).toFixed(2)}/hr`,
    title,
  };
};

const getMoneyLineDollarAnalysis = (line, calculationDate = new Date()) => {
  const rateContext = getMoneyLineRateContext(calculationDate);
  if (!state.moneyLine.enabled || !rateContext) {
    return { available: false, reasonCode: "moneyline_context_unavailable" };
  }
  const pchAnalysis = getMoneyLineSortAnalysis(line);
  const regularCreditBasisAnalysis = getMoneyLineRegularCreditBasisAnalysis(line);
  const creditEntries = regularCreditBasisAnalysis.entries.map((entry) => {
    const entryRateContext = getMoneyLineRateContextForIsoDate(entry.date);
    return {
      ...entry,
      rateContext: entryRateContext,
      cents: entryRateContext
        ? moneyLineCentsForHalfMinutes(entry.halfMinutes, entryRateContext.hourlyRate)
        : null,
    };
  });
  const creditRatesAvailable = creditEntries.length > 0
    && creditEntries.every((entry) => Number.isFinite(entry.cents));
  const creditCents = creditRatesAvailable
    ? creditEntries.reduce((sum, entry) => sum + entry.cents, 0)
    : null;
  const carryBasisAnalysis = pchAnalysis.rankable ? getMoneyLineCarryBasisAnalysis(line) : null;
  const carryEntries = (carryBasisAnalysis?.entries || []).map((entry) => {
    const entryRateContext = getMoneyLineRateContextForIsoDate(entry.date);
    return {
      ...entry,
      rateContext: entryRateContext,
      cents: entryRateContext
        ? moneyLineCentsForHalfMinutes(entry.halfMinutes, entryRateContext.hourlyRate)
        : null,
    };
  });
  const carryRatesAvailable = carryEntries.every((entry) => Number.isFinite(entry.cents));
  const carryCents = pchAnalysis.rankable && carryRatesAvailable
    ? carryEntries.reduce((sum, entry) => sum + entry.cents, 0)
    : null;
  return {
    available: Number.isFinite(creditCents),
    fullyReconciled: pchAnalysis.rankable,
    reasonCode: pchAnalysis.reasonCode || "",
    creditCents,
    carryCents,
    lineValueCents: creditCents === null || carryCents === null ? null : creditCents + carryCents,
    rateContext,
    creditEntries,
    carryEntries,
    regularCreditBasisAnalysis,
    pchAnalysis,
  };
};

const formatMoneyLineDollars = (cents) => Number.isFinite(cents)
  ? new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100)
  : "Estimate unavailable";

const renderMoneyLineAmount = (
  cents,
  {
    label = "",
    provisional = false,
    unavailable = false,
    emphasis = false,
    detail = "",
    detailTitle = "",
  } = {},
) => `
  <span class="moneyline-dollar ${unavailable || !Number.isFinite(cents) ? "is-unavailable" : ""} ${emphasis ? "is-total" : ""}">
    ${label ? `<span>${escapeHtml(label)}</span>` : ""}
    <strong>${unavailable ? "Estimate unavailable" : formatMoneyLineDollars(cents)}</strong>
    ${detail ? `<small${detailTitle ? ` title="${escapeHtml(detailTitle)}"` : ""}>${escapeHtml(detail)}</small>` : ""}
    ${provisional ? '<small>Provisional estimate</small>' : ""}
  </span>
`;

const renderMoneyLineCredit = (line) => {
  const analysis = getMoneyLineDollarAnalysis(line);
  if (!analysis.available) return "";
  const disclosure = getMoneyLineRateDisclosure(analysis.creditEntries);
  return renderMoneyLineAmount(analysis.creditCents, {
    label: "Credit gross",
    provisional: Boolean(analysis.rateContext?.provisional),
    detail: disclosure.label,
    detailTitle: disclosure.title,
  });
};

const renderMoneyLineCarry = (line) => {
  const analysis = getMoneyLineDollarAnalysis(line);
  if (!analysis.available) return "";
  if (!analysis.fullyReconciled) scheduleMoneyLineDiagnostic(line, analysis);
  const disclosure = getMoneyLineRateDisclosure(analysis.carryEntries);
  return renderMoneyLineAmount(analysis.carryCents, {
    label: "Carry-In value (Est.)",
    provisional: Boolean(analysis.rateContext?.provisional),
    unavailable: !analysis.fullyReconciled,
    detail: disclosure.label,
    detailTitle: disclosure.title,
  });
};

const renderMoneyLineValue = (line) => {
  const analysis = getMoneyLineDollarAnalysis(line);
  if (!analysis.available) return "";
  if (!analysis.fullyReconciled) scheduleMoneyLineDiagnostic(line, analysis);
  const disclosure = getMoneyLineRateDisclosure([
    ...analysis.creditEntries,
    ...analysis.carryEntries,
  ]);
  return renderMoneyLineAmount(analysis.lineValueCents, {
    label: "Line Value (Est.)",
    provisional: Boolean(analysis.rateContext?.provisional),
    unavailable: !analysis.fullyReconciled,
    emphasis: true,
    detail: disclosure.label,
    detailTitle: disclosure.title,
  });
};

function getMoneyLineDiagnosticPayload(line, analysis) {
  const identity = getCurrentBidSelectionIdentity() || {};
  const trips = getLineTripDetails(line);
  const tripAnalyses = trips.map(getTripDailyCreditAnalysis);
  const deadheads = getLineDeadheads(line);
  const parserVersion = String(state.data?.metadata?.parserVersion || MONEYLINE_DIAGNOSTIC_PARSER_VERSION);
  const tripIds = trips.map((trip) => String(trip.tripId || "")).filter(Boolean).sort();
  const suppliedPackageChecksum = String(
    state.data?.metadata?.packageChecksum
    || state.data?.metadata?.checksum
    || state.data?.metadata?.sourceChecksum
    || "",
  );
  const checksumSource = JSON.stringify({
    fleet: detectFleetType(state.data) || "",
    metadata: state.data?.metadata || {},
    lines: (state.data?.lines || []).map((entry) => ({
      name: entry.name,
      creditMinutes: entry.creditMinutes,
      carryInMinutes: getLineCarryInMinutes(entry),
      carryInDates: getLineCarryInDates(entry),
      trips: getLineTripDetails(entry).map((trip) => ({
        tripId: trip.tripId,
        dailyCredits: trip.dailyCredits,
      })),
      deadheads: getLineDeadheads(entry).map((deadhead) => ({
        date: deadhead.date,
        durationMinutes: deadhead.durationMinutes,
      })),
    })),
  });
  let checksumHash = 2166136261;
  for (let index = 0; index < checksumSource.length; index += 1) {
    checksumHash ^= checksumSource.charCodeAt(index);
    checksumHash = Math.imul(checksumHash, 16777619);
  }
  const packageChecksum = suppliedPackageChecksum || `fnv1a-${(checksumHash >>> 0).toString(16).padStart(8, "0")}`;
  const packageRevision = String(
    state.currentSavedPackage?.lastSavedAt
    || state.availableGlobalPackage?.package?.updatedAt
    || state.availableGlobalPackage?.package?.publishedAt
    || "",
  );
  const payload = {
    packageKey: identity.key || "",
    packageChecksum,
    fleet: identity.fleet || detectFleetType(state.data) || "",
    bidMonth: identity.bidMonth || getDisplayBidMonth(state.data) || "",
    packageRevision,
    lineName: line.name,
    reasonCode: analysis.reasonCode || "carry_in_unreconciled",
    parserVersion,
    tripIds,
    publishedCreditMinutes: Number.isFinite(Number(line.creditMinutes)) ? Number(line.creditMinutes) : null,
    carryInMinutes: getLineCarryInMinutes(line),
    carryInDates: getLineCarryInDates(line),
    blockMinutes: tripAnalyses.reduce((sum, tripAnalysis) => sum + tripAnalysis.entries.reduce((entrySum, entry) => entrySum + Number(entry.blockMinutes || 0), 0), 0),
    transportMinutes: tripAnalyses.reduce((sum, tripAnalysis) => sum + tripAnalysis.entries.reduce((entrySum, entry) => entrySum + Number(entry.transportMinutes || 0), 0), 0),
    deadheadMinutes: deadheads.reduce((sum, deadhead) => sum + (Number(deadhead.durationMinutes) || 0), 0),
    appVersion: APP_BUILD_VERSION,
  };
  return {
    key: [packageChecksum || identity.key || getDisplayBidMonth(state.data), line.name, payload.reasonCode, parserVersion, tripIds.join(",")].join("|"),
    payload,
  };
}

async function postMoneyLineDiagnostic(record) {
  if (!record?.payload || navigator.onLine === false) return false;
  const headers = await getSupabaseAuthHeaders();
  if (!hasWorkspaceAuthHeaders(headers)) return false;
  const response = await fetch("/api/moneyline-diagnostic", {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(record.payload),
    cache: "no-store",
  });
  return response.ok;
}

function scheduleMoneyLineDiagnostic(line, analysis) {
  if (!analysis?.reasonCode || analysis.reasonCode === "moneyline_context_unavailable") return;
  const record = getMoneyLineDiagnosticPayload(line, analysis);
  if (state.moneyLine.diagnosticKeys.has(record.key)) return;
  state.moneyLine.diagnosticKeys.add(record.key);
  Promise.resolve()
    .then(async () => {
      if (await postMoneyLineDiagnostic(record)) {
        await removeOfflineMoneyLineDiagnostic(record.key);
        return;
      }
      await queueOfflineMoneyLineDiagnostic(record);
    })
    .catch(() => queueOfflineMoneyLineDiagnostic(record));
}

async function syncOfflineMoneyLineDiagnostics() {
  if (navigator.onLine === false) return;
  const records = await loadOfflineMoneyLineDiagnostics();
  for (const record of records) {
    if (await postMoneyLineDiagnostic(record)) {
      await removeOfflineMoneyLineDiagnostic(record.key);
    }
  }
}

const MONEYLINE_DISCLOSURE = "MoneyLine™ distributes regular line credit, including the 64-hour floor, across scheduled duty dates and applies your LONG rate in effect on each date. Otherwise similar lines can differ across an anniversary. It is purely speculative. Choose your own adventure. Buyer beware.";

function renderMoneyLineSortNotice(sort, unresolvedCount = 0) {
  const notice = $("moneyLineSortNotice");
  if (!notice) return;
  if (sort !== "moneyLineDesc" && !state.moneyLine.enabled) {
    notice.hidden = true;
    notice.textContent = "";
    notice.classList.remove("is-warning");
    return;
  }
  notice.hidden = false;
  const hasUnresolvedSort = sort === "moneyLineDesc" && unresolvedCount > 0;
  notice.classList.toggle("is-warning", hasUnresolvedSort);
  notice.textContent = hasUnresolvedSort
    ? `MoneyLine™ could not verify Carry-In details for ${unresolvedCount} ${unresolvedCount === 1 ? "line" : "lines"}. No MoneyLine™ ranking was applied.`
    : MONEYLINE_DISCLOSURE;
}

function renderSelectionMoneyLineNotice() {
  const notice = $("selectionMoneyLineNotice");
  if (!notice) return;
  notice.hidden = !state.moneyLine.enabled;
  notice.textContent = state.moneyLine.enabled ? MONEYLINE_DISCLOSURE : "";
}

const renderCarryInPopup = (line) => {
  const dailyCreditAnalysis = getLineCarryInDailyCreditAnalysis(line);
  const dailyCredits = dailyCreditAnalysis.entries;
  if (!dailyCredits.length) return "";
  const creditByDate = new Map(dailyCredits
    .filter((entry) => entry.date)
    .map((entry) => [entry.date, entry]));
  const carryInDates = new Set(creditByDate.keys());
  const showMoneyLineBasis = state.moneyLine.enabled;
  const moneyLineBasisAnalysis = showMoneyLineBasis ? getMoneyLineCarryBasisAnalysis(line) : null;
  const moneyLineDollarAnalysis = showMoneyLineBasis ? getMoneyLineDollarAnalysis(line) : null;
  const moneyLineBasisByDate = new Map((moneyLineBasisAnalysis?.entries || [])
    .map((entry) => [entry.date, entry]));
  const moneyLineDollarsByDate = new Map((moneyLineDollarAnalysis?.carryEntries || [])
    .map((entry) => [entry.date, entry]));
  const scheduleRows = getLineRouteRows(line, { collapseReserveBlocks: false })
    .filter((row) => row.rawDate && carryInDates.has(row.rawDate));
  const scheduledDates = new Set(scheduleRows.filter((row) => !row.split).map((row) => row.rawDate));
  dailyCredits.forEach((entry) => {
    if (entry.date && scheduledDates.has(entry.date)) return;
    scheduleRows.push({
      rawDate: entry.key,
      date: entry.label,
      start: "",
      through: "-",
      end: "",
      isStay: true,
      fallbackCredit: entry,
    });
  });
  const creditedDays = new Set();
  const renderedRows = scheduleRows.map((row) => {
    if (row.split) return '<div class="line-route-split">SPLIT LINE</div>';
    const credit = row.fallbackCredit || creditByDate.get(row.rawDate);
    const showCredit = credit && !creditedDays.has(credit.key);
    if (showCredit) creditedDays.add(credit.key);
    const tone = `${row.isStay ? "is-stay" : ""} ${row.isReserve ? "is-reserve" : ""}`.trim();
    const creditLabel = showCredit
      ? (dailyCreditAnalysis.reconciled && credit.minutes > 0 ? formatHours(credit.minutes) : "—")
      : "";
    const moneyLineBasis = moneyLineBasisByDate.get(row.rawDate);
    const moneyLineDollars = moneyLineDollarsByDate.get(row.rawDate);
    const moneyLineBasisLabel = showCredit
      ? (moneyLineBasisAnalysis?.rankable && moneyLineBasis
        ? formatMoneyLineHalfMinutes(moneyLineBasis.halfMinutes)
        : "—")
      : "";
    const moneyLineBasisMarkup = moneyLineBasisLabel && moneyLineBasisLabel !== "—"
      ? `<span>${moneyLineBasisLabel}</span><small>${escapeHtml(formatMoneyLineRate(moneyLineDollars?.rateContext))}</small>`
      : moneyLineBasisLabel;
    const routeStops = [row.start, row.through && row.through !== "-" ? row.through : "", row.end]
      .filter(Boolean);
    const routeMarkup = routeStops.length
      ? routeStops.map((stop, index) => `${index ? '<span class="carry-in-route-arrow">→</span>' : ""}<span>${escapeHtml(stop)}</span>`).join("")
      : "—";
    return `
      <span class="line-route-cell ${tone}">${escapeHtml(row.date || "")}</span>
      <span class="line-route-cell carry-in-route-path ${tone}">${routeMarkup}</span>
      <span class="line-route-cell carry-in-route-credit ${tone}">${creditLabel}</span>
      ${showMoneyLineBasis ? `<span class="line-route-cell carry-in-route-moneyline ${tone}">${moneyLineBasisMarkup}</span>` : ""}
    `;
  }).join("");
  return `
    <div class="carry-in-popup">
      <div class="line-route-title">${escapeHtml(line.name)} Carry-In Breakdown</div>
      <div class="line-route-grid carry-in-route-grid ${showMoneyLineBasis ? "has-moneyline-basis" : ""}">
        <strong>Date</strong>
        <strong>Route</strong>
        <strong>Actual PCH</strong>
        ${showMoneyLineBasis ? '<strong title="MoneyLine basis and duty-date rate">Basis / Rate</strong>' : ""}
        ${renderedRows}
        <span class="line-route-cell carry-in-route-total-label">Total</span>
        <span class="line-route-cell carry-in-route-total-credit">${formatHours(getLineCarryInMinutes(line))}</span>
        ${showMoneyLineBasis ? `<span class="line-route-cell carry-in-route-total-moneyline">${moneyLineBasisAnalysis?.rankable ? formatMoneyLineHalfMinutes(moneyLineBasisAnalysis.totalHalfMinutes) : "—"}</span>` : ""}
      </div>
      ${showMoneyLineBasis ? `
        <div class="carry-in-moneyline-summary">
          <span>MoneyLine Carry-In estimate</span>
          <strong>${moneyLineDollarAnalysis?.fullyReconciled ? formatMoneyLineDollars(moneyLineDollarAnalysis.carryCents) : "Estimate unavailable"}</strong>
        </div>
        <div class="carry-in-credit-note">Actual PCH is published transition credit. MoneyLine values worked flying dates at 1.5× operating block with no 4:00 minimum; the 4:00 minimum applies only when a date has no operating block. MoneyLine applies the LONG rate for each duty date, so dates across an anniversary can value differently. It does not change Actual PCH.</div>
      ` : ""}
      ${dailyCreditAnalysis.reconciled ? "" : `
        <div class="carry-in-credit-note">Daily breakdown unavailable. Reconciled Carry-In total shown.</div>
      `}
    </div>
  `;
};

const getLineCarryInDays = (line) => {
  const explicitCarryIn = Number(line.carryIn || 0);
  const { startDate, endDate } = getLineDisplayMonthRange(line);
  if (!startDate || !endDate) return explicitCarryIn;
  const outsideBidMonthDays = (line.calendar || [])
    .filter((entry) => entry?.date && entry.date >= "1900-01-01" && (entry.date < startDate || entry.date > endDate))
    .length;
  return Math.max(explicitCarryIn, outsideBidMonthDays);
};

const renderCarryInCell = (line, { showMoneyLine = false } = {}) => {
  const carryInDays = getLineCarryInDays(line);
  const carryInMinutes = getLineCarryInMinutes(line);
  const moneyLineMarkup = showMoneyLine ? renderMoneyLineCarry(line) : "";
  if (!(carryInDays > 0)) return `<span class="carry-in-days">0</span>${moneyLineMarkup}`;
  if (!canUseLineResultInsights()) {
    return `
      <span class="carry-in-days">${carryInDays}</span>
      <span class="paid-detail-inline">Full Access</span>
      ${moneyLineMarkup}
    `;
  }
  return `
    <span class="carry-in-days">${carryInDays}</span>
    <span class="carry-in-hours">Actual PCH ${formatHours(carryInMinutes)}</span>
    ${moneyLineMarkup}
  `;
};

const getTripCarryInDays = (trip) => {
  const explicitCarryIn = Number(trip.carryIn || 0);
  const { startDate, endDate } = getDisplayMonthRange();
  if (!startDate || !endDate) return Number.isFinite(explicitCarryIn) ? explicitCarryIn : 0;
  const outsideBidMonthDays = getTripCalendar(trip)
    .filter((date) => date && date >= "1900-01-01" && (date < startDate || date > endDate))
    .length;
  return Math.max(Number.isFinite(explicitCarryIn) ? explicitCarryIn : 0, outsideBidMonthDays);
};

const renderTripCarryInCell = (trip) => {
  const carryInDays = getTripCarryInDays(trip);
  return carryInDays > 0 ? String(carryInDays) : "0";
};

const getLineDeadheadMinutes = (line) => getLineDeadheads(line)
  .reduce((sum, deadhead) => sum + (deadhead.durationMinutes || 0), 0);

const renderDeadheadCell = (line) => {
  const count = Number(line.deadheadCount || 0);
  if (!count) return "0";
  if (!canUseLineResultInsights()) {
    return `
      <span class="carry-in-days">${count}</span>
      <span class="paid-detail-inline">Full Access</span>
    `;
  }
  return `
    <span class="carry-in-days">${count}</span>
    <span class="carry-in-hours">(${formatHours(getLineDeadheadMinutes(line))})</span>
  `;
};

const renderSelectionAvoidConflictPopup = (line, kind = "line") => {
  const info = getSelectionAvoidConflictInfo({ data: line, kind });
  if (!info.hasConflict) return "";
  const groups = [
    { label: "Flying", dates: info.flyingDates },
    { label: "Reserve", dates: info.reserveDates },
    { label: "Training", dates: info.trainingDates },
  ].filter((group) => group.dates.length);
  return `
    <div class="selection-conflict-popup">
      <div class="selection-conflict-title">${escapeHtml(line.name || "Selection")} avoid-date conflict</div>
      <p>This selected bid overlaps one or more avoided days. Remove the avoid day or remove the line from your bid order.</p>
      <div class="selection-conflict-groups">
        ${groups.map((group) => `
          <div class="selection-conflict-group">
            <strong>${group.label}</strong>
            <span>${group.dates.map(formatDate).join(", ")}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
};

const formatCrewCell = (value) => {
  const match = String(value || "").trim().match(/^(\d+\s+CA)\s+(\d+\s+FO)$/i);
  if (!match) return escapeHtml(String(value || ""));
  return `<span class="crew-count">${escapeHtml(match[1])}</span><br><span class="crew-count">${escapeHtml(match[2])}</span>`;
};

const formatTripCrewCell = (value) => {
  const text = String(value || "").trim();
  const slashMatch = text.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (slashMatch) {
    return `${escapeHtml(`${slashMatch[1]} CA`)}<br>${escapeHtml(`${slashMatch[2]} FO`)}`;
  }
  return formatCrewCell(text);
};

const renderDeadheadPopup = (title, deadheads, includeTrip = false) => `
  <div class="deadhead-popup">
    <div class="deadhead-popup-title">${title}</div>
    <div class="deadhead-popup-list">
      ${deadheads.map((dh) => `
        <div class="deadhead-popup-row">
          ${includeTrip ? `<span class="deadhead-popup-trip">${dh.tripId || ""}</span>` : ""}
          <span>${dh.date ? formatDate(dh.date) : ""}</span>
          <span>${dh.route || ""}</span>
          <span>${dh.type === "commercial" ? "COMM" : "K4"}</span>
          <strong>${dh.duration || ""}</strong>
        </div>
      `).join("")}
    </div>
  </div>
`;

const renderPaidDetailPlaceholder = (label = "Information") => `
  <div class="paid-detail-placeholder">
    <strong>Free Limited</strong>
    <span>${escapeHtml(label)} available with Full Access.</span>
  </div>
`;

const renderPaidDetailPopup = (label = "This information") => `
  <div class="deadhead-popup paid-detail-popup">
    <div class="deadhead-popup-title">Free Limited</div>
    <p>${escapeHtml(label)} is available with Full Access.</p>
  </div>
`;

const getAirportName = (airport) => AIRPORT_NAMES[airport] || "Airport name not available";

const renderAirportPopup = (airport) => `
  <div class="airport-popup">
    <strong>${escapeHtml(airport)}</strong>
    <span>${escapeHtml(getAirportName(airport))}</span>
  </div>
`;

const getRemarkLines = (remark) => String(remark || "")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const isCrewResultRemark = (remark) => /^(?:PROJECTED|AWARDED) /.test(String(remark || ""));

const shouldHideRemark = (remark) => (
  (state.remarkPillVisibility.hideLongStay && String(remark || "").startsWith("LONG STAY"))
  || (state.remarkPillVisibility.hideCrewResults && isCrewResultRemark(remark))
);

const getVisibleRemarks = (remarks) => (Array.isArray(remarks) ? remarks : [])
  .filter((remark) => !shouldHideRemark(remark));

const getTripRemarks = (trip) => getTripChronologicalRemarks(trip);

const getMiniRemarkLabel = (remark) => {
  const lines = getRemarkLines(remark);
  const heading = lines[0] || "Remark";
  if (heading.startsWith("LONG STAY")) {
    return lines.find((line) => line.startsWith("@ ")) || lines[1] || heading;
  }
  if (heading.startsWith("MIN REST")) {
    const restLine = lines.find((line) => /^Rest @/i.test(line));
    const restMatch = restLine?.match(/^Rest @\s*([A-Z]{3}):\s*(.+)$/i);
    if (restMatch) return `@ ${restMatch[1].toUpperCase()} - ${restMatch[2]}`;
    const routeMatch = heading.match(/:\s*([A-Z]{3}(?:\s+[A-Z]{3})*)$/);
    return routeMatch ? `@ ${routeMatch[1]}` : "MIN REST";
  }
  return heading;
};

const renderRemarks = (trips) => {
  const remarks = getVisibleRemarks(trips.flatMap(getTripChronologicalRemarks));
  if (!remarks.length) return "";
  return `<div class="remarks-list">${remarks.map(renderRemarkItem).join("")}</div>`;
};

const renderLineRemarksByTrip = (trips) => {
  const groups = trips
    .map((trip) => ({
      trip,
      remarks: getVisibleRemarks(getTripRemarks(trip)),
    }))
    .filter((group) => group.remarks.length);
  if (!groups.length) return "";
  return `<div class="remarks-list remarks-list-by-trip">${groups.map(({ trip, remarks }) => `
    <div class="remark-trip-row">
      <span class="remark-trip-label">Trip: ${escapeHtml(trip.tripId || "Trip")}</span>
      <div class="remark-trip-items">${remarks.map(renderRemarkItem).join("")}</div>
    </div>
  `).join("")}</div>`;
};

const renderRemarkFullLine = (line, index) => {
  const escaped = escapeHtml(line);
  if (index === 0 && line.startsWith("LONG STAY")) {
    return `<span class="remark-prefix"><strong>LONG STAY</strong>${escaped.slice("LONG STAY".length)}</span>`;
  }
  if (index === 0 && line.startsWith("MIN REST")) {
    return `<span class="remark-prefix"><strong>MIN REST</strong>${escaped.slice("MIN REST".length)}</span>`;
  }
  return `<span class="${index === 0 ? "remark-prefix" : "remark-detail"}">${escaped}</span>`;
};

const renderRemarkFullItem = (remark) => {
  if (shouldHideRemark(remark)) return "";
  const isLongStay = remark.startsWith("LONG STAY");
  const isMinRest = remark.startsWith("MIN REST");
  const isBidAvoid = remark.startsWith("BID AVOID");
  const isBuddyBid = remark.startsWith("BUDDY BID");
  const isSeniorityPressure = remark.startsWith("SENIORITY PRESSURE");
  const isUnlikelyToHold = remark.startsWith("UNLIKELY TO HOLD");
  const isProjectedCrew = isCrewResultRemark(remark);
  const lines = getRemarkLines(remark);
  if (isMinRest || lines.length > 1) {
    const isMultiline = lines.length > 1;
    return `
      <div class="remark-item remark-item-full ${isMinRest ? "is-min-rest" : ""} ${isLongStay ? "is-long-stay" : ""} ${isBidAvoid ? "is-bid-avoid" : ""} ${isBuddyBid ? "is-buddy-bid" : ""} ${isSeniorityPressure ? "is-seniority-pressure" : ""} ${isUnlikelyToHold ? "is-unlikely-to-hold" : ""} ${isProjectedCrew ? "is-projected-crew" : ""} ${isMultiline ? "is-multiline" : ""}">
        ${lines.map(renderRemarkFullLine).join("")}
      </div>
    `;
  }
  return `<div class="remark-item remark-item-full ${isLongStay ? "is-long-stay" : ""} ${isBidAvoid ? "is-bid-avoid" : ""} ${isBuddyBid ? "is-buddy-bid" : ""} ${isSeniorityPressure ? "is-seniority-pressure" : ""} ${isUnlikelyToHold ? "is-unlikely-to-hold" : ""} ${isProjectedCrew ? "is-projected-crew" : ""}">${escapeHtml(remark)}</div>`;
};

const renderRemarkPopup = (remark) => {
  const bidAvoidMatch = String(remark || "").match(/^BID AVOID - (.+?) - #(\d+)$/);
  if (bidAvoidMatch) {
    const [, pilotName, choice] = bidAvoidMatch;
    return `
      <div class="remark-popup">
        ${renderRemarkFullItem(remark)}
        <p class="remark-popup-note">#${escapeHtml(choice)} means ${escapeHtml(pilotName)} placed this line ${escapeHtml(formatChoiceOrdinal(choice))} on their current bid list. A later choice may leave more room for you, but it is not a guarantee.</p>
      </div>
    `;
  }
  return `<div class="remark-popup">${renderRemarkFullItem(remark)}</div>`;
};

const renderRemarkItem = (remark) => {
  if (shouldHideRemark(remark)) return "";
  const classes = ["remark-item", "remark-mini-pill"];
  if (remark.startsWith("LONG STAY")) classes.push("is-long-stay");
  if (remark.startsWith("MIN REST")) classes.push("is-min-rest");
  if (remark.startsWith("BID AVOID")) classes.push("is-bid-avoid");
  if (remark.startsWith("BUDDY BID")) classes.push("is-buddy-bid");
  if (remark.startsWith("SENIORITY PRESSURE")) classes.push("is-seniority-pressure");
  if (remark.startsWith("UNLIKELY TO HOLD")) classes.push("is-unlikely-to-hold");
  if (isCrewResultRemark(remark)) classes.push("is-projected-crew");
  return `<span class="${classes.join(" ")}" tabindex="0" data-remark-full="${escapeHtml(remark)}">${escapeHtml(getMiniRemarkLabel(remark))}</span>`;
};

const renderTripStack = (line, trips, { showMoneyLine = false } = {}) => {
  const tripItems = trips.map((trip, index) => ({
    type: "trip",
    date: trip.displayDate || trip.date || "",
    endDate: getLineTripEndDate(line, trips, index),
    markup: `
      <div class="trip-chip" data-line-name="${escapeHtml(line.name)}" data-trip-index="${index}">${trip.tripId} - ${formatDate(trip.displayDate || trip.date)} (${trip.dutyDays || "?"})</div>
    `,
  }));
  const reserveItems = getLineReserveBlocks(line).map((block, index) => ({
    type: "reserve",
    date: block.start,
    endDate: block.end,
    markup: renderLineReserveChip(line, block, index),
  }));
  const items = [...tripItems, ...reserveItems]
    .filter((item) => item.markup)
    .sort((a, b) => getTimeValue(a.date) - getTimeValue(b.date) || (a.type === "trip" ? -1 : 1));
  const markup = items.map((item, index) => {
    const nextItem = items[index + 1];
    const hasPriorFlying = items.slice(0, index + 1).some((entry) => entry.type === "trip");
    const hasGap = item.endDate
      && hasPriorFlying
      && nextItem?.type === "trip"
      && nextItem?.date
      && getTimeValue(nextItem.date) - getTimeValue(item.endDate) > DAY_MS;
    return `${item.markup}${hasGap ? '<div class="split-line-marker">SPLIT LINE</div>' : ""}`;
  }).join("");
  return `<div class="trip-stack">${markup}${showMoneyLine ? renderMoneyLineValue(line) : ""}</div>`;
};

const isReserveBlockFlex = (line, block) => {
  if (!isMixedReserveLine(line)) return false;
  const tripDates = getLineTripDates(line);
  if (block.dates.some((reserveDate) => isAdjacentToTripDate(reserveDate, tripDates))) return false;
  return block.dates.some((reserveDate) => tripDates.some((tripDate) => (
    hasUnscheduledGapBetweenDates(line, reserveDate, tripDate)
  )));
};

const renderLineReserveChip = (line, block, blockIndex = 0) => {
  if (!block?.dates?.length) return "";
  const isFlex = isReserveBlockFlex(line, block);
  const label = isFlex ? "FLEX RSV" : "RESERVE";
  const conflict = isFlex && intersectsAvoidDates(block.dates) && !hasHardAvoidDateConflict(line);
  return `<div class="trip-chip reserve-chip ${isFlex ? "is-flex-reserve" : ""} ${conflict ? "has-soft-conflict" : ""}" data-line-reserve="${escapeHtml(line.name)}" data-reserve-block="${blockIndex}">${label} - ${formatDate(block.start)} (${block.dates.length})${conflict ? " CONFLICT" : ""}</div>`;
};

const renderAirportRoute = (trip, { muted = false } = {}) => `<div class="airport-route ${muted ? "is-muted-airport-route" : ""}">${routeAirportSequence(trip).map((entry) => `
  <span class="airport-hop">
    <span class="airport-stop ${!muted && entry.minimumRest ? "is-min-rest" : ""} ${!muted && entry.longStay ? "is-long-stay" : ""} ${!muted && entry.deadhead ? "is-deadhead" : ""}" data-airport="${escapeHtml(entry.airport)}" aria-label="${escapeHtml(`${entry.airport} - ${getAirportName(entry.airport)}`)}">${entry.airport}</span>${!muted && entry.longSitAfter ? '<span class="sit-break" aria-label="Stay or sit before next segment"></span>' : ""}
  </span>
`).join("")}</div>`;

const renderLineAirportRoutes = (line, trips) => {
  const muted = !canUseLineResultInsights();
  const tripItems = trips.map((trip, index) => ({
    type: "trip",
    date: trip.displayDate || trip.date || "",
    endDate: getLineTripEndDate(line, trips, index),
    markup: renderAirportRoute(trip, { muted }),
  }));
  const reserveItems = getLineReserveBlocks(line).map((block, index) => ({
    type: "reserve",
    date: block.start,
    endDate: block.end,
    markup: `<div class="airport-route-reserve-marker">${escapeHtml(renderLineReserveChip(line, block, index).replace(/<[^>]*>/g, ""))}</div>`,
  }));
  const items = [...tripItems, ...reserveItems]
    .filter((item) => item.markup)
    .sort((a, b) => getTimeValue(a.date) - getTimeValue(b.date) || (a.type === "trip" ? -1 : 1));
  const markup = items.map((item, index) => {
    const nextItem = items[index + 1];
    const hasPriorFlying = items.slice(0, index + 1).some((entry) => entry.type === "trip");
    const hasGap = item.endDate
      && hasPriorFlying
      && nextItem?.type === "trip"
      && nextItem?.date
      && getTimeValue(nextItem.date) - getTimeValue(item.endDate) > DAY_MS;
    return `${item.markup}${!muted && hasGap ? '<div class="split-line-marker airport-split-marker">SPLIT LINE</div>' : ""}`;
  }).join("");
  return `<div class="airport-route-stack">${markup}</div>`;
};

const renderRouteTokens = (routes, showTrailingSeparator = false) => routes.map((route, index) => {
  const hasSeparator = index < routes.length - 1 || (showTrailingSeparator && index === routes.length - 1);
  return `
  <span class="route-token">${escapeHtml(route.leg)}${hasSeparator ? '<span class="route-separator" aria-hidden="true"> |</span>' : ""}</span>
`;
}).join("");

const renderMutedTripRouteSummary = (trip) => (
  `<div class="route-segments route-segments-muted">${(trip.airports || getTripAirports(trip)).map((airport, index, airports) => `
    <span class="route-token">${escapeHtml(airport)}${index < airports.length - 1 ? '<span class="route-separator" aria-hidden="true"> |</span>' : ""}</span>
  `).join("")}</div>`
);

const renderBalancedTripRouteSummary = (trip) => {
  if (!canUseTripResultInsights()) return renderMutedTripRouteSummary(trip);
  const routes = trip.routes || [];
  if (!routes.length) return escapeHtml(trip.routeText || "");
  const splitIndex = Math.ceil(routes.length / 2);
  const rows = [routes.slice(0, splitIndex), routes.slice(splitIndex)].filter((row) => row.length);
  return `<div class="route-segments route-segments-balanced">${rows.map((row, index) => `
    <div class="route-line">${renderRouteTokens(row, index < rows.length - 1)}</div>
  `).join("")}</div>`;
};

const renderTripRouteSummary = (trip) => {
  if (!canUseTripResultInsights()) return renderMutedTripRouteSummary(trip);
  const routes = trip.routes || [];
  if (!routes.length) return escapeHtml(trip.routeText || "");
  return `<div class="route-segments">${renderRouteTokens(routes)}</div>`;
};

function getAirportAvoidRegions(allAirports) {
  const availableAirports = new Set(allAirports);
  const uncategorized = unique(allAirports.filter((airport) => !ALL_REGION_AIRPORTS.has(airport)));
  const regions = AIRPORT_REGION_GROUPS.map((region) => ({
    ...region,
    groups: region.groups.map((group) => ({
      ...group,
      airports: group.airports.filter((airport) => availableAirports.has(airport)),
    })),
  }));
  if (uncategorized.length) {
    regions.push({
      region: "New / Unclassified Airports",
      groups: [{
        label: "Available in this bid package",
        airports: uncategorized,
      }],
    });
  }
  return { regions, uncategorized };
}

function renderAirportAvoidButtons(rootId, selectedCities, allAirports) {
  const { regions, uncategorized } = getAirportAvoidRegions(allAirports);
  if (uncategorized.length) {
    console.warn(`Unclassified airport codes in ${rootId}: ${uncategorized.join(", ")}`);
  }

  const renderAirportButton = (airport) => `
    <button
      type="button"
      class="airport-btn ${selectedCities.has(airport) ? "is-active" : ""} ${hasPreferenceAirportConflict([airport]) || hasPreferenceCountryConflict([airport]) || hasPreferenceRegionConflict([airport]) || hasPreferenceSpecialConflict([airport]) ? "is-preference-blocked" : ""}"
      data-city="${airport}"
      data-airport="${airport}"
      aria-label="${escapeHtml(`${airport} - ${getAirportName(airport)}`)}"
    >${airport}</button>
  `;

  const renderAirportGroup = (group) => {
    if (!group.airports.length) return "";
    return `
      <div class="airport-subgroup ${group.area ? `airport-area-${group.area}` : ""}">
        <h4>${group.label}</h4>
        <div class="airport-buttons">
          ${group.airports.map(renderAirportButton).join("")}
        </div>
      </div>
    `;
  };

  $(rootId).innerHTML = `
    <div class="airport-regions">
      ${regions.map((region) => {
        const renderedGroups = region.groups.map(renderAirportGroup).filter(Boolean);
        return `
        <section class="airport-region ${region.layout === "quadrants" && renderedGroups.length ? "is-quadrants" : ""}">
          <h3>${region.region}</h3>
          ${renderedGroups.length ? `<div class="airport-subgroups">${renderedGroups.join("")}</div>` : ""}
        </section>
      `;
      }).join("")}
    </div>
  `;

  attachAirportPopups($(rootId));
}

function renderLineAvoidButtons() {
  const allAirports = unique(state.data.lines.flatMap((line) => line.airports || []));
  renderAirportAvoidButtons("lineAvoid", state.lineAvoidCities, allAirports);

  $("lineAvoid").closest(".city-avoid-panel").querySelectorAll("[data-city]").forEach((button) => {
    button.onclick = async () => {
      const city = button.dataset.city;
      if (!city) {
        const confirmed = await confirmDestructiveAction({
          title: "Reset avoided cities?",
          message: "This will clear all city-avoid selections.",
          confirmLabel: "Yes, reset",
        });
        if (!confirmed) return;
        state.lineAvoidCities.clear();
      } else if (state.lineAvoidCities.has(city)) {
        state.lineAvoidCities.delete(city);
      } else {
        state.lineAvoidCities.add(city);
      }
      renderLineAvoidButtons();
      renderTripAvoidButtons();
      renderLines();
      updateActiveFilterHighlights();
    };
  });
}

function renderTripAvoidButtons() {
  const allAirports = unique(state.data.trips.flatMap((trip) => trip.airports || []));
  renderAirportAvoidButtons("tripAvoid", state.lineAvoidCities, allAirports);

  $("tripAvoid").closest(".city-avoid-panel").querySelectorAll("[data-city]").forEach((button) => {
    button.onclick = async () => {
      const city = button.dataset.city;
      if (!city) {
        const confirmed = await confirmDestructiveAction({
          title: "Reset avoided cities?",
          message: "This will clear all city-avoid selections.",
          confirmLabel: "Yes, reset",
        });
        if (!confirmed) return;
        state.lineAvoidCities.clear();
      } else if (state.lineAvoidCities.has(city)) {
        state.lineAvoidCities.delete(city);
      } else {
        state.lineAvoidCities.add(city);
      }
      renderLineAvoidButtons();
      renderTripAvoidButtons();
      renderTrips();
      updateActiveFilterHighlights();
    };
  });
}

const reserveStatusLabel = (value) => ({
  GTR: "Ground Training",
  SIM: "Simulator",
  RSV: "Reserve",
}[value] || value || "Reserve");

const formatDateRange = (startDate, endDate) => {
  if (!startDate) return "-";
  if (!endDate || startDate === endDate) return formatDate(startDate);
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const getReserveWindowLabel = (reserve) => formatDateRange(reserve.startDate, reserve.endDate);

const renderStackedDateRange = (startDate, endDate) => {
  if (!startDate && !endDate) return "-";
  if (!endDate || startDate === endDate) return `<span class="date-stack"><span>${formatDate(startDate)}</span></span>`;
  return `
    <span class="date-stack">
      <span>${formatDate(startDate)}</span>
      <span>${formatDate(endDate)}</span>
    </span>
  `;
};

const renderInlineDateRange = (startDate, endDate) => {
  if (!startDate && !endDate) return "-";
  if (!endDate || startDate === endDate) return `<span class="date-inline">${formatDate(startDate)}</span>`;
  return `<span class="date-inline">${formatDate(startDate)} - ${formatDate(endDate)}</span>`;
};

const hasReserveDays = (line) => (line.reserveDays || []).some((entry) => (entry.status || "RSV") === "RSV");

const isMixedReserveLine = (line) => hasReserveDays(line) && !String(line.name || "").startsWith("Q");

const toMixedReserveLine = (line) => {
  const reserveDays = (line.reserveDays || []).filter((entry) => (entry.status || "RSV") === "RSV");
  return {
    ...line,
    reserveDays,
    startDate: reserveDays[0]?.date || line.startDate,
    endDate: reserveDays[reserveDays.length - 1]?.date || line.endDate,
    dayCount: reserveDays.length,
    isMixedReserveLine: true,
    isTraining: false,
  };
};

const getReserveOnlyLines = () => (state.data?.reserves || []).filter((reserve) => !reserve.isTraining);

const isPureReserveLine = (reserve) => !reserve?.isMixedReserveLine && String(reserve?.name || "").trim().toUpperCase().startsWith("R");

const isFlexReserveDisplayLine = (reserve) => Boolean(reserve?.isMixedReserveLine || reserve?.isFlexReserve);

const getReserveTrainingWindow = (reserve) => {
  const trainingDays = (reserve.reserveDays || []).filter((entry) => entry.status === "GTR" || entry.status === "SIM");
  if (!trainingDays.length) return { startDate: "", endDate: "" };
  return {
    startDate: trainingDays[0].date,
    endDate: trainingDays[trainingDays.length - 1].date,
  };
};

const getTrainingPlacement = (reserve) => {
  const trainingWindow = getReserveTrainingWindow(reserve);
  if (!reserve.startDate || !reserve.endDate || !trainingWindow.startDate || !trainingWindow.endDate) return "";
  const lineStart = getTimeValue(reserve.startDate);
  const lineEnd = getTimeValue(reserve.endDate);
  const trainingStart = getTimeValue(trainingWindow.startDate);
  const trainingEnd = getTimeValue(trainingWindow.endDate);
  if (![lineStart, lineEnd, trainingStart, trainingEnd].every(Number.isFinite)) return "";
  const lineMidpoint = (lineStart + lineEnd) / 2;
  const trainingMidpoint = (trainingStart + trainingEnd) / 2;
  return trainingMidpoint <= lineMidpoint ? "front" : "back";
};

const getTrainingLineWindowBadges = (reserve) => {
  const trainingWindow = getReserveTrainingWindow(reserve);
  if (!trainingWindow.startDate || !trainingWindow.endDate) return [];

  const reserveBlocks = getContiguousDateBlocks(getLineReserveDates(reserve));
  const hasDetachedReserveBeforeTraining = reserveBlocks.some((block) => (
    getTimeValue(block.end) < getTimeValue(trainingWindow.startDate)
    && getTimeValue(trainingWindow.startDate) - getTimeValue(block.end) > DAY_MS
  ));
  const hasReserveAfterTraining = reserveBlocks.some((block) => getTimeValue(block.start) > getTimeValue(trainingWindow.endDate));

  if (hasDetachedReserveBeforeTraining && hasReserveAfterTraining) {
    return [{ label: "FLEX RSV", tone: "flex" }];
  }

  const activeBlocks = getContiguousDateBlocks((reserve.reserveDays || [])
    .map((entry) => entry.date)
    .filter(Boolean));
  if (activeBlocks.length > 1) {
    return [{ label: "SPLIT LINE", tone: "split" }];
  }

  return [];
};

const renderTrainingWindowCell = (reserve) => {
  const badges = getTrainingLineWindowBadges(reserve);
  const badgeMarkup = badges.length
    ? `<div class="training-window-badges">${badges.map((badge) => (
      `<span class="training-window-badge is-${badge.tone}">${escapeHtml(badge.label)}</span>`
    )).join("")}</div>`
    : "";
  return `
    <div class="training-window-cell">
      ${renderInlineDateRange(reserve.startDate, reserve.endDate)}
      ${badgeMarkup}
    </div>
  `;
};

const getDisplayMonthRange = () => {
  const start = state.data?.metadata?.start;
  if (!start) return { startDate: "", endDate: "" };
  const match = String(start).match(/^(\d{4})-(\d{2})-\d{2}$/);
  if (!match) return { startDate: "", endDate: "" };
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const startDate = new Date(Date.UTC(year, month, 1)).toISOString().slice(0, 10);
  const endDate = new Date(Date.UTC(year, month + 1, 0)).toISOString().slice(0, 10);
  return { startDate, endDate };
};

const renderTrainingMiniCalendar = (reserve) => {
  const { startDate, endDate } = getDisplayMonthRange();
  if (!startDate || !endDate) return "";

  const statusByDate = new Map((reserve.reserveDays || []).map((entry) => [entry.date, entry.status || "RSV"]));
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  const cells = [];

  for (let i = 0; i < start.getDay(); i += 1) {
    cells.push('<span class="training-mini-day is-empty" aria-hidden="true"></span>');
  }

  for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const iso = cursor.toISOString().slice(0, 10);
    const status = statusByDate.get(iso) || "";
    const tone = !status
      ? "is-idle"
      : status === "GTR" || status === "SIM"
      ? "is-training"
      : status === "RSV"
        ? "is-reserve"
        : "is-other";
    cells.push(`<span class="training-mini-day ${tone}" aria-label="${escapeHtml(status ? `${iso} ${reserveStatusLabel(status)}` : `${iso} No activity`) }"></span>`);
  }

  while (cells.length % 7 !== 0) {
    cells.push('<span class="training-mini-day is-empty" aria-hidden="true"></span>');
  }

  return `<div class="training-mini-calendar" aria-hidden="true">${cells.join("")}</div>`;
};

const renderReserveSchedulePopup = (reserve, allowedStatuses = []) => {
  const visibleDays = (reserve.reserveDays || []).filter((entry) => (
    !allowedStatuses.length || allowedStatuses.includes(entry.status || "RSV")
  ));
  const titleSuffix = allowedStatuses.includes("RSV") && allowedStatuses.length === 1
    ? "Reserve"
    : allowedStatuses.length && !allowedStatuses.includes("RSV")
      ? "Training"
      : "";
  return `
  <div class="line-route-popup">
    <div class="line-route-title">${reserve.name}${titleSuffix ? ` - ${titleSuffix}` : ""}</div>
    <div class="line-route-grid reserve-route-grid">
      <strong>Date</strong>
      <strong>Status</strong>
      ${visibleDays.map((entry) => `
        <span class="line-route-cell">${formatDate(entry.date)}</span>
        <span class="line-route-cell">${reserveStatusLabel(entry.status || (reserve.isTraining ? "RSV" : "RSV"))}</span>
      `).join("")}
    </div>
  </div>
`;
};

function renderSummary() {
  if (!state.data.lines.length && !state.data.trips.length && !state.data.reserves.length) {
    $("summaryGrid").replaceChildren();
    return;
  }
  const { summary } = state.data;
  const reserveLineCount = getReserveOnlyLines().length;
  const metrics = [
    { label: "Flying lines", value: summary.lineCount, tab: "lines" },
    { label: "Reserve lines", value: reserveLineCount, tab: "reserves" },
    { label: "Trips", value: summary.tripCount, tab: "trips" },
    { label: "Line credit range", value: `${summary.lineCredit?.minLabel || ""} - ${summary.lineCredit?.maxLabel || ""}` },
    { label: "Top airport", value: summary.topAirports?.[0]?.[0] || "" },
    { label: "Top leg", value: summary.topLegs?.[0]?.[0] || "" },
  ];

  const summaryGrid = $("summaryGrid");
  const fragment = document.createDocumentFragment();
  metrics.forEach(({ label, value, tab }) => {
    const metric = document.createElement(tab ? "button" : "article");
    metric.className = `metric${tab ? " metric-action" : ""}`;
    if (tab) {
      metric.type = "button";
      metric.dataset.summaryTab = tab;
      metric.setAttribute("aria-label", `Open ${label}`);
    }
    const labelElement = document.createElement("div");
    labelElement.className = "label";
    labelElement.textContent = label;
    const valueElement = document.createElement("div");
    valueElement.className = "value";
    valueElement.textContent = String(value ?? "");
    metric.append(labelElement, valueElement);
    fragment.append(metric);
  });
  summaryGrid.replaceChildren(fragment);
  summaryGrid.querySelectorAll("[data-summary-tab]").forEach((metric) => {
    metric.addEventListener("click", () => {
      setActiveTab(metric.dataset.summaryTab, { userInitiated: true });
      requestAnimationFrame(() => scrollElementBelowTabs(getResultAnchor()));
    });
  });
}

const generateDateRange = (start, end) => {
  const dates = [];
  let cursor = new Date(`${start}T00:00:00Z`);
  const last = new Date(`${end}T00:00:00Z`);
  while (cursor <= last) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return dates;
};

const getWeeksInDateRange = (start, end) => {
  const firstDate = new Date(`${start}T00:00:00Z`);
  const lastDate = new Date(`${end}T00:00:00Z`);
  const firstSunday = new Date(firstDate);
  firstSunday.setUTCDate(firstSunday.getUTCDate() - firstSunday.getUTCDay());

  const lastSaturday = new Date(lastDate);
  lastSaturday.setUTCDate(lastSaturday.getUTCDate() + (6 - lastSaturday.getUTCDay()));

  const dates = [];
  let cursor = new Date(firstSunday);
  while (cursor <= lastSaturday) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }
  return weeks;
};

const formatCalendarLabel = (value) => {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
};

const formatStartDate = (value, fallbackDate = "") => {
  if (fallbackDate) return formatDate(fallbackDate);
  if (!value) return "";
  const match = value.match(/(\d{2})([A-Za-z]{3})(\d{4})/);
  if (!match) return value;
  return `${match[1]} ${match[2]} ${match[3]}`;
};

const getTripStartDateFromOperates = (value) => {
  if (!value) return "";
  const match = String(value).match(/(\d{2})([A-Za-z]{3})(\d{4})/);
  if (!match) return "";
  const month = MONTH_ABBREV[match[2].slice(0, 3)];
  if (!month) return "";
  const parsedDate = new Date(Date.UTC(Number(match[3]), month - 1, Number(match[1])));
  return Number.isNaN(parsedDate.getTime()) ? "" : parsedDate.toISOString().slice(0, 10);
};

function renderAvoidCalendar() {
  if (!state.data || !state.data.metadata?.start || !state.data.metadata?.end) {
    $("avoidCalendar").innerHTML = "";
    return;
  }
  avoidCalendarDrag = null;
  const weeks = getWeeksInDateRange(state.data.metadata.start, state.data.metadata.end);
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthHeader = getDisplayBidMonth(state.data, { month: "long", uppercase: false });

  let html = `<div class="calendar-month">${monthHeader}</div>`;
  html += '<div class="calendar-weekdays">';
  dayLabels.forEach(label => {
    html += `<div class="calendar-label">${label}</div>`;
  });
  html += '</div>';

  weeks.forEach(week => {
    html += '<div class="calendar-week">';
    week.forEach(date => {
      const inRange = date >= state.data.metadata.start && date <= state.data.metadata.end;
      const isSelected = state.avoidDates.has(date);
      const weekday = new Date(`${date}T00:00:00`).getDay();
      const classList = `calendar-day${isSelected ? ' is-selected' : ''}${!inRange ? ' is-outside' : ''}${inRange && (weekday === 0 || weekday === 6) ? ' weekend' : ''}`;
      html += `<button type="button" class="${classList}" data-date="${date}" ${!inRange ? 'disabled' : ''}>
        <span class="calendar-day-number">${formatCalendarDayNumber(date)}</span>
      </button>`;
    });
    html += '</div>';
  });

  const calendar = $("avoidCalendar");
  calendar.innerHTML = html;

  const applyAvoidDateSelection = (button, shouldSelect) => {
    const date = button?.dataset?.date;
    if (!date || button.disabled) return false;
    const wasSelected = state.avoidDates.has(date);
    if (shouldSelect) {
      state.avoidDates.add(date);
      button.classList.add("is-selected");
    } else {
      state.avoidDates.delete(date);
      button.classList.remove("is-selected");
    }
    return wasSelected !== shouldSelect;
  };

  const applyAvoidDateFromPoint = (event) => {
    if (!avoidCalendarDrag?.isActive) return false;
    const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".calendar-day:not([disabled])");
    if (!target || !calendar.contains(target) || avoidCalendarDrag.seen.has(target.dataset.date)) return false;
    avoidCalendarDrag.seen.add(target.dataset.date);
    return applyAvoidDateSelection(target, avoidCalendarDrag.shouldSelect);
  };

  const finishAvoidDateDrag = () => {
    if (!avoidCalendarDrag?.isActive) return;
    avoidCalendarDrag.isActive = false;
    document.removeEventListener("pointermove", applyAvoidDateFromPoint);
    document.removeEventListener("pointerup", finishAvoidDateDrag);
    document.removeEventListener("pointercancel", finishAvoidDateDrag);
    renderAvoidCalendar();
    renderActiveTab();
  };

  calendar.querySelectorAll(".calendar-day:not([disabled])").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      event.preventDefault();
      avoidCalendarDrag = {
        isActive: true,
        shouldSelect: !state.avoidDates.has(button.dataset.date),
        seen: new Set(),
      };
      avoidCalendarDrag.seen.add(button.dataset.date);
      applyAvoidDateSelection(button, avoidCalendarDrag.shouldSelect);
      button.blur();
      document.addEventListener("pointermove", applyAvoidDateFromPoint);
      document.addEventListener("pointerup", finishAvoidDateDrag);
      document.addEventListener("pointercancel", finishAvoidDateDrag);
    });
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      applyAvoidDateSelection(button, !state.avoidDates.has(button.dataset.date));
      renderAvoidCalendar();
      renderActiveTab();
    });
  });
}

function showHoverPopup(event, html) {
  const popup = $("hoverPopup");
  popup.innerHTML = html;
  popup.classList.toggle("has-carry-in-popup", Boolean(popup.querySelector(".carry-in-popup")));
  popup.hidden = false;

  popup.style.position = "fixed";
  popup.style.maxWidth = "";

  const margin = 12;
  const rect = popup.getBoundingClientRect();
  const targetRect = event.currentTarget?.getBoundingClientRect?.();
  const anchorX = Number.isFinite(event.clientX) ? event.clientX : (targetRect?.right || margin);
  const anchorY = Number.isFinite(event.clientY) ? event.clientY : (targetRect?.top || margin);
  const rawX = anchorX + margin;
  const rawY = anchorY + margin;
  const maxX = window.innerWidth - rect.width - margin;
  const maxY = window.innerHeight - rect.height - margin;
  popup.style.left = `${Math.max(margin, Math.min(rawX, maxX))}px`;
  popup.style.top = `${Math.max(margin, Math.min(rawY, maxY))}px`;
}

function hideHoverPopup() {
  const popup = $("hoverPopup");
  popup.hidden = true;
}

function isHoverPopupTrigger(target) {
  return Boolean(target?.closest?.([
    "[data-airport]",
    "[data-selection-popup]",
    "[data-line-reserve]",
    ".line-name",
    ".trip-chip",
    ".reserve-chip",
    ".deadhead-cell",
    ".carry-in-cell",
  ].join(",")));
}

function setupHoverPopupDismissal() {
  document.addEventListener("mouseover", (event) => {
    const lockedElement = event.target?.closest?.(".is-feature-locked, .feature-lock-label");
    if (!lockedElement) return;
    const featureElement = lockedElement.closest("[data-feature]");
    if (!featureElement?.dataset.feature) return;
    showHoverPopup(event, renderFeatureLockPopup(featureElement.dataset.feature));
  });
  document.addEventListener("focusin", (event) => {
    const lockedElement = event.target?.closest?.(".is-feature-locked, .feature-lock-label");
    if (!lockedElement) return;
    const featureElement = lockedElement.closest("[data-feature]");
    if (!featureElement?.dataset.feature) return;
    showHoverPopup(event, renderFeatureLockPopup(featureElement.dataset.feature));
  });
  document.addEventListener("mouseout", (event) => {
    const lockedElement = event.target?.closest?.(".is-feature-locked, .feature-lock-label");
    if (!lockedElement) return;
    const relatedLockedElement = event.relatedTarget?.closest?.(".is-feature-locked, .feature-lock-label");
    if (relatedLockedElement === lockedElement || lockedElement.contains(relatedLockedElement)) return;
    hideHoverPopup();
  });
  document.addEventListener("focusout", (event) => {
    if (event.target?.closest?.(".is-feature-locked, .feature-lock-label")) hideHoverPopup();
  });
  document.addEventListener("pointerdown", (event) => {
    const popup = $("hoverPopup");
    if (!popup || popup.hidden) return;
    if (popup.contains(event.target) || isHoverPopupTrigger(event.target)) return;
    hideHoverPopup();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideHoverPopup();
  });
}

function setupAccordions() {
  const accordionState = loadWorkspaceAccordionState();
  const initializedGroups = new Set();
  applyWorkspaceAccordionDataset(accordionState);
  const getAccordionGroup = (targetId) => {
    if (targetId === "importContent") return "import";
    if (targetId === "calendarContent") return "calendar";
    if (targetId?.endsWith("FiltersContent")) return "filters";
    if (targetId === "lineAvoid" || targetId === "tripAvoid") return "cityAvoid";
    return targetId || "";
  };

  const setAccordionGroupExpanded = (group, expanded, { persist = true } = {}) => {
    if (!group) return;
    document.querySelectorAll(".accordion-toggle").forEach((groupButton) => {
      const groupTargetId = groupButton.dataset.accordionTarget;
      if (getAccordionGroup(groupTargetId) !== group) return;
      const groupTarget = groupTargetId ? document.getElementById(groupTargetId) : null;
      if (!groupTarget) return;
      const groupLabel = groupButton.querySelector(".accordion-toggle-label");
      groupButton.setAttribute("aria-expanded", String(expanded));
      groupTarget.classList.toggle("is-collapsed", !expanded);
      if (groupLabel) groupLabel.textContent = expanded ? "Collapse" : "Expand";
    });
    accordionState[group] = expanded;
    applyWorkspaceAccordionDataset(accordionState);
    if (persist) saveWorkspaceAccordionState(accordionState);
  };

  document.querySelectorAll(".accordion-toggle").forEach((button) => {
    const targetId = button.dataset.accordionTarget;
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;
    const group = getAccordionGroup(targetId);
    if (!initializedGroups.has(group)) {
      const savedExpanded = accordionState[group];
      setAccordionGroupExpanded(
        group,
        typeof savedExpanded === "boolean" ? savedExpanded : button.getAttribute("aria-expanded") !== "false",
        { persist: false },
      );
      initializedGroups.add(group);
    }
    button.addEventListener("click", () => {
      setAccordionGroupExpanded(group, button.getAttribute("aria-expanded") !== "true");
      updateStickyOffsets();
      schedulePageJumpHighlightUpdate();
      scheduleLinePanelNavigationHighlight();
    });
  });

  document.querySelectorAll(".filter-cluster").forEach((cluster, index) => {
    const heading = cluster.querySelector(":scope > h3");
    const controls = cluster.querySelector(":scope > .filter-cluster-controls");
    if (!heading || !controls || heading.querySelector(".filter-cluster-toggle")) return;
    if (!controls.id) controls.id = `filterClusterControls${index + 1}`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-cluster-toggle";
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", controls.id);

    const label = document.createElement("span");
    label.textContent = heading.textContent.trim();
    const chevron = document.createElement("span");
    chevron.className = "filter-cluster-chevron";
    chevron.setAttribute("aria-hidden", "true");
    button.append(label, chevron);
    heading.replaceChildren(button);

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      controls.hidden = expanded;
      cluster.classList.toggle("is-collapsed", expanded);
      updateStickyOffsets();
      schedulePageJumpHighlightUpdate();
    });
  });
}

function bindHoverPopup(element, renderHtml) {
  if (!element) return;
  const show = (event) => {
    const html = renderHtml();
    if (!html) return;
    showHoverPopup(event, html);
  };
  element.addEventListener("mouseenter", show);
  element.addEventListener("mouseover", show);
  element.addEventListener("focus", show);
  element.addEventListener("mouseleave", hideHoverPopup);
  element.addEventListener("blur", hideHoverPopup);
  element.addEventListener("click", show);
}

const getBiddableItems = () => {
  const items = new Map();
  (state.data?.lines || []).forEach((line) => {
    items.set(line.name, {
      name: line.name,
      kind: hasReserveDays(line) ? "mixed" : "line",
    });
  });
  (state.data?.reserves || []).forEach((reserve) => {
    if (items.has(reserve.name)) return;
    items.set(reserve.name, {
      name: reserve.name,
      kind: reserve.isTraining ? "training" : "reserve",
    });
  });
  return [...items.values()];
};

const getSelectedBidItems = () => {
  const biddableMap = new Map(getBiddableItems().map((item) => [item.name, item]));
  const selected = state.bidList
    .map((lineName, index) => ({ lineName, rank: index + 1, item: biddableMap.get(lineName) }))
    .filter(({ item }) => item);
  if (selected.length !== state.bidList.length) {
    state.bidList = selected.map((entry) => entry.lineName);
    saveBidList();
  }
  return selected;
};

const getSelectionTypeLabel = (kind) => ({
  line: "Flying",
  mixed: "Flying / Reserve",
  training: "Training",
  reserve: "Reserve",
}[kind] || "Line");

const getAvoidDateMatches = (dates) => unique((dates || [])
  .filter((date) => state.avoidDates.has(date)))
  .sort();

const getSelectionAvoidConflictInfo = (item) => {
  if (!item?.data || !state.avoidDates.size) {
    return { hasConflict: false, flyingDates: [], reserveDates: [], trainingDates: [] };
  }
  const data = item.data;
  const flyingDates = (item.kind === "line" || item.kind === "mixed" || data.isMixedReserveLine)
    ? getAvoidDateMatches(getLineTripDates(data))
    : [];
  const reserveStatusDates = (data.reserveDays || [])
    .filter((entry) => (entry.status || "RSV") === "RSV")
    .map((entry) => entry.date)
    .filter(Boolean);
  const trainingStatusDates = (data.reserveDays || [])
    .filter((entry) => ["GTR", "SIM"].includes(entry.status))
    .map((entry) => entry.date)
    .filter(Boolean);
  const reserveDates = getAvoidDateMatches(reserveStatusDates);
  const trainingDates = getAvoidDateMatches(trainingStatusDates);
  return {
    hasConflict: Boolean(flyingDates.length || reserveDates.length || trainingDates.length),
    flyingDates,
    reserveDates,
    trainingDates,
  };
};

const selectionRowHasAvoidConflict = (item) => {
  return getSelectionAvoidConflictInfo(item).hasConflict;
};

const stripMarkup = (value) => String(value || "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const renderSelectionDetailPills = (pills) => pills.length
  ? `<div class="selection-detail-pills">${pills.map((pill) => `
    <span
      class="selection-detail-pill selection-detail-pill-${pill.tone || "neutral"}"
      ${pill.popup ? `data-selection-popup="${pill.popup}"` : ""}
      ${pill.lineName ? `data-line-name="${escapeHtml(pill.lineName)}"` : ""}
      tabindex="0"
    >${escapeHtml(pill.label)}</span>
  `).join("")}</div>`
  : `<span class="selection-detail-empty">-</span>`;

const hasSelectionDetailContent = (details) => !String(details || "").includes("selection-detail-empty");

const addSelectionConflictPill = (pills, item) => {
  if (!getSelectionAvoidConflictInfo(item).hasConflict) return;
  pills.unshift({ label: "CONFLICT", tone: "conflict", popup: "avoid-conflict", lineName: item.data.name || item.lineName });
};

const addSelectionCarryInPill = (pills, data) => {
  const carryInDays = getLineCarryInDays(data);
  const carryInMinutes = getLineCarryInMinutes(data);
  if (!(carryInDays > 0) && !(carryInMinutes > 0)) return;
  const label = carryInMinutes > 0
    ? `CARRY-IN ${formatHours(carryInMinutes)}`
    : "CARRY-IN";
  pills.push({ label, tone: "carry", popup: "", lineName: data.name });
};

const renderSelectionFlyingDetails = (line, pills) => {
  const fatigueMarkup = renderFatigueScoreChip(line);
  const lineStartMarkup = renderLineStartTimeChip(line);
  const pillMarkup = pills.length ? renderSelectionDetailPills(pills) : "";
  const detailMarkup = fatigueMarkup || lineStartMarkup || pillMarkup
    ? `<div class="selection-flying-details">${fatigueMarkup}${lineStartMarkup}${pillMarkup}</div>`
    : renderSelectionDetailPills([]);
  return `${detailMarkup}${renderMoneyLineValue(line)}`;
};

const renderSelectionMobileLineInsights = (item) => (
  item.kind === "line" || item.kind === "mixed"
    ? `<div class="selection-mobile-line-insights">${renderFatigueScoreChip(item.data)}${renderLineStartTimeChip(item.data)}</div>`
    : ""
);

const getSelectionDetails = (item) => {
  if (item.kind === "line" || item.kind === "mixed") {
    const line = item.data;
    const pills = [];
    addSelectionCarryInPill(pills, line);
    if (hasSplitLine(line)) pills.push({ label: "SPLIT LINE", tone: "warn", popup: "line-route", lineName: line.name });
    if (line.deadheadCount) pills.push({ label: `${line.deadheadCount} DH`, tone: "deadhead", popup: "line-deadheads", lineName: line.name });
    addSelectionConflictPill(pills, item);
    return renderSelectionFlyingDetails(line, pills);
  }

  const reserve = item.data;
  if (item.kind === "reserve" && reserve.isMixedReserveLine) {
    const pills = [];
    addSelectionCarryInPill(pills, reserve);
    if (hasSplitLine(reserve)) pills.push({ label: "SPLIT LINE", tone: "warn", popup: "line-route", lineName: reserve.name });
    if (reserve.deadheadCount) pills.push({ label: `${reserve.deadheadCount} DH`, tone: "deadhead", popup: "line-deadheads", lineName: reserve.name });
    addSelectionConflictPill(pills, item);
    return renderSelectionDetailPills(pills);
  }

  const trainingWindow = getReserveTrainingWindow(reserve);
  if (item.kind === "training") {
    const trainingPill = trainingWindow.startDate
      ? {
        label: `Training: ${formatDateRange(trainingWindow.startDate, trainingWindow.endDate)}`,
        tone: "training",
        popup: "training-schedule",
        lineName: reserve.name,
      }
      : null;
    const pills = [];
    if (trainingPill) pills.push(trainingPill);
    addSelectionConflictPill(pills, item);
    return renderSelectionDetailPills(pills);
  }

  const pills = [];
  addSelectionConflictPill(pills, item);
  return renderSelectionDetailPills(pills);
};

const getSelectionFilterValues = () => ({
  search: ($("selectionSearch")?.value || "").trim().toLowerCase(),
  type: $("selectionType")?.value || "",
  crew: $("selectionCrew")?.value || "",
  sort: $("selectionSort")?.value || "rank",
  guarantee: $("selectionGuarantee")?.value || "",
  carry: $("selectionCarry")?.value || "",
  split: $("selectionSplit")?.value || "",
  deadheads: $("selectionDeadheads")?.value || "",
  hideAvoidConflicts: Boolean($("selectionHideAvoidConflicts")?.checked),
});

const selectionFiltersAreActive = (filters = getSelectionFilterValues()) => Boolean(
  filters.search
  || filters.type
  || filters.crew
  || filters.guarantee
  || filters.carry
  || filters.split
  || filters.deadheads
  || filters.hideAvoidConflicts
);

const matchesSelectionFilters = (item, filters) => {
  if (!filters) return true;
  if (filters.type && item.kind !== filters.type) return false;
  if (filters.crew && item.crew !== filters.crew) return false;
  if (filters.guarantee === "below" && item.creditMinutes >= MINIMUM_GUARANTEE_MINUTES) return false;
  if (filters.guarantee === "above" && item.creditMinutes < MINIMUM_GUARANTEE_MINUTES) return false;
  if (filters.carry === "hidden" && item.carryIn > 0) return false;
  if (filters.carry === "only" && !(item.carryIn > 0)) return false;
  if (filters.split === "hidden" && item.isSplitLine) return false;
  if (filters.split === "only" && !item.isSplitLine) return false;
  if (filters.deadheads === "hidden" && item.hasDeadhead) return false;
  if (filters.deadheads === "only" && !item.hasDeadhead) return false;
  if (filters.hideAvoidConflicts && selectionRowHasAvoidConflict(item)) return false;
  if (!filters.search) return true;
  const searchable = [
    item.lineName,
    item.typeLabel,
    item.crew,
    item.credit,
    item.window,
    item.hasAvoidConflict ? "conflict avoid date" : "",
    item.isSplitLine ? "split line" : "",
    item.carryIn > 0 ? "carry in carry out" : "",
    item.hasDeadhead ? "deadhead deadheads dh" : "",
    stripMarkup(item.details),
  ].join(" ").toLowerCase();
  return searchable.includes(filters.search);
};

// Use the parser's published duty count, never calendar span or carry-in.
// Reserve/training records without a count remain last in either direction.
const compareDutyDayCounts = (a, b, sort) => {
  const count = (record) => typeof record?.dutyDays === "number"
    && Number.isFinite(record.dutyDays) && record.dutyDays >= 0 ? record.dutyDays : null;
  const left = count(a);
  const right = count(b);
  if (left === null && right === null) return 0;
  if (left === null) return 1;
  if (right === null) return -1;
  return sort === "dutyDesc" ? right - left : left - right;
};

const sortSelectedBidDetails = (rows, sort) => {
  const sortedRows = [...rows];
  if (sort === "rankDesc") {
    sortedRows.sort((a, b) => b.rank - a.rank);
  } else if (sort === "dutyAsc" || sort === "dutyDesc") {
    sortedRows.sort((a, b) => compareDutyDayCounts(a.data, b.data, sort) || a.rank - b.rank);
  } else if (sort === "avoidConflictsLast") {
    sortedRows.sort((a, b) => Number(a.hasAvoidConflict) - Number(b.hasAvoidConflict) || a.rank - b.rank);
  } else if (sort === "lineAsc") {
    sortedRows.sort((a, b) => lineNumber(a.lineName) - lineNumber(b.lineName));
  } else if (sort === "lineDesc") {
    sortedRows.sort((a, b) => lineNumber(b.lineName) - lineNumber(a.lineName));
  } else if (sort === "creditDesc") {
    sortedRows.sort((a, b) => (parseTimeToMinutes(b.credit) || 0) - (parseTimeToMinutes(a.credit) || 0));
  } else if (sort === "creditAsc") {
    sortedRows.sort((a, b) => (parseTimeToMinutes(a.credit) || 0) - (parseTimeToMinutes(b.credit) || 0));
  } else if (sort === "fatigueAsc" || sort === "fatigueDesc") {
    sortedRows.sort((a, b) => {
      const aScore = getLineFatigueScore(a.data);
      const bScore = getLineFatigueScore(b.data);
      if (aScore === null && bScore === null) return a.rank - b.rank;
      if (aScore === null) return 1;
      if (bScore === null) return -1;
      return (sort === "fatigueAsc" ? aScore - bScore : bScore - aScore) || a.rank - b.rank;
    });
  } else if (sort === "lineStartAsc" || sort === "lineStartDesc") {
    sortedRows.sort((a, b) => compareLineFirstShowTimes(
      a.data,
      b.data,
      sort === "lineStartDesc" ? "desc" : "asc",
    ) || a.rank - b.rank);
  }
  return sortedRows;
};

const applySelectionManualDisplayOrder = (rows, filters) => {
  const manual = state.selectionManualDisplayOrder;
  if (!filters || !manual || manual.data !== state.data
    || manual.filters !== JSON.stringify(filters)) return rows;
  const byName = new Map(rows.map((row) => [row.lineName, row]));
  if (rows.length !== manual.names.length || manual.names.some((name) => !byName.has(name))) return rows;
  return manual.names.map((name) => byName.get(name));
};

const getSelectedBidDetails = (options = {}) => {
  const { applyFilters = true } = options;
  const filters = applyFilters ? getSelectionFilterValues() : null;
  const lineByName = new Map((state.data?.lines || []).map((line) => [line.name, line]));
  const reserveByName = new Map((state.data?.reserves || []).map((reserve) => [reserve.name, reserve]));
  const rows = getSelectedBidItems()
    .map(({ lineName, rank, item }) => {
      const data = (item.kind === "line" || item.kind === "mixed")
        ? lineByName.get(lineName)
        : reserveByName.get(lineName);
      if (!data) return null;
      const lineTrips = (item.kind === "line" || item.kind === "mixed") ? getLineTripDetails(data) : [];
      const isSplitLine = hasSplitLine(data);
      const hasDeadhead = Boolean(data.hasDeadhead || data.deadheadCount);
      const hasAvoidConflict = selectionRowHasAvoidConflict({ ...item, data });
      const carryIn = getLineCarryInDays(data);
      const carryInMinutes = getLineCarryInMinutes(data);
      const deadheadMinutes = getLineDeadheadMinutes(data);
      return {
        rank,
        lineName,
        kind: item.kind,
        typeLabel: getSelectionTypeLabel(item.kind),
        crew: data.crewComplement || "-",
        credit: data.credit || "-",
        creditMinutes: data.creditMinutes ?? parseTimeToMinutes(data.credit),
        carryIn,
        carryInMinutes,
        deadheadCount: Number(data.deadheadCount || 0),
        deadheadMinutes,
        isSplitLine,
        hasDeadhead,
        hasAvoidConflict,
        window: (item.kind === "line" || item.kind === "mixed")
          ? formatDateRange(lineTrips[0]?.date, getLineTripEndDate(data, lineTrips, lineTrips.length - 1))
          : getReserveWindowLabel(data),
        data,
        details: getSelectionDetails({ ...item, data }),
      };
    })
    .filter(Boolean)
    .filter((item) => matchesSelectionFilters(item, filters));
  return applySelectionManualDisplayOrder(sortSelectedBidDetails(rows, filters?.sort || "rank"), filters);
};

const getSelectionOutputText = (rows) => rows.length
  ? rows.map((item) => {
    const detailText = stripMarkup(item.details);
    return `${item.rank}. ${item.lineName} | ${item.typeLabel} | Crew ${item.crew} | Credit ${item.credit}${detailText ? ` | ${detailText}` : ""}`;
  }).join("\n")
  : "";

const getSelectionCopyText = () => getSelectedBidDetails()
  .map((item) => item.lineName)
  .join(", ");

const getOfficialSelectionRows = () => getSelectedBidDetails({ applyFilters: false });

const getOfficialSelectionCopyText = () => getOfficialSelectionRows()
  .map((item) => item.lineName)
  .join(", ");

const getOfficialBidReviewChecks = (item) => {
  const checks = [];
  const fatigueScore = state.fatigueScoresVisible ? getLineFatigueScore(item.data) : null;
  if (fatigueScore !== null) checks.push(`Fatigue ${fatigueScore}`);
  const firstShow = state.lineStartTimesVisible ? getLineFirstShowInfo(item.data) : null;
  if (firstShow) checks.push(`First Show ${formatLineFirstShowDate(firstShow.showDate)} ${formatLineFirstShowTime(firstShow.showTime)}`);
  if (item.hasAvoidConflict) checks.push("Avoid-date conflict");
  if (item.deadheadCount) checks.push(`${item.deadheadCount} deadhead${item.deadheadCount === 1 ? "" : "s"}`);
  if (item.carryIn) checks.push(`${item.carryIn} carry-in`);
  return checks.length ? checks.join(" · ") : "—";
};

function renderOfficialBidReview(rows) {
  const body = $("selectionOfficialReviewBody");
  if (!body) return;
  body.innerHTML = rows.length ? rows.map((item) => `
    <tr>
      <td data-label="Rank">${item.rank}</td>
      <td data-label="Line"><strong>${escapeHtml(item.lineName)}</strong></td>
      <td data-label="Type">${escapeHtml(item.typeLabel)}</td>
      <td data-label="Credit">${escapeHtml(item.credit)}</td>
      <td data-label="Checks">${escapeHtml(getOfficialBidReviewChecks(item))}</td>
      <td data-label="Official server">${renderCrewbidsSubmissionStatus(item.lineName)}</td>
    </tr>
  `).join("") : `
    <tr class="selection-official-review-empty-row">
      <td colspan="6" class="empty">Select lines above to build the official bid order.</td>
    </tr>
  `;
}

const renderSelectionHoursCell = (count, minutes) => {
  const numericCount = Number(count || 0);
  const numericMinutes = Number(minutes || 0);
  if (!numericCount && !numericMinutes) return `<span class="selection-hours-empty">0</span>`;
  return `
    <span class="selection-hours-cell">
      <strong>${numericCount || "-"}</strong>
      <span>${formatHours(numericMinutes)}</span>
    </span>
  `;
};

const moveSelectionLineToRank = (lineName, rankValue) => {
  if (shouldPreviewUi012Availability()) return false;
  const currentIndex = state.bidList.indexOf(lineName);
  if (currentIndex < 0) return false;
  const parsedRank = Math.round(Number(rankValue));
  if (!Number.isFinite(parsedRank)) return false;
  const targetIndex = Math.max(0, Math.min(state.bidList.length - 1, parsedRank - 1));
  if (targetIndex === currentIndex) return false;
  const nextBidList = state.bidList.filter((entry) => entry !== lineName);
  nextBidList.splice(targetIndex, 0, lineName);
  state.bidList = nextBidList;
  state.recentMoveFeedback = {
    [lineName]: {
      direction: targetIndex < currentIndex ? "up" : "down",
      from: currentIndex + 1,
      to: targetIndex + 1,
    },
  };
  saveBidList();
  return true;
};

function getSelectionRowGroups(table) {
  const groups = [...table.querySelectorAll(".selection-row")].map((row) => {
    const detailRow = row.nextElementSibling?.classList.contains("selection-detail-inline-row")
      && row.nextElementSibling.dataset.lineName === row.dataset.lineName
      ? row.nextElementSibling
      : null;
    const rowRect = row.getBoundingClientRect();
    const detailRect = detailRow?.getBoundingClientRect();
    const detailIsVisible = Boolean(
      detailRect
      && detailRect.bottom > detailRect.top
      && detailRect.right > detailRect.left
    );
    const rows = detailIsVisible ? [row, detailRow] : [row];
    const top = detailIsVisible ? Math.min(rowRect.top, detailRect.top) : rowRect.top;
    const bottom = detailIsVisible ? Math.max(rowRect.bottom, detailRect.bottom) : rowRect.bottom;
    return {
      lineName: row.dataset.lineName,
      row,
      rows,
      top,
      bottom,
      height: Math.max(1, bottom - top),
      midpoint: top + (bottom - top) / 2,
      gapAfter: 0,
    };
  });
  const measuredGaps = groups.slice(0, -1).map((group, index) => (
    Math.max(0, groups[index + 1].top - group.bottom)
  ));
  const fallbackGap = measuredGaps.find((gap) => gap > 0) || 0;
  groups.forEach((group, index) => {
    group.gapAfter = measuredGaps[index] ?? fallbackGap;
  });
  return groups;
}

function getSelectionDragTargetIndex(groups, sourceIndex, ghostCenterY, pointerDeltaY = 0) {
  const sourceHeight = groups[sourceIndex]?.height || 1;
  const directionalThreshold = Math.max(18, Math.min(32, sourceHeight * 0.18));
  if (Math.abs(pointerDeltaY) < directionalThreshold) return sourceIndex;
  const directionalStep = Math.max(36, sourceHeight * 0.42);
  const targetIndex = groups.reduce((count, group, index) => (
    index === sourceIndex || ghostCenterY < group.midpoint ? count : count + 1
  ), 0);
  if (pointerDeltaY > directionalThreshold) {
    const directionalTarget = sourceIndex + Math.max(1, Math.floor(pointerDeltaY / directionalStep));
    return Math.max(0, Math.min(groups.length - 1, Math.max(targetIndex, directionalTarget)));
  }
  if (pointerDeltaY < -directionalThreshold) {
    const directionalTarget = sourceIndex - Math.max(1, Math.floor(Math.abs(pointerDeltaY) / directionalStep));
    return Math.max(0, Math.min(groups.length - 1, Math.min(targetIndex, directionalTarget)));
  }
  return Math.max(0, Math.min(groups.length - 1, targetIndex));
}

function getPreviewOrder(groups, sourceIndex, targetIndex) {
  const ordered = [...groups];
  const [source] = ordered.splice(sourceIndex, 1);
  ordered.splice(Math.max(0, Math.min(ordered.length, targetIndex)), 0, source);
  return ordered;
}

function getSelectionPreviewSlots(groups, sourceIndex, targetIndex) {
  const previewOrder = getPreviewOrder(groups, sourceIndex, targetIndex);
  let nextTop = groups[0]?.top || 0;
  return new Map(previewOrder.map((group) => {
    const slot = { top: nextTop };
    nextTop += group.height + group.gapAfter;
    return [group.row, slot];
  }));
}

function getSelectionReorderedBidList(bidList, visibleNames, sourceIndex, targetIndex) {
  const lineName = visibleNames[sourceIndex];
  const targetName = visibleNames[targetIndex];
  if (!lineName || !targetName || sourceIndex === targetIndex
    || !bidList.includes(lineName) || !bidList.includes(targetName)) return [...bidList];
  const next = bidList.filter((name) => name !== lineName);
  // A drop into visible position N requests official rank N.
  // Never adopt the displaced row’s unrelated rank from the active sort.
  const targetRank = targetIndex;
  next.splice(targetRank, 0, lineName);
  return next;
}

function updateSelectionPreviewRanks(groups, sourceIndex, targetIndex, ghost = null) {
  const preview = getSelectionReorderedBidList(state.bidList, groups.map((group) => group.lineName), sourceIndex, targetIndex);
  groups.forEach((group) => {
    const rank = preview.indexOf(group.lineName) + 1;
    const input = group.row.querySelector(".selection-rank-input");
    if (input) input.value = rank;
    const touchRank = group.row.querySelector(".selection-touch-rank");
    if (touchRank) touchRank.textContent = rank;
  });
  const rank = preview.indexOf(groups[sourceIndex]?.lineName) + 1;
  const ghostInput = ghost?.querySelector?.(".selection-rank-input");
  if (ghostInput) ghostInput.value = rank;
  const ghostTouchRank = ghost?.querySelector?.(".selection-touch-rank");
  if (ghostTouchRank) ghostTouchRank.textContent = rank;
}

function applySelectionDragPreview(groups, sourceIndex, targetIndex) {
  const targetSlots = getSelectionPreviewSlots(groups, sourceIndex, targetIndex);
  groups.forEach((group, index) => {
    const slot = targetSlots.get(group.row);
    const shift = slot && index !== sourceIndex ? slot.top - group.top : 0;
    group.rows.forEach((row) => {
      row.classList.toggle("ghost-shift", Boolean(shift));
      row.classList.toggle("drop-target", index === targetIndex && index !== sourceIndex);
      row.style.transform = shift ? `translateY(${shift}px)` : "";
    });
  });
}

function clearSelectionDragPreview(groups = []) {
  groups.forEach((group) => {
    group.rows.forEach((row) => {
      row.classList.remove("dragging", "ghost-shift", "drop-target");
      row.style.transform = "";
    });
    const input = group.row.querySelector(".selection-rank-input");
    if (input) input.value = state.bidList.indexOf(group.lineName) + 1;
    const touchRank = group.row.querySelector(".selection-touch-rank");
    if (touchRank) touchRank.textContent = state.bidList.indexOf(group.lineName) + 1;
  });
}

function createSelectionDragGhost(table, group, rect) {
  const useCompactTouchGhost = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;
  if (useCompactTouchGhost) {
    const ghost = document.createElement("div");
    const handle = group.row.querySelector(".selection-handle");
    ghost.className = "selection-touch-drag-ghost selection-drag-ghost drag-ghost";
    ghost.style.position = "fixed";
    ghost.style.left = "0";
    ghost.style.top = "0";
    ghost.style.pointerEvents = "none";
    ghost.style.zIndex = "10000";
    if (handle) ghost.appendChild(handle.cloneNode(true));
    const linePill = document.createElement("strong");
    linePill.className = "selection-touch-drag-line";
    linePill.textContent = group.lineName;
    ghost.appendChild(linePill);
    document.body.appendChild(ghost);
    return ghost;
  }
  const ghostTable = document.createElement("table");
  const tbody = document.createElement("tbody");
  ghostTable.className = `${table.className || ""} selection-drag-ghost drag-ghost`.trim();
  ghostTable.style.position = "fixed";
  ghostTable.style.left = "0";
  ghostTable.style.top = "0";
  ghostTable.style.width = `${rect.width}px`;
  ghostTable.style.pointerEvents = "none";
  ghostTable.style.zIndex = "10000";
  ghostTable.style.margin = "0";
  group.rows.forEach((row) => tbody.appendChild(row.cloneNode(true)));
  ghostTable.appendChild(tbody);
  document.body.appendChild(ghostTable);
  return ghostTable;
}

function animateSelectionArrowMove(table, sourceIndex, targetIndex, onCommit) {
  const groups = getSelectionRowGroups(table);
  const sourceGroup = groups[sourceIndex];
  const targetGroup = groups[targetIndex];
  if (!sourceGroup || !targetGroup) {
    onCommit();
    return;
  }

  const sourceRect = {
    left: sourceGroup.row.getBoundingClientRect().left,
    top: sourceGroup.top,
    width: sourceGroup.row.getBoundingClientRect().width,
    height: sourceGroup.height,
  };
  const ghost = createSelectionDragGhost(table, sourceGroup, sourceRect);
  const targetSlots = getSelectionPreviewSlots(groups, sourceIndex, targetIndex);
  const sourceSlot = targetSlots.get(sourceGroup.row);
  const targetSlot = targetSlots.get(targetGroup.row);
  const sourceToTargetY = (sourceSlot?.top || sourceGroup.top) - sourceGroup.top;
  const targetToSourceY = (targetSlot?.top || targetGroup.top) - targetGroup.top;
  const duration = 320;

  table.dataset.arrowAnimating = "true";
  document.body.classList.add("is-dragging");
  sourceGroup.rows.forEach((row) => row.classList.add("arrow-lift-source"));
  targetGroup.rows.forEach((row) => {
    row.classList.add("ghost-shift", "drop-target");
    row.style.transform = `translateY(${targetToSourceY}px)`;
  });

  ghost.classList.add("selection-arrow-ghost");
  ghost.style.transform = `translate3d(${sourceRect.left}px, ${sourceRect.top}px, 0)`;
  ghost.getBoundingClientRect();
  window.requestAnimationFrame(() => {
    ghost.style.transition = `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    ghost.style.transform = `translate3d(${sourceRect.left}px, ${sourceRect.top + sourceToTargetY}px, 0)`;
  });

  window.setTimeout(() => {
    onCommit();
    ghost.remove();
    document.body.classList.remove("is-dragging");
    delete table.dataset.arrowAnimating;
  }, duration + 30);
}

function commitSelectionPointerReorder(lineName, sourceIndex, targetIndex, visibleNames) {
  if (shouldPreviewUi012Availability()) return false;
  if (!lineName || sourceIndex === targetIndex || visibleNames[sourceIndex] !== lineName) return false;
  const from = state.bidList.indexOf(lineName);
  const nextBidList = getSelectionReorderedBidList(state.bidList, visibleNames, sourceIndex, targetIndex);
  if (from < 0 || !visibleNames[targetIndex] || !state.bidList.includes(visibleNames[targetIndex])) return false;
  const to = nextBidList.indexOf(lineName);
  state.bidList = nextBidList;
  // Preserve the drop position separately from the official order and active sort.
  const displayNames = [...visibleNames];
  displayNames.splice(sourceIndex, 1);
  displayNames.splice(targetIndex, 0, lineName);
  state.selectionManualDisplayOrder = {
    data: state.data,
    filters: JSON.stringify(getSelectionFilterValues()),
    names: displayNames,
  };
  state.recentMoveFeedback = {
    [lineName]: { direction: to < from ? "up" : "down", from: from + 1, to: to + 1 },
  };
  saveBidList();
  return true;
}

function setupSelectionPointerReorder(table, canReorderDisplayedRows) {
  if (!canReorderDisplayedRows) return;
  table.querySelectorAll(".selection-handle").forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      if (handle.disabled) return;
      const sourceRow = handle.closest(".selection-row");
      if (!sourceRow) return;
      let groups = getSelectionRowGroups(table);
      const sourceIndex = groups.findIndex((group) => group.row === sourceRow);
      const sourceGroup = groups[sourceIndex];
      if (sourceIndex < 0 || !sourceGroup) return;

      event.preventDefault();
      handle.setPointerCapture?.(event.pointerId);

      const useCompactTouchGhost = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;
      const handleRect = handle.getBoundingClientRect();
      const sourceRect = useCompactTouchGhost
        ? {
          left: handleRect.left,
          top: handleRect.top,
          width: handleRect.width,
          height: handleRect.height,
        }
        : {
          left: sourceGroup.row.getBoundingClientRect().left,
          top: sourceGroup.top,
          width: sourceGroup.row.getBoundingClientRect().width,
          height: sourceGroup.height,
        };
      const offsetX = event.clientX - sourceRect.left;
      const offsetY = event.clientY - sourceRect.top;
      const originY = event.clientY;
      const dragScrollOriginY = window.scrollY;
      const ghost = createSelectionDragGhost(table, sourceGroup, sourceRect);
      let targetIndex = sourceIndex;
      let active = true;

      const moveGhost = (clientX, clientY) => {
        ghost.style.transform = `translate3d(${clientX - offsetX}px, ${clientY - offsetY}px, 0)`;
      };

      const updatePreview = (clientY) => {
        const effectiveClientY = clientY + (window.scrollY - dragScrollOriginY);
        const nextTargetIndex = getSelectionDragTargetIndex(groups, sourceIndex, effectiveClientY - offsetY + sourceRect.height / 2, effectiveClientY - originY);
        if (nextTargetIndex === targetIndex) return;
        targetIndex = nextTargetIndex;
        applySelectionDragPreview(groups, sourceIndex, targetIndex);
        updateSelectionPreviewRanks(groups, sourceIndex, targetIndex, ghost);
      };

      const cleanup = ({ commit = false } = {}) => {
        if (!active) return;
        active = false;
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
        document.removeEventListener("pointercancel", onPointerCancel);
        document.removeEventListener("keydown", onKeyDown);
        document.body.classList.remove("is-dragging");
        clearSelectionDragPreview(groups);
        ghost.remove();
        handle.releasePointerCapture?.(event.pointerId);
        if (commit && commitSelectionPointerReorder(sourceGroup.lineName, sourceIndex, targetIndex, groups.map((group) => group.lineName))) {
          renderSelection();
          window.setTimeout(() => {
            document.querySelector(`#selectionTable .selection-row[data-line-name="${CSS.escape(sourceGroup.lineName)}"]`)?.classList.remove("is-recently-moved", "is-moved-up", "is-moved-down");
            document.querySelector(`#selectionTable .selection-row[data-line-name="${CSS.escape(sourceGroup.lineName)}"] .selection-move-badge`)?.remove();
            if (state.recentMoveFeedback[sourceGroup.lineName]) state.recentMoveFeedback = {};
          }, SELECTION_MOVE_FEEDBACK_MS);
        }
      };

      const onPointerMove = (moveEvent) => {
        if (!active) return;
        moveEvent.preventDefault();
        const edgeSize = Math.min(110, window.innerHeight * 0.14);
        const edgeSpeed = 22;
        if (moveEvent.clientY < edgeSize) {
          window.scrollBy(0, -edgeSpeed);
        } else if (moveEvent.clientY > window.innerHeight - edgeSize) {
          window.scrollBy(0, edgeSpeed);
        }
        moveGhost(moveEvent.clientX, moveEvent.clientY);
        updatePreview(moveEvent.clientY);
      };
      const onPointerUp = (upEvent) => {
        upEvent.preventDefault();
        cleanup({ commit: true });
      };
      const onPointerCancel = () => cleanup({ commit: false });
      const onKeyDown = (keyEvent) => {
        if (keyEvent.key !== "Escape") return;
        keyEvent.preventDefault();
        cleanup({ commit: false });
      };

      sourceGroup.rows.forEach((row) => row.classList.add("dragging"));
      document.body.classList.add("is-dragging");
      moveGhost(event.clientX, event.clientY);
      applySelectionDragPreview(groups, sourceIndex, targetIndex);
      updateSelectionPreviewRanks(groups, sourceIndex, targetIndex, ghost);
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointercancel", onPointerCancel);
      document.addEventListener("keydown", onKeyDown);
    });
    handle.addEventListener("keydown", (event) => {
      const direction = event.key === "ArrowUp" || event.key === "ArrowLeft"
        ? -1
        : event.key === "ArrowDown" || event.key === "ArrowRight"
          ? 1
          : 0;
      if (!direction || handle.disabled) return;
      event.preventDefault();
      const lineName = handle.dataset.lineName;
      const visibleNames = getSelectionRowGroups(table).map((group) => group.lineName);
      const sourceIndex = visibleNames.indexOf(lineName);
      const targetIndex = sourceIndex + direction;
      if (sourceIndex < 0 || targetIndex < 0 || targetIndex >= visibleNames.length) return;
      if (commitSelectionPointerReorder(lineName, sourceIndex, targetIndex, visibleNames)) {
        renderSelection();
        table.querySelector(`.selection-handle[data-line-name="${CSS.escape(lineName)}"]`)?.focus();
      }
    });
  });
}

const resetBidWorkspace = () => {
  state.bidList = [];
  state.showBidListOnly = false;
  state.showAvailablePlusSubmittedOnly = false;
  state.newlyAvailableReviewScope = "";
  saveBidList();
  const output = $("selectionOutput");
  const status = $("selectionOutputStatus");
  if (output) {
    output.value = "";
    output.dataset.dirty = "false";
  }
  if (status) {
    status.textContent = "Selection cleared for the new bid package.";
  }
};

const clearVisibleBidWorkspaceForPackageLoad = () => {
  state.bidList = [];
  state.showBidListOnly = false;
  state.showAvailablePlusSubmittedOnly = false;
  state.newlyAvailableReviewScope = "";
  const output = $("selectionOutput");
  const status = $("selectionOutputStatus");
  if (output) {
    output.value = "";
    output.dataset.dirty = "false";
  }
  if (status) status.textContent = "";
};

function renderBidListPanel() {
  const selectedItems = getSelectedBidItems();

  document.querySelectorAll(".bid-list-panel").forEach((panel) => {
    const title = panel.querySelector(".bid-list-title");
    const items = panel.querySelector(".bid-list-items");
    const showButton = panel.querySelector(".bid-list-show");
    const clearButton = panel.querySelector(".bid-list-clear");
    if (!title || !items || !showButton || !clearButton) return;

    title.textContent = selectedItems.length
      ? `${selectedItems.length} selected`
      : "No lines selected";
    const guidance = '<span class="bid-list-guidance"><strong>SELECTED LINES</strong>: Drag a numbered line pill to change its order, or use the <strong>BID SELECTION</strong> tab.</span>';
    items.innerHTML = selectedItems.length
      ? `${guidance}
      ${selectedItems.map(({ lineName, item }, index) => `
      <span class="bid-list-chip-set">
        <button type="button" class="bid-list-chip" data-line-name="${lineName}" data-kind="${item.kind}" aria-label="Choice ${index + 1}, ${lineName}. Drag to reorder." aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight">
          <span class="bid-list-order-badge" aria-hidden="true">${index + 1}</span>
          <span class="bid-list-line-pill">
            <strong>${lineName}</strong>
            <span class="bid-drag-handle" aria-hidden="true">⋮⋮</span>
          </span>
        </button>
      </span>
    `).join("")}`
      : guidance;
    setupBidListPointerReorder(items);

    showButton.classList.toggle("is-active", state.showBidListOnly);
    showButton.setAttribute("aria-pressed", String(state.showBidListOnly));
    showButton.textContent = state.showBidListOnly ? "Show All" : "Show Selected";
    showButton.disabled = selectedItems.length === 0;
    clearButton.disabled = selectedItems.length === 0;
  });
}

function updateAvailablePlusSubmittedControls() {
  document.querySelectorAll("[data-available-plus-submitted-toggle]").forEach((checkbox) => {
    checkbox.checked = state.showAvailablePlusSubmittedOnly;
    checkbox.closest(".result-checkbox-label")?.classList.toggle("is-active", state.showAvailablePlusSubmittedOnly);
    checkbox.title = state.showAvailablePlusSubmittedOnly
      ? "Showing available lines plus submitted/server bids"
      : "Show available lines plus submitted/server bids";
  });
}

function isLineCurrentlyAvailable(lineName) {
  const crewbidsLineAlert = getCrewbidsAlertForLine(lineName);
  return !(
    crewbidsLineAlert?.alert?.alert_type === "outbid_risk"
    && isOutbidRiskStillActionable(crewbidsLineAlert.item)
    && !hasCrewbidsSubmittedOrServerEvidence(lineName)
  );
}

function isFilteredByAvailablePlusSubmitted(lineName) {
  if (!state.showAvailablePlusSubmittedOnly) return false;
  return !isLineCurrentlyAvailable(lineName);
}

function getLineAvailabilityRowClass(lineName) {
  return isLineCurrentlyAvailable(lineName) ? "is-line-available" : "is-line-unavailable";
}

const BULK_SELECTION_SCOPE_LABELS = {
  lines: "Flying Lines",
  reserves: "Reserve Lines",
  training: "Training Lines",
};

function normalizeLineNameList(values = []) {
  return [...new Set((Array.isArray(values) ? values : [])
    .map((value) => String(value || "").trim())
    .filter(Boolean))];
}

function appendMissingBidLines(currentBidList = [], candidateLines = []) {
  const next = normalizeLineNameList(currentBidList);
  const selected = new Set(next);
  normalizeLineNameList(candidateLines).forEach((lineName) => {
    if (selected.has(lineName)) return;
    next.push(lineName);
    selected.add(lineName);
  });
  return next;
}

function normalizeAvailabilityReviewRecord(record = {}, packageKey = "", scope = "") {
  if (!record || typeof record !== "object") return null;
  if (record.packageKey !== packageKey || record.scope !== scope) return null;
  return {
    version: 1,
    packageKey,
    scope,
    watched: normalizeLineNameList(record.watched),
    acknowledged: normalizeLineNameList(record.acknowledged),
    pending: normalizeLineNameList(record.pending),
    acknowledgedAt: String(record.acknowledgedAt || ""),
    updatedAt: String(record.updatedAt || ""),
  };
}

function mergeNewAvailability(record, currentlyAvailableNames = []) {
  if (!record) return null;
  const watched = new Set(record.watched);
  const acknowledged = new Set(record.acknowledged);
  const pending = new Set(record.pending);
  normalizeLineNameList(currentlyAvailableNames).forEach((lineName) => {
    if (watched.has(lineName) && !acknowledged.has(lineName)) pending.add(lineName);
  });
  return {
    ...record,
    pending: record.watched.filter((lineName) => pending.has(lineName)),
  };
}

function getAvailabilityReviewPackageKey() {
  const identity = getCurrentBidSelectionIdentity();
  if (identity?.key) return identity.key;
  return [
    "local",
    detectFleetType(state.data) || state.importSuccessfulFleet || "unknown",
    getPackageBidMonthFromData(state.data) || "current",
  ].join(":");
}

function loadAvailabilityReviewRecords() {
  try {
    const parsed = JSON.parse(safeStorage.get(AVAILABILITY_REVIEW_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function getAvailabilityReviewRecordKey(scope, packageKey = getAvailabilityReviewPackageKey()) {
  return `${packageKey}::${scope}`;
}

function loadAvailabilityReviewRecord(scope) {
  const packageKey = getAvailabilityReviewPackageKey();
  const records = loadAvailabilityReviewRecords();
  return normalizeAvailabilityReviewRecord(
    records[getAvailabilityReviewRecordKey(scope, packageKey)],
    packageKey,
    scope,
  );
}

function saveAvailabilityReviewRecord(record, options = {}) {
  if (!record?.packageKey || !record?.scope) return false;
  const records = loadAvailabilityReviewRecords();
  const savedRecord = {
    ...record,
    updatedAt: new Date().toISOString(),
  };
  records[getAvailabilityReviewRecordKey(record.scope, record.packageKey)] = savedRecord;
  const saved = safeStorage.set(AVAILABILITY_REVIEW_STORAGE_KEY, JSON.stringify(records));
  if (saved && options.sync !== false) {
    scheduleAvailabilityWatchSync(savedRecord, { acknowledgePending: options.acknowledgePending === true });
  }
  return saved;
}

function scheduleAvailabilityWatchSync(record, options = {}) {
  if (!record?.packageKey || !record?.scope || record.packageKey.startsWith("local:")) return;
  const key = getAvailabilityReviewRecordKey(record.scope, record.packageKey);
  window.clearTimeout(state.availabilityWatchSyncTimers[key]);
  const sync = async (attempt = 0) => {
    delete state.availabilityWatchSyncTimers[key];
    try {
      const headers = await getSupabaseAuthHeaders({ forceRemote: true });
      if (!hasWorkspaceAuthHeaders(headers)) return;
      const response = await fetch("/api/user/availability-watches", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          packageKey: record.packageKey,
          scope: record.scope,
          watched: record.watched,
          acknowledged: record.acknowledged,
          pending: record.pending,
          acknowledgedAt: record.acknowledgedAt,
          acknowledgePending: options.acknowledgePending === true,
        }),
        cache: "no-store",
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || payload.error || !payload.watch) throw new Error(payload.error || "Availability watch sync failed");
      const normalized = normalizeAvailabilityReviewRecord(payload.watch, record.packageKey, record.scope);
      if (normalized) saveAvailabilityReviewRecord(normalized, { sync: false });
    } catch (error) {
      if (attempt < 2 && navigator.onLine !== false) {
        state.availabilityWatchSyncTimers[key] = window.setTimeout(() => sync(attempt + 1), 1500 * (attempt + 1));
        return;
      }
      console.warn("Availability review sync skipped:", error.message);
    }
  };
  state.availabilityWatchSyncTimers[key] = window.setTimeout(sync, 1100);
}

async function hydrateRemoteAvailabilityReviewRecords(identity = getCurrentBidSelectionIdentity()) {
  if (!identity?.key || identity.key.startsWith("local:") || navigator.onLine === false) return [];
  const loadKey = `${identity.key}:${getCurrentAccountEmail()}`;
  if (state.availabilityReviewRemoteLoadKey === loadKey) return [];
  state.availabilityReviewRemoteLoadKey = loadKey;
  try {
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    if (!hasWorkspaceAuthHeaders(headers)) return [];
    const response = await fetch(`/api/user/availability-watches?packageKey=${encodeURIComponent(identity.key)}`, {
      headers,
      cache: "no-store",
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.error) throw new Error(payload.error || "Availability review state unavailable");
    const watches = Array.isArray(payload.watches) ? payload.watches : [];
    watches.forEach((remote) => {
      const normalized = normalizeAvailabilityReviewRecord(remote, identity.key, remote.scope);
      if (!normalized) return;
      const local = loadAvailabilityReviewRecord(remote.scope);
      const acknowledged = normalizeLineNameList([...(local?.acknowledged || []), ...normalized.acknowledged]);
      const acknowledgedSet = new Set(acknowledged.map(normalizeCrewbidsLineName));
      const pending = normalizeLineNameList([...(local?.pending || []), ...normalized.pending])
        .filter((line) => !acknowledgedSet.has(normalizeCrewbidsLineName(line)));
      saveAvailabilityReviewRecord({
        ...normalized,
        watched: normalizeLineNameList([...(local?.watched || []), ...normalized.watched]),
        acknowledged,
        pending,
      }, { sync: false });
    });
    if (!state.availabilityReviewDeepLinkHandled && getWorkspaceParams().get("reviewAvailability") === "1") {
      const pendingWatch = watches.find((watch) => Array.isArray(watch.pending) && watch.pending.length);
      if (pendingWatch && ["lines", "reserves", "training"].includes(pendingWatch.scope)) {
        state.newlyAvailableReviewScope = pendingWatch.scope;
        setActiveTab(pendingWatch.scope);
      }
      state.availabilityReviewDeepLinkHandled = true;
    }
    return watches;
  } catch (error) {
    state.availabilityReviewRemoteLoadKey = "";
    console.warn("Remote availability review state unavailable:", error.message);
    return [];
  }
}

function refreshAvailabilityReviewRecord(scope) {
  const record = loadAvailabilityReviewRecord(scope);
  if (!record?.watched.length) return record;
  const available = record.watched.filter(isLineCurrentlyAvailable);
  const merged = mergeNewAvailability(record, available);
  if (JSON.stringify(merged.pending) !== JSON.stringify(record.pending)) {
    saveAvailabilityReviewRecord(merged);
  }
  return merged;
}

function getUi012PreviewRecord(scope) {
  if (!shouldPreviewUi012Availability() || scope !== "lines" || state.ui012PreviewAcknowledged) return null;
  const snapshot = state.bulkResultSets.lines;
  const candidates = normalizeLineNameList(snapshot?.eligibleNames?.length
    ? snapshot.eligibleNames
    : snapshot?.displayedNames?.length
      ? snapshot.displayedNames
      : (state.data?.lines || []).map((line) => line.name));
  const previewLine = candidates.find((lineName) => !state.bidList.includes(lineName)) || candidates[0] || "";
  if (!previewLine) return null;
  return {
    version: 1,
    packageKey: getAvailabilityReviewPackageKey(),
    scope,
    watched: candidates,
    acknowledged: candidates.filter((lineName) => lineName !== previewLine),
    pending: [previewLine],
    acknowledgedAt: "",
    updatedAt: "",
    preview: true,
  };
}

function getActiveAvailabilityReviewRecord(scope) {
  return getUi012PreviewRecord(scope) || refreshAvailabilityReviewRecord(scope);
}

function getPendingNewlyAvailableSet(scope) {
  return new Set(getActiveAvailabilityReviewRecord(scope)?.pending || []);
}

function getAllPendingNewlyAvailableSet() {
  return new Set(["lines", "reserves", "training"]
    .flatMap((scope) => [...getPendingNewlyAvailableSet(scope)]));
}

function renderAvailabilityLineBadges(lineName, scope = "", pendingSet = null) {
  const pending = pendingSet || (scope ? getPendingNewlyAvailableSet(scope) : getAllPendingNewlyAvailableSet());
  const badges = [];
  if (pending.has(lineName)) {
    badges.push('<span class="availability-line-badge is-newly-available">NEWLY AVAILABLE</span>');
  }
  if (!isLineCurrentlyAvailable(lineName)) {
    const unavailableLabel = state.bidList.includes(lineName) ? "NO LONGER AVAILABLE" : "UNAVAILABLE";
    badges.push(`<span class="availability-line-badge is-no-longer-available">${unavailableLabel}</span>`);
  }
  return badges.length ? `<span class="availability-line-badges">${badges.join("")}</span>` : "";
}

function setBulkResultSnapshot(scope, displayedNames = [], eligibleNames = [], availabilityFiltered = false) {
  if (!Object.prototype.hasOwnProperty.call(state.bulkResultSets, scope)) return;
  state.bulkResultSets[scope] = {
    displayedNames: normalizeLineNameList(displayedNames),
    eligibleNames: normalizeLineNameList(eligibleNames),
    availabilityFiltered: Boolean(availabilityFiltered),
  };
  renderBulkSelectionControls(scope);
}

function getBulkSelectionContainer(scope) {
  return document.querySelector(`[data-bulk-selection-scope="${scope}"]`);
}

function renderBulkSelectionControls(scope) {
  const container = getBulkSelectionContainer(scope);
  const snapshot = state.bulkResultSets[scope];
  if (!container || !snapshot) return;
  const displayedNames = snapshot.displayedNames;
  const selectedCount = displayedNames.filter((lineName) => state.bidList.includes(lineName)).length;
  const missingCount = displayedNames.length - selectedCount;
  const record = getActiveAvailabilityReviewRecord(scope);
  const pendingCount = record?.pending?.length || 0;
  const isPreview = Boolean(record?.preview);
  const isReviewing = state.newlyAvailableReviewScope === scope;
  const lineWord = displayedNames.length === 1 ? "line" : "lines";
  container.innerHTML = `
    <div class="result-bulk-selection-main">
      <div class="result-bulk-selection-heading">
        <strong>${displayedNames.length} ${lineWord} in the current view</strong>
        <button type="button" class="btn-primary" data-select-all-lines="${scope}" ${displayedNames.length ? "" : "disabled"}>
          Add All Lines in View
        </button>
      </div>
      <span>${selectedCount} already in your bid · ${missingCount} will be added</span>
    </div>
    ${pendingCount ? `
      <aside class="new-availability-notice ${isPreview ? "is-preview" : ""}" aria-live="polite">
        <div class="new-availability-copy">
          <span class="new-availability-kicker">${isPreview ? "PREVIEW ONLY" : "NEW LINES AVAILABLE"}</span>
          <strong>${pendingCount} new ${pendingCount === 1 ? "line is" : "lines are"} available</strong>
          <span>${isPreview
            ? "Try the choices below. Nothing here will change your saved bid."
            : `Add ${pendingCount === 1 ? "it" : "them"} to your bid, or mark ${pendingCount === 1 ? "it" : "them"} as reviewed if you do not want ${pendingCount === 1 ? "it" : "them"}.`}</span>
        </div>
        <div class="new-availability-actions">
          <button type="button" class="btn-secondary" data-review-new-lines="${scope}">
            ${isReviewing ? "Show All Lines" : `Show ${pendingCount === 1 ? "New Line" : `${pendingCount} New Lines`}`}
          </button>
          <button type="button" class="btn-primary" data-add-new-lines="${scope}">
            ${pendingCount === 1
              ? "Add to Bid Selection"
              : `Add ${pendingCount} to Bid Selection`}
          </button>
          <button type="button" class="btn-secondary" data-mark-new-lines-reviewed="${scope}">Mark as Reviewed</button>
        </div>
      </aside>
    ` : ""}
  `;
}

function acknowledgeAvailabilityRecord(record) {
  if (!record) return;
  const acknowledged = normalizeLineNameList([...record.acknowledged, ...record.pending]);
  saveAvailabilityReviewRecord({
    ...record,
    acknowledged,
    pending: [],
    acknowledgedAt: new Date().toISOString(),
  }, { acknowledgePending: true });
}

async function selectAllLinesInCurrentView(scope) {
  const snapshot = state.bulkResultSets[scope];
  if (!snapshot?.displayedNames?.length) return false;
  const displayedNames = snapshot.displayedNames;
  const alreadySelected = displayedNames.filter((lineName) => state.bidList.includes(lineName)).length;
  const missing = displayedNames.filter((lineName) => !state.bidList.includes(lineName));
  const count = displayedNames.length;
  const linesToAddLabel = missing.length === 1
    ? "this line"
    : missing.length === count
      ? `all ${missing.length} lines`
      : `the other ${missing.length} lines`;
  const message = missing.length
    ? `${alreadySelected ? `${alreadySelected} ${alreadySelected === 1 ? "is" : "are"} already in your Bid Selection. ` : ""}We’ll add ${linesToAddLabel} in the order shown. Your current order and any lines outside this view will stay exactly where they are.`
    : `All ${count} ${count === 1 ? "line is" : "lines are"} already in your Bid Selection. Nothing will be duplicated or moved.`;
  const confirmed = await confirmDestructiveAction({
    eyebrow: BULK_SELECTION_SCOPE_LABELS[scope] || "Bid Selection",
    title: `Add ${count === 1 ? "this line" : `these ${count} lines`} to your bid?`,
    message,
    confirmLabel: `Add All ${count} ${count === 1 ? "Line" : "Lines"}`,
  });
  if (!confirmed) return false;

  if (shouldPreviewUi012Availability()) {
    openSupportModal(
      "Nothing was saved",
      "Preview only",
      missing.length
        ? `<p>In the real app, we’d add ${linesToAddLabel} to the end of your Bid Selection.</p><p>Because this is a preview, your saved bid stayed exactly the same.</p>`
        : `<p>These lines are already in your Bid Selection, so nothing needs to be added or moved.</p><p>Because this is a preview, your saved bid stayed exactly the same.</p>`,
    );
    return true;
  }

  if (missing.length) {
    state.bidList = appendMissingBidLines(state.bidList, displayedNames);
    saveBidList();
  }
  const existingReviewRecord = loadAvailabilityReviewRecord(scope);
  if (!existingReviewRecord && snapshot.availabilityFiltered) {
    saveAvailabilityReviewRecord({
      version: 1,
      packageKey: getAvailabilityReviewPackageKey(),
      scope,
      watched: snapshot.eligibleNames,
      acknowledged: displayedNames,
      pending: [],
      acknowledgedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
  state.newlyAvailableReviewScope = "";
  renderActiveTab();
  return true;
}

function toggleNewlyAvailableReview(scope) {
  state.newlyAvailableReviewScope = state.newlyAvailableReviewScope === scope ? "" : scope;
  renderActiveTab();
  getBulkSelectionContainer(scope)?.scrollIntoView?.({ behavior: "smooth", block: "start" });
}

function addAllNewlyAvailableLines(scope) {
  const record = getActiveAvailabilityReviewRecord(scope);
  if (!record?.pending?.length) return false;
  if (record.preview) {
    state.ui012PreviewAcknowledged = true;
    state.newlyAvailableReviewScope = "";
    renderActiveTab();
    renderBulkSelectionControls(scope);
    openSupportModal(
      "Added to Bid Selection",
      "Preview only",
      `<p>${record.pending.length === 1 ? "This line would be" : `These ${record.pending.length} lines would be`} added to the end of your Bid Selection.</p><p>Your saved bid did not change in this preview.</p>`,
    );
    return true;
  }
  const nextBidList = appendMissingBidLines(state.bidList, record.pending);
  if (nextBidList.length !== state.bidList.length) {
    state.bidList = nextBidList;
    saveBidList();
  }
  acknowledgeAvailabilityRecord(record);
  state.newlyAvailableReviewScope = "";
  renderActiveTab();
  renderBulkSelectionControls(scope);
  openSupportModal(
    "Added to Bid Selection",
    "Bid updated",
    `<p>Done. ${record.pending.length === 1 ? "The new line is" : `The ${record.pending.length} new lines are`} now at the end of your Bid Selection.</p>`,
  );
  return true;
}

function markNewlyAvailableLinesReviewed(scope) {
  const record = getActiveAvailabilityReviewRecord(scope);
  if (!record?.pending?.length) return false;
  if (record.preview) {
    state.ui012PreviewAcknowledged = true;
  } else {
    acknowledgeAvailabilityRecord(record);
  }
  state.newlyAvailableReviewScope = "";
  renderActiveTab();
  return true;
}

function setupBulkSelectionControls() {
  document.addEventListener("click", (event) => {
    const selectAll = event.target.closest?.("[data-select-all-lines]");
    if (selectAll) {
      selectAllLinesInCurrentView(selectAll.dataset.selectAllLines);
      return;
    }
    const review = event.target.closest?.("[data-review-new-lines]");
    if (review) {
      toggleNewlyAvailableReview(review.dataset.reviewNewLines);
      return;
    }
    const addAll = event.target.closest?.("[data-add-new-lines]");
    if (addAll) {
      addAllNewlyAvailableLines(addAll.dataset.addNewLines);
      return;
    }
    const markReviewed = event.target.closest?.("[data-mark-new-lines-reviewed]");
    if (markReviewed) {
      markNewlyAvailableLinesReviewed(markReviewed.dataset.markNewLinesReviewed);
    }
  });
}

function applyUi012PreviewLocks(root = document) {
  const isPreview = shouldPreviewUi012Availability();
  document.body?.classList.toggle("is-ui012-preview", isPreview);
  if (!isPreview) return;
  root.querySelectorAll([
    ".bid-checkbox",
    ".bid-list-clear",
    ".selection-remove",
    ".selection-handle",
    "#fetchCurrentCrewbidsBid",
    "#submitCrewbidsBidList",
    "#clearSelectionBidList",
  ].join(", ")).forEach((control) => {
    control.disabled = true;
    control.setAttribute("aria-disabled", "true");
    control.title = "Disabled in the OHIO safe preview.";
  });
}

function getBidListChipGroups(container) {
  return [...container.querySelectorAll(".bid-list-chip")].map((chip) => {
    const rect = chip.getBoundingClientRect();
    return {
      lineName: chip.dataset.lineName,
      chip,
      left: rect.left,
      top: rect.top,
      width: Math.max(1, rect.width),
      height: Math.max(1, rect.height),
      midpointX: rect.left + rect.width / 2,
      midpointY: rect.top + rect.height / 2,
    };
  });
}

function getBidListDragTargetIndex(groups, sourceIndex, clientX, clientY, originX, originY) {
  const sourceGroup = groups[sourceIndex];
  if (!sourceGroup) return sourceIndex;
  const pointerDistance = Math.hypot(clientX - originX, clientY - originY);
  if (pointerDistance < 6) return sourceIndex;
  const ghostCenterX = clientX - (originX - (sourceGroup?.midpointX || clientX));
  const ghostCenterY = clientY - (originY - (sourceGroup?.midpointY || clientY));
  const nearest = groups.reduce((best, group, index) => {
    const distance = Math.hypot(ghostCenterX - group.midpointX, ghostCenterY - group.midpointY);
    return distance < best.distance ? { index, distance } : best;
  }, { index: sourceIndex, distance: Number.POSITIVE_INFINITY });
  return Math.max(0, Math.min(groups.length - 1, nearest.index));
}

function applyBidListDragPreview(groups, sourceIndex, targetIndex) {
  const previewOrder = getPreviewOrder(groups, sourceIndex, targetIndex);
  const targetSlots = new Map(previewOrder.map((group, index) => [group.chip, groups[index]]));
  groups.forEach((group, index) => {
    const slot = targetSlots.get(group.chip);
    const shiftX = slot && index !== sourceIndex ? slot.left - group.left : 0;
    const shiftY = slot && index !== sourceIndex ? slot.top - group.top : 0;
    const hasShift = Boolean(shiftX || shiftY);
    group.chip.classList.toggle("ghost-shift", hasShift);
    group.chip.classList.toggle("drop-target", index === targetIndex && index !== sourceIndex);
    group.chip.style.transform = hasShift ? `translate3d(${shiftX}px, ${shiftY}px, 0)` : "";
  });
}

function clearBidListDragPreview(groups = []) {
  groups.forEach((group) => {
    group.chip.classList.remove("dragging", "ghost-shift", "drop-target");
    group.chip.style.transform = "";
  });
}

function createBidListDragGhost(chip, rect) {
  const ghost = chip.cloneNode(true);
  ghost.classList.add("bid-list-drag-ghost", "drag-ghost");
  ghost.style.position = "fixed";
  ghost.style.left = "0";
  ghost.style.top = "0";
  ghost.style.width = `${rect.width}px`;
  ghost.style.pointerEvents = "none";
  ghost.style.zIndex = "10000";
  ghost.style.margin = "0";
  document.body.appendChild(ghost);
  return ghost;
}

function commitBidListPointerReorder(lineName, sourceIndex, targetIndex) {
  if (!lineName || sourceIndex === targetIndex) return false;
  const nextBidList = state.bidList.filter((entry) => entry !== lineName);
  nextBidList.splice(Math.max(0, Math.min(nextBidList.length, targetIndex)), 0, lineName);
  state.bidList = nextBidList;
  saveBidList();
  return true;
}

function setupBidListPointerReorder(container) {
  container.querySelectorAll(".bid-list-chip").forEach((chip) => {
    chip.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      const groups = getBidListChipGroups(container);
      const sourceIndex = groups.findIndex((group) => group.chip === chip);
      const sourceGroup = groups[sourceIndex];
      if (sourceIndex < 0 || !sourceGroup) return;

      event.preventDefault();
      chip.setPointerCapture?.(event.pointerId);

      const rect = chip.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const originX = event.clientX;
      const originY = event.clientY;
      const ghost = createBidListDragGhost(chip, rect);
      let targetIndex = sourceIndex;
      let active = true;
      let moved = false;

      const moveGhost = (clientX, clientY) => {
        ghost.style.transform = `translate3d(${clientX - offsetX}px, ${clientY - offsetY}px, 0)`;
      };

      const updatePreview = (clientX, clientY) => {
        const nextTargetIndex = getBidListDragTargetIndex(groups, sourceIndex, clientX, clientY, originX, originY);
        if (nextTargetIndex === targetIndex) return;
        targetIndex = nextTargetIndex;
        applyBidListDragPreview(groups, sourceIndex, targetIndex);
      };

      const cleanup = ({ commit = false } = {}) => {
        if (!active) return;
        active = false;
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
        document.removeEventListener("pointercancel", onPointerCancel);
        document.removeEventListener("keydown", onKeyDown);
        document.body.classList.remove("is-dragging");
        clearBidListDragPreview(groups);
        ghost.remove();
        chip.releasePointerCapture?.(event.pointerId);
        if (moved) {
          container.dataset.suppressClick = "true";
          window.setTimeout(() => delete container.dataset.suppressClick, 0);
        }
        if (commit && commitBidListPointerReorder(sourceGroup.lineName, sourceIndex, targetIndex)) {
          renderActiveTab();
        }
      };

      const onPointerMove = (moveEvent) => {
        if (!active) return;
        moveEvent.preventDefault();
        moved = true;
        moveGhost(moveEvent.clientX, moveEvent.clientY);
        updatePreview(moveEvent.clientX, moveEvent.clientY);
      };
      const onPointerUp = (upEvent) => {
        upEvent.preventDefault();
        cleanup({ commit: true });
      };
      const onPointerCancel = () => cleanup({ commit: false });
      const onKeyDown = (keyEvent) => {
        if (keyEvent.key !== "Escape") return;
        keyEvent.preventDefault();
        cleanup({ commit: false });
      };

      chip.classList.add("dragging");
      document.body.classList.add("is-dragging");
      moveGhost(event.clientX, event.clientY);
      applyBidListDragPreview(groups, sourceIndex, targetIndex);
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointercancel", onPointerCancel);
      document.addEventListener("keydown", onKeyDown);
    });
    chip.addEventListener("keydown", (event) => {
      const direction = event.key === "ArrowUp" || event.key === "ArrowLeft"
        ? -1
        : event.key === "ArrowDown" || event.key === "ArrowRight"
          ? 1
          : 0;
      if (!direction) return;
      event.preventDefault();
      const groups = getBidListChipGroups(container);
      const sourceIndex = groups.findIndex((group) => group.chip === chip);
      const targetIndex = sourceIndex + direction;
      if (sourceIndex < 0 || targetIndex < 0 || targetIndex >= groups.length) return;
      if (commitBidListPointerReorder(chip.dataset.lineName, sourceIndex, targetIndex)) renderActiveTab();
    });
  });
}

function setupBidListControls() {
  document.querySelectorAll(".bid-list-show").forEach((button) => button.addEventListener("click", () => {
    state.showBidListOnly = !state.showBidListOnly;
    renderActiveTab();
  }));

  document.querySelectorAll(".bid-list-clear").forEach((button) => button.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Clear bid list?",
      message: "This will remove every selected line from your bid list.",
      confirmLabel: "Yes, clear",
    });
    if (!confirmed) return;
    state.bidList = [];
    state.showBidListOnly = false;
    saveBidList();
    renderActiveTab();
  }));

  document.querySelectorAll(".bid-list-items").forEach((container) => container.addEventListener("click", (event) => {
    if (container.dataset.suppressClick === "true") return;
    const chip = event.target.closest(".bid-list-chip");
    if (!chip) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const selectors = ["#linesTable .name-cell", "#reservesTable .name-cell", "#trainingTable .name-cell"];
    const row = selectors.flatMap((selector) => [...document.querySelectorAll(selector)])
      .find((cell) => cell.dataset.lineName === chip.dataset.lineName);
    row?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));

  document.querySelectorAll(".bid-list-items").forEach(setupBidListPointerReorder);
}

function setupSelectionExportControls() {
  const output = $("selectionOutput");
  const copyButton = $("copySelectionOutput");
  const printButton = $("printSelectionOutput");
  const submitButton = $("submitCrewbidsBidList");
  const currentServerButton = $("fetchCurrentCrewbidsBid");
  const clearAllButton = $("clearSelectionBidList");
  const status = $("selectionOutputStatus");

  copyButton?.addEventListener("click", async () => {
    if (!output) return;
    const copyText = getOfficialSelectionCopyText();
    try {
      await navigator.clipboard.writeText(copyText);
      if (status) status.textContent = "Line numbers copied to clipboard.";
    } catch {
      output.focus();
      const originalValue = output.value;
      output.value = copyText;
      output.select();
      document.execCommand("copy");
      output.value = originalValue;
      if (status) status.textContent = "Line numbers copied to clipboard.";
    }
  });

  printButton?.addEventListener("click", () => {
    if (!output) return;
    const printText = output.value.trim() || getOfficialSelectionCopyText();
    if (!printText.trim()) {
      if (status) status.textContent = "No selected lines to print.";
      return;
    }

    document.getElementById("selectionPrintView")?.remove();
    const printView = document.createElement("section");
    printView.id = "selectionPrintView";
    printView.className = "selection-print-view";
    printView.innerHTML = `
      <div class="selection-print-header">
        <p>CrewBidPro</p>
        <h1>Bid Selection</h1>
      </div>
      <pre class="selection-print-lines">${escapeHtml(printText)}</pre>
    `;
    document.body.appendChild(printView);

    const cleanup = () => printView.remove();
    window.addEventListener("afterprint", cleanup, { once: true });
    if (status) status.textContent = "Opening print preview.";
    window.print();
    window.setTimeout(() => {
      if (document.body.contains(printView)) cleanup();
    }, 1200);
  });

  currentServerButton?.addEventListener("click", fetchCurrentCrewbidsBid);

  clearAllButton?.addEventListener("click", clearSelectionBidList);

  submitButton?.addEventListener("click", submitCrewbidsBidList);

}

function getProjectedBidResult(rows = []) {
  const officialRows = Array.isArray(rows) ? rows : [];
  const identity = getCurrentBidSelectionIdentity();
  const report = state.bidResultsReport;
  const officialResult = report?.available === true
    && report.fleet === identity?.fleet
    && report.bidMonth === identity?.bidMonth
    && report.result?.officialLine
    ? report.result
    : null;
  if (officialResult) {
    const officialLine = lineLabel(officialResult.officialLine);
    const officialChoice = Number(officialResult.officialChoice || 0);
    return {
      tone: "official",
      eyebrow: "Official Bid Result",
      title: `Awarded: ${officialLine}`,
      detail: officialChoice
        ? `CrewBids awarded choice #${officialChoice}.`
        : "CrewBidPro matched your official award.",
      chips: ["Official result", report.bidMonthLabel || ""].filter(Boolean),
    };
  }
  const monitor = getCurrentCrewbidsMonitor();
  const credentialStatus = state.crewbidsCredential?.status || "";
  const credentialKnownMissing = state.crewbidsCredential && !state.crewbidsCredential.configured;
  const checkedAt = getCrewbidsMonitorCheckedAt(monitor);
  const currentServerBidCount = (state.crewbidsCurrentServerBid?.bidList || []).length;
  if (!officialRows.length) {
    return {
      tone: "empty",
      title: "No projected result yet",
      detail: "Add lines to Bid Selection to estimate a likely hold.",
      chips: ["Official order unchanged"],
    };
  }
  if (credentialStatus === "needs_update" || credentialKnownMissing || monitor?.status === "needs_reauth") {
    return {
      tone: "pending",
      title: "Projection needs CrewBids access",
      detail: "Connect or update CrewBids access to estimate a likely hold.",
      chips: [`${officialRows.length} selected`, "Not official"],
    };
  }
  if (!monitor?.id) {
    return {
      tone: "pending",
      title: "Projection pending",
      detail: "Start or refresh CrewBids monitoring to estimate a likely hold.",
      chips: [`${officialRows.length} selected`, "Not official"],
    };
  }
  if (!hasSuccessfulCrewbidsEvidenceForWinOdds(monitor)) {
    const dataNotice = getCrewbidsDataNotice(monitor);
    return {
      tone: "pending",
      title: "Projection needs refreshed CrewBids data",
      detail: dataNotice || "Refresh CrewBids evidence to estimate a likely hold.",
      chips: [`${officialRows.length} selected`, checkedAt ? `Last checked ${formatCrewbidsEvidenceTimestamp(checkedAt)}` : "No CrewBids check yet"],
    };
  }
  const projected = officialRows.find((row) => {
    const oddsMatch = getCrewbidsAlertForLineByType(row.lineName, "outbid_risk");
    return !oddsMatch?.alert || !isOutbidRiskStillActionable(oddsMatch.item);
  });
  const chips = [
    checkedAt ? `Last checked ${formatCrewbidsEvidenceTimestamp(checkedAt)}` : "",
    currentServerBidCount ? `${currentServerBidCount} server choice${currentServerBidCount === 1 ? "" : "s"} found` : "",
    hasCrewbidsStaleEvidence(monitor) ? "Saved/stale data" : "Current CrewBids evidence",
    "Not official",
  ].filter(Boolean);
  if (projected) {
    const oddsMatch = getCrewbidsAlertForLineByType(projected.lineName, "outbid_risk");
    const pressureLabel = oddsMatch?.item ? getCrewbidsBidPressureLabel(oddsMatch.item).text : "In range";
    return {
      tone: "hold",
      title: `Likely hold: ${projected.lineName}`,
      detail: `Choice #${projected.rank} - ${projected.typeLabel} - ${pressureLabel}`,
      chips,
    };
  }
  return {
    tone: "risk",
    title: "No selected line is currently projected in range",
    detail: "Current Win Odds show senior pressure ahead of every selected choice.",
    chips,
  };
}

function renderProjectedBidResult(rows = []) {
  const container = $("projectedBidResult");
  if (!container) return;
  const result = getProjectedBidResult(rows);
  container.className = `projected-bid-result projected-bid-result-${result.tone || "pending"}`;
  container.innerHTML = `
    <div class="projected-bid-result-heading">
      <p class="eyebrow">${escapeHtml(result.eyebrow || "Projected Bid Result")}</p>
      <strong>${escapeHtml(result.title)}</strong>
    </div>
    <span>${escapeHtml(result.detail)}</span>
    <div class="projected-bid-result-chips">
      ${(result.chips || []).map((chip) => `<span>${escapeHtml(chip)}</span>`).join("")}
    </div>
  `;
}

function canShowCrewbidsSeniorNoBidders(identity) {
  return Boolean(
    identity
    && ["saved", "vetted"].includes(identity.source)
    && ["747", "777"].includes(identity.fleet)
    && identity.bidMonth
  );
}

function renderCrewbidsSeniorNoBidders() {
  const container = $("crewbidsSeniorNoBidders");
  if (!container) return;
  const identity = getCurrentBidSelectionIdentity();
  const result = state.crewbidsSeniorNoBidders;
  const shouldShow = canShowCrewbidsSeniorNoBidders(identity);
  container.hidden = !shouldShow;
  if (!shouldShow) return;

  if (state.crewbidsSeniorNoBiddersInFlight || !result) {
    container.innerHTML = `
      <p class="eyebrow">Room ahead of you</p>
      <strong>Checking current bid activity</strong>
      <span class="crewbids-senior-no-bidders-detail">Matching the latest shared K4 check to this month’s published bid order.</span>
    `;
    return;
  }
  if (!result?.available) {
    container.innerHTML = `
      <p class="eyebrow">Room ahead of you</p>
      <strong>Bid activity is not available yet</strong>
      <span class="crewbids-senior-no-bidders-detail">${escapeHtml(result?.reason || "A complete K4 No Bidders check is needed for this bid month.")}</span>
    `;
    return;
  }

  const people = Array.isArray(result.people) ? result.people : [];
  const count = Number(result.count || people.length || 0);
  const viewerRank = Number(result.viewerRank || 0);
  const viewerCount = Number(result.viewerCount || 0);
  const seatLabel = escapeHtml(result.seatLabel || "pilots");
  const singular = count === 1;
  const emptyText = "There are no senior unbid names to display.";
  container.innerHTML = `
    <details class="crewbids-senior-no-bidders-details" open>
      <summary>
        <span class="crewbids-senior-no-bidders-summary-copy">
          <span class="eyebrow">Room ahead of you</span>
          <strong>${count ? `${count} senior ${seatLabel} ${singular ? "is" : "are"} still unbid` : "All bidders senior to you have placed a bid. Good luck!"}</strong>
          <span class="crewbids-senior-no-bidders-detail">You are #${viewerRank} of ${viewerCount} this month${result.checkedAt ? ` · K4 checked ${escapeHtml(formatCrewbidsEvidenceTimestamp(result.checkedAt))}` : ""}</span>
        </span>
        <span class="crewbids-senior-no-bidders-toggle" aria-hidden="true">View list</span>
      </summary>
      <div class="crewbids-senior-no-bidders-body">
        ${people.length ? `
          <div class="crewbids-senior-no-bidders-table-wrap">
            <table>
              <thead><tr><th>Ranking</th><th>Crew member</th></tr></thead>
              <tbody>${people.map((person) => `<tr><td>#${escapeHtml(String(person.rank || ""))}${person.rankSource === "cq_scheduled" ? " (CQ)" : ""}</td><td>${escapeHtml(person.name || "")}</td></tr>`).join("")}</tbody>
            </table>
          </div>
          ${Number(result.remainingCount || 0) ? `<p class="crewbids-senior-no-bidders-more">Showing the first ${people.length}; ${result.remainingCount} more senior pilot${Number(result.remainingCount) === 1 ? "" : "s"} currently unbid.</p>` : ""}
        ` : `<p class="crewbids-senior-no-bidders-empty">${escapeHtml(emptyText)}</p>`}
        <p class="crewbids-senior-no-bidders-note">K4 supplies bid status. Numbers use published Bid List ranks when available and current roster positions otherwise. CQ identifies pilots scheduled for continuing qualification; table order follows current system seniority.</p>
      </div>
    </details>
  `;
}

async function refreshCrewbidsSeniorNoBidders() {
  const identity = getCurrentBidSelectionIdentity();
  if (!canShowCrewbidsSeniorNoBidders(identity) || !navigator.onLine) {
    state.crewbidsSeniorNoBidders = null;
    state.crewbidsSeniorNoBiddersKey = "";
    renderCrewbidsSeniorNoBidders();
    return;
  }
  const key = `${identity.fleet}:${identity.bidMonth}`;
  if (state.crewbidsSeniorNoBiddersKey === key && (state.crewbidsSeniorNoBidders || state.crewbidsSeniorNoBiddersInFlight)) {
    renderCrewbidsSeniorNoBidders();
    return;
  }
  state.crewbidsSeniorNoBiddersKey = key;
  state.crewbidsSeniorNoBidders = null;
  state.crewbidsSeniorNoBiddersInFlight = true;
  renderCrewbidsSeniorNoBidders();
  try {
    const payload = await crewbidsApiFetch(`/api/crewbids/senior-no-bidders?fleet=${encodeURIComponent(identity.fleet)}&bidMonth=${encodeURIComponent(identity.bidMonth)}`);
    if (state.crewbidsSeniorNoBiddersKey !== key) return;
    const summary = payload.summary && typeof payload.summary === "object" ? payload.summary : payload;
    state.crewbidsSeniorNoBidders = { ...summary, key };
  } catch (error) {
    if (state.crewbidsSeniorNoBiddersKey !== key) return;
    // This card is a convenience view over a shared K4 cache. It should never
    // surface transport, authentication, or database implementation details.
    state.crewbidsSeniorNoBidders = {
      key,
      available: false,
      reason: "Waiting for the next CrewBids refresh. This list will appear as soon as the shared check is complete.",
    };
  } finally {
    if (state.crewbidsSeniorNoBiddersKey === key) state.crewbidsSeniorNoBiddersInFlight = false;
    renderCrewbidsSeniorNoBidders();
  }
}

async function reloadCrewbidsSeniorNoBidders() {
  state.crewbidsSeniorNoBidders = null;
  state.crewbidsSeniorNoBiddersKey = "";
  await refreshCrewbidsSeniorNoBidders();
}

async function refreshCrewbidsNoBidActivityData(identity = getCurrentBidSelectionIdentity()) {
  let payload = await crewbidsApiFetch("/api/crewbids/no-bidders/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ packageKey: identity.key }),
  });
  applyCrewbidsSharedRefreshState(payload);
  for (let poll = 0; payload.sharedRefresh?.checking && poll < CREWBIDS_SHARED_REFRESH_POLL_LIMIT; poll += 1) {
    await new Promise((resolve) => window.setTimeout(resolve, 1000));
    payload = await crewbidsApiFetch("/api/crewbids/no-bidders/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packageKey: identity.key, pollOnly: true }),
    });
    applyCrewbidsSharedRefreshState(payload);
  }
  if (payload.sharedRefresh?.checking) {
    state.crewbidsSharedRefresh = {
      ...payload.sharedRefresh,
      status: "delayed",
      checking: false,
      message: "K4 is still checking. Saved evidence remains available.",
    };
    renderCrewbidsMonitoringPanel();
    throw new Error("CrewBids is still checking K4. Please wait a moment and try again.");
  }
  await reloadCrewbidsSeniorNoBidders();
  return payload;
}

function renderSelection() {
  scheduleCrewbidsSubmissionVerificationRerender();
  renderSelectionMoneyLineNotice();
  const allRows = getSelectedBidDetails({ applyFilters: false });
  const rows = getSelectedBidDetails();
  renderWorkspaceMonthlyBidStrength();
  refreshWorkspaceMonthlyBidRankEstimate().catch((error) => {
    console.warn("Monthly bid strength refresh failed:", error.message);
  });
  renderOfficialBidReview(allRows);
  renderProjectedBidResult(allRows);
  renderCrewbidsSeniorNoBidders();
  const filters = getSelectionFilterValues();
  const rankHeader = $("selectionRankHeader");
  if (rankHeader) rankHeader.setAttribute("aria-sort", state.selectionManualDisplayOrder
    ? "other" : filters.sort === "rank" ? "ascending" : filters.sort === "rankDesc" ? "descending" : "none");
  const isRankSort = filters.sort === "rank";
  const hasViewFilters = selectionFiltersAreActive(filters);
  const canReorderDisplayedRows = rows.length > 1;
  $("selectionHelp").textContent = rows.length
    ? canReorderDisplayedRows
      ? "Drag a numbered circle to set your official bid order. Arrow keys also move bids. Dropping into position 2 assigns official rank 2 and keeps the row there. Change a filter or sort to rebuild the view."
      : "Show at least two selected bids to move one before or after another."
    : allRows.length
      ? "No selected bids match the display filters. Reset filters to show the full official bid order."
      : "Select lines from Lines, Reserve, or Training. They will appear here as your official bid order.";

  const scope = $("selectionFilterScope");
  if (scope) {
    scope.textContent = hasViewFilters || !isRankSort
      ? `${rows.length} of ${allRows.length} shown. Filters only change visibility; manual moves update official order and export.`
      : "Display filters do not change official bid order or export.";
  }

  $("selectionTable").innerHTML = rows.length ? rows.map((item) => {
    const buddyBidMatch = getCrewbidsAlertForLineByType(item.lineName, "buddy_bid");
    const bidAvoidMatch = getCrewbidsAlertForLineByType(item.lineName, "bid_avoid");
    const liveAlert = getCrewbidsAlertForLine(item.lineName);
    const liveAlertClasses = [];
    if (liveAlert?.alert?.alert_type === "outbid_risk" && isOutbidRiskStillActionable(liveAlert.item)) {
      liveAlertClasses.push("has-crewbids-alert");
    }
    if (buddyBidMatch?.alert) liveAlertClasses.push("has-crewbids-buddy-bid");
    if (bidAvoidMatch?.alert) liveAlertClasses.push("has-crewbids-bid-avoid");
    const liveAlertClass = liveAlertClasses.join(" ");
    return `
    <tr class="selection-row ${item.hasAvoidConflict ? "has-selection-conflict" : ""} ${liveAlertClass} ${state.recentMoveFeedback[item.lineName] ? `is-recently-moved is-moved-${state.recentMoveFeedback[item.lineName].direction}` : ""}" data-line-name="${item.lineName}">
      <td class="selection-rank">
        <div class="selection-rank-control">
          <button type="button" class="selection-handle" data-line-name="${item.lineName}" aria-label="Drag to reorder ${item.lineName}" aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight" ${canReorderDisplayedRows ? "" : "disabled"} title="${canReorderDisplayedRows ? "Drag to reorder" : "Show at least two bids to drag"}">
            <span class="selection-touch-rank" aria-hidden="true">${item.rank}</span>
            <span class="selection-touch-grip" aria-hidden="true">⋮⋮</span>
          </button>
        </div>
      </td>
      <td class="selection-line-cell" data-label="Line" data-line-name="${item.lineName}" data-kind="${item.kind}">
        <strong>${item.lineName}</strong>
        ${renderAvailabilityLineBadges(item.lineName)}
      </td>
      <td class="selection-type-cell" data-label="Type"><span class="selection-type selection-type-${item.kind}">${item.typeLabel}</span></td>
      <td class="selection-crew-cell" data-label="Crew">${formatCrewCell(item.crew)}</td>
      <td class="selection-credit-cell" data-label="Credit">${item.credit}${item.kind === "line" || item.kind === "mixed" ? renderMoneyLineCredit(item.data) : ""}</td>
      <td class="selection-hours-column selection-carry-cell" data-label="Carry-In">${renderSelectionHoursCell(item.carryIn, item.carryInMinutes)}${item.kind === "line" || item.kind === "mixed" ? renderMoneyLineCarry(item.data) : ""}</td>
      <td
        class="selection-hours-column selection-dh-cell ${item.hasDeadhead ? "deadhead-cell" : ""}"
        data-label="DH"
        data-line-name="${item.lineName}"
        ${item.hasDeadhead ? 'data-selection-popup="line-deadheads" tabindex="0"' : ""}
      >${renderSelectionHoursCell(item.deadheadCount, item.deadheadMinutes)}</td>
      <td class="selection-details" data-label="Details">${item.details}</td>
      <td class="selection-live-cell" data-label="Win Odds">
        ${renderSelectionMobileLineInsights(item)}
        ${renderCrewbidsSelectionStatus(item.lineName, item)}
        <button type="button" class="selection-phone-detail-toggle" data-line-name="${item.lineName}" aria-expanded="false">
          <span>More details</span>
          <span class="selection-phone-detail-chevron" aria-hidden="true">⌄</span>
        </button>
      </td>
      <td class="selection-submit-cell" data-label="CrewBids">${renderCrewbidsSubmissionStatus(item.lineName)}</td>
      <td class="selection-remove-cell"><button type="button" class="selection-remove" data-line-name="${item.lineName}">Remove</button></td>
    </tr>
    ${hasSelectionDetailContent(item.details) ? `<tr class="selection-detail-inline-row ${item.hasAvoidConflict ? "has-selection-conflict" : ""} ${liveAlertClass}" data-line-name="${item.lineName}">
      <td colspan="11">
        <div class="selection-detail-inline-panel">
          <span class="selection-detail-inline-label">DETAILS:</span>
          <div class="selection-details-inline">${item.details}</div>
        </div>
      </td>
    </tr>` : ""}
  `;
  }).join("") : `<tr><td colspan="11" class="empty">${allRows.length ? "No selected bids match these filters. Reset the selection filters to show them all." : "No lines selected yet. Pick lines in the other tabs and they will appear here."}</td></tr>`;

  const output = $("selectionOutput");
  const outputStatus = $("selectionOutputStatus");
  const submitButton = $("submitCrewbidsBidList");
  const submitAccessHelper = $("crewbidsSubmitAccessHelper");
  const currentServerButton = $("fetchCurrentCrewbidsBid");
  const clearAllButton = $("clearSelectionBidList");
  const officialReviewSummary = $("selectionOfficialReviewSummary");
  const submitChoiceCount = $("selectionSubmitChoiceCount");
  const submitAccessStatus = $("selectionSubmitAccessStatus");
  const submitReviewStatus = $("selectionSubmitReviewStatus");
  if (output) {
    output.value = getSelectionOutputText(allRows);
    output.dataset.dirty = "false";
  }
  if (officialReviewSummary) {
    officialReviewSummary.textContent = allRows.length
      ? `${allRows.length} choice${allRows.length === 1 ? "" : "s"} · Complete order · Display filters do not change this review`
      : "No choices selected. Display filters do not change this review.";
  }
  if (submitChoiceCount) {
    submitChoiceCount.textContent = `${allRows.length} choice${allRows.length === 1 ? "" : "s"}`;
    submitChoiceCount.classList.toggle("is-ready", allRows.length > 0);
  }
  if (outputStatus && !state.crewbidsSubmissionInFlight && !state.crewbidsCurrentBidInFlight) {
    const submittedCount = Object.values(state.crewbidsSubmission?.statuses || {}).filter((item) => item?.status === "submitted" || item?.status === "confirmed").length;
    const confirmedCount = Object.values(state.crewbidsSubmission?.statuses || {}).filter((item) => item?.status === "confirmed").length;
    const hasExpiredUnconfirmedSubmission = submittedCount > confirmedCount
      && getCrewbidsSubmissionAgeMs() >= CREWBIDS_SUBMISSION_VERIFY_WINDOW_MS;
    const isCurrentServerSnapshot = state.crewbidsSubmission?.source === "current-server-bid";
    const currentServerBidCount = (state.crewbidsCurrentServerBid?.bidList || []).length;
    const crewbidsDataNotice = getCrewbidsDataNotice();
    const currentServerText = currentServerBidCount
      ? `${crewbidsDataNotice ? "Saved CrewBids snapshot" : "Official CrewBids server"} shows ${currentServerBidCount} choice${currentServerBidCount === 1 ? "" : "s"}; matching rows are marked On Server.`
      : "";
    const crewbidsDataNoticeText = crewbidsDataNotice ? ` ${crewbidsDataNotice}` : "";
    const crewbidsStatusText = isCurrentServerSnapshot
      ? `${currentServerText || "CrewBids server snapshot loaded; no current choices were returned."}${crewbidsDataNoticeText}`
      : submittedCount
      ? hasExpiredUnconfirmedSubmission
        ? `${confirmedCount} confirmed from CrewBids evidence; ${submittedCount - confirmedCount} not confirmed. Use SUBMITTED BIDS or verify on CrewBids.${crewbidsDataNoticeText}`
        : `${submittedCount} marked submitted; ${confirmedCount} confirmed from CrewBids evidence.${crewbidsDataNoticeText}`
      : "None have been submitted to CrewBids.";
    outputStatus.textContent = allRows.length
      ? `${allRows.length} selection${allRows.length === 1 ? "" : "s"} in official bid order. ${crewbidsStatusText} ${rows.length === allRows.length ? "All are visible." : `${rows.length} shown by display filters.`}`
      : "No active selections to export.";
  }
  const hasActiveCrewbidsCredential = Boolean(state.crewbidsCredential?.configured)
    && state.crewbidsCredential?.status !== "needs_update";
  if (submitAccessStatus) {
    submitAccessStatus.textContent = state.crewbidsCredential === null
      ? "Access checking"
      : hasActiveCrewbidsCredential
        ? "Access ready"
        : "Access required";
    submitAccessStatus.classList.toggle("is-ready", hasActiveCrewbidsCredential);
  }
  if (submitReviewStatus) {
    submitReviewStatus.textContent = allRows.length ? "Order reviewed" : "Order not ready";
    submitReviewStatus.classList.toggle("is-ready", allRows.length > 0);
  }
  if (submitButton) {
    submitButton.disabled = allRows.length === 0
      || !hasActiveCrewbidsCredential
      || state.crewbidsSubmissionInFlight;
    submitButton.title = hasActiveCrewbidsCredential
      ? "Submit your selected bid order to CrewBids."
      : "Add active Kalitta CrewBids credentials in Crew Profile before submitting a new bid.";
  }
  if (submitAccessHelper) submitAccessHelper.hidden = hasActiveCrewbidsCredential;
  if (currentServerButton) currentServerButton.disabled = state.crewbidsCurrentBidInFlight;
  if (clearAllButton) clearAllButton.disabled = allRows.length === 0;
  renderCrewbidsMonitoringPanel();

  const table = $("selectionTable");
  table.querySelectorAll(".selection-remove").forEach((button) => button.addEventListener("click", () => {
    toggleBidLine(button.dataset.lineName);
  }));

  table.querySelectorAll(".selection-phone-detail-toggle").forEach((button) => button.addEventListener("click", () => {
    const row = button.closest(".selection-row");
    if (!row) return;
    const expanded = !row.classList.contains("is-phone-detail-expanded");
    row.classList.toggle("is-phone-detail-expanded", expanded);
    button.setAttribute("aria-expanded", String(expanded));
    const label = button.querySelector("span");
    if (label) label.textContent = expanded ? "Less details" : "More details";
  }));

  table.querySelectorAll(".selection-line-cell").forEach((cell) => {
    const lineName = cell.dataset.lineName;
    const kind = cell.dataset.kind;
    const line = state.data?.lines?.find((entry) => entry.name === lineName);
    const reserve = state.data?.reserves?.find((entry) => entry.name === lineName);
    if ((kind === "line" || kind === "mixed") && line) {
      bindHoverPopup(cell, () => renderLineRoutePopup(line));
      return;
    }
    if (reserve) {
      bindHoverPopup(cell, () => (reserve.isMixedReserveLine ? renderLineRoutePopup(reserve) : renderReserveSchedulePopup(reserve)));
    }
  });

  setupSelectionPointerReorder(table, canReorderDisplayedRows);

  attachSelectionDetailPopups(table);
  attachFatigueScoreInteractions(table);
}

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

function normalizeProfileAssignmentFleet(value) {
  const fleet = String(value || "").trim();
  return ["747", "777"].includes(fleet) ? fleet : "";
}

function normalizeProfileAssignmentSeat(value) {
  const seat = String(value || "").trim().toUpperCase();
  return ["CA", "FO", "FE"].includes(seat) ? seat : "";
}

function setConfirmedProfileAssignment(fleet, seat) {
  const confirmed = {
    fleet: normalizeProfileAssignmentFleet(fleet),
    seat: normalizeProfileAssignmentSeat(seat),
  };
  state.profileAssignmentConfirmed = confirmed;
  state.profileAssignmentDraft = { ...confirmed };
}

function getProfileAssignmentDraft() {
  return {
    fleet: normalizeProfileAssignmentFleet(state.profileAssignmentDraft?.fleet),
    seat: normalizeProfileAssignmentSeat(state.profileAssignmentDraft?.seat),
  };
}

function isProfileAssignmentDraftDirty() {
  const draft = getProfileAssignmentDraft();
  const confirmed = state.profileAssignmentConfirmed || {};
  return draft.fleet !== normalizeProfileAssignmentFleet(confirmed.fleet)
    || draft.seat !== normalizeProfileAssignmentSeat(confirmed.seat);
}

function getProfileAssignmentLabel(fleet, seat) {
  const normalizedFleet = normalizeProfileAssignmentFleet(fleet);
  const normalizedSeat = normalizeProfileAssignmentSeat(seat);
  if (!normalizedFleet || !normalizedSeat) return "Choose a current fleet and seat.";
  return `${describeImportFleet(normalizedFleet)} ${normalizedSeat}`;
}

async function confirmProfileAssignmentOverride({
  effectiveFleet = "",
  effectiveSeat = "",
  rosterFleet = "",
  rosterSeat = "",
} = {}) {
  const normalizedEffectiveFleet = normalizeProfileAssignmentFleet(effectiveFleet);
  const normalizedEffectiveSeat = normalizeProfileAssignmentSeat(effectiveSeat);
  const normalizedRosterFleet = normalizeProfileAssignmentFleet(rosterFleet);
  const normalizedRosterSeat = normalizeProfileAssignmentSeat(rosterSeat);
  if (
    !normalizedEffectiveFleet
    || !normalizedEffectiveSeat
    || !normalizedRosterFleet
    || !normalizedRosterSeat
    || (normalizedEffectiveFleet === normalizedRosterFleet && normalizedEffectiveSeat === normalizedRosterSeat)
  ) {
    return true;
  }
  const effectiveLabel = getProfileAssignmentLabel(normalizedEffectiveFleet, normalizedEffectiveSeat);
  const rosterLabel = getProfileAssignmentLabel(normalizedRosterFleet, normalizedRosterSeat);
  return confirmDestructiveAction({
    eyebrow: "Crew Profile",
    title: `Official Seniority Roster says you are a ${rosterLabel}. Are you sure you want CrewBidPro to recognize you as a ${effectiveLabel}?`,
    message: `Until a new Seniority Roster is published, your official roster record will remain ${rosterLabel}. CrewBidPro will use ${effectiveLabel} as your current assignment for package selection, bidding information, CrewBids tools, monitoring, search, and submission. It will be your responsibility to ensure the company is tracking you as a ${effectiveLabel} for official bid submissions. CrewBidPro cannot override this in CrewBids.`,
    confirmLabel: `USE ${effectiveLabel}`,
    cancelLabel: "GO BACK",
  });
}

function setProfileAssignmentFeedback(message = "") {
  const feedback = $("profileAssignmentFeedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.hidden = !message;
}

function renderProfileAssignmentDraftState() {
  const draft = getProfileAssignmentDraft();
  const dirty = isProfileAssignmentDraftDirty();
  const fleetSelect = $("preferencePilotType");
  const seatSelect = $("preferenceSeatClass");
  if (fleetSelect) fleetSelect.value = draft.fleet || "any";
  if (seatSelect) seatSelect.value = draft.seat;
  $("profileFleetTypeField")?.classList.toggle("is-dirty", dirty);
  $("profileSeatClassField")?.classList.toggle("is-dirty", dirty);

  const actions = $("profileAssignmentActions");
  if (actions) actions.hidden = !dirty;
  const pendingLabel = $("profileAssignmentPendingLabel");
  if (pendingLabel) pendingLabel.textContent = `${getProfileAssignmentLabel(draft.fleet, draft.seat)} has not been applied.`;
  const applyButton = $("applyProfileAssignment");
  const discardButton = $("discardProfileAssignment");
  if (applyButton) {
    applyButton.disabled = state.profileAssignmentSaveInFlight || !draft.fleet || !draft.seat;
    applyButton.textContent = state.profileAssignmentSaveInFlight ? "APPLYING..." : "APPLY CHANGES";
  }
  if (discardButton) discardButton.disabled = state.profileAssignmentSaveInFlight;
}

function discardProfileAssignmentDraft({ feedback = true } = {}) {
  state.profileAssignmentDraft = { ...state.profileAssignmentConfirmed };
  renderProfileAssignmentDraftState();
  if (feedback) setProfileAssignmentFeedback("Unapplied assignment discarded.");
}

function getProfileAircraftType() {
  const inferredAircraft = String(state.preferences.aircraftType || "");
  if (["747", "777"].includes(inferredAircraft)) return inferredAircraft;
  return ["747", "777"].includes(state.preferences.pilotType) ? state.preferences.pilotType : "";
}

function getProfileFleetSeatLabel() {
  const aircraftType = getProfileAircraftType();
  const seat = state.preferences.seatClass || "";
  if (!aircraftType || !seat) return "";
  return `${describeImportFleet(aircraftType)} ${seat}`;
}

function getRosterFleetSeatLabel() {
  const aircraftType = ["747", "777"].includes(state.preferences.rosterAircraftType)
    ? state.preferences.rosterAircraftType
    : "";
  const seat = ["CA", "FO", "FE"].includes(String(state.preferences.rosterSeatClass || "").toUpperCase())
    ? String(state.preferences.rosterSeatClass).toUpperCase()
    : "";
  return aircraftType && seat ? `${describeImportFleet(aircraftType)} ${seat}` : "";
}

function isEffectiveAssignmentOverride() {
  const source = String(state.preferences.assignmentSource || "").toLowerCase();
  return source.includes("override")
    || Boolean(getProfileFleetSeatLabel() && getRosterFleetSeatLabel() && getProfileFleetSeatLabel() !== getRosterFleetSeatLabel());
}

function renderProfileAssignmentSummary() {
  const summary = $("profileAssignmentSummary");
  if (!summary) return;
  const effective = getProfileFleetSeatLabel();
  const roster = getRosterFleetSeatLabel();
  if (!effective) {
    summary.innerHTML = `
      <strong>Current assignment needed</strong>
      <span>Select your current fleet and seat. CrewBidPro uses this bidding group for packages, monthly rank, K4 status, monitoring, search, and submission.</span>
    `;
    return;
  }
  const source = isEffectiveAssignmentOverride() ? "User-managed current assignment" : "Initialized from Pilot Seniority List";
  summary.innerHTML = `
    <strong>${escapeHtml(source)}: ${escapeHtml(effective)}</strong>
    <span>${roster ? `Protected roster evidence: ${escapeHtml(roster)}. ` : ""}Changing the current assignment does not rewrite official roster or company-seniority evidence.</span>
  `;
}

function getProfileStandingLabel() {
  const aircraftType = getProfileAircraftType();
  const seat = state.preferences.seatClass || "";
  const position = Number(state.preferences.peerGroupPosition || 0);
  const size = Number(state.preferences.peerGroupSize || 0);
  if (isEffectiveAssignmentOverride() && getRosterFleetSeatLabel()) {
    return `Pilot Seniority: ${getProfileFleetSeatLabel()} (current assignment). Published roster evidence: ${getRosterFleetSeatLabel()}.`;
  }
  if (aircraftType && seat && position && size) return `Position among ${aircraftType} ${seat}s: ${position} of ${size}.`;
  if (isPendingEmployeeIdentity()) return "Roster verification pending.";
  if (state.preferences.employeeNumber && state.preferences.identityConfirmedAt) return "Peer-group position unavailable.";
  return "Employee not confirmed";
}

function getSeniorityListSourceLabel() {
  const raw = String(state.preferences.seniorityListDate || "").trim();
  if (!raw) return "";
  const parsed = new Date(`${raw} 00:00:00`);
  if (Number.isNaN(parsed.getTime())) return "Based on the published Pilot Seniority List";
  const month = parsed.toLocaleDateString("en-US", { month: "long" });
  return `Based on the ${parsed.getFullYear()} ${month} Seniority List`;
}

function getBidStrengthLabel() {
  const percent = Number(state.preferences.bidStrengthPercent || 0);
  return percent ? `General bid strength: ${percent}%` : "";
}

function getCompanySeniorityTopPercent() {
  const position = Number(state.preferences.seniorityNumber || 0);
  const rosterSize = Number(state.preferences.seniorityRosterSize || 0);
  if (!Number.isInteger(position) || !Number.isInteger(rosterSize) || position < 1 || position > rosterSize) return 0;
  return Math.max(1, Math.min(100, Math.round((position / rosterSize) * 100)));
}

function getBidStrengthSourceNote() {
  const source = String(state.preferences.identitySource || "").toLowerCase();
  if (source === PENDING_EMPLOYEE_IDENTITY_SOURCE) {
    return "Your employee number is saved while CrewBidPro waits for the current roster to include your profile details.";
  }
  if (source.includes("crewbids")) {
    return "This estimate combines current bid-window data with available profile information. It may differ from official CrewBids results.";
  }
  if (source.includes("seniority")) {
    return "This estimate starts with the published seniority list and automatically incorporates current bid-window data.";
  }
  return "This estimate combines available profile information and automatically incorporates current bid-window data.";
}

function getProfileMonthlyBidRankEstimate() {
  const estimate = state.profileMonthlyBidRankEstimate;
  if (!estimate?.available) return null;
  const rank = Number(estimate.rank);
  const count = Number(estimate.count);
  if (!Number.isInteger(rank) || !Number.isInteger(count) || rank < 1 || count < 1 || rank > count) return null;
  const strength = Number(estimate.monthlyBiddingStrengthPercent);
  return {
    ...estimate,
    rank,
    count,
    monthlyBiddingStrengthPercent: Number.isFinite(strength)
      ? strength
      : Math.round(((count - rank + 1) / count) * 100),
  };
}

function getProfileMonthlyBidPositionLabel() {
  const estimate = getProfileMonthlyBidRankEstimate();
  if (estimate?.estimated) {
    return `For the month of ${estimate.bidMonthLabel}, your estimated position is #${estimate.rank} of ${estimate.count}.`;
  }
  if (estimate) return `For the month of ${estimate.bidMonthLabel}, you are #${estimate.rank} of ${estimate.count}.`;
  if (state.profileMonthlyBidRankEstimate?.loading) return "Monthly bid position: checking the published CrewBids Bid List...";
  return state.profileMonthlyBidRankEstimate?.reason
    || "Monthly bid position is unavailable until a published CrewBids Bid List is available for your fleet.";
}

async function refreshProfileMonthlyBidRankEstimate() {
  const fleet = getProfileAircraftType();
  const seat = String(state.preferences.seatClass || "").toUpperCase();
  const employeeNumber = String(state.preferences.employeeNumber || "").trim();
  const identityConfirmedAt = String(state.preferences.identityConfirmedAt || "").trim();
  const requestKey = [fleet, seat, employeeNumber, identityConfirmedAt, state.preferences.assignmentUpdatedAt || ""].join(":");
  if (!employeeNumber || !identityConfirmedAt || !["747", "777"].includes(fleet) || !["CA", "FO", "FE"].includes(seat)) {
    state.profileMonthlyBidRankEstimate = null;
    state.profileMonthlyBidRankEstimateKey = "";
    renderProfileIdentitySummary();
    return;
  }

  state.profileMonthlyBidRankEstimateKey = requestKey;
  state.profileMonthlyBidRankEstimate = { loading: true };
  renderProfileIdentitySummary();
  try {
    const globalPackage = await loadLatestGlobalBidPackage(fleet);
    const bidMonth = String(globalPackage?.package?.bidMonth || "").trim();
    if (!/^\d{4}-\d{2}$/.test(bidMonth)) {
      throw new Error("No published CrewBids Bid List is currently available for your fleet.");
    }
    const payload = await crewbidsApiFetch(
      `/api/crewbids/monthly-bid-rank?fleet=${encodeURIComponent(fleet)}&bidMonth=${encodeURIComponent(bidMonth)}`,
    );
    if (state.profileMonthlyBidRankEstimateKey !== requestKey) return;
    state.profileMonthlyBidRankEstimate = payload?.estimate || {
      available: false,
      reason: "CrewBidPro could not find a monthly bid position for this package.",
    };
  } catch (error) {
    if (state.profileMonthlyBidRankEstimateKey !== requestKey) return;
    state.profileMonthlyBidRankEstimate = {
      available: false,
      reason: error.message || "CrewBidPro could not load your monthly bid position.",
    };
  }
  renderProfileIdentitySummary();
}

function formatSeniorityListDate(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const parsed = new Date(`${raw} 00:00:00`);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function renderProfileIdentitySummary() {
  const summary = $("profileIdentitySummary");
  if (!summary) return;
  const confirmed = Boolean(state.preferences.employeeNumber && state.preferences.identityConfirmedAt);
  const pending = isPendingEmployeeIdentity();
  summary.classList.toggle("is-confirmed", confirmed);
  summary.classList.toggle("is-pending", pending);
  if (pending) {
    summary.innerHTML = `
      <p class="profile-identity-label">Bid Strength Estimate</p>
      <strong>Employee verification pending</strong>
      <span class="profile-standing-line">${escapeHtml(getProfileStandingLabel())}</span>
      <span>Employee ${escapeHtml(state.preferences.employeeNumber)} saved for verification.</span>
      <span>${escapeHtml(getBidStrengthSourceNote())}</span>
    `;
    return;
  }
  if (!confirmed) {
    summary.innerHTML = `
      <p class="profile-identity-label">Bid Strength Estimate</p>
      <strong>Employee not confirmed</strong>
      <span>Confirm your employee number to estimate your bidding strength.</span>
    `;
    return;
  }
  const fleetSeatLabel = getProfileFleetSeatLabel();
  const seniorityListSourceLabel = getSeniorityListSourceLabel();
  const standingLabel = getProfileStandingLabel();
  const bidStrengthLabel = getBidStrengthLabel();
  const sourceNote = getBidStrengthSourceNote();
  const monthlyEstimate = getProfileMonthlyBidRankEstimate();
  const monthlyPositionLabel = getProfileMonthlyBidPositionLabel();
  const monthlyStrengthPrefix = monthlyEstimate?.estimated ? "Estimated bidding strength" : "Bidding strength";
  summary.innerHTML = `
    <p class="profile-identity-label">Bid Strength Estimate</p>
    <strong>${escapeHtml(fleetSeatLabel || "Employee confirmed")}</strong>
    ${seniorityListSourceLabel ? `<span class="profile-seniority-source">${escapeHtml(seniorityListSourceLabel)}</span>` : ""}
    <span class="profile-standing-line">${escapeHtml(standingLabel)}</span>
    ${bidStrengthLabel ? `<span class="profile-strength-line">${escapeHtml(bidStrengthLabel)}</span>` : ""}
    <span>${escapeHtml(sourceNote)}</span>
    <span class="profile-standing-line">${escapeHtml(monthlyPositionLabel)}</span>
    ${monthlyEstimate ? `<span class="profile-strength-line">${escapeHtml(monthlyStrengthPrefix)} for the month of ${escapeHtml(monthlyEstimate.bidMonthLabel)}: ${escapeHtml(monthlyEstimate.monthlyBiddingStrengthPercent)}%</span>` : ""}
    ${monthlyEstimate?.estimated
      ? `<span>This estimate places you among the published ${escapeHtml(monthlyEstimate.bidMonthLabel)} bidders using the current Pilot Seniority List because your account was created after that bid window closed. It is not an official bid-list position or an award prediction.</span>`
      : monthlyEstimate
        ? `<span>The ${escapeHtml(monthlyEstimate.bidMonthLabel)} position comes from the published CrewBids Bid List. It is separate from company seniority and is not an award prediction.</span>`
        : ""}
    <span>Employee ${escapeHtml(state.preferences.employeeNumber)} confirmed.</span>
  `;
}

function renderPreferencePills(containerId, values, selectedSet, tone = "neutral") {
  const container = $(containerId);
  if (!container) return;
  const visibleValues = unique([...values, ...selectedSet]);
  container.innerHTML = visibleValues.length ? visibleValues.map((value) => {
    const isActive = selectedSet.has(value);
    return `
    <button
      type="button"
      class="preference-pill ${isActive ? "is-active" : ""} preference-pill-${tone}"
      data-value="${escapeHtml(value)}"
    >
      <span>${escapeHtml(value)}</span>
      ${isActive && ["country", "airport"].includes(tone) ? `<span class="preference-pill-remove" aria-hidden="true">×</span>` : ""}
    </button>
  `;
  }).join("") : `<div class="preferences-note">Nothing available from the current bid package yet.</div>`;
}

function renderPreferenceChoicePills(containerId, values, selectedSet, tone = "neutral") {
  const container = $(containerId);
  if (!container) return;
  container.innerHTML = values.length ? values.map((item) => `
    <button
      type="button"
      class="preference-pill ${selectedSet.has(item.value) ? "is-active" : ""} preference-pill-${tone}"
      data-value="${escapeHtml(item.value)}"
    >${escapeHtml(item.label)}</button>
  `).join("") : `<div class="preferences-note">Nothing available from the current bid package yet.</div>`;
}

function setProfilePhotoStatus(message = "", tone = "") {
  const status = $("profilePhotoStatus");
  if (!status) return;
  status.className = "profile-photo-status";
  if (tone) status.classList.add(`is-${tone}`);
  status.textContent = message;
}

function renderProfileCropStudio() {
  const studio = $("profileCropStudio");
  const image = $("profileCropImage");
  if (!studio || !image) return;
  const hasPhoto = Boolean(state.preferences.avatarDataUrl);
  studio.hidden = !hasPhoto;
  if (!hasPhoto) {
    image.removeAttribute("src");
    return;
  }
  image.src = state.preferences.avatarDataUrl;
  image.style.objectPosition = getAvatarObjectPosition();
}

function renderSubscriptionPanel() {
  const panel = $("profileSubscriptionPanel");
  if (!panel) return;
  const status = getSubscriptionStatusCopy();
  const billingEmail = state.preferences.personalEmail || getCurrentAccountEmail() || "Add billing email";
  const workEmail = state.preferences.workEmail || getCurrentAccountEmail() || "Work email required";
  const nextBillingDate = formatSubscriptionDate(state.subscriptionAccess?.nextBillingDate);
  const billingSource = getBillingSourceLabel();
  const discountLabel = getDiscountLabel();
  const paidThrough = formatSubscriptionDate(state.subscriptionAccess?.paidThrough);
  const renewLabel = getRenewAutomaticallyLabel();
  const renewEnabled = canManageAutoRenew();
  const monthlyPriceClass = BILLING_PAUSED ? " class=\"subscription-price-paused\"" : "";
  const yearlyPriceClass = BILLING_PAUSED ? " class=\"subscription-price-paused\"" : "";
  const pausedPriceNote = BILLING_PAUSED ? "<small class=\"subscription-price-note\">FREE. FULL-ACCESS.</small>" : "";
  const footnote = BILLING_PAUSED
    ? "Payments are paused for now. You can continue using CrewBidPro normally."
    : "After the trial, users can stay Free Limited or upgrade. Canceled or failed payments downgrade to Free Limited instead of locking the app.";

  panel.innerHTML = `
    <div class="subscription-card-header">
      <p class="profile-subscription-label">Subscription</p>
      <span class="subscription-status-badge subscription-status-${escapeHtml(status.tone)}">${escapeHtml(status.badge)}</span>
    </div>
    <div class="subscription-current">
      <p class="subscription-current-title">${escapeHtml(status.title)}</p>
      <p class="profile-subscription-status">${escapeHtml(status.body)}</p>
    </div>
    <p class="subscription-section-label">Available terms</p>
    <div class="subscription-plan-grid" aria-label="Plan options">
      <article class="${subscriptionPlanCardClass("trial")}">
        <span>Trial terms</span>
        <strong>${escapeHtml(getTrialTermsTitle())}</strong>
        <small>${escapeHtml(getTrialTermsDetail())}</small>
      </article>
      <article class="${subscriptionPlanCardClass("monthly")}">
        <span>Monthly upgrade</span>
        <strong${monthlyPriceClass}>${escapeHtml(SUBSCRIPTION_MONTHLY_PRICE_LABEL)}</strong>
        ${pausedPriceNote}
      </article>
      <article class="${subscriptionPlanCardClass("yearly")}">
        <span>Yearly upgrade</span>
        <strong${yearlyPriceClass}>${escapeHtml(SUBSCRIPTION_YEARLY_PRICE_LABEL)}</strong>
        ${pausedPriceNote}
      </article>
    </div>
    <dl class="subscription-detail-list">
      <div>
        <dt>Billing email</dt>
        <dd>${escapeHtml(billingEmail)}</dd>
      </div>
      <div>
        <dt>Eligibility</dt>
        <dd>${escapeHtml(workEmail)}</dd>
      </div>
      <div>
        <dt>Billing source</dt>
        <dd>${escapeHtml(billingSource)}</dd>
      </div>
      <div>
        <dt>Discount</dt>
        <dd>${escapeHtml(discountLabel)}</dd>
      </div>
      <div>
        <dt>Paid through</dt>
        <dd>${escapeHtml(paidThrough)}</dd>
      </div>
      <div>
        <dt>Next billing date</dt>
        <dd>${escapeHtml(nextBillingDate)}</dd>
      </div>
      <div>
        <dt>Renew automatically</dt>
        <dd>
          <select id="subscriptionAutoRenew" class="subscription-inline-select" ${renewEnabled ? "" : "disabled"} aria-label="Renew automatically">
            <option value="unknown" ${renewEnabled ? "" : "selected"} disabled>${escapeHtml(renewLabel)}</option>
            <option value="yes" ${state.subscriptionAccess?.renewAutomatically === true ? "selected" : ""}>Yes</option>
            <option value="no" ${state.subscriptionAccess?.renewAutomatically === false ? "selected" : ""}>No</option>
          </select>
        </dd>
      </div>
    </dl>
    <div class="subscription-action-row">
      <button type="button" class="btn-primary subscription-action" data-subscription-action="primary">${escapeHtml(status.primaryAction)}</button>
    </div>
    <p class="subscription-footnote">${escapeHtml(footnote)}</p>
  `;

  panel.querySelectorAll("[data-subscription-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.subscriptionAction;
      if (BILLING_PAUSED) {
        openSubscriptionPlansModal();
        return;
      }
      if (action === "primary" && getCurrentAccessTier() === "paid") {
        await openStripeBillingPortal(button);
        return;
      }
      openSubscriptionPlansModal();
    });
  });
  $("subscriptionAutoRenew")?.addEventListener("change", handleAutoRenewChange);
}

const getSubscriptionPayload = () => ({
  workEmail: state.preferences.workEmail || getCurrentAccountEmail(),
  billingEmail: state.preferences.personalEmail || getCurrentAccountEmail(),
});

const formatSubscriptionDate = (value) => {
  if (!value) return "Not available yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not available yet";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const getBillingSourceLabel = () => {
  const source = state.subscriptionAccess?.billingSource || "";
  if (source === "stripe") return "Stripe";
  if (source === "manual") return "Manual";
  if (source === "prepaid") return "Prepaid";
  if (source === "comp") return "Admin comp";
  return "Not linked yet";
};

const getDiscountLabel = () => {
  const access = state.subscriptionAccess || {};
  const parts = [];
  if (access.discountCode) parts.push(access.discountCode);
  if (access.discountPercent !== "" && access.discountPercent !== null && access.discountPercent !== undefined) {
    parts.push(`${access.discountPercent}%`);
  }
  if (access.discountExpiresAt) parts.push(`expires ${formatSubscriptionDate(access.discountExpiresAt)}`);
  return parts.length ? parts.join(" / ") : "None";
};

const getRenewAutomaticallyLabel = () => {
  const value = state.subscriptionAccess?.renewAutomatically;
  if (value === true) return "Yes";
  if (value === false) return "No";
  return "Not linked yet";
};

const canManageAutoRenew = () => Boolean(state.subscriptionAccess?.stripeSubscriptionId);

const isTrialActive = () => {
  if (!state.subscriptionAccess || state.subscriptionAccess.stripeSubscriptionId) return false;
  if (state.subscriptionAccess.accessState !== "paid_active") return false;
  const trialEnd = new Date(state.subscriptionAccess.trialEnd || "");
  return !Number.isNaN(trialEnd.getTime()) && trialEnd.getTime() >= Date.now();
};

const isTrialExpired = () => {
  if (!state.subscriptionAccess || state.subscriptionAccess.stripeSubscriptionId) return false;
  const trialEnd = new Date(state.subscriptionAccess.trialEnd || "");
  return !Number.isNaN(trialEnd.getTime()) && trialEnd.getTime() < Date.now();
};

const isPaidPlanActive = (plan) => state.subscriptionAccess?.accessState === "paid_active"
  && Boolean(state.subscriptionAccess?.stripeSubscriptionId)
  && state.subscriptionAccess?.selectedPlan === plan;

function subscriptionPlanCardClass(kind) {
  const classes = ["subscription-plan-card"];
  if (kind === "trial" && isTrialActive()) classes.push("is-active-term");
  if (kind === "trial" && isTrialExpired()) classes.push("is-expired-term");
  if (kind === "monthly" && isPaidPlanActive("monthly")) classes.push("is-active-term");
  if (kind === "yearly" && isPaidPlanActive("yearly")) classes.push("is-active-term");
  return classes.join(" ");
}

function getTrialTermsTitle() {
  return isTrialExpired() ? "Full Access Trial has expired." : SUBSCRIPTION_TRIAL_LABEL;
}

function getTrialTermsDetail() {
  if (isTrialExpired()) {
    return "Downgraded to a Free Limited account. Please consider upgrading.";
  }
  const trialEnd = formatSubscriptionDate(state.subscriptionAccess?.trialEnd);
  const endText = trialEnd === "Not available yet" ? "" : `Trial ends ${trialEnd}. `;
  return `${endText}Payment only needed after trial expiration`;
}

function saveCachedSubscriptionAccess(access, workEmail) {
  if (!access || !workEmail) return false;
  return safeStorage.set(SUBSCRIPTION_ACCESS_STORAGE_KEY, JSON.stringify({
    accountEmail: getCurrentAccountEmail(),
    workEmail: normalizeEmail(workEmail),
    access,
    cachedAt: new Date().toISOString(),
  }));
}

function loadCachedSubscriptionAccess(workEmail) {
  const expectedWorkEmail = normalizeEmail(workEmail);
  if (!expectedWorkEmail) return null;
  try {
    const cached = JSON.parse(safeStorage.get(SUBSCRIPTION_ACCESS_STORAGE_KEY) || "{}");
    if (!cached || typeof cached !== "object" || Array.isArray(cached)) return null;
    if (normalizeEmail(cached.workEmail) !== expectedWorkEmail) return null;
    const currentAccountEmail = getCurrentAccountEmail();
    if (cached.accountEmail && currentAccountEmail && normalizeEmail(cached.accountEmail) !== currentAccountEmail) return null;
    return cached.access && typeof cached.access === "object" ? cached.access : null;
  } catch {
    return null;
  }
}

async function loadSubscriptionAccessState() {
  if (!shouldUseRemoteWorkspaceServices()) {
    state.subscriptionAccess = null;
    state.developerNote = null;
    return;
  }
  const workEmail = state.preferences.workEmail || getCurrentAccountEmail();
  if (!workEmail) {
    state.subscriptionAccess = null;
    state.developerNote = null;
    return;
  }
  const cachedAccess = loadCachedSubscriptionAccess(workEmail);
  if (navigator.onLine === false) {
    state.subscriptionAccess = cachedAccess || state.subscriptionAccess || null;
    state.developerNote = null;
    return;
  }
  try {
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    const response = await fetchWithWorkspaceTimeout(
      `/api/access-state?workEmail=${encodeURIComponent(workEmail)}`,
      { cache: "no-store", headers },
    );
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Unable to load subscription state");
    state.subscriptionAccess = result.access || null;
    state.developerNote = result.developerNote || null;
    saveCachedSubscriptionAccess(state.subscriptionAccess, workEmail);
  } catch (error) {
    console.warn("Subscription state unavailable:", error.message);
    state.subscriptionAccess = cachedAccess || state.subscriptionAccess || null;
    state.developerNote = null;
  }
}

function developerNoteSeenKey(note = state.developerNote) {
  const noteId = String(note?.id || "").trim();
  const identity = getCurrentAccountEmail() || normalizeEmail(state.preferences.workEmail) || "local";
  return noteId ? `${DEVELOPER_NOTE_SEEN_STORAGE_KEY}.${identity}.${noteId}` : "";
}

function hasSeenDeveloperNote(note = state.developerNote) {
  const key = developerNoteSeenKey(note);
  return Boolean(key && safeStorage.get(key));
}

function rememberDeveloperNoteSeen(note = state.developerNote) {
  const key = developerNoteSeenKey(note);
  if (key) safeStorage.set(key, new Date().toISOString());
}

function isDeveloperNotePreviewRequested(note = state.developerNote) {
  const requestedNoteId = getWorkspaceParams().get("developerNotePreview");
  return Boolean(requestedNoteId && requestedNoteId === String(note?.id || "").trim());
}

function renderDeveloperNoteBody(message = "") {
  const paragraphs = String(message || "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`).join("");
}

function renderDeveloperNoteAction(note = {}) {
  const label = String(note.actionLabel || "").trim();
  const href = String(note.actionHref || "").trim();
  if (!label || !href || !/^(?:\.\/)?[a-z0-9][^:\s]*$/i.test(href)) return "";
  return `
    <div class="new-user-splash-actions developer-note-actions">
      <a class="btn-primary topbar-action-link" href="${escapeHtml(href)}">${escapeHtml(label)}</a>
    </div>
  `;
}

function openDeveloperSplashNote() {
  const note = state.developerNote;
  const isPreview = isDeveloperNotePreviewRequested(note);
  if (!note?.id || !note.message || (!isPreview && hasSeenDeveloperNote(note))) return false;
  openSupportModal(
    note.title || "Note from the Developer",
    note.eyebrow || "CrewBidPro",
    `${renderDeveloperNoteBody(note.message)}${renderDeveloperNoteAction(note)}`
  );
  if (!isPreview) rememberDeveloperNoteSeen(note);
  state.developerNote = null;
  return true;
}

const K4_CONNECTION_DECLINE_KEY = "crewbidpro.k4ConnectionDeclined.v1";
const K4_CONNECTION_SESSION_KEY = "crewbidpro.k4ConnectionPrompt.v1";
let k4ConnectionPromptTimer = null;
let k4ConnectionPromptShown = false;
let k4ConnectionPromptReady = false;
let k4ConnectionStatusConfirmed = false;

function shouldOfferK4Connection() {
  const credential = state.crewbidsCredential;
  const identity = getCurrentAccountEmail().toLowerCase();
  if (!k4ConnectionPromptReady || !k4ConnectionStatusConfirmed || isProfilePage() || !identity
    || k4ConnectionPromptShown || navigator.onLine === false
    || state.siteUpdateCheckInFlight
    || state.crewbidsMonitorRefreshInFlight || state.crewbidsCredentialCheckInFlight
    || !credential || credential.configured
    || !["missing", "revoked"].includes(credential.status)) return false;
  if (safeStorage.get(`${K4_CONNECTION_DECLINE_KEY}:${identity}`) === "declined") return false;
  try {
    if (window.sessionStorage?.getItem(`${K4_CONNECTION_SESSION_KEY}:${identity}`)) return false;
  } catch { /* In-memory suppression still works if browser storage is blocked. */ }
  return true;
}

function scheduleK4ConnectionPrompt() {
  window.clearTimeout(k4ConnectionPromptTimer);
  k4ConnectionPromptTimer = window.setTimeout(() => {
    if (!shouldOfferK4Connection() || shouldShowNewUserSplash()) return;
    if ([...document.querySelectorAll('[role="dialog"], [aria-modal="true"]')]
      .some((dialog) => !dialog.closest("[hidden]") && dialog.getClientRects().length)) return;
    const identity = getCurrentAccountEmail().toLowerCase();
    k4ConnectionPromptShown = true;
    try {
      window.sessionStorage?.setItem(`${K4_CONNECTION_SESSION_KEY}:${identity}`, "shown");
    } catch { /* Suppress repeats in memory for this page. */ }
    openSupportModal("Get more from CrewBidPro — connect K4 CrewBid", "Your K4 connection", `
      <div class="k4-connection-splash">
        <p>Connect your K4 account to retrieve your previous bid submission, search K4 bid activity, and submit your bid list from CrewBidPro.</p>
        <p>You stay in control: connecting does not submit a bid. You review and submit your choices when you are ready.</p>
        <a id="k4ConnectionSetup" class="btn-primary" href="profile.html#crewbidsAccessProfileCard">Connect my K4 account</a>
        <button id="k4ConnectionDecline" type="button" class="btn-secondary">I understand. I do not want to connect my K4 account</button>
        <p class="muted">You can connect later in Crew Profile. This choice is remembered for your account in this browser.</p>
      </div>
    `);
    $("k4ConnectionDecline")?.addEventListener("click", () => {
      safeStorage.set(`${K4_CONNECTION_DECLINE_KEY}:${identity}`, "declined");
      closeSupportModal();
    });
    $("k4ConnectionSetup")?.focus();
  }, 1000);
}

function setupK4ConnectionPrompt() {
  if (isProfilePage()) return;
  // Existing startup dialogs retain priority; retry after a dialog closes.
  const observer = new MutationObserver(scheduleK4ConnectionPrompt);
  observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["hidden"] });
  k4ConnectionPromptReady = true;
  scheduleK4ConnectionPrompt();
}

async function scheduleStartupNotices() {
  if (!openDeveloperSplashNote()) scheduleNewUserSplash();
}

async function getSupabaseAccessToken(options = {}) {
  const { forceRemote = false } = options;
  if (!supabaseClient || (!forceRemote && !shouldUseRemoteWorkspaceServices())) return "";
  try {
    const { data, error } = await withWorkspaceStartupTimeout(
      supabaseClient.auth.getSession(),
      WORKSPACE_AUTH_TIMEOUT_MS,
      "Session verification",
    );
    if (error) throw error;
    return data.session?.access_token || "";
  } catch (error) {
    console.warn("Supabase session token unavailable:", error.message);
    return "";
  }
}

async function getSupabaseAuthHeaders(options = {}) {
  const fixtureToken = getOhioOnboardingFixtureToken();
  if (fixtureToken) return { [OHIO_ONBOARDING_FIXTURE_HEADER]: fixtureToken };
  const token = await getSupabaseAccessToken(options);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function clearOhioOnboardingFixtureBrowserState(nextToken = "") {
  for (const storage of [window.localStorage, window.sessionStorage]) {
    if (!storage) continue;
    const keys = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key && (key.startsWith("crewbidpro.") || key.startsWith("kalittaBidParser"))) keys.push(key);
    }
    keys.forEach((key) => storage.removeItem(key));
  }
  clearCookie(BID_LIST_COOKIE_KEY);
  clearCookie(PREFERENCES_COOKIE_KEY);
  if (nextToken) {
    window.sessionStorage?.setItem(OHIO_ONBOARDING_FIXTURE_TOKEN_KEY, nextToken);
    safeStorage.set(ACCOUNT_EMAIL_STORAGE_KEY, OHIO_ONBOARDING_FIXTURE_EMAIL);
    safeStorage.set(ACCOUNT_STATUS_STORAGE_KEY, "signed-in");
    safeStorage.set(ACCOUNT_LAST_ONLINE_AUTH_STORAGE_KEY, String(Date.now()));
  }
}

async function resetOhioOnboardingFixture() {
  const token = getOhioOnboardingFixtureToken();
  if (!token) return;
  if (!window.confirm("Reset the OHIO onboarding test account and erase its test progress?")) return;
  const resetButton = $("resetOhioOnboardingFixture");
  if (resetButton) {
    resetButton.disabled = true;
    resetButton.textContent = "RESETTING...";
  }
  try {
    const response = await fetch("/api/testing/onboarding-fixture/reset", {
      method: "POST",
      headers: { [OHIO_ONBOARDING_FIXTURE_HEADER]: token },
      cache: "no-store",
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.sessionToken) {
      throw new Error(payload.error || "Unable to reset the OHIO onboarding test account.");
    }
    const nextToken = payload.sessionToken;
    payload.sessionToken = "";
    clearOhioOnboardingFixtureBrowserState(nextToken);
    window.location.replace(payload.fixture?.next || "workspace.html?profileCheck=1");
  } catch (error) {
    if (resetButton) {
      resetButton.disabled = false;
      resetButton.textContent = "RESET TEST ACCOUNT";
    }
    window.alert(error.message || "Unable to reset the OHIO onboarding test account.");
  }
}

async function leaveOhioOnboardingFixture() {
  clearOhioOnboardingFixtureBrowserState("");
  await supabaseClient?.auth.signOut({ scope: "local" }).catch(() => {});
  window.location.assign("login.html?next=admin");
}

function setupOhioOnboardingFixtureControls() {
  if (!isOhioOnboardingFixtureMode() || $("ohioOnboardingFixtureBar")) return;
  const bar = document.createElement("aside");
  bar.id = "ohioOnboardingFixtureBar";
  bar.className = "ohio-onboarding-fixture-bar";
  bar.setAttribute("aria-label", "OHIO onboarding test account controls");
  bar.innerHTML = `
    <div>
      <strong>OHIO TEST ACCOUNT</strong>
      <span>Employee ID: ${OHIO_ONBOARDING_FIXTURE_EMPLOYEE_NUMBER}</span>
    </div>
    <div class="ohio-onboarding-fixture-actions">
      <button id="resetOhioOnboardingFixture" type="button">RESET TEST ACCOUNT</button>
      <button id="leaveOhioOnboardingFixture" type="button">RETURN TO ADMIN LOGIN</button>
    </div>
  `;
  document.body.prepend(bar);
  $("resetOhioOnboardingFixture")?.addEventListener("click", resetOhioOnboardingFixture);
  $("leaveOhioOnboardingFixture")?.addEventListener("click", leaveOhioOnboardingFixture);
}

async function crewbidsApiFetch(endpoint, options = {}) {
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in before using CrewBids features.");
  const response = await fetch(endpoint, {
    ...options,
    cache: options.cache || "no-store",
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) throw new Error(payload.error || "CrewBids request failed.");
  return payload;
}

const setSelectionOutputStatus = (message) => {
  const status = $("selectionOutputStatus");
  if (status) status.textContent = message;
};

function getCrewbidsSubmissionAgeMs(submission = state.crewbidsSubmission) {
  const timestamp = Date.parse(submission?.updatedAt || submission?.submittedAt || "");
  return Number.isFinite(timestamp) ? Date.now() - timestamp : Infinity;
}

function getCrewbidsMonitorCheckedAt(monitor = getCurrentCrewbidsMonitor()) {
  return monitor?.latestEvidence?.capturedAt
    || monitor?.latest_evidence?.capturedAt
    || monitor?.latest_evidence?.captured_at
    || monitor?.last_checked_at
    || monitor?.lastCheckedAt
    || "";
}

function getCrewbidsEvidenceAgeMs(monitor = getCurrentCrewbidsMonitor()) {
  const timestamp = Date.parse(getCrewbidsMonitorCheckedAt(monitor));
  return Number.isFinite(timestamp) ? Math.max(0, Date.now() - timestamp) : Infinity;
}

function hasCrewbidsStaleEvidence(monitor = getCurrentCrewbidsMonitor()) {
  return Boolean(getCrewbidsMonitorCheckedAt(monitor))
    && getCrewbidsEvidenceAgeMs(monitor) > CREWBIDS_STALE_EVIDENCE_MS;
}

function formatCrewbidsEvidenceAge(monitor = getCurrentCrewbidsMonitor()) {
  const ageMs = getCrewbidsEvidenceAgeMs(monitor);
  if (!Number.isFinite(ageMs)) return "";
  const minutes = Math.max(1, Math.round(ageMs / 60000));
  if (minutes < 60) return `${minutes} min old`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return `${hours} hr old`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} old`;
}

function getCrewbidsEvidenceFreshnessText(monitor = getCurrentCrewbidsMonitor(), options = {}) {
  const checked = getCrewbidsMonitorCheckedAt(monitor);
  if (!checked) return options.emptyText || "";
  const timestamp = formatCrewbidsEvidenceTimestamp(checked);
  const age = formatCrewbidsEvidenceAge(monitor);
  const ageText = age ? ` (${age})` : "";
  return timestamp ? `Last CrewBids data: ${timestamp}${ageText}.` : "";
}

function humanizeCrewbidsMonitorError(message = "") {
  const text = String(message || "").trim();
  const normalized = text.toLowerCase();
  if (!text) return "Kalitta CrewBids did not respond to the last check.";
  if (normalized.includes("no route to host")
    || normalized.includes("network is unreachable")
    || normalized.includes("timed out")
    || normalized.includes("urlopen error")
    || normalized.includes("connection refused")) {
    return "Kalitta CrewBids did not respond to the last check.";
  }
  if (normalized.includes("unauthorized") || normalized.includes("login") || normalized.includes("auth")) {
    return "CrewBids access could not be verified. Check saved access before relying on new CrewBids data.";
  }
  return "CrewBidPro could not refresh CrewBids data on the last check.";
}

function isCrewbidsSiteOfflineError(message = "") {
  const normalized = String(message || "").trim().toLowerCase();
  return normalized.includes("no route to host")
    || normalized.includes("network is unreachable")
    || normalized.includes("timed out")
    || normalized.includes("timeout")
    || normalized.includes("urlopen error")
    || normalized.includes("connection refused")
    || normalized.includes("currently offline");
}

function isCrewbidsCredentialRejectedError(message = "") {
  const normalized = String(message || "").trim().toLowerCase();
  return normalized.includes("login failed")
    || normalized.includes("re-enter your current crewbids password")
    || normalized.includes("invalid credential")
    || normalized.includes("unauthorized");
}

function humanizeCrewbidsCredentialError(message = "") {
  const text = String(message || "").trim();
  if (isCrewbidsSiteOfflineError(text)) {
    return "Kalitta CrewBids site is currently offline. Login verification cannot be completed at this time.";
  }
  return text || "CrewBids access could not be verified.";
}

function getCrewbidsDataNotice(monitor = getCurrentCrewbidsMonitor()) {
  const winOddsCheck = getCurrentPackageWinOddsCheck();
  if (Number(winOddsCheck?.recordCount || 0) > 0 && ["clear", "risk"].includes(String(winOddsCheck?.status || ""))) return "";
  const freshness = getCrewbidsEvidenceFreshnessText(monitor);
  if (monitor?.status === "error" || monitor?.last_error || monitor?.lastError) {
    return freshness
      ? "Odds cannot be determined from current CrewBids data."
      : "CrewBids is not responding, and no saved CrewBids data is available yet.";
  }
  if (hasCrewbidsStaleEvidence(monitor)) {
    return freshness ? `CrewBids data may be stale. ${freshness}` : "CrewBids data may be stale.";
  }
  return "";
}

function getCrewbidsCompactDataNotice(monitor = getCurrentCrewbidsMonitor()) {
  const age = formatCrewbidsEvidenceAge(monitor);
  if (monitor?.status === "error" || monitor?.last_error || monitor?.lastError) {
    return age ? `Saved data (${age}).` : "Saved data.";
  }
  if (hasCrewbidsStaleEvidence(monitor)) {
    if (navigator.onLine !== false) {
      return age ? `Updating CrewBids data - standby (${age}).` : "Updating CrewBids data - standby.";
    }
    return age ? `Stale data (${age}).` : "Stale data.";
  }
  return "";
}

function scheduleCrewbidsSubmissionVerificationRerender() {
  if (state.crewbidsSubmissionVerifyTimer) {
    window.clearTimeout(state.crewbidsSubmissionVerifyTimer);
    state.crewbidsSubmissionVerifyTimer = null;
  }
  const hasUnconfirmedSubmission = Object.values(state.crewbidsSubmission?.statuses || {})
    .some((item) => item?.status === "submitted");
  if (!hasUnconfirmedSubmission) return;
  const remainingMs = CREWBIDS_SUBMISSION_VERIFY_WINDOW_MS - getCrewbidsSubmissionAgeMs();
  if (remainingMs <= 0) return;
  state.crewbidsSubmissionVerifyTimer = window.setTimeout(() => {
    state.crewbidsSubmissionVerifyTimer = null;
    if (["selection", "submit"].includes(state.activeTab)) renderSelection();
  }, remainingMs + 250);
}

function restoreCrewbidsSubmissionState(submission = {}, identity = getCurrentBidSelectionIdentity()) {
  state.crewbidsSubmission = submission && Object.keys(submission).length ? submission : {};
  state.crewbidsCurrentServerBid = state.crewbidsSubmission?.source === "current-server-bid"
    ? {
      packageKey: identity?.key || state.crewbidsSubmission.packageKey || "",
      bidList: mapServerBidLinesToPackage(state.crewbidsSubmission.serverOrder || state.crewbidsSubmission.submittedOrder || []),
      rawBidList: state.crewbidsSubmission.serverOrder || state.crewbidsSubmission.submittedOrder || [],
      fetchedAt: state.crewbidsSubmission.updatedAt || "",
    }
    : null;
}

const getCrewbidsLineKey = (value) => String(value || "").trim().toUpperCase().replace(/\s+/g, "").replace(/^[A-Z]+(?=\d+$)/, "");

function mapServerBidLinesToPackage(serverBidList = []) {
  const available = new Set([
    ...(state.data?.lines || []).map((line) => line.name),
    ...(state.data?.reserves || []).map((reserve) => reserve.name),
  ].filter(Boolean));
  const normalizedLocalByUpper = new Map(state.bidList.map((line) => [getCrewbidsLineKey(line), line]));
  const packageLineByKey = new Map([...available].map((line) => [getCrewbidsLineKey(line), line]));
  return serverBidList.map((serverLine) => {
    const key = getCrewbidsLineKey(serverLine);
    return normalizedLocalByUpper.get(key) || packageLineByKey.get(key) || (available.has(serverLine) ? serverLine : "");
  }).filter(Boolean);
}

function mergeServerBidOrder(serverBidList = []) {
  const mappedServerLines = mapServerBidLinesToPackage(serverBidList);
  const nextOrder = [];
  for (const lineName of mappedServerLines) {
    if (!nextOrder.includes(lineName)) nextOrder.push(lineName);
  }
  for (const lineName of state.bidList) {
    if (!nextOrder.includes(lineName)) nextOrder.push(lineName);
  }
  state.bidList = filterBidListForData(nextOrder);
  return mappedServerLines;
}

function replaceWithServerBidOrder(serverBidList = []) {
  const mappedServerLines = mapServerBidLinesToPackage(serverBidList);
  state.bidList = filterBidListForData(mappedServerLines);
  return mappedServerLines;
}

function getUnsubmittedLocalBidLines(serverBidList = []) {
  const serverKeys = new Set(mapServerBidLinesToPackage(serverBidList).map(getCrewbidsLineKey));
  return filterBidListForData(state.bidList).filter((lineName) => !serverKeys.has(getCrewbidsLineKey(lineName)));
}

let pendingSubmittedBidsResolve = null;

function closeSubmittedBidsImportModal(choice = "cancel") {
  const modal = $("crewbidsSubmittedBidsModal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  const resolve = pendingSubmittedBidsResolve;
  pendingSubmittedBidsResolve = null;
  resolve?.(choice);
}

function confirmSubmittedBidsImport(serverBidList = [], unsubmittedLines = []) {
  const modal = $("crewbidsSubmittedBidsModal");
  if (!modal) {
    return Promise.resolve(window.confirm("Load server bids and keep local draft choices?") ? "preserve" : "clear");
  }
  const preview = $("crewbidsSubmittedBidsPreview");
  const serverCount = Array.isArray(serverBidList) ? serverBidList.length : 0;
  const unsubmittedCount = Array.isArray(unsubmittedLines) ? unsubmittedLines.length : 0;
  if (preview) {
    preview.innerHTML = `
      <strong>${serverCount} server choice${serverCount === 1 ? "" : "s"} returned</strong>
      <span>${serverCount ? escapeHtml(serverBidList.slice(0, 12).join(", ")) : "CrewBids returned no submitted choices."}${serverCount > 12 ? " ..." : ""}</span>
      <strong>${unsubmittedCount} local unsubmitted choice${unsubmittedCount === 1 ? "" : "s"}</strong>
      <span>${unsubmittedCount ? escapeHtml(unsubmittedLines.slice(0, 12).join(", ")) : "No local choices are outside the server order."}${unsubmittedCount > 12 ? " ..." : ""}</span>
    `;
  }
  if (pendingSubmittedBidsResolve) closeSubmittedBidsImportModal("cancel");
  modal.hidden = false;
  $("cancelSubmittedBidsImport")?.focus();
  return new Promise((resolve) => {
    pendingSubmittedBidsResolve = resolve;
  });
}

async function saveCrewbidsSubmissionSnapshot(identity, submission = {}, serverBidList = []) {
  if (!identity?.key || navigator.onLine === false) return submission;
  const response = await crewbidsApiFetch("/api/crewbids/submission-snapshot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      packageKey: identity.key,
      source: submission.source || "current-server-bid",
      submittedOrder: submission.submittedOrder || serverBidList,
      serverOrder: submission.serverOrder || serverBidList,
    }),
  });
  return response.submission || submission;
}

async function fetchCurrentCrewbidsBid() {
  const identity = getCurrentBidSelectionIdentity();
  if (!identity?.key || state.crewbidsCurrentBidInFlight) return;
  state.crewbidsCurrentBidInFlight = true;
  let finalMessage = "";
  setSelectionOutputStatus("Fetching submitted bids from CrewBids...");
  renderSelection();
  try {
    const payload = await crewbidsApiFetch(`/api/crewbids/current-bid?packageKey=${encodeURIComponent(identity.key)}`);
    const bidList = payload.serverBid?.bidList || [];
    const submission = payload.serverBid?.crewbidsSubmission || {};
    state.crewbidsSubmission = isCrewbidsSubmissionCurrentForIdentity(submission, identity) ? submission : {};
    scheduleCrewbidsSubmissionVerificationRerender();
    const unsubmittedLines = getUnsubmittedLocalBidLines(bidList);
    const choice = await confirmSubmittedBidsImport(bidList, unsubmittedLines);
    if (choice === "cancel") {
      finalMessage = "Submitted bids import canceled.";
      return;
    }
    const mappedServerLines = choice === "preserve"
      ? mergeServerBidOrder(bidList)
      : replaceWithServerBidOrder(bidList);
    state.crewbidsCurrentServerBid = {
      packageKey: identity.key,
      bidList: mappedServerLines,
      rawBidList: bidList,
      fetchedAt: new Date().toISOString(),
    };
    saveLegacyBidList();
    await saveLocalBidSelectionRecord({ pendingSync: true });
    await pushRemoteBidSelection(identity, state.bidList);
    state.crewbidsSubmission = await saveCrewbidsSubmissionSnapshot(identity, state.crewbidsSubmission, bidList);
    let monitoringText = "";
    try {
      await ensureCrewbidsMonitoringForSelection(identity, state.bidList);
      const refreshPayload = await requestCrewbidsMonitorRefreshWithRetry(identity);
      applyCrewbidsMonitoringRefreshPayload(refreshPayload, identity);
      await refreshCrewbidsSharedLineProjection({ force: true });
      monitoringText = " Live monitoring and Win Odds are connected to this imported order.";
    } catch (monitorError) {
      console.warn("Imported CrewBids order monitoring refresh deferred:", monitorError.message);
      await refreshCrewbidsSharedLineProjection({ force: true }).catch(() => null);
      monitoringText = " The order was saved, but its live monitor is still retrying.";
    }
    await saveLocalBidSelectionRecord({ pendingSync: false });
    const unmatchedCount = Math.max(0, bidList.length - mappedServerLines.length);
    const unmatchedText = unmatchedCount ? ` ${unmatchedCount} server choice${unmatchedCount === 1 ? "" : "s"} did not match this package and were not added.` : "";
    const preservedText = choice === "preserve" && unsubmittedLines.length
      ? ` ${unsubmittedLines.length} unsubmitted local choice${unsubmittedLines.length === 1 ? " was" : "s were"} preserved below the server order.`
      : unsubmittedLines.length
        ? ` ${unsubmittedLines.length} unsubmitted local choice${unsubmittedLines.length === 1 ? " was" : "s were"} cleared from this view.`
        : "";
    finalMessage = bidList.length
      ? `Submitted bids loaded from CrewBids. Official server choices are marked On Server.${unmatchedText}${preservedText}${monitoringText}`
      : "CrewBids returned no submitted bid lines for this package.";
  } catch (error) {
    if (state.crewbidsSubmission?.source === "current-server-bid") state.crewbidsSubmission = {};
    state.crewbidsCurrentServerBid = null;
    finalMessage = `Submitted bids unavailable: ${error.message}`;
  } finally {
    state.crewbidsCurrentBidInFlight = false;
    renderSelection();
    setSelectionOutputStatus(finalMessage);
    scheduleCrewbidsBidAvoidAutoCheck({ force: true });
  }
}

async function clearSelectionBidList() {
  if (!state.bidList.length) {
    setSelectionOutputStatus("No active selections to clear.");
    return;
  }
  const confirmed = await confirmDestructiveAction({
    title: "Clear Bid Selection?",
    message: "This clears your current CrewBidPro draft. It does not change bids already submitted on CrewBids.",
    confirmLabel: "Clear Draft",
  });
  if (!confirmed) return;
  state.bidList = [];
  state.showBidListOnly = false;
  const output = $("selectionOutput");
  if (output) {
    output.value = "";
    output.dataset.dirty = "false";
  }
  saveBidList();
  renderActiveTab();
  setSelectionOutputStatus("Bid Selection draft cleared. CrewBids submitted bids were not changed.");
}

let crewbidsSubmitTimer = null;
let pendingCrewbidsSubmitResolve = null;
let crewbidsSubmitCountdownComplete = false;

function updateCrewbidsSubmitButton() {
  const finalButton = $("confirmCrewbidsSubmit");
  if (!finalButton || !crewbidsSubmitCountdownComplete) return;
  const election = $("crewbidsCqTrainingElection");
  const electionRequired = Boolean(election && !election.hidden);
  const selectedElection = document.querySelector('input[name="crewbidsCqTrainingElection"]:checked');
  finalButton.disabled = electionRequired && !selectedElection;
  finalButton.textContent = electionRequired && !selectedElection
    ? "Choose CQ Option"
    : "Submit to CrewBids";
}

function renderCrewbidsSubmitRequirements(requirements = {}) {
  const election = $("crewbidsCqTrainingElection");
  const optionsContainer = $("crewbidsCqTrainingElectionOptions");
  if (!election || !optionsContainer) return;
  const cqElection = requirements?.cqTrainingElection || {};
  const options = Array.isArray(cqElection.options) ? cqElection.options : [];
  election.hidden = !cqElection.required;
  optionsContainer.innerHTML = cqElection.required
    ? options.map((option) => `
        <label class="crewbids-cq-election-option">
          <input type="radio" name="crewbidsCqTrainingElection" value="${escapeHtml(option.code || "")}">
          <span>${escapeHtml(option.label || "")}</span>
        </label>
      `).join("")
    : "";
  optionsContainer.onchange = updateCrewbidsSubmitButton;
}

function closeCrewbidsSubmitModal(confirmed = false) {
  const modal = $("crewbidsSubmitModal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  if (crewbidsSubmitTimer) window.clearInterval(crewbidsSubmitTimer);
  crewbidsSubmitTimer = null;
  crewbidsSubmitCountdownComplete = false;
  const resolve = pendingCrewbidsSubmitResolve;
  pendingCrewbidsSubmitResolve = null;
  const selectedElection = document.querySelector('input[name="crewbidsCqTrainingElection"]:checked');
  resolve?.({
    confirmed,
    cqTrainingElection: confirmed ? String(selectedElection?.value || "") : "",
  });
}

function confirmCrewbidsSubmit(bidList, requirements = {}) {
  const modal = $("crewbidsSubmitModal");
  if (!modal) {
    return Promise.resolve({
      confirmed: !requirements?.cqTrainingElection?.required && window.confirm("Submit this bid order to CrewBids?"),
      cqTrainingElection: "",
    });
  }
  const finalButton = $("confirmCrewbidsSubmit");
  const preview = $("crewbidsSubmitPreview");
  if (preview) {
    preview.innerHTML = `
      <strong>${bidList.length} bid choice${bidList.length === 1 ? "" : "s"}</strong>
      <span>${escapeHtml(bidList.slice(0, 12).join(", "))}${bidList.length > 12 ? " ..." : ""}</span>
    `;
  }
  renderCrewbidsSubmitRequirements(requirements);
  crewbidsSubmitCountdownComplete = false;
  let remaining = 5;
  if (finalButton) {
    finalButton.disabled = true;
    finalButton.textContent = `Wait ${remaining}`;
  }
  modal.hidden = false;
  $("cancelCrewbidsSubmit")?.focus();
  crewbidsSubmitTimer = window.setInterval(() => {
    remaining -= 1;
    if (!finalButton) return;
    if (remaining > 0) {
      finalButton.textContent = `Wait ${remaining}`;
      return;
    }
    crewbidsSubmitCountdownComplete = true;
    updateCrewbidsSubmitButton();
    window.clearInterval(crewbidsSubmitTimer);
    crewbidsSubmitTimer = null;
  }, 1000);
  return new Promise((resolve) => {
    pendingCrewbidsSubmitResolve = resolve;
  });
}

async function submitCrewbidsBidList() {
  const identity = getCurrentBidSelectionIdentity();
  const bidList = filterBidListForData(state.bidList);
  if (!identity?.key) {
    setSelectionOutputStatus("Load a bid package before submitting to CrewBids.");
    return;
  }
  if (!state.crewbidsCredential?.configured || state.crewbidsCredential?.status === "needs_update") {
    setSelectionOutputStatus("Add active Kalitta CrewBids credentials in Crew Profile before submitting a new bid.");
    return;
  }
  if (!bidList.length || state.crewbidsSubmissionInFlight) return;
  state.crewbidsSubmissionInFlight = true;
  let finalMessage = "";
  setSelectionOutputStatus("Checking CrewBids submission requirements...");
  renderSelection();
  try {
    const requirementsPayload = await crewbidsApiFetch(
      `/api/crewbids/submission-requirements?packageKey=${encodeURIComponent(identity.key)}`,
    );
    const decision = await confirmCrewbidsSubmit(bidList, requirementsPayload.requirements || {});
    if (!decision.confirmed) {
      finalMessage = "CrewBids submission canceled.";
      return;
    }
    setSelectionOutputStatus("Submitting bid order to CrewBids...");
    await pushRemoteBidSelection(identity, bidList, { updateCurrentLocal: true });
    const payload = await crewbidsApiFetch("/api/crewbids/submit-bid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        packageKey: identity.key,
        bidList,
        confirmation: "submit-crewbids-bid",
        cqTrainingElection: decision.cqTrainingElection,
      }),
    });
    state.crewbidsSubmission = payload.submission || {};
    if (payload?.monitor) {
      state.crewbidsMonitors = [
        payload.monitor,
        ...(state.crewbidsMonitors || []).filter((item) => (
          item.id !== payload.monitor.id
          && getCrewbidsPackageKey(item) !== getCrewbidsPackageKey(payload.monitor)
        )),
      ];
    }
    state.crewbidsCurrentServerBid = null;
    scheduleCrewbidsSubmissionVerificationRerender();
    const confirmedCount = Object.values(state.crewbidsSubmission.statuses || {}).filter((item) => item?.status === "confirmed").length;
    finalMessage = confirmedCount === bidList.length
      ? `CrewBids submission confirmed for ${confirmedCount} bid choice${confirmedCount === 1 ? "" : "s"}.`
      : `CrewBids submission sent. ${confirmedCount} of ${bidList.length} choices matched the current server order.`;
    openCrewbidsSubmissionSuccessNotice({ confirmedCount, totalCount: bidList.length });
    if (navigator.onLine !== false) {
      try {
        setSelectionOutputStatus(`${finalMessage} Refreshing CrewBids evidence for Win Odds...`);
        await ensureCrewbidsMonitoringForSelection(identity, bidList);
        const refreshPayload = await requestCrewbidsMonitorRefreshWithRetry(identity);
        applyCrewbidsMonitoringRefreshPayload(refreshPayload, identity);
        const checkedAt = formatCrewbidsEvidenceTimestamp(refreshPayload.checkedAt || refreshPayload.winOdds?.checkedAt || "");
        finalMessage += checkedAt ? ` Win Odds refreshed ${checkedAt}.` : " Win Odds refreshed.";
      } catch (refreshError) {
        console.warn("Post-submit CrewBids evidence refresh failed:", refreshError.message);
        const savedNotice = getCrewbidsDataNotice();
        finalMessage += savedNotice
          ? ` Win Odds are using saved CrewBids evidence. ${savedNotice}`
          : ` Win Odds refresh unavailable: ${refreshError.message}`;
      }
    }
  } catch (error) {
    finalMessage = `CrewBids submission failed: ${error.message}`;
  } finally {
    state.crewbidsSubmissionInFlight = false;
    renderCrewbidsEvidenceDependentViews();
    setSelectionOutputStatus(finalMessage);
  }
}

function openCrewbidsSubmissionSuccessNotice({ confirmedCount = 0, totalCount = 0 } = {}) {
  const matchNotice = confirmedCount === totalCount
    ? `CrewBids matched all ${totalCount} bid choice${totalCount === 1 ? "" : "s"} in the current server order.`
    : `CrewBids matched ${confirmedCount} of ${totalCount} bid choices in the current server order. Verify your official order directly in CrewBids.`;
  openSupportModal("Bid successfully submitted", "CrewBids Confirmation", `
    <div class="message-window-empty">
      <p><strong>Your bid was successfully submitted to Kalitta CrewBids.</strong></p>
      <p>${escapeHtml(matchNotice)}</p>
      <p>You should receive a confirmation email from <strong>coba@kalittaair.com</strong>, usually within approximately 1–2 minutes.</p>
      <p>If the email does not arrive, assume there may be an issue with the submission. Wait a few minutes and try again, or use Contact Developer for help.</p>
      <p>Please verify your official bid order in CrewBids.</p>
    </div>
  `);
}

function getCurrentCrewbidsMonitor() {
  const identity = getCurrentBidSelectionIdentity();
  if (!identity?.key) return null;
  return (state.crewbidsMonitors || []).find((monitor) => monitor.package_key === identity.key || monitor.packageKey === identity.key) || null;
}

function getCrewbidsMonitorCyclePhase(monitor = null) {
  const cycle = state.crewbidsCycle || {};
  const monitorBidMonth = String(monitor?.bid_month || monitor?.bidMonth || "").trim();
  const cycleBidMonth = String(cycle.bidMonth || "").trim();
  if (!monitorBidMonth || !cycleBidMonth) return "unknown";
  if (monitorBidMonth < cycleBidMonth) return "closed";
  if (monitorBidMonth > cycleBidMonth) return "pending";
  const now = Date.now();
  const openAt = Date.parse(cycle.effectiveOpenAt || cycle.opensAt || "");
  const closeAt = Date.parse(cycle.effectiveCloseAt || cycle.closesAt || "");
  if (Number.isFinite(closeAt) && now > closeAt) return "closed";
  if (Number.isFinite(openAt) && now < openAt) return "pending";
  return cycle.isOpen ? "open" : "pending";
}

function getCurrentCrewbidsSharedLineProjection() {
  const identity = getCurrentBidSelectionIdentity();
  const projection = state.crewbidsSharedLineProjection;
  return identity?.key && projection?.packageKey === identity.key ? projection : null;
}

function getCurrentCrewbidsSharedRuleCheck(checkKey) {
  const projection = getCurrentCrewbidsSharedLineProjection();
  const check = projection?.[checkKey];
  return check && typeof check === "object" ? check : null;
}

async function ensureCrewbidsMonitoringForSelection(identity = getCurrentBidSelectionIdentity(), bidList = filterBidListForData(state.bidList)) {
  const selectedLines = Array.isArray(bidList) ? bidList.filter((line) => String(line || "").trim()) : [];
  const existingMonitor = (state.crewbidsMonitors || []).find((monitor) => getCrewbidsPackageKey(monitor) === identity?.key);
  if (state.crewbidsMonitorAutoStartInFlight
    || state.crewbidsMonitorManualRefreshInFlight
    || navigator.onLine === false
    || !identity?.key) return null;
  if (!selectedLines.length) {
    if (!existingMonitor || ["paused", "expired"].includes(existingMonitor.status)) return null;
    state.crewbidsMonitorAutoStartInFlight = true;
    try {
      const payload = await crewbidsApiFetch("/api/crewbids/monitor/pause", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: existingMonitor.id, packageKey: identity.key }),
      });
      if (payload?.monitor) {
        state.crewbidsMonitors = (state.crewbidsMonitors || []).map((monitor) => (
          monitor.id === payload.monitor.id ? payload.monitor : monitor
        ));
      }
      return null;
    } finally {
      state.crewbidsMonitorAutoStartInFlight = false;
    }
  }
  if (!state.crewbidsCredential?.configured) return null;
  const cyclePhase = getCrewbidsMonitorCyclePhase(existingMonitor || { bidMonth: identity.bidMonth });
  if (cyclePhase === "closed") return null;
  if (existingMonitor && !["paused", "error", "expired", "needs_reauth"].includes(existingMonitor.status)) return null;
  state.crewbidsMonitorAutoStartInFlight = true;
  try {
    const payload = await crewbidsApiFetch("/api/crewbids/monitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packageKey: identity.key, consent: true }),
    });
    if (payload?.monitor) {
      state.crewbidsMonitors = [
        payload.monitor,
        ...(state.crewbidsMonitors || []).filter((item) => item.id !== payload.monitor.id && getCrewbidsPackageKey(item) !== getCrewbidsPackageKey(payload.monitor)),
      ];
    }
    return payload?.monitor || null;
  } finally {
    state.crewbidsMonitorAutoStartInFlight = false;
  }
}

function normalizeCrewbidsLineName(value) {
  const text = String(value || "").trim().toUpperCase();
  const match = text.match(/(\d+)/);
  return match ? `F${Number(match[1])}` : text;
}

function getCurrentCrewbidsAlerts() {
  const monitor = getCurrentCrewbidsMonitor();
  if (!monitor?.id) return [];
  const packageWinOddsCheck = getCurrentPackageWinOddsCheck() || {};
  const manualCheckedAtMs = packageWinOddsCheck.checkedAt
    ? new Date(packageWinOddsCheck.checkedAt).getTime()
    : 0;
  const manualBidAvoidCheck = state.crewbidsBidAvoidCheck || null;
  const manualBidAvoidCheckedAtMs = manualBidAvoidCheck?.checkedAt
    ? new Date(manualBidAvoidCheck.checkedAt).getTime()
    : 0;
  const alertHasPackageRiskOnlyChoices = (alert) => {
    const affected = alert?.affected_choices || alert?.affectedChoices || [];
    return Array.isArray(affected) && affected.some((item) => item?.packageRiskOnly === true);
  };
  return (state.crewbidsAlerts || []).filter((alert) => (
    (alert.monitor_id === monitor.id || alert.monitorId === monitor.id)
      && !alert.acknowledged_at
      && ((
        alert.alert_type === "bid_avoid"
        && (alert.current_state || alert.currentState || {}).projectionModel === "bid_avoid_award_walk"
        && isCurrentCrewbidsBidAvoidCheck(alert.current_state || alert.currentState || {})
        && (!manualBidAvoidCheck || (
          manualBidAvoidCheck.status === "avoid_match"
          && (!manualBidAvoidCheckedAtMs || Number.isNaN(manualBidAvoidCheckedAtMs) || new Date(alert.created_at || alert.createdAt || 0).getTime() >= manualBidAvoidCheckedAtMs)
        ))
      ) || (
        alert.alert_type === "outbid_risk"
        && (alert.current_state || alert.currentState || {}).capacityAware === true
        && (alert.current_state || alert.currentState || {}).projectionModel === "seniority_award_walk"
        && (
          alertHasPackageRiskOnlyChoices(alert)
          || !manualCheckedAtMs
          || Number.isNaN(manualCheckedAtMs)
          || new Date(alert.created_at || alert.createdAt || 0).getTime() >= manualCheckedAtMs
        )
      ))
  ));
}

function getCrewbidsAlertsForLine(lineName) {
  const normalizedLine = normalizeCrewbidsLineName(lineName);
  const candidates = [];
  const winOddsCheck = getCurrentPackageWinOddsCheck() || {};
  const winOddsAffected = Array.isArray(winOddsCheck.affectedChoices) ? winOddsCheck.affectedChoices : [];
  const winOddsPackageRisk = Array.isArray(winOddsCheck.packageRiskChoices) ? winOddsCheck.packageRiskChoices : [];
  const hasAuthoritativeWinOdds = winOddsCheck.checkedAt && ["clear", "risk"].includes(String(winOddsCheck.status || ""));
  if (hasAuthoritativeWinOdds && winOddsCheck.status === "risk") {
    [...winOddsAffected, ...winOddsPackageRisk].forEach((item) => {
      if (normalizeCrewbidsLineName(item.normalizedLine || item.line) === normalizedLine) {
        candidates.push({
          alert: {
            id: "win-odds-refresh",
            alert_type: "outbid_risk",
            created_at: winOddsCheck.checkedAt || "",
          },
          item,
        });
      }
    });
  }
  getCurrentCrewbidsAlerts().forEach((alert) => {
    const affected = alert.affected_choices || alert.affectedChoices || [];
    const hasPackageRiskOnlyChoices = Array.isArray(affected)
      && affected.some((item) => item?.packageRiskOnly === true);
    if (hasAuthoritativeWinOdds && alert.alert_type === "outbid_risk" && !hasPackageRiskOnlyChoices) return;
    affected.forEach((item) => {
      if (normalizeCrewbidsLineName(item.normalizedLine || item.line) === normalizedLine) {
        candidates.push({ alert, item });
      }
    });
  });
  const savedBidAvoidCheck = state.crewbidsBidAvoidCheck || {};
  const sharedBidAvoidCheck = getCurrentCrewbidsSharedRuleCheck("bidAvoidCheck");
  const bidAvoidCheck = sharedBidAvoidCheck
    || (isCurrentCrewbidsBidAvoidCheck(savedBidAvoidCheck) ? savedBidAvoidCheck : {});
  const checkedAffected = Array.isArray(bidAvoidCheck.affectedChoices) ? bidAvoidCheck.affectedChoices : [];
  if (bidAvoidCheck.status === "avoid_match") {
    checkedAffected.forEach((item) => {
      if (normalizeCrewbidsLineName(item.normalizedLine || item.line) === normalizedLine) {
        candidates.push({
          alert: {
            id: "bid-avoid-check",
            alert_type: "bid_avoid",
            created_at: bidAvoidCheck.checkedAt || "",
          },
          item,
        });
      }
    });
  }
  const savedBuddyBidCheck = state.crewbidsBuddyBidCheck || {};
  const sharedBuddyBidCheck = getCurrentCrewbidsSharedRuleCheck("buddyBidCheck");
  const buddyBidCheck = sharedBuddyBidCheck
    || (isCurrentCrewbidsBuddyBidCheck(savedBuddyBidCheck) ? savedBuddyBidCheck : {});
  const buddyAffected = Array.isArray(buddyBidCheck.affectedChoices) ? buddyBidCheck.affectedChoices : [];
  if (buddyBidCheck.status === "buddy_match") {
    buddyAffected.forEach((item) => {
      if (normalizeCrewbidsLineName(item.normalizedLine || item.line) === normalizedLine) {
        candidates.push({
          alert: {
            id: "buddy-bid-check",
            alert_type: "buddy_bid",
            created_at: buddyBidCheck.checkedAt || "",
          },
          item,
        });
      }
    });
  }
  candidates.sort((a, b) => new Date(b.alert.created_at || 0) - new Date(a.alert.created_at || 0));
  return candidates;
}

function getCrewbidsAlertForLine(lineName) {
  return getCrewbidsAlertsForLine(lineName)[0] || null;
}

function getCrewbidsAlertForLineByType(lineName, alertType) {
  return getCrewbidsAlertsForLine(lineName).find((candidate) => candidate.alert?.alert_type === alertType) || null;
}

function getSeenOutbidAlertKeys() {
  try {
    const parsed = JSON.parse(safeStorage.get(CREWBIDS_SEEN_OUTBID_ALERTS_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.filter(Boolean) : []);
  } catch {
    return new Set();
  }
}

function saveSeenOutbidAlertKeys(keys) {
  safeStorage.set(CREWBIDS_SEEN_OUTBID_ALERTS_STORAGE_KEY, JSON.stringify([...keys].slice(-300)));
}

function getCrewbidsOutbidAlertKey(match, lineName) {
  if (!match?.alert || match.alert.alert_type !== "outbid_risk") return "";
  const alertId = match.alert.id || match.alert.created_at || match.alert.createdAt || "outbid";
  return `${alertId}:${normalizeCrewbidsLineName(lineName)}`;
}

function getCrewbidsOutbidRowClass(lineName) {
  const match = getCrewbidsAlertForLine(lineName);
  if (match?.alert?.alert_type !== "outbid_risk") return "";
  if (!isOutbidRiskStillActionable(match.item)) return "";
  if (match.item?.packageRiskOnly === true) return "is-crewbids-outbid";
  const key = getCrewbidsOutbidAlertKey(match, lineName);
  return getSeenOutbidAlertKeys().has(key) ? "is-crewbids-outbid" : "is-crewbids-outbid is-crewbids-outbid-new";
}

function hasCrewbidsSubmittedOrServerEvidence(lineName) {
  const status = getCrewbidsSubmissionStatusForLine(lineName);
  return status?.status === "submitted" || status?.status === "confirmed";
}

function markOutbidAlertsSeenForLines(lineNames = []) {
  const keys = getSeenOutbidAlertKeys();
  let changed = false;
  lineNames.forEach((lineName) => {
    const key = getCrewbidsOutbidAlertKey(getCrewbidsAlertForLine(lineName), lineName);
    if (key && !keys.has(key)) {
      keys.add(key);
      changed = true;
    }
  });
  if (changed) saveSeenOutbidAlertKeys(keys);
}

function renderBidAvoidRuleText(separator = "; ") {
  return (state.crewbidsBidAvoidRules || [])
    .map((rule) => rule.pilot_name || rule.pilotName || rule.employee_number || rule.employeeNumber || "")
    .filter(Boolean)
    .join(separator);
}

function renderBidAvoidSummary() {
  const count = (state.crewbidsBidAvoidRules || []).length;
  if (state.crewbidsBidAvoidRequiresResolution) return "Update Bid Avoid list.";
  return count ? `${count} pilot${count === 1 ? "" : "s"} saved.` : "No pilots saved.";
}

function renderBidAvoidCheckStatusText() {
  if (state.crewbidsBidAvoidCheckInFlight) return "Checking CrewBids evidence...";
  if (state.crewbidsBidAvoidRequiresResolution) return "Update Bid Avoid list before checking CrewBids evidence.";
  const check = state.crewbidsBidAvoidCheck;
  if (!isCurrentCrewbidsBidAvoidCheck(check)) return "Checks use saved encrypted CrewBids access. Results show evidence, not a guarantee.";
  const affected = Array.isArray(check.affectedChoices) ? check.affectedChoices : [];
  const checkedAt = check.checkedAt ? ` Checked ${formatCrewbidsEvidenceTimestamp(check.checkedAt)}.` : "";
  if (check.status === "avoid_match") {
    const first = affected[0] || {};
    const lineText = first.line ? ` on ${first.line}` : "";
    const extra = Math.max(0, affected.length - 1);
    return `Bid Avoid evidence found${lineText}${extra ? ` and ${extra} more line${extra === 1 ? "" : "s"}` : ""}.${checkedAt}`;
  }
  if (check.status === "clear") {
    return `No matching Bid Avoid evidence found in current CrewBids data for this saved bid list.${checkedAt}`;
  }
  return check.message || "Bid Avoid check status unavailable.";
}

function renderBuddyBidSummary() {
  const count = (state.crewbidsBuddyBidRules || []).length;
  return count ? `${count} pilot${count === 1 ? "" : "s"} saved.` : "No pilots saved.";
}

function renderBuddyBidCheckStatusText() {
  if (state.crewbidsBuddyBidCheckInFlight) return "Checking CrewBids evidence...";
  const check = state.crewbidsBuddyBidCheck;
  if (!isCurrentCrewbidsBuddyBidCheck(check)) return "Checks use saved encrypted CrewBids access. Results show evidence, not a guarantee.";
  const affected = Array.isArray(check.affectedChoices) ? check.affectedChoices : [];
  const checkedAt = check.checkedAt ? ` Checked ${formatCrewbidsEvidenceTimestamp(check.checkedAt)}.` : "";
  if (check.status === "buddy_match") {
    const first = affected[0] || {};
    const lineText = first.line ? ` on ${first.line}` : "";
    const extra = Math.max(0, affected.length - 1);
    return `Buddy Bid evidence found${lineText}${extra ? ` and ${extra} more line${extra === 1 ? "" : "s"}` : ""}.${checkedAt}`;
  }
  if (check.status === "clear") {
    return `No matching Buddy Bid evidence found in current CrewBids data for this saved bid list.${checkedAt}`;
  }
  return check.message || "Buddy Bid check status unavailable.";
}

function renderBidsPlacedChoiceList(choices = []) {
  const visible = Array.isArray(choices) ? choices : [];
  if (!visible.length) return `<span class="crewbids-search-empty">No choices shown.</span>`;
  return `
    <div class="crewbids-search-choice-list">
      ${visible.map((choice) => `
        <span class="crewbids-search-choice">
          ${escapeHtml(choice.line || choice.rawLine || "")}
        </span>
      `).join("")}
    </div>
  `;
}

function renderCrewbidsSearchBidAvoidAction(pilot = {}) {
  const name = pilot.name || pilot.displayName || "Unknown pilot";
  const employeeNumber = String(pilot.employeeNumber || "").trim();
  if (!employeeNumber && !name) return "";
  const isAvoidSaved = pilotIsOnBidAvoidList({ name, employeeNumber });
  const isBuddySaved = pilotIsOnBuddyBidList({ name, employeeNumber });
  return `
    <div class="crewbids-search-actions">
      <button
        type="button"
        class="${isAvoidSaved ? "btn-secondary" : "btn-primary"} crewbids-search-bid-avoid-action"
        data-action="${isAvoidSaved ? "remove" : "add"}"
        data-name="${escapeHtml(name)}"
        data-employee-number="${escapeHtml(employeeNumber)}"
      >
        ${isAvoidSaved ? "Remove from Bid Avoid" : "Add to Bid Avoid"}
      </button>
      <button
        type="button"
        class="${isBuddySaved ? "btn-secondary" : "btn-primary"} crewbids-search-buddy-bid-action"
        data-action="${isBuddySaved ? "remove" : "add"}"
        data-name="${escapeHtml(name)}"
        data-employee-number="${escapeHtml(employeeNumber)}"
      >
        ${isBuddySaved ? "Remove from Buddy Bid" : "Add to Buddy Bid"}
      </button>
    </div>
  `;
}

function getCrewbidsSearchAssignmentLabel(pilot = {}) {
  const rosterLabel = getProfileAssignmentLabel(pilot.fleet, pilot.seatClass);
  const effectiveLabel = getProfileAssignmentLabel(
    pilot.effectiveFleet || pilot.fleet,
    pilot.effectiveSeatClass || pilot.seatClass,
  );
  if (effectiveLabel !== rosterLabel) {
    return `${effectiveLabel} current · Published roster ${rosterLabel}`;
  }
  return rosterLabel;
}

function renderBidsPlacedSearchResults(search) {
  const results = $("crewbidsBidsPlacedResults");
  const status = $("crewbidsBidsPlacedStatus");
  if (!results || !status) return;
  if (!search) {
    state.latestCrewbidsBidsPlacedSearch = null;
    status.textContent = "Search by pilot name, employee number, or line number.";
    results.innerHTML = "";
    return;
  }
  state.latestCrewbidsBidsPlacedSearch = search;
  const checkedAtText = search.capturedAt ? formatCrewbidsEvidenceTimestamp(search.capturedAt) : "";
  const checkedAt = checkedAtText ? ` Server checked ${checkedAtText}.` : "";
  const evidenceSource = search.cacheStatus === "refreshed"
    ? "fresh CrewBids pull"
    : search.cacheStatus === "saved"
      ? "saved Supabase cache"
      : "shared Supabase cache";
  status.textContent = `${search.message || ""}${checkedAt} Evidence source: ${evidenceSource}.`;
  const matches = Array.isArray(search.matches) ? search.matches : [];
  const rosterMatches = Array.isArray(search.rosterMatches) ? search.rosterMatches : [];
  const searchedScopes = Array.isArray(search.searchedScopes) ? search.searchedScopes : [];
  const announcement = search.announcement && typeof search.announcement === "object" ? search.announcement : {};
  const statusLabel = (status) => status && typeof status === "object" ? status.badge || status.message || "" : "";
  const currentFleet = String(search.scope?.fleet || "").trim();
  const rosterOnlyPilots = !matches.length
    ? rosterMatches.filter((pilot) => String(pilot.effectiveFleet || pilot.fleet || "").trim() === currentFleet)
    : [];
  const rosterOnlyCardMessage = (pilot) => {
    const availability = pilot.availabilityStatus && typeof pilot.availabilityStatus === "object" ? pilot.availabilityStatus : {};
    if (availability.type === "vacation_month") return "Vacation Month.";
    if (availability.type === "lca") return "LCA - Bid Unavailable.";
    if (announcement.type === "evidence_parse_empty") return "CrewBids evidence downloaded, but bid records could not be parsed.";
    if (announcement.type === "evidence_refresh_error") return "CrewBids bid placed evidence could not be checked.";
    return "No CrewBids bid placed record found.";
  };
  const rosterOnlyCardBadge = (pilot) => {
    const availability = pilot.availabilityStatus && typeof pilot.availabilityStatus === "object" ? pilot.availabilityStatus : {};
    if (availability.badge) return availability.badge;
    if (announcement.type === "evidence_parse_empty") return "Check incomplete";
    if (announcement.type === "evidence_refresh_error") return "Check failed";
    return "No bid";
  };
  const contextHtml = `
    ${rosterMatches.length ? `
      <div class="crewbids-search-context">
        <strong>Kalitta roster match</strong>
        ${rosterMatches.slice(0, 4).map((pilot) => `
          <span>
            ${escapeHtml(pilot.name || pilot.displayName || "Unknown pilot")}
            ${pilot.employeeNumber ? ` · Employee ${escapeHtml(pilot.employeeNumber)}` : ""}
            ${escapeHtml(getCrewbidsSearchAssignmentLabel(pilot))}
            ${statusLabel(pilot.availabilityStatus) ? ` · ${escapeHtml(statusLabel(pilot.availabilityStatus))}` : ""}
          </span>
        `).join("")}
      </div>
    ` : ""}
    ${searchedScopes.length > 1 ? `
      <div class="crewbids-search-context">
        <strong>Searched</strong>
        ${searchedScopes.map((scope) => `
          <span>${escapeHtml([scope.fleet, scope.seatClass, scope.bidMonth].filter(Boolean).join(" "))}: ${scope.cacheStatus === "error" ? "unavailable" : `${escapeHtml(scope.matchCount || 0)} match${Number(scope.matchCount || 0) === 1 ? "" : "es"}${scope.cacheStatus === "saved" ? " · saved" : ""}`}</span>
        `).join("")}
      </div>
    ` : ""}
  `;
  const announcementHtml = rosterOnlyPilots.length ? `
    ${rosterOnlyPilots.map((pilot) => `
      <article class="crewbids-search-result crewbids-search-result-no-bid" role="status">
        <div class="crewbids-search-result-header">
          <div>
            <strong>${escapeHtml(pilot.name || pilot.displayName || "Unknown pilot")}</strong>
          <span>${pilot.employeeNumber ? `Employee ${escapeHtml(pilot.employeeNumber)} · ` : ""}${escapeHtml(getCrewbidsSearchAssignmentLabel(pilot))}</span>
          </div>
          <span class="crewbids-search-seniority">${escapeHtml(rosterOnlyCardBadge(pilot))}</span>
        </div>
        <p class="crewbids-search-meta">
          ${escapeHtml(rosterOnlyCardMessage(pilot))}
          ${checkedAtText ? ` Server checked ${escapeHtml(checkedAtText)}.` : ""}
        </p>
        ${renderCrewbidsSearchBidAvoidAction(pilot)}
      </article>
    `).join("")}
  ` : "";
  const matchHtml = matches.length ? matches.map((match) => {
    const availabilityStatus = match.availabilityStatus && typeof match.availabilityStatus === "object" ? match.availabilityStatus : {};
    const choiceCount = Number(match.choiceCount || 0);
    const availabilityOverridesChoices = availabilityStatus.type === "vacation_month";
    const hasChoices = choiceCount > 0 && !availabilityOverridesChoices;
    const statusMessage = availabilityStatus.message || "";
    const badge = !hasChoices && availabilityStatus.badge
      ? availabilityStatus.badge
      : match.bidSeniority
      ? `#${match.bidSeniority}`
      : "Seniority n/a";
    return `
    <article class="crewbids-search-result ${!hasChoices && availabilityStatus.type ? "crewbids-search-result-no-bid" : ""}">
      <div class="crewbids-search-result-header">
        <div>
          <strong>${escapeHtml(match.name || "Unknown bidder")}</strong>
          <span>${escapeHtml(match.employeeNumber ? `Employee ${match.employeeNumber}` : "Employee unknown")}${match.scope ? ` · ${escapeHtml([match.scope.fleet, match.scope.seatClass].filter(Boolean).join(" "))}` : ""}</span>
        </div>
        <span class="crewbids-search-seniority">${escapeHtml(badge)}</span>
      </div>
      <p class="crewbids-search-meta">
        ${statusMessage && !hasChoices
          ? escapeHtml(statusMessage)
          : match.overlapComparable === false
            ? `${escapeHtml(choiceCount)} choices. Different bid class; overlap was not compared.`
            : `${escapeHtml(choiceCount)} choices. ${escapeHtml(match.overlapCount || 0)} overlap with your saved bid list.`}
      </p>
      ${hasChoices && match.overlapComparable !== false && match.overlapCount ? `
        <p class="crewbids-search-subhead">Overlap</p>
        ${renderBidsPlacedChoiceList(match.overlapChoices || [])}
      ` : ""}
      ${hasChoices ? `
        <p class="crewbids-search-subhead">Shown Choices</p>
        ${renderBidsPlacedChoiceList(match.choices || [])}
      ` : ""}
      ${renderCrewbidsSearchBidAvoidAction(match)}
    </article>
  `;
  }).join("") : (announcementHtml ? "" : `<div class="crewbids-search-empty">No matching CrewBids evidence found in the searched bids-placed cache.</div>`);
  results.innerHTML = `${contextHtml}${announcementHtml}${matchHtml}`;
}

function getCrewbidsBidsPlacedSearchAccessState(credential = state.crewbidsCredential || {}) {
  const status = String(credential.status || "missing").trim().toLowerCase();
  return {
    active: Boolean(credential.configured) && status !== "needs_update",
    pending: status === "pending_verification",
    needsUpdate: status === "needs_update",
    stored: Boolean(credential.stored) || Boolean(credential.configured) || status === "pending_verification",
  };
}

function hasCrewbidsBidsPlacedSearchAccessChanged(previousCredential, nextCredential) {
  const previous = getCrewbidsBidsPlacedSearchAccessState(previousCredential || {});
  const next = getCrewbidsBidsPlacedSearchAccessState(nextCredential || {});
  return ["active", "pending", "needsUpdate", "stored"].some((key) => previous[key] !== next[key]);
}

function shouldReturnToCrewbidsBidsPlacedSearch() {
  return isProfilePage() && getWorkspaceParams().get(CREWBIDS_PROFILE_RETURN_PARAM) === "search";
}

function returnToCrewbidsBidsPlacedSearch() {
  if (!shouldReturnToCrewbidsBidsPlacedSearch()) return false;
  window.location.assign(`workspace.html?profileCheck=1&${CREWBIDS_SEARCH_RETURN_PARAM}=1`);
  return true;
}

function clearCrewbidsBidsPlacedSearchReturnMarker() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete(CREWBIDS_SEARCH_RETURN_PARAM);
    window.history.replaceState(window.history.state, "", url);
  } catch {
    // The marker is a one-time navigation convenience; state prevents repeats.
  }
}

function maybeOpenCrewbidsBidsPlacedSearchReturn() {
  if (isProfilePage()
    || state.crewbidsBidsPlacedSearchReturnHandled
    || getWorkspaceParams().get(CREWBIDS_SEARCH_RETURN_PARAM) !== "1"
    || state.crewbidsCredential === null
    || !getCurrentBidSelectionIdentity()?.key) return false;
  state.crewbidsBidsPlacedSearchReturnHandled = true;
  clearCrewbidsBidsPlacedSearchReturnMarker();
  openCrewbidsBidsPlacedSearchModal();
  return true;
}

function refreshOpenCrewbidsBidsPlacedSearchModal() {
  const modal = $("supportModal");
  if (!modal || modal.hidden || modal.dataset.modalTitle !== "CrewBids Search") return false;
  openCrewbidsBidsPlacedSearchModal();
  return true;
}

function openCrewbidsBidsPlacedSearchModal() {
  const identity = getCurrentBidSelectionIdentity();
  const credential = state.crewbidsCredential || {};
  const access = getCrewbidsBidsPlacedSearchAccessState(credential);
  const hasCredential = access.active;
  const initialDisabled = !identity?.key || !hasCredential ? "disabled" : "";
  const accessNotice = access.pending ? `
    <div class="crewbids-search-access-needed">
      <strong>CrewBids access saved — verification pending</strong>
      <span>Your encrypted credentials are stored. Kalitta CrewBids was unavailable, so CrewBidPro could not verify them yet. Try the connection again when K4 returns; you do not need to save them again.</span>
      <button id="checkCrewbidsSearchConnection" type="button" class="btn-secondary">CHECK CONNECTION</button>
    </div>
  ` : !hasCredential ? `
    <div class="crewbids-search-access-needed">
      <strong>${access.needsUpdate ? "CrewBids access needs an update" : "CrewBids access needed"}</strong>
      <span>${access.needsUpdate
        ? "CrewBids rejected the saved login. Update it in Crew Profile, then CrewBidPro will bring you back to this search."
        : "This search uses your saved encrypted CrewBids credentials on the server. Add access in Crew Profile, then CrewBidPro will bring you back to this search."}</span>
      <a href="profile.html?${CREWBIDS_PROFILE_RETURN_PARAM}=search#crewbidsAccessProfileCard" class="btn-secondary crewbids-profile-access-link"><span>Kalitta - CrewBid</span><span>${access.needsUpdate ? "Update Credentials" : "Credentials"}</span></a>
    </div>
  ` : "";
  openSupportModal("CrewBids Search", "Bids Placed", `
    <form id="crewbidsBidsPlacedSearchForm" class="crewbids-search-panel">
      ${accessNotice}
      <div class="crewbids-search-row">
        <label>
          Search
          <input id="crewbidsBidsPlacedSearchInput" type="search" autocomplete="off" placeholder="Pilot name, employee number, or line" ${initialDisabled}>
        </label>
        <button id="runCrewbidsBidsPlacedSearch" type="submit" class="btn-primary" ${initialDisabled}>SEARCH</button>
        <button id="refreshCrewbidsBidsPlacedSearch" type="button" class="btn-secondary" ${initialDisabled}>REFRESH</button>
      </div>
      <p id="crewbidsBidsPlacedStatus" class="crewbids-search-status" aria-live="polite">
        ${access.pending
          ? "Saved access is waiting for Kalitta CrewBids verification."
          : !hasCredential
            ? (access.needsUpdate ? "Update CrewBids access before searching bids placed." : "Add CrewBids access before searching bids placed.")
            : identity?.key ? "Search by pilot name, employee number, or line number." : "Load a saved package before searching CrewBids bids placed."}
      </p>
      <div id="crewbidsBidsPlacedResults" class="crewbids-search-results"></div>
    </form>
  `);

  $("checkCrewbidsSearchConnection")?.addEventListener("click", async () => {
    await checkCrewbidsConnection();
    openCrewbidsBidsPlacedSearchModal();
  });

  const runSearch = async (forceRefresh = false) => {
    const currentIdentity = getCurrentBidSelectionIdentity();
    const input = $("crewbidsBidsPlacedSearchInput");
    const status = $("crewbidsBidsPlacedStatus");
    const query = input?.value.trim() || "";
    if (!currentIdentity?.key || state.crewbidsBidsPlacedSearchInFlight) return;
    if (!state.crewbidsCredential?.configured) {
      if (status) status.textContent = "Add CrewBids access in Crew Profile before searching bids placed.";
      return;
    }
    if (query.length < 2) {
      if (status) status.textContent = "Enter at least two characters.";
      return;
    }
    state.crewbidsBidsPlacedSearchInFlight = true;
    if (status) {
      status.textContent = forceRefresh ? "Refreshing the CrewBids Database." : "Searching shared CrewBids evidence...";
      status.classList.add("is-refreshing");
    }
    ["runCrewbidsBidsPlacedSearch", "refreshCrewbidsBidsPlacedSearch"].forEach((id) => {
      const button = $(id);
      if (button) button.disabled = true;
    });
    try {
      await pushRemoteBidSelection(currentIdentity, filterBidListForData(state.bidList), { updateCurrentLocal: true });
      const payload = await crewbidsApiFetch("/api/crewbids/bids-placed/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageKey: currentIdentity.key, query, forceRefresh }),
      });
      renderBidsPlacedSearchResults(payload.search || null);
    } catch (error) {
      if (status) status.textContent = error.message;
    } finally {
      state.crewbidsBidsPlacedSearchInFlight = false;
      if (status) status.classList.remove("is-refreshing");
      ["runCrewbidsBidsPlacedSearch", "refreshCrewbidsBidsPlacedSearch"].forEach((id) => {
        const button = $(id);
        if (button) button.disabled = false;
      });
    }
  };

  $("crewbidsBidsPlacedSearchForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch(false);
  });
  $("refreshCrewbidsBidsPlacedSearch")?.addEventListener("click", () => runSearch(true));
  $("crewbidsBidsPlacedResults")?.addEventListener("click", async (event) => {
    const button = event.target.closest(".crewbids-search-bid-avoid-action, .crewbids-search-buddy-bid-action");
    if (!button) return;
    const action = button.dataset.action || "add";
    const isBuddyBid = button.classList.contains("crewbids-search-buddy-bid-action");
    const pilot = {
      pilot_name: button.dataset.name || "",
      employee_number: button.dataset.employeeNumber || "",
    };
    const existing = isBuddyBid ? state.crewbidsBuddyBidRules || [] : state.crewbidsBidAvoidRules || [];
    const nextRules = action === "remove"
      ? existing.filter((rule) => !bidAvoidRuleMatchesPilot(rule, pilot))
      : existing.some((rule) => bidAvoidRuleMatchesPilot(rule, pilot))
        ? existing
        : [...existing, pilot];
    button.disabled = true;
    button.textContent = action === "remove" ? "Removing..." : "Adding...";
    try {
      if (isBuddyBid) await saveCrewbidsBuddyBidRules(nextRules);
      else await saveCrewbidsBidAvoidRules(nextRules);
      renderBidsPlacedSearchResults(state.latestCrewbidsBidsPlacedSearch);
      const status = $("crewbidsBidsPlacedStatus");
      if (status) status.textContent = action === "remove"
        ? `Removed from ${isBuddyBid ? "Buddy Bid" : "Bid Avoid"}.`
        : `Added to ${isBuddyBid ? "Buddy Bid" : "Bid Avoid"}.`;
      if (isBuddyBid) scheduleCrewbidsBuddyBidAutoCheck({ force: true });
      else scheduleCrewbidsBidAvoidAutoCheck({ force: true });
    } catch (error) {
      const status = $("crewbidsBidsPlacedStatus");
      if (status) status.textContent = error.message;
      button.disabled = false;
      button.textContent = action === "remove"
        ? `Remove from ${isBuddyBid ? "Buddy Bid" : "Bid Avoid"}`
        : `Add to ${isBuddyBid ? "Buddy Bid" : "Bid Avoid"}`;
    }
  });
  $("crewbidsBidsPlacedSearchInput")?.focus();
}

function renderWorkspaceMonthlyBidStrength() {
  const panel = $("selectionMonthlyBidStrength");
  const badge = $("selectionMonthlyBidStrengthBadge");
  const value = $("selectionMonthlyBidStrengthValue");
  const detail = $("selectionMonthlyBidStrengthDetail");
  if (!panel || !badge || !value || !detail) return;

  const identity = getCurrentBidSelectionIdentity();
  const estimate = getCurrentMonthlyBidRankEstimate();
  panel.classList.toggle("is-loading", state.monthlyBidRankEstimateInFlight);
  panel.classList.toggle("is-available", Boolean(estimate));
  panel.classList.toggle("is-unavailable", Boolean(state.monthlyBidRankEstimate && !estimate && !state.monthlyBidRankEstimateInFlight));

  if (!identity?.fleet || !identity?.bidMonth) {
    badge.textContent = "Waiting";
    value.textContent = "Load a bid package to show monthly bidding strength.";
    detail.textContent = "CrewBidPro matches the loaded bidding month to its published CrewBids Bid List.";
    return;
  }

  const bidMonthLabel = formatPackageBidMonth(identity.bidMonth) || "Current month";
  if (state.monthlyBidRankEstimateInFlight) {
    badge.textContent = "Checking";
    value.textContent = `Checking the ${bidMonthLabel} published Bid List…`;
    detail.textContent = "This updates automatically for your current fleet and seat.";
    return;
  }

  if (estimate) {
    const rank = Number(estimate.rank);
    const count = Number(estimate.count);
    const strength = Number.isFinite(Number(estimate.monthlyBiddingStrengthPercent))
      ? Number(estimate.monthlyBiddingStrengthPercent)
      : Math.round(((count - rank + 1) / count) * 100);
    const group = [estimate.fleet || identity.fleet, estimate.seatClass].filter(Boolean).join(" ");
    badge.textContent = `${strength}%`;
    value.textContent = `${estimate.bidMonthLabel || bidMonthLabel}: #${rank} of ${count}`;
    detail.textContent = `${group ? `${group} · ` : ""}Based on this month's published CrewBids Bid List; not an award prediction.`;
    return;
  }

  badge.textContent = "Unavailable";
  value.textContent = state.monthlyBidRankEstimate?.reason || `No ${bidMonthLabel} monthly position is available yet.`;
  detail.textContent = "CrewBidPro will check again when the loaded package, assignment, or bidding month changes.";
}

async function refreshWorkspaceMonthlyBidRankEstimate(options = null) {
  const { force = false } = options || {};
  const identity = getCurrentBidSelectionIdentity();
  const requestKey = identity?.fleet && identity?.bidMonth
    ? [
      identity.key,
      identity.fleet,
      identity.bidMonth,
      state.preferences.employeeNumber || "",
      state.preferences.seatClass || "",
      state.preferences.assignmentUpdatedAt || "",
    ].join(":")
    : "";

  if (!requestKey) {
    state.monthlyBidRankEstimate = null;
    state.monthlyBidRankEstimateKey = "";
    state.monthlyBidRankEstimateInFlight = false;
    renderWorkspaceMonthlyBidStrength();
    return;
  }
  if (!force
    && state.monthlyBidRankEstimateKey === requestKey
    && (state.monthlyBidRankEstimateInFlight || state.monthlyBidRankEstimate)) {
    renderWorkspaceMonthlyBidStrength();
    return;
  }

  state.monthlyBidRankEstimateKey = requestKey;
  state.monthlyBidRankEstimateInFlight = true;
  state.monthlyBidRankEstimate = null;
  renderWorkspaceMonthlyBidStrength();
  try {
    const payload = await crewbidsApiFetch(
      `/api/crewbids/monthly-bid-rank?fleet=${encodeURIComponent(identity.fleet)}&bidMonth=${encodeURIComponent(identity.bidMonth)}`,
    );
    if (state.monthlyBidRankEstimateKey !== requestKey) return;
    const estimate = payload?.estimate || {};
    state.monthlyBidRankEstimate = estimate;
  } catch (error) {
    if (state.monthlyBidRankEstimateKey !== requestKey) return;
    state.monthlyBidRankEstimate = {
      available: false,
      fleet: identity.fleet,
      bidMonth: identity.bidMonth,
      reason: error.message || "Monthly bidding strength is temporarily unavailable.",
    };
  } finally {
    if (state.monthlyBidRankEstimateKey === requestKey) {
      state.monthlyBidRankEstimateInFlight = false;
      renderWorkspaceMonthlyBidStrength();
    }
  }
}

async function refreshCrewbidsBidAvoidRules() {
  if (navigator.onLine === false || !getCurrentAccountEmail()) return;
  try {
    const payload = await crewbidsApiFetch("/api/crewbids/bid-avoid");
    state.crewbidsBidAvoidRules = payload.rules || [];
    state.crewbidsBidAvoidRequiresResolution = Boolean(payload.requiresResolution);
    state.crewbidsBidAvoidMigrationMessage = payload.migrationMessage || "";
    if (!state.crewbidsBidAvoidRequiresResolution) state.crewbidsBidAvoidNagShown = false;
  } catch (error) {
    console.warn("CrewBids Bid Avoid unavailable:", error.message);
  }
}

async function refreshCrewbidsBuddyBidRules() {
  if (navigator.onLine === false || !getCurrentAccountEmail()) return;
  try {
    const payload = await crewbidsApiFetch("/api/crewbids/buddy-bid");
    state.crewbidsBuddyBidRules = payload.rules || [];
  } catch (error) {
    console.warn("CrewBids Buddy Bid unavailable:", error.message);
  }
}

function renderProfileBidAvoidControls() {
  const input = $("profileCrewbidsBidAvoidInput");
  const list = $("profileCrewbidsBidAvoidList");
  const status = $("profileCrewbidsBidAvoidStatus");
  if (!input || !list) return;
  const rules = state.crewbidsBidAvoidRules || [];
  list.innerHTML = rules.length
    ? rules.map((rule) => {
      const name = rule.pilot_name || rule.pilotName || "";
      const employeeNumber = rule.employee_number || rule.employeeNumber || "";
      const label = [name, employeeNumber ? `Employee ${employeeNumber}` : ""].filter(Boolean).join(" · ");
      const needsResolution = rule.migrationStatus === "needs_resolution" || !employeeNumber;
      return `
        <span class="preference-pill preference-pill-airport is-active crewbids-avoid-pill ${needsResolution ? "needs-resolution" : ""}">
          ${escapeHtml(label || "Bid Avoid pilot")}
          ${needsResolution ? `<span class="crewbids-avoid-pill-warning">Needs update</span>` : ""}
          <button type="button" class="crewbids-avoid-pill-remove" data-employee-number="${escapeHtml(employeeNumber)}" data-pilot-name="${escapeHtml(name)}" aria-label="Remove ${escapeHtml(label || "Bid Avoid pilot")}">×</button>
        </span>
      `;
    }).join("")
    : `<div class="preferences-note">No Bid Avoid pilots saved.</div>`;
  if (status && !status.textContent) {
    status.textContent = state.crewbidsBidAvoidRequiresResolution
      ? "Some saved Bid Avoid entries need to be updated by selecting the exact pilot."
      : rules.length
        ? `${rules.length} active Bid Avoid pilot${rules.length === 1 ? "" : "s"}.`
        : "";
  }
  maybeShowBidAvoidMigrationPrompt();
}

function renderProfileBuddyBidControls() {
  const input = $("profileCrewbidsBuddyBidInput");
  const list = $("profileCrewbidsBuddyBidList");
  const status = $("profileCrewbidsBuddyBidStatus");
  if (!input || !list) return;
  const rules = state.crewbidsBuddyBidRules || [];
  list.innerHTML = rules.length
    ? rules.map((rule) => {
      const name = rule.pilot_name || rule.pilotName || "";
      const employeeNumber = rule.employee_number || rule.employeeNumber || "";
      const label = [name, employeeNumber ? `Employee ${employeeNumber}` : ""].filter(Boolean).join(" · ");
      return `
        <span class="preference-pill preference-pill-airport is-active crewbids-buddy-pill">
          ${escapeHtml(label || "Buddy Bid pilot")}
          <button type="button" class="crewbids-buddy-pill-remove" data-employee-number="${escapeHtml(employeeNumber)}" data-pilot-name="${escapeHtml(name)}" aria-label="Remove ${escapeHtml(label || "Buddy Bid pilot")}">×</button>
        </span>
      `;
    }).join("")
    : `<div class="preferences-note">No Buddy Bid pilots saved.</div>`;
  if (status && !status.textContent) {
    status.textContent = rules.length
      ? `${rules.length} active Buddy Bid pilot${rules.length === 1 ? "" : "s"}.`
      : "";
  }
}

function normalizeBidAvoidPilotName(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function getBidAvoidRuleEmployeeNumber(rule = {}) {
  return String(rule.employee_number || rule.employeeNumber || "").trim();
}

function getBidAvoidRuleName(rule = {}) {
  return String(rule.pilot_name || rule.pilotName || rule.name || "").trim();
}

function pilotNamesShareLastAndInitial(ruleName = "", pilotName = "") {
  const parseName = (value) => {
    const text = String(value || "").trim();
    if (!text) return null;
    if (text.includes(",")) {
      const [last = "", rest = ""] = text.split(",");
      return {
        last: normalizeBidAvoidPilotName(last),
        initial: normalizeBidAvoidPilotName(rest).charAt(0),
      };
    }
    const parts = normalizeBidAvoidPilotName(text).split(/\s+/).filter(Boolean);
    if (!parts.length) return null;
    return {
      last: parts[parts.length - 1],
      initial: (parts[0] || "").charAt(0),
    };
  };
  const rule = parseName(ruleName);
  const pilot = parseName(pilotName);
  return Boolean(rule?.last && pilot?.last && rule.last === pilot.last && rule.initial && pilot.initial && rule.initial === pilot.initial);
}

function bidAvoidRuleMatchesPilot(rule = {}, pilot = {}) {
  const ruleEmployee = getBidAvoidRuleEmployeeNumber(rule);
  const pilotEmployee = String(pilot.employeeNumber || pilot.employee_number || "").trim();
  if (ruleEmployee && pilotEmployee && ruleEmployee === pilotEmployee) return true;
  const ruleName = normalizeBidAvoidPilotName(getBidAvoidRuleName(rule));
  const pilotName = normalizeBidAvoidPilotName(pilot.name || pilot.displayName || pilot.pilot_name || pilot.pilotName || "");
  return Boolean(ruleName && pilotName && ruleName === pilotName);
}

function bidAvoidRuleMatchesBidderDisplay(rule = {}, pilot = {}) {
  if (bidAvoidRuleMatchesPilot(rule, pilot)) return true;
  return pilotNamesShareLastAndInitial(
    getBidAvoidRuleName(rule),
    pilot.name || pilot.displayName || pilot.pilot_name || pilot.pilotName || ""
  );
}

function pilotIsOnBidAvoidList(pilot = {}) {
  return (state.crewbidsBidAvoidRules || []).some((rule) => bidAvoidRuleMatchesPilot(rule, pilot));
}

function pilotIsOnBuddyBidList(pilot = {}) {
  return (state.crewbidsBuddyBidRules || []).some((rule) => bidAvoidRuleMatchesPilot(rule, pilot));
}

function pilotIsOnBuddyBidListForDisplay(pilot = {}) {
  return (state.crewbidsBuddyBidRules || []).some((rule) => bidAvoidRuleMatchesBidderDisplay(rule, pilot));
}

function getCrewbidsBidAvoidCheckKey(identity = getCurrentBidSelectionIdentity()) {
  const rulesKey = (state.crewbidsBidAvoidRules || [])
    .map((rule) => getBidAvoidRuleEmployeeNumber(rule) || normalizeBidAvoidPilotName(getBidAvoidRuleName(rule)))
    .filter(Boolean)
    .sort()
    .join(",");
  return [
    identity?.key || "",
    filterBidListForData(state.bidList).join(","),
    rulesKey,
  ].join("|");
}

function scheduleCrewbidsBidAvoidAutoCheck(options = {}) {
  if (isProfilePage()) return;
  if (state.crewbidsBidAvoidAutoCheckTimer) window.clearTimeout(state.crewbidsBidAvoidAutoCheckTimer);
  state.crewbidsBidAvoidAutoCheckTimer = window.setTimeout(() => {
    state.crewbidsBidAvoidAutoCheckTimer = null;
    runCrewbidsBidAvoidCheck({ silent: true, ...options }).catch((error) => console.warn("Bid Avoid auto-check failed:", error.message));
  }, 600);
}

function getCrewbidsBuddyBidCheckKey(identity = getCurrentBidSelectionIdentity()) {
  const rulesKey = (state.crewbidsBuddyBidRules || [])
    .map((rule) => getBidAvoidRuleEmployeeNumber(rule) || normalizeBidAvoidPilotName(getBidAvoidRuleName(rule)))
    .filter(Boolean)
    .sort()
    .join(",");
  return [
    identity?.key || "",
    filterBidListForData(state.bidList).join(","),
    rulesKey,
  ].join("|");
}

function scheduleCrewbidsBuddyBidAutoCheck(options = {}) {
  if (isProfilePage()) return;
  if (state.crewbidsBuddyBidAutoCheckTimer) window.clearTimeout(state.crewbidsBuddyBidAutoCheckTimer);
  state.crewbidsBuddyBidAutoCheckTimer = window.setTimeout(() => {
    state.crewbidsBuddyBidAutoCheckTimer = null;
    runCrewbidsBuddyBidCheck({ silent: true, ...options }).catch((error) => console.warn("Buddy Bid auto-check failed:", error.message));
  }, 600);
}

function getUnresolvedBidAvoidRules() {
  return (state.crewbidsBidAvoidRules || []).filter((rule) => {
    const employeeNumber = getBidAvoidRuleEmployeeNumber(rule);
    return rule.migrationStatus === "needs_resolution" || !employeeNumber;
  });
}

function maybeShowBidAvoidMigrationPrompt() {
  if (!isProfilePage() || !state.crewbidsBidAvoidRequiresResolution || state.crewbidsBidAvoidNagShown) return;
  const unresolved = getUnresolvedBidAvoidRules();
  if (!unresolved.length) return;
  state.crewbidsBidAvoidNagShown = true;
  openSupportModal("Update Bid Avoid", "CrewBids Alerts", `
    <p>Bid Avoid now uses confirmed Kalitta pilot records instead of free-text names.</p>
    <p>We kept your existing saved names. Clear matches were converted automatically. The entries below still need you to search and select the exact pilot so CrewBidPro can save the employee number.</p>
    <div class="crewbids-avoid-migration-list">
      ${unresolved.map((rule) => `<span>${escapeHtml(rule.pilot_name || rule.pilotName || rule.employee_number || rule.employeeNumber || "Bid Avoid pilot")}</span>`).join("")}
    </div>
  `);
}

async function saveCrewbidsBidAvoidRules(rules) {
  const entries = (rules || []).map((rule) => ({
    name: getBidAvoidRuleName(rule),
    employeeNumber: getBidAvoidRuleEmployeeNumber(rule),
  }));
  await crewbidsApiFetch("/api/crewbids/bid-avoid", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ entries }),
  });
  await refreshCrewbidsBidAvoidRules();
  state.crewbidsBidAvoidCheck = null;
  state.crewbidsBidAvoidAutoCheckKey = "";
  scheduleCrewbidsSharedLineProjectionRefresh();
}

async function saveCrewbidsBuddyBidRules(rules) {
  const entries = (rules || []).map((rule) => ({
    name: getBidAvoidRuleName(rule),
    employeeNumber: getBidAvoidRuleEmployeeNumber(rule),
  }));
  await crewbidsApiFetch("/api/crewbids/buddy-bid", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ entries }),
  });
  await refreshCrewbidsBuddyBidRules();
  state.crewbidsBuddyBidCheck = null;
  state.crewbidsBuddyBidAutoCheckKey = "";
  scheduleCrewbidsSharedLineProjectionRefresh();
}

async function saveProfileBidAvoidRules(rules, statusMessage = "Saving Bid Avoid list...") {
  const status = $("profileCrewbidsBidAvoidStatus");
  if (status) status.textContent = statusMessage;
  await saveCrewbidsBidAvoidRules(rules);
  renderProfileBidAvoidControls();
  if (status) {
    status.textContent = state.crewbidsBidAvoidRules.length
      ? `${state.crewbidsBidAvoidRules.length} Bid Avoid pilot${state.crewbidsBidAvoidRules.length === 1 ? "" : "s"} saved.`
      : "Bid Avoid list cleared.";
  }
}

async function saveProfileBuddyBidRules(rules, statusMessage = "Saving Buddy Bid list...") {
  const status = $("profileCrewbidsBuddyBidStatus");
  if (status) status.textContent = statusMessage;
  await saveCrewbidsBuddyBidRules(rules);
  renderProfileBuddyBidControls();
  if (status) {
    status.textContent = state.crewbidsBuddyBidRules.length
      ? `${state.crewbidsBuddyBidRules.length} Buddy Bid pilot${state.crewbidsBuddyBidRules.length === 1 ? "" : "s"} saved.`
      : "Buddy Bid list cleared.";
  }
}

function openProfileBidAvoidSearchResults(pilots, mode = "avoid") {
  const options = Array.isArray(pilots) ? pilots : [];
  const isBuddyBid = mode === "buddy";
  const title = isBuddyBid ? "Buddy Bid" : "Bid Avoid";
  openSupportModal("Select Pilot", title, `
    <div class="crewbids-avoid-search-results">
      ${options.length ? options.map((pilot) => {
        const name = pilot.name || pilot.displayName || "Unknown pilot";
        const employeeNumber = pilot.employeeNumber || "";
        const meta = [
          employeeNumber ? `Employee ${employeeNumber}` : "",
          [pilot.fleet, pilot.seatClass].filter(Boolean).join(" "),
          pilot.remarks || "",
        ].filter(Boolean).join(" · ");
        return `
          <button type="button" class="crewbids-avoid-search-option" data-name="${escapeHtml(name)}" data-employee-number="${escapeHtml(employeeNumber)}">
            <strong>${escapeHtml(name)}</strong>
            <span>${escapeHtml(meta)}</span>
          </button>
        `;
      }).join("") : `<p class="preferences-note">No matching pilots found.</p>`}
    </div>
  `);
  document.querySelectorAll(".crewbids-avoid-search-option").forEach((button) => {
    button.addEventListener("click", async () => {
      const selected = {
        pilot_name: button.dataset.name || "",
        employee_number: button.dataset.employeeNumber || "",
      };
      const existing = isBuddyBid ? state.crewbidsBuddyBidRules || [] : state.crewbidsBidAvoidRules || [];
      const alreadySaved = existing.some((rule) => bidAvoidRuleMatchesPilot(rule, selected));
      if (!alreadySaved) {
        try {
          if (isBuddyBid) await saveProfileBuddyBidRules([...existing, selected]);
          else await saveProfileBidAvoidRules([...existing, selected]);
        } catch (error) {
          const status = $(isBuddyBid ? "profileCrewbidsBuddyBidStatus" : "profileCrewbidsBidAvoidStatus");
          if (status) status.textContent = error.message;
        }
      }
      const closeButton = $("closeSupportModal");
      closeButton?.click();
    });
  });
}

function formatChoiceOrdinal(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  const mod100 = number % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${number}th`;
  switch (number % 10) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
}

function getCrewbidsBidAvoidRemarksForLine(lineName) {
  const match = getCrewbidsAlertForLineByType(lineName, "bid_avoid");
  if (match?.alert?.alert_type !== "bid_avoid") return [];
  const avoided = Array.isArray(match.item?.avoidedBidders) ? match.item.avoidedBidders : [];
  return avoided.map((bidder) => {
    const fullName = String(bidder.name || "Bid Avoid pilot").trim();
    const lastName = (fullName.split(",")[0] || fullName.split(/\s+/)[0] || "BID AVOID").trim().toUpperCase();
    const choiceNumbers = (Array.isArray(bidder.choices) ? bidder.choices : [])
      .map((choice) => Number(choice?.choice))
      .filter((choice) => Number.isFinite(choice) && choice > 0)
      .sort((a, b) => a - b);
    const projectedChoice = Number(bidder.projectedAward?.choice);
    const choice = choiceNumbers[0] || (Number.isFinite(projectedChoice) && projectedChoice > 0 ? projectedChoice : 0);
    return `BID AVOID - ${lastName}${choice ? ` - #${choice}` : ""}`;
  });
}

function getCrewbidsBuddyBidRemarksForLine(lineName) {
  const match = getCrewbidsAlertForLineByType(lineName, "buddy_bid");
  if (match?.alert?.alert_type !== "buddy_bid") return [];
  const buddies = Array.isArray(match.item?.buddyBidders) ? match.item.buddyBidders : [];
  return buddies.map((bidder) => {
    const fullName = String(bidder.name || "Buddy Bid pilot").trim();
    const lastName = (fullName.split(",")[0] || fullName.split(/\s+/)[0] || "BUDDY BID").trim().toUpperCase();
    return `BUDDY BID - ${lastName}`;
  });
}

function getCrewbidsSeniorityPressureRemarksForLine(lineName) {
  const match = getCrewbidsAlertForLineByType(lineName, "outbid_risk");
  if (match?.alert?.alert_type !== "outbid_risk") return [];
  const item = match.item || {};
  const pressure = Number(item.competitorCount || (Array.isArray(item.competitors) ? item.competitors.length : 0));
  if (!pressure) return [];
  if (isOutbidRiskStillActionable(item)) {
    return [
      "UNLIKELY TO HOLD\nBased on current CrewBids evidence, this line is projected to be filled before your seniority position.",
    ];
  }
  return [
    "SENIORITY PRESSURE\nSenior bidders are showing interest in this line. It may still be available depending on capacity and awards ahead of you.",
  ];
}

function getCrewbidsProjectedChoiceForLine(lineName) {
  const normalizedLine = normalizeCrewbidsLineName(lineName);
  const winOddsCheck = getCurrentPackageWinOddsCheck() || {};
  const projectedChoices = Array.isArray(winOddsCheck.projectedChoices) ? winOddsCheck.projectedChoices : [];
  const projectedMatches = projectedChoices.filter((item) => normalizeCrewbidsLineName(item?.normalizedLine || item?.line) === normalizedLine);
  if (projectedMatches.length) {
    const base = projectedMatches[0] || {};
    const seen = new Set();
    const competitors = [];
    projectedMatches.forEach((item) => {
      (Array.isArray(item?.competitors) ? item.competitors : []).forEach((pilot) => {
        if (!pilot || typeof pilot !== "object") return;
        const key = String(pilot.employeeNumber || `${pilot.name || ""}:${pilot.seatClass || item.seatClass || ""}:${pilot.bidSeniority || ""}`).trim();
        if (!key || seen.has(key)) return;
        seen.add(key);
        competitors.push({
          ...pilot,
          seatClass: pilot.seatClass || item.seatClass || "",
        });
      });
    });
    return {
      ...base,
      competitors,
      competitorCount: Math.max(Number(base.competitorCount || 0), competitors.length),
    };
  }
  const match = getCrewbidsAlertForLineByType(lineName, "outbid_risk");
  return match?.alert?.alert_type === "outbid_risk" ? match.item || null : null;
}

function getCrewbidsCrewResultRemarksForLine(lineName) {
  const normalizedLine = normalizeCrewbidsLineName(lineName);
  if (
    state.officialLineAwards.available
    && state.officialLineAwards.key === officialLineAwardsKey()
  ) {
    const officialSeats = state.officialLineAwards.lines?.[normalizedLine] || {};
    return ["CA", "FO"].flatMap((seat) => {
      const names = Array.isArray(officialSeats[seat]) ? officialSeats[seat] : [];
      if (!names.length) return [];
      const compactNames = names.slice(0, 3).join(" & ");
      const extra = Math.max(0, names.length - 3);
      return [`AWARDED ${seat} - ${compactNames}${extra ? ` +${extra}` : ""}`];
    });
  }

  const item = getCrewbidsProjectedChoiceForLine(lineName) || {};
  const competitors = Array.isArray(item.competitors) ? item.competitors : [];
  const grouped = competitors.reduce((groups, pilot) => {
    const seat = String(pilot?.seatClass || item.seatClass || "").trim().toUpperCase();
    if (!["CA", "FO"].includes(seat)) return groups;
    if (!groups[seat]) groups[seat] = [];
    groups[seat].push(pilot);
    return groups;
  }, {});
  return ["CA", "FO"].flatMap((seat) => {
    const pilots = grouped[seat] || [];
    if (!pilots.length) return [];
    const names = pilots.map((pilot) => getPilotLastName(pilot.name || `Projected ${seat}`)).filter(Boolean);
    const compactNames = names.slice(0, 3).join(" & ");
    const extra = Math.max(0, names.length - 3);
    const heading = `PROJECTED ${seat} - ${compactNames || `${pilots.length} pilot${pilots.length === 1 ? "" : "s"}`}${extra ? ` +${extra}` : ""}`;
    const detail = pilots.map((pilot) => {
      const name = getPilotListName(pilot.name || `Projected ${seat}`);
      const seniority = pilot.bidSeniority ? `#${pilot.bidSeniority}` : "seniority n/a";
      const choice = pilot.choice ? `choice ${pilot.choice}` : "choice n/a";
      return `${name} (${seniority}, ${choice})`;
    }).join("; ");
    return [`${heading}\n${detail}`];
  });
}

function getCrewbidsLineSearchText(lineName) {
  const normalizedLine = normalizeCrewbidsLineName(lineName);
  const latestMatches = Array.isArray(state.latestCrewbidsBidsPlacedSearch?.matches)
    ? state.latestCrewbidsBidsPlacedSearch.matches
    : [];
  const searchedPilotText = latestMatches.flatMap((match) => {
    const choices = Array.isArray(match?.choices) ? match.choices : [];
    const hasLineChoice = choices.some((choice) => (
      normalizeCrewbidsLineName(choice?.line || choice?.rawLine) === normalizedLine
    ));
    if (!hasLineChoice) return [];
    return [
      match?.name,
      match?.displayName,
      match?.employeeNumber,
      match?.scope?.fleet,
      match?.scope?.seatClass,
    ];
  });
  return [
    ...searchedPilotText,
    ...getCrewbidsCrewResultRemarksForLine(lineName),
    ...getCrewbidsBidAvoidRemarksForLine(lineName),
    ...getCrewbidsBuddyBidRemarksForLine(lineName),
  ].filter(Boolean).join(" ");
}

function formatSeniorPilotExtra(count) {
  const extra = Math.max(0, Number(count || 0));
  return extra ? ` Plus, ${extra} more senior pilot${extra === 1 ? "" : "s"}.` : "";
}

function normalizePilotNameForCompare(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join(" ");
}

function isCurrentUserPilotName(name) {
  const currentName = normalizePilotNameForCompare(state.preferences.displayName);
  return Boolean(currentName && normalizePilotNameForCompare(name) === currentName);
}

function isCurrentUserBidder(bidder = {}) {
  const currentEmployee = String(state.preferences.employeeNumber || "").trim();
  const bidderEmployee = String(bidder.employeeNumber || bidder.employee_number || "").trim();
  return Boolean((currentEmployee && bidderEmployee && currentEmployee === bidderEmployee) || isCurrentUserPilotName(bidder.name || ""));
}

function getCrewbidsUserBidderPosition(item = {}) {
  const explicitPosition = Number(item.userPosition || 0);
  if (explicitPosition > 0) return explicitPosition;
  const competitors = Array.isArray(item.competitors) ? item.competitors : [];
  const currentIndex = competitors.findIndex(isCurrentUserBidder);
  if (currentIndex >= 0) return currentIndex + 1;
  const pressure = Number(item.competitorCount || competitors.length || 0);
  return pressure > 0 ? pressure + 1 : 0;
}

function getCrewbidsBidPressureLabel(item = {}) {
  const seatCapacity = Math.max(1, Number(item.seatCapacity || 1));
  const userPosition = getCrewbidsUserBidderPosition(item);
  if (seatCapacity >= 2) {
    if (userPosition === 1) return { text: "Very likely to win.", tone: "likely", actionable: false };
    if (userPosition === 2) return { text: "Likely to win.", tone: "likely", actionable: false };
    if (userPosition === 3) return { text: "Not likely to win.", tone: "risk", actionable: true };
    if (userPosition >= 4) return { text: "Not likely to win. Consider a new choice.", tone: "risk", actionable: true };
  } else {
    if (userPosition === 1) return { text: "Likely to win.", tone: "likely", actionable: false };
    if (userPosition === 2) return { text: "Not likely to win.", tone: "risk", actionable: true };
    if (userPosition >= 3) return { text: "Not likely to win. Consider a new choice.", tone: "risk", actionable: true };
  }
  return { text: "Not likely to win.", tone: "risk", actionable: true };
}

function isOutbidRiskStillActionable(item = {}) {
  return getCrewbidsBidPressureLabel(item).actionable;
}

function getPilotLastName(name = "") {
  const text = String(name || "").trim();
  if (!text) return "";
  if (text.includes(",")) return text.split(",")[0].trim();
  const parts = text.split(/\s+/).filter(Boolean);
  return parts[parts.length - 1] || text;
}

function getPilotCallName(name = "") {
  const text = String(name || "").trim();
  if (!text) return "Senior bidder";
  if (text.includes(",")) {
    const given = text.split(",").slice(1).join(",").trim().split(/\s+/).filter(Boolean)[0];
    if (given) return given;
  }
  return text.split(/\s+/).filter(Boolean)[0] || text;
}

function getPilotListName(name = "") {
  const text = String(name || "").trim();
  if (!text) return "Senior bidder";
  if (text.includes(",")) {
    const [last = "", rest = ""] = text.split(",");
    const firstInitial = rest.trim().charAt(0);
    return `${last.trim()}${firstInitial ? `, ${firstInitial}.` : ""}`;
  }
  const parts = text.split(/\s+/).filter(Boolean);
  if (parts.length > 1) return `${parts[parts.length - 1]}, ${parts[0].charAt(0)}.`;
  return text;
}

function renderCrewbidsBidderListMarkers(bidder = {}) {
  const markers = [];
  if (pilotIsOnBuddyBidListForDisplay(bidder)) markers.push("BUDDY BID");
  if (!markers.length) return "";
  return markers.map((label) => `<span class="selection-current-bidder-marker">${escapeHtml(label)}</span>`).join("");
}

function renderCurrentBidderItem(competitor, index) {
  const name = String(competitor?.name || "Senior bidder");
  const seniority = competitor?.bidSeniority
    ? competitor.rankSource === "cq_scheduled"
      ? `#${competitor.bidSeniority} (CQ)`
      : `${competitor.rankSource === "current_roster" ? "current roster " : "monthly "}#${competitor.bidSeniority}`
    : "";
  const directChoice = competitor?.choice || competitor?.choiceNumber || "";
  const nestedChoice = Array.isArray(competitor?.choices) ? competitor.choices[0]?.choice : "";
  const choice = directChoice || nestedChoice || "";
  const choiceNumber = Number(choice);
  const choiceText = Number.isFinite(choiceNumber) && choiceNumber > 0
    ? `, choice ${choiceNumber}`
    : "";
  const metaParts = [seniority, choiceText ? choiceText.replace(/^,\s*/, "") : ""].filter(Boolean);
  const meta = metaParts.length ? ` (${escapeHtml(metaParts.join(", "))})` : "";
  const isCurrentUser = competitor?.isCurrentUser || isCurrentUserPilotName(name);
  const currentUserName = state.preferences.displayName || name;
  const label = isCurrentUser
    ? `${getPilotListName(currentUserName || name)} (You)`
    : getPilotListName(name);
  const nameMarkup = isCurrentUser
    ? `<strong class="selection-current-bidder-name is-current-user">${escapeHtml(label)}</strong>`
    : `<span class="selection-current-bidder-name" style="font-weight: 400 !important;">${escapeHtml(label)}</span>`;
  return `<li style="font-weight: 400 !important;"><span class="selection-current-bidder-index" style="font-weight: 400 !important;">(${index + 1})</span> ${nameMarkup}<span style="font-weight: 400 !important;">${meta}</span>${renderCrewbidsBidderListMarkers(competitor)}</li>`;
}

function renderCrewbidsListedBidderExpansion(item = {}) {
  const listedCompetitors = Array.isArray(item.listedCompetitors) ? item.listedCompetitors : [];
  const listedCount = Number(item.listedCompetitorCount || listedCompetitors.length || 0);
  if (!listedCount) return "";
  const visible = listedCompetitors.length ? listedCompetitors : [];
  const hiddenCount = Math.max(0, listedCount - visible.length);
  const line = item.line || item.normalizedLine || "this line";
  return `
    <details class="selection-listed-bidders">
      <summary>
        <span>Show bidders before your turn</span>
        <small>${escapeHtml(listedCount)} pilot${listedCount === 1 ? "" : "s"}</small>
      </summary>
      <div class="selection-listed-bidders-body">
        <strong>Senior bidders who listed ${escapeHtml(line)}</strong>
        ${visible.length ? `
          <ul>
            ${visible.map((bidder, index) => renderCurrentBidderItem(bidder, index)).join("")}
            ${hiddenCount ? `<li><span class="selection-current-bidder-index">(${visible.length + 1})</span> Plus ${escapeHtml(hiddenCount)} more</li>` : ""}
          </ul>
        ` : `<span>No bidder details were included with this snapshot.</span>`}
      </div>
    </details>
  `;
}

function shouldPreferCrewbidsWinOddsCheck(candidate, current) {
  if (!candidate?.checkedAt) return false;
  if (!current?.checkedAt) return true;
  const candidateVersion = String(candidate.calculationVersion || candidate.calculation_version || "");
  const currentVersion = String(current.calculationVersion || current.calculation_version || "");
  if (candidateVersion === CREWBIDS_WIN_ODDS_CALCULATION_VERSION && currentVersion !== CREWBIDS_WIN_ODDS_CALCULATION_VERSION) return true;
  const candidateRawCount = Number(candidate.rawRecordCount || candidate.raw_record_count || 0);
  const currentRawCount = Number(current.rawRecordCount || current.raw_record_count || 0);
  if (candidateRawCount > 0 && currentRawCount <= 0) return true;
  const candidateTime = Date.parse(candidate.checkedAt || "");
  const currentTime = Date.parse(current.checkedAt || "");
  if (Number.isFinite(candidateTime) && Number.isFinite(currentTime) && candidateTime > currentTime) return true;
  const currentPackageRiskCount = Array.isArray(current.packageRiskChoices) ? current.packageRiskChoices.length : -1;
  const candidatePackageRiskCount = Array.isArray(candidate.packageRiskChoices) ? candidate.packageRiskChoices.length : -1;
  if (candidatePackageRiskCount > currentPackageRiskCount) return true;
  const currentProjectedCount = Array.isArray(current.projectedChoices) ? current.projectedChoices.length : -1;
  const candidateProjectedCount = Array.isArray(candidate.projectedChoices) ? candidate.projectedChoices.length : -1;
  return candidateProjectedCount > currentProjectedCount;
}

function getCurrentPackageWinOddsCheck() {
  const identity = getCurrentBidSelectionIdentity();
  const check = state.crewbidsWinOddsCheck || {};
  if (!identity?.key) return null;
  const sharedProjection = getCurrentCrewbidsSharedLineProjection();
  const monitor = getCurrentCrewbidsMonitor();
  const winOdds = monitor?.winOdds || monitor?.win_odds || null;
  const monitorCheck = winOdds?.checkedAt ? { ...winOdds, packageKey: identity.key, checkedAt: winOdds.checkedAt } : null;
  const candidates = [
    check.packageKey === identity.key ? check : null,
    monitorCheck,
    sharedProjection,
  ].filter(Boolean);
  return candidates.reduce(
    (current, candidate) => shouldPreferCrewbidsWinOddsCheck(candidate, current) ? candidate : current,
    null,
  );
}

function hydrateCrewbidsWinOddsFromMonitor() {
  const identity = getCurrentBidSelectionIdentity();
  if (!identity?.key) return;
  const monitor = getCurrentCrewbidsMonitor();
  const winOdds = monitor?.winOdds || monitor?.win_odds || null;
  if (!winOdds?.checkedAt) return;
  const current = state.crewbidsWinOddsCheck || {};
  if (current.packageKey === identity.key) {
    const monitorCheck = { ...winOdds, packageKey: identity.key, checkedAt: winOdds.checkedAt };
    if (!shouldPreferCrewbidsWinOddsCheck(monitorCheck, current)) return;
  }
  state.crewbidsWinOddsCheck = {
    ...winOdds,
    packageKey: identity.key,
    checkedAt: winOdds.checkedAt,
  };
}

function mergePackageRiskAlertsIntoWinOddsCheck() {
  const identity = getCurrentBidSelectionIdentity();
  const monitor = getCurrentCrewbidsMonitor();
  if (!identity?.key || !monitor?.id) return;
  const packageRiskItems = [];
  let alertCheckedAt = "";
  (state.crewbidsAlerts || []).forEach((alert) => {
    if (!(alert.monitor_id === monitor.id || alert.monitorId === monitor.id)) return;
    if (alert.alert_type !== "outbid_risk") return;
    const currentState = alert.current_state || alert.currentState || {};
    if (currentState.projectionModel !== "seniority_award_walk") return;
    const affected = alert.affected_choices || alert.affectedChoices || [];
    if (!Array.isArray(affected)) return;
    affected.forEach((item) => {
      if (item?.packageRiskOnly === true) packageRiskItems.push(item);
    });
    const createdAt = alert.created_at || alert.createdAt || "";
    if (createdAt && (!alertCheckedAt || new Date(createdAt).getTime() > new Date(alertCheckedAt).getTime())) {
      alertCheckedAt = createdAt;
    }
  });
  if (!packageRiskItems.length) return;
  const current = getCurrentPackageWinOddsCheck() || state.crewbidsWinOddsCheck || {};
  const mergedRisk = [];
  const seenLines = new Set();
  [...(Array.isArray(current.packageRiskChoices) ? current.packageRiskChoices : []), ...packageRiskItems].forEach((item) => {
    const key = normalizeCrewbidsLineName(item?.normalizedLine || item?.line || "");
    if (!key || seenLines.has(key)) return;
    seenLines.add(key);
    mergedRisk.push(item);
  });
  state.crewbidsWinOddsCheck = {
    ...current,
    packageKey: identity.key,
    status: "risk",
    capacityAware: true,
    projectionModel: "seniority_award_walk",
    affectedChoices: Array.isArray(current.affectedChoices) ? current.affectedChoices : [],
    packageRiskChoices: mergedRisk,
    packageRiskCount: mergedRisk.length,
    checkedAt: current.checkedAt || alertCheckedAt || "",
  };
}

function scheduleSavedCrewbidsWinOddsRefresh() {
  const identity = getCurrentBidSelectionIdentity();
  const monitor = getCurrentCrewbidsMonitor();
  if (!identity?.key || state.crewbidsWinOddsAutoRefreshKey === identity.key) return;
  if (!monitor?.id) return;
  if (!filterBidListForData(state.bidList).length) return;
  state.crewbidsWinOddsAutoRefreshKey = identity.key;
  window.setTimeout(() => {
    refreshSavedCrewbidsWinOddsFromServer(identity.key)
      .catch((error) => console.warn("Saved CrewBids Win Odds refresh failed:", error.message));
  }, 1500);
}

function hasSuccessfulCrewbidsEvidenceForWinOdds(monitor = null) {
  const manualCheck = getCurrentPackageWinOddsCheck();
  if (manualCheck?.checkedAt) {
    return Number(manualCheck.recordCount || 0) > 0
      && ["clear", "risk"].includes(String(manualCheck.status || ""));
  }
  if (!monitor?.id || monitor.status !== "active" || monitor.last_error || monitor.lastError) return false;
  const evidence = monitor.latestEvidence || monitor.latest_evidence || {};
  if (Object.keys(evidence).length) {
    return Number(evidence.recordCount || evidence.record_count || 0) > 0;
  }
  return false;
}

function renderCrewbidsBidAvoidInline(match) {
  if (!match) return "";
  const item = match.item || {};
  const avoided = Array.isArray(item.avoidedBidders) ? item.avoidedBidders : [];
  const first = avoided[0] || {};
  const extra = Math.max(0, Number(item.avoidCount || avoided.length || 0) - 1);
  const name = String(first.name || "Bid Avoid pilot");
  const choice = Array.isArray(first.choices) && first.choices[0]?.choice ? ` ${formatChoiceOrdinal(first.choices[0].choice)} choice.` : ".";
  return `
    <div class="selection-live-bid-avoid-inline">
      <strong>BID AVOID</strong>
      <span>${escapeHtml(name)}${escapeHtml(choice)}${escapeHtml(formatSeniorPilotExtra(extra))}</span>
    </div>
  `;
}

function renderCrewbidsBuddyBidInline(match) {
  if (!match) return "";
  const item = match.item || {};
  const buddies = Array.isArray(item.buddyBidders) ? item.buddyBidders : [];
  const first = buddies[0] || {};
  const extra = Math.max(0, Number(item.buddyCount || buddies.length || 0) - 1);
  const name = String(first.name || "Buddy Bid pilot");
  const choice = Array.isArray(first.choices) && first.choices[0]?.choice ? ` ${formatChoiceOrdinal(first.choices[0].choice)} choice.` : ".";
  return `
    <div class="selection-live-buddy-bid-inline">
      <strong>BUDDY BID</strong>
      <span>${escapeHtml(name)}${escapeHtml(choice)}${escapeHtml(formatSeniorPilotExtra(extra))}</span>
    </div>
  `;
}

function groupProjectedCrewBySeat(item = {}) {
  const competitors = Array.isArray(item.competitors) ? item.competitors : [];
  return competitors.reduce((groups, pilot) => {
    const seat = String(pilot?.seatClass || item.seatClass || "").trim().toUpperCase();
    if (!["CA", "FO"].includes(seat)) return groups;
    if (!groups[seat]) groups[seat] = [];
    groups[seat].push(pilot);
    return groups;
  }, {});
}

function getCrewSeatCapacities(crewText = "") {
  const capacities = {};
  String(crewText || "").toUpperCase().replace(/(\d+)\s*(CA|FO)\b/g, (_match, count, seat) => {
    capacities[seat] = Math.max(1, Number(count) || 1);
    return _match;
  });
  return capacities;
}

function getRuleProjectedAwardPilots(lineName, ...matches) {
  const normalizedLine = normalizeCrewbidsLineName(lineName);
  const pilots = [];
  matches.forEach((match) => {
    const item = match?.item || {};
    const sourceBidders = [
      ...(Array.isArray(item.buddyBidders) ? item.buddyBidders : []),
      ...(Array.isArray(item.avoidedBidders) ? item.avoidedBidders : []),
    ];
    sourceBidders.forEach((bidder) => {
      const projectedAward = bidder?.projectedAward || {};
      const projectedLine = normalizeCrewbidsLineName(projectedAward.normalizedLine || projectedAward.line || "");
      const matchingChoice = (Array.isArray(bidder.choices) ? bidder.choices : []).find((choice) => normalizeCrewbidsLineName(choice.line || choice.rawLine || "") === normalizedLine);
      const matchingChoiceNumber = Number(matchingChoice?.choice || 0);
      const isProjectedOnLine = projectedLine && projectedLine === normalizedLine && bidder.projectedOnLine !== false;
      const isFirstChoiceOnLine = matchingChoiceNumber === 1;
      if (!isProjectedOnLine && !isFirstChoiceOnLine) return;
      pilots.push({
        employeeNumber: bidder.employeeNumber || projectedAward.employeeNumber || "",
        name: bidder.name || projectedAward.name || "",
        bidSeniority: bidder.bidSeniority || projectedAward.bidSeniority || 0,
        choice: isProjectedOnLine ? projectedAward.choice : matchingChoiceNumber,
        line: projectedAward.line || lineName,
        normalizedLine,
        seatClass: projectedAward.seatClass || bidder.seatClass || "",
      });
    });
  });
  return pilots;
}

function mergeProjectedAwardPilots(item = {}, lineName = "", ...matches) {
  const competitors = Array.isArray(item.competitors) ? item.competitors.filter((pilot) => pilot && typeof pilot === "object") : [];
  const seen = new Set();
  const merged = [];
  [...competitors, ...getRuleProjectedAwardPilots(lineName || item.line || item.normalizedLine || "", ...matches)].forEach((pilot) => {
    const key = String(pilot.employeeNumber || `${pilot.name || ""}:${pilot.seatClass || ""}:${pilot.bidSeniority || ""}`).trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    merged.push(pilot);
  });
  return {
    ...item,
    competitors: merged.sort((a, b) => {
      const seatA = String(a.seatClass || item.seatClass || "").toUpperCase();
      const seatB = String(b.seatClass || item.seatClass || "").toUpperCase();
      if (seatA !== seatB) return seatA === "CA" ? -1 : seatB === "CA" ? 1 : seatA.localeCompare(seatB);
      return Number(a.bidSeniority || 99999) - Number(b.bidSeniority || 99999);
    }),
  };
}

function getCurrentMonthlyBidRankEstimate() {
  const estimate = state.monthlyBidRankEstimate;
  const identity = getCurrentBidSelectionIdentity();
  if (!estimate?.available || !identity?.key) return null;
  if (estimate.fleet !== identity.fleet || estimate.bidMonth !== identity.bidMonth) return null;
  return estimate;
}

function isCurrentProjectedHoldLine(lineName) {
  const normalizedLine = normalizeCrewbidsLineName(lineName);
  if (!normalizedLine) return false;
  const monitor = getCurrentCrewbidsMonitor();
  if (!hasSuccessfulCrewbidsEvidenceForWinOdds(monitor)) return false;
  const rows = getSelectedBidDetails({ applyFilters: false });
  const projected = rows.find((row) => {
    const oddsMatch = getCrewbidsAlertForLineByType(row.lineName, "outbid_risk");
    return !oddsMatch?.alert || !isOutbidRiskStillActionable(oddsMatch.item);
  });
  return normalizeCrewbidsLineName(projected?.lineName || "") === normalizedLine;
}

function withCurrentUserProjectedAward(item = {}, rowItem = {}) {
  const userSeat = String(state.preferences.seatClass || item.seatClass || "").trim().toUpperCase();
  const remainingAtUserTurn = Number(item.remainingAtUserTurn || 0);
  const lineName = rowItem.lineName || item.line || item.normalizedLine || "";
  if (!["CA", "FO"].includes(userSeat) || (remainingAtUserTurn <= 0 && !isCurrentProjectedHoldLine(lineName))) return item;
  const competitors = Array.isArray(item.competitors) ? [...item.competitors] : [];
  if (competitors.some(isCurrentUserBidder)) return item;
  const capacities = getCrewSeatCapacities(rowItem.crew || rowItem.crewComplement || "");
  const seatCapacity = Math.max(1, Number(capacities[userSeat] || item.seatCapacity || 1));
  const seatCount = competitors.filter((pilot) => String(pilot?.seatClass || item.seatClass || "").trim().toUpperCase() === userSeat).length;
  if (seatCount >= seatCapacity) return item;
  const monthlyRank = getCurrentMonthlyBidRankEstimate();
  competitors.push({
    employeeNumber: state.preferences.employeeNumber || "",
    name: state.preferences.displayName || "You",
    bidSeniority: Number(monthlyRank?.rank || 0),
    choice: item.userChoice || rowItem.rank || "",
    line: item.line || rowItem.lineName || "",
    normalizedLine: item.normalizedLine || normalizeCrewbidsLineName(rowItem.lineName || item.line || ""),
    seatClass: userSeat,
    isCurrentUser: true,
  });
  return {
    ...item,
    competitors,
    competitorCount: Math.max(Number(item.competitorCount || 0), competitors.length),
  };
}

function renderProjectedCrewBidderGroups(item = {}, rowItem = {}) {
  const projectedItem = withCurrentUserProjectedAward(item, rowItem);
  const grouped = groupProjectedCrewBySeat(projectedItem);
  const capacities = getCrewSeatCapacities(rowItem.crew || rowItem.crewComplement || "");
  return ["CA", "FO"].map((seat) => {
    const seatCapacity = Number(capacities[seat] || 0);
    const pilots = seatCapacity > 0 ? (grouped[seat] || []).slice(0, seatCapacity) : (grouped[seat] || []);
    if (!pilots.length) return "";
    return `
      <div class="selection-current-bidders selection-projected-crew-bidders">
        <strong>Projected ${seat} award${pilots.length === 1 ? "" : "s"}</strong>
        <ul>
          ${pilots.map(renderCurrentBidderItem).join("")}
        </ul>
      </div>
    `;
  }).join("");
}

function getProjectedAwardHeading(item = {}) {
  const grouped = groupProjectedCrewBySeat(item);
  const seats = ["CA", "FO"].filter((seat) => (grouped[seat] || []).length);
  if (seats.length === 1) {
    const count = grouped[seats[0]].length;
    return `Projected ${seats[0]} award${count === 1 ? "" : "s"}`;
  }
  return "Projected senior awards";
}

function renderCrewbidsWinOddsClearStatus(lineName, bidAvoidMatch = null, dataNotice = "", buddyBidMatch = null, rowItem = {}) {
  const projectedChoice = mergeProjectedAwardPilots(getCrewbidsProjectedChoiceForLine(lineName) || {}, lineName, buddyBidMatch, bidAvoidMatch);
  return `
    <div class="selection-live-status selection-live-status-win">
      <div class="selection-win-odds-summary">
        ${dataNotice ? `<span class="selection-live-data-notice">${escapeHtml(dataNotice)}</span>` : ""}
        <strong>In Range</strong>
        <span>No senior pressure</span>
      </div>
      <div class="selection-win-odds-detail">
        ${renderProjectedCrewBidderGroups(projectedChoice, rowItem)}
        ${renderCrewbidsBuddyBidInline(buddyBidMatch)}
        ${renderCrewbidsBidAvoidInline(bidAvoidMatch)}
      </div>
    </div>
  `;
}

function renderCrewbidsWinOddsPressureStatus(match, bidAvoidMatch = null, dataNotice = "", buddyBidMatch = null, rowItem = {}) {
  const matchItem = match?.item || {};
  const projectedItem = getCrewbidsProjectedChoiceForLine(matchItem.line || matchItem.normalizedLine || "");
  const item = mergeProjectedAwardPilots({
    ...matchItem,
    competitors: [
      ...(Array.isArray(matchItem.competitors) ? matchItem.competitors : []),
      ...(Array.isArray(projectedItem?.competitors) ? projectedItem.competitors : []),
    ],
  }, matchItem.line || matchItem.normalizedLine || "", buddyBidMatch, bidAvoidMatch);
  const competitors = Array.isArray(item.competitors) ? item.competitors : [];
  const visibleCompetitors = competitors.slice(0, 2);
  const pressure = Number(item.competitorCount || competitors.length || 0);
  const listedCompetitorCount = Number(item.listedCompetitorCount || 0);
  const unlistedCount = Math.max(0, pressure - visibleCompetitors.length);
  const seatCapacity = Math.max(1, Number(item.seatCapacity || 1));
  const userPosition = getCrewbidsUserBidderPosition(item);
  const pressureLabel = getCrewbidsBidPressureLabel(item);
  const isAwardWalk = item.projectionModel === "seniority_award_walk";
  const bidderHeading = isAwardWalk ? getProjectedAwardHeading(item) : "Listed senior bidders";
  const bidderItems = visibleCompetitors.length
    ? visibleCompetitors.map(renderCurrentBidderItem).join("")
      + (unlistedCount ? `<li><span class="selection-current-bidder-index">(${visibleCompetitors.length + 1})</span> Plus ${escapeHtml(unlistedCount)} more</li>` : "")
    : `<li><span class="selection-current-bidder-index">(1)</span> ${escapeHtml(pressure ? `${pressure} senior bidder${pressure === 1 ? "" : "s"}` : "Senior bidder")}</li>`;
  return `
    <div class="selection-live-status ${pressureLabel.actionable ? "selection-live-status-alert" : "selection-live-status-win"} selection-live-status-odds">
      <div class="selection-win-odds-summary">
        ${dataNotice ? `<span class="selection-live-data-notice">${escapeHtml(dataNotice)}</span>` : ""}
        <strong>${escapeHtml(pressureLabel.text)}</strong>
        <span>${isAwardWalk ? `${escapeHtml(pressure)} projected senior award${pressure === 1 ? "" : "s"} for ${escapeHtml(seatCapacity)} seat${seatCapacity === 1 ? "" : "s"}.` : userPosition ? `Listed position #${escapeHtml(userPosition)} for ${escapeHtml(seatCapacity)} seat${seatCapacity === 1 ? "" : "s"}.` : `${escapeHtml(pressure)} listed senior bidder${pressure === 1 ? "" : "s"} for ${escapeHtml(seatCapacity)} seat${seatCapacity === 1 ? "" : "s"}.`}</span>
      </div>
      <div class="selection-win-odds-detail">
        ${isAwardWalk && listedCompetitorCount ? `<span>${escapeHtml(listedCompetitorCount)} senior bidder${listedCompetitorCount === 1 ? "" : "s"} listed this line before your turn.</span>` : ""}
        ${renderCrewbidsListedBidderExpansion(item)}
        ${isAwardWalk ? renderProjectedCrewBidderGroups(item, rowItem) : `<div class="selection-current-bidders">
          <strong>${bidderHeading}</strong>
          <ul>
            ${bidderItems}
          </ul>
        </div>`}
        ${renderCrewbidsBuddyBidInline(buddyBidMatch)}
        ${renderCrewbidsBidAvoidInline(bidAvoidMatch)}
      </div>
    </div>
  `;
}

function renderCrewbidsUnavailableStatus(monitor = getCurrentCrewbidsMonitor()) {
  const dataNotice = getCrewbidsDataNotice(monitor);
  const hasPriorData = Boolean(getCrewbidsMonitorCheckedAt(monitor));
  return `
    <div class="selection-live-status selection-live-status-alert">
      <strong>${hasPriorData ? "Saved snapshot" : "CrewBids unavailable"}</strong>
      <span>${escapeHtml(dataNotice || "CrewBidPro could not reach CrewBids for current evidence.")}</span>
    </div>
  `;
}

function renderCrewbidsSelectionStatus(lineName, rowItem = {}) {
  scheduleSavedCrewbidsWinOddsRefresh();
  const monitor = getCurrentCrewbidsMonitor();
  const credentialStatus = state.crewbidsCredential?.status || "";
  const credentialKnownMissing = state.crewbidsCredential && !state.crewbidsCredential.configured;
  const hasChecked = Boolean(monitor?.last_checked_at || monitor?.lastCheckedAt);
  const bidAvoidMatch = getCrewbidsAlertForLineByType(lineName, "bid_avoid");
  const buddyBidMatch = getCrewbidsAlertForLineByType(lineName, "buddy_bid");
  const oddsMatch = getCrewbidsAlertForLineByType(lineName, "outbid_risk");
  const dataNotice = getCrewbidsCompactDataNotice(monitor);
  const isClosed = monitor?.status === "expired" || getCrewbidsMonitorCyclePhase(monitor) === "closed";
  if (credentialStatus === "needs_update" || credentialKnownMissing) {
    return `
      <div class="selection-live-status selection-live-status-alert">
        <strong>Not connected</strong>
        <span>Check Kalitta Bid access.</span>
      </div>
    `;
  }
  if (monitor?.status === "needs_reauth") {
    return `
      <div class="selection-live-status selection-live-status-alert">
        <strong>Not connected</strong>
        <span>Update CrewBids access.</span>
      </div>
    `;
  }
  if (oddsMatch) return renderCrewbidsWinOddsPressureStatus(oddsMatch, bidAvoidMatch, dataNotice, buddyBidMatch, rowItem);
  if (isClosed && hasSuccessfulCrewbidsEvidenceForWinOdds(monitor)) {
    return renderCrewbidsWinOddsClearStatus(lineName, bidAvoidMatch, dataNotice, buddyBidMatch, rowItem);
  }
  if (isClosed) {
    return `
      <div class="selection-live-status selection-live-status-pending">
        <strong>Bidding closed</strong>
        <span>No saved line evidence</span>
      </div>
    `;
  }
  if (monitor?.status === "error" && !hasSuccessfulCrewbidsEvidenceForWinOdds(monitor)) return renderCrewbidsUnavailableStatus(monitor);
  if (!oddsMatch) {
    if (!monitor?.id) {
      return `
        <div class="selection-live-status selection-live-status-pending">
          <strong>Pending</strong>
          <span>No poll yet</span>
        </div>
      `;
    }
    if (!hasChecked || monitor.status === "checking") {
      return `
        <div class="selection-live-status selection-live-status-pending">
          <strong>Pending</strong>
          <span>Queued</span>
        </div>
      `;
    }
    if (!hasSuccessfulCrewbidsEvidenceForWinOdds(monitor)) {
      return `
        <div class="selection-live-status selection-live-status-pending">
          <strong>Needs refresh</strong>
          <span>${escapeHtml(dataNotice || "No current CrewBids data")}</span>
        </div>
      `;
    }
    return renderCrewbidsWinOddsClearStatus(lineName, bidAvoidMatch, dataNotice, buddyBidMatch, rowItem);
  }
  return renderCrewbidsWinOddsPressureStatus(oddsMatch, bidAvoidMatch, dataNotice, buddyBidMatch, rowItem);
}

function getCrewbidsSubmissionStatusForLine(lineName) {
  const submission = state.crewbidsSubmission || {};
  const statuses = submission.statuses || {};
  const directStatus = statuses[lineName] || statuses[String(lineName || "").toUpperCase()] || null;
  if (directStatus) return directStatus;
  const lineKey = getCrewbidsLineKey(lineName);
  for (const [statusLine, status] of Object.entries(statuses)) {
    if (getCrewbidsLineKey(statusLine) === lineKey) return status;
  }
  if (submission.source === "current-server-bid") {
    const serverIndex = (state.crewbidsCurrentServerBid?.bidList || []).findIndex((serverLine) => getCrewbidsLineKey(serverLine) === lineKey);
    if (serverIndex >= 0) {
      return {
        status: "confirmed",
        expectedPosition: serverIndex + 1,
        serverPosition: serverIndex + 1,
      };
    }
  }
  return null;
}

function renderCrewbidsSubmissionStatus(lineName) {
  const submission = state.crewbidsSubmission || {};
  const status = getCrewbidsSubmissionStatusForLine(lineName);
  const outbidMatch = getCrewbidsAlertForLineByType(lineName, "outbid_risk");
  const bidAvoidMatch = getCrewbidsAlertForLineByType(lineName, "bid_avoid");
  const buddyBidMatch = getCrewbidsAlertForLineByType(lineName, "buddy_bid");
  const isOutbid = outbidMatch?.alert && isOutbidRiskStillActionable(outbidMatch.item);
  const isBidAvoid = Boolean(bidAvoidMatch?.alert);
  const isBuddyBid = Boolean(buddyBidMatch?.alert);
  const outbidNotice = isOutbid ? `<span class="selection-submission-outbid-notice">OUTBID NOTICE</span>` : "";
  const avoided = Array.isArray(bidAvoidMatch?.item?.avoidedBidders) ? bidAvoidMatch.item.avoidedBidders : [];
  const bidAvoidName = getPilotLastName(avoided[0]?.name || "");
  const bidAvoidNotice = isBidAvoid ? `<span class="selection-submission-bid-avoid-notice">BID AVOID${bidAvoidName ? ` - ${escapeHtml(bidAvoidName)}` : ""}</span>` : "";
  const buddies = Array.isArray(buddyBidMatch?.item?.buddyBidders) ? buddyBidMatch.item.buddyBidders : [];
  const buddyBidName = getPilotLastName(buddies[0]?.name || "");
  const buddyBidNotice = isBuddyBid ? `<span class="selection-submission-buddy-bid-notice">BUDDY BID${buddyBidName ? ` - ${escapeHtml(buddyBidName)}` : ""}</span>` : "";
  const crewbidsNotices = `${buddyBidNotice}${bidAvoidNotice}${outbidNotice}`;
  const currentPosition = state.bidList.indexOf(lineName) + 1;
  if (status && Number(status.expectedPosition || 0) !== currentPosition) {
    return `
      <div class="selection-submission-status selection-submission-status-tentative">
        <strong>Tentative</strong>
        <span>Reordered locally</span>
        ${crewbidsNotices}
      </div>
    `;
  }
  if (status?.status === "confirmed") {
    if (submission.source === "current-server-bid") {
      const isSavedSnapshot = getCrewbidsMonitorCyclePhase(getCurrentCrewbidsMonitor()) === "closed"
        || Boolean(getCrewbidsDataNotice());
      return `
        <div class="selection-submission-status selection-submission-status-server">
          <strong>${isSavedSnapshot ? "Saved official bid" : "On Server"}</strong>
          <span>${isSavedSnapshot ? "Saved position" : "Official"} #${escapeHtml(status.serverPosition || status.expectedPosition || "")}</span>
          ${crewbidsNotices}
        </div>
      `;
    }
    return `
      <div class="selection-submission-status selection-submission-status-confirmed">
        <strong>Confirmed</strong>
        <span>Server position ${escapeHtml(status.serverPosition || status.expectedPosition || "")}</span>
        ${crewbidsNotices}
      </div>
    `;
  }
  if (status?.status === "submitted") {
    const isWithinVerifyWindow = getCrewbidsSubmissionAgeMs(submission) < CREWBIDS_SUBMISSION_VERIFY_WINDOW_MS;
    return `
      <div class="selection-submission-status selection-submission-status-submitted">
        <strong>Submitted</strong>
        <span>${isWithinVerifyWindow ? "Verifying server" : "Not confirmed - verify"}</span>
        ${crewbidsNotices}
      </div>
    `;
  }
  return `
    <div class="selection-submission-status selection-submission-status-tentative">
      <strong>Tentative</strong>
      <span>Not submitted</span>
      ${crewbidsNotices}
    </div>
  `;
}

function setCrewbidsMonitorStatus(message, tone = "") {
  const status = $("crewbidsMonitorStatus");
  if (!status) return;
  status.textContent = message || "";
  status.className = "crewbids-monitor-status";
  if (tone) status.classList.add(`is-${tone}`);
}

function getCrewbidsSiteStatus({
  credential = {},
  credentialResolved = true,
  credentialNeedsUpdate = false,
  credentialLoadError = "",
  monitor = null,
} = {}) {
  const monitorStatus = monitor?.status || "";
  const monitorError = monitor?.last_error || monitor?.lastError || "";
  const monitorClosed = monitorStatus === "expired" || getCrewbidsMonitorCyclePhase(monitor) === "closed";
  if (state.crewbidsCredentialCheckInFlight) return { label: "Checking", className: "is-unknown" };
  if (!credentialResolved) {
    if (navigator.onLine === false || state.workspaceConnectivityStatus === "offline") {
      return { label: "Saved access not checked offline", className: "is-unknown" };
    }
    if (credentialLoadError) return { label: "Access check unavailable", className: "is-unknown" };
    return { label: "Checking saved CrewBids access", className: "is-unknown" };
  }
  if (credential.status === "pending_verification") {
    return { label: "Pending CrewBids verification", className: "is-unknown" };
  }
  if (credentialNeedsUpdate
    || credential.status === "needs_update"
    || state.crewbidsSiteStatus?.status === "offline"
    || (!monitorClosed && monitorStatus === "error")
    || (!monitorClosed && monitorStatus === "needs_reauth")
    || (!monitorClosed && monitorError)) {
    return { label: "Kalitta CrewBid is Offline", className: "is-offline" };
  }
  if (!credential.configured) return { label: "Not Logged into Kalitta CrewBid", className: "is-not-logged-in" };
  if (state.crewbidsSiteStatus?.status === "online") return { label: "Online", className: "is-online" };
  if (credential.configured && credential.lastVerifiedAt) return { label: "Online", className: "is-online" };
  return { label: "Kalitta CrewBid is Offline", className: "is-offline" };
}

function getCrewbidsLastPollLabel(monitor = null, { hasSelections = false } = {}) {
  const checked = monitor?.last_checked_at || monitor?.lastCheckedAt || "";
  if (checked) return `Last poll: ${formatCrewbidsEvidenceTimestamp(checked)}`;
  return hasSelections ? "Last poll: Not yet" : "Last poll: Waiting for bid selection";
}

function getCbpMonitoringStatus({ hasCredential = false, hasIdentity = false, hasSelections = false, monitor = null } = {}) {
  const status = monitor?.status || "";
  if (status === "expired" || getCrewbidsMonitorCyclePhase(monitor) === "closed") return { label: "Offline", className: "is-offline" };
  if (status === "active" || status === "checking") return { label: "CBP Monitoring CB", className: "is-active" };
  if (status === "error" || status === "needs_reauth") return { label: "CBP Monitoring Paused", className: "is-error" };
  if (hasIdentity && !hasSelections) return { label: "CBP Monitoring Waiting for Bid Selection", className: "is-waiting" };
  if (hasCredential && hasIdentity && hasSelections) return { label: "CBP Monitoring Ready", className: "is-ready" };
  return { label: "CBP Monitoring Paused", className: "is-paused" };
}

function clearCrewbidsPasswordInputAfterSave() {
  const passwordInput = $("crewbidsPassword");
  if (!passwordInput) return;
  passwordInput.value = "";
  passwordInput.type = "password";
  passwordInput.dataset.visible = "false";
  delete passwordInput.dataset.dirty;
  passwordInput.blur();
}

function renderCrewbidsMonitoringPanel() {
  const panel = $("crewbidsMonitorTitle")?.closest(".crewbids-monitor-panel, .crewbids-profile-access-card");
  if (!panel) return;
  const identity = getCurrentBidSelectionIdentity();
  const credentialResolved = state.crewbidsCredential !== null;
  const credential = state.crewbidsCredential || {};
  const monitor = getCurrentCrewbidsMonitor();
  const badge = $("crewbidsMonitorBadge");
  const employeeInput = $("crewbidsEmployeeNumber");
  const passwordInput = $("crewbidsPassword");
  const passwordPeekButton = $("toggleCrewbidsPasswordVisibility");
  const consentInput = $("crewbidsConsent");
  const saveButton = $("saveCrewbidsCredential");
  const checkConnectionButton = $("checkCrewbidsConnection");
  const startButton = $("startCrewbidsMonitor");
  const refreshButton = $("refreshCrewbidsMonitor");
  const revokeButton = $("revokeCrewbidsCredential");
  const cbpMonitorBadge = $("crewbidsCbpMonitorBadge");
  const lastPollTime = $("crewbidsLastPollTime");
  const bidsPlacedSearchButton = $("openCrewbidsBidsPlacedSearch");
  const workspaceAccessStatus = $("crewbidsWorkspaceAccessStatus");
  const bidAvoidSummary = $("crewbidsBidAvoidSummary");
  const bidAvoidCheckButton = $("checkCrewbidsBidAvoid");
  const bidAvoidCheckStatus = $("crewbidsBidAvoidCheckStatus");
  const buddyBidSummary = $("crewbidsBuddyBidSummary");
  const buddyBidCheckButton = $("checkCrewbidsBuddyBid");
  const buddyBidCheckStatus = $("crewbidsBuddyBidCheckStatus");
  const hasCredential = Boolean(credential.configured);
  const credentialNeedsUpdate = credential.status === "needs_update";
  const credentialPendingVerification = credential.status === "pending_verification";
  const credentialVerificationUnavailable = hasCredential
    && state.crewbidsSiteStatus?.credentialVerification === "unavailable";
  const credentialVerificationOffline = credentialVerificationUnavailable
    && state.crewbidsSiteStatus?.status === "offline";
  const hasStoredCredential = Boolean(credential.stored) || hasCredential || credentialNeedsUpdate || credentialPendingVerification;
  const credentialConfirmedMissing = credentialResolved && !hasStoredCredential;
  const hasIdentity = Boolean(identity?.key);
  const hasSelections = filterBidListForData(state.bidList).length > 0;
  const isActive = monitor?.status === "active" || monitor?.status === "checking";
  const sharedRefreshChecking = Boolean(state.crewbidsSharedRefresh?.checking);
  const monitorCyclePhase = getCrewbidsMonitorCyclePhase(monitor || { bidMonth: identity?.bidMonth });
  const isClosed = monitor?.status === "expired" || monitorCyclePhase === "closed";
  const siteStatus = getCrewbidsSiteStatus({
    credential,
    credentialResolved,
    credentialNeedsUpdate,
    credentialLoadError: state.crewbidsCredentialLoadError,
    monitor,
  });

  if (employeeInput && !employeeInput.value) {
    employeeInput.value = credential.employeeNumber || state.preferences.employeeNumber || "";
  }
  if (employeeInput) {
    employeeInput.readOnly = (hasCredential || credentialPendingVerification) && !credentialNeedsUpdate;
    employeeInput.classList.toggle("is-locked", (hasCredential || credentialPendingVerification) && !credentialNeedsUpdate);
  }
  if (passwordInput) {
    passwordInput.disabled = false;
    const placeholderValue = hasStoredCredential && !passwordInput.matches(":focus") && !passwordInput.dataset.dirty;
    passwordInput.type = passwordInput.dataset.visible === "true" && !placeholderValue ? "text" : "password";
    if (placeholderValue) passwordInput.value = "";
    passwordInput.placeholder = hasStoredCredential ? "Saved CrewBids password" : "Enter CrewBids password";
  }
  if (passwordPeekButton) {
    const visible = passwordInput?.dataset.visible === "true";
    passwordPeekButton.textContent = visible ? "Hide" : "Show";
    passwordPeekButton.setAttribute("aria-pressed", String(visible));
    passwordPeekButton.setAttribute("aria-label", visible ? "Hide CrewBids password" : "Show CrewBids password");
  }
  if (consentInput) {
    consentInput.disabled = false;
    if (hasStoredCredential) consentInput.checked = true;
  }
  if (saveButton) saveButton.textContent = hasStoredCredential ? "UPDATE ACCESS" : "SAVE ACCESS";
  if (workspaceAccessStatus) {
    if (!credentialResolved && (navigator.onLine === false || state.workspaceConnectivityStatus === "offline")) {
      workspaceAccessStatus.textContent = "Saved CrewBids access will be verified when internet connectivity returns.";
    } else if (!credentialResolved && state.crewbidsCredentialLoadError) {
      workspaceAccessStatus.textContent = "Saved CrewBids access could not be checked. CrewBidPro will retry when the server is reachable.";
    } else if (!credentialResolved) {
      workspaceAccessStatus.textContent = "Checking for saved CrewBids access...";
    } else if (credentialPendingVerification) {
      workspaceAccessStatus.textContent = "Your encrypted CrewBids access is saved and will be verified automatically when Kalitta CrewBids returns.";
    } else if (credentialVerificationUnavailable) {
      workspaceAccessStatus.textContent = credentialVerificationOffline
        ? "Your CrewBids access is still saved. CrewBids is offline, so CrewBidPro could not verify it right now."
        : "Your CrewBids access is still saved. CrewBidPro could not verify it right now.";
    } else if (hasCredential) {
      workspaceAccessStatus.textContent = "Saved CrewBids access is ready. Use Check Connection to verify the Kalitta Bid server login before monitoring or submission.";
    } else {
      workspaceAccessStatus.textContent = "No saved CrewBids access yet. Use Manage Access once; the server will use encrypted saved access after that.";
    }
    workspaceAccessStatus.classList.toggle("is-ready", hasCredential || credentialPendingVerification);
    workspaceAccessStatus.classList.toggle("is-missing", credentialConfirmedMissing);
  }
  if (bidAvoidSummary) bidAvoidSummary.textContent = renderBidAvoidSummary();
  if (bidAvoidCheckStatus) bidAvoidCheckStatus.textContent = renderBidAvoidCheckStatusText();
  if (buddyBidSummary) buddyBidSummary.textContent = renderBuddyBidSummary();
  if (buddyBidCheckStatus) buddyBidCheckStatus.textContent = renderBuddyBidCheckStatusText();
  if (bidAvoidSummary) bidAvoidSummary.textContent = renderBidAvoidSummary();
  if (bidAvoidCheckStatus) bidAvoidCheckStatus.textContent = renderBidAvoidCheckStatusText();
  if (badge) {
    badge.className = "crewbids-monitor-badge";
    if (isProfilePage()) {
      badge.textContent = !credentialResolved
        ? (navigator.onLine === false || state.workspaceConnectivityStatus === "offline" ? "Offline" : "Checking")
        : credentialNeedsUpdate
        ? "Needs Update"
        : credentialPendingVerification
          ? "Pending Verification"
        : credentialVerificationUnavailable
          ? "Unable to Verify"
        : hasCredential
          ? "Enabled"
          : "Not Enabled";
      if (credentialPendingVerification || credentialVerificationUnavailable) badge.classList.add("is-unknown");
      else if (hasCredential) badge.classList.add("is-active");
      else if (monitor?.status === "needs_reauth" || monitor?.status === "error") badge.classList.add("is-error");
      else badge.classList.add("is-disabled");
    } else {
      badge.textContent = !credentialResolved
        ? "Checking"
        : credentialNeedsUpdate
          ? "Needs update"
          : credentialPendingVerification
            ? "Pending verification"
          : credentialVerificationUnavailable
            ? "Unable to Verify"
          : hasCredential
            ? "Saved"
            : "Missing credentials";
      badge.classList.add(!credentialResolved
        ? "is-unknown"
        : credentialPendingVerification || credentialVerificationUnavailable
          ? "is-unknown"
        : hasCredential && !credentialNeedsUpdate
          ? "is-active"
          : credentialNeedsUpdate
            ? "is-error"
            : "is-disabled");
    }
  }
  if (cbpMonitorBadge) {
    const cbpStatus = getCbpMonitoringStatus({ hasCredential, hasIdentity, hasSelections, monitor });
    cbpMonitorBadge.textContent = cbpStatus.label;
    cbpMonitorBadge.className = `crewbids-cbp-monitor-badge ${cbpStatus.className}`;
  }
  if (lastPollTime) {
    lastPollTime.textContent = getCrewbidsLastPollLabel(monitor, { hasSelections });
  }

  if (isProfilePage()) {
    if (!credentialResolved && (navigator.onLine === false || state.workspaceConnectivityStatus === "offline")) {
      setCrewbidsMonitorStatus("Saved CrewBids access will be checked when internet connectivity returns.", "neutral");
    } else if (!credentialResolved && state.crewbidsCredentialLoadError) {
      setCrewbidsMonitorStatus("Saved CrewBids access could not be checked. CrewBidPro will retry when the server is reachable.", "neutral");
    } else if (!credentialResolved) {
      setCrewbidsMonitorStatus("Checking for saved CrewBids access...", "processing");
    } else if (credentialNeedsUpdate) {
      setCrewbidsMonitorStatus("CrewBids login failed. Re-enter your current CrewBids password, then save access again.", "error");
    } else if (credentialPendingVerification) {
      setCrewbidsMonitorStatus(
        "Kalitta CrewBids is offline. Your credentials are encrypted and saved. CrewBidPro will verify them automatically when service returns.",
        "neutral",
      );
    } else if (credentialVerificationUnavailable) {
      setCrewbidsMonitorStatus(
        credentialVerificationOffline
          ? "Unable to verify saved access because Kalitta CrewBids is offline. Your saved access has not changed."
          : "CrewBidPro could not verify your saved CrewBids access right now. Your saved access has not changed.",
        "neutral",
      );
    } else if (state.crewbidsCredentialCheckInFlight) {
      setCrewbidsMonitorStatus("Checking Kalitta Bid server connection...", "processing");
    } else if (hasCredential) {
      const verified = credential.lastVerifiedAt ? ` Last verified ${formatCrewbidsEvidenceTimestamp(credential.lastVerifiedAt)}.` : "";
      setCrewbidsMonitorStatus(`CrewBids access is saved.${verified} You can check, revoke, or update it here.`, "success");
    } else {
      setCrewbidsMonitorStatus("Add CrewBids access before using hosted monitoring, submitted-bids checks, or new bids.", "neutral");
    }
  } else if (!hasIdentity) {
    setCrewbidsMonitorStatus("Load a saved or CrewBidPro package before CBP can monitor CrewBids.", "neutral");
  } else if (isClosed) {
    const closeAt = state.crewbidsCycle?.effectiveCloseAt || state.crewbidsCycle?.closesAt || monitor?.closed_at || monitor?.closedAt || "";
    const closeText = closeAt ? ` Monitoring ended ${formatCrewbidsEvidenceTimestamp(closeAt)}.` : " Monitoring is complete for this bid cycle.";
    setCrewbidsMonitorStatus(`Bidding is closed.${closeText}`, "neutral");
  } else if (!hasSelections) {
    setCrewbidsMonitorStatus("Monitoring has not started yet. Select at least one line in Bid Selection and CrewBidPro will monitor your selected bids.", "neutral");
  } else if (state.crewbidsMonitorManualRefreshInFlight || sharedRefreshChecking) {
    const evidenceTime = getCrewbidsMonitorCheckedAt(monitor);
    setCrewbidsMonitorStatus(
      evidenceTime
        ? `Showing data from ${formatCrewbidsEvidenceTimestamp(evidenceTime)} · Checking K4 now...`
        : "Checking K4 now...",
      "processing",
    );
  } else if (state.crewbidsCredentialCheckInFlight) {
    setCrewbidsMonitorStatus("Checking Kalitta Bid server connection...", "processing");
  } else if (isActive) {
    const checked = monitor.last_checked_at || monitor.lastCheckedAt || "";
    const staleNotice = hasCrewbidsStaleEvidence(monitor) ? ` CrewBids data may be stale. ${getCrewbidsEvidenceFreshnessText(monitor)}` : "";
    setCrewbidsMonitorStatus(checked ? `Monitoring is active. Last checked ${formatCrewbidsEvidenceTimestamp(checked)}.${staleNotice}` : "Monitoring is active and queued for its first poll.", hasCrewbidsStaleEvidence(monitor) ? "warning" : "success");
  } else if (monitor?.status === "needs_reauth") {
    setCrewbidsMonitorStatus("CrewBids access needs to be updated before polling can continue.", "error");
  } else if (monitor?.status === "error") {
    const friendlyError = humanizeCrewbidsMonitorError(monitor.last_error || monitor.lastError);
    const dataNotice = getCrewbidsDataNotice(monitor);
    setCrewbidsMonitorStatus(`${friendlyError} ${dataNotice}`.trim(), "error");
  } else if (hasCredential) {
    setCrewbidsMonitorStatus("CrewBids access is saved. CBP monitoring is automatic once this bid list has selected lines.", "success");
  } else if (credentialPendingVerification) {
    setCrewbidsMonitorStatus(
      "Kalitta CrewBids is offline. Your credentials are encrypted and saved. CrewBidPro will verify them automatically when service returns.",
      "neutral",
    );
  } else if (!credentialResolved) {
    setCrewbidsMonitorStatus(
      navigator.onLine === false || state.workspaceConnectivityStatus === "offline"
        ? "Saved CrewBids access will be checked when internet connectivity returns."
        : "Checking for saved CrewBids access...",
      navigator.onLine === false || state.workspaceConnectivityStatus === "offline" ? "neutral" : "processing",
    );
  } else {
    setCrewbidsMonitorStatus("Add CrewBids access to monitor this bid list while you are away.", "neutral");
  }

  if (saveButton) saveButton.disabled = state.crewbidsMonitorRefreshInFlight;
  if (checkConnectionButton) checkConnectionButton.disabled = !(hasCredential || credentialPendingVerification)
    || credentialNeedsUpdate
    || state.crewbidsCredentialCheckInFlight
    || state.crewbidsMonitorRefreshInFlight;
  if (startButton) {
    startButton.hidden = hasCredential;
    startButton.disabled = !hasCredential || !hasIdentity || !hasSelections || isActive || state.crewbidsMonitorRefreshInFlight;
  }
  if (refreshButton) {
    refreshButton.classList.remove("is-crewbids-online", "is-crewbids-offline");
    refreshButton.classList.toggle("is-refreshing", state.crewbidsMonitorManualRefreshInFlight || sharedRefreshChecking);
    refreshButton.textContent = state.crewbidsMonitorManualRefreshInFlight || sharedRefreshChecking ? "CHECKING…" : "REFRESH";
    refreshButton.disabled = !hasCredential
      || !hasIdentity
      || state.crewbidsMonitorRefreshInFlight
      || state.crewbidsMonitorManualRefreshInFlight
      || sharedRefreshChecking;
    refreshButton.title = hasSelections
      ? "Refresh live CrewBids monitoring for your selected lines."
      : "Refresh shared K4 bid activity without starting monitoring.";
  }
  if (revokeButton) revokeButton.disabled = !hasStoredCredential;
  if (bidsPlacedSearchButton) {
    bidsPlacedSearchButton.disabled = !hasIdentity || state.crewbidsBidsPlacedSearchInFlight;
    bidsPlacedSearchButton.title = hasCredential
      ? "Search downloaded CrewBids bids placed evidence."
      : "Opens the search window and explains how to add saved CrewBids access.";
  }
  if (bidAvoidCheckButton) {
    bidAvoidCheckButton.disabled = !hasCredential
      || !hasIdentity
      || !hasSelections
      || state.crewbidsBidAvoidRequiresResolution
      || !(state.crewbidsBidAvoidRules || []).length
      || state.crewbidsBidAvoidCheckInFlight;
  }
  if (buddyBidCheckButton) {
    buddyBidCheckButton.disabled = !hasCredential
      || !hasIdentity
      || !hasSelections
      || !(state.crewbidsBuddyBidRules || []).length
      || state.crewbidsBuddyBidCheckInFlight;
  }
  maybeOpenCrewbidsBidsPlacedSearchReturn();
}

async function refreshCrewbidsMonitoringState() {
  state.crewbidsMonitorRefreshInFlight = false;

}

async function refreshCrewbidsSharedLineProjection(options = {}) {
  const { force = false } = options;
  const identity = getCurrentBidSelectionIdentity();
  const accountEmail = getCurrentAccountEmail();
  if (!identity?.key || !accountEmail || navigator.onLine === false) return;
  const ruleKey = [
    ...(state.crewbidsBidAvoidRules || []).map((rule) => `avoid:${getBidAvoidRuleEmployeeNumber(rule) || normalizeBidAvoidPilotName(getBidAvoidRuleName(rule))}`),
    ...(state.crewbidsBuddyBidRules || []).map((rule) => `buddy:${getBidAvoidRuleEmployeeNumber(rule) || normalizeBidAvoidPilotName(getBidAvoidRuleName(rule))}`),
  ].filter((key) => !key.endsWith(":"))
    .sort()
    .join(",");
  const projectionKey = `${identity.key}:${String(state.preferences?.seatClass || "").toUpperCase()}:${ruleKey}`;
  if (state.crewbidsSharedLineProjectionInFlight) {
    if (force || state.crewbidsSharedLineProjectionKey !== projectionKey) {
      state.crewbidsSharedLineProjectionRefreshPending = true;
    }
    return getCurrentCrewbidsSharedLineProjection();
  }
  if (!force && state.crewbidsSharedLineProjectionKey === projectionKey) {
    return getCurrentCrewbidsSharedLineProjection();
  }
  state.crewbidsSharedLineProjectionInFlight = true;
  state.crewbidsSharedLineProjectionKey = projectionKey;
  try {
    const payload = await crewbidsApiFetch("/api/crewbids/shared-line-projection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fleet: identity.fleet, bidMonth: identity.bidMonth }),
    });
    if (getCurrentBidSelectionIdentity()?.key !== identity.key) return;
    state.crewbidsSharedLineProjection = {
      ...payload,
      packageKey: identity.key,
    };
    return state.crewbidsSharedLineProjection;
  } catch (error) {
    console.warn("CrewBids shared projection unavailable:", error.message);
    state.crewbidsSharedLineProjection = {
      available: false,
      packageKey: identity.key,
      projectedChoices: [],
    };
    return state.crewbidsSharedLineProjection;
  } finally {
    state.crewbidsSharedLineProjectionInFlight = false;
    if (getCurrentBidSelectionIdentity()?.key === identity.key) renderCrewbidsEvidenceDependentViews();
    if (state.crewbidsSharedLineProjectionRefreshPending) {
      state.crewbidsSharedLineProjectionRefreshPending = false;
      queueMicrotask(() => {
        refreshCrewbidsSharedLineProjection({ force: true }).catch((error) => {
          console.warn("CrewBids pending shared projection refresh skipped:", error.message);
        });
      });
    }
  }
}

const CREWBIDS_MANUAL_REFRESH_RETRY_DELAYS_MS = [1500, 4000];
const CREWBIDS_SHARED_REFRESH_POLL_LIMIT = 60;
const CREWBIDS_SHARED_REFRESH_POLL_INTERVAL_MS = 2000;

function applyCrewbidsSharedRefreshState(payload = {}) {
  if (!payload.sharedRefresh || typeof payload.sharedRefresh !== "object") return;
  state.crewbidsSharedRefresh = payload.sharedRefresh;
  renderCrewbidsMonitoringPanel();
}

async function waitForCrewbidsSharedRefresh(identity, initialPayload) {
  let payload = initialPayload;
  applyCrewbidsSharedRefreshState(payload);
  for (let poll = 0; payload.sharedRefresh?.checking && poll < CREWBIDS_SHARED_REFRESH_POLL_LIMIT; poll += 1) {
    await new Promise((resolve) => window.setTimeout(resolve, CREWBIDS_SHARED_REFRESH_POLL_INTERVAL_MS));
    payload = await crewbidsApiFetch("/api/crewbids/monitor/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packageKey: identity.key, pollOnly: true }),
    });
    applyCrewbidsSharedRefreshState(payload);
  }
  if (payload.sharedRefresh?.checking) {
    state.crewbidsSharedRefresh = {
      ...payload.sharedRefresh,
      status: "delayed",
      checking: false,
      message: "K4 is still checking. Saved evidence remains available.",
    };
    renderCrewbidsMonitoringPanel();
    throw new Error("CrewBids is still checking K4. Please wait a moment and try again.");
  }
  return payload;
}

async function requestCrewbidsMonitorRefreshWithRetry(identity) {
  let lastError = null;
  for (let attempt = 0; attempt <= CREWBIDS_MANUAL_REFRESH_RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      const payload = await crewbidsApiFetch("/api/crewbids/monitor/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageKey: identity.key }),
      });
      return await waitForCrewbidsSharedRefresh(identity, payload);
    } catch (error) {
      lastError = error;
      const delay = CREWBIDS_MANUAL_REFRESH_RETRY_DELAYS_MS[attempt];
      if (!delay) break;
      setCrewbidsMonitorStatus(`CrewBids refresh did not complete. Retrying (${attempt + 1} of ${CREWBIDS_MANUAL_REFRESH_RETRY_DELAYS_MS.length})...`, "warning");
      await new Promise((resolve) => window.setTimeout(resolve, delay));
    }
  }
  throw lastError || new Error("CrewBids refresh failed.");
}

function scheduleCrewbidsSharedLineProjectionRefresh() {
  refreshCrewbidsSharedLineProjection().catch((error) => {
    console.warn("CrewBids shared projection refresh skipped:", error.message);
  });
}

async function checkCrewbidsConnection() {
  if (state.crewbidsCredentialCheckInFlight || navigator.onLine === false) return;
  const credentialPendingVerification = state.crewbidsCredential?.status === "pending_verification";
  if (!state.crewbidsCredential?.configured && !credentialPendingVerification) {
    setCrewbidsMonitorStatus("You are not connected to the Kalitta Bid server. Save CrewBids access first.", "error");
    return;
  }
  state.crewbidsCredentialCheckInFlight = true;
  setCrewbidsMonitorStatus("Checking Kalitta Bid server connection...", "processing");
  renderCrewbidsMonitoringPanel();
  let finalMessage = "";
  let finalTone = "success";
  try {
    const payload = await crewbidsApiFetch("/api/crewbids/credential/check", { method: "POST" });
    state.crewbidsCredential = payload.credential || state.crewbidsCredential;
    state.crewbidsSiteStatus = { status: "online", checkedAt: payload.checkedAt || state.crewbidsCredential?.lastVerifiedAt || new Date().toISOString() };
    const startedMonitor = await ensureCrewbidsMonitoringForSelection().catch((monitorError) => {
      console.warn("CrewBids monitoring start after connection check skipped:", monitorError.message);
      return null;
    });
    const checkedAt = formatCrewbidsEvidenceTimestamp(payload.checkedAt || state.crewbidsCredential?.lastVerifiedAt || "");
    finalMessage = `Connection successful. You are currently connected to the Kalitta Bid server.${checkedAt ? ` Checked ${checkedAt}.` : ""}${startedMonitor ? " Monitoring has started for this saved bid list." : ""}`;
  } catch (error) {
    const friendlyError = humanizeCrewbidsCredentialError(error.message);
    const credentialRejected = isCrewbidsCredentialRejectedError(error.message);
    if (credentialRejected) {
      state.crewbidsCredential = { ...(state.crewbidsCredential || {}), configured: false, status: "needs_update" };
      state.crewbidsSiteStatus = {
        status: "online",
        checkedAt: new Date().toISOString(),
        credentialVerification: "rejected",
        message: friendlyError,
      };
      finalMessage = friendlyError;
      finalTone = "error";
    } else {
      const siteOffline = isCrewbidsSiteOfflineError(error.message);
      state.crewbidsSiteStatus = {
        status: siteOffline ? "offline" : "unknown",
        checkedAt: new Date().toISOString(),
        credentialVerification: "unavailable",
        message: friendlyError,
      };
      finalMessage = siteOffline && credentialPendingVerification
        ? "Kalitta CrewBids is still offline. Your credentials remain encrypted and saved, and CrewBidPro will verify them automatically when service returns."
        : siteOffline
        ? "Unable to verify saved access because Kalitta CrewBids is offline. Your saved access has not changed."
        : "CrewBidPro could not verify your saved CrewBids access right now. Your saved access has not changed.";
      finalTone = "neutral";
    }
  } finally {
    state.crewbidsCredentialCheckInFlight = false;
    renderCrewbidsMonitoringPanel();
    setCrewbidsMonitorStatus(finalMessage, finalTone);
  }
}

function applyCrewbidsMonitoringRefreshPayload(payload, identity) {
  applyCrewbidsSharedRefreshState(payload);
  if (payload.monitor) {
    state.crewbidsMonitors = [
      payload.monitor,
      ...(state.crewbidsMonitors || []).filter((item) => item.id !== payload.monitor.id && item.package_key !== payload.monitor.package_key),
    ];
  }
  state.crewbidsAlerts = payload.alerts || state.crewbidsAlerts || [];
  const winOdds = payload.winOdds || {};
  state.crewbidsWinOddsCheck = {
    ...winOdds,
    packageKey: identity.key,
    checkedAt: winOdds.checkedAt || payload.checkedAt || "",
  };
  mergePackageRiskAlertsIntoWinOddsCheck();
  if (payload.bidAvoidCheck) {
    state.crewbidsBidAvoidCheck = payload.bidAvoidCheck;
    state.crewbidsBidAvoidAutoCheckKey = getCrewbidsBidAvoidCheckKey(identity);
  }
  if (payload.buddyBidCheck) {
    state.crewbidsBuddyBidCheck = payload.buddyBidCheck;
    state.crewbidsBuddyBidAutoCheckKey = getCrewbidsBuddyBidCheckKey(identity);
  }
  saveCrewbidsOfflineStateForCurrentPackage().catch((error) => {
    console.warn("CrewBids offline evidence save failed:", error.message);
  });
}

function renderCrewbidsEvidenceDependentViews() {
  if (isProfilePage()) {
    renderCrewbidsMonitoringPanel();
    return;
  }
  renderActiveTab();
  // The monitoring card lives inside the Bid Selection view. Refresh it after
  // every successful credential/evidence lookup, including when that tab is
  // active; otherwise it retains its initial "not logged in" placeholder.
  renderCrewbidsMonitoringPanel();
}

async function refreshSavedCrewbidsWinOddsFromServer(packageKey) {
  if (!packageKey || state.crewbidsMonitorManualRefreshInFlight || navigator.onLine === false) return;
  const identity = getCurrentBidSelectionIdentity();
  if (identity?.key !== packageKey) return;
  state.crewbidsMonitorManualRefreshInFlight = true;
  try {
    const payload = await requestCrewbidsMonitorRefreshWithRetry(identity);
    applyCrewbidsMonitoringRefreshPayload(payload, identity);
  } finally {
    state.crewbidsMonitorManualRefreshInFlight = false;
    renderCrewbidsEvidenceDependentViews();
  }
}

async function refreshCrewbidsLiveMonitoring() {
  const identity = getCurrentBidSelectionIdentity();
  if (!identity?.key || state.crewbidsMonitorManualRefreshInFlight || navigator.onLine === false) return;
  if (!state.crewbidsCredential?.configured) {
    setCrewbidsMonitorStatus("Add CrewBids access before refreshing live monitoring.", "error");
    return;
  }
  const selectedLines = filterBidListForData(state.bidList);
  if (!selectedLines.length) {
    await refreshCrewbidsNoBidActivity(identity);
    return;
  }
  state.crewbidsMonitorManualRefreshInFlight = true;
  setCrewbidsMonitorStatus("Refreshing CrewBids monitoring evidence...", "processing");
  renderCrewbidsMonitoringPanel();
  let finalMessage = "";
  let finalTone = "success";
  try {
    await pushRemoteBidSelection(identity, selectedLines, { updateCurrentLocal: true });
    const payload = await requestCrewbidsMonitorRefreshWithRetry(identity);
    applyCrewbidsMonitoringRefreshPayload(payload, identity);
    const sharedProjection = await refreshCrewbidsSharedLineProjection({ force: true });
    let noBidRefreshError = null;
    try {
      await refreshCrewbidsNoBidActivityData(identity);
    } catch (error) {
      noBidRefreshError = error;
      await reloadCrewbidsSeniorNoBidders();
    }
    const winOdds = payload.winOdds || {};
    const checkedAt = formatCrewbidsEvidenceTimestamp(payload.checkedAt || winOdds.checkedAt || "");
    const suffix = checkedAt ? ` Checked ${checkedAt}.` : "";
    const activitySuffix = noBidRefreshError
      ? " Room Ahead could not be refreshed right now."
      : " Room Ahead updated.";
    const sharedSuffix = sharedProjection?.checkedAt
      ? ` Shared K4 evidence checked ${formatCrewbidsEvidenceTimestamp(sharedProjection.checkedAt)}.`
      : "";
    const sharedRefreshFailed = payload.sharedRefresh?.status === "failed";
    finalMessage = sharedRefreshFailed
      ? `K4 did not respond. Showing the last saved evidence.${suffix}`
      : `Live monitoring refreshed.${suffix}${sharedSuffix}${activitySuffix}`;
    finalTone = sharedRefreshFailed || noBidRefreshError ? "warning" : "success";
  } catch (error) {
    const sharedProjection = await refreshCrewbidsSharedLineProjection({ force: true }).catch(() => null);
    if (sharedProjection?.available && sharedProjection?.checkedAt) {
      finalMessage = `Fresh shared K4 evidence loaded from ${formatCrewbidsEvidenceTimestamp(sharedProjection.checkedAt)}. The package monitor could not be updated after three attempts: ${error.message}`;
      finalTone = "warning";
    } else {
      finalMessage = `Live monitoring refresh failed after three attempts: ${error.message}`;
      finalTone = "error";
    }
  } finally {
    state.crewbidsMonitorManualRefreshInFlight = false;
    renderCrewbidsEvidenceDependentViews();
    setCrewbidsMonitorStatus(finalMessage, finalTone);
  }
}

async function refreshCrewbidsNoBidActivity(identity = getCurrentBidSelectionIdentity()) {
  if (!identity?.key || state.crewbidsMonitorManualRefreshInFlight || navigator.onLine === false) return;
  state.crewbidsMonitorManualRefreshInFlight = true;
  setCrewbidsMonitorStatus("Refreshing shared bid activity...", "processing");
  renderCrewbidsMonitoringPanel();
  try {
    const payload = await refreshCrewbidsNoBidActivityData(identity);
    setCrewbidsMonitorStatus(payload.message || "Shared bid activity refreshed.", payload.available ? "success" : "neutral");
  } catch (error) {
    setCrewbidsMonitorStatus("Bid activity could not be refreshed right now. Please try again shortly.", "error");
  } finally {
    state.crewbidsMonitorManualRefreshInFlight = false;
    renderCrewbidsEvidenceDependentViews();
  }
}

function canRunCrewbidsBidAvoidCheck() {
  const identity = getCurrentBidSelectionIdentity();
  return Boolean(identity?.key)
    && Boolean(state.crewbidsCredential?.configured)
    && filterBidListForData(state.bidList).length > 0
    && !state.crewbidsBidAvoidRequiresResolution
    && (state.crewbidsBidAvoidRules || []).length > 0
    && !state.crewbidsBidAvoidCheckInFlight
    && navigator.onLine !== false;
}

async function runCrewbidsBidAvoidCheck(options = {}) {
  const { silent = false, force = false } = options;
  const identity = getCurrentBidSelectionIdentity();
  if (!identity?.key || !canRunCrewbidsBidAvoidCheck()) return null;
  const checkKey = getCrewbidsBidAvoidCheckKey(identity);
  if (!force && state.crewbidsBidAvoidAutoCheckKey === checkKey && state.crewbidsBidAvoidCheck) {
    return state.crewbidsBidAvoidCheck;
  }
  try {
    state.crewbidsBidAvoidCheckInFlight = true;
    if (!silent) state.crewbidsBidAvoidCheck = null;
    renderCrewbidsMonitoringPanel();
    await pushRemoteBidSelection(identity, filterBidListForData(state.bidList), { updateCurrentLocal: true });
    const payload = await crewbidsApiFetch(`/api/crewbids/bid-avoid/check?packageKey=${encodeURIComponent(identity.key)}`);
    state.crewbidsBidAvoidCheck = payload.check || null;
    state.crewbidsBidAvoidAutoCheckKey = checkKey;
    await saveCrewbidsOfflineStateForCurrentPackage();
    return state.crewbidsBidAvoidCheck;
  } catch (error) {
    if (!silent) {
      state.crewbidsBidAvoidCheck = { status: "error", message: `Bid Avoid check unavailable: ${error.message}` };
    } else {
      console.warn("CrewBids Bid Avoid auto-check unavailable:", error.message);
    }
    return null;
  } finally {
    state.crewbidsBidAvoidCheckInFlight = false;
    renderCrewbidsEvidenceDependentViews();
  }
}

function canRunCrewbidsBuddyBidCheck() {
  const identity = getCurrentBidSelectionIdentity();
  return Boolean(identity?.key)
    && Boolean(state.crewbidsCredential?.configured)
    && filterBidListForData(state.bidList).length > 0
    && (state.crewbidsBuddyBidRules || []).length > 0
    && !state.crewbidsBuddyBidCheckInFlight
    && navigator.onLine !== false;
}

async function runCrewbidsBuddyBidCheck(options = {}) {
  const { silent = false, force = false } = options;
  const identity = getCurrentBidSelectionIdentity();
  if (!identity?.key || !canRunCrewbidsBuddyBidCheck()) return null;
  const checkKey = getCrewbidsBuddyBidCheckKey(identity);
  if (!force && state.crewbidsBuddyBidAutoCheckKey === checkKey && state.crewbidsBuddyBidCheck) {
    return state.crewbidsBuddyBidCheck;
  }
  try {
    state.crewbidsBuddyBidCheckInFlight = true;
    if (!silent) state.crewbidsBuddyBidCheck = null;
    renderCrewbidsMonitoringPanel();
    await pushRemoteBidSelection(identity, filterBidListForData(state.bidList), { updateCurrentLocal: true });
    const payload = await crewbidsApiFetch(`/api/crewbids/buddy-bid/check?packageKey=${encodeURIComponent(identity.key)}`);
    state.crewbidsBuddyBidCheck = payload.check || null;
    state.crewbidsBuddyBidAutoCheckKey = checkKey;
    await saveCrewbidsOfflineStateForCurrentPackage();
    return state.crewbidsBuddyBidCheck;
  } catch (error) {
    if (!silent) {
      state.crewbidsBuddyBidCheck = { status: "error", message: `Buddy Bid check unavailable: ${error.message}` };
    } else {
      console.warn("CrewBids Buddy Bid auto-check unavailable:", error.message);
    }
    return null;
  } finally {
    state.crewbidsBuddyBidCheckInFlight = false;
    renderCrewbidsEvidenceDependentViews();
  }
}

function setupCrewbidsMonitoringControls() {
  $("toggleCrewbidsPasswordVisibility")?.addEventListener("click", () => {
    const input = $("crewbidsPassword");
    if (!input || !input.value) return;
    input.dataset.visible = input.dataset.visible === "true" ? "false" : "true";
    renderCrewbidsMonitoringPanel();
    input.focus();
  });
  $("crewbidsPassword")?.addEventListener("focus", (event) => {
    event.target.type = event.target.dataset.visible === "true" ? "text" : "password";
  });
  $("crewbidsPassword")?.addEventListener("input", (event) => {
    event.target.dataset.dirty = "true";
  });

  $("saveCrewbidsCredential")?.addEventListener("click", async () => {
    const employeeNumber = $("crewbidsEmployeeNumber")?.value.trim() || "";
    const password = $("crewbidsPassword")?.value || "";
    const consent = Boolean($("crewbidsConsent")?.checked);
    if (!password) {
      setCrewbidsMonitorStatus("Enter your current CrewBids password before updating saved access.", "error");
      return;
    }
    try {
      setCrewbidsMonitorStatus("Saving encrypted CrewBids access...", "processing");
      const payload = await crewbidsApiFetch("/api/crewbids/credential", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeNumber, password, consent }),
      });
      state.crewbidsCredential = payload.credential || null;
      if (payload.fixture) {
        state.crewbidsSiteStatus = { status: "online", checkedAt: payload.credential?.lastVerifiedAt || new Date().toISOString() };
        clearCrewbidsPasswordInputAfterSave();
        renderCrewbidsMonitoringPanel();
        setCrewbidsMonitorStatus(payload.message || "OHIO test CrewBids access is saved.", "success");
        returnToCrewbidsBidsPlacedSearch();
        return;
      }
      const verificationPending = Boolean(payload.verificationPending)
        || state.crewbidsCredential?.status === "pending_verification";
      if (verificationPending) {
        state.crewbidsSiteStatus = {
          status: "offline",
          checkedAt: state.crewbidsCredential?.lastFailedAt || new Date().toISOString(),
          credentialVerification: "pending",
          message: payload.message || "",
        };
        clearCrewbidsPasswordInputAfterSave();
        renderCrewbidsMonitoringPanel();
        setCrewbidsMonitorStatus(
          payload.message || "Kalitta CrewBids is offline. Your credentials are encrypted and saved. CrewBidPro will verify them automatically when service returns.",
          "neutral",
        );
        returnToCrewbidsBidsPlacedSearch();
        return;
      }
      state.crewbidsSiteStatus = { status: "online", checkedAt: payload.credential?.lastVerifiedAt || new Date().toISOString() };
      clearCrewbidsPasswordInputAfterSave();
      const startedMonitor = await ensureCrewbidsMonitoringForSelection().catch((monitorError) => {
        console.warn("CrewBids monitoring start after credential save skipped:", monitorError.message);
        return null;
      });
      renderCrewbidsMonitoringPanel();
      if (startedMonitor) setCrewbidsMonitorStatus("CrewBids access is saved and monitoring has started for this bid list.", "success");
      returnToCrewbidsBidsPlacedSearch();
    } catch (error) {
      const friendlyError = humanizeCrewbidsCredentialError(error.message);
      state.crewbidsSiteStatus = { status: "offline", checkedAt: new Date().toISOString(), message: friendlyError };
      renderCrewbidsMonitoringPanel();
      setCrewbidsMonitorStatus(friendlyError, "error");
    }
  });

  // $("checkCrewbidsConnection")?.addEventListener("click", () => {
  //   checkCrewbidsConnection().catch((error) => console.warn("CrewBids connection check failed:", error.message));
  // });

  $("startCrewbidsMonitor")?.addEventListener("click", async () => {
    const identity = getCurrentBidSelectionIdentity();
    if (!identity?.key) {
      setCrewbidsMonitorStatus("Load a package before starting monitoring.", "error");
      return;
    }
    try {
      setCrewbidsMonitorStatus("Saving bid list and starting hosted monitoring...", "processing");
      await pushRemoteBidSelection(identity, filterBidListForData(state.bidList), { updateCurrentLocal: true });
      const payload = await crewbidsApiFetch("/api/crewbids/monitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageKey: identity.key, consent: true }),
      });
      const monitor = payload.monitor;
      state.crewbidsMonitors = [
        monitor,
        ...(state.crewbidsMonitors || []).filter((item) => item.id !== monitor.id && item.package_key !== monitor.package_key),
      ];
      renderCrewbidsMonitoringPanel();
    } catch (error) {
      setCrewbidsMonitorStatus(error.message, "error");
    }
  });

  $("refreshCrewbidsMonitor")?.addEventListener("click", () => {
    refreshCrewbidsLiveMonitoring().catch((error) => console.warn("CrewBids live monitoring refresh failed:", error.message));
  });

  $("openCrewbidsBidsPlacedSearch")?.addEventListener("click", openCrewbidsBidsPlacedSearchModal);

  $("checkCrewbidsBidAvoid")?.addEventListener("click", async () => {
    runCrewbidsBidAvoidCheck({ force: true }).catch((error) => console.warn("Bid Avoid check failed:", error.message));
  });
  $("checkCrewbidsBuddyBid")?.addEventListener("click", async () => {
    runCrewbidsBuddyBidCheck({ force: true }).catch((error) => console.warn("Buddy Bid check failed:", error.message));
  });

  $("revokeCrewbidsCredential")?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Revoke CrewBids access?",
      message: "This will delete stored CrewBids access and pause active monitors.",
      confirmLabel: "CLICK TO CONFIRM",
    });
    if (!confirmed) return;
    try {
      setCrewbidsMonitorStatus("Revoking CrewBids access...", "processing");
      const payload = await crewbidsApiFetch("/api/crewbids/credential/revoke", { method: "POST" });
      state.crewbidsCredential = payload.credential || { configured: false, status: "revoked" };
      state.crewbidsMonitors = (state.crewbidsMonitors || []).map((monitor) => ({ ...monitor, status: "paused" }));
      renderCrewbidsMonitoringPanel();
    } catch (error) {
      setCrewbidsMonitorStatus(error.message, "error");
    }
  });

  renderCrewbidsMonitoringPanel();
}

function setupProfileBidAvoidControls() {
  const runPilotWatchSearch = async (mode = "avoid") => {
    const isBuddyBid = mode === "buddy";
    const input = $(isBuddyBid ? "profileCrewbidsBuddyBidInput" : "profileCrewbidsBidAvoidInput");
    const status = $(isBuddyBid ? "profileCrewbidsBuddyBidStatus" : "profileCrewbidsBidAvoidStatus");
    const query = input?.value.trim() || "";
    if (query.length < 2) {
      if (status) status.textContent = "Type a pilot's name or employee number.";
      return;
    }
    try {
      if (status) status.textContent = "Searching pilots...";
      const endpoint = isBuddyBid ? "/api/crewbids/buddy-bid/search" : "/api/crewbids/bid-avoid/search";
      const payload = await crewbidsApiFetch(`${endpoint}?q=${encodeURIComponent(query)}`);
      openProfileBidAvoidSearchResults(payload.pilots || [], mode);
      if (status) status.textContent = "Select a pilot from the search results.";
    } catch (error) {
      if (status) status.textContent = error.message;
    }
  };

  $("searchProfileCrewbidsBidAvoid")?.addEventListener("click", () => runPilotWatchSearch("avoid"));
  $("profileCrewbidsBidAvoidInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    runPilotWatchSearch("avoid");
  });
  $("searchProfileCrewbidsBuddyBid")?.addEventListener("click", () => runPilotWatchSearch("buddy"));
  $("profileCrewbidsBuddyBidInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    runPilotWatchSearch("buddy");
  });

  $("profileCrewbidsBidAvoidList")?.addEventListener("click", async (event) => {
    const button = event.target.closest(".crewbids-avoid-pill-remove");
    if (!button) return;
    const employeeNumber = button.dataset.employeeNumber || "";
    const pilotName = normalizeBidAvoidPilotName(button.dataset.pilotName || "");
    const remaining = (state.crewbidsBidAvoidRules || []).filter((rule) => {
      const ruleEmployeeNumber = rule.employee_number || rule.employeeNumber || "";
      const ruleName = normalizeBidAvoidPilotName(rule.pilot_name || rule.pilotName || "");
      if (employeeNumber) return ruleEmployeeNumber !== employeeNumber;
      return ruleName !== pilotName;
    });
    try {
      await saveProfileBidAvoidRules(remaining, "Removing Bid Avoid pilot...");
    } catch (error) {
      const status = $("profileCrewbidsBidAvoidStatus");
      if (status) status.textContent = error.message;
    }
  });

  $("profileCrewbidsBuddyBidList")?.addEventListener("click", async (event) => {
    const button = event.target.closest(".crewbids-buddy-pill-remove");
    if (!button) return;
    const employeeNumber = button.dataset.employeeNumber || "";
    const pilotName = normalizeBidAvoidPilotName(button.dataset.pilotName || "");
    const remaining = (state.crewbidsBuddyBidRules || []).filter((rule) => {
      const ruleEmployeeNumber = rule.employee_number || rule.employeeNumber || "";
      const ruleName = normalizeBidAvoidPilotName(rule.pilot_name || rule.pilotName || "");
      if (employeeNumber) return ruleEmployeeNumber !== employeeNumber;
      return ruleName !== pilotName;
    });
    try {
      await saveProfileBuddyBidRules(remaining, "Removing Buddy Bid pilot...");
    } catch (error) {
      const status = $("profileCrewbidsBuddyBidStatus");
      if (status) status.textContent = error.message;
    }
  });
}

async function sendUserActivityHeartbeat() {
  if (state.userActivityHeartbeatInFlight || navigator.onLine === false) return;
  state.userActivityHeartbeatInFlight = true;
  try {
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    if (!hasWorkspaceAuthHeaders(headers)) return;
    await fetch("/api/user/activity", {
      method: "PATCH",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: `${window.location.pathname}${window.location.search}`,
      }),
      cache: "no-store",
    });
  } catch (error) {
    console.warn("User activity heartbeat skipped:", error.message);
  } finally {
    state.userActivityHeartbeatInFlight = false;
  }
}

function startUserActivityHeartbeat() {
  if (state.userActivityHeartbeatTimer) return;
  sendUserActivityHeartbeat();
  state.userActivityHeartbeatTimer = window.setInterval(sendUserActivityHeartbeat, USER_ACTIVITY_HEARTBEAT_MS);
  window.addEventListener("focus", sendUserActivityHeartbeat);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) sendUserActivityHeartbeat();
  });
}

async function hydrateWorkspaceAdminLink() {
  const link = $("workspaceAdminLink");
  if (!link) return;
  link.hidden = true;
  if (shouldHideAdminWorkspaceControls()) return;
  link.hidden = !shouldShowOwnerAdminShortcut();
  try {
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    if (!hasWorkspaceAuthHeaders(headers)) return;
    const response = await fetch("/api/admin/session", { headers, cache: "no-store" });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) return;
    link.hidden = payload.method !== "supabase" || !["owner", "admin"].includes(payload.role);
  } catch (error) {
    console.warn("Admin link unavailable:", error.message);
    link.hidden = !shouldShowOwnerAdminShortcut();
  }
}

function setSubscriptionModalStatus(message, tone = "neutral") {
  const status = $("subscriptionCheckoutStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

async function postJson(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || "Request failed");
  }
  return result;
}

async function postStripeSession(endpoint, payload) {
  const result = await postJson(endpoint, payload);
  if (!result.url) {
    throw new Error(result.error || "Stripe session failed");
  }
  return result;
}

async function startStripeCheckout(plan, button) {
  if (BILLING_PAUSED) {
    openSubscriptionPlansModal();
    return;
  }
  const payload = { ...getSubscriptionPayload(), plan };
  if (!payload.workEmail) {
    setSubscriptionModalStatus("Add and verify your work email before upgrading.", "error");
    return;
  }
  if (button) button.disabled = true;
  setSubscriptionModalStatus("Opening Stripe Checkout...", "processing");
  try {
    const session = await postStripeSession("/api/stripe/create-checkout-session", payload);
    try {
      safeStorage.set(PENDING_BILLING_MODAL_STORAGE_KEY, JSON.stringify({
        plan,
        startedAt: Date.now(),
      }));
    } catch {
      // Return-state storage is a convenience; checkout still works without it.
    }
    markBillingReturnUrl(plan);
    window.location.assign(session.url);
  } catch (error) {
    if (button) button.disabled = false;
    setSubscriptionModalStatus(error.message || "Unable to open Stripe Checkout.", "error");
  }
}

function clearPendingBillingModal() {
  safeStorage.remove(PENDING_BILLING_MODAL_STORAGE_KEY);
}

function markBillingReturnUrl(plan) {
  const url = new URL(window.location.href);
  url.searchParams.set("billingReturn", plan);
  window.history.replaceState(window.history.state, "", url.toString());
}

function clearBillingReturnUrl() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("billingReturn")) return;
  url.searchParams.delete("billingReturn");
  window.history.replaceState(window.history.state, "", url.toString());
}

function getPendingBillingPlan() {
  try {
    const parsed = JSON.parse(safeStorage.get(PENDING_BILLING_MODAL_STORAGE_KEY) || "{}");
    const plan = parsed.plan;
    const startedAt = Number(parsed.startedAt);
    if (!["monthly", "yearly"].includes(plan) || !Number.isFinite(startedAt)) {
      clearPendingBillingModal();
      return "";
    }
    if (Date.now() - startedAt > PENDING_BILLING_MODAL_TTL_MS) {
      clearPendingBillingModal();
      return "";
    }
    return plan;
  } catch {
    clearPendingBillingModal();
    return "";
  }
}

function handleCheckoutReturnState() {
  const params = getWorkspaceParams();
  const checkoutState = params.get("checkout");
  if (checkoutState === "success") {
    clearPendingBillingModal();
    clearBillingReturnUrl();
    openProfileSetup();
    openSubscriptionPlansModal("Checkout complete. Stripe is updating your access state.");
    return;
  }
  if (checkoutState === "cancelled") {
    clearPendingBillingModal();
    clearBillingReturnUrl();
    openProfileSetup();
    openSubscriptionPlansModal("Checkout was canceled. Choose a plan when you are ready.");
    return;
  }

  const returnPlan = params.get("billingReturn");
  const pendingPlan = ["monthly", "yearly"].includes(returnPlan) ? returnPlan : getPendingBillingPlan();
  if (!pendingPlan) return;
  clearBillingReturnUrl();
  openProfileSetup();
  openSubscriptionPlansModal(`Returned from Stripe before checkout finished. Choose ${pendingPlan} again to reopen Checkout.`);
}

function setupCheckoutReturnHandling() {
  const handlePotentialCheckoutReturn = () => {
    const params = getWorkspaceParams();
    const hasReturnMarker = ["monthly", "yearly"].includes(params.get("billingReturn"));
    if (!hasReturnMarker && !getPendingBillingPlan()) return;
    requestAnimationFrame(() => window.setTimeout(handleCheckoutReturnState, 0));
  };
  window.addEventListener("pageshow", handlePotentialCheckoutReturn);
  window.addEventListener("popstate", handlePotentialCheckoutReturn);
  window.setInterval(handlePotentialCheckoutReturn, 500);
}

async function openStripeBillingPortal(button) {
  const payload = getSubscriptionPayload();
  if (button) button.disabled = true;
  try {
    const session = await postStripeSession("/api/stripe/create-billing-portal-session", payload);
    clearPendingBillingModal();
    window.location.assign(session.url);
  } catch (error) {
    if (button) button.disabled = false;
    const message = /No Stripe customer/i.test(error.message || "")
      ? "Billing management appears after the first paid checkout creates a Stripe customer for this work email."
      : error.message || "Billing portal is not available yet.";
    openSubscriptionPlansModal(message);
  }
}

async function handleAutoRenewChange(event) {
  const select = event.currentTarget;
  const renewAutomatically = select.value === "yes";
  const previousValue = state.subscriptionAccess?.renewAutomatically === false ? "no" : "yes";
  const confirmed = await confirmDestructiveAction({
    eyebrow: "Billing",
    title: renewAutomatically ? "Turn on automatic renewal?" : "Turn off automatic renewal?",
    message: renewAutomatically
      ? "CrewBidPro will ask Stripe to keep this subscription renewing automatically."
      : "CrewBidPro will ask Stripe to stop renewal at the end of the current billing period. Access will move to Free Limited after the paid period ends.",
    confirmLabel: renewAutomatically ? "Yes, renew" : "Yes, stop renewal",
  });
  if (!confirmed) {
    select.value = previousValue;
    return;
  }

  select.disabled = true;
  try {
    const result = await postJson("/api/stripe/set-auto-renew", {
      workEmail: state.preferences.workEmail || getCurrentAccountEmail(),
      renewAutomatically,
    });
    state.subscriptionAccess = result.access || state.subscriptionAccess;
    renderSubscriptionPanel();
  } catch (error) {
    console.warn("Auto-renew update failed:", error.message);
    select.disabled = false;
    select.value = previousValue;
    openSubscriptionPlansModal(error.message || "Unable to update automatic renewal.");
  }
}

function openSubscriptionPlansModal(initialStatus = "") {
  openSupportModal("CrewBidPro", "Support", `
    <div class="report-panel">
      <p>Thank you for wanting to support CrewBidPro.</p>
      <p>I really appreciate it. For now, I am not accepting payments, and there is nothing you need to purchase to keep using the app.</p>
      <p>CrewBidPro is still growing, and your feedback, patience, and real-world use are the most helpful support right now.</p>
      <p>If that changes later, I will make it clear inside the app before asking anyone to pay.</p>
      <p>Thank you,<br>Richard<br>CrewBidPro</p>
      <div class="report-actions subscription-checkout-actions">
        <button id="subscriptionPauseContinue" type="button" class="btn-primary">Continue using CrewBidPro</button>
        <span id="subscriptionCheckoutStatus" class="report-copy-status subscription-checkout-status" aria-live="polite"></span>
      </div>
    </div>
  `);
  if (initialStatus && !BILLING_PAUSED) setSubscriptionModalStatus(initialStatus, "error");
  $("subscriptionPauseContinue")?.addEventListener("click", closeSupportModal);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(new Error("Unable to read this photo.")));
    reader.readAsDataURL(file);
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("Unable to process this photo.")));
    image.src = dataUrl;
  });
}

async function prepareProfilePhoto(file) {
  if (!file.type.startsWith("image/")) {
    throw new Error("Choose an image file.");
  }
  if (file.size > PROFILE_PHOTO_MAX_UPLOAD_BYTES) {
    throw new Error("Choose a photo under 5 MB.");
  }

  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(dataUrl);
  const scale = Math.min(1, PROFILE_PHOTO_MAX_RENDER_PIXELS / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", PROFILE_PHOTO_OUTPUT_QUALITY);
}

function renderProfileRequiredNotice() {
  const notice = $("profileRequiredNotice");
  const employeeField = $("profileEmployeeNumberField");
  const employeeInput = $("preferenceEmployeeNumber");
  const verifyEmployeeButton = $("verifyProfileEmployeeNumber");
  if (!notice || !employeeField || !employeeInput) return;
  const needsProfile = shouldRequireProfileIdentity() && !isCurrentCrewProfileComplete();
  const needsIdentity = needsProfile && !hasAcceptedEmployeeIdentity();
  const needsAssignment = needsProfile && hasAcceptedEmployeeIdentity();
  notice.hidden = !needsProfile;
  if (needsIdentity) {
    notice.innerHTML = "<strong>Confirm your employee number to continue.</strong><span>CrewBidPro uses your employee number to initialize your protected roster evidence and current bidding assignment.</span>";
  } else if (needsAssignment) {
    notice.innerHTML = "<strong>Select your current fleet and seat to continue.</strong><span>CrewBidPro uses the effective assignment for package selection, monthly rank, K4 status, monitoring, search, and submission.</span>";
  }
  employeeField.classList.toggle("profile-field-required", needsIdentity);
  if (verifyEmployeeButton) verifyEmployeeButton.hidden = !needsIdentity;
  $("profileFleetTypeField")?.classList.toggle("profile-field-required", needsAssignment);
  $("profileSeatClassField")?.classList.toggle("profile-field-required", needsAssignment);
  employeeInput.setAttribute("aria-invalid", String(needsIdentity));
  employeeInput.setAttribute("aria-describedby", needsIdentity ? "profileRequiredNotice" : "");
}

async function loadBidResultsReport() {
  try {
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in to see your bid result.");
    const response = await fetch("/api/user/bid-report", {
      cache: "no-store",
      headers,
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.error) throw new Error(payload.error || "Your bid result could not be loaded.");
    state.bidResultsReport = payload;
    state.bidResultsReportError = "";
    return state.bidResultsReport;
  } catch (error) {
    state.bidResultsReport = null;
    state.bidResultsReportError = error.message || "Your bid result could not be loaded.";
    return null;
  }
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function findCurrentBidReportUser(report = state.bidResultsReport) {
  return report?.result && typeof report.result === "object" ? report.result : null;
}

function bidReportOutcomeLabel(outcome = "") {
  const labels = {
    projected_actual_line: "Matched",
    actual_in_user_order_but_projection_missed: "Review",
    actual_not_in_registered_order: "Order Changed",
    no_registered_bid_order: "No Bid Order",
    no_official_award_match: "No Award Match",
  };
  return labels[outcome] || "Unknown";
}

function bidReportOutcomeTone(outcome = "") {
  if (outcome === "projected_actual_line") return "is-good";
  if (outcome === "actual_in_user_order_but_projection_missed") return "is-review";
  if (outcome === "no_registered_bid_order" || outcome === "no_official_award_match") return "is-muted";
  return "is-review";
}

function lineLabel(line) {
  const normalized = String(line || "").trim().toUpperCase();
  if (/^[FR]\d+$/.test(normalized)) return normalized;
  const number = Number(normalized.match(/\d+/)?.[0] || 0);
  return number ? `F${number}` : "Unavailable";
}

function bidReportChoiceLabel(choice) {
  const number = Number(choice || 0);
  if (!number) return "choice unavailable";
  const remainder = number % 100;
  const suffix = remainder >= 11 && remainder <= 13
    ? "th"
    : number % 10 === 1
      ? "st"
      : number % 10 === 2
        ? "nd"
        : number % 10 === 3
          ? "rd"
          : "th";
  return `${number}${suffix} choice`;
}

function bidReportOrderSourceLabel(source = "") {
  if (source === "current-server-bid") return "CrewBids order";
  if (source === "submit-bids") return "Bid submitted through CrewBidPro";
  if (source === "saved_bid_list") return "Saved Bid Selection";
  return "No saved bid order";
}

function renderBidReportLostLines(user) {
  const actualPosition = Number(user?.officialChoice || user?.officialLinePositionInRegisteredOrder || 0);
  const pressureRows = Array.isArray(user?.pressureAtUserTurnFirst12) ? user.pressureAtUserTurnFirst12 : [];
  if (!actualPosition || actualPosition <= 1) {
    return `<p class="bid-results-plain">Your award was already at the top of the bid order CrewBidPro found.</p>`;
  }
  const rows = pressureRows
    .filter((row) => Number(row.choice || 0) < actualPosition)
    .slice(0, 8);
  if (!rows.length) {
    return `<p class="bid-results-plain">${escapeHtml(String(actualPosition - 1))} choice${actualPosition - 1 === 1 ? "" : "s"} appeared above the line you received.</p>`;
  }
  return `
    <div class="bid-results-lost-list">
      ${rows.map((row) => `
        <div class="bid-results-lost-row">
          <span>${escapeHtml(String(row.choice || ""))}</span>
          <strong>${escapeHtml(lineLabel(row.line))}</strong>
          <span>${escapeHtml(String(row.remainingAtUserTurn || 0))} opening${Number(row.remainingAtUserTurn || 0) === 1 ? "" : "s"} appeared available at your estimated turn</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderBidReportExplanation(user) {
  const outcome = user?.outcome || "";
  const projected = lineLabel(user?.projectedLineAtUserTurn);
  const actual = lineLabel(user?.officialLineCode || user?.officialLine);
  const awardedChoice = bidReportChoiceLabel(user?.officialChoice);
  if (outcome === "projected_actual_line") {
    return `CrewBidPro thought you would receive ${projected}, and that's what you received.`;
  }
  if (outcome === "actual_in_user_order_but_projection_missed") {
    return `You received ${actual}, your ${awardedChoice}. CrewBidPro thought you would receive ${projected}. This result will help CrewBidPro improve future predictions.`;
  }
  if (outcome === "no_registered_bid_order") {
    return `CrewBidPro found your official award, but it could not find the bid order you used for this month.`;
  }
  if (outcome === "actual_not_in_registered_order") {
    return `Your official result was ${actual}, but that line was not in the bid order CrewBidPro found. Your CrewBids order may have changed after CrewBidPro last saved it.`;
  }
  if (outcome === "no_official_award_match") {
    return "CrewBidPro has the official results, but could not confidently match one to this profile.";
  }
  return "CrewBidPro does not have enough information to explain this result yet.";
}

function bidReportPeriodTitle(period = "") {
  if (period === "previous") return "Previous Month";
  if (period === "current") return "Current Month";
  return "Next Month";
}

function bidReportSeatLabel(seat = "") {
  if (seat === "CA") return "Captain";
  if (seat === "FO") return "First Officer";
  if (seat === "FE") return "Flight Engineer";
  return seat;
}

function renderBidReportUnavailablePeriod(period = {}, periodName = "") {
  const title = bidReportPeriodTitle(periodName);
  const monthLabel = period?.bidMonthLabel || "Month unavailable";
  const assignment = [period?.fleet, bidReportSeatLabel(period?.seat)].filter(Boolean).join(" ");
  const periodMeta = [monthLabel, assignment].filter(Boolean).join(" · ");
  if (!period || !Object.keys(period).length) {
    return `
      <article class="bid-results-period-card is-loading">
        <div class="bid-results-period-heading">
          <strong>${escapeHtml(title)}</strong>
          <span class="bid-results-period-badge is-muted">Loading</span>
        </div>
        <p>${escapeHtml(monthLabel)}</p>
        <h3>—</h3>
        <span>Loading bid history...</span>
      </article>
    `;
  }
  const statusLabel = period.status === "pending" ? "Pending" : period.status === "unmatched" ? "Review" : "Unavailable";
  return `
    <article class="bid-results-period-card is-unavailable">
      <div class="bid-results-period-heading">
        <strong>${escapeHtml(title)}</strong>
        <span class="bid-results-period-badge is-muted">${escapeHtml(statusLabel)}</span>
      </div>
      <p>${escapeHtml(periodMeta)}</p>
      <h3>—</h3>
      <span>${escapeHtml(period.message || "Bid history is not available for this month.")}</span>
      ${period.selectedCount ? `<small>${escapeHtml(`${period.selectedCount} saved choice${Number(period.selectedCount) === 1 ? "" : "s"}`)}</small>` : ""}
    </article>
  `;
}

const BID_REPORT_HISTORY_TABLE_HEADER = `
  <thead>
    <tr>
      <th>Line</th>
      <th>Crew</th>
      <th class="right-header">Credit</th>
      <th class="center-header">Duty</th>
      <th class="center-header">Off</th>
      <th class="nowrap-header">CARRY-IN</th>
      <th class="center-header ipad-only-dh">DH</th>
      <th>BREAKDOWN</th>
      <th class="center-header desktop-dh-header">DH</th>
      <th class="line-airports-header">Airports</th>
      <th class="line-remarks-header">Remarks</th>
    </tr>
  </thead>
`;

function renderBidReportHistoryLine(period = {}, periodName = "") {
  const line = period?.line;
  if (!period?.available || !line || typeof line !== "object" || !line.name) {
    return renderBidReportUnavailablePeriod(period, periodName);
  }
  const title = bidReportPeriodTitle(periodName);
  const assignment = [period.fleet, bidReportSeatLabel(period.seat)].filter(Boolean).join(" ");
  const periodMeta = [period.bidMonthLabel || "Month unavailable", assignment].filter(Boolean).join(" · ");
  const status = period.status === "projected" ? "Projected" : "Official award";
  const choice = period.status === "projected" ? period.projectedChoice : period.officialChoice;
  const choiceLabel = choice
    ? `${period.status === "projected" ? "Expected choice" : "Choice"} #${choice}`
    : "Choice unavailable";
  const trips = getLineTripDetails(line);
  const lineRemarks = getVisibleRemarks(trips.flatMap(getTripRemarks));
  const detailId = `bid-report-history-details-${periodName}`;
  const moneyLineCredit = state.moneyLine.enabled ? renderMoneyLineCredit(line) : "";
  const moneyLineTotal = state.moneyLine.enabled ? renderMoneyLineValue(line) : "";
  const dutyDays = Number(line.dutyDays || line.dayCount || 0);
  const daysOff = Number(line.daysOff || 0);
  return `
    <section class="history-month-line" data-history-period="${escapeHtml(periodName)}">
      <div class="history-month-heading">
        <div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(periodMeta)}</span></div>
        <small>${escapeHtml(`${status} · ${choiceLabel}`)}</small>
      </div>
      <div class="table-wrap line-results-view">
        <table>
          ${BID_REPORT_HISTORY_TABLE_HEADER}
          <tbody>
            <tr class="line-summary-row">
              <td class="name-cell" data-line-name="${escapeHtml(line.name)}">
                <div class="line-identity-stack">
                  <div class="bid-select">
                    <input type="checkbox" class="bid-checkbox" disabled aria-label="Historical ${period.status === "projected" ? "projected" : "awarded"} line">
                    <button type="button" class="line-name line-reveal-target" aria-label="Show ${escapeHtml(line.name)} route helper">${escapeHtml(line.name)}</button>
                  </div>
                  ${renderFatigueScoreChip(line)}
                  ${renderLineStartTimeChip(line)}
                </div>
              </td>
              <td>${formatCrewCell(line.crewComplement)}</td>
              <td><span class="line-credit-value">${escapeHtml(line.credit || formatHours(line.creditMinutes))}</span>${moneyLineCredit}</td>
              <td class="number-cell">${dutyDays || "—"}</td>
              <td class="number-cell">${Number.isFinite(daysOff) && daysOff > 0 ? daysOff : "—"}</td>
              <td class="number-cell carry-in-cell line-carry-in-cell" ${getLineCarryInDays(line) ? 'tabindex="0"' : ""}>${renderCarryInCell(line, { showMoneyLine: state.moneyLine.enabled })}</td>
              <td class="number-cell carry-in-cell ipad-only-dh ${line.deadheadCount ? "deadhead-cell" : ""}" ${line.deadheadCount ? 'tabindex="0"' : ""}>${renderDeadheadCell(line)}</td>
              <td class="${moneyLineTotal ? "has-moneyline-total" : ""}">
                ${renderTripStack(line, trips)}
                ${moneyLineTotal}
                <span class="line-card-trip-count">${trips.length} ${trips.length === 1 ? "trip" : "trips"}${hasSplitLine(line) ? " · split line" : ""}</span>
                <button type="button" class="line-card-details-toggle" aria-expanded="false" aria-controls="${detailId}">
                  <span>Details</span><span class="line-card-details-chevron" aria-hidden="true">⌄</span>
                </button>
              </td>
              <td class="number-cell carry-in-cell desktop-dh-cell ${line.deadheadCount ? "deadhead-cell" : ""}" ${line.deadheadCount ? 'tabindex="0"' : ""}>${renderDeadheadCell(line)}</td>
              <td>${renderLineAirportRoutes(line, trips)}</td>
              <td>${lineRemarks.length ? `<div class="remarks-list">${lineRemarks.map(renderRemarkItem).join("")}</div>` : ""}</td>
            </tr>
            <tr id="${detailId}" class="line-detail-row" aria-label="${escapeHtml(`${line.name} detail row`)}">
              <td colspan="11">
                <div class="line-detail-grid">
                  <section class="line-detail-panel line-detail-breakdown"><span class="line-detail-label">Breakdown</span>${renderTripStack(line, trips)}</section>
                  <section class="line-detail-panel line-detail-dh"><span class="line-detail-label">DH</span><span class="line-detail-value carry-in-cell">${renderDeadheadCell(line)}</span></section>
                  <section class="line-detail-panel line-detail-airports"><span class="line-detail-label">Airports</span>${renderLineAirportRoutes(line, trips) || '<span class="line-detail-empty">None</span>'}</section>
                  <section class="line-detail-panel line-detail-remarks"><div class="line-detail-heading"><span class="line-detail-label">Remarks</span></div>${lineRemarks.length ? `<div class="remarks-list remarks-list-by-trip line-detail-remark-list">${lineRemarks.map(renderRemarkFullItem).join("")}</div>` : '<span class="line-detail-empty">None</span>'}</section>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderBidReportPeriodGrid(report = {}) {
  const periods = report?.periods && typeof report.periods === "object" ? report.periods : {};
  return `
    <div class="history-line-tools">
      <label class="result-checkbox-label">
        <input id="historyMoneyLineToggle" type="checkbox" data-moneyline-toggle ${state.moneyLine.enabled ? "checked" : ""}>
        <span>MoneyLine™</span>
        <strong class="history-moneyline-state">${state.moneyLine.enabled ? "ON" : "OFF"}</strong>
      </label>
    </div>
    <section class="history-lines-panel" aria-label="Previous, current, and next month bid reports">
      ${renderBidReportHistoryLine(periods.previous, "previous")}
      ${renderBidReportHistoryLine(periods.current, "current")}
      ${renderBidReportHistoryLine(periods.next, "next")}
    </section>
  `;
}

function bindBidReportHistoryInteractions() {
  const content = $("bidResultsProfileContent");
  if (!content) return;
  const periods = state.bidResultsReport?.periods || {};
  const periodLine = (element) => periods[element.closest?.("[data-history-period]")?.dataset.historyPeriod]?.line;
  const moneyLineToggle = $("historyMoneyLineToggle");
  moneyLineToggle?.addEventListener("change", async () => {
    if (!moneyLineToggle.checked) {
      setMoneyLineEnabled(false);
      return;
    }
    const enabled = await enableMoneyLineWithSetup();
    if (!enabled) renderMoneyLineToggleControls();
  });
  content.querySelectorAll(".history-month-line .line-card-details-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const detailRow = document.getElementById(button.getAttribute("aria-controls"));
      const summaryRow = button.closest(".line-summary-row");
      if (!detailRow || !summaryRow) return;
      const expanded = !detailRow.classList.contains("is-expanded");
      detailRow.classList.toggle("is-expanded", expanded);
      summaryRow.classList.toggle("has-expanded-details", expanded);
      button.setAttribute("aria-expanded", String(expanded));
      button.querySelector("span:first-child").textContent = expanded ? "Hide details" : "Details";
    });
  });
  content.querySelectorAll(".history-month-line .line-name").forEach((button) => {
    const line = periodLine(button);
    if (line) bindHoverPopup(button, () => renderLineRoutePopup(line));
  });
  content.querySelectorAll(".history-month-line .trip-chip").forEach((chip) => {
    const line = periodLine(chip);
    const trip = line ? getLineTripDetails(line)[Number(chip.dataset.tripIndex)] : null;
    if (trip) bindHoverPopup(chip, () => renderTripRoutePopup(trip));
  });
  content.querySelectorAll(".history-month-line .deadhead-cell").forEach((cell) => {
    const line = periodLine(cell);
    const deadheads = line ? getLineDeadheads(line) : [];
    if (deadheads.length) bindHoverPopup(cell, () => renderDeadheadPopup(`${line.name} Deadheads`, deadheads, true));
  });
  content.querySelectorAll(".history-month-line .line-carry-in-cell[tabindex]").forEach((cell) => {
    const line = periodLine(cell);
    if (line) bindHoverPopup(cell, () => renderCarryInPopup(line));
  });
  content.querySelectorAll(".history-month-line .fatigue-score-chip").forEach((chip) => {
    const line = periodLine(chip);
    if (!line) return;
    const show = (event) => {
      event.stopPropagation();
      showHoverPopup(event, renderFatigueScorePopup(line));
    };
    chip.addEventListener("mouseenter", show);
    chip.addEventListener("mouseover", show);
    chip.addEventListener("focus", show);
    chip.addEventListener("mouseleave", hideHoverPopup);
    chip.addEventListener("blur", hideHoverPopup);
    chip.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
      openLineFatigueBreakdown(line);
    });
  });
  attachAirportPopups(content);
  attachRemarkPopups(content);
}

function renderBidResultsCard() {
  const content = $("bidResultsProfileContent");
  const badge = $("bidResultsBadge");
  if (!content || !badge) return;
  const report = state.bidResultsReport;
  if (!report) {
    badge.textContent = state.bidResultsReportError ? "Unavailable" : "Loading";
    badge.className = `bid-results-badge ${state.bidResultsReportError ? "is-muted" : ""}`;
    content.innerHTML = `${renderBidReportPeriodGrid({})}<p class="preferences-note">${escapeHtml(state.bidResultsReportError || "Loading bid results...")}</p>`;
    bindBidReportHistoryInteractions();
    return;
  }
  if (report.available === false) {
    badge.textContent = "Unavailable";
    badge.className = "bid-results-badge is-muted";
    content.innerHTML = `${renderBidReportPeriodGrid(report)}<p class="preferences-note">${escapeHtml(report.message || "Your bid result is not available yet.")}</p>`;
    bindBidReportHistoryInteractions();
    return;
  }
  const user = findCurrentBidReportUser(report);
  if (!user) {
    badge.textContent = "Unavailable";
    badge.className = "bid-results-badge is-muted";
    content.innerHTML = `${renderBidReportPeriodGrid(report)}<p class="preferences-note">CrewBidPro could not build your report for ${escapeHtml(report.bidMonthLabel || "this bid month")}.</p>`;
    bindBidReportHistoryInteractions();
    return;
  }
  const outcomeTone = bidReportOutcomeTone(user.outcome);
  badge.textContent = bidReportOutcomeLabel(user.outcome);
  badge.className = `bid-results-badge ${outcomeTone}`;
  const seniorityLabel = [user.seat, user.bidSeniorityUsed ? `#${user.bidSeniorityUsed}` : ""].filter(Boolean).join(" ");
  const officialChoice = user.officialChoice ? `Choice ${user.officialChoice}` : "Choice unavailable";
  const projection = user.projectedLineAtUserTurn
    ? `${lineLabel(user.projectedLineAtUserTurn)}${user.projectedChoiceAtUserTurn ? `, choice ${user.projectedChoiceAtUserTurn}` : ""}`
    : "No projection";
  content.innerHTML = `
    ${renderBidReportPeriodGrid(report)}
    <div class="existing-report-divider">
      <strong>Current-Month Bid Report Card</strong>
      <span>Your detailed current result remains below the three-month line history.</span>
    </div>
    <div class="bid-results-hero">
      <div>
        <p class="bid-results-kicker">${escapeHtml(report.bidMonthLabel || "Bid results")} - ${escapeHtml(report.fleet || "")} ${escapeHtml(user.seat || "")}</p>
        <h3>${escapeHtml(lineLabel(user.officialLineCode || user.officialLine))}</h3>
        <span>${escapeHtml(officialChoice)}${seniorityLabel ? ` - Bid position ${escapeHtml(seniorityLabel)}` : ""}</span>
      </div>
      <div class="bid-results-score ${outcomeTone}">
        <strong>${escapeHtml(bidReportOutcomeLabel(user.outcome))}</strong>
        <span>${user.registeredOrderCount ? "Saved bid found" : "Bid order unavailable"}</span>
      </div>
    </div>
    <div class="bid-results-metrics">
      <div><span>Bid Used</span><strong>${escapeHtml(bidReportOrderSourceLabel(user.orderSource))}</strong></div>
      <div><span>Bid Saved</span><strong>${escapeHtml(user.orderUpdatedAtCentral || "Time unavailable")}</strong></div>
      <div><span>Lines in Your Bid</span><strong>${escapeHtml(String(user.registeredOrderCount || 0))}</strong></div>
      <div><span>Awarded Choice</span><strong>${escapeHtml(user.officialChoice ? `#${user.officialChoice}` : "Not found")}</strong></div>
      <div><span>CrewBidPro Expected</span><strong>${escapeHtml(projection)}</strong></div>
      <div><span>CrewBids Choices Found</span><strong>${escapeHtml(String(user.cacheChoiceCount || 0))}</strong></div>
    </div>
    <section class="bid-results-detail">
      <h4>Choices Above Your Award</h4>
      ${renderBidReportLostLines(user)}
    </section>
    <section class="bid-results-detail">
      <h4>What Happened</h4>
      <p>${escapeHtml(renderBidReportExplanation(user))}</p>
    </section>
  `;
  bindBidReportHistoryInteractions();
}

function renderPreferences() {
  renderProfileButton();
  renderProfileCropStudio();
  renderSubscriptionPanel();
  renderBidResultsCard();
  $("preferenceDisplayName").value = state.preferences.displayName;
  $("preferenceWorkEmail").value = state.preferences.workEmail;
  $("preferenceEmployeeNumber").value = state.preferences.employeeNumber || "";
  $("preferenceSeniorityNumber").value = state.preferences.seniorityNumber || "";
  const seniorityDisplay = $("profileSeniorityNumberDisplay");
  if (seniorityDisplay) {
    const listDate = formatSeniorityListDate(state.preferences.seniorityListDate);
    const rosterSize = Number(state.preferences.seniorityRosterSize || 0);
    const topPercent = getCompanySeniorityTopPercent();
    seniorityDisplay.innerHTML = state.preferences.seniorityNumber
      ? `${escapeHtml(state.preferences.seniorityNumber)}${rosterSize ? ` of ${escapeHtml(rosterSize)} pilots${topPercent ? ` (Top ${escapeHtml(topPercent)}%).` : "."}` : ""}${listDate ? ` <span class="profile-seniority-date">(as of ${escapeHtml(listDate)})</span>` : ""}`
      : "Not configured";
  }
  const identityConfirmed = Boolean(state.preferences.employeeNumber && state.preferences.identityConfirmedAt);
  const identityPending = isPendingEmployeeIdentity();
  const identityAccepted = identityConfirmed || identityPending;
  const canEditDeveloperFields = canEditDeveloperProfileFields();
  $("preferenceEmployeeNumber").readOnly = identityAccepted;
  $("preferenceSeniorityNumber").readOnly = true;
  $("preferenceEmployeeNumber").setAttribute("aria-readonly", String(identityAccepted));
  $("preferenceSeniorityNumber").setAttribute("aria-readonly", "true");
  document.querySelector(".profile-dev-fields")?.classList.toggle("is-readonly", true);
  renderEmailNotificationPreferences();
  $("preferencePhoneNumber").value = state.preferences.phoneNumber;
  renderPhoneVerificationStatus();
  const assignmentDraft = getProfileAssignmentDraft();
  $("preferencePilotType").value = assignmentDraft.fleet || "any";
  $("preferencePilotType").disabled = false;
  const seatSelect = $("preferenceSeatClass");
  if (seatSelect) seatSelect.value = assignmentDraft.seat;
  renderProfileAssignmentDraftState();
  renderProfileRequiredNotice();
  renderProfileIdentitySummary();
  renderProfileAssignmentSummary();
  $("preferenceDefaultTab").value = state.preferences.defaultTab;
  $("preferenceTheme").value = state.pendingTheme || state.preferences.theme;
  $("preferenceLongStayThreshold").value = state.preferences.longStayThresholdHours;
  $("preferenceBreakfastStart").value = state.preferences.breakfastStartTime;
  renderPreferencePills("preferenceRegionButtons", collectAvailablePreferenceRegions(), state.preferences.avoidRegions, "region");
  renderPreferencePills("preferenceCountryButtons", collectAvailablePreferenceCountries(), state.preferences.avoidCountries, "country");
  renderPreferencePills("preferenceAirportButtons", collectAvailablePreferenceAirports(), state.preferences.avoidAirports, "airport");
  renderPreferenceChoicePills("preferenceSpecialRestrictionButtons", collectAvailableSpecialRestrictions(), state.preferences.specialRestrictions, "region");
  renderProfileBidAvoidControls();
  renderProfileBuddyBidControls();

  const uploadSummary = getUploadedFleetSummary(state.lastImportFiles);
  const identityNote = identityPending
    ? `Employee number saved for verification: <strong>${escapeHtml(state.preferences.employeeNumber)}</strong>`
    : identityConfirmed
    ? `Confirmed identity: <strong>${escapeHtml(state.preferences.displayName || "Crewmember")}</strong> - ${escapeHtml(getProfileFleetSeatLabel() || getProfileStandingLabel())}`
    : "Employee number is required before opening the workspace.";
  const fleetNoteLabel = state.lastImportFiles.length ? "Available package(s) in current upload" : "Loaded package";
  $("preferenceDetectedFleetNote").innerHTML = `${identityNote}<br>${fleetNoteLabel}: <strong id="preferenceDetectedFleet">${escapeHtml(uploadSummary)}</strong>`;
  $("preferenceWorkEmail").readOnly = true;
  $("preferenceWorkEmail").setCustomValidity(validateWorkEmail(state.preferences.workEmail) ? "" : "Work email must end in @kalittaair.com.");

  $("preferenceRegionButtons").querySelectorAll("[data-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;
      if (state.preferences.avoidRegions.has(value)) {
        state.preferences.avoidRegions.delete(value);
      } else {
        state.preferences.avoidRegions.add(value);
      }
      savePreferences();
      renderPreferences();
    });
  });

  $("preferenceCountryButtons").querySelectorAll("[data-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;
      if (state.preferences.avoidCountries.has(value)) {
        state.preferences.avoidCountries.delete(value);
      } else {
        state.preferences.avoidCountries.add(value);
      }
      savePreferences();
      renderPreferences();
    });
  });

  $("preferenceAirportButtons").querySelectorAll("[data-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;
      if (state.preferences.avoidAirports.has(value)) {
        state.preferences.avoidAirports.delete(value);
      } else {
        state.preferences.avoidAirports.add(value);
      }
      savePreferences();
      renderPreferences();
    });
  });

  $("preferenceSpecialRestrictionButtons").querySelectorAll("[data-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;
      if (state.preferences.specialRestrictions.has(value)) {
        state.preferences.specialRestrictions.delete(value);
      } else {
        state.preferences.specialRestrictions.add(value);
      }
      savePreferences();
      renderPreferences();
    });
  });
}

function getPersonalEmailVerificationResult() {
  const url = new URL(window.location.href);
  const result = url.searchParams.get("personalEmailVerified") || "";
  if (result) {
    url.searchParams.delete("personalEmailVerified");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }
  return result;
}

function setEmailNotificationFeedback(message = "", tone = "") {
  const status = $("profileEmailNotificationFeedback");
  if (!status) return;
  status.textContent = message;
  status.className = `profile-email-notification-feedback${tone ? ` is-${tone}` : ""}`;
}

function getNotificationPreferencesSnapshot() {
  return {
    outbidNotifications: state.preferences.outbidNotifications === true,
    newlyAvailableNotifications: state.preferences.newlyAvailableNotifications === true,
    systemNotifications: state.preferences.systemNotifications === true,
  };
}

function notificationPreferencesMatch(left, right) {
  if (!left || !right) return false;
  return left.outbidNotifications === right.outbidNotifications
    && left.newlyAvailableNotifications === right.newlyAvailableNotifications
    && left.systemNotifications === right.systemNotifications;
}

function renderNotificationPreferenceSwitchValues() {
  const controls = [
    ["preferenceOutbidNotifications", "outbidNotifications"],
    ["preferenceNewlyAvailableNotifications", "newlyAvailableNotifications"],
    ["preferenceSystemNotifications", "systemNotifications"],
  ];
  controls.forEach(([id, key]) => {
    const control = $(id);
    if (control) control.checked = state.preferences[key] === true;
  });
}

function applyNotificationPreferencesSnapshot(snapshot) {
  if (!snapshot) return;
  state.preferences.outbidNotifications = snapshot.outbidNotifications === true;
  state.preferences.newlyAvailableNotifications = snapshot.newlyAvailableNotifications === true;
  state.preferences.systemNotifications = snapshot.systemNotifications === true;
  savePreferences();
  renderNotificationPreferenceSwitchValues();
}

async function persistNotificationPreferences(snapshot) {
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in before changing communication preferences.");
  const response = await fetch("/api/user/notification-preferences", {
    method: "PATCH",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      notificationPreferences: {
        outbid_notifications: snapshot.outbidNotifications === true,
        newly_available_notifications: snapshot.newlyAvailableNotifications === true,
        system_notifications: snapshot.systemNotifications === true,
      },
    }),
    cache: "no-store",
    keepalive: true,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || "Unable to save communication preferences.");
  return payload;
}

async function flushNotificationPreferencesSave() {
  if (state.notificationPreferencesSaveInFlight || !state.notificationPreferencesSaveQueued) return false;
  state.notificationPreferencesSaveQueued = false;
  state.notificationPreferencesSaveInFlight = true;
  $("profileNotificationOptIns")?.setAttribute("aria-busy", "true");
  const snapshot = getNotificationPreferencesSnapshot();
  try {
    await persistNotificationPreferences(snapshot);
    state.notificationPreferencesLastSaved = { ...snapshot };
    if (!state.notificationPreferencesSaveQueued
        && notificationPreferencesMatch(getNotificationPreferencesSnapshot(), snapshot)) {
      setEmailNotificationFeedback("Communication preferences saved automatically.", "success");
    }
    return true;
  } catch (error) {
    const hasNewerChange = state.notificationPreferencesSaveQueued
      || !notificationPreferencesMatch(getNotificationPreferencesSnapshot(), snapshot);
    if (!hasNewerChange && state.notificationPreferencesLastSaved) {
      applyNotificationPreferencesSnapshot(state.notificationPreferencesLastSaved);
      setEmailNotificationFeedback(
        `${error.message || "Communication preferences could not be saved."} Your previous settings were restored.`,
        "error",
      );
    } else {
      setEmailNotificationFeedback(error.message || "Communication preferences could not be saved.", "error");
    }
    return false;
  } finally {
    state.notificationPreferencesSaveInFlight = false;
    $("profileNotificationOptIns")?.setAttribute("aria-busy", "false");
    if (state.notificationPreferencesSaveQueued) {
      setEmailNotificationFeedback("Saving communication preferences...", "processing");
      void flushNotificationPreferencesSave();
    }
  }
}

function handleNotificationPreferenceChange(preferenceKey, enabled) {
  if (!state.notificationPreferencesLastSaved) {
    state.notificationPreferencesLastSaved = getNotificationPreferencesSnapshot();
  }
  state.preferences[preferenceKey] = enabled === true;
  savePreferences();
  state.notificationPreferencesSaveQueued = true;
  setEmailNotificationFeedback("Saving communication preferences...", "processing");
  return flushNotificationPreferencesSave();
}

function normalizePhoneForStorage(value) {
  const raw = String(value || "").trim();
  if (!raw) return { value: "", error: "" };
  const digits = raw.replace(/\D/g, "");
  let normalizedDigits = digits;
  if (!raw.startsWith("+")) {
    if (digits.length === 10) normalizedDigits = `1${digits}`;
    else if (!(digits.length === 11 && digits.startsWith("1"))) {
      return { value: "", error: "Enter a 10-digit US/Canada number or begin an international number with + and its country code." };
    }
  }
  if (normalizedDigits.length < 8 || normalizedDigits.length > 15 || normalizedDigits.startsWith("0")) {
    return { value: "", error: "Enter a usable international phone number with country code." };
  }
  return { value: `+${normalizedDigits}`, error: "" };
}

function renderPhoneVerificationStatus() {
  const input = $("preferencePhoneNumber");
  const status = $("profilePhoneVerificationStatus");
  const verifyButton = $("verifyPhoneNumber");
  if (!input || !status || !verifyButton) return;
  const parsed = normalizePhoneForStorage(state.preferences.phoneNumber);
  input.setCustomValidity(parsed.error);
  const verified = Boolean(parsed.value && state.preferences.phoneNumberVerifiedAt);
  status.textContent = !state.preferences.phoneNumber
    ? "Not provided"
    : parsed.error
      ? parsed.error
      : verified
        ? `Verified: ${parsed.value}`
        : `Not verified · Will be saved as ${parsed.value}`;
  status.className = `profile-contact-status${verified ? " is-verified" : " is-unverified"}`;
  // Keep the future control suppressed until phone verification is universally available.
  verifyButton.hidden = true;
  verifyButton.disabled = true;
  verifyButton.title = "Phone verification will become available when CrewBidPro adds an SMS provider.";
}

function renderEmailNotificationPreferences() {
  const input = $("preferencePersonalEmail");
  const email = normalizeEmail(state.preferences.personalEmail);
  const verified = Boolean(email && state.preferences.personalEmailVerifiedAt);
  const pendingEmail = normalizeEmail(state.preferences.pendingPersonalEmail);
  const editing = verified && state.personalEmailChangeEditing;
  const draftEmail = normalizeEmail(state.personalEmailDraft);
  const verificationStatus = $("profilePersonalEmailVerificationStatus");
  const pendingStatus = $("profilePendingPersonalEmail");
  const changeButton = $("changePersonalEmail");
  const verifyButton = $("verifyPersonalEmail");
  const cancelButton = $("cancelPersonalEmailChange");
  const optIns = $("profileNotificationOptIns");
  const outbidNotifications = $("preferenceOutbidNotifications");
  const newlyAvailableNotifications = $("preferenceNewlyAvailableNotifications");
  const systemNotifications = $("preferenceSystemNotifications");
  if (input) {
    input.value = editing ? state.personalEmailDraft : state.preferences.personalEmail;
    input.readOnly = verified && !editing;
    input.setAttribute("aria-readonly", String(input.readOnly));
  }
  if (verificationStatus) {
    verificationStatus.textContent = !email
      ? "Status: not provided"
      : verified
        ? "Verified"
        : `Status: unverified · ${email}`;
    verificationStatus.className = `profile-contact-status${verified ? " is-verified" : " is-unverified"}`;
  }
  if (pendingStatus) {
    pendingStatus.textContent = pendingEmail
      ? `Verification pending: ${pendingEmail}. Your current verified email remains active.`
      : "";
    pendingStatus.hidden = !pendingEmail;
  }
  if (changeButton) changeButton.hidden = !verified || editing || Boolean(pendingEmail);
  if (verifyButton) {
    verifyButton.hidden = verified && !editing && !pendingEmail;
    verifyButton.textContent = pendingEmail ? "RESEND" : verified ? "VERIFY NEW EMAIL" : "VERIFY NOW";
    verifyButton.disabled = pendingEmail
      ? false
      : verified
        ? !draftEmail || draftEmail === email
        : !email;
  }
  if (cancelButton) cancelButton.hidden = !editing && !pendingEmail;
  if (optIns) optIns.hidden = false;
  if (outbidNotifications) {
    outbidNotifications.checked = Boolean(state.preferences.outbidNotifications);
    outbidNotifications.disabled = !verified;
  }
  if (newlyAvailableNotifications) {
    newlyAvailableNotifications.checked = Boolean(state.preferences.newlyAvailableNotifications);
    newlyAvailableNotifications.disabled = !verified;
  }
  if (systemNotifications) {
    systemNotifications.checked = Boolean(state.preferences.systemNotifications);
    systemNotifications.disabled = !verified;
  }
  const verificationResult = getPersonalEmailVerificationResult();
  if (verificationResult === "1") {
    setEmailNotificationFeedback("Personal email verified. Communication preference changes save automatically.", "success");
  } else if (verificationResult === "0") {
    setEmailNotificationFeedback("That verification link is invalid or expired. Request a new link.", "error");
  }
}

async function requestPersonalEmailVerification() {
  const currentEmail = normalizeEmail(state.preferences.personalEmail);
  const verified = Boolean(currentEmail && state.preferences.personalEmailVerifiedAt);
  const pendingEmail = normalizeEmail(state.preferences.pendingPersonalEmail);
  const email = pendingEmail || (verified ? normalizeEmail(state.personalEmailDraft) : currentEmail);
  if (!email) throw new Error("Add a personal email first.");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Enter a valid personal email address.");
  if (verified && email === currentEmail) throw new Error("Enter a different personal email address.");
  setEmailNotificationFeedback(pendingEmail ? "Resending verification email..." : "Sending verification email...", "processing");
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in before verifying your personal email.");
  const response = await fetch("/api/user/personal-email/verification", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || "Unable to send the verification email.");
  if (!verified) state.preferences.personalEmail = payload.email || email;
  state.preferences.pendingPersonalEmail = payload.pendingPersonalEmail || "";
  state.preferences.pendingPersonalEmailExpiresAt = payload.expiresAt || "";
  state.personalEmailChangeEditing = false;
  state.personalEmailDraft = "";
  savePreferences();
  renderEmailNotificationPreferences();
  const deliveryMessage = payload.status === "sent"
    ? "Verification email sent. Open it and follow the link within 24 hours."
    : "Verification email queued. Delivery may take a few minutes; follow the link within 24 hours.";
  setEmailNotificationFeedback(deliveryMessage, "success");
}

async function cancelPersonalEmailChange() {
  if (state.personalEmailChangeEditing && !state.preferences.pendingPersonalEmail) {
    state.personalEmailChangeEditing = false;
    state.personalEmailDraft = "";
    setEmailNotificationFeedback("");
    renderEmailNotificationPreferences();
    return;
  }
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in before canceling this email change.");
  const response = await fetch("/api/user/personal-email/verification/cancel", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({}),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || "Unable to cancel this email change.");
  state.preferences.pendingPersonalEmail = "";
  state.preferences.pendingPersonalEmailExpiresAt = "";
  state.personalEmailChangeEditing = false;
  state.personalEmailDraft = "";
  savePreferences();
  setEmailNotificationFeedback("Email change canceled.", "success");
  renderEmailNotificationPreferences();
}

function updateProfileCropPosition(nextX, nextY) {
  state.preferences.avatarPositionX = clamp(nextX, 0, 100);
  state.preferences.avatarPositionY = clamp(nextY, 0, 100);
  savePreferences();
  renderProfileButton();
  renderProfileCropStudio();
}

function setupProfileCropStudio() {
  const stage = $("profileCropStage");
  if (!stage) return;
  let dragStart = null;

  stage.addEventListener("pointerdown", (event) => {
    if (!state.preferences.avatarDataUrl) return;
    stage.setPointerCapture?.(event.pointerId);
    stage.classList.add("is-dragging");
    dragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      positionX: getProfileCropValue(state.preferences.avatarPositionX),
      positionY: getProfileCropValue(state.preferences.avatarPositionY),
    };
  });

  stage.addEventListener("pointermove", (event) => {
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const nextX = dragStart.positionX - ((event.clientX - dragStart.x) / rect.width) * 100;
    const nextY = dragStart.positionY - ((event.clientY - dragStart.y) / rect.height) * 100;
    updateProfileCropPosition(nextX, nextY);
  });

  const stopDrag = (event) => {
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    stage.releasePointerCapture?.(event.pointerId);
    stage.classList.remove("is-dragging");
    dragStart = null;
  };

  stage.addEventListener("pointerup", stopDrag);
  stage.addEventListener("pointercancel", stopDrag);

  stage.addEventListener("keydown", (event) => {
    if (!state.preferences.avatarDataUrl) return;
    const step = event.shiftKey ? 10 : 4;
    const keyMoves = {
      ArrowLeft: [step, 0],
      ArrowRight: [-step, 0],
      ArrowUp: [0, step],
      ArrowDown: [0, -step],
    };
    const move = keyMoves[event.key];
    if (!move) return;
    event.preventDefault();
    updateProfileCropPosition(
      getProfileCropValue(state.preferences.avatarPositionX) + move[0],
      getProfileCropValue(state.preferences.avatarPositionY) + move[1],
    );
  });
}

function setActiveTab(tabName, options = {}) {
  const tabs = document.querySelector(".tabs");
  const previousTop = tabs?.getBoundingClientRect().top ?? null;
  if (options.userInitiated) state.startupTabOverride = tabName;
  state.activeTab = tabName;
  document.body.dataset.activeTab = tabName;
  saveWorkspaceNavigationState();
  if (!["lines", "trips", "reserves", "training"].includes(tabName)) unlockActiveSectionJumpTarget();
  document.body.classList.toggle("is-import-focus", tabName === "import");
  updateImportAttentionCue();
  document.querySelectorAll(".tab").forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("is-active", isActive);
    if (tab.getAttribute("role") === "tab") {
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    }
  });
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("is-active"));
  const panel = $(`${tabName}Panel`);
  panel?.classList.add("is-active");
  document.querySelectorAll('[role="tabpanel"]').forEach((tabPanel) => {
    tabPanel.hidden = tabPanel !== panel;
  });
  const bidWindowStatusRow = document.querySelector(".bid-window-status-row");
  if (bidWindowStatusRow) bidWindowStatusRow.hidden = tabName !== "selection";
  syncWorkspaceControlsDeck(tabName);
  if (!options.skipRender) renderActiveTab();
  updateStickyOffsets();
  if (previousTop !== null && !options.scrollToPanel && !options.skipViewportAdjustment) {
    requestAnimationFrame(() => {
      const nextTop = tabs?.getBoundingClientRect().top ?? previousTop;
      const delta = nextTop - previousTop;
      if (Math.abs(delta) > 1) window.scrollBy(0, delta);
    });
  }
  if (options.scrollToPanel) {
    requestAnimationFrame(() => {
      scrollElementBelowTabs(panel);
      schedulePageJumpHighlightUpdate();
    });
  } else if (options.preserveViewTarget) {
    requestAnimationFrame(() => {
      const targetElement = getPageJumpElement(options.preserveViewTarget);
      if (targetElement) scrollElementBelowTabs(targetElement, "auto");
      lockActiveSectionJumpTarget(options.preserveViewTarget);
      window.setTimeout(() => {
        const settledTargetElement = getPageJumpElement(options.preserveViewTarget);
        if (settledTargetElement) scrollElementBelowTabs(settledTargetElement, "auto");
        lockActiveSectionJumpTarget(options.preserveViewTarget);
      }, 80);
    });
  } else {
    schedulePageJumpHighlightUpdate();
  }
}

function updateImportAttentionCue() {
  const importTab = document.querySelector("[data-tab='import']");
  if (!importTab || isProfilePage()) return;
  const shouldCue = !hasLoadedPackageData() && state.activeTab !== "import";
  importTab.classList.toggle("is-import-attention", shouldCue);
  importTab.setAttribute("aria-describedby", shouldCue ? "importAttentionHint" : "");
}

function applyPreferenceChanges({ reimport = false } = {}) {
  applyTheme();
  renderProfileButton();
  renderPreferences();
  if (isProfilePage()) {
    applyAccessLocks();
    refreshProfileMonthlyBidRankEstimate().catch((error) => {
      console.warn("Monthly bid position refresh skipped:", error.message);
    });
    return;
  }
  renderActiveTab();
  setActiveTab("lines", { skipViewportAdjustment: true });
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));

  if (!reimport || !state.lastImportFiles.length) return;

  importSelectedFiles(state.lastImportFiles).catch((error) => {
    setImportStatus(getImportFailureMessage(error), "error");
    console.error(error);
  });
}

function getImportFailureMessage(error) {
  if (error instanceof TypeError) {
    return "Import failed. This action requires an active connection. Reconnect and try again.";
  }
  const message = error?.message || "Please check the selected files and try again.";
  return `Import failed. ${message}`;
}

async function saveCurrentUserProfilePreferences({
  effectiveFleet = getProfileAircraftType(),
  effectiveSeat = String(state.preferences.seatClass || "").toUpperCase(),
} = {}) {
  const previousAssignment = getProfileFleetSeatLabel();
  const phone = normalizePhoneForStorage(state.preferences.phoneNumber);
  if (phone.error) throw new Error(phone.error);
  state.preferences.phoneNumber = phone.value;
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) {
    if (shouldUseRemoteWorkspaceServices()) throw new Error("Sign in before saving your Crew Profile.");
    const rosterFleet = normalizeProfileAssignmentFleet(state.preferences.rosterAircraftType);
    const rosterSeat = normalizeProfileAssignmentSeat(state.preferences.rosterSeatClass);
    state.preferences.pilotType = effectiveFleet;
    state.preferences.aircraftType = effectiveFleet;
    state.preferences.seatClass = effectiveSeat;
    state.preferences.assignmentSource = effectiveFleet === rosterFleet && effectiveSeat === rosterSeat
      ? "pilot_seniority_roster"
      : "user_override";
    state.preferences.assignmentUpdatedAt = new Date().toISOString();
    setConfirmedProfileAssignment(effectiveFleet, effectiveSeat);
    savePreferences();
    if (getProfileFleetSeatLabel() !== previousAssignment) clearCurrentWorkspacePackageRef();
    return { localPreview: true };
  }
  const response = await fetch("/api/user/profile", {
    method: "PATCH",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      displayName: state.preferences.displayName,
      personalEmail: state.preferences.personalEmail,
      notificationPreferences: {
        outbid_notifications: state.preferences.outbidNotifications === true,
        newly_available_notifications: state.preferences.newlyAvailableNotifications === true,
        system_notifications: state.preferences.systemNotifications === true,
      },
      phoneNumber: phone.value,
      employeeNumber: state.preferences.employeeNumber,
      seniorityNumber: state.preferences.seniorityNumber,
      fleetPreference: effectiveFleet,
      effectiveFleet,
      effectiveSeat,
    }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) throw new Error(payload.error || "Unable to save profile");
  applyRemoteProfileToPreferences(payload.profile || {}, { email: getCurrentAccountEmail() });
  if (getProfileFleetSeatLabel() !== previousAssignment) clearCurrentWorkspacePackageRef();
  return payload.profile || null;
}

async function lookupEmployeeIdentity(employeeNumber) {
  const headers = await getSupabaseAuthHeaders({ forceRemote: shouldUseRemoteWorkspaceServices() });
  if (shouldUseRemoteWorkspaceServices() && !hasWorkspaceAuthHeaders(headers)) {
    throw new Error("Sign in before confirming your employee number.");
  }
  const response = await fetch(`/api/personnel/lookup?employeeNumber=${encodeURIComponent(employeeNumber)}`, {
    headers,
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error || !payload.match) {
    throw new Error(payload.error || "Employee number was not found.");
  }
  return payload.match;
}

function applyPersonnelIdentityMatch(match = {}) {
  if (!match || typeof match !== "object") return false;
  state.preferences.employeeNumber = match.employeeNumber || state.preferences.employeeNumber || "";
  state.preferences.displayName = match.displayName || state.preferences.displayName || "";
  state.preferences.seniorityNumber = match.systemSeniorityNumber || state.preferences.seniorityNumber || "";
  state.preferences.seniorityListDate = match.seniorityListDate || state.preferences.seniorityListDate || "";
  state.preferences.seniorityRosterSize = Number(match.seniorityRosterSize || state.preferences.seniorityRosterSize || 0);
  state.preferences.rosterAircraftType = match.aircraftType || state.preferences.rosterAircraftType || "";
  state.preferences.rosterSeatClass = match.seatClass || state.preferences.rosterSeatClass || "";
  if (!isEffectiveAssignmentOverride()) {
    state.preferences.aircraftType = match.aircraftType || state.preferences.aircraftType || "";
    state.preferences.seatClass = match.seatClass || state.preferences.seatClass || "";
    state.preferences.pilotType = match.aircraftType || state.preferences.pilotType || "any";
  }
  state.preferences.peerGroupPosition = Number(match.peerGroupPosition || state.preferences.peerGroupPosition || 0);
  state.preferences.peerGroupSize = Number(match.peerGroupSize || state.preferences.peerGroupSize || 0);
  state.preferences.bidStrengthPercent = Number(match.bidStrengthPercent || state.preferences.bidStrengthPercent || 0);
  return true;
}

async function hydrateMissingPersonnelMetrics() {
  if (!state.preferences.employeeNumber || !state.preferences.identityConfirmedAt) return false;
  try {
    const match = await lookupEmployeeIdentity(state.preferences.employeeNumber);
    if (!applyPersonnelIdentityMatch(match)) return false;
    savePreferences();
    return true;
  } catch (error) {
    console.warn("Personnel seniority metrics unavailable:", error.message);
    return false;
  }
}

function setEmployeeIdentityModalStatus(message, tone = "") {
  const status = $("employeeIdentityStatus");
  if (!status) return;
  status.className = "employee-identity-status";
  if (tone) status.classList.add(`is-${tone}`);
  status.textContent = message;
}

function setEmployeeIdentityBusy(isBusy) {
  const apply = $("employeeIdentityApply");
  const confirm = $("employeeIdentityConfirm");
  const input = $("employeeIdentityInput");
  const fleet = $("employeeIdentityFleet");
  const seat = $("employeeIdentitySeat");
  if (apply) {
    apply.disabled = isBusy;
    apply.textContent = isBusy && state.employeeIdentityLookupInFlight ? "SEARCHING..." : "FIND MY PROFILE";
  }
  if (input) input.disabled = isBusy;
  if (fleet) fleet.disabled = isBusy;
  if (seat) seat.disabled = isBusy;
  if (confirm) {
    confirm.hidden = !state.employeeIdentityMatch;
    confirm.textContent = isBusy && state.employeeIdentityConfirmInFlight
      ? "SAVING..."
      : state.employeeIdentityMatch?.provisional
        ? "SAVE PENDING & CONTINUE"
        : "CONFIRM & CONTINUE";
    confirm.disabled = isBusy || !state.employeeIdentityMatch || !fleet?.value || !seat?.value;
  }
}

function employeeIdentityNumber(value) {
  const employeeNumber = String(value || "").trim();
  if (!employeeNumber) throw new Error("Enter your employee ID number.");
  if (!/^\d{1,12}$/.test(employeeNumber)) {
    throw new Error("Use digits only, with no spaces or letters.");
  }
  return employeeNumber;
}

function updateEmployeeIdentityConfirmAvailability() {
  const confirm = $("employeeIdentityConfirm");
  if (!confirm) return;
  confirm.disabled = Boolean(
    state.employeeIdentityLookupInFlight
    || state.employeeIdentityConfirmInFlight
    || !state.employeeIdentityMatch
    || !$("employeeIdentityFleet")?.value
    || !$("employeeIdentitySeat")?.value
  );
}

function renderEmployeeIdentityMatch(match) {
  const container = $("employeeIdentityMatch");
  const confirm = $("employeeIdentityConfirm");
  const apply = $("employeeIdentityApply");
  const assignment = $("employeeIdentityAssignment");
  const fleet = $("employeeIdentityFleet");
  const seat = $("employeeIdentitySeat");
  const step = $("employeeIdentityStep");
  state.employeeIdentityMatch = match || null;
  if (step) step.textContent = match ? "Step 2 of 2 · Crew Profile" : "Step 1 of 2 · Crew Profile";
  if (confirm) {
    confirm.hidden = !match;
    confirm.className = match?.provisional ? "btn-secondary" : "btn-primary";
    confirm.textContent = match?.provisional ? "SAVE PENDING & CONTINUE" : "CONFIRM & CONTINUE";
  }
  if (apply) {
    apply.hidden = Boolean(match);
    apply.className = "btn-primary";
  }
  if (assignment) assignment.hidden = !match;
  if (!container) return;
  if (!match) {
    container.hidden = true;
    container.innerHTML = "";
    if (fleet) fleet.value = "";
    if (seat) seat.value = "";
    updateEmployeeIdentityConfirmAvailability();
    return;
  }
  if (fleet) fleet.value = ["747", "777"].includes(String(match.aircraftType || "")) ? String(match.aircraftType) : "";
  if (seat) seat.value = ["CA", "FO", "FE"].includes(String(match.seatClass || "").toUpperCase())
    ? String(match.seatClass).toUpperCase()
    : "";
  if (match.provisional) {
    container.hidden = false;
    container.innerHTML = `
      <p>No current roster match</p>
      <strong>${escapeHtml(match.employeeNumber || "Unknown")}</strong>
      <span>Check for an extra, missing, or transposed digit before continuing.</span>
      <span>If every digit is correct, choose your current assignment below. The ID will be saved as pending and only support can correct it.</span>
    `;
    updateEmployeeIdentityConfirmAvailability();
    return;
  }
  const fleetSeat = [describeImportFleet(match.aircraftType), match.seatClass].filter(Boolean).join(" ");
  container.hidden = false;
  container.innerHTML = `
    <p>Roster identity match</p>
    <strong>${escapeHtml(match.displayName || match.rosterName || "Unknown crewmember")}</strong>
    <span>Employee ID ${escapeHtml(match.employeeNumber || "Unknown")}</span>
    <span>Roster assignment: ${escapeHtml(fleetSeat || "Not listed")} · System seniority ${escapeHtml(match.systemSeniorityNumber || "Unknown")}</span>
    <span>Confirm the name, then check your current assignment below. Recent transfers may not be in this roster yet.</span>
  `;
  updateEmployeeIdentityConfirmAvailability();
}

function openEmployeeIdentityModal() {
  const modal = $("employeeIdentityModal");
  if (!modal) return;
  if (shouldRequireProfileIdentity() && !shouldBypassProfileIdentityLogin() && !getCurrentAccountEmail()) {
    redirectToLoginForProfileIdentity();
    return;
  }
  const input = $("employeeIdentityInput");
  if (input) input.value = state.preferences.employeeNumber || "";
  renderEmployeeIdentityMatch(null);
  setEmployeeIdentityModalStatus("Enter the digits from your employee ID. CrewBidPro will show the matching name before anything is saved.");
  modal.hidden = false;
  requestAnimationFrame(() => input?.focus());
}

async function exitEmployeeIdentityModal() {
  const confirmed = await confirmDestructiveAction({
    eyebrow: "Crew Profile",
    title: "Exit employee confirmation?",
    message: "Bidding features will stay disabled until you submit and confirm your employee number.",
    confirmLabel: "Exit",
  });
  if (!confirmed) return false;
  const modal = $("employeeIdentityModal");
  if (modal) modal.hidden = true;
  state.employeeIdentityMatch = null;
  renderEmployeeIdentityMatch(null);
  renderProfileRequiredNotice();
  return true;
}

function contactDeveloperFromEmployeeIdentity() {
  const modal = $("employeeIdentityModal");
  if (modal) modal.hidden = true;
  openSupportModal("Contact Developer", "Support", CONTACT_PLACEHOLDER_HTML);
  setupContactWorkflow({ requestType: "Account Setup" });
}

function continueEmployeeIdentityFromProfile() {
  const input = $("preferenceEmployeeNumber");
  state.preferences.employeeNumber = String(input?.value || "").trim();
  savePreferences();
  openEmployeeIdentityModal();
}

async function applyEmployeeIdentityLookup() {
  if (state.employeeIdentityLookupInFlight || state.employeeIdentityConfirmInFlight) return null;
  const input = $("employeeIdentityInput");
  let employeeNumber = "";
  try {
    employeeNumber = employeeIdentityNumber(input?.value);
  } catch (error) {
    setEmployeeIdentityModalStatus(error.message, "error");
    input?.focus();
    return null;
  }
  state.employeeIdentityLookupInFlight = true;
  setEmployeeIdentityBusy(true);
  try {
    const match = await lookupEmployeeIdentity(employeeNumber);
    if (String(input?.value || "").trim() !== employeeNumber) return null;
    renderEmployeeIdentityMatch(match);
    setEmployeeIdentityModalStatus("Profile found. Confirm the name and select the fleet and seat you work now.", "success");
    return match;
  } catch (error) {
    if (String(error.message || "").toLowerCase().includes("not found")) {
      const pendingMatch = {
        employeeNumber,
        provisional: true,
      };
      renderEmployeeIdentityMatch(pendingMatch);
      setEmployeeIdentityModalStatus("No roster match. Recheck every digit. Continue as pending only if the ID is definitely correct.", "warning");
      return pendingMatch;
    }
    renderEmployeeIdentityMatch(null);
    setEmployeeIdentityModalStatus(error.message || "Employee number was not found.", "error");
    return null;
  } finally {
    state.employeeIdentityLookupInFlight = false;
    setEmployeeIdentityBusy(false);
  }
}

async function confirmEmployeeIdentityFromModal() {
  if (state.employeeIdentityLookupInFlight || state.employeeIdentityConfirmInFlight) return false;
  const match = state.employeeIdentityMatch || await applyEmployeeIdentityLookup();
  if (!match) return false;
  const effectiveFleet = String($("employeeIdentityFleet")?.value || "").trim();
  const effectiveSeat = String($("employeeIdentitySeat")?.value || "").trim().toUpperCase();
  if (!["747", "777"].includes(effectiveFleet)) {
    setEmployeeIdentityModalStatus("Select the fleet you work now.", "error");
    $("employeeIdentityFleet")?.focus();
    return false;
  }
  if (!["CA", "FO", "FE"].includes(effectiveSeat)) {
    setEmployeeIdentityModalStatus("Select the seat you work now.", "error");
    $("employeeIdentitySeat")?.focus();
    return false;
  }
  if (match.provisional) {
    const confirmed = await confirmDestructiveAction({
      eyebrow: "Crew Profile",
      title: "Lock unmatched employee number?",
      message: `Employee ${match.employeeNumber} was not found in the current roster. Check for an extra, missing, or transposed digit. If you continue, this number will be locked to your account and only support can correct it.`,
      confirmLabel: "Lock as Pending",
    });
    if (!confirmed) return false;
  }
  if (!match.provisional) {
    const acceptedOverride = await confirmProfileAssignmentOverride({
      effectiveFleet,
      effectiveSeat,
      rosterFleet: match.aircraftType,
      rosterSeat: match.seatClass,
    });
    if (!acceptedOverride) return false;
  }
  state.employeeIdentityConfirmInFlight = true;
  setEmployeeIdentityBusy(true);
  try {
    const result = await confirmEmployeeIdentity(match.employeeNumber, { effectiveFleet, effectiveSeat });
    if (isCurrentCrewProfileComplete()) markCurrentCrewProfileComplete();
    $("employeeIdentityModal").hidden = true;
    state.employeeIdentityMatch = null;
    renderPreferences();
    if (shouldRequireProfileIdentity()) {
      window.location.assign("workspace.html?profileCheck=1");
    } else {
      const message = result?.provisional
        ? "<p>Your employee ID is pending roster verification. Your current assignment is saved.</p>"
        : "<p>Your employee ID and current assignment are confirmed.</p>";
      openSupportModal("Crew Profile Ready", "Crew Profile", message);
    }
    return true;
  } catch (error) {
    setEmployeeIdentityModalStatus(error.message || "Unable to update user profile.", "error");
    return false;
  } finally {
    state.employeeIdentityConfirmInFlight = false;
    setEmployeeIdentityBusy(false);
  }
}

async function confirmEmployeeIdentity(employeeNumber, { effectiveFleet = "", effectiveSeat = "" } = {}) {
  const headers = await getSupabaseAuthHeaders({ forceRemote: shouldUseRemoteWorkspaceServices() });
  if (shouldUseRemoteWorkspaceServices() && !hasWorkspaceAuthHeaders(headers)) {
    throw new Error("Sign in before confirming your employee number.");
  }
  const response = await fetch("/api/user/confirm-employee", {
    method: "PATCH",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ employeeNumber, effectiveFleet, effectiveSeat }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error || !payload.profile) {
    throw new Error(payload.error || "Employee number could not be confirmed.");
  }
  applyRemoteProfileToPreferences(payload.profile || {}, { email: getCurrentAccountEmail() });
  applyPersonnelIdentityMatch(payload.match || {});
  savePreferences();
  return {
    match: payload.match || null,
    provisional: Boolean(payload.provisional || payload.match?.provisional),
  };
}

function applyPendingLocalProfilePreferences() {
  if (!state.pendingTheme) return false;
  state.preferences.theme = state.pendingTheme;
  state.pendingTheme = null;
  savePreferences();
  applyTheme();
  return true;
}

function setProfilePreferencesAutosaveStatus(message) {
  const status = $("profilePreferencesAutosaveStatus");
  if (status) status.textContent = message;
}

async function flushProfileDetailsAutosave() {
  if (state.profileDetailsSaveInFlight || !state.profileDetailsSaveQueued) return false;
  state.profileDetailsSaveQueued = false;
  if (!hasAcceptedEmployeeIdentity()) return false;
  const confirmed = state.profileAssignmentConfirmed || {};
  const effectiveFleet = normalizeProfileAssignmentFleet(confirmed.fleet);
  const effectiveSeat = normalizeProfileAssignmentSeat(confirmed.seat);
  if (!effectiveFleet || !effectiveSeat) return false;
  const assignmentDraft = getProfileAssignmentDraft();
  const preserveAssignmentDraft = isProfileAssignmentDraftDirty();
  state.profileDetailsSaveInFlight = true;
  setProfilePreferencesAutosaveStatus("Saving profile details...");
  try {
    await saveCurrentUserProfilePreferences({ effectiveFleet, effectiveSeat });
    if (preserveAssignmentDraft) {
      state.profileAssignmentDraft = assignmentDraft;
      renderProfileAssignmentDraftState();
    }
    if (!state.profileDetailsSaveQueued) {
      setProfilePreferencesAutosaveStatus("Settings on this card saved automatically.");
    }
    return true;
  } catch (error) {
    setProfilePreferencesAutosaveStatus("Saved on this device. Account sync is pending.");
    console.warn("Profile detail autosave skipped:", error.message);
    return false;
  } finally {
    state.profileDetailsSaveInFlight = false;
    if (state.profileDetailsSaveQueued) void flushProfileDetailsAutosave();
  }
}

function queueProfileDetailsAutosave() {
  state.profileDetailsSaveQueued = true;
  return flushProfileDetailsAutosave();
}

function isProfileSaveConnectivityError(error) {
  if (navigator.onLine === false || error instanceof TypeError) return true;
  const message = String(error?.message || "").trim().toLowerCase();
  return [
    "load failed",
    "failed to fetch",
    "network request failed",
    "workspace request timed out",
  ].some((text) => message.includes(text));
}

function getProfileSaveErrorMessage(error) {
  if (isProfileSaveConnectivityError(error)) {
    return "An internet connection is required to save account-backed Profile changes. Device preferences remain saved.";
  }
  return error?.message || "CrewBidPro could not save this profile. Try again before opening the workspace.";
}

async function commitProfilePreferences({ allowLocalFallback = false } = {}) {
  const assignment = getProfileAssignmentDraft();
  if (!hasAcceptedEmployeeIdentity()) {
    renderProfileRequiredNotice();
    openEmployeeIdentityModal();
    return false;
  }
  if (!assignment.fleet || !assignment.seat) {
    renderProfileRequiredNotice();
    $("preferencePilotType")?.focus();
    return false;
  }
  const localPreferencesApplied = applyPendingLocalProfilePreferences();
  try {
    await saveCurrentUserProfilePreferences({
      effectiveFleet: assignment.fleet,
      effectiveSeat: assignment.seat,
    });
  } catch (error) {
    if (allowLocalFallback && isProfileSaveConnectivityError(error)) {
      return {
        localOnly: true,
        localPreferencesApplied,
      };
    }
    throw new Error(getProfileSaveErrorMessage(error));
  }
  markCurrentCrewProfileComplete();
  return {
    localOnly: false,
    localPreferencesApplied,
  };
}

async function applyProfileAssignmentDraft({ showFeedback = true } = {}) {
  if (!isProfileAssignmentDraftDirty()) return true;
  if (state.profileAssignmentSaveInFlight) return false;
  const draft = getProfileAssignmentDraft();
  const acceptedOverride = await confirmProfileAssignmentOverride({
    effectiveFleet: draft.fleet,
    effectiveSeat: draft.seat,
    rosterFleet: state.preferences.rosterAircraftType,
    rosterSeat: state.preferences.rosterSeatClass,
  });
  if (!acceptedOverride) return false;
  state.profileAssignmentSaveInFlight = true;
  setProfileAssignmentFeedback("");
  renderProfileAssignmentDraftState();
  try {
    if (!(await commitProfilePreferences())) return false;
    const shouldReimportFleet = state.lastImportFiles.length
      && ["747", "777"].includes(state.preferences.pilotType)
      && state.preferences.pilotType !== detectFleetType();
    applyPreferenceChanges({ reimport: shouldReimportFleet });
    if (showFeedback) setProfileAssignmentFeedback(`Current assignment updated to ${getProfileFleetSeatLabel()}.`);
    return true;
  } catch (error) {
    openSupportModal(
      "Profile Save Failed",
      "Crew Profile",
      `<p>${escapeHtml(getProfileSaveErrorMessage(error))}</p>`,
    );
    return false;
  } finally {
    state.profileAssignmentSaveInFlight = false;
    renderProfileAssignmentDraftState();
  }
}

function closeProfileAssignmentNavigationModal() {
  const modal = $("profileAssignmentNavigationModal");
  if (modal) modal.hidden = true;
  state.pendingProfileAssignmentNavigation = null;
}

function openProfileAssignmentNavigationModal(navigate) {
  const modal = $("profileAssignmentNavigationModal");
  if (!modal) return;
  state.pendingProfileAssignmentNavigation = typeof navigate === "function" ? navigate : null;
  const draft = getProfileAssignmentDraft();
  const message = $("profileAssignmentNavigationMessage");
  if (message) {
    message.textContent = `${getProfileAssignmentLabel(draft.fleet, draft.seat)} has not been applied. Apply it, discard it, or stay on this page.`;
  }
  modal.hidden = false;
  $("stayProfileAssignment")?.focus();
}

function continuePendingProfileAssignmentNavigation() {
  const navigate = state.pendingProfileAssignmentNavigation;
  closeProfileAssignmentNavigationModal();
  if (typeof navigate !== "function") return;
  state.profileAssignmentNavigationBypass = true;
  navigate();
}

async function resolveProfileAssignmentNavigation(choice) {
  if (choice === "stay") {
    closeProfileAssignmentNavigationModal();
    return;
  }
  if (choice === "apply") {
    const applied = await applyProfileAssignmentDraft({ showFeedback: false });
    if (!applied) return;
  } else if (choice === "discard") {
    discardProfileAssignmentDraft({ feedback: false });
  }
  continuePendingProfileAssignmentNavigation();
}

function setupProfileAssignmentNavigationGuard() {
  if (!isProfilePage() || state.profileAssignmentNavigationGuardInitialized) return;
  state.profileAssignmentNavigationGuardInitialized = true;

  window.addEventListener("beforeunload", (event) => {
    if (!isProfileAssignmentDraftDirty() || state.profileAssignmentNavigationBypass) return;
    event.preventDefault();
    event.returnValue = "";
  });

  document.addEventListener("click", (event) => {
    if (!isProfileAssignmentDraftDirty() || state.profileAssignmentNavigationBypass) return;
    const target = event.target.closest?.("a[href], #workspaceSignOutButton");
    if (!target) return;
    const isAnchor = target.matches("a[href]");
    if (isAnchor && (target.target === "_blank" || target.hasAttribute("download"))) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openProfileAssignmentNavigationModal(() => {
      if (isAnchor) window.location.assign(target.href);
      else target.click();
    });
  }, true);

  $("stayProfileAssignment")?.addEventListener("click", () => resolveProfileAssignmentNavigation("stay"));
  $("discardAndLeaveProfileAssignment")?.addEventListener("click", () => resolveProfileAssignmentNavigation("discard"));
  $("applyAndLeaveProfileAssignment")?.addEventListener("click", () => resolveProfileAssignmentNavigation("apply"));
  document.querySelectorAll("[data-stay-profile-assignment]").forEach((element) => {
    element.addEventListener("click", () => resolveProfileAssignmentNavigation("stay"));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("profileAssignmentNavigationModal")?.hidden) {
      resolveProfileAssignmentNavigation("stay");
    }
  });
}

function openSupportModal(title, eyebrow, bodyHtml) {
  const modal = $("supportModal");
  if (!modal) return;
  modal.classList.remove("is-long-stay-threshold-modal");
  $("supportModalTitle").textContent = title;
  $("supportModalEyebrow").textContent = eyebrow;
  $("supportModalBody").innerHTML = bodyHtml;
  setSupportModalHeaderButton();
  modal.dataset.modalTitle = title;
  modal.hidden = false;
}

function setSupportModalHeaderButton(label = "Close", action = null) {
  const button = $("closeSupportModal");
  if (!button) return;
  button.textContent = label;
  button.setAttribute("aria-label", label);
  state.supportModalHeaderAction = typeof action === "function" ? action : null;
}

function getSupportStorageIdentity(email = getCurrentAccountEmail()) {
  return email || (shouldUseLocalSupportPreviewMailbox() ? "local" : "");
}

function getSupportMessagesReadAt(email = getSupportStorageIdentity()) {
  if (!email) return 0;
  const stored = safeStorage.get(`${SUPPORT_MESSAGES_READ_STORAGE_KEY}.${email}`) || "";
  if (!stored || stored.startsWith("[")) return 0;
  return Number(stored) || 0;
}

function getReadSupportMessageIds(email = getSupportStorageIdentity()) {
  if (!email) return new Set();
  try {
    const parsed = JSON.parse(safeStorage.get(`${SUPPORT_MESSAGES_READ_STORAGE_KEY}.${email}.ids`) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
  } catch {
    return new Set();
  }
}

function saveReadSupportMessageIds(ids, email = getSupportStorageIdentity()) {
  if (!email) return;
  safeStorage.set(`${SUPPORT_MESSAGES_READ_STORAGE_KEY}.${email}.ids`, JSON.stringify([...ids]));
}

function markSupportMessageRead(messageId = "", email = getSupportStorageIdentity()) {
  if (!email || !messageId) return;
  const ids = getReadSupportMessageIds(email);
  ids.add(String(messageId));
  saveReadSupportMessageIds(ids, email);
}

function markSupportMessagesRead(email = getSupportStorageIdentity()) {
  if (!email) return;
  safeStorage.set(`${SUPPORT_MESSAGES_READ_STORAGE_KEY}.${email}`, String(Date.now()));
}

function applyRemoteSupportReadState(readState = {}, email = getSupportStorageIdentity()) {
  if (!email || !readState || typeof readState !== "object") return;
  const remoteReadAt = Date.parse(readState.readAt || "") || 0;
  const localReadAt = getSupportMessagesReadAt(email);
  if (remoteReadAt > localReadAt) {
    safeStorage.set(`${SUPPORT_MESSAGES_READ_STORAGE_KEY}.${email}`, String(remoteReadAt));
  }
  const readIds = getReadSupportMessageIds(email);
  (Array.isArray(readState.messageIds) ? readState.messageIds : []).forEach((messageId) => {
    if (messageId) readIds.add(String(messageId));
  });
  saveReadSupportMessageIds(readIds, email);
}

async function persistSupportMessageReads(messageIds = []) {
  if (shouldUseLocalSupportPreviewMailbox() || navigator.onLine === false || !getCurrentAccountEmail()) return;
  const normalizedIds = [...new Set(messageIds.map(String).filter(Boolean))];
  if (!normalizedIds.length) return;
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) return;
  const response = await fetch("/api/user/messages/read", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ messageIds: normalizedIds }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || "Unable to sync message read state");
  applyRemoteSupportReadState(payload.readState);
}

function getDeletedSupportMessageIds(email = getSupportStorageIdentity()) {
  if (!email) return new Set();
  try {
    const parsed = JSON.parse(safeStorage.get(`${SUPPORT_MESSAGES_DELETED_STORAGE_KEY}.${email}`) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
  } catch {
    return new Set();
  }
}

function saveDeletedSupportMessageIds(ids, email = getSupportStorageIdentity()) {
  if (!email) return;
  safeStorage.set(`${SUPPORT_MESSAGES_DELETED_STORAGE_KEY}.${email}`, JSON.stringify([...ids]));
}

function shouldUseFirstTimeSupportMailbox() {
  return shouldOpenFirstTimeProfile() || shouldResetOnboardingPreview();
}

function shouldUseLocalSupportPreviewMailbox() {
  return shouldUseFirstTimeSupportMailbox() || shouldPreviewSupportMessage();
}

function getSupportWelcomeMessageSentAt(email = getCurrentAccountEmail()) {
  const key = `${SUPPORT_WELCOME_MESSAGE_STORAGE_KEY}.${email || "local"}`;
  const existing = safeStorage.get(key);
  if (existing) return existing;
  const sentAt = new Date().toISOString();
  safeStorage.set(key, sentAt);
  return sentAt;
}

function buildFirstTimeSupportReports(email = getCurrentAccountEmail()) {
  const sentAt = getSupportWelcomeMessageSentAt(email);
  return [{
    id: `welcome-${email || "local"}`,
    title: "Welcome to CrewBidPro Full Access",
    status: "developer_responded",
    submittedAt: sentAt,
    receivedAt: sentAt,
    developerReplies: [{
      message: "Welcome to CrewBidPro. You’ve been granted a one-month Full Access subscription at no charge. It will not renew automatically. When the month ends, your account will move to the Free tier with limited options. Paid features will remain visible but locked until you subscribe. If you have any questions or run into anything confusing, please reach out through Contact Developer and I will take a look.",
      sentAt,
      sentBy: "CrewBidPro developer",
      notifyUser: true,
    }],
  }];
}

function buildPreviewSupportReports(email = getCurrentAccountEmail()) {
  if (shouldUseFirstTimeSupportMailbox()) return buildFirstTimeSupportReports(email);
  const sentAt = new Date().toISOString();
  return [{
    id: `preview-message-${email || "local"}`,
    title: "Developer reply available",
    status: "developer_responded",
    submittedAt: sentAt,
    receivedAt: sentAt,
    developerReplies: [{
      message: "Thanks for the report. I reviewed the line you sent and made an adjustment. Open the message for details, then reply here if anything still looks off.",
      sentAt,
      sentBy: "CrewBidPro developer",
      notifyUser: true,
    }],
  }];
}

function getSupportMailboxReports(reports = []) {
  return shouldUseLocalSupportPreviewMailbox() ? buildPreviewSupportReports() : reports;
}

function getReportReplyTime(reply = {}) {
  return Date.parse(reply.sentAt || reply.updatedAt || "") || 0;
}

function formatSupportMessageDate(value) {
  const timestamp = Date.parse(value || "");
  if (!Number.isFinite(timestamp)) return "Date unavailable";
  return new Date(timestamp).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatSupportStatus(value = "") {
  const labels = {
    new: "New",
    reviewing: "Open",
    developer_responded: "Developer responded",
    needs_user_follow_up: "Awaiting user reply",
    fixed: "Fixed",
    closed: "Closed",
    archived: "Archived",
    trashed: "Deleted",
  };
  return labels[String(value || "").toLowerCase()] || "Open";
}

const SUPPORT_REPORT_STATUS_OPTIONS = [
  ["developer_responded", "Developer Responded"],
  ["reviewing", "Reviewing"],
  ["needs_user_follow_up", "Needs Follow-Up"],
  ["fixed", "Fixed"],
  ["closed", "Closed"],
  ["archived", "Archived"],
];

function renderSupportReportStatusOptions(currentStatus = "developer_responded") {
  const status = String(currentStatus || "developer_responded");
  const normalizedStatus = ["new", "reviewing"].includes(status) ? "developer_responded" : status;
  return SUPPORT_REPORT_STATUS_OPTIONS.map(([value, label]) => `
    <option value="${escapeHtml(value)}" ${value === normalizedStatus ? "selected" : ""}>${escapeHtml(label)}</option>
  `).join("");
}

function getSupportReplyId(report = {}, reply = {}, index = 0) {
  return [
    report.id || report.title || "support",
    reply.sentAt || "",
    index,
    String(reply.message || "").slice(0, 96),
  ].join("|");
}

function getVisibleDeveloperReplies(report = {}) {
  if (!Array.isArray(report.developerReplies)) return [];
  const deletedIds = getDeletedSupportMessageIds();
  return report.developerReplies
    .map((reply, index) => ({ ...reply, messageId: getSupportReplyId(report, reply, index) }))
    .filter((reply) => String(reply.message || "").trim() && !deletedIds.has(reply.messageId));
}

function countUnreadSupportReplies(reports = []) {
  const readAt = getSupportMessagesReadAt();
  const readIds = getReadSupportMessageIds();
  return reports.reduce((count, report) => (
    count + getVisibleDeveloperReplies(report)
      .filter((reply) => !readIds.has(reply.messageId) && getReportReplyTime(reply) > readAt).length
  ), 0);
}

function getSupportReportMessageBody(report = {}) {
  const notes = String(report.notes || "").trim();
  if (notes && notes !== "None provided") return notes;
  const fullReport = String(report.fullReport || "").trim();
  if (!fullReport) {
    return Array.isArray(report.summary)
      ? report.summary.map((line) => String(line || "").trim()).filter(Boolean).join("\n")
      : String(report.summary || "").trim();
  }
  const paragraphs = fullReport.split(/\n{2,}/).map((entry) => entry.trim()).filter(Boolean);
  return paragraphs[paragraphs.length - 1] || fullReport;
}

function getSupportReportUser(report = {}, mailboxRole = "admin") {
  if (mailboxRole !== "admin") return "You";
  const email = String(report.reporterEmail || "").trim();
  const name = String(report.reporterName || "").trim();
  if (name && email && name.toLowerCase() !== email.toLowerCase()) return `${name} · ${email}`;
  return email || name || String(report.client || "Reporter unknown").trim();
}

function getSupportReportSubject(report = {}, fallback = "Support message") {
  const title = String(report.title || "").trim() || fallback;
  if (!/^Report\b/i.test(title) || /\bB(?:747|777)\b/i.test(title)) return title;

  const context = report.context && typeof report.context === "object" ? report.context : {};
  const dataset = Array.isArray(report.dataset) ? report.dataset.join("\n") : String(report.dataset || "");
  const sourceText = [context.fleetLabel, context.fleet, dataset, report.fullReport].filter(Boolean).join("\n");
  const fleetMatch = sourceText.match(/(?:^|\bFleet:\s*|\b)(B?(?:747|777))\b/im);
  if (!fleetMatch) return title;
  const fleetLabel = `B${fleetMatch[1].replace(/^B/i, "")}`;

  let descriptor = title.replace(/^Report\s*/i, "").trim();
  if (String(context.kind || "").toLowerCase() === "line" && !/^Line\b/i.test(descriptor)) {
    descriptor = `Line ${descriptor}`;
  } else if (String(context.kind || "").toLowerCase() === "reserve" && !/^Reserve Line\b/i.test(descriptor)) {
    descriptor = `Reserve Line ${descriptor}`;
  }
  return ["Report", fleetLabel, descriptor].filter(Boolean).join(" ");
}

function getSupportConversation(report = {}, mailboxRole = "user") {
  const reporter = getSupportReportUser(report, mailboxRole);
  const originalSentAt = report.receivedAt || report.submittedAt || "";
  const originalReadAt = Date.parse(report.readByDeveloperAt || "") >= Date.parse(originalSentAt || "")
    ? report.readByDeveloperAt
    : "";
  const entries = [{
    role: "User",
    sender: reporter,
    message: getSupportReportMessageBody(report),
    sentAt: originalSentAt,
    readAt: originalReadAt,
  }];
  (Array.isArray(report.developerReplies) ? report.developerReplies : []).forEach((reply) => {
    entries.push({
      role: "Developer",
      sender: mailboxRole === "admin" ? "You" : "CrewBidPro Support",
      message: reply.message,
      sentAt: reply.sentAt || "",
      readAt: reply.readAt || "",
    });
  });
  (Array.isArray(report.userReplies) ? report.userReplies : []).forEach((reply) => {
    entries.push({
      role: "User",
      sender: mailboxRole === "admin" ? reporter : "You",
      message: reply.message,
      sentAt: reply.sentAt || "",
      readAt: reply.readAt || "",
    });
  });
  return entries
    .filter((entry) => String(entry.message || "").trim())
    .sort((a, b) => (Date.parse(a.sentAt || "") || 0) - (Date.parse(b.sentAt || "") || 0));
}

function formatSupportReadReceipt(entry = {}, mailboxRole = "user") {
  const isDeveloperMessage = entry.role === "Developer";
  const readLabel = isDeveloperMessage
    ? (mailboxRole === "admin" ? "Read by user" : "Read")
    : (mailboxRole === "admin" ? "Read" : "Read by CrewBidPro");
  const unreadLabel = isDeveloperMessage
    ? (mailboxRole === "admin" ? "Unread by user" : "Unread")
    : (mailboxRole === "admin" ? "Unread" : "Unread by CrewBidPro");
  return entry.readAt ? `${readLabel} ${formatSupportMessageDate(entry.readAt)}` : unreadLabel;
}

function renderSupportConversation(conversation = [], mailboxRole = "user") {
  if (!conversation.length) return "";
  return `
    <section class="message-conversation" aria-label="Support conversation">
      <h4>Conversation</h4>
      ${conversation.map((entry) => `
        <article class="message-conversation-entry is-${entry.role === "Developer" ? "developer" : "user"}">
          <div>
            <strong>${escapeHtml(entry.role)}</strong>
            <span>${escapeHtml([entry.sender, formatSupportMessageDate(entry.sentAt)].filter(Boolean).join(" - "))}</span>
            <small class="message-read-receipt ${entry.readAt ? "is-read" : "is-unread"}">${escapeHtml(formatSupportReadReceipt(entry, mailboxRole))}</small>
          </div>
          <p>${escapeHtml(entry.message || "")}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function getAdminSupportInboxMessages(reports = []) {
  const readIds = getReadSupportMessageIds();
  const deletedIds = getDeletedSupportMessageIds();
  return reports.map((report) => {
    const originalSentAt = report.receivedAt || report.submittedAt || report.updatedAt || "";
    const conversation = getSupportConversation(report, "admin");
    const latestEntry = conversation[conversation.length - 1] || {};
    const userEntries = conversation.filter((entry) => entry.role === "User");
    const latestUserEntry = userEntries[userEntries.length - 1] || {};
    const latestUserReplyAt = getReportReplyTime(latestUserEntry);
    const originalTime = Date.parse(originalSentAt || "") || 0;
    const latestUserTime = Math.max(originalTime, latestUserReplyAt);
    const latestDeveloperTime = (Array.isArray(report.developerReplies) ? report.developerReplies : [])
      .reduce((latest, reply) => Math.max(latest, getReportReplyTime(reply)), 0);
    const latestUserTurnAt = latestUserEntry.sentAt || originalSentAt;
    const messageId = `admin-report:${report.id || report.title || originalSentAt}|${latestUserTurnAt}`;
    const sentAt = latestEntry.sentAt || originalSentAt;
    const time = Date.parse(sentAt || "") || 0;
    const readByDeveloperTime = Date.parse(latestUserEntry.readAt || report.readByDeveloperAt || "") || 0;
    const userIsWaiting = latestUserTime > latestDeveloperTime;
    return {
      id: messageId,
      adminReportId: report.id || "",
      reportId: report.id || "",
      subject: getSupportReportSubject(report, "User support report"),
      status: formatSupportStatus(report.status),
      rawStatus: report.status || "new",
      message: latestEntry.message || getSupportReportMessageBody(report) || "No message body",
      developerReplies: Array.isArray(report.developerReplies) ? report.developerReplies : [],
      sentAt,
      time,
      unread: userIsWaiting && !readIds.has(messageId) && latestUserTime > readByDeveloperTime,
      sender: latestEntry.sender || getSupportReportUser(report, "admin"),
      readStatus: formatSupportReadReceipt(latestEntry, "admin"),
      conversation,
      kind: "admin_report",
    };
  }).filter((message) => !deletedIds.has(message.id))
    .sort((a, b) => (b.time || 0) - (a.time || 0));
}

function getSupportInboxMessages(reports = [], mailboxRole = "user") {
  if (mailboxRole === "admin") return getAdminSupportInboxMessages(reports);
  const readAt = getSupportMessagesReadAt();
  const readIds = getReadSupportMessageIds();
  return reports.flatMap((report) => (
    getVisibleDeveloperReplies(report).map((reply) => {
      const sentAt = reply.sentAt || report.updatedAt || report.receivedAt || report.submittedAt || "";
      const unread = !readIds.has(reply.messageId) && getReportReplyTime(reply) > readAt;
      return {
        id: reply.messageId,
        reportId: report.id || "",
        subject: getSupportReportSubject(report, "Developer message"),
        status: formatSupportStatus(report.status),
        message: reply.message,
        sentAt,
        time: getReportReplyTime(reply),
        unread,
        sender: "CrewBidPro Support",
        readStatus: formatSupportReadReceipt({ role: "Developer", readAt: reply.readAt || "" }, "user"),
        conversation: getSupportConversation(report, "user"),
        kind: "developer_reply",
      };
    })
  )).sort((a, b) => (b.time || 0) - (a.time || 0));
}

function setMessagesButtonState(button, unreadCount = 0) {
  if (!button) return;
  button.hidden = false;
  button.disabled = false;
  button.removeAttribute("aria-disabled");
  button.classList.toggle("has-unread", unreadCount > 0);
  button.innerHTML = unreadCount
    ? `Messages <span class="message-count-bubble" aria-label="${unreadCount} unread message${unreadCount === 1 ? "" : "s"}">${unreadCount}</span>`
    : "Messages";
}

function enableSupportTopbarButtons() {
  ["faqButton", "messagesButton", "contactButton"].forEach((id) => {
    const button = $(id);
    if (!button) return;
    button.disabled = false;
    button.removeAttribute("aria-disabled");
  });
}

function renderSupportMirrorNotice(mailboxReadOnly = false) {
  if (!mailboxReadOnly) return "";
  return `
    <div class="message-mirror-notice" role="status">
      <strong>MAIN messages · Read only</strong>
      <span>This is a live mirror of the MAIN support mailbox. Reply, delete, and read-state controls stay on MAIN.</span>
    </div>
  `;
}

function renderSupportMessages(reports = [], unreadCount = 0, mailboxRole = "user", mailboxReadOnly = false) {
  const mailboxReports = reports;
  const messages = getSupportInboxMessages(mailboxReports, mailboxRole);
  if (!messages.length) {
    return `
      ${renderSupportMirrorNotice(mailboxReadOnly)}
      <div class="message-window-empty">
        <p>${mailboxRole === "admin" ? "No user reports yet." : "No developer replies yet."}</p>
      </div>
    `;
  }
  const unreadLabel = mailboxRole === "admin" ? "unread user report" : "unread developer reply";
  return `
    ${renderSupportMirrorNotice(mailboxReadOnly)}
    <div class="message-window-actions">
      <p>${unreadCount ? `${unreadCount} ${unreadLabel}${unreadCount === 1 ? "" : "s"}.` : mailboxRole === "admin" ? "No unread user reports." : "No unread developer replies."}</p>
      ${mailboxReadOnly ? "" : `<div class="message-window-action-buttons">
        <button id="markSupportMessagesRead" type="button" class="btn-secondary" ${unreadCount ? "" : "disabled"}>Mark as read</button>
        <button id="deleteSelectedSupportMessages" type="button" class="btn-secondary" disabled>Delete</button>
        <button id="deleteAllSupportMessages" type="button" class="btn-secondary">Delete all</button>
      </div>`}
    </div>
    ${mailboxReadOnly ? "" : `<label class="message-select-all">
      <input id="selectAllSupportMessages" type="checkbox">
      Select all
    </label>`}
    <div class="message-window-list">
      ${messages.map((message) => `
        <article class="message-inbox-card ${message.unread ? "is-unread" : ""} ${mailboxReadOnly ? "is-read-only" : ""}">
          ${mailboxReadOnly ? "" : `<label class="message-select-control">
            <input class="support-message-select" type="checkbox" value="${escapeHtml(message.id)}">
            <span class="visually-hidden">Select message</span>
          </label>`}
          <button type="button" class="message-inbox-open" data-support-message-id="${escapeHtml(message.id)}">
            <span class="message-inbox-header">
              <strong>${escapeHtml(message.subject)}</strong>
              <small>${escapeHtml(formatSupportMessageDate(message.sentAt))}</small>
            </span>
            <span class="message-inbox-meta">${escapeHtml([message.sender, message.status, message.readStatus].filter(Boolean).join(" · "))}</span>
            <span class="message-inbox-preview">${escapeHtml(message.message)}</span>
          </button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderSupportMessageDetail(message = {}, mailboxRole = "user", mailboxReadOnly = false) {
  return `
    <article class="message-detail">
      <div class="message-detail-header">
        <div>
          <p class="eyebrow">${mailboxRole === "admin" ? "User Report" : "Message"}</p>
          <h3>${escapeHtml(message.subject || "Developer message")}</h3>
          <span>${escapeHtml(formatSupportMessageDate(message.sentAt))}</span>
          ${message.sender ? `<span>${escapeHtml(message.sender)}</span>` : ""}
        </div>
      </div>
      ${renderSupportConversation(message.conversation || [], mailboxRole) || `<div class="message-detail-body">${escapeHtml(message.message || "")}</div>`}
      ${mailboxReadOnly ? `<p class="message-detail-read-only">MAIN mirror · Read only</p>` : ""}
      <div class="message-detail-actions">
        ${mailboxReadOnly ? "" : `
          <button id="deleteOpenSupportMessage" type="button" class="btn-secondary">Delete</button>
          <button id="replyOpenSupportMessage" type="button" class="btn-primary">${mailboxRole === "admin" ? "Respond" : "Reply"}</button>
        `}
        <button id="backOpenSupportMessage" type="button" class="btn-secondary">Back</button>
      </div>
    </article>
  `;
}

function renderSupportReplyComposer(message = {}, mailboxRole = "user") {
  const isAdminReport = mailboxRole === "admin" && message.kind === "admin_report";
  const contextRole = isAdminReport ? "User" : "Developer";
  const contextEntry = [...(Array.isArray(message.conversation) ? message.conversation : [])]
    .reverse()
    .find((entry) => entry.role === contextRole) || {};
  const contextSender = contextEntry.sender || message.sender;
  const contextSentAt = contextEntry.sentAt || message.sentAt;
  const contextMessage = contextEntry.message || message.message;
  return `
    <form id="supportReplyForm" class="message-reply-form">
      <div>
        <p class="eyebrow">Reply</p>
        <h3>Re: ${escapeHtml(message.subject || "Developer message")}</h3>
      </div>
      <section class="message-reply-context" aria-label="Original user message">
        <div class="message-reply-context-header">
          <strong>${escapeHtml(isAdminReport ? "User message" : "Original message")}</strong>
          <span>${escapeHtml([contextSender, formatSupportMessageDate(contextSentAt)].filter(Boolean).join(" - "))}</span>
        </div>
        <p>${escapeHtml(contextMessage || "No message body")}</p>
      </section>
      ${isAdminReport ? `
        <label class="message-reply-status">
          Status after sending
          <select id="supportReplyStatusTag">
            ${renderSupportReportStatusOptions(message.rawStatus || message.status || "developer_responded")}
          </select>
        </label>
      ` : ""}
      <textarea id="supportReplyMessage" rows="5" placeholder="Type your reply"></textarea>
      <p id="supportReplyStatus" class="report-copy-status" aria-live="polite"></p>
      <div class="message-detail-actions">
        <button id="sendSupportReply" type="submit" class="btn-primary">Send</button>
        <button id="cancelSupportReply" type="button" class="btn-secondary">Cancel</button>
      </div>
    </form>
  `;
}

async function submitSupportReply(message = {}, replyText = "") {
  const body = String(replyText || "").trim();
  if (!body) throw new Error("Enter a reply before sending.");
  if (message.kind === "admin_report" && message.adminReportId) {
    const status = $("supportReplyStatusTag")?.value || "developer_responded";
    const headers = await getSupabaseAuthHeaders({ forceRemote: true });
    if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in as an admin before responding.");
    const response = await fetch("/api/user/messages", {
      method: "PATCH",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reportId: message.adminReportId, reply: body, status }),
      cache: "no-store",
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) throw new Error(result.error || "Reply failed");
    return result;
  }
  if (!message.reportId) throw new Error("This support conversation is no longer available.");
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in before replying.");
  const response = await fetch("/api/user/messages", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ reportId: message.reportId, reply: body }),
    cache: "no-store",
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) throw new Error(result.error || "Reply failed");
  return result;
}

function openSupportMessageDetail(
  message = {},
  mailboxReports = [],
  refreshMessageWindow = () => {},
  mailboxRole = "user",
  reloadMessageWindow = null,
  mailboxReadOnly = false,
) {
  if (!mailboxReadOnly) {
    markSupportMessageRead(message.id);
    const viewedAt = new Date().toISOString();
    const incomingRole = mailboxRole === "admin" ? "User" : "Developer";
    (Array.isArray(message.conversation) ? message.conversation : []).forEach((entry) => {
      if (entry.role === incomingRole && !entry.readAt) entry.readAt = viewedAt;
    });
    persistSupportMessageReads([message.id]).catch((error) => {
      console.warn("Message read state did not sync:", error.message);
    });
  }
  const backToInbox = () => {
    setSupportModalHeaderButton();
    refreshMessageWindow();
  };
  $("supportModalBody").innerHTML = renderSupportMessageDetail(message, mailboxRole, mailboxReadOnly);
  setSupportModalHeaderButton("Back", backToInbox);
  $("deleteOpenSupportMessage")?.addEventListener("click", () => {
    const deletedIds = getDeletedSupportMessageIds();
    deletedIds.add(message.id);
    saveDeletedSupportMessageIds(deletedIds);
    refreshMessageWindow();
  });
  $("replyOpenSupportMessage")?.addEventListener("click", () => {
    let replySent = false;
    $("supportModalBody").innerHTML = renderSupportReplyComposer(message, mailboxRole);
    setSupportModalHeaderButton("Back", () => openSupportMessageDetail(message, mailboxReports, refreshMessageWindow, mailboxRole, reloadMessageWindow, mailboxReadOnly));
    $("supportReplyMessage")?.focus();
    $("cancelSupportReply")?.addEventListener("click", () => {
      if (replySent) {
        refreshMessageWindow();
        return;
      }
      openSupportMessageDetail(message, mailboxReports, refreshMessageWindow, mailboxRole);
    });
    $("supportReplyForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const status = $("supportReplyStatus");
      const submit = form.querySelector("button[type='submit']");
      if (submit) submit.disabled = true;
      if (status) status.textContent = "Sending...";
      try {
        const replyText = $("supportReplyMessage")?.value || "";
        const result = await submitSupportReply(message, replyText);
        if (typeof reloadMessageWindow === "function") {
          await reloadMessageWindow();
          return;
        }
        if (mailboxRole !== "admin" && Array.isArray(message.conversation)) {
          message.conversation.push({
            role: "User",
            sender: getCurrentAccountEmail() || "You",
            message: replyText.trim(),
            sentAt: result.sentAt || new Date().toISOString(),
          });
        }
        if (status) status.textContent = "Reply sent.";
        $("supportReplyMessage")?.setAttribute("disabled", "disabled");
        if (submit) {
          submit.disabled = true;
          submit.setAttribute("aria-disabled", "true");
          submit.textContent = "Sent";
        }
        const cancel = $("cancelSupportReply");
        replySent = true;
        if (cancel) {
          cancel.textContent = "Finished";
        }
      } catch (error) {
        if (submit) submit.disabled = false;
        if (status) status.textContent = error.message || "Unable to send reply.";
      }
    });
  });
  $("backOpenSupportMessage")?.addEventListener("click", backToInbox);
}

function setupSupportMessageReadAction(reports = [], mailboxRole = "user", mailboxReadOnly = false) {
  const mailboxReports = reports;
  const messages = () => getSupportInboxMessages(mailboxReports, mailboxRole);
  const refreshMessageWindow = () => {
    const unreadCount = countUnreadSupportMessages(mailboxReports, mailboxRole);
    setMessagesButtonState($("messagesButton"), unreadCount);
    setSupportModalHeaderButton();
    $("supportModalBody").innerHTML = renderSupportMessages(mailboxReports, unreadCount, mailboxRole, mailboxReadOnly);
    setupSupportMessageReadAction(mailboxReports, mailboxRole, mailboxReadOnly);
  };
  const reloadMessageWindow = async () => {
    const refreshedReports = await loadSupportMessages({ openWindow: false });
    mailboxReports.splice(0, mailboxReports.length, ...refreshedReports);
    refreshMessageWindow();
  };
  $("markSupportMessagesRead")?.addEventListener("click", () => {
    markSupportMessagesRead();
    const readIds = getReadSupportMessageIds();
    const messageIds = messages().map((message) => message.id);
    messageIds.forEach((messageId) => readIds.add(messageId));
    saveReadSupportMessageIds(readIds);
    persistSupportMessageReads(messageIds).catch((error) => {
      console.warn("Message read state did not sync:", error.message);
    });
    refreshMessageWindow();
  });
  $("selectAllSupportMessages")?.addEventListener("change", (event) => {
    document.querySelectorAll(".support-message-select").forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
    const selectedCount = document.querySelectorAll(".support-message-select:checked").length;
    const deleteSelected = $("deleteSelectedSupportMessages");
    if (deleteSelected) deleteSelected.disabled = selectedCount === 0;
  });
  document.querySelectorAll(".support-message-select").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedCount = document.querySelectorAll(".support-message-select:checked").length;
      const allCount = document.querySelectorAll(".support-message-select").length;
      const selectAll = $("selectAllSupportMessages");
      const deleteSelected = $("deleteSelectedSupportMessages");
      if (selectAll) selectAll.checked = allCount > 0 && selectedCount === allCount;
      if (deleteSelected) deleteSelected.disabled = selectedCount === 0;
    });
  });
  document.querySelectorAll("[data-support-message-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const message = messages().find((entry) => entry.id === button.dataset.supportMessageId);
      if (!message) return;
      openSupportMessageDetail(message, mailboxReports, refreshMessageWindow, mailboxRole, reloadMessageWindow, mailboxReadOnly);
    });
  });
  $("deleteSelectedSupportMessages")?.addEventListener("click", () => {
    const selectedIds = [...document.querySelectorAll(".support-message-select:checked")].map((checkbox) => checkbox.value);
    if (!selectedIds.length) return;
    const deletedIds = getDeletedSupportMessageIds();
    selectedIds.forEach((id) => deletedIds.add(id));
    saveDeletedSupportMessageIds(deletedIds);
    refreshMessageWindow();
  });
  $("deleteAllSupportMessages")?.addEventListener("click", async () => {
    if (mailboxRole === "admin") {
      const confirmed = await confirmDestructiveAction({
        title: "Clear all user reports?",
        message: "This permanently removes every user report from this service's message queue. It cannot be undone.",
        confirmLabel: "Clear all reports",
      });
      if (!confirmed) return;
      try {
        const headers = await getSupabaseAuthHeaders({ forceRemote: true });
        if (!hasWorkspaceAuthHeaders(headers)) throw new Error("Sign in as an admin before clearing reports.");
        const response = await fetch("/api/user/messages", {
          method: "DELETE",
          headers,
          cache: "no-store",
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.ok) throw new Error(result.error || "Unable to clear reports.");
        mailboxReports.splice(0, mailboxReports.length);
        refreshMessageWindow();
      } catch (error) {
        window.alert(error.message || "Unable to clear reports.");
      }
      return;
    }
    const deletedIds = getDeletedSupportMessageIds();
    messages().forEach((message) => deletedIds.add(message.id));
    saveDeletedSupportMessageIds(deletedIds);
    refreshMessageWindow();
  });
}

function countUnreadSupportMessages(reports = [], mailboxRole = "user") {
  if (mailboxRole !== "admin") return countUnreadSupportReplies(reports);
  return getAdminSupportInboxMessages(reports).filter((message) => message.unread).length;
}

async function loadSupportMessages({ openWindow = false } = {}) {
  const email = getCurrentAccountEmail();
  const button = $("messagesButton");
  if (shouldUseLocalSupportPreviewMailbox()) {
    const reports = buildPreviewSupportReports(email);
    const unreadCount = countUnreadSupportReplies(reports);
    setMessagesButtonState(button, unreadCount);
    if (openWindow) {
      openSupportModal("Developer Messages", "Messages", renderSupportMessages(reports, unreadCount));
      setupSupportMessageReadAction(reports);
    }
    return reports;
  }
  if (!email || navigator.onLine === false) {
    if (button) button.hidden = true;
    return [];
  }
  const headers = await getSupabaseAuthHeaders({ forceRemote: true });
  if (!hasWorkspaceAuthHeaders(headers)) {
    if (button) button.hidden = true;
    return [];
  }
  const response = await fetch("/api/user/messages", { headers, cache: "no-store" });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || "Messages unavailable");
  const reports = getSupportMailboxReports(Array.isArray(payload.reports) ? payload.reports : []);
  const mailboxRole = payload.mailboxRole === "admin" ? "admin" : "user";
  const mailboxReadOnly = mailboxRole === "admin" && payload.readOnly === true;
  const localReadIdsBeforeSync = getReadSupportMessageIds();
  const remoteReadIds = new Set(Array.isArray(payload.readState?.messageIds) ? payload.readState.messageIds.map(String) : []);
  applyRemoteSupportReadState(payload.readState);
  const validMessageIds = new Set(getSupportInboxMessages(reports, mailboxRole).map((message) => message.id));
  const localOnlyReadIds = [...localReadIdsBeforeSync].filter((messageId) => validMessageIds.has(messageId) && !remoteReadIds.has(messageId));
  if (!mailboxReadOnly && localOnlyReadIds.length) {
    persistSupportMessageReads(localOnlyReadIds).catch((error) => {
      console.warn("Existing message read state did not sync:", error.message);
    });
  }
  const unreadCount = countUnreadSupportMessages(reports, mailboxRole);
  setMessagesButtonState(button, unreadCount);
  if (openWindow) {
    openSupportModal(mailboxReadOnly ? "MAIN User Reports" : mailboxRole === "admin" ? "User Reports" : "Developer Messages", "Messages", renderSupportMessages(reports, unreadCount, mailboxRole, mailboxReadOnly));
    setupSupportMessageReadAction(reports, mailboxRole, mailboxReadOnly);
  }
  return reports;
}

function closeSupportModal() {
  const modal = $("supportModal");
  if (!modal) return;
  if (modal.dataset.modalTitle === "Billing Setup") {
    clearPendingBillingModal();
    clearBillingReturnUrl();
  }
  modal.hidden = true;
  delete modal.dataset.modalTitle;
  setSupportModalHeaderButton();
}

function openReportModal(reportTitle, reportText, summaryLines = [], reportContext = {}) {
  const visibleSummary = summaryLines.length ? summaryLines : [reportTitle];
  openSupportModal(reportTitle, "Parser Report", `
    <div class="report-panel">
      <p>Review this summary and add optional notes about what looks wrong.</p>
      <div class="report-summary-card" aria-label="Report summary">
        ${visibleSummary.map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
      </div>
      <label class="report-notes-label">
        Optional Notes
        <textarea id="reportNotes" class="report-notes" rows="5" placeholder="What should the developer check?"></textarea>
      </label>
      <div class="report-actions">
        <button id="submitReportPayload" type="button" class="btn-primary">Submit Report</button>
        <span id="submitReportStatus" class="report-copy-status" aria-live="polite"></span>
      </div>
    </div>
  `);
  $("submitReportPayload")?.addEventListener("click", async () => {
    const button = $("submitReportPayload");
    const status = $("submitReportStatus");
    const notes = $("reportNotes")?.value.trim() || "None provided";
    const payload = {
      title: reportTitle,
      notes,
      summary: visibleSummary,
      fullReport: reportText,
      dataset: getReportDatasetLines(),
      context: {
        ...getReportScopeContext(),
        ...reportContext,
      },
      reporterEmail: getCurrentAccountEmail(),
      reporterName: state.preferences.displayName || "",
      submittedAt: new Date().toISOString(),
      url: window.location.href,
      appBuild: getAppBuildTag(),
      device: getReportDeviceContext(),
    };
    if (button) button.disabled = true;
    if (status) status.textContent = "Sending...";
    try {
      const response = await fetch("/api/report-issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Report failed");
      if (status) status.textContent = "Thank you for your submission. Developer replies will appear in Messages after you sign in.";
      $("reportNotes")?.setAttribute("disabled", "disabled");
    } catch (error) {
      if (button) button.disabled = false;
      $("reportNotes")?.focus();
      if (status) status.textContent = "Unable to submit. Try again.";
      console.warn("Report submission failed:", error.message);
    }
  });
}

function buildContactSupportSummary() {
  const requestType = $("contactRequestType")?.value || "Support request";
  const replyTo = $("contactReplyTo")?.value.trim() || "Not provided";
  const message = $("contactMessage")?.value.trim() || "[User: describe what happened here.]";
  return [
    "CrewBidPro support request",
    "",
    `Request type: ${requestType}`,
    `Reply contact: ${replyTo}`,
    "User statement:",
    message,
    "",
    "Server-generated data:",
    ...getReportDatasetLines(),
  ].join("\n");
}

function updateContactSupportSummary() {
  const summary = $("contactSummary");
  if (summary) summary.value = buildContactSupportSummary();
}

function setupContactWorkflow({ requestType = "" } = {}) {
  const requestTypeSelect = $("contactRequestType");
  if (requestType && requestTypeSelect && [...requestTypeSelect.options].some((option) => option.value === requestType)) {
    requestTypeSelect.value = requestType;
  }
  updateContactSupportSummary();
  $("contactDeveloperForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    updateContactSupportSummary();
    const button = $("submitContactRequest");
    const status = $("copyContactStatus");
    const requestType = $("contactRequestType")?.value || "Support request";
    const replyTo = $("contactReplyTo")?.value.trim() || "";
    const message = $("contactMessage")?.value.trim() || "";
    const summary = $("contactSummary")?.value || buildContactSupportSummary();
    const payload = {
      title: `Contact Developer: ${requestType}`,
      notes: message || "None provided",
      summary,
      fullReport: summary,
      dataset: getReportDatasetLines(),
      context: {
        kind: "contact",
        requestType,
        replyTo,
      },
      reporterEmail: getCurrentAccountEmail(),
      reporterName: state.preferences.displayName || "",
      submittedAt: new Date().toISOString(),
      url: window.location.href,
      appBuild: getAppBuildTag(),
      device: getReportDeviceContext(),
    };
    if (button) button.disabled = true;
    if (status) status.textContent = "Sending...";
    try {
      const response = await fetch("/api/report-issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Support request failed");
      if (status) status.textContent = "Thank you for your submission. Developer replies will appear in Messages after you sign in.";
      $("contactRequestType")?.setAttribute("disabled", "disabled");
      $("contactReplyTo")?.setAttribute("disabled", "disabled");
      $("contactMessage")?.setAttribute("disabled", "disabled");
      $("copyContactSummary")?.setAttribute("disabled", "disabled");
    } catch (error) {
      if (button) button.disabled = false;
      if (status) status.textContent = "Unable to submit. Copy the summary and send it manually.";
      console.warn("Support request submission failed:", error.message);
    }
  });
  ["contactRequestType", "contactReplyTo", "contactMessage"].forEach((id) => {
    $(id)?.addEventListener("input", updateContactSupportSummary);
    $(id)?.addEventListener("change", updateContactSupportSummary);
  });
  $("copyContactSummary")?.addEventListener("click", async () => {
    updateContactSupportSummary();
    const text = $("contactSummary")?.value || buildContactSupportSummary();
    try {
      await navigator.clipboard.writeText(text);
      $("copyContactStatus").textContent = "Copied.";
    } catch {
      $("contactSummary")?.focus();
      $("contactSummary")?.select();
      $("copyContactStatus").textContent = "Select and copy the request.";
    }
  });
}

function handleReportButtonClick(button) {
  const kind = button.dataset.reportKind;
  const id = button.dataset.reportId;
  if (!kind || !id) return;

  if (kind === "trip") {
    const trip = state.data.trips.find((entry) => String(entry.tripId) === String(id));
    if (trip) openReportModal(buildReportTitle(`Trip ${trip.tripId}`), buildTripReport(trip), buildTripReportSummary(trip), {
      kind,
      id,
      item: trip,
    });
    return;
  }

  if (kind === "training") {
    const trainingLine = state.data.reserves.find((entry) => entry.name === id);
    if (trainingLine) openReportModal(buildReportTitle(`Training ${trainingLine.name}`), buildTrainingReport(trainingLine), buildTrainingReportSummary(trainingLine), {
      kind,
      id,
      item: trainingLine,
    });
    return;
  }

  const collection = kind === "reserve" ? state.data.reserves : state.data.lines;
  const line = collection.find((entry) => entry.name === id);
  if (!line) return;
  const typeLabel = kind === "reserve" ? "Reserve Line" : "Line";
  openReportModal(buildReportTitle(`${typeLabel} ${line.name}`), buildLineReport(line, typeLabel), buildLineReportSummary(line, typeLabel), {
    kind,
    id,
    typeLabel,
    item: line,
  });
}

function closeConfirmModal(confirmed = false, { force = false } = {}) {
  const modal = $("confirmModal");
  if (!modal || modal.hidden) return;
  if (!confirmed && !force && !pendingConfirmAllowsCancel) return;
  modal.hidden = true;
  const resolve = pendingConfirmResolve;
  pendingConfirmResolve = null;
  const trigger = pendingConfirmTrigger;
  pendingConfirmTrigger = null;
  pendingConfirmAllowsCancel = true;
  resolve?.(confirmed);
  trigger?.focus?.();
}

function confirmDestructiveAction({
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmLabel = "Yes",
  cancelLabel = "Cancel",
  eyebrow = "Confirm",
  allowCancel = true,
} = {}) {
  const modal = $("confirmModal");
  if (!modal) {
    if (!allowCancel) {
      window.alert(message);
      return Promise.resolve(true);
    }
    return Promise.resolve(window.confirm(message));
  }

  if (pendingConfirmResolve) closeConfirmModal(false, { force: true });
  $("confirmModalEyebrow").textContent = eyebrow;
  $("confirmModalTitle").textContent = title;
  $("confirmModalMessage").textContent = message;
  $("confirmDestructiveAction").textContent = confirmLabel;
  const cancelButton = $("cancelConfirmAction");
  cancelButton.textContent = cancelLabel;
  cancelButton.hidden = !allowCancel;
  pendingConfirmAllowsCancel = allowCancel;
  pendingConfirmTrigger = document.activeElement;
  modal.hidden = false;
  (allowCancel ? cancelButton : $("confirmDestructiveAction"))?.focus();

  return new Promise((resolve) => {
    pendingConfirmResolve = resolve;
  });
}

function setupSupportTools() {
  if (!$("faqButton") && !$("messagesButton") && !$("contactButton")) return;
  enableSupportTopbarButtons();
  if (state.supportToolsInitialized) return;
  state.supportToolsInitialized = true;
  $("faqButton")?.addEventListener("click", () => {
    const gettingStartedHtml = isProfilePage() ? "" : `
      <article class="faq-item faq-getting-started">
        <h3>Getting started</h3>
        <p>Open the welcome guide again for the basic CrewBidPro workflow.</p>
        <button id="showWelcomeGuide" type="button" class="btn-primary">Show Welcome Guide</button>
      </article>
    `;
    const bodyHtml = `${gettingStartedHtml}${FAQ_ITEMS.map((item) => `
      <article class="faq-item">
        <h3>${escapeHtml(item.question)}</h3>
        <p>${escapeHtml(item.answer)}</p>
      </article>
    `).join("")}`;
    openSupportModal("FAQ", "Help", bodyHtml);
    $("showWelcomeGuide")?.addEventListener("click", () => {
      closeSupportModal();
      openNewUserSplash({ force: true });
    });
  });

  $("contactButton")?.addEventListener("click", () => {
    openSupportModal("Contact Developer", "Support", CONTACT_PLACEHOLDER_HTML);
    setupContactWorkflow();
  });

  $("messagesButton")?.addEventListener("click", () => {
    loadSupportMessages({ openWindow: true }).catch((error) => {
      openSupportModal("Developer Messages", "Messages", `
        <div class="message-window-empty">
          <p>${escapeHtml(error.message || "Messages unavailable")}</p>
        </div>
      `);
    });
  });

  $("closeSupportModal")?.addEventListener("click", () => {
    if (typeof state.supportModalHeaderAction === "function") {
      state.supportModalHeaderAction();
      return;
    }
    closeSupportModal();
  });
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeSupportModal);
  });
  loadSupportMessages().catch((error) => console.warn("Support messages unavailable:", error.message));
  enableSupportTopbarButtons();
}

function scheduleSupportToolsFallback() {
  const attachSupportTools = () => {
    setupSupportTools();
    setupConfirmTools();
    setupEmployeeIdentityModal();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachSupportTools, { once: true });
  } else {
    attachSupportTools();
  }
  window.setTimeout(attachSupportTools, 250);
  window.setTimeout(attachSupportTools, 1200);
}

function setupEmployeeIdentityModal() {
  if (!$("employeeIdentityModal")) return;
  if (state.employeeIdentitySetupInitialized) return;
  state.employeeIdentitySetupInitialized = true;
  $("employeeIdentityContact")?.addEventListener("click", () => {
    contactDeveloperFromEmployeeIdentity();
  });
  $("employeeIdentityExit")?.addEventListener("click", () => {
    exitEmployeeIdentityModal();
  });
  $("employeeIdentityApply")?.addEventListener("click", () => {
    applyEmployeeIdentityLookup();
  });
  $("employeeIdentityConfirm")?.addEventListener("click", () => {
    confirmEmployeeIdentityFromModal();
  });
  $("employeeIdentityInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    applyEmployeeIdentityLookup();
  });
  $("employeeIdentityInput")?.addEventListener("input", (event) => {
    const matchedNumber = String(state.employeeIdentityMatch?.employeeNumber || "").trim();
    const enteredNumber = String(event.target?.value || "").trim();
    if (!matchedNumber || enteredNumber === matchedNumber) return;
    renderEmployeeIdentityMatch(null);
    setEmployeeIdentityModalStatus("ID changed. Select FIND MY PROFILE to check the updated number.");
  });
  $("employeeIdentityFleet")?.addEventListener("change", updateEmployeeIdentityConfirmAvailability);
  $("employeeIdentitySeat")?.addEventListener("change", updateEmployeeIdentityConfirmAvailability);
  if (shouldRequireProfileIdentity() && !isCurrentCrewProfileComplete()) {
    requestAnimationFrame(openEmployeeIdentityModal);
  }
}

function setupConfirmTools() {
  if (!$("confirmModal")) return;
  if (state.confirmToolsInitialized) return;
  state.confirmToolsInitialized = true;
  $("cancelConfirmAction")?.addEventListener("click", () => closeConfirmModal(false));
  $("confirmDestructiveAction")?.addEventListener("click", () => closeConfirmModal(true));
  $("cancelCrewbidsSubmit")?.addEventListener("click", () => closeCrewbidsSubmitModal(false));
  $("confirmCrewbidsSubmit")?.addEventListener("click", () => closeCrewbidsSubmitModal(true));
  $("cancelSubmittedBidsImport")?.addEventListener("click", () => closeSubmittedBidsImportModal("cancel"));
  $("preserveSubmittedBidsImport")?.addEventListener("click", () => closeSubmittedBidsImportModal("preserve"));
  $("clearSubmittedBidsImport")?.addEventListener("click", () => closeSubmittedBidsImportModal("clear"));
  document.querySelectorAll("[data-cancel-confirm]").forEach((element) => {
    element.addEventListener("click", () => closeConfirmModal(false));
  });
  document.querySelectorAll("[data-cancel-crewbids-submit]").forEach((element) => {
    element.addEventListener("click", () => closeCrewbidsSubmitModal(false));
  });
  document.querySelectorAll("[data-cancel-submitted-bids]").forEach((element) => {
    element.addEventListener("click", () => closeSubmittedBidsImportModal("cancel"));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeConfirmModal(false);
      closeCrewbidsSubmitModal(false);
      closeSubmittedBidsImportModal("cancel");
    }
  });
}

function attachSelectionDetailPopups(root = document) {
  root.querySelectorAll("[data-selection-popup]").forEach((element) => {
    const lineName = element.dataset.lineName;
    const popupType = element.dataset.selectionPopup;
    if (!lineName || !popupType) return;

    const line = state.data?.lines?.find((entry) => entry.name === lineName);
    const reserve = state.data?.reserves?.find((entry) => entry.name === lineName);

    let html = "";
    if (popupType === "line-route" && line) {
      html = renderLineRoutePopup(line);
    } else if (popupType === "line-deadheads" && (line || reserve)) {
      const deadheadLine = line || reserve;
      const deadheads = getLineDeadheads(deadheadLine);
      if (deadheads.length) html = renderDeadheadPopup(`${deadheadLine.name} Deadheads`, deadheads, true);
    } else if (popupType === "line-reserve" && line) {
      html = renderLineReservePopup(line);
    } else if (popupType === "avoid-conflict") {
      const conflictData = line || reserve;
      const conflictKind = line
        ? (hasReserveDays(line) ? "mixed" : "line")
        : reserve?.isTraining ? "training" : "reserve";
      if (conflictData) html = renderSelectionAvoidConflictPopup(conflictData, conflictKind);
    } else if (popupType === "reserve-schedule" && reserve) {
      html = renderReserveSchedulePopup(reserve);
    } else if (popupType === "training-schedule" && reserve) {
      html = renderReserveSchedulePopup(reserve, ["GTR", "SIM"]);
    } else if (popupType === "reserve-only-schedule" && reserve) {
      html = renderReserveSchedulePopup(reserve, ["RSV"]);
    }
    if (!html) return;
    bindHoverPopup(element, () => html);
  });
}

function attachRemarkPopups(root = document) {
  root.querySelectorAll(".remark-mini-pill[data-remark-full]").forEach((pill) => {
    bindHoverPopup(pill, () => renderRemarkPopup(pill.dataset.remarkFull || ""));
  });
}

function attachAirportPopups(root = document) {
  root.querySelectorAll("[data-airport]").forEach((element) => {
    const airport = element.dataset.airport;
    if (!airport) return;
    const showAirport = (event) => {
      showHoverPopup(event, renderAirportPopup(airport));
    };
    element.addEventListener("mouseenter", showAirport);
    element.addEventListener("focus", showAirport);
    element.addEventListener("mouseleave", hideHoverPopup);
    element.addEventListener("blur", hideHoverPopup);
    element.addEventListener("click", showAirport);
  });
}

const TRIP_TO_LINE_CREW = {
  "1/1": "1 CA 1 FO",
  "1/2": "1 CA 2 FO",
  "2/1": "2 CA 1 FO",
};

const LINE_TO_TRIP_CREW = Object.fromEntries(
  Object.entries(TRIP_TO_LINE_CREW).map(([tripCrew, lineCrew]) => [lineCrew, tripCrew])
);

function setSelectValueIfAvailable(id, value) {
  const select = $(id);
  if (!select) return null;
  const normalized = String(value ?? "");
  const hasOption = [...select.options].some((option) => option.value === normalized);
  if (hasOption && select.value !== normalized) {
    select.value = normalized;
    return select;
  }
  return null;
}

function syncLineCreditSortControls(source) {
  const lineSort = $("lineSort");
  const creditSort = $("lineCreditSort");
  if (!lineSort || !creditSort) return [];
  if (source?.id === "lineCreditSort") {
    if (!creditSort.value) return [];
    const changed = lineSort.value !== creditSort.value;
    lineSort.value = creditSort.value;
    return changed ? [lineSort] : [];
  }
  if (source?.id === "lineSort") {
    const creditValue = ["creditAsc", "creditDesc"].includes(lineSort.value) ? lineSort.value : "";
    if (creditSort.value === creditValue) return [];
    creditSort.value = creditValue;
    return [creditSort];
  }
  return [];
}

function syncCrewFilters(source) {
  const sourceValue = source.value;
  const lineValue = TRIP_TO_LINE_CREW[sourceValue] || sourceValue;
  if (["lineCrew", "reserveCrew", "trainingCrew"].includes(source.id)) {
    return [
      setSelectValueIfAvailable("tripCrew", sourceValue),
      setSelectValueIfAvailable("lineCrew", sourceValue),
      setSelectValueIfAvailable("reserveCrew", sourceValue),
      setSelectValueIfAvailable("trainingCrew", sourceValue),
    ].filter(Boolean);
  }
  if (source.id === "tripCrew") {
    return [
      setSelectValueIfAvailable("lineCrew", lineValue),
      setSelectValueIfAvailable("reserveCrew", lineValue),
      setSelectValueIfAvailable("trainingCrew", lineValue),
    ].filter(Boolean);
  }
  return [];
}

function syncSharedFilters(source) {
  if (!source?.id) return [];
  const creditSortSync = syncLineCreditSortControls(source);
  if (source.id === "lineCreditSort" || source.id === "lineSort") return creditSortSync;
  if (["lineCrew", "tripCrew", "reserveCrew", "trainingCrew"].includes(source.id)) {
    return syncCrewFilters(source);
  }
  if (["lineGuarantee", "tripGuarantee"].includes(source.id)) {
    const targetId = source.id === "lineGuarantee" ? "tripGuarantee" : "lineGuarantee";
    return [setSelectValueIfAvailable(targetId, source.value)].filter(Boolean);
  }
  if (["lineStart", "tripStart"].includes(source.id)) {
    return [setSelectValueIfAvailable(source.id === "lineStart" ? "tripStart" : "lineStart", source.value)].filter(Boolean);
  }
  if (["lineEnd", "tripEnd"].includes(source.id)) {
    return [setSelectValueIfAvailable(source.id === "lineEnd" ? "tripEnd" : "lineEnd", source.value)].filter(Boolean);
  }
  if (["lineThrough", "tripThrough"].includes(source.id)) {
    return [setSelectValueIfAvailable(source.id === "lineThrough" ? "tripThrough" : "lineThrough", source.value)].filter(Boolean);
  }
  if (["lineDeadheads", "tripDeadheads"].includes(source.id)) {
    const value = source.value === "hidden" ? "hidden" : "";
    return [setSelectValueIfAvailable(source.id === "lineDeadheads" ? "tripDeadheads" : "lineDeadheads", value)].filter(Boolean);
  }
  if (["lineLongStay", "tripLongStay"].includes(source.id)) {
    return [setSelectValueIfAvailable(source.id === "lineLongStay" ? "tripLongStay" : "lineLongStay", source.value)].filter(Boolean);
  }
  return [];
}

function markFilterPending(control) {
  const label = control?.closest?.(".filters label");
  if (!label || !label.classList.contains("is-filter-active")) return;
  const previousTimer = activeFilterTimers.get(label);
  if (previousTimer) clearTimeout(previousTimer);
  label.classList.add("is-filter-pending");
  activeFilterTimers.set(label, window.setTimeout(() => {
    label.classList.remove("is-filter-pending");
    activeFilterTimers.delete(label);
  }, ACTIVE_FILTER_PENDING_MS));
}

function updateActiveFilterHighlights() {
  document.querySelectorAll(".filters label").forEach((label) => {
    const control = label.querySelector("input, select");
    if (!control) return;
    const isActive = isFilterControlActive(control);
    label.classList.toggle("is-filter-active", isActive);
    if (!isActive) {
      const previousTimer = activeFilterTimers.get(label);
      if (previousTimer) clearTimeout(previousTimer);
      activeFilterTimers.delete(label);
      label.classList.remove("is-filter-pending");
    }
  });

  document.querySelectorAll(".city-avoid-panel").forEach((panel) => {
    panel.classList.toggle("is-filter-active", state.lineAvoidCities.size > 0);
  });

  document.querySelector(".calendar-panel")?.classList.toggle("is-filter-active", state.avoidDates.size > 0);
}

function resetSelectToDefault(select) {
  if (!select) return;
  const selectedOption = [...select.options].find((option) => option.defaultSelected);
  if (selectedOption) {
    select.value = selectedOption.value;
    return;
  }
  select.selectedIndex = 0;
}

function resetFilterControl(control) {
  if (!control) return;
  if (control.type === "checkbox") {
    control.checked = false;
    return;
  }
  if (control.tagName === "SELECT") {
    resetSelectToDefault(control);
    return;
  }
  control.value = "";
}

function resetFilterControlsById(ids) {
  ids.forEach((id) => resetFilterControl($(id)));
}

function resetSearchEchoes() {
  resetFilterControlsById(SHARED_SEARCH_IDS);
}

function resetSharedCrewEchoes() {
  resetFilterControlsById(SHARED_CREW_FILTER_IDS);
}

function resetLineTripSharedEchoes() {
  resetFilterControlsById(LINE_TRIP_SHARED_FILTER_IDS);
}

function getSelectDefaultValue(select) {
  return [...select.options].find((option) => option.defaultSelected)?.value || "";
}

function isFilterControlActive(control) {
  if (!control) return false;
  if (control.type === "checkbox") return control.checked;
  if (control.tagName === "SELECT") return String(control.value || "") !== getSelectDefaultValue(control);
  return String(control.value || "").trim() !== "";
}

const isEnterKeyEvent = (event) => event.key === "Enter" || event.code === "Enter" || event.keyCode === 13;

function setupFilters() {
  const { lines, trips, reserves } = state.data;
  const reserveOnlyLines = getReserveOnlyLines();
  const trainingLines = reserves.filter((reserve) => reserve.isTraining);
  const lineStyleCrewOptions = unique([
    ...lines.map((line) => line.crewComplement),
    ...reserveOnlyLines.map((reserve) => reserve.crewComplement),
    ...trainingLines.map((reserve) => reserve.crewComplement),
  ]);
  fillSelect($("lineCrew"), lineStyleCrewOptions, "No Filter");
  fillSelect($("lineDutyDays"), unique(lines.map((line) => line.dutyDays)), "No Filter");
  fillSelect($("lineDaysOff"), unique(lines.map((line) => line.daysOff)), "No Filter");
  fillSelect($("lineStart"), unique(lines.map(getLineStartAirport)), "No Filter");
  fillSelect($("lineEnd"), unique(lines.map(getLineEndAirport)), "No Filter");
  fillSelect($("lineThrough"), unique(lines.flatMap(getLineStayRestAirports)), "No Filter");
  renderLineAvoidButtons();

  fillSelect($("tripCrew"), lineStyleCrewOptions, "No Filter");
  fillSelect($("tripStart"), unique(trips.map((trip) => trip.startAirport)), "No Filter");
  fillSelect($("tripEnd"), unique(trips.map((trip) => trip.endAirport)), "No Filter");
  fillSelect($("tripThrough"), unique(trips.flatMap(getTripStayRestAirports)), "No Filter");
  renderTripAvoidButtons();

  fillSelect($("reserveCrew"), lineStyleCrewOptions, "No Filter");
  fillSelect($("reserveStart"), unique(reserveOnlyLines.map(getReserveWindowLabel)), "No Filter");
  fillSelect($("trainingCrew"), lineStyleCrewOptions, "No Filter");
  fillSelect($("trainingStart"), unique(trainingLines.map(getReserveWindowLabel)), "No Filter");
  fillSelect($("selectionCrew"), lineStyleCrewOptions, "No Filter");

  if (state.filtersReady) return;
  state.filtersReady = true;

  const moveFilterFocusToResults = (control) => {
    control?.blur?.();
    renderActiveTab();
    jumpToActiveTabResults();
  };

  const searchInputs = [
    $("lineSearch"),
    $("tripSearch"),
    $("reserveSearch"),
    $("trainingSearch"),
  ].filter(Boolean);

  searchInputs.forEach((input) => {
    input.addEventListener("input", () => {
      searchInputs.forEach((otherInput) => {
        if (otherInput !== input && otherInput.value !== input.value) {
          otherInput.value = input.value;
        }
      });
    });
  });

  document.querySelectorAll(".filter-help").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSupportModal(
        button.dataset.helpTitle || "Filter Note",
        "Filters",
        `<p>${escapeHtml(button.dataset.helpMessage || "")}</p>`,
      );
    });
  });

  document.querySelectorAll(
    "#linesPanel input:not([data-available-plus-submitted-toggle]):not([data-fatigue-toggle]):not([data-line-start-toggle]), #linesPanel select, #tripsPanel input, #tripsPanel select, #reservesPanel input:not([data-available-plus-submitted-toggle]), #reservesPanel select, #trainingPanel input:not([data-available-plus-submitted-toggle]), #trainingPanel select"
  ).forEach((control) => {
    control.addEventListener("search", () => {
      moveFilterFocusToResults(control);
    });
    control.addEventListener("keydown", (event) => {
      if (!isEnterKeyEvent(event)) return;
      event.preventDefault();
      moveFilterFocusToResults(control);
    });
    control.addEventListener("keyup", (event) => {
      if (!isEnterKeyEvent(event)) return;
      event.preventDefault();
      moveFilterFocusToResults(control);
    });
    control.addEventListener("input", renderActiveTab);
    control.addEventListener("change", () => {
      const syncedControls = syncSharedFilters(control);
      renderActiveTab();
      [control, ...syncedControls].forEach(markFilterPending);
    });
  });

  document.querySelectorAll("[data-available-plus-submitted-toggle]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.showAvailablePlusSubmittedOnly = checkbox.checked;
      renderActiveTab();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!isEnterKeyEvent(event)) return;
    const control = event.target?.closest?.(".filters input, .filters select");
    if (!control) return;
    event.preventDefault();
    moveFilterFocusToResults(control);
  }, true);

  document.querySelectorAll("#selectionPanel input:not([data-fatigue-toggle]):not([data-line-start-toggle]), #selectionPanel select").forEach((control) => {
    const refreshSelectionFilter = () => {
      state.selectionManualDisplayOrder = null;
      renderSelection();
    };
    control.addEventListener("search", refreshSelectionFilter);
    control.addEventListener("input", refreshSelectionFilter);
    control.addEventListener("change", refreshSelectionFilter);
  });

  document.querySelectorAll("[data-selection-rank-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectionManualDisplayOrder = null;
      $("selectionSort").value = button.dataset.selectionRankSort;
      renderSelection();
    });
  });

  $("resetSelectionFilters")?.addEventListener("click", () => {
    state.selectionManualDisplayOrder = null;
    document.querySelectorAll("#selectionPanel .selection-filters input, #selectionPanel .selection-filters select").forEach(resetFilterControl);
    renderSelection();
  });

  const clearButton = $("clearAvoidDays");
  if (clearButton) {
    clearButton.addEventListener("click", async () => {
      const confirmed = await confirmDestructiveAction({
        title: "Clear avoided dates?",
        message: "This will remove every date from Days to avoid.",
        confirmLabel: "Yes, clear",
      });
      if (!confirmed) return;
      state.avoidDates.clear();
      renderAvoidCalendar();
      renderActiveTab();
    });
  }

  const resetLineButton = $("resetLineFilters");
  if (resetLineButton) {
    resetLineButton.addEventListener("click", async () => {
      const confirmed = await confirmDestructiveAction({
        title: "Reset line filters?",
        message: "This will clear the Lines filter values and city-avoid selections.",
        confirmLabel: "Yes, reset",
      });
      if (!confirmed) return;
      resetSearchEchoes();
      document.querySelectorAll("#linesPanel select, #linesPanel input[type='checkbox']:not([data-fatigue-toggle]):not([data-line-start-toggle])").forEach(resetFilterControl);
      resetSharedCrewEchoes();
      resetLineTripSharedEchoes();
      state.showAvailablePlusSubmittedOnly = false;
      state.lineAvoidCities.clear();
      renderLineAvoidButtons();
      renderTripAvoidButtons();
      renderLines();
    });
  }

  const resetTripButton = $("resetTripFilters");
  if (resetTripButton) {
    resetTripButton.addEventListener("click", async () => {
      const confirmed = await confirmDestructiveAction({
        title: "Reset trip filters?",
        message: "This will clear the Trips filter values and city-avoid selections.",
        confirmLabel: "Yes, reset",
      });
      if (!confirmed) return;
      resetSearchEchoes();
      document.querySelectorAll("#tripsPanel select, #tripsPanel input[type='checkbox']").forEach(resetFilterControl);
      resetSharedCrewEchoes();
      resetLineTripSharedEchoes();
      state.lineAvoidCities.clear();
      renderLineAvoidButtons();
      renderTripAvoidButtons();
      renderTrips();
    });
  }

  const resetReserveButton = $("resetReserveFilters");
  if (resetReserveButton) {
    resetReserveButton.addEventListener("click", async () => {
      const confirmed = await confirmDestructiveAction({
        title: "Reset reserve filters?",
        message: "This will clear the Reserve filter values.",
        confirmLabel: "Yes, reset",
      });
      if (!confirmed) return;
      resetSearchEchoes();
      document.querySelectorAll("#reservesPanel select, #reservesPanel input[type='checkbox']").forEach(resetFilterControl);
      resetSharedCrewEchoes();
      state.showAvailablePlusSubmittedOnly = false;
      renderReserves();
    });
  }

  const resetTrainingButton = $("resetTrainingFilters");
  if (resetTrainingButton) {
    resetTrainingButton.addEventListener("click", async () => {
      const confirmed = await confirmDestructiveAction({
        title: "Reset training filters?",
        message: "This will clear the Training filter values.",
        confirmLabel: "Yes, reset",
      });
      if (!confirmed) return;
      resetSearchEchoes();
      document.querySelectorAll("#trainingPanel select, #trainingPanel input[type='checkbox']").forEach(resetFilterControl);
      resetSharedCrewEchoes();
      state.showAvailablePlusSubmittedOnly = false;
      renderTraining();
    });
  }

  const resetButton = $("resetAllFilters");
  if (resetButton) {
    resetButton.addEventListener("click", async () => {
      const confirmed = await confirmDestructiveAction({
        title: "Reset all filters?",
        message: "This will clear all filter values, city-avoid selections, and avoided dates.",
        confirmLabel: "Yes, reset",
      });
      if (!confirmed) return;
      state.avoidDates.clear();
      state.showAvailablePlusSubmittedOnly = false;
      document.querySelectorAll("input[type='search'], input[type='number'], select, input[type='checkbox']").forEach(resetFilterControl);
      state.lineAvoidCities.clear();
      renderLineAvoidButtons();
      renderAvoidCalendar();
      renderActiveTab();
    });
  }
}

const getLineCalendarAxisDates = (lines = state.data?.lines || []) => {
  const lineDates = lines
    .flatMap((line) => (line.calendar || []).map((entry) => entry?.date))
    .filter(Boolean)
    .sort();
  const start = state.data?.metadata?.start || lineDates[0] || "";
  const end = state.data?.metadata?.end || lineDates[lineDates.length - 1] || start;
  if (!start || !end || getTimeValue(end) < getTimeValue(start)) return [];
  const dates = [];
  for (let date = start; getTimeValue(date) <= getTimeValue(end); date = addDays(date, 1)) {
    dates.push(date);
  }
  return dates;
};

// Scoped to one Linear render: repeated cells share labels without retaining
// another package or locale after the next render.
const lineCalendarDatePartsCache = new Map();

const getLineCalendarDateParts = (value) => {
  if (lineCalendarDatePartsCache.has(value)) return lineCalendarDatePartsCache.get(value);
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return { weekday: "", day: "", month: "", full: value };
  const parts = {
    weekday: date.toLocaleDateString(undefined, { weekday: "short", timeZone: "UTC" }).slice(0, 2),
    day: String(date.getUTCDate()),
    month: date.toLocaleDateString(undefined, { month: "short", timeZone: "UTC" }).toUpperCase(),
    full: date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }),
  };
  lineCalendarDatePartsCache.set(value, parts);
  return parts;
};

const getLineCalendarMonthGroups = (dates) => {
  const groups = [];
  dates.forEach((date) => {
    const key = date.slice(0, 7);
    const current = groups[groups.length - 1];
    if (current?.key === key) {
      current.count += 1;
      return;
    }
    const parts = getLineCalendarDateParts(date);
    groups.push({ key, count: 1, label: `${parts.month} ${date.slice(0, 4)}` });
  });
  return groups;
};

const getLineCalendarTripIdForDate = (line, date) => {
  const refs = (line.trips || [])
    .filter((ref) => ref?.date && ref?.tripId)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
  return refs.reduce((tripId, ref) => (ref.date <= date ? String(ref.tripId) : tripId), "");
};

const getLineCalendarCellInfo = (line, date) => {
  const entry = (line.calendar || []).find((item) => item?.date === date);
  if (!entry) return { active: false, date, tripId: "", reserve: false, start: false, marker: "" };
  const reserve = entry.status === "RSV";
  const marker = String(entry.marker || "");
  const start = !reserve && Boolean(marker) && !["x", "e"].includes(marker.toLowerCase());
  return {
    active: true,
    date,
    tripId: reserve ? "RSV" : getLineCalendarTripIdForDate(line, date),
    reserve,
    start,
    marker,
  };
};

const renderLineCalendarAxis = (dates) => {
  const primaryMonth = state.data?.metadata?.start?.slice(0, 7) || "";
  return `
    <div class="line-calendar-axis" role="row" style="--line-calendar-days:${dates.length}">
      <div class="line-calendar-axis-rail" role="columnheader">
        <strong>Lines</strong>
        <span>Select and compare</span>
      </div>
      <div class="line-calendar-axis-track">
        <div class="line-calendar-months" aria-hidden="true">
          ${getLineCalendarMonthGroups(dates).map((group) => `<span style="--month-days:${group.count}">${escapeHtml(group.label)}</span>`).join("")}
        </div>
        <div class="line-calendar-days" role="presentation">
          ${dates.map((date) => {
            const parts = getLineCalendarDateParts(date);
            const dateValue = getTimeValue(date);
            const weekday = new Date(`${date}T00:00:00Z`).getUTCDay();
            const classes = [
              date.slice(0, 7) !== primaryMonth ? "is-carry-date" : "",
              state.avoidDates.has(date) ? "is-avoid-date" : "",
              weekday === 0 || weekday === 6 ? "is-weekend" : "",
              dateValue === getTimeValue(state.data?.metadata?.start) ? "is-period-start" : "",
            ].filter(Boolean).join(" ");
            return `<div class="line-calendar-day ${classes}" role="columnheader" aria-label="${escapeHtml(parts.full)}"><span>${escapeHtml(parts.weekday)}</span><strong>${escapeHtml(parts.day)}</strong></div>`;
          }).join("")}
        </div>
      </div>
    </div>
  `;
};

const renderLineCalendarMoneyLine = (line) => {
  if (!state.moneyLine.enabled) return "";
  const analysis = getMoneyLineDollarAnalysis(line);
  const lineValue = analysis.available ? formatMoneyLineDollars(analysis.creditCents) : "—";
  const carryValue = analysis.available && analysis.fullyReconciled
    ? formatMoneyLineDollars(analysis.carryCents)
    : "—";
  const totalValue = analysis.available && analysis.fullyReconciled
    ? formatMoneyLineDollars(analysis.lineValueCents)
    : "—";
  if (analysis.available && !analysis.fullyReconciled) scheduleMoneyLineDiagnostic(line, analysis);
  return `
    <div class="line-calendar-moneyline ${analysis.available ? "" : "is-unavailable"}" aria-label="MoneyLine: Line ${escapeHtml(lineValue)} plus Carry-In ${escapeHtml(carryValue)} equals Total ${escapeHtml(totalValue)}">
      <span class="line-calendar-moneyline-title">MoneyLine</span>
      <span><small>Line</small><strong>${escapeHtml(lineValue)}</strong></span>
      <i aria-hidden="true">+</i>
      <span><small>Carry-In</small><strong>${escapeHtml(carryValue)}</strong></span>
      <i aria-hidden="true">=</i>
      <span class="is-total"><small>Total</small><strong>${escapeHtml(totalValue)}</strong></span>
    </div>
  `;
};

const getLineCalendarCrewLabels = (lineName) => {
  if (state.remarkPillVisibility.hideCrewResults) return [];
  return getCrewbidsCrewResultRemarksForLine(lineName)
    .map((remark) => String(remark || "").split("\n")[0].trim())
    .filter(Boolean)
    .map((heading) => heading.replace(/\s+-\s+/, " · "));
};

const getLineCalendarActiveBlocks = (cells) => {
  const blocks = [];
  cells.forEach((cell, index) => {
    if (!cell.active) return;
    const previous = cells[index - 1];
    const connected = previous?.active
      && previous.tripId === cell.tripId
      && previous.reserve === cell.reserve;
    if (connected) {
      blocks[blocks.length - 1].end = index;
      return;
    }
    blocks.push({
      start: index,
      end: index,
      reserve: cell.reserve,
    });
  });
  return blocks;
};

const renderLineCalendarCrewOverlays = (line, cells) => {
  const labels = getLineCalendarCrewLabels(line.name);
  if (!labels.length) return "";
  const entries = labels.map((label) => {
    const match = label.match(/^(AWARDED|PROJECTED)\s+(CA|FO)\s+·\s+(.+)$/i);
    return match ? { status: match[1].toUpperCase(), seat: match[2].toUpperCase(), names: match[3] } : null;
  }).filter(Boolean);
  const status = entries.some((entry) => entry.status === "AWARDED") ? "AWARDED" : "PROJECTED";
  const names = entries.length
    ? entries.map((entry) => `${entry.seat} ${entry.names}`).join(" · ")
    : labels.join(" · ");
  const fullLabel = `${status} · ${names}`;
  return getLineCalendarActiveBlocks(cells)
    .filter((block) => block.end > block.start)
    .map((block) => `
      <span
        class="line-calendar-crew-overlay ${block.reserve ? "is-reserve" : ""}"
        style="--crew-start:${block.start + 1};--crew-span:${block.end - block.start}"
        title="${escapeHtml(fullLabel)}"
      ><small>${escapeHtml(status)}</small><strong>${escapeHtml(names)}</strong></span>
    `).join("");
};

const renderLineCalendarRow = (line, dates) => {
  const bidRank = getBidRank(line.name);
  const cells = dates.map((date) => getLineCalendarCellInfo(line, date));
  const carryInDates = new Set(getLineCarryInDates(line));
  const primaryMonth = state.data?.metadata?.start?.slice(0, 7) || "";
  const lineClasses = [
    bidRank ? "is-bid-selected" : "",
    getLineAvailabilityRowClass(line.name),
    getCrewbidsOutbidRowClass(line.name),
  ].filter(Boolean).join(" ");
  return `
    <div class="line-calendar-row ${lineClasses}" role="row" style="--line-calendar-days:${dates.length}" data-line-calendar-row="${escapeHtml(line.name)}">
      <div class="line-calendar-line-rail" role="rowheader">
        <label class="line-calendar-select">
          <input type="checkbox" class="bid-checkbox" data-line-name="${escapeHtml(line.name)}" aria-label="Add ${escapeHtml(line.name)} to bid list" ${bidRank ? "checked" : ""}>
          ${bidRank ? `<span class="line-calendar-rank" aria-label="Bid rank ${bidRank}">${bidRank}</span>` : ""}
        </label>
        <button type="button" class="line-name line-calendar-line-name" data-calendar-line-name="${escapeHtml(line.name)}" aria-label="Show ${escapeHtml(line.name)} schedule details">${escapeHtml(line.name)}</button>
        <span class="line-calendar-credit">${escapeHtml(line.credit || formatHours(line.creditMinutes))}</span>
        ${renderLineCalendarMoneyLine(line)}
      </div>
      <div class="line-calendar-cells" role="presentation">
        ${cells.map((cell, index) => {
          const date = dates[index];
          const previous = cells[index - 1];
          const next = cells[index + 1];
          const sameAsPrevious = cell.active && previous?.active && previous.tripId === cell.tripId && previous.reserve === cell.reserve;
          const sameAsNext = cell.active && next?.active && next.tripId === cell.tripId && next.reserve === cell.reserve;
          const weekday = new Date(`${date}T00:00:00Z`).getUTCDay();
          const classes = [
            cell.active ? "is-active" : "is-off",
            cell.reserve ? "is-reserve" : "",
            cell.start ? "is-trip-start" : "",
            sameAsPrevious ? "is-connected-before" : "",
            sameAsNext ? "is-connected-after" : "",
            cell.active && carryInDates.has(date) ? "is-carry-in-day" : "",
            date.slice(0, 7) !== primaryMonth ? "is-carry-date" : "",
            state.avoidDates.has(date) ? "is-avoid-date" : "",
            weekday === 0 || weekday === 6 ? "is-weekend" : "",
          ].filter(Boolean).join(" ");
          if (!cell.active) return `<span class="line-calendar-cell ${classes}" role="cell" aria-label="${escapeHtml(`${line.name} ${getLineCalendarDateParts(date).full}: off`)}"></span>`;
          const label = cell.reserve ? (sameAsPrevious ? "" : "RSV") : cell.start ? cell.marker : "";
          const description = cell.reserve
            ? `${line.name} ${getLineCalendarDateParts(date).full}: reserve`
            : `${line.name} ${getLineCalendarDateParts(date).full}${cell.tripId ? `, trip ${cell.tripId}` : ""}`;
          return `<span class="line-calendar-cell ${classes}" role="cell" aria-label="${escapeHtml(description)}"><span>${escapeHtml(label)}</span></span>`;
        }).join("")}
        ${renderLineCalendarCrewOverlays(line, cells)}
      </div>
    </div>
  `;
};

const renderLineCalendarSection = (section, dates) => {
  if (!section.rows.length) return "";
  const expanded = isBidResultSectionExpanded("lines", section.key);
  const countLabel = `${section.rows.length} line${section.rows.length === 1 ? "" : "s"}`;
  return `
    <section id="lines-calendar-results-${section.key}" class="line-calendar-section is-${section.key}" data-line-calendar-section="${section.key}" style="--line-calendar-days:${dates.length}">
      <button type="button" class="line-calendar-section-toggle" data-bid-result-section-toggle="lines" data-section-key="${section.key}" aria-expanded="${expanded}" aria-label="${expanded ? "Collapse" : "Expand"} ${escapeHtml(section.label)}, ${countLabel}">
        <span>${escapeHtml(section.label)}</span>
        <span><strong>${countLabel}</strong><i class="bid-result-section-chevron" aria-hidden="true"></i></span>
      </button>
      ${expanded ? section.rows.map((line) => renderLineCalendarRow(line, dates)).join("") : ""}
    </section>
  `;
};

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

  const scroller = timeline.querySelector(".line-calendar-scroller");
  if (scroller) {
    scroller.scrollLeft = state.lineCalendarScroll.left || 0;
    scroller.scrollTop = state.lineCalendarScroll.top || 0;
    scroller.addEventListener("scroll", () => {
      state.lineCalendarScroll = {
        left: scroller.scrollLeft,
        top: scroller.scrollTop,
      };
      scheduleLinePanelNavigationHighlight();
    }, { passive: true });
  }

  timeline.querySelectorAll(".bid-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
    });
    checkbox.addEventListener("change", () => toggleBidLine(checkbox.dataset.lineName));
  });
  timeline.querySelectorAll("[data-calendar-line-name]").forEach((button) => {
    const line = rows.find((entry) => entry.name === button.dataset.calendarLineName);
    if (line) bindHoverPopup(button, () => renderLineRoutePopup(line));
  });
}

function renderLines() {
  renderBidListPanel();
  renderLineAvoidButtons();
  if (!state.data.lines.length) {
    renderMoneyLineSortNotice("");
    $("lineCount").textContent = "";
    $("linesTable").innerHTML = `<tr><td colspan="10" class="empty">No bid information available. Please upload your documents.</td></tr>`;
    renderLineCalendar([], []);
    syncLineResultsView();
    return;
  }

  const needle = $("lineSearch").value.trim().toLowerCase();
  const crew = $("lineCrew").value;
  const useAdvancedLineFilters = canUseFeature("advancedLineFilters");
  const guarantee = $("lineGuarantee").value;
  const dutyDays = useAdvancedLineFilters ? $("lineDutyDays").value : "";
  const daysOff = useAdvancedLineFilters ? $("lineDaysOff").value : "";
  const carry = useAdvancedLineFilters ? $("lineCarry").value : "";
  const split = useAdvancedLineFilters ? $("lineSplit").value : "";
  const deadheads = useAdvancedLineFilters ? $("lineDeadheads").value : "";
  const breakfastFriendly = useAdvancedLineFilters ? $("lineBreakfastFriendly").value : "";
  const longStay = useAdvancedLineFilters ? $("lineLongStay").value : "";
  const start = useAdvancedLineFilters ? $("lineStart").value : "";
  const end = useAdvancedLineFilters ? $("lineEnd").value : "";
  const through = useAdvancedLineFilters ? $("lineThrough").value : "";
  const avoidCities = [...state.lineAvoidCities];
  const lineSortValue = $("lineSort").value || "";

  let rows = state.data.lines.filter((line) => {
    const isSelected = isBidLineSelected(line.name);
    if (state.showBidListOnly) return isSelected;
    if (isSelected) return true;
    const lineTrips = getLineTripDetails(line);
    const isSplitLine = hasSplitLine(line);
    const identifierValues = [line.name, lineTrips.map((trip) => trip.tripId).join(" ")];
    const textValues = [
      line.crewComplement,
      line.credit,
      line.routeText,
      line.airports?.join(" "),
      getCrewbidsLineSearchText(line.name),
    ];
    if (!matchesSearchNeedle(needle, identifierValues, textValues)) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceAirportConflict(line.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceCountryConflict(line.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceRegionConflict(line.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceSpecialConflict(line.airports || [])) return false;
    if (crew && line.crewComplement !== crew) return false;
    if (guarantee === "below" && line.creditMinutes >= MINIMUM_GUARANTEE_MINUTES) return false;
    if (guarantee === "above" && line.creditMinutes < MINIMUM_GUARANTEE_MINUTES) return false;
    if (dutyDays && String(line.dutyDays) !== dutyDays) return false;
    if (daysOff && String(line.daysOff) !== daysOff) return false;
    const carryInDays = getLineCarryInDays(line);
    if (carry === "hidden" && carryInDays > 0) return false;
    if (carry === "only" && !(carryInDays > 0)) return false;
    if (split === "hidden" && isSplitLine) return false;
    if (split === "only" && !isSplitLine) return false;
    if (deadheads === "hidden" && line.hasDeadhead) return false;
    if (deadheads === "only" && !line.hasDeadhead) return false;
    if (breakfastFriendly === "on" && !isBreakfastFriendlyLine(line)) return false;
    if (longStay === "only" && !hasLineLongStay(line)) return false;
    if (start && getLineStartAirport(line) !== start) return false;
    if (end && getLineEndAirport(line) !== end) return false;
    if (through && !getLineStayRestAirports(line).includes(through)) return false;
    if (shouldUseCityAvoid() && avoidCities.some((city) => line.airports.includes(city))) return false;
    if (shouldUseAvoidCalendar() && hasHardAvoidDateConflict(line)) return false;
    if (shouldUseAvoidCalendar() && !line.isFlexReserve && hasReserveAvoidDateConflict(line)) return false;
    return true;
  });

  const sort = lineSortValue || "nameAsc";
  const moneyLineAnalyses = sort === "moneyLineDesc"
    ? new Map(rows.map((line) => [line.name, getMoneyLineDollarAnalysis(line)]))
    : new Map();
  const unresolvedMoneyLineCount = sort === "moneyLineDesc"
    ? [...moneyLineAnalyses.values()].filter((analysis) => !analysis.available || !analysis.fullyReconciled).length
    : 0;
  renderMoneyLineSortNotice(sort, unresolvedMoneyLineCount);
  rows.sort((a, b) => {
    if (state.showBidListOnly) return state.bidList.indexOf(a.name) - state.bidList.indexOf(b.name);
    if (sort === "moneyLineDesc") {
      if (unresolvedMoneyLineCount > 0) return 0;
      return moneyLineAnalyses.get(b.name).lineValueCents - moneyLineAnalyses.get(a.name).lineValueCents
        || lineNumber(a.name) - lineNumber(b.name);
    }
    if (sort === "dutyAsc" || sort === "dutyDesc") return compareDutyDayCounts(a, b, sort) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "creditAsc") return a.creditMinutes - b.creditMinutes;
    if (sort === "carryAsc") return getLineCarryInMinutes(a) - getLineCarryInMinutes(b) || getLineCarryInDays(a) - getLineCarryInDays(b) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "carryDesc") return getLineCarryInMinutes(b) - getLineCarryInMinutes(a) || getLineCarryInDays(b) - getLineCarryInDays(a) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "fatigueAsc" || sort === "fatigueDesc") {
      const aScore = getLineFatigueScore(a);
      const bScore = getLineFatigueScore(b);
      if (aScore === null && bScore === null) return lineNumber(a.name) - lineNumber(b.name);
      if (aScore === null) return 1;
      if (bScore === null) return -1;
      return (sort === "fatigueAsc" ? aScore - bScore : bScore - aScore)
        || lineNumber(a.name) - lineNumber(b.name);
    }
    if (sort === "lineStartAsc" || sort === "lineStartDesc") {
      return compareLineFirstShowTimes(a, b, sort === "lineStartDesc" ? "desc" : "asc")
        || lineNumber(a.name) - lineNumber(b.name);
    }
    if (sort === "deadheadAsc") return getLineDeadheadMinutes(a) - getLineDeadheadMinutes(b) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "deadheadDesc") return getLineDeadheadMinutes(b) - getLineDeadheadMinutes(a) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "sitAsc") return getLineSitMinutes(a) - getLineSitMinutes(b) || b.creditMinutes - a.creditMinutes;
    if (sort === "sitDesc") return getLineSitMinutes(b) - getLineSitMinutes(a) || b.creditMinutes - a.creditMinutes;
    if (sort === "daysOffDesc") return b.daysOff - a.daysOff || b.creditMinutes - a.creditMinutes;
    if (sort === "daysOffAsc") return a.daysOff - b.daysOff || b.creditMinutes - a.creditMinutes;
    if (sort === "calendarStartAsc") return getLineCalendarStartValue(a) - getLineCalendarStartValue(b) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "calendarStartDesc") return getLineCalendarStartValue(b) - getLineCalendarStartValue(a) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "nameAsc") return lineNumber(a.name) - lineNumber(b.name);
    if (sort === "nameDesc") return lineNumber(b.name) - lineNumber(a.name);
    return b.creditMinutes - a.creditMinutes;
  });

  const eligibleRows = [...rows];
  const availabilityRecord = getActiveAvailabilityReviewRecord("lines");
  const pendingNewLines = new Set(availabilityRecord?.pending || []);
  if (state.newlyAvailableReviewScope === "lines" && pendingNewLines.size) {
    const lineByName = new Map(state.data.lines.map((line) => [line.name, line]));
    const reviewRows = (availabilityRecord?.watched || [])
      .filter((lineName) => pendingNewLines.has(lineName))
      .map((lineName) => lineByName.get(lineName))
      .filter(Boolean);
    rows = retainSelectedBidRows(reviewRows, state.data.lines);
  } else if (state.showAvailablePlusSubmittedOnly) {
    rows = rows.filter((line) => isBidLineSelected(line.name) || !isFilteredByAvailablePlusSubmitted(line.name));
  }
  rows = pinSelectedBidRows(rows);
  const resultSections = getBidResultSections(rows);
  rows = resultSections.flatMap((section) => section.rows);

  $("lineCount").textContent = `${rows.length} of ${state.data.lines.length}`;
  setBulkResultSnapshot(
    "lines",
    rows.map((line) => line.name),
    state.newlyAvailableReviewScope === "lines"
      ? availabilityRecord?.watched || []
      : eligibleRows.map((line) => line.name),
    state.showAvailablePlusSubmittedOnly,
  );
  // Build only the chosen presentation. Switching views rerenders from the
  // current filters and bid order rather than exposing stale hidden markup.
  if (state.linesViewMode === "calendar") {
    $("linesTable").innerHTML = "";
    renderLineCalendar(rows, resultSections);
    syncLineResultsView();
    markOutbidAlertsSeenForLines(rows.map((line) => line.name));
    updateActiveFilterHighlights();
    return;
  }
  rememberLineCalendarScrollPosition();
  $("lineCalendarTimeline").innerHTML = "";
  const lineRowMarkupByName = new Map(rows.map((line, index) => {
    const lineTrips = getLineTripDetails(line);
    const seniorityPressureRemarks = getCrewbidsSeniorityPressureRemarksForLine(line.name);
    const crewResultRemarks = getCrewbidsCrewResultRemarksForLine(line.name);
    const bidAvoidRemarks = getCrewbidsBidAvoidRemarksForLine(line.name);
    const buddyBidRemarks = getCrewbidsBuddyBidRemarksForLine(line.name);
    const lineRemarks = getVisibleRemarks([
      ...seniorityPressureRemarks,
      ...crewResultRemarks,
      ...buddyBidRemarks,
      ...bidAvoidRemarks,
      ...lineTrips.flatMap(getTripRemarks),
    ]);
    const remarksMarkup = canUseLineResultInsights()
      ? (lineRemarks.length ? `<div class="remarks-list">${lineRemarks.map(renderRemarkItem).join("")}</div>` : "")
      : (lineRemarks.length ? renderPaidDetailPlaceholder("Remarks") : "");
    const detailRemarksMarkup = canUseLineResultInsights()
      ? (lineRemarks.length ? `<div class="remarks-list remarks-list-by-trip line-detail-remark-list">${lineRemarks.map(renderRemarkFullItem).join("")}</div>` : "")
      : (lineRemarks.length ? renderPaidDetailPlaceholder("Remarks") : "");
    const bidRank = getBidRank(line.name);
    const availabilityClass = getLineAvailabilityRowClass(line.name);
    const outbidClass = getCrewbidsOutbidRowClass(line.name);
    const bidAvoidClass = bidAvoidRemarks.length ? "is-crewbids-bid-avoid" : "";
    const buddyBidClass = buddyBidRemarks.length ? "is-crewbids-buddy-bid" : "";
    const detailId = `line-card-details-${index}`;
    const moneyLineCreditMarkup = renderMoneyLineCredit(line);
    const moneyLineCarryMarkup = renderMoneyLineCarry(line);
    const moneyLineTotalMarkup = renderMoneyLineValue(line);
    return [line.name, `
    <tr class="line-summary-row ${bidRank ? "is-bid-selected" : ""} ${availabilityClass} ${outbidClass} ${buddyBidClass} ${bidAvoidClass}">
      <td class="name-cell" data-line-index="${index}" data-line-name="${line.name}">
        <div class="line-identity-stack">
          <div class="bid-select">
            <input type="checkbox" class="bid-checkbox" data-line-name="${line.name}" aria-label="Add ${escapeHtml(line.name)} to bid list" ${bidRank ? "checked" : ""}>
            <button type="button" class="line-name line-reveal-target" aria-label="Show ${escapeHtml(line.name)} details">${line.name}</button>
            ${renderAvailabilityLineBadges(line.name, "lines", pendingNewLines)}
          </div>
          ${renderFatigueScoreChip(line)}
          ${renderLineStartTimeChip(line)}
        </div>
      </td>
      <td>${formatCrewCell(line.crewComplement)}</td>
      <td><span class="line-credit-value">${line.credit || formatHours(line.creditMinutes)}</span>${moneyLineCreditMarkup}</td>
      <td class="number-cell">${line.dutyDays}</td>
      <td class="number-cell">${line.daysOff}</td>
      <td class="number-cell carry-in-cell line-carry-in-cell" data-line-index="${index}" ${getLineCarryInDays(line) ? 'tabindex="0"' : ""}>${renderCarryInCell(line)}${moneyLineCarryMarkup}</td>
      <td class="number-cell carry-in-cell ipad-only-dh ${line.deadheadCount ? "deadhead-cell" : ""}" data-line-index="${index}" ${line.deadheadCount ? 'tabindex="0"' : ""}>${renderDeadheadCell(line)}</td>
      <td class="${moneyLineTotalMarkup ? "has-moneyline-total" : ""}">
        ${renderTripStack(line, lineTrips)}
        ${moneyLineTotalMarkup}
        <span class="line-card-trip-count">${lineTrips.length} ${lineTrips.length === 1 ? "trip" : "trips"}${hasSplitLine(line) ? " · split line" : ""}</span>
        <button type="button" class="line-card-details-toggle" aria-expanded="false" aria-controls="${detailId}">
          <span>Details</span>
          <span class="line-card-details-chevron" aria-hidden="true">⌄</span>
        </button>
      </td>
      <td class="number-cell carry-in-cell desktop-dh-cell ${line.deadheadCount ? "deadhead-cell" : ""}" data-line-index="${index}" ${line.deadheadCount ? 'tabindex="0"' : ""}>${renderDeadheadCell(line)}</td>
      <td>${renderLineAirportRoutes(line, lineTrips)}</td>
      <td>${remarksMarkup}${renderReportButton("line", line.name, "report-button-inline")}</td>
    </tr>
    <tr id="${detailId}" class="line-detail-row ${bidRank ? "is-bid-selected" : ""} ${availabilityClass} ${outbidClass} ${bidAvoidClass}" aria-label="${escapeHtml(`${line.name} detail row`)}">
      <td colspan="8">
        <div class="line-detail-grid">
          <section class="line-detail-panel line-detail-breakdown">
            <span class="line-detail-label">Breakdown</span>
            ${renderTripStack(line, lineTrips)}
          </section>
          <section class="line-detail-panel line-detail-dh">
            <span class="line-detail-label">DH</span>
            <span class="line-detail-value carry-in-cell ${line.deadheadCount ? "deadhead-cell" : ""}" data-line-index="${index}" ${line.deadheadCount ? 'tabindex="0"' : ""}>${renderDeadheadCell(line)}</span>
          </section>
          <section class="line-detail-panel line-detail-airports">
            <span class="line-detail-label">Airports</span>
            ${renderLineAirportRoutes(line, lineTrips) || '<span class="line-detail-empty">None</span>'}
          </section>
          <section class="line-detail-panel line-detail-remarks">
            <div class="line-detail-heading">
              <span class="line-detail-label">Remarks</span>
              ${renderReportButton("line", line.name)}
            </div>
            ${detailRemarksMarkup || '<span class="line-detail-empty">None</span>'}
          </section>
        </div>
      </td>
    </tr>
  `];
  }));
  $("linesTable").innerHTML = rows.length
    ? renderBidResultSections(
      "lines",
      resultSections,
      11,
      (sectionRows) => sectionRows.map((line) => lineRowMarkupByName.get(line.name)).join(""),
    )
    : emptyRow(11, "lines");
  syncLineResultsView();
  bindEmptyResultRecovery("lines");
  markOutbidAlertsSeenForLines(rows.map((line) => line.name));

  document.querySelectorAll("#linesTable .line-card-details-toggle").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
      const detailRow = document.getElementById(button.getAttribute("aria-controls"));
      const summaryRow = button.closest(".line-summary-row");
      if (!detailRow || !summaryRow) return;
      const expanded = !detailRow.classList.contains("is-expanded");
      detailRow.classList.toggle("is-expanded", expanded);
      summaryRow.classList.toggle("has-expanded-details", expanded);
      button.setAttribute("aria-expanded", String(expanded));
      button.querySelector("span:first-child").textContent = expanded ? "Hide details" : "Details";
    });
  });

  document.querySelectorAll("#linesTable .name-cell").forEach((cell) => {
    const index = Number(cell.dataset.lineIndex);
    const line = rows[index];
    if (!line) return;
    bindHoverPopup(cell.querySelector(".line-name"), () => renderLineRoutePopup(line));
  });

  document.querySelectorAll("#linesTable .trip-chip").forEach((chip) => {
    const line = rows.find((entry) => entry.name === chip.dataset.lineName);
    const trip = getLineTripDetails(line || {})[Number(chip.dataset.tripIndex)];
    if (!trip) return;
    bindHoverPopup(chip, () => renderTripRoutePopup(trip));
  });

  attachFatigueScoreInteractions($("linesTable"));

  document.querySelectorAll("#linesTable .reserve-chip").forEach((chip) => {
    const line = rows.find((entry) => entry.name === chip.dataset.lineReserve);
    if (!line) return;
    bindHoverPopup(chip, () => renderLineReservePopup(line, Number(chip.dataset.reserveBlock)));
  });

  document.querySelectorAll("#linesTable .bid-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
    });
    checkbox.addEventListener("change", () => {
      toggleBidLine(checkbox.dataset.lineName);
    });
  });

  document.querySelectorAll("#linesTable .deadhead-cell").forEach((cell) => {
    const index = Number(cell.dataset.lineIndex);
    const line = rows[index];
    if (!line) return;
    const deadheadDetails = getLineDeadheads(line);
    if (!deadheadDetails.length) return;
    bindHoverPopup(cell, () => (canUseLineResultInsights()
      ? renderDeadheadPopup(`${line.name} Deadheads`, deadheadDetails, true)
      : renderPaidDetailPopup("Deadhead details")));
  });
  document.querySelectorAll("#linesTable .line-carry-in-cell[tabindex]").forEach((cell) => {
    const line = rows[Number(cell.dataset.lineIndex)];
    if (!line) return;
    bindHoverPopup(cell, () => (canUseLineResultInsights()
      ? renderCarryInPopup(line)
      : renderPaidDetailPopup("Carry-In details")));
  });
  document.querySelectorAll("#linesTable .report-button").forEach((button) => {
    button.addEventListener("click", () => handleReportButtonClick(button));
  });
  attachAirportPopups($("linesTable"));
  attachRemarkPopups($("linesTable"));
  updateActiveFilterHighlights();
}

function renderTrips() {
  renderTripAvoidButtons();
  const needle = $("tripSearch").value.trim().toLowerCase();
  const crew = LINE_TO_TRIP_CREW[$("tripCrew").value] || $("tripCrew").value;
  const useAdvancedTripFilters = canUseFeature("advancedTripFilters");
  const start = useAdvancedTripFilters ? $("tripStart").value : "";
  const end = useAdvancedTripFilters ? $("tripEnd").value : "";
  const through = useAdvancedTripFilters ? $("tripThrough").value : "";
  const deadheads = useAdvancedTripFilters ? $("tripDeadheads").value : "";
  const guarantee = $("tripGuarantee").value;
  const longStay = useAdvancedTripFilters ? $("tripLongStay").value : "";
  const avoidCities = [...state.lineAvoidCities];

  let rows = state.data.trips.filter((trip) => {
    const identifierValues = [trip.tripId];
    const textValues = [trip.operates, trip.crew, trip.credit, trip.routeText, trip.airports?.join(" ")];
    if (!matchesSearchNeedle(needle, identifierValues, textValues)) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceAirportConflict(trip.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceCountryConflict(trip.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceRegionConflict(trip.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceSpecialConflict(trip.airports || [])) return false;
    if (crew && trip.crew !== crew) return false;
    if (start && trip.startAirport !== start) return false;
    if (end && trip.endAirport !== end) return false;
    if (through && !getTripStayRestAirports(trip).includes(through)) return false;
    if (guarantee === "below" && (trip.creditMinutes || 0) >= MINIMUM_GUARANTEE_MINUTES) return false;
    if (guarantee === "above" && (trip.creditMinutes || 0) < MINIMUM_GUARANTEE_MINUTES) return false;
    if (deadheads === "hidden" && trip.hasDeadhead) return false;
    if (longStay === "only" && !hasTripLongStay(trip)) return false;
    if (shouldUseCityAvoid() && avoidCities.some((city) => trip.airports?.includes(city))) return false;
    if (shouldUseAvoidCalendar() && state.avoidDates.size && getTripCalendar(trip).some((date) => state.avoidDates.has(date))) return false;
    return true;
  });

  const sort = $("tripSort").value || "idAsc";
  rows.sort((a, b) => {
    if (sort === "creditAsc") return a.creditMinutes - b.creditMinutes;
    if (sort === "sitAsc") return getTripSitMinutes(a) - getTripSitMinutes(b) || b.creditMinutes - a.creditMinutes;
    if (sort === "sitDesc") return getTripSitMinutes(b) - getTripSitMinutes(a) || b.creditMinutes - a.creditMinutes;
    if (sort === "carryDesc") return getTripCarryInDays(b) - getTripCarryInDays(a) || b.creditMinutes - a.creditMinutes;
    if (sort === "dutyAsc") return a.dutyDays - b.dutyDays || b.creditMinutes - a.creditMinutes;
    if (sort === "idAsc") return Number(a.tripId) - Number(b.tripId);
    return b.creditMinutes - a.creditMinutes;
  });

  $("tripCount").textContent = `${rows.length} of ${state.data.trips.length}`;
  $("tripsTable").innerHTML = rows.length ? rows.map((trip, index) => {
    const tripRemarks = getTripRemarks(trip);
    const remarksMarkup = canUseTripResultInsights()
      ? renderRemarks([trip])
      : (tripRemarks.length ? renderPaidDetailPlaceholder("Remarks") : "");
    return `
    <tr class="trip-summary-row">
      <td class="name-cell" data-trip-index="${index}">${trip.tripId}</td>
      <td>${formatStartDate(trip.operates, trip.displayDate)}</td>
      <td>${formatTripCrewCell(trip.crew)}</td>
      <td>${trip.credit || ""}</td>
      <td>${trip.block || ""}</td>
      <td>${trip.dutyDays || ""}</td>
      <td class="number-cell carry-in-cell">${renderTripCarryInCell(trip)}</td>
      <td class="${trip.deadheadCount ? "deadhead-cell" : ""}" ${trip.deadheadCount ? 'tabindex="0"' : ""}>${trip.deadheadCount ? (canUseTripResultInsights() ? `<span class="warn">${trip.deadheadCount}</span>` : `<span class="carry-in-days">${trip.deadheadCount}</span><span class="paid-detail-inline">Full Access</span>`) : "0"}</td>
      <td class="route">${renderTripRouteSummary(trip)}${renderReportButton("trip", trip.tripId, "report-button-inline")}</td>
      <td>${remarksMarkup}</td>
    </tr>
    <tr class="trip-detail-row" aria-label="Trip ${escapeHtml(trip.tripId)} route row">
      <td colspan="10">
        <div class="trip-detail-route">
          <section class="line-detail-panel trip-detail-airports">
            <div class="line-detail-heading">
              <span class="line-detail-label">Airports</span>
            </div>
            <div class="line-detail-action-row trip-detail-action-row">
              ${renderBalancedTripRouteSummary(trip)}
              ${renderReportButton("trip", trip.tripId)}
            </div>
          </section>
          <section class="line-detail-panel trip-detail-remarks">
            <div class="line-detail-heading">
              <span class="line-detail-label">Remarks</span>
            </div>
            <div class="line-detail-action-row trip-detail-remarks-row">
              ${remarksMarkup || '<span class="line-detail-empty">None</span>'}
            </div>
          </section>
        </div>
      </td>
    </tr>
  `;
  }).join("") : emptyRow(10, "trips");
  bindEmptyResultRecovery("trips");

  document.querySelectorAll("#tripsTable .name-cell").forEach((cell) => {
    const index = Number(cell.dataset.tripIndex);
    const trip = rows[index];
    if (!trip) return;
    bindHoverPopup(cell, () => renderTripRoutePopup(trip));
  });

  document.querySelectorAll("#tripsTable .deadhead-cell").forEach((cell) => {
    const tr = cell.closest("tr");
    const nameCell = tr.querySelector(".name-cell");
    if (!nameCell) return;
    const index = Number(nameCell.dataset.tripIndex);
    const trip = rows[index];
    if (!trip) return;
    const deadheadDetails = getTripDeadheads(trip);
    if (!deadheadDetails.length) return;
    
    bindHoverPopup(cell, () => (canUseTripResultInsights()
      ? renderDeadheadPopup("Deadheads", deadheadDetails)
      : renderPaidDetailPopup("Deadhead details")));
  });
  document.querySelectorAll("#tripsTable .report-button").forEach((button) => {
    button.addEventListener("click", () => handleReportButtonClick(button));
  });
  attachRemarkPopups($("tripsTable"));
  updateActiveFilterHighlights();
}

function renderReserves() {
  renderBidListPanel();
  const needle = $("reserveSearch").value.trim().toLowerCase();
  const crew = $("reserveCrew").value;
  const useReserveFilters = canUseFeature("reserveFilters");
  const start = useReserveFilters ? $("reserveStart").value : "";
  const flexReserve = useReserveFilters ? $("reserveFlex").value : "";
  const sort = $("reserveSort").value || "dateAsc";
  const reserveOnlyLines = getReserveOnlyLines();

  let rows = reserveOnlyLines.filter((reserve) => {
    const isSelected = isBidLineSelected(reserve.name);
    if (state.showBidListOnly) return isSelected;
    if (isSelected) return true;
    const identifierValues = [reserve.name];
    const textValues = [
      reserve.crewComplement,
      reserve.credit,
      reserve.startDate,
      reserve.endDate,
      reserve.isMixedReserveLine ? "flying reserve mixed f-line" : "",
      getCrewbidsLineSearchText(reserve.name),
    ];
    if (!matchesSearchNeedle(needle, identifierValues, textValues)) return false;
    if (crew && reserve.crewComplement !== crew) return false;
    if (start && getReserveWindowLabel(reserve) !== start) return false;
    if (flexReserve === "reserveOnly" && !isPureReserveLine(reserve)) return false;
    if (flexReserve === "flexOnly" && !isFlexReserveDisplayLine(reserve)) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceAirportConflict(reserve.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceCountryConflict(reserve.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceRegionConflict(reserve.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceSpecialConflict(reserve.airports || [])) return false;
    if (shouldUseAvoidCalendar() && reserve.isMixedReserveLine && hasHardAvoidDateConflict(reserve)) return false;
    if (shouldUseAvoidCalendar() && !reserve.isMixedReserveLine && hasReserveAvoidDateConflict(reserve)) return false;
    return true;
  });

  const compareReserveRows = (a, b) => {
    if (sort === "daysAsc") return a.dayCount - b.dayCount || a.startDate.localeCompare(b.startDate) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "daysDesc") return b.dayCount - a.dayCount || a.startDate.localeCompare(b.startDate) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "deadheadAsc") return getLineDeadheadMinutes(a) - getLineDeadheadMinutes(b) || a.startDate.localeCompare(b.startDate) || lineNumber(a.name) - lineNumber(b.name);
    if (sort === "deadheadDesc") return getLineDeadheadMinutes(b) - getLineDeadheadMinutes(a) || a.startDate.localeCompare(b.startDate) || lineNumber(a.name) - lineNumber(b.name);
    return a.startDate.localeCompare(b.startDate) || lineNumber(a.name) - lineNumber(b.name);
  };

  const orderedEligibleRows = [
    ...rows.filter(isPureReserveLine).sort(compareReserveRows),
    ...rows.filter((reserve) => !isPureReserveLine(reserve)).sort(compareReserveRows),
  ];
  const availabilityRecord = getActiveAvailabilityReviewRecord("reserves");
  const pendingNewLines = new Set(availabilityRecord?.pending || []);
  if (state.newlyAvailableReviewScope === "reserves" && pendingNewLines.size) {
    const reserveByName = new Map(reserveOnlyLines.map((reserve) => [reserve.name, reserve]));
    const reviewRows = (availabilityRecord?.watched || [])
      .filter((lineName) => pendingNewLines.has(lineName))
      .map((lineName) => reserveByName.get(lineName))
      .filter(Boolean);
    rows = retainSelectedBidRows(reviewRows, reserveOnlyLines);
  } else {
    rows = state.showAvailablePlusSubmittedOnly
      ? orderedEligibleRows.filter((reserve) => isBidLineSelected(reserve.name) || !isFilteredByAvailablePlusSubmitted(reserve.name))
      : orderedEligibleRows;
  }
  rows = pinSelectedBidRows(rows);
  const resultSections = getBidResultSections(rows);
  rows = resultSections.flatMap((section) => section.rows);

  $("reserveCount").textContent = `${rows.length} of ${reserveOnlyLines.length}`;
  setBulkResultSnapshot(
    "reserves",
    rows.map((reserve) => reserve.name),
    state.newlyAvailableReviewScope === "reserves"
      ? availabilityRecord?.watched || []
      : orderedEligibleRows.map((reserve) => reserve.name),
    state.showAvailablePlusSubmittedOnly,
  );
  if (!reserveOnlyLines.length) {
    $("reservesTable").innerHTML = `<tr><td colspan="8" class="empty">No reserve-only lines detected in this bid package.</td></tr>`;
    return;
  }
  const renderReserveGroupHeader = (label, count) => `
    <tr class="reserve-group-header-row">
      <th colspan="8" scope="rowgroup">
        <span>${escapeHtml(label)}</span>
        <strong>${count}</strong>
      </th>
    </tr>
  `;
  const renderReserveRow = (reserve) => {
    const reserveTrips = getLineTripDetails(reserve);
    const reserveRemarks = getVisibleRemarks([
      ...getCrewbidsSeniorityPressureRemarksForLine(reserve.name),
      ...getCrewbidsCrewResultRemarksForLine(reserve.name),
      ...getCrewbidsBuddyBidRemarksForLine(reserve.name),
      ...getCrewbidsBidAvoidRemarksForLine(reserve.name),
      ...reserveTrips.flatMap(getTripRemarks),
    ]);
    const remarksMarkup = canUseReserveResultInsights()
      ? (reserveRemarks.length ? `<div class="remarks-list">${reserveRemarks.map(renderRemarkItem).join("")}</div>` : "")
      : (reserveRemarks.length ? renderPaidDetailPlaceholder("Remarks") : "");
    const bidRank = getBidRank(reserve.name);
    const outbidClass = getCrewbidsOutbidRowClass(reserve.name);
    return `
    <tr class="reserve-summary-row ${bidRank ? "is-bid-selected" : ""} ${getLineAvailabilityRowClass(reserve.name)} ${outbidClass}">
      <td class="name-cell" data-line-name="${reserve.name}">
        <div class="bid-select">
          <input type="checkbox" class="bid-checkbox" data-line-name="${reserve.name}" aria-label="Add ${escapeHtml(reserve.name)} to bid list" ${bidRank ? "checked" : ""}>
          <button type="button" class="line-name line-reveal-target" aria-label="Show ${escapeHtml(reserve.name)} details">${reserve.name}</button>
          ${renderAvailabilityLineBadges(reserve.name, "reserves", pendingNewLines)}
        </div>
      </td>
      <td>${formatCrewCell(reserve.crewComplement)}</td>
      <td>${reserve.credit}</td>
      <td class="number-cell carry-in-cell ${reserve.deadheadCount ? "deadhead-cell" : ""}" data-line-name="${reserve.name}" ${reserve.deadheadCount ? 'tabindex="0"' : ""}>${renderDeadheadCell(reserve)}</td>
      <td>${getReserveWindowLabel(reserve)}</td>
      <td class="number-cell">${reserve.dayCount}</td>
      <td>${renderTripStack(reserve, reserveTrips)}</td>
      <td class="reserve-remarks-cell">${remarksMarkup}${renderReportButton("reserve", reserve.name, "report-button-inline")}</td>
    </tr>
    <tr class="reserve-detail-row ${bidRank ? "is-bid-selected" : ""} ${outbidClass}" aria-label="${escapeHtml(`${reserve.name} detail row`)}">
      <td colspan="7">
        <div class="line-detail-grid reserve-detail-grid">
          <section class="line-detail-panel reserve-detail-remarks">
            <div class="line-detail-heading">
              <span class="line-detail-label">Remarks</span>
            </div>
            <div class="line-detail-action-row reserve-detail-action-row">
              ${remarksMarkup || '<span class="line-detail-empty">None</span>'}
              ${renderReportButton("reserve", reserve.name)}
            </div>
          </section>
        </div>
      </td>
    </tr>
  `;
  };
  const renderReserveSectionRows = (sectionRows, sectionKey) => {
    if (sectionKey === "selected") return sectionRows.map(renderReserveRow).join("");
    const reserveRows = sectionRows.filter(isPureReserveLine);
    const flexRows = sectionRows.filter((reserve) => !isPureReserveLine(reserve));
    const reserveGroups = [];
    if (reserveRows.length) {
      reserveGroups.push(renderReserveGroupHeader("Reserve Lines", reserveRows.length));
      reserveGroups.push(reserveRows.map(renderReserveRow).join(""));
    }
    if (flexRows.length) {
      if (reserveGroups.length) {
        reserveGroups.push(`<tr class="reserve-group-separator-row"><td colspan="8" aria-hidden="true"></td></tr>`);
      }
      reserveGroups.push(renderReserveGroupHeader("Flex Reserve Lines", flexRows.length));
      reserveGroups.push(flexRows.map(renderReserveRow).join(""));
    }
    return reserveGroups.join("");
  };
  $("reservesTable").innerHTML = rows.length
    ? renderBidResultSections("reserves", resultSections, 8, renderReserveSectionRows)
    : emptyRow(8, "reserves");
  bindEmptyResultRecovery("reserves");
  markOutbidAlertsSeenForLines(rows.map((reserve) => reserve.name));

  document.querySelectorAll("#reservesTable .name-cell").forEach((cell) => {
    const reserve = rows.find((entry) => entry.name === cell.dataset.lineName);
    if (!reserve) return;
    bindHoverPopup(cell.querySelector(".line-name"), () => (reserve.isMixedReserveLine ? renderLineRoutePopup(reserve) : renderReserveSchedulePopup(reserve)));
  });

  document.querySelectorAll("#reservesTable .trip-chip").forEach((chip) => {
    const reserve = rows.find((entry) => entry.name === chip.dataset.lineName);
    const trip = getLineTripDetails(reserve || {})[Number(chip.dataset.tripIndex)];
    if (!trip) return;
    bindHoverPopup(chip, () => renderTripRoutePopup(trip));
  });

  document.querySelectorAll("#reservesTable .reserve-chip").forEach((chip) => {
    const reserve = rows.find((entry) => entry.name === chip.dataset.lineReserve);
    if (!reserve) return;
    bindHoverPopup(chip, () => renderLineReservePopup(reserve, Number(chip.dataset.reserveBlock)));
  });

  document.querySelectorAll("#reservesTable .bid-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
    });
    checkbox.addEventListener("change", () => {
      toggleBidLine(checkbox.dataset.lineName);
    });
  });

  document.querySelectorAll("#reservesTable .deadhead-cell").forEach((cell) => {
    const reserve = rows.find((entry) => entry.name === cell.dataset.lineName);
    if (!reserve) return;
    const deadheadDetails = getLineDeadheads(reserve);
    if (!deadheadDetails.length) return;
    bindHoverPopup(cell, () => renderDeadheadPopup(`${reserve.name} Deadheads`, deadheadDetails, true));
  });
  document.querySelectorAll("#reservesTable .report-button").forEach((button) => {
    button.addEventListener("click", () => handleReportButtonClick(button));
  });
  attachRemarkPopups($("reservesTable"));
  updateActiveFilterHighlights();
}

function renderTraining() {
  renderBidListPanel();
  const needle = $("trainingSearch").value.trim().toLowerCase();
  const crew = $("trainingCrew").value;
  const sort = $("trainingSort").value || "lineAsc";
  const start = canUseFeature("trainingFilters") ? $("trainingStart").value : "";
  const placement = canUseFeature("trainingFilters") ? $("trainingPlacement").value : "";

  const trainingOnlyLines = state.data.reserves.filter((reserve) => reserve.isTraining);
  let rows = trainingOnlyLines.filter((reserve) => {
    const isSelected = isBidLineSelected(reserve.name);
    if (state.showBidListOnly) return isSelected;
    if (isSelected) return true;
    const identifierValues = [reserve.name];
    const textValues = [
      reserve.crewComplement,
      reserve.credit,
      reserve.startDate,
      reserve.endDate,
      getCrewbidsLineSearchText(reserve.name),
    ];
    if (!matchesSearchNeedle(needle, identifierValues, textValues)) return false;
    if (crew && reserve.crewComplement !== crew) return false;
    if (start && getReserveWindowLabel(reserve) !== start) return false;
    if (placement && getTrainingPlacement(reserve) !== placement) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceAirportConflict(reserve.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceCountryConflict(reserve.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceRegionConflict(reserve.airports || [])) return false;
    if (shouldUsePreferenceRestrictions() && hasPreferenceSpecialConflict(reserve.airports || [])) return false;
    if (shouldUseAvoidCalendar() && state.avoidDates.size && intersectsAvoidDates((reserve.reserveDays || []).map((entry) => entry.date).filter(Boolean))) return false;
    return true;
  });

  rows.sort((a, b) => {
    if (sort === "lineDesc") return lineNumber(b.name) - lineNumber(a.name);
    return lineNumber(a.name) - lineNumber(b.name);
  });

  const eligibleRows = [...rows];
  const availabilityRecord = getActiveAvailabilityReviewRecord("training");
  const pendingNewLines = new Set(availabilityRecord?.pending || []);
  if (state.newlyAvailableReviewScope === "training" && pendingNewLines.size) {
    const trainingByName = new Map(
      trainingOnlyLines.map((reserve) => [reserve.name, reserve]),
    );
    const reviewRows = (availabilityRecord?.watched || [])
      .filter((lineName) => pendingNewLines.has(lineName))
      .map((lineName) => trainingByName.get(lineName))
      .filter(Boolean);
    rows = retainSelectedBidRows(reviewRows, trainingOnlyLines);
  } else if (state.showAvailablePlusSubmittedOnly) {
    rows = rows.filter((reserve) => isBidLineSelected(reserve.name) || !isFilteredByAvailablePlusSubmitted(reserve.name));
  }
  rows = pinSelectedBidRows(rows);
  const resultSections = getBidResultSections(rows);
  rows = resultSections.flatMap((section) => section.rows);

  $("trainingCount").textContent = `${rows.length} of ${trainingOnlyLines.length}`;
  setBulkResultSnapshot(
    "training",
    rows.map((reserve) => reserve.name),
    state.newlyAvailableReviewScope === "training"
      ? availabilityRecord?.watched || []
      : eligibleRows.map((reserve) => reserve.name),
    state.showAvailablePlusSubmittedOnly,
  );
  const renderTrainingRow = (reserve) => {
    const bidRank = getBidRank(reserve.name);
    const outbidClass = getCrewbidsOutbidRowClass(reserve.name);
    const bidAvoidRemarks = getCrewbidsBidAvoidRemarksForLine(reserve.name);
    const buddyBidRemarks = getCrewbidsBuddyBidRemarksForLine(reserve.name);
    const seniorityPressureRemarks = getCrewbidsSeniorityPressureRemarksForLine(reserve.name);
    const crewResultRemarks = getCrewbidsCrewResultRemarksForLine(reserve.name);
    const alertRemarks = getVisibleRemarks([
      ...seniorityPressureRemarks,
      ...crewResultRemarks,
      ...buddyBidRemarks,
      ...bidAvoidRemarks,
    ]);
    const remarksMarkup = alertRemarks.length
      ? `<div class="remarks-list">${alertRemarks.map(renderRemarkItem).join("")}</div>`
      : '<span class="line-detail-empty">None</span>';
    return `
    <tr class="${bidRank ? "is-bid-selected" : ""} ${getLineAvailabilityRowClass(reserve.name)} ${outbidClass}">
      <td class="name-cell" data-line-name="${reserve.name}">
        <div class="bid-select">
          <input type="checkbox" class="bid-checkbox" data-line-name="${reserve.name}" aria-label="Add ${escapeHtml(reserve.name)} to bid list" ${bidRank ? "checked" : ""}>
          <button type="button" class="line-name line-reveal-target" aria-label="Show ${escapeHtml(reserve.name)} details">${reserve.name}</button>
          ${renderAvailabilityLineBadges(reserve.name, "training", pendingNewLines)}
        </div>
      </td>
      <td>${formatCrewCell(reserve.crewComplement)}</td>
      <td>${reserve.credit}</td>
      <td class="number-cell">${reserve.dayCount}</td>
      <td>${renderTrainingWindowCell(reserve)}</td>
      <td>${(() => {
        const trainingWindow = getReserveTrainingWindow(reserve);
        return renderInlineDateRange(trainingWindow.startDate, trainingWindow.endDate);
      })()}</td>
      <td class="training-pattern-cell">
        <div class="training-pattern-layout">
          ${canUseTrainingResultInsights() ? renderTrainingMiniCalendar(reserve) : renderPaidDetailPlaceholder("Training pattern")}
          ${renderReportButton("training", reserve.name, "report-button-bottom")}
        </div>
      </td>
      <td class="training-remarks-cell">${remarksMarkup}</td>
    </tr>
  `;
  };
  $("trainingTable").innerHTML = rows.length
    ? renderBidResultSections(
      "training",
      resultSections,
      8,
      (sectionRows) => sectionRows.map(renderTrainingRow).join(""),
    )
    : emptyRow(8, "training");
  bindEmptyResultRecovery("training");
  markOutbidAlertsSeenForLines(rows.map((reserve) => reserve.name));

  document.querySelectorAll("#trainingTable .name-cell").forEach((cell) => {
    const reserve = rows.find((entry) => entry.name === cell.dataset.lineName);
    if (!reserve) return;
    bindHoverPopup(cell.querySelector(".line-name"), () => renderReserveSchedulePopup(reserve));
  });

  document.querySelectorAll("#trainingTable .bid-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      hideHoverPopup();
    });
    checkbox.addEventListener("change", () => {
      toggleBidLine(checkbox.dataset.lineName);
    });
  });

  document.querySelectorAll("#trainingTable .report-button").forEach((button) => {
    button.addEventListener("click", () => handleReportButtonClick(button));
  });
  attachRemarkPopups($("trainingTable"));
  updateActiveFilterHighlights();
}

function renderActiveTab() {
  if (!state.data) return;
  syncWorkspaceControlsDeck();
  syncSortOptionsForAccess();
  updateAvailablePlusSubmittedControls();
  if (state.activeTab === "lines") renderLines();
  if (state.activeTab === "trips") renderTrips();
  if (state.activeTab === "reserves") renderReserves();
  if (state.activeTab === "training") renderTraining();
  if (state.activeTab === "selection") renderSelection();
  if (state.activeTab === "submit") renderSelection();
  if (state.activeTab === "preferences") renderPreferences();
  syncSortOptionsForAccess();
  applyAccessLocks();
  applyUi012PreviewLocks();
  updateAvailablePlusSubmittedControls();
  updateActiveFilterHighlights();
  syncLinePanelNavigation();
  BID_PANEL_NAVIGATION_SCOPES.forEach((scope) => {
    if (state.activeTab !== scope) setLinePanelNavigationOpen(false, { scope });
  });
  scheduleLinePanelNavigationHighlight();
  updateStickyOffsets();
}

function setupTabs() {
  document.querySelectorAll(".tab[data-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.feature && !canUseFeature(tab.dataset.feature)) return;
      const tabName = tab.dataset.tab;
      const canPreserveViewTarget = ["lines", "trips", "reserves", "training"].includes(tabName);
      const preservedViewTarget = canPreserveViewTarget ? getActiveSectionJumpTarget() || state.activeViewTarget : "";
      setActiveTab(tab.dataset.tab, {
        scrollToPanel: false,
        userInitiated: true,
        preserveViewTarget: preservedViewTarget,
      });
    });
  });

  const tabList = document.querySelector('.tab-group-primary[role="tablist"]');
  tabList?.addEventListener("keydown", (event) => {
    const currentTab = event.target.closest('[role="tab"]');
    if (!currentTab) return;
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]:not(:disabled)'));
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < 0) return;
    const targetIndex = {
      ArrowLeft: (currentIndex - 1 + tabs.length) % tabs.length,
      ArrowRight: (currentIndex + 1) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[event.key];
    if (targetIndex === undefined) return;
    event.preventDefault();
    tabs[targetIndex].focus();
  });
}

const SECTION_JUMP_TARGETS = new Set(["calendar", "filters", "results"]);

function clearActiveSectionJumpButton() {
  document.querySelectorAll(".tab-jump.is-jump-active").forEach((button) => {
    if (!SECTION_JUMP_TARGETS.has(button.dataset.viewTarget)) return;
    button.classList.remove("is-jump-active");
  });
  state.activeViewTarget = "";
  saveWorkspaceNavigationState();
}

function getActiveSectionJumpTarget() {
  return document.querySelector(".tab-jump.is-jump-active[data-view-target='calendar'], .tab-jump.is-jump-active[data-view-target='filters'], .tab-jump.is-jump-active[data-view-target='results']")?.dataset.viewTarget || "";
}

function setActiveSectionJumpTarget(target) {
  clearActiveSectionJumpButton();
  if (!SECTION_JUMP_TARGETS.has(target)) return;
  state.activeViewTarget = target;
  const button = document.querySelector(`.tab-jump[data-view-target="${target}"]`);
  button?.classList.add("is-jump-active");
  saveWorkspaceNavigationState();
}

function lockActiveSectionJumpTarget(target) {
  if (!SECTION_JUMP_TARGETS.has(target)) return;
  state.lockedViewTarget = target;
  setActiveSectionJumpTarget(target);
}

function unlockActiveSectionJumpTarget() {
  state.lockedViewTarget = "";
}

function getPageJumpElement(target) {
  if (target === "calendar") return document.querySelector(".calendar-panel");
  if (target === "filters") {
    const panel = getActivePanel();
    if (state.activeTab === "selection") return $("selectionFiltersHeader") || panel;
    return getWorkspaceFilters() || panel;
  }
  if (target === "results") return getResultAnchor();
  return null;
}

function getPageJumpAnchors() {
  const anchors = [];
  const calendar = document.querySelector(".calendar-panel");
  const activePanel = getActivePanel();
  const filters = state.activeTab === "selection"
    ? $("selectionFiltersHeader")
    : getWorkspaceFilters();
  const results = getResultAnchor();

  if (calendar) anchors.push({ target: "calendar", element: calendar });
  if (filters) anchors.push({ target: "filters", element: filters });
  if (results) anchors.push({ target: "results", element: results });

  return anchors
    .filter((entry, index, list) => entry.element && list.findIndex((candidate) => candidate.element === entry.element) === index)
    .sort((a, b) => a.element.getBoundingClientRect().top - b.element.getBoundingClientRect().top);
}

let pageJumpHighlightFrame = 0;

function updatePageJumpHighlight() {
  pageJumpHighlightFrame = 0;
  if (state.activeTab === "import") {
    clearActiveSectionJumpButton();
    return;
  }
  if (["selection", "submit"].includes(state.activeTab)) {
    clearActiveSectionJumpButton();
    return;
  }
  if (state.lockedViewTarget && SECTION_JUMP_TARGETS.has(state.lockedViewTarget)) {
    setActiveSectionJumpTarget(state.lockedViewTarget);
    return;
  }

  const anchors = getPageJumpAnchors();
  const threshold = getTabsOffset() + 18;
  const active = anchors.reduce((current, anchor) => (
    anchor.element.getBoundingClientRect().top <= threshold ? anchor.target : current
  ), "");
  setActiveSectionJumpTarget(active);
}

function schedulePageJumpHighlightUpdate() {
  if (pageJumpHighlightFrame) return;
  pageJumpHighlightFrame = requestAnimationFrame(updatePageJumpHighlight);
}

function jumpToActiveTabResults() {
  lockActiveSectionJumpTarget("results");
  requestAnimationFrame(() => {
    scrollElementBelowTabs(getPageJumpElement("results"));
    lockActiveSectionJumpTarget("results");
  });
}

function setupPageJumps() {
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.viewTarget;
      if (target === "calendar") {
        lockActiveSectionJumpTarget(target);
        requestAnimationFrame(() => {
          scrollElementBelowTabs(getPageJumpElement(target));
          lockActiveSectionJumpTarget(target);
        });
        return;
      }

      if (target === "filters") {
        lockActiveSectionJumpTarget(target);
        scrollElementBelowTabs(getPageJumpElement(target));
        lockActiveSectionJumpTarget(target);
        return;
      }

      if (target === "results") {
        jumpToActiveTabResults();
      }
    });
  });

  window.addEventListener("scroll", schedulePageJumpHighlightUpdate, { passive: true });
  window.addEventListener("wheel", unlockActiveSectionJumpTarget, { passive: true });
  window.addEventListener("touchstart", unlockActiveSectionJumpTarget, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
      unlockActiveSectionJumpTarget();
    }
  });
  window.addEventListener("resize", schedulePageJumpHighlightUpdate);
  schedulePageJumpHighlightUpdate();
}

function setupPreferencesControls() {
  $("workspaceAccountLink")?.addEventListener("click", (event) => {
    if (!getCurrentAccountEmail() || isProfilePage()) return;
    event.preventDefault();
    window.location.assign("profile.html");
  });

  const profileButton = $("profileButton");
  if (profileButton && !profileButton.matches("summary")) {
    profileButton.addEventListener("click", () => {
      if (isProfilePage()) return;
      window.location.assign("profile.html");
    });
  }

  $("preferenceDisplayName")?.addEventListener("input", (event) => {
    state.preferences.displayName = event.target.value;
    savePreferences();
    renderProfileButton();
  });

  $("preferenceDisplayName")?.addEventListener("change", () => {
    void queueProfileDetailsAutosave();
  });

  $("preferencePersonalEmail")?.addEventListener("input", (event) => {
    const nextEmail = event.target.value.trim();
    if (state.preferences.personalEmailVerifiedAt) {
      state.personalEmailDraft = nextEmail;
      renderEmailNotificationPreferences();
      return;
    }
    if (normalizeEmail(nextEmail) !== normalizeEmail(state.preferences.personalEmail)) {
      state.preferences.personalEmailVerifiedAt = "";
      state.preferences.outbidNotifications = false;
      state.preferences.newlyAvailableNotifications = false;
      state.preferences.systemNotifications = false;
    }
    state.preferences.personalEmail = nextEmail;
    savePreferences();
    renderEmailNotificationPreferences();
  });

  $("preferenceOutbidNotifications")?.addEventListener("change", (event) => {
    void handleNotificationPreferenceChange("outbidNotifications", event.target.checked === true);
  });

  $("preferenceNewlyAvailableNotifications")?.addEventListener("change", (event) => {
    void handleNotificationPreferenceChange("newlyAvailableNotifications", event.target.checked === true);
  });

  $("preferenceSystemNotifications")?.addEventListener("change", (event) => {
    void handleNotificationPreferenceChange("systemNotifications", event.target.checked === true);
  });

  $("verifyPersonalEmail")?.addEventListener("click", () => {
    requestPersonalEmailVerification().catch((error) => {
      setEmailNotificationFeedback(error.message || "Unable to send the verification email.", "error");
    });
  });

  $("changePersonalEmail")?.addEventListener("click", () => {
    state.personalEmailChangeEditing = true;
    state.personalEmailDraft = state.preferences.personalEmail;
    setEmailNotificationFeedback("");
    renderEmailNotificationPreferences();
    const input = $("preferencePersonalEmail");
    input?.focus();
    input?.select();
  });

  $("cancelPersonalEmailChange")?.addEventListener("click", () => {
    cancelPersonalEmailChange().catch((error) => {
      setEmailNotificationFeedback(error.message || "Unable to cancel this email change.", "error");
    });
  });

  $("preferencePhoneNumber")?.addEventListener("input", (event) => {
    const nextPhone = event.target.value.trim();
    if (nextPhone !== state.preferences.phoneNumber) state.preferences.phoneNumberVerifiedAt = "";
    state.preferences.phoneNumber = nextPhone;
    savePreferences();
    renderPhoneVerificationStatus();
  });

  $("preferencePhoneNumber")?.addEventListener("blur", (event) => {
    const phone = normalizePhoneForStorage(event.target.value);
    if (!phone.error) {
      state.preferences.phoneNumber = phone.value;
      event.target.value = phone.value;
      savePreferences();
      void queueProfileDetailsAutosave();
    }
    renderPhoneVerificationStatus();
  });

  $("preferenceEmployeeNumber")?.addEventListener("input", (event) => {
    state.preferences.employeeNumber = event.target.value.trim();
    savePreferences();
  });

  $("preferenceEmployeeNumber")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || $("verifyProfileEmployeeNumber")?.hidden) return;
    event.preventDefault();
    continueEmployeeIdentityFromProfile();
  });

  $("verifyProfileEmployeeNumber")?.addEventListener("click", () => {
    continueEmployeeIdentityFromProfile();
  });

  $("preferenceSeniorityNumber")?.addEventListener("input", (event) => {
    if (state.preferences.identityConfirmedAt) {
      event.target.value = state.preferences.seniorityNumber || "";
      return;
    }
    state.preferences.seniorityNumber = event.target.value.trim();
    savePreferences();
  });

  $("preferenceWorkEmail")?.addEventListener("input", () => {
    applyAccountIdentityToPreferences();
    renderPreferences();
    savePreferences();
  });

  $("preferencePilotType")?.addEventListener("change", (event) => {
    state.profileAssignmentDraft.fleet = normalizeProfileAssignmentFleet(event.target.value);
    setProfileAssignmentFeedback("");
    renderProfileAssignmentDraftState();
  });

  $("preferenceSeatClass")?.addEventListener("change", (event) => {
    state.profileAssignmentDraft.seat = normalizeProfileAssignmentSeat(event.target.value);
    setProfileAssignmentFeedback("");
    renderProfileAssignmentDraftState();
  });

  $("applyProfileAssignment")?.addEventListener("click", () => {
    applyProfileAssignmentDraft();
  });

  $("discardProfileAssignment")?.addEventListener("click", () => {
    discardProfileAssignmentDraft();
  });

  $("applyRegionPreferences")?.addEventListener("click", () => {
    applyPreferenceChanges();
  });

  $("resetRegionPreferences")?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Reset region preferences?",
      message: "This will clear all avoided-region preferences.",
      confirmLabel: "Yes, reset",
    });
    if (!confirmed) return;
    state.preferences.avoidRegions.clear();
    savePreferences();
    renderPreferences();
  });

  $("applyCountryPreferences")?.addEventListener("click", () => {
    applyPreferenceChanges();
  });

  $("resetCountryPreferences")?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Reset country preferences?",
      message: "This will clear all avoided-country preferences.",
      confirmLabel: "Yes, reset",
    });
    if (!confirmed) return;
    state.preferences.avoidCountries.clear();
    savePreferences();
    renderPreferences();
  });

  $("applyAirportPreferences")?.addEventListener("click", () => {
    applyPreferenceChanges();
  });

  $("resetAirportPreferences")?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Reset airport preferences?",
      message: "This will clear all avoided-airport preferences.",
      confirmLabel: "Yes, reset",
    });
    if (!confirmed) return;
    state.preferences.avoidAirports.clear();
    savePreferences();
    renderPreferences();
  });

  $("applySpecialRestrictions")?.addEventListener("click", () => {
    applyPreferenceChanges();
  });

  $("resetSpecialRestrictions")?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Reset restriction preferences?",
      message: "This will clear all special restriction preferences.",
      confirmLabel: "Yes, reset",
    });
    if (!confirmed) return;
    state.preferences.specialRestrictions.clear();
    savePreferences();
    renderPreferences();
  });

  $("preferenceDefaultTab")?.addEventListener("change", (event) => {
    state.preferences.defaultTab = event.target.value;
    savePreferences();
  });

  $("preferenceTheme")?.addEventListener("change", (event) => {
    state.preferences.theme = event.target.value;
    state.pendingTheme = null;
    savePreferences();
    applyTheme();
  });

  $("preferenceLongStayThreshold")?.addEventListener("change", (event) => {
    const hours = clamp(Number(event.target.value) || DEFAULT_LONG_STAY_THRESHOLD_HOURS, 1, 96);
    state.preferences.longStayThresholdHours = hours;
    event.target.value = hours;
    savePreferences();
    renderActiveTab();
  });

  $("preferenceBreakfastStart")?.addEventListener("change", (event) => {
    const minutes = parseTimeInputToMinutes(event.target.value);
    state.preferences.breakfastStartTime = minutes === null ? DEFAULT_BREAKFAST_START_TIME : formatMinutesAsTimeInput(minutes);
    event.target.value = state.preferences.breakfastStartTime;
    savePreferences();
    renderActiveTab();
  });

  document.querySelectorAll(".preference-help").forEach((button) => {
    button.addEventListener("click", () => {
      openSupportModal(
        button.dataset.helpTitle || "Preference Note",
        "Crew Profile",
        `<p>${escapeHtml(button.dataset.helpMessage || "")}</p>`,
      );
    });
  });

  $("addPreferenceAirport")?.addEventListener("click", () => {
    const input = $("preferenceAirportInput");
    const value = input.value.trim();
    if (!value) return;
    const { codes, rejected } = parseAirportPreferenceInput(value);
    if (!codes.length) {
      input.setCustomValidity("Enter a 3-letter IATA code or a recognized 4-letter airport code.");
      input.reportValidity();
      return;
    }
    codes.forEach((code) => state.preferences.avoidAirports.add(code));
    input.value = "";
    input.setCustomValidity(rejected.length
      ? `Skipped: ${rejected.join(", ")}`
      : "");
    if (rejected.length) {
      input.reportValidity();
      setTimeout(() => input.setCustomValidity(""), 2500);
    }
    savePreferences();
    renderPreferences();
  });

  $("profilePhotoInput")?.addEventListener("change", async (event) => {
    const [file] = [...event.target.files];
    if (!file) return;
    setProfilePhotoStatus("Preparing photo...");
    try {
      state.preferences.avatarDataUrl = await prepareProfilePhoto(file);
      state.preferences.avatarPositionX = 50;
      state.preferences.avatarPositionY = 50;
      savePreferences();
      renderProfileButton();
      renderProfileCropStudio();
      setProfilePhotoStatus("Photo saved and optimized.");
    } catch (error) {
      setProfilePhotoStatus(error.message || "Unable to use this photo.", "error");
    } finally {
      event.target.value = "";
    }
  });

  $("removeProfilePhoto")?.addEventListener("click", () => {
    state.preferences.avatarDataUrl = "";
    state.preferences.avatarPositionX = 50;
    state.preferences.avatarPositionY = 50;
    $("profilePhotoInput").value = "";
    savePreferences();
    renderProfileButton();
    renderProfileCropStudio();
    setProfilePhotoStatus("");
  });

  $("resetPreferences")?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Reset profile?",
      message: "This will reset your profile, theme, default tab, and preference settings.",
      confirmLabel: "Yes, reset",
    });
    if (!confirmed) return;
    state.preferences = defaultPreferences();
    setConfirmedProfileAssignment("", "");
    state.pendingTheme = null;
    savePreferences();
    applyTheme();
    renderPreferences();
    renderActiveTab();
  });
}

function setupTopbarMenus() {
  const menus = [...document.querySelectorAll(".topbar-menu")];
  if (!menus.length) return;

  menus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (!menu.open) return;
      menus.forEach((otherMenu) => {
        if (otherMenu !== menu) otherMenu.open = false;
      });
    });
    menu.querySelectorAll(".topbar-menu-item").forEach((item) => {
      item.addEventListener("click", () => {
        menu.open = false;
      });
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (event.target.closest?.(".topbar-menu")) return;
    menus.forEach((menu) => {
      menu.open = false;
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openMenu = menus.find((menu) => menu.open);
    if (!openMenu) return;
    openMenu.open = false;
    openMenu.querySelector("summary")?.focus();
  });
}

function setupWorkspaceSignOut() {
  $("workspaceSignOutButton")?.addEventListener("click", async () => {
    const button = $("workspaceSignOutButton");
    button.disabled = true;
    button.textContent = "Signing Out...";

    try {
      if (supabaseClient) {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
      }
    } catch (error) {
      console.warn("Remote sign out skipped:", error.message);
      try {
        await supabaseClient?.auth.signOut({ scope: "local" });
      } catch (localError) {
        console.warn("Local sign out fallback skipped:", localError.message);
      }
    } finally {
      await clearOfflineMoneyLineContext();
      clearOfflineAuthEntitlement();
      window.location.href = "login.html";
    }
  });
}

function prepareData(data) {
  state.data = data || structuredClone(EMPTY_DATA);
  state.data.lines ||= [];
  state.data.trips ||= [];
  state.data.reserves ||= [];
  state.data.metadata ||= {};
  state.data.summary ||= structuredClone(EMPTY_DATA.summary);
  state.data.trips.forEach((trip) => {
    trip.date ||= getTripStartDateFromOperates(trip.operates);
    trip.tafbMinutes = parseTimeToMinutes(trip.tafb);
    trip.startAirport = getTripStartAirport(trip);
    trip.endAirport = getTripEndAirport(trip);
    trip.calendar = getTripCalendar(trip);
  });
  state.tripById = new Map(state.data.trips.map((trip) => [String(trip.tripId), trip]));
  applyLineDerivedTripCalendars();
  state.data.lines.forEach((line) => {
    line.isMixedReserveLine = isMixedReserveLine(line);
    line.isFlexReserve = isFlexReserveLine(line);
  });
  state.data.reserves.forEach((reserve) => {
    reserve.isTraining = String(reserve.name).startsWith("Q");
  });
  const reserveNames = new Set(state.data.reserves.map((reserve) => reserve.name));
  state.data.lines
    .filter((line) => line.isMixedReserveLine && !reserveNames.has(line.name))
    .map(toMixedReserveLine)
    .forEach((line) => {
      state.data.reserves.push(line);
      reserveNames.add(line.name);
    });
}

function resetFilterValues() {
  state.avoidDates.clear();
  state.lineAvoidCities.clear();
  document.querySelectorAll(
    ".filters input[type='search'], .filters input[type='number'], #linesPanel select, #tripsPanel select, #reservesPanel select, #trainingPanel select, .calendar-panel input[type='checkbox']"
  ).forEach(resetFilterControl);
}

function renderData(data) {
  prepareData(data);
  setupFilters();
  applyTheme();
  renderProfileButton();
  renderSummary();
  const datasetBanner = $("currentDatasetBanner");
  if (datasetBanner) datasetBanner.textContent = getCurrentDatasetBanner(data);
  scheduleBidWindowBannerUpdates();
  updateImportFleetButtons();
  renderCurrentPackagePanel();
  renderSavedPackagePanel();
  renderGlobalPackageNotice();
  renderAvoidCalendar();
  // Apply cached awards before the first view is built. The remote refresh
  // still rerenders when newer evidence arrives.
  const awardsIdentity = getCurrentBidSelectionIdentity();
  const awardsKey = officialLineAwardsKey(awardsIdentity);
  state.officialLineAwards = awardsKey
    ? loadCachedOfficialLineAwards(awardsIdentity) || { key: awardsKey, available: false, lines: {} }
    : { key: "", available: false, lines: {} };
  renderActiveTab();
  scheduleOfficialLineAwardsRefresh();
  renderCrewbidsMonitoringPanel();
  refreshCrewbidsSeniorNoBidders().catch((error) => console.warn("K4 no-bid status refresh skipped:", error.message));
  scheduleCrewbidsSharedLineProjectionRefresh();
  scheduleCrewbidsBidAvoidAutoCheck();
  updateImportAttentionCue();
  revealWorkspace();
}

function showEmptyData() {
  resetFilterValues();
  renderData(structuredClone(EMPTY_DATA));
}

function shouldStartClean() {
  return new URLSearchParams(window.location.search).get("clean") === "1";
}

function shouldRunIpadTestReset() {
  const params = new URLSearchParams(window.location.search);
  return params.get("ipadTestReset") === "1" || params.get("refresh") === "ipad";
}

function getStartupActiveTab(fallbackTab = state.preferences.defaultTab || "lines") {
  const savedNavigation = loadWorkspaceNavigationState();
  if (savedNavigation.activeViewTarget) state.activeViewTarget = savedNavigation.activeViewTarget;
  const requestedTab = getWorkspaceParams().get("tab");
  const supportedTabs = ["lines", "trips", "reserves", "training", "selection", "submit", "import"];
  const nextTab = supportedTabs.includes(requestedTab)
    ? requestedTab
    : state.startupTabOverride || savedNavigation.activeTab || fallbackTab || "lines";
  state.navigationStateReady = true;
  return nextTab === "preferences" ? "lines" : nextTab;
}

function clearPersistedUserStateForTesting() {
  safeStorage.remove(BID_LIST_STORAGE_KEY);
  safeStorage.remove(PREFERENCES_STORAGE_KEY);
  clearCookie(BID_LIST_COOKIE_KEY);
  clearCookie(PREFERENCES_COOKIE_KEY);
  window.sessionStorage?.clear?.();
  state.bidList = [];
  state.preferences = defaultPreferences();
  state.lastImportFiles = [];
  state.importPendingFleet = "";
  state.importSuccessfulFleet = "";
  state.defaultData = structuredClone(EMPTY_DATA);
  state.data = structuredClone(EMPTY_DATA);
  state.currentSavedPackage = null;
  state.latestSavedPackage = null;
  state.availableSavedPackages = null;
  state.availableGlobalPackage = null;
  state.availableGlobalPackages = null;
  state.currentPackageSource = "";
  clearCurrentWorkspacePackageRef();
  state.avoidDates.clear();
  state.lineAvoidCities.clear();
  state.showBidListOnly = false;
  state.activeTab = "lines";
}

function getImportFleetHint(fileName) {
  const name = String(fileName || "");
  if (/(^|[^0-9])B?747([^0-9]|$)/i.test(name)) return "747";
  if (/(^|[^0-9])B?777([^0-9]|$)/i.test(name)) return "777";
  return "unscoped";
}

function describeImportFleet(fleet) {
  if (fleet === "747") return "B747";
  if (fleet === "777") return "B777";
  return "selected";
}

function getDisplayBidMonth(data = state.data, options = {}) {
  const start = data?.metadata?.start;
  const end = data?.metadata?.end;
  const { month = "short", uppercase = true } = options;
  if (!start || !end) return data?.metadata?.planningPeriod || "current package";
  const startDate = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end}T00:00:00Z`);
  const midpoint = new Date((startDate.getTime() + endDate.getTime()) / 2);
  const label = midpoint.toLocaleDateString(undefined, { month, year: "numeric", timeZone: "UTC" });
  return uppercase ? label.toUpperCase() : label;
}

function getBidWindowInfo(now = new Date()) {
  const year = now.getUTCFullYear();
  const monthIndex = now.getUTCMonth();
  const bidMonth = new Date(Date.UTC(year, monthIndex + 1, 1, 0, 0));
  const scheduledOpenAt = new Date(Date.UTC(year, monthIndex, 12, 23, 59));
  const scheduledCloseAt = new Date(Date.UTC(year, monthIndex, 16, 21, 0));
  const nextMonth = new Date(Date.UTC(year, monthIndex + 2, 1, 0, 0));
  const nextOpenAt = new Date(Date.UTC(nextMonth.getUTCFullYear(), nextMonth.getUTCMonth() - 1, 12, 23, 59));
  return {
    bidMonthKey: `${bidMonth.getUTCFullYear()}-${String(bidMonth.getUTCMonth() + 1).padStart(2, "0")}`,
    monthLabel: bidMonth.toLocaleDateString(undefined, { month: "long", year: "numeric", timeZone: "UTC" }),
    monthShortLabel: bidMonth.toLocaleDateString(undefined, { month: "long", timeZone: "UTC" }).toUpperCase(),
    scheduledOpenAt,
    scheduledCloseAt,
    openAt: state.crewbidsCycle?.bidMonth === `${bidMonth.getUTCFullYear()}-${String(bidMonth.getUTCMonth() + 1).padStart(2, "0")}`
      && state.crewbidsCycle?.effectiveOpenAt ? new Date(state.crewbidsCycle.effectiveOpenAt) : scheduledOpenAt,
    closeAt: state.crewbidsCycle?.bidMonth === `${bidMonth.getUTCFullYear()}-${String(bidMonth.getUTCMonth() + 1).padStart(2, "0")}`
      && state.crewbidsCycle?.effectiveCloseAt ? new Date(state.crewbidsCycle.effectiveCloseAt) : scheduledCloseAt,
    isEarlyRelease: Boolean(state.crewbidsCycle?.isEarlyRelease),
    nextMonthLabel: nextMonth.toLocaleDateString(undefined, { month: "long", timeZone: "UTC" }),
    nextOpenAt,
  };
}

function isCurrentBidPackageAvailableForWindow(info) {
  const packageMonth = getPackageBidMonthFromData(state.data);
  return Boolean(
    info?.bidMonthKey
    && packageMonth === info.bidMonthKey
    && hasLoadedPackageData()
    && ["saved", "vetted", "local"].includes(state.currentPackageSource)
  );
}

function formatBidWindowDuration(milliseconds) {
  const totalHours = Math.max(0, Math.ceil(milliseconds / (60 * 60 * 1000)));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  if (days <= 0) return `${hours} hour${hours === 1 ? "" : "s"}`;
  return `${days} day${days === 1 ? "" : "s"} and ${hours} hour${hours === 1 ? "" : "s"}`;
}

function formatBidWindowCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatBidWindowDate(date) {
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", timeZone: "UTC" });
}

function getOrdinalDay(day) {
  if (day >= 11 && day <= 13) return `${day}th`;
  const suffix = { 1: "st", 2: "nd", 3: "rd" }[day % 10] || "th";
  return `${day}${suffix}`;
}

function formatBidWindowOpenDate(date) {
  const month = date.toLocaleDateString(undefined, { month: "long", timeZone: "UTC" });
  return `${month} ${getOrdinalDay(date.getUTCDate())}`;
}

function getBidWindowBannerState(now = new Date()) {
  const info = getBidWindowInfo(now);
  if (!info) {
    return {
      message: "BID WINDOW INFORMATION. STANDBY.",
      tone: "neutral",
    };
  }
  const nowMs = now.getTime();
  const openMs = info.openAt.getTime();
  const closeMs = info.closeAt.getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  const oneHourMs = 60 * 60 * 1000;
  const sevenDaysMs = 7 * oneDayMs;
  const month = info.monthShortLabel;

  if (info.isEarlyRelease && nowMs < info.scheduledOpenAt.getTime() && nowMs >= openMs) {
    return {
      message: "Bids have been released early. You may begin using CrewBidPro.",
      tone: "open",
    };
  }

  if (nowMs < openMs) {
    if (isCurrentBidPackageAvailableForWindow(info)) {
      return {
        message: `${month} bids are currently available.`,
        tone: "open",
      };
    }
    if (openMs - nowMs <= oneHourMs) {
      return {
        message: `Bid window for ${month} opens in ${formatBidWindowCountdown(openMs - nowMs)}.`,
        tone: "opening-soon",
        countdown: true,
      };
    }
    if (openMs - nowMs <= oneDayMs) {
      return {
        message: `Bid window for ${month} opens in ${formatBidWindowDuration(openMs - nowMs)}.`,
        tone: "opening-soon",
      };
    }
    if (openMs - nowMs <= sevenDaysMs) {
      return {
        message: `Bid window for ${month} opens in ${formatBidWindowDuration(openMs - nowMs)}.`,
        tone: "opening-soon",
      };
    }
    return {
      message: `Bid window for ${month} opens on ${formatBidWindowOpenDate(info.scheduledOpenAt)} at 2359Z.`,
      tone: "neutral",
    };
  }

  if (nowMs <= closeMs) {
    if (closeMs - nowMs <= oneHourMs) {
      return {
        message: `Bid window for ${month} closes in ${formatBidWindowCountdown(closeMs - nowMs)}.`,
        tone: "closing-soon",
        countdown: true,
      };
    }
    if (closeMs - nowMs <= oneDayMs) {
      return {
        message: `Bid window for ${month} closes in ${formatBidWindowDuration(closeMs - nowMs)}.`,
        tone: "closing-soon",
      };
    }
    return {
      message: `Bid window for ${month} is open and closes in ${formatBidWindowDuration(closeMs - nowMs)}.`,
      tone: "open",
    };
  }

  // The CBA schedule is useful guidance, but K4 can extend an individual bid
  // window operationally. Keep this state advisory: CrewBids monitoring,
  // import, refresh, and submission must remain available after closeMs.
  return {
    message: `The ${month} bid window is closed.\nCrewBidPro services remain available.`,
    tone: "closed",
  };
}

function renderBidWindowBanner() {
  const banner = $("bidWindowBanner");
  const message = $("bidWindowMessage");
  if (!banner || !message) return;
  const status = getBidWindowBannerState();
  banner.className = "bid-window-banner";
  banner.classList.add(`is-${status.tone}`);
  banner.classList.toggle("is-countdown", Boolean(status.countdown));
  message.textContent = status.message;
  return status;
}

async function refreshCrewbidsCycleState() {
  state.crewbidsCycleCheckInFlight = false;
}

function scheduleBidWindowBannerUpdates() {
  if (state.bidWindowTimer) window.clearTimeout(state.bidWindowTimer);
  const tick = async () => {
    if (Date.now() - state.crewbidsCycleCheckedAt >= 60 * 1000) await refreshCrewbidsCycleState();
    const status = renderBidWindowBanner();
    state.bidWindowTimer = window.setTimeout(tick, status?.countdown ? 1000 : 60 * 1000);
  };
  tick().catch((error) => console.warn("Bid window banner refresh skipped:", error.message));
}

function getCurrentDatasetBanner() {
  return "Viewing October 2026 - 777 Bids";
}

function formatPackageTimestamp(value) {
  if (!value) return "Not saved yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not saved yet";
  return `${new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(date)}Z`;
}

function formatCrewbidsEvidenceTimestamp(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

function formatPackageBidMonth(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{4})-(\d{2})$/);
  if (!match) return text;
  const [, year, month] = match;
  const date = new Date(`${year}-${month}-01T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return text;
  return date.toLocaleDateString(undefined, { month: "long", year: "numeric", timeZone: "UTC" });
}

function formatPackageFleet(value) {
  return ["747", "777"].includes(value) ? describeImportFleet(value) : value || "None";
}

function normalizePackageFleetValues(value) {
  if (Array.isArray(value)) return value.map(String);
  return String(value || "")
    .split(/[,/|+&\s]+/)
    .map((fleet) => fleet.trim())
    .filter(Boolean);
}

function getPackageCoverageLabel(value, options = {}) {
  const { prefixB = false, includeOnly = true } = options;
  const fleets = new Set(normalizePackageFleetValues(value)
    .map((fleet) => fleet.replace(/^B/i, ""))
    .filter((fleet) => fleet === "747" || fleet === "777"));
  const label = (fleet) => `${prefixB ? "B" : ""}${fleet}`;
  const singleFleetLabel = (fleet) => `${label(fleet)}${includeOnly ? " only" : ""}`;
  if (fleets.has("747") && fleets.has("777")) return `${label("777")} & ${label("747")}`;
  if (fleets.has("777")) return singleFleetLabel("777");
  if (fleets.has("747")) return singleFleetLabel("747");
  return value ? String(value) : "None";
}

function getPackageTitle(packageInfo, fallback = "No package found") {
  if (!packageInfo) return fallback;
  const month = formatPackageBidMonth(packageInfo.bidMonth) || "Package";
  const coverage = getPackageCoverageLabel(packageInfo.fleet, { includeOnly: false });
  return `${month} - ${coverage}`;
}

function getPackageFleetMetaLabel(value) {
  return getPackageCoverageLabel(value, { includeOnly: false }).replace(" & ", " / ");
}

function getPackageFleetSet(packagesByFleet = {}) {
  return new Set(PACKAGE_FLEETS.filter((fleet) => packagesByFleet?.[fleet]?.package));
}

function getPackageAvailabilityTitle(packagesByFleet = {}, fallback = "No package found") {
  const packageInfos = PACKAGE_FLEETS
    .map((fleet) => normalizeSavedPackageInfo(packagesByFleet?.[fleet]?.package) || normalizeGlobalPackageInfo(packagesByFleet?.[fleet]?.package))
    .filter(Boolean);
  if (!packageInfos.length) return fallback;
  const month = formatPackageBidMonth(packageInfos[0].bidMonth) || "Package";
  const availableFleets = getPackageFleetSet(packagesByFleet);
  const fleetLabel = getPackageCoverageLabel([...availableFleets], { includeOnly: false });
  return `${month} - ${fleetLabel}`;
}

function getPackageAvailabilityMonth(packagesByFleet = {}) {
  const info = PACKAGE_FLEETS
    .map((fleet) => normalizeSavedPackageInfo(packagesByFleet?.[fleet]?.package) || normalizeGlobalPackageInfo(packagesByFleet?.[fleet]?.package))
    .find(Boolean);
  return info?.bidMonth ? formatPackageBidMonth(info.bidMonth) : "Not loaded";
}

function getPackageAvailabilityPeriod(packagesByFleet = {}) {
  const info = PACKAGE_FLEETS
    .map((fleet) => normalizeSavedPackageInfo(packagesByFleet?.[fleet]?.package) || normalizeGlobalPackageInfo(packagesByFleet?.[fleet]?.package))
    .find(Boolean);
  return info?.planningPeriod || "Not loaded";
}

function getPackageAvailabilityTimestamp(packagesByFleet = {}) {
  return PACKAGE_FLEETS
    .map((fleet) => normalizeSavedPackageInfo(packagesByFleet?.[fleet]?.package))
    .filter(Boolean)
    .map((info) => info.lastSavedAt || info.lastOpenedAt || "")
    .sort()
    .at(-1) || "";
}

function getGlobalPackageAvailabilityTimestamp(packagesByFleet = {}) {
  return PACKAGE_FLEETS
    .map((fleet) => normalizeGlobalPackageInfo(packagesByFleet?.[fleet]?.package))
    .filter(Boolean)
    .map((info) => info.publishedAt || info.updatedAt || "")
    .sort()
    .at(-1) || "";
}

function getPackageActionLabel(packageInfo, fallback) {
  const info = packageInfo || {};
  const month = formatPackageBidMonth(info.bidMonth);
  const fleet = getPackageCoverageLabel(info.fleet, { prefixB: true, includeOnly: false });
  if (month && fleet && fleet !== "None") return `Load ${month} ${fleet}`;
  return fallback;
}

function hasLoadedPackageData() {
  return Boolean(state.data?.metadata?.start && state.data?.metadata?.end);
}

function getLoadedPackageSummary() {
  if (!state.data?.metadata?.start || !state.data?.metadata?.end) return null;
  return {
    fleet: detectFleetType() || "Unknown",
    bidMonth: getDisplayBidMonth(state.data),
    planningPeriod: state.data.metadata.planningPeriod || "Not available",
    lastSavedAt: state.currentSavedPackage?.lastSavedAt || state.currentSavedPackage?.lastOpenedAt || "",
  };
}

function normalizeSavedPackageInfo(packageInfo = {}) {
  if (!packageInfo || typeof packageInfo !== "object") return null;
  if (!packageInfo.id && !packageInfo.fleet && !packageInfo.bidMonth && !packageInfo.bid_month && !packageInfo.planningPeriod && !packageInfo.planning_period) return null;
  return {
    id: packageInfo.id || "",
    fleet: packageInfo.fleet || "",
    bidMonth: packageInfo.bidMonth || packageInfo.bid_month || "",
    planningPeriod: packageInfo.planningPeriod || packageInfo.planning_period || "",
    lastSavedAt: packageInfo.updated_at || packageInfo.updatedAt || packageInfo.lastSavedAt || "",
    lastOpenedAt: packageInfo.last_opened_at || packageInfo.lastOpenedAt || "",
  };
}

function normalizeGlobalPackageInfo(packageInfo = {}) {
  if (!packageInfo || typeof packageInfo !== "object") return null;
  if (!packageInfo.id && !packageInfo.fleet && !packageInfo.bidMonth && !packageInfo.bid_month && !packageInfo.planningPeriod && !packageInfo.planning_period) return null;
  return {
    id: packageInfo.id || "",
    fleet: packageInfo.fleet || "",
    bidMonth: packageInfo.bidMonth || packageInfo.bid_month || "",
    planningPeriod: packageInfo.planningPeriod || packageInfo.planning_period || "",
    status: packageInfo.status || "",
    publishedAt: packageInfo.published_at || packageInfo.publishedAt || "",
    updatedAt: packageInfo.updated_at || packageInfo.updatedAt || "",
  };
}

function renderCurrentPackagePanel() {
  const title = $("currentPackageTitle");
  const status = $("currentPackageStatus");
  if (!title || !status) return;

  const loaded = getLoadedPackageSummary();
  if (!loaded) {
    title.textContent = "Please upload or select a bid package.";
    status.textContent = "Please upload or select a bid package.";
    setOfflinePackageStatus("Load a package online to make it available offline.");
    return;
  }

  const sourceLabels = {
    saved: "Source: Uploaded by User",
    vetted: "Source: CrewBidPro",
    local: "Source: Local workspace data",
  };
  title.textContent = `${loaded.bidMonth} - ${getPackageCoverageLabel(loaded.fleet, { includeOnly: false })}`;
  if (state.currentPackageSource === "vetted" && state.availableGlobalPackage?.package) {
    const updatedAt = state.availableGlobalPackage.package.publishedAt || state.availableGlobalPackage.package.updatedAt || "";
    status.textContent = updatedAt
      ? `${sourceLabels.vetted}. Official package last updated ${formatPackageTimestamp(updatedAt)}.`
      : sourceLabels.vetted;
    return;
  }
  status.textContent = sourceLabels[state.currentPackageSource] || "This is the package currently shown in the workspace.";
}

function renderSavedPackagePanel() {
  const title = $("savedPackageTitle");
  const status = $("savedPackageStatus");
  const fleet = $("savedPackageFleet");
  const month = $("savedPackageMonth");
  const period = $("savedPackagePeriod");
  const savedAt = $("savedPackageSavedAt");
  const removeButton = $("removeUploadedPackages");
  if (!title || !status || !month || !period || !savedAt) return;

  const packagesByFleet = state.availableSavedPackages || {};
  const availableFleets = getPackageFleetSet(packagesByFleet);
  const hasAccount = Boolean(getCurrentAccountEmail());
  title.textContent = getPackageAvailabilityTitle(packagesByFleet, "No files found. Please upload a package.");
  status.textContent = availableFleets.size > 1
    ? "All fleet packages available. Select one to load."
    : availableFleets.has("777")
      ? "777 package available."
      : availableFleets.has("747")
        ? "747 package available."
        : hasAccount
          ? "Import new files to create your account copy."
          : "Sign in to save and reload uploaded packages.";
  if (fleet) fleet.textContent = availableFleets.size ? getPackageCoverageLabel([...availableFleets], { includeOnly: false }) : "None";
  month.textContent = availableFleets.size ? getPackageAvailabilityMonth(packagesByFleet) : "No data available.";
  period.textContent = getPackageAvailabilityPeriod(packagesByFleet);
  savedAt.textContent = availableFleets.size ? formatPackageTimestamp(getPackageAvailabilityTimestamp(packagesByFleet)) : "No previous uploads.";
  PACKAGE_FLEETS.forEach((packageFleet) => {
    const button = $(`loadSavedPackage${packageFleet}`);
    if (!button) return;
    const isAvailable = availableFleets.has(packageFleet);
    const isActive = state.currentPackageSource === "saved" && detectFleetType() === packageFleet;
    button.disabled = !hasAccount || !isAvailable;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("is-ghost", !isAvailable);
  });
  if (removeButton) removeButton.disabled = !hasAccount || !availableFleets.size;
}

function renderGlobalPackageNotice() {
  const notice = $("globalPackageNotice");
  const title = $("globalPackageTitle");
  const summary = $("globalPackageSummary");
  const savedAt = $("globalPackageSavedAt");
  const month = $("globalPackageMonth");
  if (!notice || !title || !summary) return;
  const packagesByFleet = state.availableGlobalPackages || {};
  const availableFleets = getPackageFleetSet(packagesByFleet);
  notice.classList.toggle("is-empty", !availableFleets.size);
  if (!availableFleets.size) {
    title.textContent = "No packages available at this time.";
    summary.textContent = "When available, buttons will be enabled.";
    if (savedAt) savedAt.textContent = "No previous uploads.";
    if (month) month.textContent = "No data available.";
    PACKAGE_FLEETS.forEach((packageFleet) => {
      const button = $(`loadGlobalPackage${packageFleet}`);
      if (button) {
        button.disabled = true;
        button.classList.add("is-ghost");
        button.classList.remove("is-active");
      }
    });
    return;
  }
  title.textContent = getPackageAvailabilityTitle(packagesByFleet, "CrewBidPro package available");
  const lastUpdatedAt = getGlobalPackageAvailabilityTimestamp(packagesByFleet);
  summary.textContent = lastUpdatedAt
    ? `Official CrewBids package last updated ${formatPackageTimestamp(lastUpdatedAt)}.`
    : "Please choose an option below.";
  if (savedAt) savedAt.textContent = lastUpdatedAt ? formatPackageTimestamp(lastUpdatedAt) : "No previous uploads.";
  if (month) month.textContent = getPackageAvailabilityMonth(packagesByFleet);
  PACKAGE_FLEETS.forEach((packageFleet) => {
    const button = $(`loadGlobalPackage${packageFleet}`);
    if (!button) return;
    const isAvailable = availableFleets.has(packageFleet);
    const isActive = state.currentPackageSource === "vetted" && detectFleetType() === packageFleet;
    button.disabled = !isAvailable;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("is-ghost", !isAvailable);
  });
}

function scanImportPackages(files) {
  const packages = new Map();
  const ignoredFiles = [];
  const duplicates = [];
  const ensurePackage = (fleet) => {
    if (!packages.has(fleet)) packages.set(fleet, { overview: null, trips: null, lines: null, seniority: null });
    return packages.get(fleet);
  };

  files.forEach((file) => {
    const lowerName = file.name.toLowerCase();
    const fleet = getImportFleetHint(lowerName);
    const bucket = ensurePackage(fleet);

    if (/\.xlsx$/i.test(file.name) && /overview/i.test(lowerName)) {
      if (bucket.overview) {
        duplicates.push(file.name);
      } else {
        bucket.overview = file;
      }
      return;
    }

    if (/\.xlsx$/i.test(file.name) && /bid list/i.test(lowerName)) {
      if (bucket.seniority) {
        duplicates.push(file.name);
      } else {
        bucket.seniority = file;
      }
      return;
    }

    if (/\.pdf$/i.test(file.name) && /\btrips?\b/i.test(lowerName)) {
      if (bucket.trips) {
        duplicates.push(file.name);
      } else {
        bucket.trips = file;
      }
      return;
    }

    if (/\.pdf$/i.test(file.name) && /\blines?\b/i.test(lowerName) && !/training requirements/i.test(lowerName)) {
      if (bucket.lines) {
        duplicates.push(file.name);
      } else {
        bucket.lines = file;
      }
      return;
    }

    ignoredFiles.push(file.name);
  });

  const unscopedSeniority = packages.get("unscoped")?.seniority || null;
  if (unscopedSeniority) {
    packages.forEach((pkg, fleet) => {
      if (fleet !== "unscoped" && !pkg.seniority) pkg.seniority = unscopedSeniority;
    });
  }

  const completePackages = [...packages.entries()].filter(([, pkg]) => pkg.overview && pkg.trips && pkg.lines);
  return { packages, ignoredFiles, duplicates, completePackages };
}

function getUploadedFleetSummary(files = []) {
  if (!files?.length) return detectFleetType() || "Unknown";
  const { completePackages } = scanImportPackages(files);
  if (!completePackages.length) return detectFleetType() || "Unknown";
  return completePackages.map(([fleet]) => describeImportFleet(fleet)).join(" and ");
}

const getAvailableImportFleets = (files = []) => {
  if (files.length) {
    return new Set(scanImportPackages(files).completePackages.map(([fleet]) => fleet).filter((fleet) => fleet === "747" || fleet === "777"));
  }
  const loadedFleet = detectFleetType();
  return new Set(loadedFleet ? [loadedFleet] : []);
};

function getImportReadyStatusMessage(files = []) {
  const fleets = [...getAvailableImportFleets(files)].sort();
  if (fleets.includes("747") && fleets.includes("777")) {
    return "All fleet files successfully uploaded. Navigate to the AVAILABLE PACKAGES section and confirm your choice.";
  }
  if (fleets.includes("777")) {
    return "777 files successfully uploaded. Select them below.";
  }
  if (fleets.includes("747")) {
    return "747 files successfully uploaded. Select them below.";
  }
  return "No files chosen.";
}

async function loadLatestSavedBidPackage(preferredFleetOverride = "", options = {}) {
  const headers = await getSupabaseAuthHeaders(options);
  if (!hasWorkspaceAuthHeaders(headers)) return null;
  const preferredFleet = preferredFleetOverride || "";
  const query = ["747", "777"].includes(preferredFleet)
    ? `?fleet=${encodeURIComponent(preferredFleet)}`
    : "";
  try {
    const response = await fetchWithWorkspaceTimeout(`/api/bid-packages/latest${query}`, {
      cache: "no-store",
      headers,
    });
    const payload = await response.json().catch(() => ({}));
    if (response.status === 404) return null;
    if (!response.ok || !payload.data) throw new Error(payload.error || "Saved package unavailable");
    return payload;
  } catch (error) {
    console.warn("Saved bid package unavailable:", error.message);
    return null;
  }
}

async function loadSavedPackageAvailability(options = {}) {
  const entries = await Promise.all(PACKAGE_FLEETS.map(async (fleet) => {
    const payload = await loadLatestSavedBidPackage(fleet, options);
    if (!payload?.data || detectFleetType(payload.data) !== fleet) return [fleet, null];
    return [fleet, payload];
  }));
  return Object.fromEntries(entries.filter(([, payload]) => payload));
}

async function loadLatestGlobalBidPackage(preferredFleetOverride = "") {
  const headers = await getSupabaseAuthHeaders();
  if (!hasWorkspaceAuthHeaders(headers)) return null;
  const preferredFleet = preferredFleetOverride || "";
  const fleetQueries = ["747", "777"].includes(preferredFleet) ? [preferredFleet] : PACKAGE_FLEETS;
  const fetchLatestForFleet = async (fleet) => {
    const response = await fetchWithWorkspaceTimeout(`/api/global-bid-packages/latest?fleet=${encodeURIComponent(fleet)}`, {
      cache: "no-store",
      headers,
    });
    const payload = await response.json().catch(() => ({}));
    if (response.status === 404) return null;
    if (!response.ok || !payload.data) throw new Error(payload.error || "Global package unavailable");
    return payload;
  };
  try {
    const results = await Promise.all(fleetQueries.map(async (fleet) => {
      try {
        return await fetchLatestForFleet(fleet);
      } catch (error) {
        console.warn(`Global ${fleet} bid package unavailable:`, error.message);
        return null;
      }
    }));
    const primary = results.find(Boolean);
    if (!primary) return null;
    return primary;
  } catch (error) {
    console.warn("Global bid package unavailable:", error.message);
    return null;
  }
}

async function loadGlobalPackageAvailability() {
  const entries = await Promise.all(PACKAGE_FLEETS.map(async (fleet) => {
    const payload = await loadLatestGlobalBidPackage(fleet);
    if (!payload?.data || detectFleetType(payload.data) !== fleet) return [fleet, null];
    return [fleet, payload];
  }));
  return Object.fromEntries(entries.filter(([, payload]) => payload));
}

function updateImportFleetStatus(successfulFleet, availableFleets) {
  const status = $("importFleetStatus");
  if (!status) return;
  const hasSuccessfulFleet = ["747", "777"].includes(successfulFleet);
  const hasPendingFleet = ["747", "777"].includes(state.importPendingFleet);
  const needsChoice = !hasSuccessfulFleet && !hasPendingFleet && availableFleets.size > 1;
  status.classList.toggle("is-active", hasSuccessfulFleet);
  status.textContent = hasSuccessfulFleet
    ? `Viewing ${describeImportFleet(successfulFleet)}`
    : hasPendingFleet
      ? `Loading ${describeImportFleet(state.importPendingFleet)}`
    : needsChoice
      ? "Choose fleet"
      : "No fleet selected";
}

function updateImportFleetButtons(files = [...($("importFiles")?.files || []), ...state.lastImportFiles]) {
  const referenceFiles = state.lastImportFiles.length ? state.lastImportFiles : files;
  const availableFleets = getAvailableImportFleets(referenceFiles);
  const hasDetectedFleet = availableFleets.size > 0;
  const successfulFleet = state.importSuccessfulFleet;

  updateImportFleetStatus(successfulFleet, availableFleets);

  document.querySelectorAll("[data-import-fleet]").forEach((button) => {
    const fleet = button.dataset.importFleet;
    const isActive = fleet === successfulFleet;
    const isDetected = availableFleets.has(fleet);
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("is-detected", !isActive && isDetected);
    button.classList.toggle("is-ghost", !isActive && !isDetected);
    button.disabled = Boolean(hasDetectedFleet && !isDetected);
  });
}

function finalizeImportFleetSelection(fleet, files) {
  if (!["747", "777"].includes(fleet)) return;
  state.importPendingFleet = "";
  state.importSuccessfulFleet = fleet;
  updateImportFleetButtons(state.lastImportFiles.length ? state.lastImportFiles : files);
  requestAnimationFrame(() => updateImportFleetButtons(state.lastImportFiles.length ? state.lastImportFiles : files));
}

function setImportStatus(message, tone = "neutral", isHtml = false) {
  const status = $("importStatus");
  if (!status) return;
  status.classList.remove("is-error", "is-success", "is-processing");
  status.hidden = !message;
  if (tone === "error") status.classList.add("is-error");
  if (tone === "success") status.classList.add("is-success");
  if (tone === "processing") status.classList.add("is-processing");
  if (isHtml) {
    status.innerHTML = message;
  } else {
    status.textContent = message;
  }
}

function validateImportFiles(files, preferredFleetOverride = "") {
  if (!files.length) {
    return { error: "Choose the Overview workbook plus Trips and Lines PDFs." };
  }
  const unsupported = files.filter((file) => !/\.(xlsx|pdf)$/i.test(file.name));

  if (unsupported.length) {
    return { error: `Unsupported file type: ${unsupported.map((file) => file.name).join(", ")}. Upload Excel workbooks and PDFs only.` };
  }

  const { packages, ignoredFiles, duplicates, completePackages } = scanImportPackages(files);
  if (!completePackages.length) {
    return {
      errorHtml: `I couldn't find a complete package for the same fleet in what was selected. Please upload <strong>OVERVIEW WORKBOOK (.XLSX)</strong> + <strong>TRIPS PDF</strong> + <strong>LINES PDF</strong> together.`,
    };
  }

  let selectedFleet = "unscoped";
  const preferredFleet = preferredFleetOverride || state.preferences.pilotType;
  if (preferredFleet !== "any") {
    const match = completePackages.find(([fleet]) => fleet === preferredFleet);
    if (!match) {
      const detectedFleet = completePackages.map(([fleet]) => describeImportFleet(fleet)).join(" and ");
      return { error: `Your Fleet Type is set to ${describeImportFleet(preferredFleet)}, but the uploaded files appear to be a ${detectedFleet} package. Upload ${describeImportFleet(preferredFleet)} files or change Fleet Type before importing.` };
    }
    selectedFleet = preferredFleet;
  } else if (completePackages.length === 1) {
    selectedFleet = completePackages[0][0];
  } else {
    selectedFleet = completePackages[0][0];
  }

  const selectedPackage = packages.get(selectedFleet);
  const chosenFiles = [selectedPackage.overview, selectedPackage.trips, selectedPackage.lines, selectedPackage.seniority].filter(Boolean);
  const alternatePackages = completePackages.filter(([fleet]) => fleet !== selectedFleet);
  const noteParts = [`Using the ${describeImportFleet(selectedFleet)} package.`];
  if (alternatePackages.length) {
    noteParts.push(`Also found ${alternatePackages.map(([fleet]) => describeImportFleet(fleet)).join(" and ")} package${alternatePackages.length === 1 ? "" : "s"}.`);
  }
  if (ignoredFiles.length) {
    noteParts.push(`Ignoring ${ignoredFiles.length} extra file${ignoredFiles.length === 1 ? "" : "s"} that are not used by the parser.`);
  }
  const statusNote = noteParts.join(" ");

  if (duplicates.length) {
    return { error: `I found duplicate candidate files: ${duplicates.join(", ")}. Please keep just one Overview, one Trips PDF, and one Lines PDF for the same fleet.` };
  }

  return {
    selectedFleet,
    overviewFile: selectedPackage.overview,
    tripsFile: selectedPackage.trips,
    linesFile: selectedPackage.lines,
    chosenFiles,
    alternatePackages,
    ignoredFiles,
    statusNote,
  };
}

async function parseAndSaveImportPackage(packageFiles) {
  const formData = new FormData();
  packageFiles.forEach((file) => formData.append("documents", file));
  const [overviewFile, tripsFile, linesFile, seniorityFile] = packageFiles;
  formData.append("overview", overviewFile);
  formData.append("trips", tripsFile);
  formData.append("lines", linesFile);
  if (seniorityFile) formData.append("seniority", seniorityFile);
  const response = await fetch("/api/parse", {
    method: "POST",
    headers: await getSupabaseAuthHeaders({ forceRemote: true }),
    body: formData,
  });
  const payload = await response.json();
  if (!response.ok || !payload.data) throw new Error(payload.error || `HTTP ${response.status}`);
  if (payload.packageSaveError) {
    console.warn("Bid package parsed locally but was not saved to Supabase:", payload.packageSaveError);
  }
  return payload;
}

async function importSelectedFiles(selectedFiles, preferredFleetOverride = "") {
  const validation = validateImportFiles(selectedFiles, preferredFleetOverride);
  if (validation.error) {
    state.importPendingFleet = "";
    setImportStatus(validation.error, "error");
    updateImportFleetButtons(selectedFiles);
    return { ok: false };
  }
  if (validation.errorHtml) {
    state.importPendingFleet = "";
    setImportStatus(validation.errorHtml, "error", true);
    updateImportFleetButtons(selectedFiles);
    return { ok: false };
  }
  if (validation.needsProfileSelection) {
    state.importPendingFleet = "";
    setImportStatus(validation.statusNote || "Please select a crew profile to view.");
    updateImportFleetButtons(selectedFiles);
    return { ok: false, needsProfileSelection: true };
  }

  state.importPendingFleet = validation.selectedFleet;
  state.importSuccessfulFleet = "";
  updateImportFleetButtons(validation.chosenFiles || selectedFiles);
  const importFleetNames = [
    validation.selectedFleet,
    ...(validation.alternatePackages || []).map(([fleet]) => fleet),
  ].map(describeImportFleet);
  const importPackageLabel = importFleetNames.length > 1
    ? `${importFleetNames.join(" and ")} bid packages`
    : "bid package";
  setImportStatus(`STANDBY. Preparing ${importPackageLabel}...`, "processing");

  const payload = await parseAndSaveImportPackage(validation.chosenFiles || selectedFiles);
  const savedFleets = new Set([validation.selectedFleet]);
  const saveErrors = [];
  if (payload.packageSaveError) {
    saveErrors.push(`${describeImportFleet(validation.selectedFleet)}: ${payload.packageSaveError}`);
  }

  for (const [alternateFleet, alternatePackage] of validation.alternatePackages || []) {
    const alternateFiles = [alternatePackage.overview, alternatePackage.trips, alternatePackage.lines, alternatePackage.seniority].filter(Boolean);
    if (alternateFiles.length < 3) continue;
    try {
      const alternatePayload = await parseAndSaveImportPackage(alternateFiles);
      if (alternatePayload.packageSaveError) {
        saveErrors.push(`${describeImportFleet(alternateFleet)}: ${alternatePayload.packageSaveError}`);
      }
      savedFleets.add(alternateFleet);
    } catch (error) {
      console.warn(`Alternate ${alternateFleet} package was not saved:`, error.message);
      saveErrors.push(`${describeImportFleet(alternateFleet)}: ${error.message}`);
    }
  }

  state.availableSavedPackages = await loadSavedPackageAvailability({ forceRemote: true });
  const refreshedSavedPackage = state.availableSavedPackages?.[validation.selectedFleet] || payload;
  state.latestSavedPackage = normalizeSavedPackageInfo(refreshedSavedPackage?.package || payload.package) || state.latestSavedPackage;
  state.importSuccessfulFleet = validation.selectedFleet;
  state.importPendingFleet = "";
  const availableSavedFleets = getPackageFleetSet(state.availableSavedPackages);
  const missingSavedFleets = [...savedFleets].filter((fleet) => !availableSavedFleets.has(fleet));
  if (missingSavedFleets.length) {
    const missingLabel = missingSavedFleets.sort().map(describeImportFleet).join(" and ");
    const saveDetail = saveErrors.length
      ? ` ${saveErrors.join("; ")}`
      : " Refresh this page before importing again to confirm your account connection.";
    setImportStatus(`${missingLabel} files parsed locally, but were not saved to your account.${saveDetail}`, "error");
    if (saveErrors.length) console.warn("Supabase package save failed:", saveErrors.join("; "));
    renderSavedPackagePanel();
    renderGlobalPackageNotice();
    document.activeElement?.blur?.();
    return { ok: false };
  }
  const readyMessage = savedFleets.size > 1
    ? "All fleet files successfully uploaded. Navigate to the AVAILABLE PACKAGES section and confirm your choice."
    : getImportReadyStatusMessage(selectedFiles);
  setImportStatus(readyMessage, "success");
  renderSavedPackagePanel();
  renderGlobalPackageNotice();
  document.activeElement?.blur?.();
  return { ok: true };
}

async function selectImportFleet(fleet, triggerButton = null) {
  const selectedFiles = [...($("importFiles")?.files || [])];
  const files = selectedFiles.length ? selectedFiles : state.lastImportFiles;

  if (!files.length) {
    state.importPendingFleet = "";
    setImportStatus(getImportReadyStatusMessage());
    updateImportFleetButtons(files);
    return;
  }

  state.lastImportFiles = files;
  state.importPendingFleet = fleet;
  state.importSuccessfulFleet = "";
  updateImportFleetButtons(files);
  setImportStatus(`STANDBY. Loading ${describeImportFleet(fleet)} view...`, "processing");
  try {
    await importSelectedFiles(files, fleet);
  } catch (error) {
    state.importPendingFleet = "";
    updateImportFleetButtons(files);
    setImportStatus(getImportFailureMessage(error), "error");
    console.error(error);
  }
}

function setupImportControls() {
  const executeButton = $("executeImport");
  const resetButton = $("resetImport");
  const removeButton = $("removeUploadedPackages");
  if (!executeButton || !resetButton) return;

  $("importFiles")?.addEventListener("change", () => {
    const selectedFiles = [...$("importFiles").files];
    state.lastImportFiles = selectedFiles;
    state.importPendingFleet = "";
    state.importSuccessfulFleet = "";
    updateImportFleetButtons(selectedFiles);
    setImportStatus(selectedFiles.length ? "Files chosen. Click Import." : "No files chosen.");
  });

  executeButton.addEventListener("click", async () => {
    const selectedFiles = [...$("importFiles").files];
    state.lastImportFiles = selectedFiles;
    state.importPendingFleet = "";
    state.importSuccessfulFleet = "";
    updateImportFleetButtons(selectedFiles);
    executeButton.disabled = true;
    try {
      await importSelectedFiles(selectedFiles);
    } catch (error) {
      state.importPendingFleet = "";
      updateImportFleetButtons(selectedFiles);
      setImportStatus(getImportFailureMessage(error), "error");
      console.error(error);
    } finally {
      executeButton.disabled = false;
    }
  });

  resetButton.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Reset import workspace?",
      message: "This will clear the uploaded package, selected lines, and current workspace data.",
      confirmLabel: "Yes, reset",
    });
    if (!confirmed) return;
    $("importFiles").value = "";
    state.lastImportFiles = [];
    state.importPendingFleet = "";
    state.importSuccessfulFleet = "";
    state.currentSavedPackage = null;
    state.currentPackageSource = "";
    clearCurrentWorkspacePackageRef();
    updateImportFleetButtons([]);
    resetBidWorkspace();
    showEmptyData();
    setImportStatus("No files chosen.");
  });

  removeButton?.addEventListener("click", async () => {
    const confirmed = await confirmDestructiveAction({
      title: "Remove your uploaded packages?",
      message: "This permanently removes all of your private uploaded bid packages. CrewBidPro's official packages and your account are not affected.",
      confirmLabel: "Remove my uploads",
    });
    if (!confirmed) return;
    removeButton.disabled = true;
    try {
      const response = await fetch("/api/bid-packages", {
        method: "DELETE",
        headers: await getSupabaseAuthHeaders({ forceRemote: true }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Unable to remove uploaded packages");
      state.availableSavedPackages = {};
      state.latestSavedPackage = null;
      if (state.currentPackageSource === "saved") {
        state.currentSavedPackage = null;
        state.currentPackageSource = "";
        clearCurrentWorkspacePackageRef();
        showEmptyData();
      }
      renderSavedPackagePanel();
      setImportStatus(payload.deletedCount === 1 ? "Your uploaded package was removed." : "Your uploaded packages were removed.", "success");
    } catch (error) {
      setImportStatus(error.message || "Unable to remove uploaded packages.", "error");
    } finally {
      renderSavedPackagePanel();
    }
  });

  document.querySelectorAll("[data-package-source='saved'][data-package-fleet]").forEach((button) => {
    button.addEventListener("click", async () => {
      const packageFleet = button.dataset.packageFleet;
      if (hasLoadedPackageData()) {
        const confirmed = await confirmDestructiveAction({
          title: "Replace current package?",
          message: `This will replace the package currently shown in the workspace with your uploaded ${packageFleet} package.`,
          confirmLabel: `Load ${packageFleet}`,
        });
        if (!confirmed) return;
      }
      button.disabled = true;
      try {
        const savedPackage = state.availableSavedPackages?.[packageFleet] || await loadLatestSavedBidPackage(packageFleet);
        if (!savedPackage?.data) {
          setImportStatus(`${packageFleet} uploaded package is not available.`, "error");
          return;
        }
        clearVisibleBidWorkspaceForPackageLoad();
        resetFilterValues();
        state.currentSavedPackage = normalizeSavedPackageInfo(savedPackage.package);
        state.latestSavedPackage = state.currentSavedPackage;
        state.defaultData = savedPackage.data;
        state.importPendingFleet = "";
        state.importSuccessfulFleet = detectFleetType(savedPackage.data);
        state.currentPackageSource = "saved";
        saveCurrentWorkspacePackageRef("saved", packageFleet);
        setOfflinePackageStatus(`Saving ${packageFleet} uploaded package for offline use...`, "neutral");
        const offlineReady = await saveOfflinePackageCache({
          source: "saved",
          fleet: packageFleet,
          packageInfo: state.currentSavedPackage,
          data: savedPackage.data,
        });
        await restoreBidSelectionForCurrentPackage(savedPackage.data);
        renderData(savedPackage.data);
        setOfflinePackageStatus(
          offlineReady
            ? `Offline ready: ${getPackageTitle(state.currentSavedPackage, `${packageFleet} uploaded package`)} cached.`
            : "Offline cache could not be updated in this browser.",
          offlineReady ? "ready" : "error",
        );
        setActiveTab("lines", { userInitiated: true, scrollToPanel: true });
      } catch (error) {
        setImportStatus(`${packageFleet} uploaded package load failed. ${error.message}`, "error");
      } finally {
        renderSavedPackagePanel();
        renderGlobalPackageNotice();
      }
    });
  });

  document.querySelectorAll("[data-package-source='global'][data-package-fleet]").forEach((button) => {
    button.addEventListener("click", async () => {
      const packageFleet = button.dataset.packageFleet;
      if (hasLoadedPackageData()) {
        const confirmed = await confirmDestructiveAction({
          title: "Replace current package?",
          message: `This will replace the package currently shown in the workspace with CrewBidPro's ${packageFleet} package.`,
          confirmLabel: `Load ${packageFleet}`,
        });
        if (!confirmed) return;
      }
      button.disabled = true;
      try {
        const globalPackage = state.availableGlobalPackages?.[packageFleet] || await loadLatestGlobalBidPackage(packageFleet);
        if (!globalPackage?.data) {
          setImportStatus(`${packageFleet} CrewBidPro package is not available.`, "error");
          renderGlobalPackageNotice();
          return;
        }
        clearVisibleBidWorkspaceForPackageLoad();
        resetFilterValues();
        state.availableGlobalPackage = {
          package: normalizeGlobalPackageInfo(globalPackage.package),
          data: globalPackage.data,
        };
        state.currentSavedPackage = null;
        state.defaultData = globalPackage.data;
        state.importPendingFleet = "";
        state.importSuccessfulFleet = detectFleetType(globalPackage.data);
        state.currentPackageSource = "vetted";
        saveCurrentWorkspacePackageRef("vetted", packageFleet);
        setOfflinePackageStatus(`Saving ${packageFleet} CrewBidPro package for offline use...`, "neutral");
        const offlineReady = await saveOfflinePackageCache({
          source: "vetted",
          fleet: packageFleet,
          packageInfo: state.availableGlobalPackage.package,
          data: globalPackage.data,
        });
        await restoreBidSelectionForCurrentPackage(globalPackage.data);
        renderData(globalPackage.data);
        setOfflinePackageStatus(
          offlineReady
            ? `Offline ready: ${getPackageTitle(state.availableGlobalPackage.package, `${packageFleet} CrewBidPro package`)} cached.`
            : "Offline cache could not be updated in this browser.",
          offlineReady ? "ready" : "error",
        );
        setActiveTab("lines", { userInitiated: true, scrollToPanel: true });
      } catch (error) {
        setImportStatus(`${packageFleet} CrewBidPro package load failed. ${error.message}`, "error");
      } finally {
        renderSavedPackagePanel();
        renderGlobalPackageNotice();
      }
    });
  });
}

async function restoreCurrentWorkspacePackage() {
  const ref = loadCurrentWorkspacePackageRef();
  if (!ref) return false;
  const profileFleet = getProfileFleetPreference();
  const assignmentUpdatedAt = Date.parse(state.preferences.assignmentUpdatedAt || "") || 0;
  if (profileFleet && ref.fleet !== profileFleet && assignmentUpdatedAt > Number(ref.at || 0)) {
    clearCurrentWorkspacePackageRef();
    return false;
  }
  let packagePayload = ref.source === "saved"
    ? state.availableSavedPackages?.[ref.fleet] || await loadLatestSavedBidPackage(ref.fleet)
    : state.availableGlobalPackages?.[ref.fleet] || await loadLatestGlobalBidPackage(ref.fleet);
  if (!packagePayload?.data) {
    const cached = await loadOfflinePackageCache(ref.source, ref.fleet);
    if (cached?.data) {
      packagePayload = {
        package: cached.package || { fleet: ref.fleet },
        data: cached.data,
        offline: true,
      };
    }
  }
  if (!packagePayload?.data || detectFleetType(packagePayload.data) !== ref.fleet) {
    clearCurrentWorkspacePackageRef();
    return false;
  }
  state.defaultData = packagePayload.data;
  state.importPendingFleet = "";
  state.importSuccessfulFleet = ref.fleet;
  state.currentPackageSource = ref.source;
  if (ref.source === "saved") {
    state.currentSavedPackage = normalizeSavedPackageInfo(packagePayload.package);
    state.latestSavedPackage = state.currentSavedPackage;
  } else {
    state.currentSavedPackage = null;
    state.availableGlobalPackage = {
      package: normalizeGlobalPackageInfo(packagePayload.package),
      data: packagePayload.data,
    };
  }
  await restoreBidSelectionForCurrentPackage(packagePayload.data);
  await releaseWorkspaceVerificationBeforeHeavyRender();
  renderData(packagePayload.data);
  setOfflinePackageStatus(
    packagePayload.offline
      ? `Offline mode: cached ${getPackageTitle(packagePayload.package, `${ref.fleet} package`)} restored.`
      : `Offline ready: ${getPackageTitle(packagePayload.package, `${ref.fleet} package`)} cached.`,
    packagePayload.offline ? "offline" : "ready",
  );
  setImportStatus(
    packagePayload.offline
      ? `Offline mode. Restored cached ${ref.fleet} ${ref.source === "saved" ? "uploaded" : "CrewBidPro"} package.`
      : `Restored ${ref.fleet} ${ref.source === "saved" ? "uploaded" : "CrewBidPro"} package.`,
    "success",
  );
  return true;
}

async function loadPreferredVettedPackage() {
  const profileFleet = getProfileFleetPreference();
  if (!profileFleet) return false;
  const packagePayload = state.availableGlobalPackages?.[profileFleet] || await loadLatestGlobalBidPackage(profileFleet);
  if (!packagePayload?.data || detectFleetType(packagePayload.data) !== profileFleet) return false;
  state.defaultData = packagePayload.data;
  state.currentSavedPackage = null;
  state.availableGlobalPackage = {
    package: normalizeGlobalPackageInfo(packagePayload.package),
    data: packagePayload.data,
  };
  state.importPendingFleet = "";
  state.importSuccessfulFleet = profileFleet;
  state.currentPackageSource = "vetted";
  saveCurrentWorkspacePackageRef("vetted", profileFleet);
  await restoreBidSelectionForCurrentPackage(packagePayload.data);
  await releaseWorkspaceVerificationBeforeHeavyRender();
  renderData(packagePayload.data);
  setOfflinePackageStatus(`Offline ready: ${getPackageTitle(state.availableGlobalPackage.package, `${profileFleet} CrewBidPro package`)} cached.`, "ready");
  setImportStatus(`Loaded ${profileFleet} CrewBidPro package from Crew Profile.`, "success");
  saveOfflinePackageCache({
    source: "vetted",
    fleet: profileFleet,
    packageInfo: state.availableGlobalPackage.package,
    data: packagePayload.data,
  }).catch((error) => console.warn("Preferred package cache skipped:", error.message));
  return true;
}

async function hydrateProfilePreferencePackageData() {
  const ref = loadCurrentWorkspacePackageRef();
  let packagePayload = null;
  if (ref) {
    const cached = await loadOfflinePackageCache(ref.source, ref.fleet);
    if (cached?.data && detectFleetType(cached.data) === ref.fleet) {
      packagePayload = cached;
    } else if (navigator.onLine !== false) {
      packagePayload = ref.source === "saved"
        ? await loadLatestSavedBidPackage(ref.fleet)
        : await loadLatestGlobalBidPackage(ref.fleet);
    }
  }

  if (!packagePayload?.data && !shouldUseRemoteWorkspaceServices()) {
    try {
      const response = await fetch(`data/bid-data.json?t=${Date.now()}`, { cache: "no-store" });
      if (response.ok) {
        packagePayload = { data: await response.json() };
      }
    } catch (error) {
      console.warn("Profile package preference data unavailable:", error.message);
    }
  }

  prepareData(packagePayload?.data || structuredClone(EMPTY_DATA));
}

async function loadData() {
  if (!(await requireWorkspaceSession())) return;
  if (shouldResetLocalProfile()) {
    clearLocalCrewProfileState();
  }
  if (shouldResetOnboardingPreview()) {
    clearNewUserPreviewState();
  }
  setupSupportTools();
  setupTopbarMenus();
  setupConfirmTools();
  setupEmployeeIdentityModal();
  setupWorkspaceConnectivityWorkflow();
  if (isProfilePage()) {
    if (shouldResetOnboardingPreview() && shouldOpenFirstTimeProfile()) {
      window.location.assign("workspace.html?firstTime=1&profileCheck=1&onboardingPreview=1");
      return;
    }
    loadBidList();
    loadPreferences();
    applyTheme();
    await hydrateWorkspaceAccountIdentity();
    loadSupportMessages().catch((error) => console.warn("Support messages unavailable:", error.message));
    await hydrateWorkspaceAdminLink();
    applyAccountIdentityToPreferences();
    await hydrateMissingPersonnelMetrics();
    if (shouldRequireProfileIdentity() && !shouldBypassProfileIdentityLogin() && !getCurrentAccountEmail()) {
      redirectToLoginForProfileIdentity();
      return;
    }
    await loadSubscriptionAccessState();
    state.defaultData = structuredClone(EMPTY_DATA);
    await hydrateProfilePreferencePackageData();
    await Promise.all([refreshCrewbidsBidAvoidRules(), refreshCrewbidsBuddyBidRules()]);
    await loadBidResultsReport();
    setupDevTierToggle();
    setupPreferencesControls();
    setupProfileAssignmentNavigationGuard();
    setupCrewbidsMonitoringControls();
    setupProfileBidAvoidControls();
    setupEmployeeIdentityModal();
    setupProfileCropStudio();
    setupWorkspaceSignOut();
    setupCheckoutReturnHandling();
    renderPreferences();
    refreshProfileMonthlyBidRankEstimate().catch((error) => console.warn("Profile monthly bid rank refresh failed:", error.message));
    refreshCrewbidsMonitoringState().catch((error) => console.warn("CrewBids access refresh failed:", error.message));
    applyAccessLocks();
    handleCheckoutReturnState();
    return;
  }
  const ipadTestReset = shouldRunIpadTestReset();
  if (ipadTestReset) {
    clearPersistedUserStateForTesting();
  }
  loadBidList();
  loadPreferences();
  applyTheme();
  setupWorkspaceScrollPersistence();
  setupTabs();
  revealWorkspace();
  startWorkspaceVerificationWatchdog();
  loadSupportMessages().catch((error) => console.warn("Support messages unavailable:", error.message));
  await withWorkspaceStartupTimeout(
    hydrateWorkspaceAccountIdentity(),
    WORKSPACE_AUTH_TIMEOUT_MS,
    "Workspace identity",
  ).catch((error) => console.warn("Workspace identity verification timed out:", error.message));
  loadRemarkPillVisibilityPreferences();
  loadFatigueScoreVisibilityPreference();
  loadLineStartTimeVisibilityPreference();
  await hydrateMoneyLineState();
  const adminLinkPromise = hydrateWorkspaceAdminLink();
  applyAccountIdentityToPreferences();
  hydrateMissingPersonnelMetrics().catch((error) => console.warn("Personnel metrics refresh skipped:", error.message));
  if (requireCrewProfileFleetForWorkspace()) return;
  await withWorkspaceStartupTimeout(
    loadSubscriptionAccessState(),
    WORKSPACE_REMOTE_TIMEOUT_MS,
    "Subscription verification",
  ).catch((error) => console.warn("Subscription verification timed out:", error.message));
  loadBidResultsReport().then(() => {
    if (!hasLoadedPackageData()) return;
    renderProjectedBidResult(getSelectedBidDetails({ applyFilters: false }));
  });
  setupPageJumps();
  setupLinePanelNavigation();
  setupLineViewControls();
  setupSiteUpdateWorkflow();
  setupNewUserSplash();
  setupK4ConnectionPrompt();
  setupHoverPopupDismissal();
  setupAccordions();
  setupDevTierToggle();
  setupBidListControls();
  setupBidResultSectionControls();
  setupBulkSelectionControls();
  setupSelectionExportControls();
  setupMoneyLineControls();
  setupRemarkPillVisibilityControls();
  setupFatigueScoreControls();
  setupLineStartTimeControls();
  setupCrewbidsMonitoringControls();
  setupImportControls();
  setupPreferencesControls();
  setupProfileCropStudio();
  setupWorkspaceSignOut();
  setupCheckoutReturnHandling();
  updateStickyOffsets();
  window.addEventListener("resize", updateStickyOffsets);
  revealWorkspace();
  // refreshCrewbidsMonitoringState().catch((error) => console.warn("CrewBids monitoring refresh failed:", error.message));
  scheduleStartupNotices().catch((error) => {
    console.warn("CrewBids restoration notice check skipped:", error.message);
    if (!openDeveloperSplashNote()) scheduleNewUserSplash();
  });
  adminLinkPromise.catch((error) => console.warn("Admin link unavailable:", error.message));
  if (ipadTestReset || shouldStartClean()) {
    state.lastImportFiles = [];
    state.importPendingFleet = "";
    state.importSuccessfulFleet = "";
    state.defaultData = structuredClone(EMPTY_DATA);
    state.data = structuredClone(EMPTY_DATA);
    clearCurrentWorkspacePackageRef();
    $("importFiles").value = "";
    setImportStatus(ipadTestReset ? "No files chosen. iPad test reset is active." : "No files chosen.");
    state.activeTab = getStartupActiveTab(ipadTestReset ? "lines" : state.preferences.defaultTab || "lines");
    showEmptyData();
    setActiveTab(state.activeTab);
    restoreWorkspaceScrollAfterHydration();
    if (shouldOpenProfileSetup()) openProfileSetup();
    handleCheckoutReturnState();
    markWorkspaceVerified();
    return;
  }
  try {
    if (shouldUseRemoteWorkspaceServices() && navigator.onLine === false) {
      setOfflinePackageStatus("Offline mode: restoring last cached package...", "offline");
      state.activeTab = getStartupActiveTab();
      await hydrateOfflinePackageAvailability();
      renderGlobalPackageNotice();
      renderSavedPackagePanel();
      if (await restoreCurrentWorkspacePackage()) {
        setActiveTab(state.activeTab, { skipRender: true });
      } else {
        showEmptyData();
        setImportStatus("Offline mode. No cached package was found for this browser.", "error");
      }
      restoreWorkspaceScrollAfterHydration();
      if (shouldOpenProfileSetup()) openProfileSetup();
      handleCheckoutReturnState();
      markWorkspaceVerified();
      return;
    }

    setOfflinePackageStatus("Checking available bid packages...", "neutral");
    const [
      availableGlobalPackages,
      availableSavedPackages,
    ] = await Promise.all([
      loadGlobalPackageAvailability(),
      loadSavedPackageAvailability(),
    ]);
    state.availableGlobalPackages = availableGlobalPackages;
    state.availableSavedPackages = availableSavedPackages;
    await hydrateOfflinePackageAvailability();
    state.availableGlobalPackage = Object.values(state.availableGlobalPackages)[0] || null;
    state.latestSavedPackage = normalizeSavedPackageInfo(Object.values(state.availableSavedPackages)[0]?.package);
    renderGlobalPackageNotice();
    renderSavedPackagePanel();
    const profileFleet = getProfileFleetPreference();
    setOfflinePackageStatus("Preparing package cache for offline use...", "neutral");
    prepareAvailablePackagesForOffline().catch((error) => {
      console.warn("Offline package preparation skipped:", error.message);
    });

    if (shouldUseRemoteWorkspaceServices()) {
      state.defaultData = structuredClone(EMPTY_DATA);
      state.data = structuredClone(EMPTY_DATA);
      state.currentSavedPackage = null;
      state.importPendingFleet = "";
      state.importSuccessfulFleet = "";
      state.currentPackageSource = "";
      state.activeTab = getStartupActiveTab();
      if (await restoreCurrentWorkspacePackage()) {
        setActiveTab(state.activeTab, { skipRender: true });
        restoreWorkspaceScrollAfterHydration();
        if (shouldOpenProfileSetup()) openProfileSetup();
        handleCheckoutReturnState();
        markWorkspaceVerified();
        return;
      }
      if (profileFleet && await loadPreferredVettedPackage()) {
        setActiveTab(state.activeTab, { skipRender: true });
        restoreWorkspaceScrollAfterHydration();
        if (shouldOpenProfileSetup()) openProfileSetup();
        handleCheckoutReturnState();
        markWorkspaceVerified();
        return;
      }
      showEmptyData();
      setImportStatus("No files chosen.");
      setActiveTab(state.activeTab);
      restoreWorkspaceScrollAfterHydration();
      if (shouldOpenProfileSetup()) openProfileSetup();
      handleCheckoutReturnState();
      markWorkspaceVerified();
      return;
    }

    const response = await fetch(`data/bid-data.json?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.defaultData = data;
    state.currentSavedPackage = null;
    state.importPendingFleet = "";
    state.importSuccessfulFleet = detectFleetType(data);
    state.currentPackageSource = "local";
    clearCurrentWorkspacePackageRef();
    state.activeTab = getStartupActiveTab();
    await restoreBidSelectionForCurrentPackage(data);
    await releaseWorkspaceVerificationBeforeHeavyRender();
    renderData(data);
    setImportStatus("No files chosen.");
    setActiveTab(state.activeTab, { skipRender: true });
    restoreWorkspaceScrollAfterHydration();
    if (shouldOpenProfileSetup()) openProfileSetup();
    handleCheckoutReturnState();
    markWorkspaceVerified();
    console.log(`Lines: ${state.data.lines.length}, Trips: ${state.data.trips.length}, Total trip instances: ${state.data.lines.reduce((sum, line) => sum + line.trips.length, 0)}`);
  } catch (error) {
    // A package may already be fully rendered before a later startup task
    // (such as restoring the view, opening a return modal, or a background
    // check) fails. Do not replace that verified package with the empty
    // workspace merely because that unrelated follow-up task did not finish.
    const recoverablePackage = hasLoadedPackageData()
      ? state.data
      : state.defaultData?.metadata?.start && state.defaultData?.metadata?.end
        ? state.defaultData
        : null;
    if (recoverablePackage) {
      try {
        if (!hasLoadedPackageData()) renderData(recoverablePackage);
        setImportStatus("Bid package ready. A background check will retry.", "neutral");
      } catch (recoveryError) {
        console.error("Workspace package recovery failed:", recoveryError);
      }
    } else {
      showEmptyData();
    }
    markWorkspaceVerified();
    console.error(error);
  }
}

scheduleSupportToolsFallback();
startUserActivityHeartbeat();
loadData();
