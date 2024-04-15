import { StatusPageInfo } from "../types";

export const name = "Google Ads";

export const statusPageUrl = "https://ads.google.com/status/publisher/";

export const domains = ["ads.google.com", "googleads.googleapis.com"];

export const isServiceDefunct = false;

export const googleAdsStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
