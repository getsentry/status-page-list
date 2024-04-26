import { StatusPageInfo } from "../types";

export const name = "PagerDuty";

export const statusPageUrl = "https://status.pagerduty.com/";

export const domains = ["pagerduty.com", "*.pagerduty.com"];

export const isServiceDefunct = false;

export const pagerDutyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
