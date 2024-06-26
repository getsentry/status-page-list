import { StatusPageInfo } from "../types";

export const name = "Intercom";

export const statusPageUrl = "https://www.intercomstatus.com/";

export const domains = ["intercom.com", "intercom.io", "*.intercom.io"];

export const isServiceDefunct = false;

export const intercomStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
