import { StatusPageInfo } from "../types";

export const name = "Grammarly";

export const statusPageUrl = "https://status.grammarly.com/";

export const domains = ["grammarly.com", "*.grammarly.com"];

export const isOperational = true;

export const grammarlyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
