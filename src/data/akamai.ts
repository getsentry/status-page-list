import { StatusPageInfo } from "../types";

export const name = "Akamai";

export const statusPageUrl = "https://www.akamaistatus.com/";

export const domains = ["akamai.com", "*.akamai.com"];

export const isServiceDefunct = false;

export const akamaiStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
