import { StatusPageInfo } from "../types";

export const name = "Pleo";

export const statusPageUrl = "https://status.pleo.io/";

export const domains = ["pleo.io", "*.pleo.io"];

export const isServiceDefunct = false;

export const pleoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
