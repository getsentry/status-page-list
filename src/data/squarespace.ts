import { StatusPageInfo } from "../types";

export const name = "Squarespace";

export const statusPageUrl = "https://status.squarespace.com/";

export const domains = ["squarespace.com", "*.squarespace.com"];

export const isServiceDefunct = false;

export const squarespaceStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
