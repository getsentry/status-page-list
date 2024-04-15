import { StatusPageInfo } from "../types";

export const name = "Sentry";

export const statusPageUrl = "https://status.sentry.io/";

export const domains = ["sentry.io", "*.sentry.io"];

export const isServiceDefunct = false;

export const sentryStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
