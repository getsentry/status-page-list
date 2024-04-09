import { StatusPageInfo } from "../types";

export const name = "Microsoft Cloud";

export const statusPageUrl = "https://status.cloud.microsoft/";

export const domains = ["cloud.microsoft", "microsoft365.com"];

export const isOperational = true;

export const microsoftCloudStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
