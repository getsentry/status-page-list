import { StatusPageInfo } from "../types";

export const name = "Google Cloud";

export const statusPageUrl = "https://status.cloud.google.com";

export const domains = ["googleapis.com", "*.googleapis.com"];

export const isServiceDefunct = false;

export const googleCloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
