import { StatusPageInfo } from "../types";

export const name = "Sentry";

export const statusPageUrl = "https://status.sentry.io/";

export const domains = [
  "sentry.io",
  "*.sentry.io",
  "sentry.dev",
  "*.sentry.dev",
  "getsentry.net",
  "*.getsentry.net",
  "sentry-cdn.com",
  "*.sentry-cdn.com",
];

export const isServiceDefunct = false;

export const sentryStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
