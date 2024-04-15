import { StatusPageInfo } from "../types";

export const name = "Skype";

export const statusPageUrl = "https://support.skype.com/en/status/";

export const domains = ["skype.com", "*.skype.com"];

export const isServiceDefunct = false;

export const skypeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
