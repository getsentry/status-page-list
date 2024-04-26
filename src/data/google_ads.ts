import { StatusPageInfo } from "../types";

export const name = "Google Ads";

export const statusPageUrl = "https://ads.google.com/status/publisher/";

export const domains = [
  "ads.google.com",
  "googleads.googleapis.com",
  "google-analytics.com",
  "*.google-analytics.com",
  "doubleclick.net",
  "*.doubleclick.net",
  "googleadservices.com",
  "*.googleadservices.com",
  "marketingplatform.google.com",
];

export const isServiceDefunct = false;

export const googleAdsStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
