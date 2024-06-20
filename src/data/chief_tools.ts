import { StatusPageInfo } from "../types";

export const name = "Chief Tools";

export const statusPageUrl = "https://status.chief.tools/";

export const domains = [
  "chief.app",
  "*.chief.app",
  "chief.tools",
  "*.chief.tools",
  "bill.do",
  "pkgtrends.app",
  "tny.app",
];

export const isServiceDefunct = false;

export const chiefToolsStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
