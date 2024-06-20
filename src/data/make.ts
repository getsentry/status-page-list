import { StatusPageInfo } from "../types";

export const name = "Make";

export const statusPageUrl = "https://status.make.com/";

export const domains = ["make.com", "*.make.com", "*.make.celonis.com"];

export const isServiceDefunct = false;

export const makeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
