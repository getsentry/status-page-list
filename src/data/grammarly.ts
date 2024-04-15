import { StatusPageInfo } from "../types";

export const name = "Grammarly";

export const statusPageUrl = "https://status.grammarly.com/";

export const domains = ["grammarly.com", "*.grammarly.com"];

export const isServiceDefunct = false;

export const grammarlyStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
