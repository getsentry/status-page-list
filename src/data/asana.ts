import { StatusPageInfo } from "../types";

export const name = "Asana";

export const statusPageUrl = "https://status.asana.com/";

export const domains = ["asana.com", "*.asana.com"];

export const isServiceDefunct = false;

export const asanaStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
