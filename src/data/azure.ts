import { StatusPageInfo } from "../types";

export const name = "Azure";

export const statusPageUrl = "https://azure.status.microsoft/en-us/status";

export const domains = ["azure.com", "*.azure.com"];

export const isOperational = true;

export const azureStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
