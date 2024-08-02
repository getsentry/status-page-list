import { StatusPageInfo } from "../types";

export const name = "Jotform";

export const statusPageUrl = "https://status.jotform.com/";

export const domains = ["jotform.com", "*.jotform.com"];

export const isServiceDefunct = false;

export const jotformStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
