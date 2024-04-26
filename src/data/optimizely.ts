import { StatusPageInfo } from "../types";

export const name = "Optimizely";

export const statusPageUrl = "https://status.optimizely.com/";

export const domains = ["optimizely.com", "*.optimizely.com"];

export const isServiceDefunct = false;

export const optimizelyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
