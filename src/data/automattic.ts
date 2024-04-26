import { StatusPageInfo } from "../types";

export const name = "Automattic";

export const statusPageUrl = "https://automatticstatus.com/";

export const domains = [
  "automattic.com",
  "*.automattic.com",
  "gravatar.com",
  "*.gravatar.com",
  "wordpress.org",
  "*.wordpress.org",
  "wordpress.com",
  "*.wordpress.com",
];

export const isServiceDefunct = false;

export const automatticStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
