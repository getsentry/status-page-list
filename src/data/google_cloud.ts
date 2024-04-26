import { StatusPageInfo } from "../types";

export const name = "Google Cloud";

export const statusPageUrl = "https://status.cloud.google.com";

export const domains = [
  "google.internal",
  "*.google.internal",
  "googleapis.com",
  "*.googleapis.com",
  "appspot.com",
  "*.appspot.com",
  "cloudidentity.googleapis.com",
  "storage.googleapis.com",
  "*.storage.googleapis.com",
  "bigquery.googleapis.com",
  "*.bigquery.googleapis.com",
  "storage.googleapis.com",
  "*.storage.googleapis.com",
  "oauth2.googleapis.com",
  "*.oauth2.googleapis.com",
];

export const isServiceDefunct = false;

export const googleCloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
