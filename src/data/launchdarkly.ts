import { StatusPageInfo } from "../types";

export const name = "LaunchDarkly";

export const statusPageUrl = "https://status.launchdarkly.com/";

export const domains = ["launchdarkly.com", "*.launchdarkly.com"];

export const isServiceDefunct = false;

export const launchDarklyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
