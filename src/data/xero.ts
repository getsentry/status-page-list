import { StatusPageInfo } from "../types";

export const name = "Xero";

export const statusPageUrl = "https://status.xero.com/";

export const domains = ["xero.com", "*.xero.com"];

export const isOperational = true;

export const xeroStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
