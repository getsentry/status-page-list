import { StatusPageInfo } from "../types";

export const name = "Klarna";

export const statusPageUrl = "https://status.klarna.com/";

export const domains = ["klarna.com", "*.klarna.com"];

export const isServiceDefunct = false;

export const klarnaStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isServiceDefunct,
};
