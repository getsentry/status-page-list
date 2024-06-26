import { StatusPageInfo } from "../types";

export const name = "BambooHR";

export const statusPageUrl = "https://status.bamboohr.com/";

export const domains = ["bamboohr.com", "*.bamboohr.com"];

export const isServiceDefunct = false;

export const bambooHrStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
