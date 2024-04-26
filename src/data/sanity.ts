import { StatusPageInfo } from "../types";

export const name = "Sanity";

export const statusPageUrl = "https://www.sanity-status.com/";

export const domains = ["sanity.io", "*.sanity.io"];

export const isServiceDefunct = false;

export const sanityStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
