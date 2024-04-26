import { StatusPageInfo } from "../types";

export const name = "New Relic";

export const statusPageUrl = "https://status.newrelic.com/";

export const domains = [
  "newrelic.com",
  "*.newrelic.com",
  "nr-data.net",
  "*.nr-data.net",
];

export const isServiceDefunct = false;

export const newRelicStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
