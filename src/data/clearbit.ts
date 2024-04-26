import { StatusPageInfo } from "../types";

export const name = "Clearbit";

export const statusPageUrl = "https://status.clearbit.com/";

export const domains = ["clearbit.com", "*.clearbit.com"];

export const isServiceDefunct = false;

export const clearbitStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
