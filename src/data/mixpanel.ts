import { StatusPageInfo } from "../types";

export const name = "Mixpanel";

export const statusPageUrl = "https://www.mixpanelstatus.com/";

export const domains = ["mixpanel.com", "*.mixpanel.com"];

export const isServiceDefunct = false;

export const mixpanelStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
