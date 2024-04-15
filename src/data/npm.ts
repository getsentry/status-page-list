import { StatusPageInfo } from "../types";

export const name = "npm";

export const statusPageUrl = "https://status.npmjs.org/";

export const domains = ["npmjs.org", "*.npmjs.org"];

export const isServiceDefunct = false;

export const npmStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
