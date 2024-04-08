import { StatusPageInfo } from "../types";

export const name = "Crowdin";

export const statusPageUrl = "https://status.crowdin.com/";

export const domains = ["crowdin.com", "*.crowdin.com"];

export const isOperational = true;

export const crowdinStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
