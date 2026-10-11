// src/data/appstoreApps.ts
// Centralized, typed application registry for Prometrion Appstore
// Fully integrated with Android GitHub Releases specification

export interface AppstoreApp {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: "Developer Tools" | "Artificial Intelligence" | "Security & Utilities" | string;
  developer: string;
  icon?: string;
  screenshots?: string[];
  features: string[];
  platforms: string | string[];
  currentVersion?: string;
  releaseDate?: string;
  releaseNotes?: string;
  githubRepositoryUrl?: string | null;
  githubReleaseUrl?: string | null;
  apkDownloadUrl?: string | null;
  apkFileSize?: string;
  minimumAndroidVersion?: string;
  packageIdentifier?: string;
  downloadAvailability: "available" | "release_only" | "coming_soon";
  privacyPolicyUrl?: string;
  permissions?: string[];

  // Backwards-compatibility aliases for existing templates
  desc: string;
  platform: string;
  version: string;
  fileSize?: string;
  minSdk?: string;
  apkUrl?: string | null;
}

export const appstoreCategories = [
  "Developer Tools",
  "Artificial Intelligence",
  "Security & Utilities",
] as const;

export const appstoreApps: AppstoreApp[] = [
  {
    id: "prometrion-console",
    slug: "prometrion-console",
    name: "Prometrion Console",
    developer: "Prometrion Core Labs",
    category: "Developer Tools",
    shortDescription: "Mobile dashboard to monitor serverless workloads, inspect edge metrics, trigger build rollbacks, and view live logs in real time.",
    fullDescription: "Prometrion Console is an administrative mobile companion engineered for platform developers, DevOps teams, and cloud administrators. It delivers real-time observability across edge computing nodes, continuous deployment pipelines, and serverless compute clusters directly from Android devices. Features include instantaneous build rollback execution, live tailing of distributed execution logs, latency heatmap visualizers, and granular incident management notifications.",
    features: [
      "Real-time edge telemetry and latency monitoring across global Points of Presence (PoPs)",
      "Live log streaming with instant log search, filtering, and error highlight tagging",
      "One-tap deployment rollback and automated build pipeline status tracking",
      "Incident alert notifications with configurable escalation thresholds",
      "Dark-optimized telemetry charts built for mobile system inspections"
    ],
    platforms: "Android (Universal)",
    currentVersion: "2.4.1",
    releaseDate: "Upcoming Q4 Release",
    releaseNotes: "Initial mobile client release for edge deployment monitoring, live incident alerts, and edge cluster telemetry.",
    githubRepositoryUrl: null,
    githubReleaseUrl: null,
    apkDownloadUrl: null,
    apkFileSize: "14.2 MB",
    minimumAndroidVersion: "Android 10.0 (API 29)",
    packageIdentifier: "com.prometrion.console",
    downloadAvailability: "coming_soon",
    privacyPolicyUrl: "/privacy",
    permissions: ["INTERNET", "ACCESS_NETWORK_STATE", "POST_NOTIFICATIONS"],

    // Backwards-compatibility aliases
    desc: "Mobile dashboard to monitor serverless workloads, inspect edge metrics, trigger build rollbacks, and view live logs in real time.",
    platform: "Android (Universal)",
    version: "2.4.1",
    fileSize: "14.2 MB",
    minSdk: "Android 10.0 (API 29)",
    apkUrl: null
  },
  {
    id: "taluq-mobile",
    slug: "taluq-mobile",
    name: "Taluq Agent Mobile",
    developer: "Prometrion AI Labs",
    category: "Artificial Intelligence",
    shortDescription: "Voice and multimodal agent client. Execute complex coding, data synthesis, and workflow operations straight from your phone.",
    fullDescription: "Taluq Agent Mobile is a multimodal artificial intelligence workstation optimized for mobile devices. Powered by distributed LLM reasoning pipelines, Taluq provides bidirectional audio streaming, instant visual context processing, and automated coding workflow execution. Users can capture camera frames of whiteboard diagrams or UI layouts, receive architectural feedback, execute shell tasks remotely, and orchestrate automated workflows on the go.",
    features: [
      "Bidirectional low-latency audio streaming for conversational coding assistance",
      "Multimodal visual capture for architecture diagrams, wireframes, and error screens",
      "Agent task orchestration with autonomous plan generation and step-by-step confirmation",
      "End-to-end encrypted session persistence between desktop and mobile environments",
      "On-device audio preprocessing for crisp voice capture even in loud environments"
    ],
    platforms: "Android (arm64-v8a)",
    currentVersion: "2.0.0",
    releaseDate: "Upcoming Q4 Release",
    releaseNotes: "Multimodal audio streaming client, low-latency agent reasoning pipelines, and remote workflow triggers.",
    githubRepositoryUrl: null,
    githubReleaseUrl: null,
    apkDownloadUrl: null,
    apkFileSize: "28.6 MB",
    minimumAndroidVersion: "Android 11.0 (API 30)",
    packageIdentifier: "com.prometrion.taluq",
    downloadAvailability: "coming_soon",
    privacyPolicyUrl: "/privacy",
    permissions: ["INTERNET", "RECORD_AUDIO", "CAMERA", "VIBRATE"],

    // Backwards-compatibility aliases
    desc: "Voice and multimodal agent client. Execute complex coding, data synthesis, and workflow operations straight from your phone.",
    platform: "Android (arm64-v8a)",
    version: "2.0.0",
    fileSize: "28.6 MB",
    minSdk: "Android 11.0 (API 30)",
    apkUrl: null
  },
  {
    id: "secure-auth-key",
    slug: "secure-auth-key",
    name: "Secure Auth Key",
    developer: "Prometrion Security",
    category: "Security & Utilities",
    shortDescription: "Hardware-backed FIDO2 / Passkey authenticator for Prometrion Accounts and enterprise SSO environments.",
    fullDescription: "Secure Auth Key transforms modern Android hardware into an enterprise-grade cryptographic security key. Utilizing Android's Hardware Keystore and Secure Enclave (TEE / StrongBox), Secure Auth Key supports WebAuthn / FIDO2 passkey creation, time-based one-time password (TOTP) generation, and zero-knowledge synchronization across approved devices. Designed specifically for zero-trust environments requiring phishing-resistant authentication.",
    features: [
      "Hardware-backed cryptographic key generation via StrongBox / Android Keystore",
      "FIDO2 and WebAuthn standard compliance for passwordless authentication",
      "Biometric authentication guard (Fingerprint & Facial Unlock) for all private key operations",
      "Camera QR scanner for instant passkey pairing and TOTP seed import",
      "Zero-knowledge encrypted local vault with zero telemetry or analytical tracking"
    ],
    platforms: "Android (Universal)",
    currentVersion: "1.1.2",
    releaseDate: "Upcoming Q4 Release",
    releaseNotes: "Hardware Keystore cryptographic attestation, biometric passkey enrollment, and encrypted cloud synchronization.",
    githubRepositoryUrl: null,
    githubReleaseUrl: null,
    apkDownloadUrl: null,
    apkFileSize: "8.7 MB",
    minimumAndroidVersion: "Android 9.0 (API 28)",
    packageIdentifier: "com.prometrion.authkey",
    downloadAvailability: "coming_soon",
    privacyPolicyUrl: "/privacy",
    permissions: ["USE_BIOMETRIC", "INTERNET", "CAMERA"],

    // Backwards-compatibility aliases
    desc: "Hardware-backed FIDO2 / Passkey authenticator for Prometrion Accounts and enterprise SSO environments.",
    platform: "Android (Universal)",
    version: "1.1.2",
    fileSize: "8.7 MB",
    minSdk: "Android 9.0 (API 28)",
    apkUrl: null
  },
  {
    id: "coders-club-guild",
    slug: "coders-club-guild",
    name: "Coders Club Guild Client",
    developer: "Prometrion Community",
    category: "Developer Tools",
    shortDescription: "Live hacker challenges, peer reviews, code snippet sharing, and notifications for engineering hackathons.",
    fullDescription: "Coders Club Guild Client is the native Android companion for developer communities, hackathon participants, and coding guilds. Stay synchronized with ongoing competitive programming rounds, review pull requests and code snippets on mobile-friendly syntax visualizers, track leaderboard standings, and receive push notifications when team members comment on collaborative challenges.",
    features: [
      "Live hackathon updates, contest schedules, and synchronized countdown timers",
      "Rich syntax-highlighted code snippet viewer optimized for small screens",
      "Peer review commenting and threaded discussions on community submissions",
      "Leaderboard rankings with real-time score updates and achievement badges",
      "Offline bookmarking for algorithms, cheat sheets, and guild learning modules"
    ],
    platforms: "Android (Universal)",
    currentVersion: "1.4.0",
    releaseDate: "Upcoming Q4 Release",
    releaseNotes: "Guild communication channels, mobile code snippet syntax viewer, and challenge leaderboards.",
    githubRepositoryUrl: null,
    githubReleaseUrl: null,
    apkDownloadUrl: null,
    apkFileSize: "12.8 MB",
    minimumAndroidVersion: "Android 10.0 (API 29)",
    packageIdentifier: "com.prometrion.codersclub",
    downloadAvailability: "coming_soon",
    privacyPolicyUrl: "/privacy",
    permissions: ["INTERNET", "POST_NOTIFICATIONS"],

    // Backwards-compatibility aliases
    desc: "Live hacker challenges, peer reviews, code snippet sharing, and notifications for engineering hackathons.",
    platform: "Android (Universal)",
    version: "1.4.0",
    fileSize: "12.8 MB",
    minSdk: "Android 10.0 (API 29)",
    apkUrl: null
  },
  {
    id: "edge-telemetry",
    slug: "edge-telemetry",
    name: "Edge Telemetry Monitor",
    developer: "Prometrion Infra",
    category: "Developer Tools",
    shortDescription: "Lightweight network latency tester, edge CDN health inspector, and DNS propagation diagnostic toolkit.",
    fullDescription: "Edge Telemetry Monitor gives systems engineers and network administrators a mobile diagnostic suite for validating edge delivery performance. Test TCP handshake latency, TLS negotiation times, HTTP/2 & HTTP/3 multiplexing speed, and global DNS propagation across hundreds of Anycast nodes worldwide. Diagnoses CDN cache hit ratios, SSL certificate validity, and edge hop latencies with millisecond accuracy.",
    features: [
      "Global Anycast CDN latency inspection with interactive worldwide response maps",
      "DNS propagation verification across major public and enterprise resolvers",
      "TLS cipher suite evaluation, certificate expiration alerts, and handshake timers",
      "Traceroute inspection with Autonomous System Number (ASN) identification",
      "Exportable diagnostic reports in JSON and Markdown formats"
    ],
    platforms: "Android (Universal)",
    currentVersion: "1.2.0",
    releaseDate: "Upcoming Q4 Release",
    releaseNotes: "Global edge node ping testing, traceroute maps, and TLS handshake metrics.",
    githubRepositoryUrl: null,
    githubReleaseUrl: null,
    apkDownloadUrl: null,
    apkFileSize: "9.4 MB",
    minimumAndroidVersion: "Android 9.0 (API 28)",
    packageIdentifier: "com.prometrion.telemetry",
    downloadAvailability: "coming_soon",
    privacyPolicyUrl: "/privacy",
    permissions: ["INTERNET", "ACCESS_NETWORK_STATE"],

    // Backwards-compatibility aliases
    desc: "Lightweight network latency tester, edge CDN health inspector, and DNS propagation diagnostic toolkit.",
    platform: "Android (Universal)",
    version: "1.2.0",
    fileSize: "9.4 MB",
    minSdk: "Android 9.0 (API 28)",
    apkUrl: null
  },
  {
    id: "cloud-vault",
    slug: "cloud-vault",
    name: "Prometrion Cloud Vault",
    developer: "Prometrion Security",
    category: "Security & Utilities",
    shortDescription: "Zero-knowledge encrypted client secrets and environment variable manager with automatic biometric unlocking.",
    fullDescription: "Prometrion Cloud Vault provides developers with a secure mobile repository for managing deployment secrets, API tokens, and environment variables. Secrets are encrypted client-side using AES-256-GCM before ever leaving the device. With Android biometric unlocking, engineers can quickly copy scoped API keys for emergency production triage or rotate credentials without exposing raw keys over unencrypted channels.",
    features: [
      "Client-side AES-256-GCM encryption with keys rooted in the device hardware enclave",
      "Environment variable workspace organization (Production, Staging, Development)",
      "Biometric authorization required on every secret reveal or clipboard copy",
      "Automatic clipboard wiping after 30 seconds to prevent credential leakage",
      "Audit trail logging of every access event with tamper-evident hashing"
    ],
    platforms: "Android (arm64-v8a)",
    currentVersion: "1.0.8",
    releaseDate: "Upcoming Q4 Release",
    releaseNotes: "Hardware keystore encryption, cross-device sync, and biometric passkeys.",
    githubRepositoryUrl: null,
    githubReleaseUrl: null,
    apkDownloadUrl: null,
    apkFileSize: "11.1 MB",
    minimumAndroidVersion: "Android 10.0 (API 29)",
    packageIdentifier: "com.prometrion.cloudvault",
    downloadAvailability: "coming_soon",
    privacyPolicyUrl: "/privacy",
    permissions: ["USE_BIOMETRIC", "INTERNET"],

    // Backwards-compatibility aliases
    desc: "Zero-knowledge encrypted client secrets and environment variable manager with automatic biometric unlocking.",
    platform: "Android (arm64-v8a)",
    version: "1.0.8",
    fileSize: "11.1 MB",
    minSdk: "Android 10.0 (API 29)",
    apkUrl: null
  }
];

// Helper Functions
export function getAppBySlug(slug: string): AppstoreApp | undefined {
  return appstoreApps.find((app) => app.slug === slug || app.id === slug);
}

export function getAllAppSlugs(): string[] {
  return appstoreApps.map((app) => app.slug);
}

export function getAppsByCategory(category: string): AppstoreApp[] {
  return appstoreApps.filter((app) => app.category.toLowerCase() === category.toLowerCase());
}

export function getAppDownloadAvailability(app: AppstoreApp): "available" | "release_only" | "coming_soon" {
  if (app.apkDownloadUrl) return "available";
  if (app.githubReleaseUrl) return "release_only";
  return app.downloadAvailability || "coming_soon";
}
