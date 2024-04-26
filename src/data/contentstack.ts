import { StatusPageInfo } from "../types";

export const name = "Contentstack";

export const statusPageUrl = "https://status.contentstack.com/";

export const domains = ["contextstack.com", "*.contentstack.com"];

export const isServiceDefunct = false;

export const contentstackStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
