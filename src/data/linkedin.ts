import { StatusPageInfo } from "../types";

export const name = "LinkedIn";

export const statusPageUrl = "https://www.linkedin-status.com/";

export const domains = ["linkedin.com", "*.linkedin.com"];

export const isServiceDefunct = false;

export const linkedInStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
