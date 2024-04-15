import { StatusPageInfo } from "../types";

export const name = "Pinterest";

export const statusPageUrl = "https://www.pintereststatus.com/";

export const domains = ["pinterest.com", "*.pinterest.com"];

export const isServiceDefunct = false;

export const pinterestStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
