import { StatusPageInfo } from "../types";

export const name = "Braze";

export const statusPageUrl = "https://braze.statuspage.io/";

export const domains = ["braze.com", "*.braze.com"];

export const isServiceDefunct = false;

export const brazeStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
