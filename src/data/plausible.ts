import { StatusPageInfo } from "../types";

export const name = "Plausible";

export const statusPageUrl = "https://status.plausible.io/";

export const domains = ["plausible.io", "*.plausible.io"];

export const isServiceDefunct = false;

export const plausibleStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
