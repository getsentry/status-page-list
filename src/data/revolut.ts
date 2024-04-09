import { StatusPageInfo } from "../types";

export const name = "Revolut";

export const statusPageUrl = "https://www.revolut.com/system-status/";

export const domains = ["revolut.com", "*.revolut.com"];

export const isOperational = true;

export const revolutStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};
