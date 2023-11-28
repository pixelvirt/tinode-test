import { KNOWN_HOSTS, DEFAULT_HOST } from "../config.js";

// Detect server address from the URL
export function detectServerAddress() {
    let host = DEFAULT_HOST;
    return host;
}

// Detect if the page is served over HTTPS.
export function isSecureConnection() {
  return true;
  if (typeof window.location == "object") {
    return window.location.protocol == "https:";
  }
    return false;
}

export function isLocalHost() {
    if (typeof window.location == "object") {
        return window.location.hostname == "localhost";
    }
    return false;
}
