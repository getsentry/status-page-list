import { StatusPageInfo } from "../types";

export const name = "NextRoll";

export const statusPageUrl = "https://status.nextroll.com/";

export const domains = [
  "nextroll.com",
  "*.nextroll.com",
  "rollworks.com",
  "*.rollworks.com",
  "adroll.com",
  "*.adroll.com",
];

export const isServiceDefunct = false;

export const nextRollStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
