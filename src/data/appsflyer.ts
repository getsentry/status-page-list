import { StatusPageInfo } from "../types";

export const name = "Appsflyer";

export const statusPageUrl = "https://status.appsflyer.com/";

export const domains = ["appsflyer.com", "*.appsflyer.com"];

export const isServiceDefunct = false;

export const appsflyerStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
