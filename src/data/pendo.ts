import { StatusPageInfo } from "../types";

export const name = "Pendo";

export const statusPageUrl = "https://status.pendo.io/";

export const domains = ["pendo.io", "*.pendo.io"];

export const isServiceDefunct = false;

export const pendoStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
