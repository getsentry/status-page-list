import { StatusPageInfo } from "../types";

export const name = "Apple Developer";

export const statusPageUrl = "https://developer.apple.com/system-status/";

export const domains = ["*.apple.com"];

export const isServiceDefunct = false;

export const appleDeveloperStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
